import { Icon } from '@/components/site/icon'
import { LinkArrow, SectionHeader } from '@/components/site/primitives'
import { getLocale } from 'next-intl/server'
import { fiscalValues, getMarket } from '@/i18n/markets'
import { getT } from '@/i18n/t-server'
import { INTEGRATIONS_ROW_2, TRUST } from '@/lib/site'
import { cn } from '@/lib/utils'

function Pill({ name }: { name: string }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 rounded-full border border-ink-line bg-white py-2 pl-2 pr-4 shadow-sm">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-go-tint text-sm font-semibold text-go-deep" aria-hidden>
        {name[0]}
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-ink">{name}</span>
    </li>
  )
}

function Row({ items, direction }: { items: string[]; direction: 'left' | 'right' }) {
  // Se repite la lista (mínimo 8 elementos) y se duplica para un desplazamiento continuo sin cortes.
  const base = items.length < 8 ? Array.from({ length: Math.ceil(8 / items.length) }, () => items).flat() : items
  return (
    <div className="go-marquee mask-fade-x overflow-hidden py-1">
      <ul className={cn('flex w-max gap-4', direction === 'left' ? 'go-marquee-left' : 'go-marquee-right')}>
        {[...base, ...base].map((n, i) => (
          <Pill key={`${n}-${i}`} name={n} />
        ))}
      </ul>
    </div>
  )
}

/** 06 · Integraciones y confianza (Figma › IntegrationPill, TrustItem). */
export async function Integrations() {
  const locale = await getLocale()
  const t = await getT('home.integrations')
  const market = getMarket(locale)
  // Fila 1: medios de pago del país (+ la autoridad tributaria donde GO Admin emite ante ella)
  const row1 = fiscalValues(locale).gateways.split(', ')
  if (market.countryData.fiscal.status === 'integrated') row1.push(market.countryData.fiscal.authority[market.language])
  return (
    <section className="overflow-hidden bg-go-wash py-20 sm:py-32" aria-labelledby="integraciones-title">
      <div className="container">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={<span id="integraciones-title">{t('title')}</span>}
          subtitle={t('subtitle')}
        />
      </div>
      <div className="mt-12 grid gap-4" aria-label={t('aria')}>
        <Row items={row1} direction="left" />
        <Row items={INTEGRATIONS_ROW_2} direction="right" />
      </div>
      <div className="container mt-12 flex flex-col items-center gap-8">
        <ul className="flex flex-wrap justify-center gap-3">
          {TRUST.map((item) => (
            <li key={item.key} className="flex items-center gap-2.5 rounded-full border border-ink-line bg-white py-2 pl-2 pr-4">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-go-tint text-go-deep">
                <Icon name={item.icon} className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-ink">{t(`trust.${item.key}`)}</span>
            </li>
          ))}
        </ul>
        <LinkArrow href="/integraciones">{t('cta')}</LinkArrow>
      </div>
    </section>
  )
}
