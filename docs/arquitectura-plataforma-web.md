# Arquitectura de la plataforma web de GO Admin

Plan para conectar el sitio público con el ERP y organizar el centro de ayuda, las capacitaciones y el estado del servicio.

Estado: **propuesta**. Nada de lo descrito en las secciones 3 a 6 está aplicado todavía. El SQL es un borrador para revisar y aplicar como migración en el repositorio del ERP.

---

## 1. Resumen de decisiones

| Tema | Recomendación | Por qué |
| --- | --- | --- |
| Base de datos del sitio | **No agregar Neon.** Usar el mismo proyecto Supabase del ERP (`Go Admin ERP`, Postgres 15) con un esquema nuevo `web`. | El ERP ya tiene planes, integraciones, testimonios y el CRM. Otra base obligaría a sincronizar planes y a reenviar leads al ERP. |
| Acceso desde el sitio | Solo desde el servidor de Next.js (Server Components y Route Handlers), leyendo **vistas** de `web` y escribiendo por **funciones RPC**. | El navegador nunca toca la base. Las tablas del ERP no quedan expuestas. |
| Leads del formulario de contacto | Entran al **CRM de la organización GO Admin dentro del mismo ERP**. | El equipo comercial usa GO Admin para vender GO Admin. |
| Blog | MDX en este repositorio. Un CMS solo cuando escriban personas que no usan git. | Sin costo ni infraestructura adicional. |
| Centro de ayuda | **Proyecto aparte:** `ayuda.goadmin.io`, con Fumadocs (Next.js + MDX) o Mintlify. | Tiene otro ritmo de publicación, otros autores, búsqueda propia y muchas capturas. |
| Capacitaciones | Página `/capacitaciones` en este sitio y sesiones en `web.trainings`. Las grabaciones van en la sección Academia de `ayuda.goadmin.io`. | La inscripción es marketing; el contenido es documentación. |
| Estado del servicio | **Servicio externo** en `estado.goadmin.io` (Better Stack, Instatus u OpenStatus). | Debe seguir en línea cuando la infraestructura propia falle. |

---

## 2. Mapa de dominios y proyectos

```
goadmin.io                → este repositorio (sitio público, Next.js en Vercel)
app.goadmin.io            → ERP (Next.js + Supabase)
*.goadmin.io y dominios   → sitios, tiendas y reservas de cada organización
  propios de clientes        (organization_domains, website_settings, website_pages)
ayuda.goadmin.io          → centro de ayuda y documentación (repositorio nuevo)
ayuda.goadmin.io/api      → referencia de la API (OpenAPI) en el mismo proyecto de ayuda
estado.goadmin.io         → página de estado (servicio externo)
```

Los tres proyectos web comparten los tokens de marca: colores, Inter e íconos. Conviene extraer `tailwind.config.ts` y `components/brand` a un paquete interno (`@goadmin/brand`) cuando exista el segundo proyecto.

---

## 3. Base de datos: Supabase con esquema `web`

### 3.1 ¿Por qué no Neon?

Neon es un buen Postgres serverless con ramas por preview. Tendría sentido si el sitio necesitara **aislamiento total** del ERP.

El sitio necesita sobre todo datos que **ya viven en el ERP**:

| Dato del sitio | Ya existe en el ERP |
| --- | --- |
| Planes y precios | `public.plans` (`price_cop_month`, `price_cop_year`, `trial_days`, `max_users`, `max_branches`, `ai_credits_monthly`, `max_invoices_monthly`) y `public.addon_pricing` |
| Integraciones | `public.integration_providers` (nombre y categoría) |
| Testimonios | `public.testimonials` (de la organización GO Admin) |
| Módulos | `public.modules` (código, nombre, descripción, orden) |
| Leads | `public.customers`, `public.opportunities`, `public.crm_events` y `public.contact_consents` del CRM |

Con Neon habría que copiar esos datos y mantenerlos sincronizados, y además enviar los leads de vuelta al ERP. Supabase también ofrece ramas de base de datos para pruebas.

**Decisión:** un esquema `web` dentro del proyecto actual, con permisos mínimos.

### 3.2 Principios de acceso

1. `web` expone **vistas de solo lectura** y **funciones RPC**. Nunca tablas del esquema `public`.
2. El sitio consulta con la llave anónima desde el servidor. En Supabase se agrega `web` a *Exposed schemas*, con `GRANT` solo sobre las vistas y funciones.
3. Las escrituras (lead, inscripción, postulación, boletín) pasan por funciones `security definer` que validan los datos y aplican límites de frecuencia. El ERP ya tiene `public.rate_limit_buckets`.
4. El formulario valida un captcha (Cloudflare Turnstile) en el Route Handler antes de llamar a la RPC.
5. Caché: las páginas se generan de forma estática con `revalidate`. Cuando cambia un plan, el ERP llama un webhook que ejecuta `revalidateTag('plans')`.

### 3.3 Borrador de migración (revisar antes de aplicar)

