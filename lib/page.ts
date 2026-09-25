import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { MARKETS, type MarketId } from '@/i18n/markets'
import { getT } from '@/i18n/t-server'
import { alternates } from '@/lib/seo'

export type PageProps<P = object> = { params: P & { locale: MarketId } }

/**
 * Metadatos de una página traducida: título y descripción desde messages › <ns>.meta,
 * canonical y hreflang de los 11 mercados.
 */
export async function pageMetadata(locale: MarketId, path: string, ns: string, values?: Record<string, string>): Promise<Metadata> {
  setRequestLocale(locale)
  const t = await getT(ns)
  const title = t('meta.title', values)
  const description = t('meta.description', values)
  return {
    title,
    description,
    alternates: alternates(path, locale),
    openGraph: { title, description, locale: MARKETS[locale].og },
  }
}
