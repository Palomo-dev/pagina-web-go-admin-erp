import type { Metadata } from 'next'
import { DEFAULT_MARKET, MARKETS, MARKET_IDS, type MarketId } from '@/i18n/markets'

export const SITE_URL = 'https://goadmin.io'

/** URL de una ruta en un mercado: ('/precios', 'es-MX') → '/es-mx/precios' */
export function marketPath(path: string, market: MarketId) {
  const clean = path === '/' ? '' : path
  return `${MARKETS[market].prefix}${clean}` || '/'
}

/** canonical + hreflang de la misma página en los 11 mercados. */
export function alternates(path: string, market: MarketId): Metadata['alternates'] {
  const languages: Record<string, string> = {}
  for (const id of MARKET_IDS) languages[id] = marketPath(path, id)
  languages['x-default'] = marketPath(path, DEFAULT_MARKET)
  return { canonical: marketPath(path, market), languages }
}
