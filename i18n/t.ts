/**
 * Traducción con los valores fiscales del país ya incluidos.
 *
 *   const t = useT('home.hero')   // componentes de cliente o de servidor síncronos
 *   t('badge')                     // "Facturación electrónica DIAN incluida" / "… SAT …"
 *
 * Para componentes de servidor async: getT() en i18n/t-server.ts.
 * Cualquier mensaje puede usar las variables de fiscalValues(): {theAuthority}, {taxes},
 * {taxId}, {invoicing}, {country}, {inCountry}… y {status, select, integrated {…} other {…}}.
 */
import { useLocale, useTranslations } from 'next-intl'
import { fiscalValues } from './markets'

type Values = Record<string, string | number | Date>
type Base = { (key: string, values?: Values): string; raw: (key: string) => unknown; has: (key: string) => boolean }

export type T = Base

export function withFiscal(t: unknown, locale: string): T {
  const base = t as Base
  const fiscal = fiscalValues(locale)
  const fn = ((key: string, values?: Values) => base(key, { ...fiscal, ...values })) as T
  fn.raw = (key: string) => base.raw(key)
  fn.has = (key: string) => base.has(key)
  return fn
}

export function useT(namespace?: string): T {
  const locale = useLocale()
  return withFiscal(useTranslations(namespace as never), locale)
}

/**
 * Lee una lista u objeto de los mensajes y formatea cada texto (con variables fiscales).
 *   tl<{ q: string; a: string }[]>(t, 'faq')  →  [{ q: '…', a: '…' }, …]
 */
export function tl<R = unknown>(t: T, key: string): R {
  const walk = (value: unknown, path: string): unknown => {
    if (typeof value === 'string') return t(path)
    if (Array.isArray(value)) return value.map((v, i) => walk(v, `${path}.${i}`))
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, walk(v, `${path}.${k}`)]))
    return value
  }
  return walk(t.raw(key), key) as R
}
