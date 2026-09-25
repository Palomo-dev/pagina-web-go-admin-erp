# GO Admin — Sitio web

Sitio público de GO Admin (goadmin.io): _Tu negocio, en un solo lugar._

Diseñado en Figma a partir del **Manual de marca v2.0** y construido con Next.js.

- Figma: [GO Admin — Sitio web](https://www.figma.com/design/4EZbbgItq1AK5IhS81LwRL) · páginas `01 Sistema`, `02 Componentes`, `03 Pantallas`
- Guía de diseño y equivalencias Figma ↔ código: [`design/README.md`](design/README.md)

## Stack

- Next.js 14 (App Router) · React 19 · TypeScript
- Tailwind CSS con los tokens de marca (`tailwind.config.ts`, `app/globals.css`)
- framer-motion para las animaciones ligadas al scroll
- Inter autoalojada (`app/fonts/`), íconos Lucide con trazo 1,5 px

## Estructura

```
app/                  Rutas. Inicio, /precios, /soporte, /contacto, /modulos, /industrias…
components/site/      Sistema: navbar, footer, cielo, botones, planes, FAQ, héroes
components/home/      Secciones del inicio (hero, ¿Todo pasa por ti?, recorrido, IA…)
components/illustrations/  El viajero, cohete, planeta, luna, estrella y nube (SVG en React)
components/brand/     Isotipo y firma GO Admin
lib/site.ts           Contenido: navegación, módulos, industrias, planes, soporte, FAQ, contacto
design/               Fuentes de ilustraciones y notas del sistema de diseño
```

Los textos comerciales (precios, horarios, canales) viven en `lib/site.ts`. Verifícalos antes de publicar cambios.

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
