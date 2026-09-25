import { setRequestLocale } from 'next-intl/server'
import { FaqSection, FeatureGrid, Section, StepList } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink } from '@/components/site/primitives'
import { tl } from '@/i18n/t'
import { getT } from '@/i18n/t-server'
import { pageMetadata, type PageProps } from '@/lib/page'
import { PARTNER_PROFILES, PARTNER_TERMS, PARTNER_TIERS, SELLERS_SIGNUP_URL, SELLERS_URL, formatNumber, formatPrice } from '@/lib/site'
import { cn } from '@/lib/utils'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/aliados', 'pages.partners')
}

/**
 * Programa de aliados y vendedores (Figma › Aliados). Condiciones tomadas del portal
 * sellers.goadmin.io (valores predeterminados; el portal muestra las de cada aliado).
 */
export default async function AliadosPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.partners')
  const usd = (v: number) => formatPrice(v, 'USD', params.locale)
  const terms = [
    { key: 'commission', value: `${PARTNER_TERMS.commissionPct} %` },
    { key: 'recurring', value: t('terms.recurring.value') },
    { key: 'minimum', value: usd(PARTNER_TERMS.minPayoutUsd) },
    { key: 'cutoff', value: t('terms.cutoff.value', { day: PARTNER_TERMS.cutoffDay }) },
    { key: 'processing', value: t('terms.processing.value', { days: PARTNER_TERMS.processingDays }) },
    { key: 'method', value: t('terms.method.value') },
  ]
  const profiles = PARTNER_PROFILES.map((p) => ({ icon: p.icon, title: t(`profiles.${p.key}.title`), text: t(`profiles.${p.key}.text`) }))
  const portal = tl<{ title: string; text: string }[]>(t, 'portal.items')
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/aliados" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')}>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <CtaLink href={SELLERS_SIGNUP_URL} kind="light" size="lg">
              {t('signup')}
            </CtaLink>
            <CtaLink href={SELLERS_URL} kind="outline-light" size="lg" arrow={false}>
              {t('login')}
            </CtaLink>
          </div>
        </PageHero>

        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0" eyebrow={t('howEyebrow')} title={t('howTitle')}>
          <StepList steps={tl(t, 'steps')} />
        </Section>

        <Section eyebrow={t('termsEyebrow')} title={t('termsTitle')} subtitle={t('termsSubtitle')}>
          <dl className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {terms.map((x) => (
              <div key={x.key} className="rounded-[20px] border border-ink-line bg-white p-6">
                <dt className="text-sm text-ink-muted">{t(`terms.${x.key}.label`)}</dt>
                <dd className="mt-1 text-h3 text-ink">{x.value}</dd>
                <dd className="mt-2 text-sm text-ink-body">{t(`terms.${x.key}.text`)}</dd>
              </div>
            ))}
          </dl>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-ink-muted">{t('termsNote')}</p>
        </Section>

        <Section tone="wash" eyebrow={t('profilesEyebrow')} title={t('profilesTitle')}>
          <FeatureGrid items={profiles} columns={4} />
        </Section>

        <Section eyebrow={t('tiersEyebrow')} title={t('tiersTitle')} subtitle={t('tiersSubtitle')}>
          <ol className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_TIERS.map((tier, i) => (
              <li key={tier.key} className={cn('rounded-[20px] border p-6', i === PARTNER_TIERS.length - 1 ? 'border-go bg-go-wash' : 'border-ink-line bg-white')}>
                <p className="text-eyebrow uppercase text-go-deep">{t('tierN', { n: i + 1 })}</p>
                <p className="mt-2 text-h3 text-ink">{t(`tiers.${tier.key}`)}</p>
                <p className="mt-3 text-sm text-ink-body">
                  {i === 0 ? t('tierStart') : t('tierGoal', { referrals: formatNumber(tier.referrals, params.locale), sales: usd(tier.salesUsd) })}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section tone="wash" eyebrow={t('portal.eyebrow')} title={t('portal.title')}>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
            {portal.map((p) => (
              <div key={p.title} className="rounded-[20px] border border-ink-line bg-white p-6">
                <p className="text-h4 text-ink">{p.title}</p>
                <p className="mt-2 text-sm text-ink-body">{p.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <FaqSection items={tl(t, 'faq')} />

        <NightCta eyebrow={t('ctaEyebrow')} title={t('ctaTitle')} text={t('ctaText')} primary={t('signup')} primaryHref={SELLERS_SIGNUP_URL} secondary={{ label: t('ctaContact'), href: '/contacto' }} />
      </main>
      <SiteFooter />
    </>
  )
}
