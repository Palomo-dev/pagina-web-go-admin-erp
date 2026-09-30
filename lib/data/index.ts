/**
 * Capa de acceso a datos del sitio.
 *
 * Las páginas SOLO leen a través de estas funciones. Cada una recibe el mercado (idioma + país,
 * p. ej. 'es-MX') y devuelve el contenido:
 *   1. en el idioma del mercado (texto base en español en lib/, traducciones en content/{en,pt,fr}),
 *   2. con la variante del país cuando la capacidad cambia (p. ej. facturación electrónica),
 *   3. con las variables fiscales resueltas ({theAuthority} → "la DIAN", "el SAT"…).
 *
 * Decisión: el sitio NO se conecta a la base de datos del ERP (Supabase) ni a otra base.
 * Ver docs/arquitectura-plataforma-web.md, sección 3.
 */
import { CATEGORIES, PRODUCTS, type Product, type ProductText, type ProductVariant } from '@/lib/catalog/products'
import { SOLUTIONS, type Solution, type SolutionText } from '@/lib/catalog/solutions'
import { DEVELOPER_TOOLS, INTEGRATION_GROUPS } from '@/lib/catalog/integrations'
import * as esCompany from '@/lib/content/company'
import * as esLegal from '@/lib/content/legal'
import { DESKTOP_NOTES, DESKTOP_RELEASES, DESKTOP_REPO, desktopAssetUrl, type DesktopRelease } from '@/lib/content/desktop'
import { applyFiscal, fiscalValues, getMarket, type CountryCode, type Language } from '@/i18n/markets'
import { CONTENT, type CatalogText } from '@/content'

type MarketInfo = ReturnType<typeof getMarket>

/** Reemplaza las variables fiscales en todos los textos de un objeto. */
function fiscalDeep<T>(value: T, fiscal: ReturnType<typeof fiscalValues>): T {
  if (typeof value === 'string') return applyFiscal(value, fiscal).replace(/\s{2,}/g, ' ').trim() as T
  if (Array.isArray(value)) return value.map((v) => fiscalDeep(v, fiscal)) as T
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fiscalDeep(v, fiscal)])) as T
  }
  return value
}

function catalog(language: Language): CatalogText | null {
  return language === 'es' ? null : CONTENT[language].catalog
}

// ---------------------------------------------------------------------------
// Productos
// ---------------------------------------------------------------------------
function activeVariants(m: MarketInfo): ProductVariant[] {
  const v: ProductVariant[] = []
  if (m.countryData.fiscal.status !== 'integrated') v.push('noEInvoice')
  if (!m.countryData.fiscal.ePayroll) v.push('noEPayroll')
  return v
}

function baseText(p: Product): ProductText {
  const { name, short, eyebrow, headline, lead, pains, steps, highlights, faq } = p
  return { name, short, eyebrow, headline, lead, pains, steps, highlights, faq, features: p.features.map(({ title, text }) => ({ title, text })) }
}

function localizeProduct(p: Product, m: MarketInfo): Product {
  const tr = catalog(m.language)?.products[p.slug]
  let text: ProductText = tr ?? baseText(p)
  for (const key of activeVariants(m)) {
    const patch = tr ? tr.variants?.[key] : p.variants?.[key]
    if (patch) text = { ...text, ...patch }
  }
  const t = fiscalDeep(text, fiscalValues(m.id))
  return {
    ...p,
    ...t,
    features: p.features.map((f, i) => ({ ...f, ...(t.features[i] ?? {}) })),
  }
}

export async function listProducts(locale: string) {
  const m = getMarket(locale)
  return PRODUCTS.map((p) => localizeProduct(p, m))
}
export async function findProduct(locale: string, slug: string) {
  const p = PRODUCTS.find((x) => x.slug === slug)
  return p ? localizeProduct(p, getMarket(locale)) : null
}
export async function listCategories(locale: string) {
  const m = getMarket(locale)
  const tr = catalog(m.language)?.categories
  const products = await listProducts(locale)
  return CATEGORIES.map((c) => ({ ...c, ...(tr?.[c.id] ?? {}), items: products.filter((p) => p.category === c.id) }))
}
export async function listChannels(locale: string) {
  return (await listProducts(locale)).filter((p) => p.isChannel)
}

// ---------------------------------------------------------------------------
// Soluciones
// ---------------------------------------------------------------------------
function localizeSolution(s: Solution, m: MarketInfo): Solution {
  const tr: SolutionText | undefined = catalog(m.language)?.solutions[s.slug]
  const merged: Solution = tr
    ? {
        ...s,
        ...tr,
        channel: { ...s.channel, ...tr.channel },
        features: s.features.map((f, i) => ({ ...f, ...(tr.features[i] ?? {}) })),
      }
    : s
  return fiscalDeep(merged, fiscalValues(m.id))
}

export async function listSolutions(locale: string) {
  const m = getMarket(locale)
  return SOLUTIONS.map((s) => localizeSolution(s, m))
}
export async function findSolution(locale: string, slug: string) {
  const s = SOLUTIONS.find((x) => x.slug === slug)
  return s ? localizeSolution(s, getMarket(locale)) : null
}

