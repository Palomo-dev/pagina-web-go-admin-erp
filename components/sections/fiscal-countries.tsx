import { useLocale } from 'next-intl'
import { Section } from '@/components/sections/blocks'
import { Tag } from '@/components/site/primitives'
import { COUNTRIES, getMarket, type CountryCode } from '@/i18n/markets'
import { useT } from '@/i18n/t'
import { cn } from '@/lib/utils'

const ORDER: CountryCode[] = ['COL', 'MEX', 'CHL', 'ESP', 'BRA', 'USA', 'CAN', 'GBR', 'AUS', 'JPN']

/**
 * Facturación en cada país (Figma › FiscalCountries). Datos de i18n/markets.ts, tomados de la
 * configuración del ERP. Dice con honestidad dónde GO Admin emite ante la autoridad y dónde no.
 */
export function FiscalCountries() {
  const t = useT('pages.product.fiscal')
  const m = getMarket(useLocale())
  const l = m.language
  return (
    <Section tone="wash" eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')}>
      <div className="mx-auto max-w-5xl overflow-x-auto rounded-[20px] border border-ink-line bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-slate-50 text-ink-muted">
            <tr>
              <th className="px-5 py-3 font-medium">{t('country')}</th>
              <th className="px-5 py-3 font-medium">{t('authority')}</th>
              <th className="px-5 py-3 font-medium">{t('system')}</th>
              <th className="px-5 py-3 font-medium">{t('taxes')}</th>
              <th className="px-5 py-3 font-medium">{t('statusLabel')}</th>
            </tr>
          </thead>
          <tbody>
            {ORDER.map((code) => {
              const c = COUNTRIES[code]
              const mine = code === m.country
              return (
                <tr key={code} className={cn('border-t border-ink-line align-top', mine && 'bg-go-wash')}>
                  <td className="px-5 py-3.5 font-semibold text-ink">
                    {c.name[l]}
                    {mine ? <Tag kind="brand" className="ml-2">{t('you')}</Tag> : null}
                  </td>
                  <td className="px-5 py-3.5 text-ink">{c.fiscal.authority[l]}</td>
                  <td className="px-5 py-3.5 text-ink-body">{c.fiscal.system[l] || t('none')}</td>
                  <td className="px-5 py-3.5 text-ink-body">{c.fiscal.taxes[l]}</td>
                  <td className="px-5 py-3.5">
                    <Tag kind={c.fiscal.status === 'integrated' ? 'success' : 'neutral'}>{t(`status.${c.fiscal.status}`)}</Tag>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mx-auto mt-5 max-w-3xl text-center text-sm text-ink-muted">{t('note')}</p>
    </Section>
  )
}
