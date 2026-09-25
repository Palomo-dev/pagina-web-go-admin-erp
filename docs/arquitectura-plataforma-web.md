# Arquitectura de la plataforma web de GO Admin

Cómo se organizan los datos del sitio público, el centro de ayuda, las capacitaciones y el estado del servicio.

**Decisión:** el sitio público **no se conecta a la base de datos del ERP** (Supabase del proyecto GO Admin ERP), ni para leer ni para escribir. Tampoco usa otra base de datos (Neon u otra). Todo su contenido vive en este repositorio.

Estado de las secciones 4 a 6: **propuesta**, nada aplicado todavía.

---

## 1. Resumen de decisiones

| Tema | Recomendación | Por qué |
| --- | --- | --- |
| Base de datos del sitio | **Ninguna.** Sin conexión con el Supabase del ERP y sin Neon. Contenido tipado en `lib/catalog/` y `lib/content/`. | El sitio queda aislado del ERP: una falla o un cambio en uno no afecta al otro, y no hay credenciales del ERP en el sitio. |
| Precios y planes | En `lib/site.ts` (`PLANS`). Se actualizan a mano cuando cambian en el ERP. | Cambian pocas veces al año; un pull request es suficiente. |
| Formulario de contacto | Arma el mensaje y lo abre en **WhatsApp o en el correo** (ya construido). | Ningún mensaje se pierde y no hace falta backend. |
| Blog | MDX en este repositorio. Un CMS solo cuando escriban personas que no usan git. | Sin costo ni infraestructura adicional. |
| Centro de ayuda | **Proyecto aparte:** `ayuda.goadmin.io`, con Fumadocs (Next.js + MDX) o Mintlify. | Tiene otro ritmo de publicación, otros autores, búsqueda propia y muchas capturas. |
| Capacitaciones | Página `/capacitaciones` en este sitio, con agendamiento por WhatsApp. Las grabaciones van en la sección Academia de `ayuda.goadmin.io`. | La inscripción es marketing; el contenido es documentación. |
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

## 3. Datos del sitio: sin base de datos

### 3.1 Dónde vive cada contenido

| Contenido | Archivo |
| --- | --- |
| Productos (13) y canales digitales | `lib/catalog/products.ts` |
| Soluciones por tipo de negocio (8 familias) | `lib/catalog/solutions.ts` |
| Integraciones | `lib/catalog/integrations.ts` |
| Planes, navegación, soporte y contacto | `lib/site.ts` |
| Acerca de, carreras, capacitaciones y blog | `lib/content/company.ts` |
| Privacidad y eliminación de datos | `lib/content/legal.ts` |

Las páginas leen todo a través de `lib/data/index.ts`. Si algún día se quiere cambiar la fuente (por ejemplo, MDX para el blog o un CMS), se cambia solo ese archivo.

### 3.2 Reglas

- No instalar `@supabase/supabase-js` ni guardar URL o llaves del ERP en las variables de Vercel de este proyecto.
- No consultar la API del ERP desde el sitio. Si un dato del ERP debe aparecer en el sitio (por ejemplo, un precio nuevo), se copia al catálogo con un pull request.
- Los formularios no guardan datos: abren WhatsApp o el correo con el mensaje armado.
- Si más adelante se necesita recibir formularios sin salir de la página, usar un servicio de correo transaccional desde un Route Handler, sin base de datos y sin tocar el ERP.

### 3.3 Por qué no Neon ni otra base

El sitio no tiene datos propios que cambien a diario: productos, soluciones, planes y artículos cambian con poca frecuencia y se revisan antes de publicar. Una base de datos añadiría costo, credenciales y un punto de falla sin beneficio.

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

- **Sitio (`/capacitaciones`):** formatos y rutas por rol (ya construido). Las sesiones se agendan por WhatsApp; si se publican fechas, se agregan en `lib/content/company.ts`.
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
| 1 | Proyecto `ayuda.goadmin.io` con Fumadocs: primeros pasos, facturación, ventas e inventario, con capturas automatizadas. |
| 2 | Página de estado externa con monitores y enlaces desde el sitio y el ERP. |
| 3 | Botón de ayuda contextual en el ERP que abre el artículo de cada pantalla. |
| 4 | Blog en MDX dentro de este repositorio, si el volumen de artículos lo justifica. |
