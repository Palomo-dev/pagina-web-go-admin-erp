import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Section } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { Tag } from '@/components/site/primitives'
import { Link } from '@/i18n/navigation'
import {
  COUNTRIES,
  COUNTRY_SLUGS,
  LANGUAGE_NAMES,
  MARKETS,
  MARKET_IDS,
  countryBySlug,
  countryPaymentLabels,
  fiscalValuesFor,
  getMarket,
  type CountryCode,
} from '@/i18n/markets'
import { getT } from '@/i18n/t-server'
import { listIntegrationGroups } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { PLANS, formatPrice } from '@/lib/site'

type Props = PageProps<{ country: string }>

export const dynamicParams = false

export function generateStaticParams() {
  return Object.values(COUNTRY_SLUGS).map((country) => ({ country }))
}

function resolve(params: Props['params']) {
  const code = countryBySlug(params.country)
  if (!code) notFound()
  const l = getMarket(params.locale).language
  return { code: code as CountryCode, c: COUNTRIES[code as CountryCode], l, fiscal: fiscalValuesFor(code as CountryCode, l) }
}

export async function generateMetadata({ params }: Props) {
  const { fiscal } = resolve(params)
  return pageMetadata(params.locale, `/paises/${params.country}`, 'pages.country', fiscal)
}

/** GO Admin en un país (Figma › País): facturación, impuestos, pagos, integraciones y precios. */
export default async function PaisPage({ params }: Props) {
  setRequestLocale(params.locale)
  const { code, c, l, fiscal } = resolve(params)
  const t = await getT('pages.country')
  const tt = (key: string, values?: Record<string, string | number>) => t(key, { ...fiscal, ...values })
  const markets = MARKET_IDS.filter((id) => MARKETS[id].country === code)
  const { groups } = await listIntegrationGroups(params.locale, code)
  const facts = [
    { key: 'authority', value: c.fiscal.authority[l] },
    { key: 'system', value: c.fiscal.system[l] || tt('none') },
    { key: 'status', value: tt(`status.${c.fiscal.status}`), tag: c.fiscal.status === 'integrated' ? 'success' : 'neutral' },
    { key: 'taxes', value: c.fiscal.taxes[l] },
    { key: 'taxId', value: c.fiscal.taxId },
    { key: 'chart', value: c.fiscal.chart[l] },
    { key: 'ePayroll', value: tt(c.fiscal.ePayroll ? 'yes' : 'noEPayroll') },
    { key: 'currency', value: c.currency },
    { key: 'planCurrency', value: c.planCurrency },
  ] as const
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/paises" />
      <main id="contenido">
        <PageHero eyebrow={tt('eyebrow')} title={tt('title')} subtitle={tt('subtitle')}>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            {markets.map((id, i) => (
              <Link
                key={id}
                href="/"
                locale={id}
                hrefLang={id}
                className={
                  i === 0
                    ? 'inline-flex h-14 items-center justify-center rounded-xl bg-white px-7 font-semibold text-go-deep shadow-md transition-colors hover:bg-go-tint'
                    : 'inline-flex h-14 items-center justify-center rounded-xl border border-white/60 px-7 font-semibold text-white transition-colors hover:bg-white/10'
                }
              >
                {tt('visit', { language: LANGUAGE_NAMES[MARKETS[id].language] })}
              </Link>
            ))}
          </div>
        </PageHero>

        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0" eyebrow={tt('fiscalEyebrow')} title={tt('fiscalTitle')}>
          <dl className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((f) => (
              <div key={f.key} className="rounded-[20px] border border-ink-line bg-white p-6">
                <dt className="text-sm text-ink-muted">{tt(`facts.${f.key}`)}</dt>
                <dd className="mt-2 text-h4 text-ink">{'tag' in f ? <Tag kind={f.tag}>{f.value}</Tag> : f.value}</dd>
              </div>
            ))}
          </dl>
          {fiscal.einvoiceNote ? <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-ink-body">{fiscal.einvoiceNote}</p> : null}
        </Section>

        <Section eyebrow={tt('paymentsEyebrow')} title={tt('paymentsTitle')}>
          <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
            {countryPaymentLabels(code, l).map((p) => (
              <li key={p} className="rounded-full border border-ink-line bg-white px-4 py-2 text-sm font-medium text-ink">
                {p}
              </li>
            ))}
          </ul>
        </Section>

        <Section tone="wash" eyebrow={tt('integrationsEyebrow')} title={tt('integrationsTitle')}>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
              <div key={g.id} className="rounded-[20px] border border-ink-line bg-white p-6">
                <p className="text-h4 text-ink">{g.name}</p>
                <p className="mt-3 text-sm text-ink-body">{g.items.map((i) => i.name).join(' · ')}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link href="/integraciones" className="text-sm font-semibold text-go-deep underline">
              {tt('allIntegrations')}
            </Link>
          </p>
        </Section>

        <Section eyebrow={tt('pricingEyebrow')} title={tt('pricingTitle')} subtitle={tt('pricingSubtitle')}>
          <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            {PLANS.map((p) => (
              <li key={p.id} className={`rounded-[20px] border p-6 text-center ${p.recommended ? 'border-go bg-go-wash' : 'border-ink-line bg-white'}`}>
                <p className="text-h4 text-ink">{p.name}</p>
                <p className="mt-2 text-h3 tabular text-ink">{formatPrice(p.prices[c.planCurrency].monthly, c.planCurrency, markets[0])}</p>
                <p className="text-sm text-ink-muted">{tt('perMonth')}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center">
            <Link href="/precios" locale={markets[0]} className="text-sm font-semibold text-go-deep underline">
              {tt('seePricing')}
            </Link>
          </p>
        </Section>

        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