```sql
create schema if not exists web;

-- Organización dueña del sitio (GO Admin S.A.S. dentro del ERP)
create table web.settings (
  key text primary key,
  value jsonb not null
);
-- insert into web.settings values ('owner_organization_id', '"<uuid de GO Admin>"');

-- Vistas públicas ------------------------------------------------------------
create view web.plans_public as
  select code, name, price_cop_month, price_cop_year, trial_days,
         max_modules, max_branches, max_users, ai_credits_monthly, max_invoices_monthly, features
  from public.plans
  where is_active and not coalesce(is_custom_enterprise, false);

create view web.integrations_public as
  select name, category from public.integration_providers;

create view web.testimonials_public as
  select author_name, author_role, author_company, content, rating, sort_order
  from public.testimonials t
  where t.is_active and t.is_featured
    and t.organization_id = (select (value #>> '{}')::uuid from web.settings where key = 'owner_organization_id');

-- Contenido propio del sitio ------------------------------------------------
create table web.job_openings (
  id uuid primary key default gen_random_uuid(),
  title text not null, area text not null, location text not null, employment_type text not null,
  summary text not null, description_md text, is_open boolean not null default true,
  created_at timestamptz not null default now()
);

create table web.job_applications (
  id uuid primary key default gen_random_uuid(),
  opening_id uuid references web.job_openings(id),
  full_name text not null, email text not null, phone text, cv_url text, message text,
  created_at timestamptz not null default now()
);

create table web.trainings (
  id uuid primary key default gen_random_uuid(),
  title text not null, topic text not null, role text,          -- caja, bodega, contabilidad, administración
  starts_at timestamptz not null, duration_minutes int not null default 60,
  seats int, meeting_url text, recording_url text, is_published boolean not null default false
);

create table web.training_registrations (
  id uuid primary key default gen_random_uuid(),
  training_id uuid not null references web.trainings(id),
  full_name text not null, email text not null, organization_name text,
  created_at timestamptz not null default now(),
  unique (training_id, email)
);

create table web.newsletter_subscribers (
  email text primary key, consent_at timestamptz not null default now(), source text
);

create view web.job_openings_public as select id, title, area, location, employment_type, summary from web.job_openings where is_open;
create view web.trainings_public as select id, title, topic, role, starts_at, duration_minutes, seats from web.trainings where is_published and starts_at > now();

-- Escritura por RPC -----------------------------------------------------------
-- Lead del formulario de contacto → CRM de la organización GO Admin
create or replace function web.submit_lead(p_name text, p_email text, p_phone text, p_company text,
                                           p_industry text, p_branches text, p_message text, p_source text)
returns void language plpgsql security definer set search_path = public, web as $$
declare v_org uuid := (select (value #>> '{}')::uuid from web.settings where key = 'owner_organization_id');
begin
  -- 1) validar longitudes y formato de correo; 2) límite de frecuencia con rate_limit_buckets
  -- 3) insertar o reutilizar el cliente en public.customers (organization_id = v_org)
  -- 4) crear la oportunidad en la primera etapa del embudo comercial
  -- 5) registrar el consentimiento en public.contact_consents y el evento en public.crm_events
  -- (completar con las columnas reales de esas tablas en el repositorio del ERP)
  null;
end $$;

revoke all on all tables in schema web from anon, authenticated;
grant usage on schema web to anon;
grant select on web.plans_public, web.integrations_public, web.testimonials_public,
               web.job_openings_public, web.trainings_public to anon;
grant execute on function web.submit_lead(text,text,text,text,text,text,text,text) to anon;
-- Agregar funciones equivalentes: web.register_training, web.apply_job, web.subscribe_newsletter
```

### 3.4 Cambio en este repositorio

Toda lectura pasa por `lib/data/index.ts`. Para conectar:

1. Instalar `@supabase/supabase-js` y crear `lib/data/supabase.ts` con un cliente de servidor (`db: { schema: 'web' }`).
2. Reemplazar el cuerpo de `listPlans`, `listOpenPositions`, etc. Las páginas no cambian.
3. Cambiar el formulario de contacto (`components/support/contact-form.tsx`) para que llame a `POST /api/leads`. Ese Route Handler valida Turnstile y ejecuta `web.submit_lead`. WhatsApp queda como segunda opción.
4. Variables en Vercel: `SUPABASE_URL`, `SUPABASE_ANON_KEY` (solo servidor, sin `NEXT_PUBLIC_`), `TURNSTILE_SECRET_KEY` y `REVALIDATE_SECRET`.

---

## 4. Centro de ayuda (`ayuda.goadmin.io`)

### 4.1 ¿Por qué en otro proyecto?

- Lo escriben personas de soporte y producto, no solo el equipo de desarrollo, con cientos de artículos y capturas.
- Necesita búsqueda, versiones, navegación lateral y referencia de API.
- Se publica varias veces al día sin volver a desplegar el sitio comercial.

### 4.2 Herramienta

| Opción | Cuándo elegirla |
| --- | --- |
| **Fumadocs** (Next.js + MDX, código abierto) | Control total, mismo stack y mismos tokens de marca, búsqueda incluida (Orama) y despliegue en Vercel. **Recomendada.** |
| Mintlify | Menos mantenimiento y editor web, con costo mensual. |
| Docusaurus | Si se prefiere React sin Next.js. |

