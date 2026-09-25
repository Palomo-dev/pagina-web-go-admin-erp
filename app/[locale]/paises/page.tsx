import { setRequestLocale } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'
import { FiscalCountries } from '@/components/sections/fiscal-countries'
import { Section } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { Tag } from '@/components/site/primitives'
import { Link } from '@/i18n/navigation'
import { COUNTRIES, COUNTRY_ORDER, COUNTRY_SLUGS, getMarket } from '@/i18n/markets'
import { getT } from '@/i18n/t-server'
import { pageMetadata, type PageProps } from '@/lib/page'
import { cn } from '@/lib/utils'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/paises', 'pages.countries')
}

/** Países donde está GO Admin (Figma › Países). */
export default async function PaisesPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.countries')
  const m = getMarket(params.locale)
  const l = m.language
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/paises" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COUNTRY_ORDER.map((code) => {
              const c = COUNTRIES[code]
              const mine = code === m.country
              return (
                <li key={code}>
                  <Link
                    href={`/paises/${COUNTRY_SLUGS[code]}`}
                    className={cn(
                      'group flex h-full flex-col gap-3 rounded-[20px] border bg-white p-6 transition-all duration-fast hover:-translate-y-1 hover:border-go hover:shadow-lg',
                      mine ? 'border-go' : 'border-ink-line',
                    )}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-h4 text-ink">{c.name[l]}</span>
                      <span className="text-sm text-ink-muted">{c.iso2}</span>
                    </span>
                    <span className="flex flex-wrap gap-2">
                      <Tag kind={c.fiscal.status === 'integrated' ? 'success' : 'neutral'}>{t(`status.${c.fiscal.status}`)}</Tag>
                      <Tag>{t('plansIn', { currency: c.planCurrency })}</Tag>
                    </span>
                    <span className="text-sm text-ink-body">{t('cardText', { authority: c.fiscal.authority[l], taxes: c.fiscal.taxes[l] })}</span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-go-deep">
                      {t('see', { country: c.name[l] })}
                      <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Section>
        <FiscalCountries />
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
