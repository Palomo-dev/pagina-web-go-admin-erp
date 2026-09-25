import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'
import { MARKETS, type MarketId } from './markets'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = (hasLocale(routing.locales, requested) ? requested : routing.defaultLocale) as MarketId
  return {
    locale,
    // Los mensajes van por idioma (igual que messages/ del ERP); el país solo cambia valores fiscales.
    messages: (await import(`../messages/${MARKETS[locale].language}.json`)).default,
    timeZone: 'America/Bogota',
  }
})
