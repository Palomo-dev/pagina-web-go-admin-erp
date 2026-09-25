import { defineRouting } from 'next-intl/routing'
import { DEFAULT_MARKET, MARKETS, MARKET_IDS, type MarketId } from './markets'

const prefixes = Object.fromEntries(
  MARKET_IDS.filter((id) => MARKETS[id].prefix).map((id) => [id, MARKETS[id].prefix]),
) as Partial<Record<MarketId, string>>

export const routing = defineRouting({
  locales: MARKET_IDS,
  defaultLocale: DEFAULT_MARKET,
  // es-CO sin prefijo (URLs actuales); el resto con /es-mx, /en-us, /pt-br…
  localePrefix: { mode: 'as-needed', prefixes },
  // La primera visita se orienta por país (geolocalización) y por el idioma del navegador.
  localeDetection: true,
  localeCookie: { name: 'GOADMIN_MARKET', maxAge: 60 * 60 * 24 * 365 },
})