// ---------------------------------------------------------------------------
// Integraciones (filtradas por país)
// ---------------------------------------------------------------------------
export async function listIntegrationGroups(locale: string, country?: CountryCode) {
  const m = { ...getMarket(locale), ...(country ? { country } : {}) }
  const tr = catalog(m.language)?.integrations
  const groups = INTEGRATION_GROUPS.map((g) => ({
    ...g,
    name: tr?.groups[g.id]?.name ?? g.name,
    text: tr?.groups[g.id]?.text ?? g.text,
    items: g.items
      .filter((i) => !i.countries || i.countries.includes(m.country))
      .map((i) => ({ ...i, text: tr?.groups[g.id]?.items[i.name] ?? i.text })),
  })).filter((g) => g.items.length)
  const developer = DEVELOPER_TOOLS.map((d, i) => ({ ...d, ...(tr?.developer[i] ?? {}) }))
  return { groups, developer }
}

// ---------------------------------------------------------------------------
// Empresa, blog y legal
// ---------------------------------------------------------------------------
function company(locale: string) {
  const m = getMarket(locale)
  const c = m.language === 'es' ? esCompany : CONTENT[m.language].company
  return fiscalDeep(
    {
      ABOUT: c.ABOUT,
      POSITIONS: c.POSITIONS,
      WORK_PRINCIPLES: c.WORK_PRINCIPLES,
      HIRING_STEPS: c.HIRING_STEPS,
      TRAINING_FORMATS: c.TRAINING_FORMATS,
      LEARNING_PATHS: c.LEARNING_PATHS,
      POSTS: c.POSTS.filter((p) => !p.countries || p.countries.includes(m.country)),
      CHANGELOG: c.CHANGELOG.map((r) => ({ ...r, items: r.items.filter((i) => !i.countries || i.countries.includes(m.country)) })),
    },
    fiscalValues(locale),
  )
}

export async function getCompany(locale: string) {
  return company(locale)
}

/** Vacantes abiertas (vacío: se invita a enviar hoja de vida). */
export async function listOpenPositions(locale: string) {
  return company(locale).POSITIONS
}

export async function listPosts(locale: string) {
  return [...company(locale).POSTS].sort((a, b) => b.date.localeCompare(a.date))
}
export async function findPost(locale: string, slug: string) {
  return company(locale).POSTS.find((p) => p.slug === slug) ?? null
}
/** Novedades del producto por mes (más reciente primero), solo las que aplican al país. */
export async function listReleases(locale: string) {
  return [...company(locale).CHANGELOG].sort((a, b) => b.month.localeCompare(a.month))
}

/** Todos los slugs de artículos (para generar las rutas estáticas de cualquier mercado). */
export function allPostSlugs() {
  return esCompany.POSTS.map((p) => ({ slug: p.slug, countries: p.countries }))
}

/**
 * Textos legales. La versión en español es la que rige; en otros idiomas se muestra una
 * traducción de referencia (ver `isReferenceTranslation`).
 */
export async function getLegal(locale: string) {
  const m = getMarket(locale)
  const l = m.language === 'es' ? esLegal : CONTENT[m.language].legal
  return {
    PRIVACY: m.language === 'es' ? l.PRIVACY : esLegal.PRIVACY,
    PRIVACY_NOTICE: m.language === 'es' ? l.PRIVACY_NOTICE : esLegal.PRIVACY_NOTICE,
    DATA_DELETION: m.language === 'es' ? l.DATA_DELETION : esLegal.DATA_DELETION,
    TERMS: l.TERMS,
    COOKIES: m.language === 'es' ? l.COOKIES : esLegal.COOKIES,
    isReferenceTranslation: m.language !== 'es',
  }
}

// ---------------------------------------------------------------------------
// GO Admin para Windows: versiones publicadas
// ---------------------------------------------------------------------------
type GithubRelease = { tag_name: string; draft: boolean; prerelease: boolean; published_at: string; assets: { name: string; size: number; browser_download_url: string }[] }

/**
 * Versiones de la app de escritorio, de la más reciente a la más antigua, con su nota en el idioma
 * del mercado. Lee GitHub Releases (repositorio público, sin token) y se revalida cada hora; si
 * GitHub no responde, usa la lista guardada en lib/content/desktop.ts.
 * No es la base de datos del ERP: es la página pública de releases del instalador.
 */
export async function listDesktopReleases(locale: string): Promise<(DesktopRelease & { notes: string | null })[]> {
  const m = getMarket(locale)
  const notes = m.language === 'es' ? DESKTOP_NOTES : CONTENT[m.language].company.DESKTOP_NOTES
  let releases: DesktopRelease[] = DESKTOP_RELEASES
  try {
    const res = await fetch(`https://api.github.com/repos/${DESKTOP_REPO}/releases?per_page=50`, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
    })
    if (res.ok) {
      const data = (await res.json()) as GithubRelease[]
      const live = data
        .filter((r) => !r.draft && !r.prerelease && /^v\d+\.\d+\.\d+$/.test(r.tag_name))
        .map((r) => {
          const version = r.tag_name.slice(1)
          const asset = r.assets.find((a) => a.name === `GoAdminERP-Setup-${version}.exe`) ?? r.assets.find((a) => a.name === 'GoAdminERP-Setup.exe')
          return asset ? { version, date: r.published_at.slice(0, 10), sizeMb: Math.round(asset.size / 1048576), url: asset.browser_download_url } : null
        })
        .filter((r): r is DesktopRelease => r !== null)
      if (live.length) releases = live
    }
  } catch {
    // Sin conexión con GitHub: se muestra la lista guardada.
  }
  return releases.map((r) => ({ ...r, url: r.url || desktopAssetUrl(r.version), notes: notes[r.version] ?? null }))
}
