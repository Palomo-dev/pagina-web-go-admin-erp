# GO Admin — Sitio web

Sitio público de GO Admin (goadmin.io): _Tu negocio, en un solo lugar._

Diseñado en Figma a partir del **Manual de marca v2.0** y construido con Next.js.

- Figma: [GO Admin — Sitio web](https://www.figma.com/design/4EZbbgItq1AK5IhS81LwRL) · páginas `01 Sistema`, `02 Componentes`, `03 Pantallas`
- Guía de diseño y equivalencias Figma ↔ código: [`design/README.md`](design/README.md)
- Países, idiomas y variables fiscales: [`docs/multipais.md`](docs/multipais.md) · guía de traducción: [`docs/guia-traduccion.md`](docs/guia-traduccion.md)
- Datos del sitio (sin conexión a la base del ERP), centro de ayuda, capacitaciones y estado del servicio: [`docs/arquitectura-plataforma-web.md`](docs/arquitectura-plataforma-web.md)

## Stack

- Next.js 14 (App Router) · React 19 · TypeScript
- next-intl: 11 mercados (idioma + país) en es, en, pt y fr, igual que el ERP
- Tailwind CSS con los tokens de marca (`tailwind.config.ts`, `app/globals.css`)
- framer-motion para las animaciones ligadas al scroll
- Inter autoalojada (`app/fonts/`), íconos Lucide con trazo 1,5 px

## Estructura

```
app/[locale]/         Rutas por mercado (/, /es-mx, /en-us…): inicio, /producto/[slug], /soluciones/[slug], /canales-digitales, /precios,
                      /integraciones, /seguridad, /soporte, /capacitaciones, /blog/[slug], /carreras,
                      /acerca-de, /privacidad, /eliminacion-datos…
components/site/      Sistema: navbar, footer, cielo, botones, planes, FAQ, héroes
components/sections/  Bloques reutilizables: FeatureGrid, PainPoints, StepList, DayTimeline, CardLinkGrid,
                      Split, CtaBand, FaqSection, mocks de producto, canales digitales, layout legal
components/home/      Secciones del inicio (hero, ¿Todo pasa por ti?, recorrido, canales, IA…)
components/illustrations/  El viajero, cohete, planeta, luna, estrella y nube (SVG en React)
components/brand/     Isotipo y firma GO Admin
lib/catalog/          Catálogos tipados: 13 productos, 8 familias de negocio, integraciones
lib/content/          Contenido de empresa (acerca de, carreras, capacitaciones, blog) y textos legales
lib/data/             Capa de acceso a datos (lee los catálogos; el sitio no se conecta a la base del ERP)
lib/site.ts           Estructura: navegación, footer, planes (COP y USD) y contacto
i18n/                 Mercados, datos fiscales por país, enrutamiento y traducción
messages/             Textos de la interfaz en es, en, pt y fr
content/              Traducciones de catálogos, empresa, blog y legal
design/               Fuentes de ilustraciones y notas del sistema de diseño
docs/                 Arquitectura de datos y proyectos satélite
```

Para agregar un producto o una solución basta con añadirlo al catálogo en `lib/catalog/`: la ruta, el menú y el footer se generan solos. Los textos están en `messages/` y `content/`; precios y rutas en `lib/site.ts`; datos por país en `i18n/markets.ts`. Verifícalos antes de publicar cambios.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Despliegue

Desplegado en Vercel.
