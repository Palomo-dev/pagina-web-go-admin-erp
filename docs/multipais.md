# Sitio multipaís e multilenguaje

GO Admin opera en **10 países** y **4 idiomas** (los mismos del ERP: `messages/{es,en,pt,fr}.json`
con next-intl). El sitio replica esa estructura sin conectarse a la base de datos del ERP.

## Mercados

Un mercado es idioma + país. Cada uno tiene su URL, su moneda de planes y sus datos fiscales.

| Mercado | URL | País | Planes | Facturación electrónica en GO Admin |
| --- | --- | --- | --- | --- |
| es-CO | `/` | Colombia | COP | Conectada (DIAN, vía proveedor tecnológico) |
| es-MX | `/es-mx` | México | USD | SAT (CFDI 4.0): no conectada todavía |
| es-CL | `/es-cl` | Chile | USD | SII (DTE): no conectada todavía |
| es-ES | `/es-es` | España | USD | Agencia Tributaria (Verifactu): no conectada todavía |
| pt-BR | `/pt-br` | Brasil | USD | SEFAZ (NF-e, NFC-e, NFS-e): no conectada todavía |
| en-US | `/en-us` | Estados Unidos | USD | Sin sistema nacional obligatorio |
| en-CA / fr-CA | `/en-ca`, `/fr-ca` | Canadá | USD | Sin sistema nacional obligatorio |
| en-GB | `/en-gb` | Reino Unido | USD | HMRC (Making Tax Digital): no conectada todavía |
| en-AU | `/en-au` | Australia | USD | ATO (eInvoicing/Peppol): no conectada todavía |
| en-JP | `/en-jp` | Japón | USD | Facturas calificadas (NTA): no conectada todavía |

Fuente de los datos: tablas `countries`, `country_identification_types`, `country_payment_methods`,
`tax_templates`, `plans` y `electronic_invoicing_config` del ERP (consultadas en modo lectura).
Solo Colombia tiene proveedor de facturación electrónica configurado.

## Cómo se elige el mercado

1. Si la URL tiene prefijo (`/es-mx/...`), manda la URL.
2. Primera visita sin prefijo: si el país del visitante (encabezado `x-vercel-ip-country`) es uno
   de los 10, va a su mercado. Un visitante en Colombia se queda en `/` aunque su navegador esté en
   otro idioma.
3. Si no, decide el idioma del navegador (next-intl).
4. La elección queda en la cookie `GOADMIN_MARKET`. El selector de país e idioma está en la navbar
   y en el pie de página.

## Dónde vive cada cosa

| Qué | Archivo |
| --- | --- |
| Países, autoridad tributaria, impuestos, identificación, medios de pago, moneda | `i18n/markets.ts` |
| Enrutamiento y detección | `i18n/routing.ts`, `middleware.ts` |
| Textos cortos de la interfaz | `messages/{es,en,pt,fr}.json` |
| Catálogos, empresa, blog y legal traducidos | `content/{en,pt,fr}/` (fuente en español en `lib/catalog` y `lib/content`) |
| Traducción con variables fiscales | `useT()` en `i18n/t.ts`, `getT()` en `i18n/t-server.ts` |

## Variables fiscales

Los textos nunca nombran a la DIAN directamente: usan variables que se resuelven por país.

| Variable | Colombia | México | Estados Unidos |
| --- | --- | --- | --- |
| `{authority}` | DIAN | SAT | IRS |
| `{theAuthority}` | la DIAN | el SAT | el IRS |
| `{invoicing}` | Facturación electrónica | Facturación electrónica (CFDI) | Facturación |
| `{taxes}` | IVA, INC y retenciones | IVA e IEPS | sales tax |
| `{taxId}` | NIT | RFC | EIN |
| `{inCountry}` | en Colombia | en México | en Estados Unidos |
| `{einvoiceNote}` | (vacío) | aviso de conexión pendiente | aviso de sistema no obligatorio |

En los mensajes se puede decidir por estado: `{status, select, integrated {…} other {…}}` y
`{ePayroll, select, yes {…} other {…}}`.

Cuando un producto cambia por país, el catálogo usa `variants` (`noEInvoice`, `noEPayroll`) y la
capa de datos elige la variante según el mercado.

## Agregar un país

1. Agregar el país en `COUNTRIES` y el mercado en `MARKET_IDS` / `MARKETS` (`i18n/markets.ts`).
2. Si GO Admin empieza a emitir ante su autoridad, cambiar `fiscal.status` a `'integrated'`:
   toda la página de facturación, el inicio, los precios y las FAQ cambian solos.
3. Revisar integraciones con `countries` en `lib/catalog/integrations.ts`.

## Agregar un idioma

1. Copiar `messages/es.json` y traducir (ver `docs/guia-traduccion.md`).
2. Crear `content/<idioma>/` a partir de `content/fallback.ts`.
3. Agregar el idioma en `Language` y en los textos `Localized` de `i18n/markets.ts`.
