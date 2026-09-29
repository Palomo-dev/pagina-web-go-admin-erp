import { Check, FileCheck, Minus } from 'lucide-react'
import { setRequestLocale } from 'next-intl/server'
import { Faq } from '@/components/site/faq'
import { SiteFooter } from '@/components/site/footer'
import { Icon } from '@/components/site/icon'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { PricingCards } from '@/components/site/pricing'
import { CtaLink, SectionHeader } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { getMarket } from '@/i18n/markets'
import { tl, type T } from '@/i18n/t'
import { getT } from '@/i18n/t-server'
import { pageMetadata, type PageProps } from '@/lib/page'
import { ADDONS, MODULE_COUNT, PLANS, PLAN_COMPARISON, formatNumber, formatPrice } from '@/lib/site'
import { PricingViewTracker } from './pricing-view-tracker'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/precios', 'pages.pricing')
}

/** Valor de una celda del comparativo: sí/no, número con el formato del mercado o texto. */
function Cell({ v, t, locale }: { v: string; t: T; locale: string }) {
  if (v === 'yes') return <Check className="mx-auto h-5 w-5 text-go" strokeWidth={2} aria-label={t('compare.yes')} />
  if (v === 'no') return <Minus className="mx-auto h-5 w-5 text-slate-300" strokeWidth={2} aria-label={t('compare.no')} />
  if (v === 'all') return <span className="tabular">{t('compare.all', { n: MODULE_COUNT })}</span>
  if (v === 'unlimited' || v === 'standard' || v === 'dedicated') return <span>{t(`compare.${v}`)}</span>
  return <span className="tabular">{formatNumber(Number(v), locale)}</span>
}

/** Precios (Figma › 03 Pantallas › Precios · Escritorio). Moneda y facturación según el país del mercado. */
export default async function PreciosPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.pricing')
  const p = await getT('pricing')
  const c = await getT('common')
  const market = getMarket(params.locale)
  const integrated = market.countryData.fiscal.status === 'integrated'
  return (
    <>
      <PricingViewTracker />
      <SiteNavbar tone="sky" currentPage="/precios" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <section className="relative -mt-24 bg-transparent pb-20 sm:pb-28">
          <div className="container">
            <PricingCards />
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28" aria-labelledby="comparativo-title">
          <div className="container">
            <SectionHeader eyebrow={t('compareEyebrow')} title={<span id="comparativo-title">{t('compareTitle')}</span>} />
            <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-ink-line">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <caption className="sr-only">{t('compareCaption')}</caption>
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold text-ink">
                      {t('feature')}
                    </th>
                    {PLANS.map((plan) => (
                      <th key={plan.id} scope="col" className={`px-6 py-4 text-center font-semibold ${plan.recommended ? 'text-go-deep' : 'text-ink'}`}>
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PLAN_COMPARISON.map((row, i) => (
                    <tr key={row.key} className={i % 2 ? 'bg-go-wash/60' : 'bg-white'}>
                      <th scope="row" className="px-6 py-4 font-medium text-ink">
                        {p(`compare.rows.${row.key}`)}
                      </th>
                      {row.values.map((v, j) => (
                        <td key={j} className={`px-6 py-4 text-center text-ink ${j === 1 ? 'bg-go-tint/40' : ''}`}>
                          <Cell v={v} t={p} locale={params.locale} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        <section className="bg-go-wash py-20 sm:py-28" aria-labelledby="complementos-title">
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader eyebrow={t('addonsEyebrow')} title={<span id="complementos-title">{t('addonsTitle')}</span>} subtitle={t('addonsSubtitle')} />
            {integrated ? (
              <Reveal className="flex w-full max-w-4xl flex-col gap-6 rounded-3xl border border-ink-line bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-go-tint text-go-deep">
                    <FileCheck className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-h4 text-ink">{t('certTitle')}</h3>
                    <p className="text-sm text-ink-body">{t('certText')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <p className="whitespace-nowrap">
                    <span className="tabular text-h3 text-ink">{formatPrice(130000, 'COP', params.locale)}</span> <span className="text-sm text-ink-muted">{t('perYear')}</span>
                  </p>
                  <CtaLink href="/contacto" kind="secondary" arrow={false}>
                    {t('request')}
                  </CtaLink>
                </div>
              </Reveal>
            ) : null}
            <ul className="flex flex-wrap justify-center gap-3">
              {ADDONS.map((a) => (
                <li key={a.key} className="flex items-center gap-2.5 rounded-full border border-ink-line bg-white py-2 pl-2 pr-4">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-go-tint text-go-deep">
                    <Icon name={a.icon} className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-ink">{p(`addons.${a.key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28" aria-labelledby="faq-precios-title">
          <div className="container">
            <SectionHeader eyebrow={t('faqEyebrow')} title={<span id="faq-precios-title">{t('faqTitle')}</span>} />
            <div className="mt-12">
              <Faq items={tl(p, 'faq')} />
            </div>
          </div>
        </section>

        <section className="bg-go text-white">
          <div className="container flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-h3">{t('ctaTitle')}</h2>
              <p className="mt-2 text-go-50">{t('ctaText')}</p>
            </div>
            <CtaLink href="/contacto" kind="light" size="lg">
              {c('talkToSales')}
            </CtaLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