### 4.3 Estructura

```
Primeros pasos      → crear la cuenta, sedes y usuarios, impuestos, importar datos
Ventas y POS        → abrir y cerrar caja, vender, cobrar, devoluciones
Facturación         → habilitación DIAN, resolución, factura, notas, documento soporte, errores comunes
Inventario          → productos y variantes, compras, traslados, conteos
Contabilidad        → plan de cuentas, cartera, bancos, cierre de mes
Nómina              → empleados, turnos, novedades, liquidación
Clientes y chat     → CRM, embudos, WhatsApp, asistente IA
Canales digitales   → página web, dominio propio, tienda, reservas
Hotelería           → habitaciones, tarifas, channel manager
Academia            → rutas por rol y grabaciones de capacitaciones
Novedades           → cambios del producto (changelog)
API                 → autenticación, recursos y webhooks (OpenAPI)
```

### 4.4 Plantilla de artículo

1. **Qué vas a lograr:** una frase.
2. **Antes de empezar:** permisos y configuración previa.
3. **Pasos numerados:** una acción por paso y una captura por paso, con el elemento resaltado.
4. **Resultado esperado:** cómo sabes que quedó bien.
5. **Si algo sale mal:** errores frecuentes y su solución.
6. **Relacionados:** dos o tres artículos.

Ejemplo de índice para *Crear una factura electrónica*:

1. Abre **Finanzas › Facturas de venta** y pulsa **Nueva factura**.
2. Elige el cliente. Si no existe, créalo con su tipo y número de identificación.
3. Agrega productos o servicios. Los impuestos se calculan según la configuración.
4. Revisa el total y pulsa **Emitir**.
5. Espera el estado **Aceptada**. Si aparece **Rechazada**, lee el mensaje y corrige.
6. Envía o descarga el PDF y el XML.

### 4.5 Capturas que no se desactualizan

- Una **organización de demostración** en el ERP, con datos ficticios (nunca datos de clientes).
- Scripts de **Playwright** en el repositorio de ayuda que abren cada pantalla, resaltan el elemento y guardan la captura con nombre estable (`facturacion/crear-factura-03.png`).
- Un flujo de CI que regenera las capturas cuando cambia la interfaz y abre un pull request con las diferencias.

### 4.6 Conexión con el ERP

- La tabla `organization_module_pages` ya mapea rutas del ERP. Se agrega una columna `help_url` o un JSON de rutas a artículos, y el ERP muestra un botón **Ayuda** contextual en cada pantalla.
- Los reportes de problemas del ERP (`problem_reports`) pueden sugerir artículos antes de enviarse.

---

## 5. Capacitaciones

- **Sitio (`/capacitaciones`):** formatos y rutas por rol (ya construido). Próximo paso: listar `web.trainings_public` e inscribir con `web.register_training`.
- **Recordatorios:** el ERP ya tiene notificaciones por correo y WhatsApp (`notification_templates`, `delivery_logs`). La inscripción puede disparar la plantilla de recordatorio.
- **Grabaciones:** van en la sección Academia de `ayuda.goadmin.io`, organizadas por rol, con el video embebido y la guía escrita debajo.

---

## 6. Estado del servicio (`estado.goadmin.io`)

- **Dónde:** fuera de la infraestructura propia. Si Vercel o Supabase fallan, la página de estado debe seguir respondiendo.
- **Qué monitorear:**
  - `app.goadmin.io`: inicio de sesión y API.
  - Base de datos (endpoint de salud).
  - Facturación electrónica: proveedor de validación ante la DIAN.
  - Pasarelas de pago principales.
  - Sitios de clientes (`*.goadmin.io`).
  - Envío de correos y WhatsApp.
- **Proceso:**
  - Los incidentes se publican con estados *Investigando › Identificado › Monitoreando › Resuelto*.
  - Hay mantenimientos programados.
  - Los clientes se suscriben por correo.
- **Enlaces:** en el pie de este sitio, en `/soporte` y en el menú de ayuda del ERP.
- **Proveedores:**
  - Better Stack: monitoreo y página en un solo lugar.
  - Instatus: página simple.
  - OpenStatus: código abierto, se puede alojar en otra nube.

---

## 7. Fases sugeridas

| Fase | Entregable |
| --- | --- |
| 1 | Esquema `web` con vistas de planes, integraciones y testimonios. El sitio lee planes desde el ERP con revalidación. |
| 2 | `POST /api/leads` con Turnstile y `web.submit_lead` hacia el CRM de GO Admin. |
| 3 | Proyecto `ayuda.goadmin.io` con Fumadocs: primeros pasos, facturación, ventas e inventario, con capturas automatizadas. |
| 4 | Página de estado externa con monitores y enlaces desde el sitio y el ERP. |
| 5 | Vacantes, capacitaciones e inscripciones desde `web`; botón de ayuda contextual en el ERP. |
