import type { MetadataRoute } from 'next'
import { COUNTRY_SLUGS, MARKETS, MARKET_IDS } from '@/i18n/markets'
import { PRODUCTS } from '@/lib/catalog/products'
import { SOLUTIONS } from '@/lib/catalog/solutions'
import { allPostSlugs } from '@/lib/data'
import { SITE_URL, marketPath } from '@/lib/seo'

const STATIC = ['/', '/producto', '/soluciones', '/canales-digitales', '/precios', '/integraciones', '/seguridad', '/soporte', '/capacitaciones', '/contacto', '/blog', '/carreras', '/acerca-de', '/api', '/privacidad', '/aviso-privacidad', '/eliminacion-datos', '/cookies', '/aliados', '/clientes', '/novedades', '/paises', '/descargas']
// /inversionistas no se enlaza ni se indexa: el portal es solo por invitación (Decreto 2555 de 2010).
// /terminos queda fuera mientras sea borrador (noindex).

/** Mapa del sitio con las páginas de los 11 mercados y sus versiones alternas (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...STATIC, ...PRODUCTS.map((p) => `/producto/${p.slug}`), ...SOLUTIONS.map((s) => `/soluciones/${s.slug}`), ...Object.values(COUNTRY_SLUGS).map((c) => `/paises/${c}`)]
  const entries: MetadataRoute.Sitemap = []
  for (const path of paths) {
    const languages = Object.fromEntries(MARKET_IDS.map((id) => [id, `${SITE_URL}${marketPath(path, id)}`]))
    for (const id of MARKET_IDS) entries.push({ url: `${SITE_URL}${marketPath(path, id)}`, alternates: { languages } })
  }
  // Artículos: solo en los mercados de los países donde se publican.
  for (const post of allPostSlugs()) {
    for (const id of MARKET_IDS) {
      if (post.countries && !post.countries.includes(MARKETS[id].country)) continue
      entries.push({ url: `${SITE_URL}${marketPath(`/blog/${post.slug}`, id)}` })
    }
  }
  return entries
}
