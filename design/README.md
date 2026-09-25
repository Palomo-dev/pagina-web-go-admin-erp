# Sistema de diseño del sitio

Archivo de Figma: **GO Admin — Sitio web** — https://www.figma.com/design/4EZbbgItq1AK5IhS81LwRL

Base: _GO Admin — Manual de marca v2.0_ (septiembre 2026) y la estructura del sistema de diseño del ERP
(`GO Admin — Sistema de diseño`).

## Páginas de Figma

| Página | Contenido |
| --- | --- |
| `01 Sistema` | Portada, color (variables), tipografía (estilos de texto), retícula y espaciado, radios y elevación, marca y favicon, recursos gráficos, ilustración, movimiento, arquitectura de información y voz |
| `02 Componentes` | Fundamentos (71 íconos, isotipo, firma, ilustraciones con variantes Claro/Azul/Tinta), átomos (Button, Eyebrow, NavLink, LinkArrow, Tag, IntegrationPill), moléculas (Navbar, MegaMenu, SectionHeader, FeatureCard, IndustryCard, ModuleStop, ChatBubble, TrustItem, StepItem, SupportCard, FAQItem, BillingToggle, PricingCard) y organismos (Fondo/Cielo, DashboardMock, Footer). Sección **Secciones web**: PainPoint, DayMoment, CardLink, ChannelTabs (Página web / Tienda en línea / Motor de reservas), DomainPill y LegalTOC; **MarketSwitcher** (Tono Cielo/Claro/Noche) y su diálogo de país e idioma |
| `03 Pantallas` | 30 pantallas, una por página del sitio, y el aviso de cookies: Inicio (escritorio y móvil), Producto (índice), Producto · Inventario, Producto · Facturación electrónica y su variante México (cómo cambia por país), Soluciones (índice), Solución · Restaurantes, bares y cafés, Canales digitales, Precios, Integraciones, Seguridad, Soporte, Capacitaciones, Contacto, Blog, Blog · Artículo, Carreras, Acerca de, API, Privacidad, Eliminación de datos, Términos y condiciones, Política de cookies, Aliados, Casos de clientes, Novedades, Países, País · México (plantilla de /paises/[país]) y 404 |

## Equivalencias Figma ↔ código

| Figma | Código |
| --- | --- |
| Variables `brand/*`, `text/*`, `bg/*`, `night/*` | `tailwind.config.ts` → `go.*`, `ink.*`, `night.*` |
| Estilos de texto `Display/*`, `Heading/*`, `Body/*` | `text-display-*`, `text-h2…h4`, `text-lead`, `text-eyebrow` |
| Efectos `shadow/sm…float` | `shadow-sm…shadow-float` |
| Marca/Isotipo, Marca/Firma | `components/brand/logo.tsx` |
| Ilustración/* (Claro/Azul/Tinta) | `components/illustrations/art.tsx` con `tone="light" \| "blue" \| "ink"` |
| Fondo/Cielo (Día/Noche) | `components/site/sky.tsx` |
| Button, Eyebrow, SectionHeader, Tag, LinkArrow | `components/site/primitives.tsx` |
| Navbar, MegaMenu, NavbarMóvil | `components/site/navbar.tsx` |
| PricingCard + BillingToggle | `components/site/pricing.tsx` |
| FAQItem | `components/site/faq.tsx` |
| SupportCard | `components/site/support-cards.tsx` |
| ModuleStop | `components/home/journey.tsx` |
| DashboardMock | `components/site/dashboard-mock.tsx` |
| Footer | `components/site/footer.tsx` |
| PainPoint, DayMoment, CardLink, StepItem | `components/sections/blocks.tsx` (`PainPoints`, `DayTimeline`, `CardLinkGrid`, `StepList`) |
| ChannelTabs, DomainPill | `components/sections/channels-showcase.tsx` |
| Mock de producto (tabla, factura, POS…) | `components/sections/product-mock.tsx` |
| LegalTOC | `components/sections/legal-layout.tsx` |
| MarketSwitcher | `components/site/market-switcher.tsx` (países e idiomas en `i18n/markets.ts`) |
| Tabla de facturación por país | `components/sections/fiscal-countries.tsx` |

## Ilustraciones

El viajero es un personaje **original**: inspirado en el espíritu de _El Principito_ (curiosidad, cuidado,
pequeños mundos) pero dibujado desde cero. No usar la rosa, el zorro, la boa, la corona de estrellas, citas
ni dibujos de la obra original: están protegidos por derechos de autor y marca.

Las plantillas están en `design/illustrations-src/*.tpl.svg`. Para regenerar:

```bash
python3 design/illustrations-src/build.py    # SVG por fondo en public/illustrations/
python3 design/illustrations-src/to_tsx.py   # componentes React en components/illustrations/art.tsx
```

## Movimiento

- Duraciones: 200 ms (hover, foco), 320 ms (entradas), 480 ms (trazos, planetas).
- Curva: `cubic-bezier(.2,.8,.2,1)`; escalonado de 80 ms.
- Escenas ligadas al scroll: cohete que despega y captura que se endereza (hero), nudo que se desata
  (¿Todo pasa por ti?), recorrido horizontal fijado por los planetas, pregunta que se escribe sola (IA).
- `prefers-reduced-motion`: todo se muestra estático.

## Pendientes antes de publicar

- Confirmar horario de soporte y canales en `lib/site.ts` (`CONTACT`).
- Confirmar si los precios incluyen IVA.
- Reemplazar las iniciales de integraciones por logos oficiales con autorización.
- Enlaces de redes sociales en `components/site/footer.tsx`.
- La política de privacidad conserva el texto legal anterior, que menciona certificaciones (SOC 2, ISO 27001)
  y cifrado de extremo a extremo: validar con el área legal antes de publicar.
- Las páginas API, novedades y centro de ayuda heredadas conservan su contenido; revisar sus cifras contra fuentes verificables.
