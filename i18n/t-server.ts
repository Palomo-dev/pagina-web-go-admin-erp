import 'server-only'
import { getLocale, getTranslations } from 'next-intl/server'
import { withFiscal, type T } from './t'

/** Versión async de useT() para componentes de servidor y generateMetadata. */
export async function getT(namespace?: string): Promise<T> {
  const locale = await getLocale()
  return withFiscal(await getTranslations(namespace as never), locale)
}
