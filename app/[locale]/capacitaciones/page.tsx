import { setRequestLocale } from 'next-intl/server'
import { getMarket } from '@/i18n/markets'
import { getT } from '@/i18n/t-server'
import { getCompany } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Check } from 'lucide-react'
import { CtaBand, FeatureGrid, Section } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { Icon } from '@/components/site/icon'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { RevealGroup, RevealItem } from '@/components/site/reveal'
import { CONTACT } from '@/lib/site'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/capacitaciones', 'pages.training')
}

export default async function CapacitacionesPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.training')
  const hoursT = await getT('contact')
  const hours = getMarket(params.locale).country === 'COL' ? hoursT('hours') : hoursT('hoursZone')
  const { LEARNING_PATHS, TRAINING_FORMATS } = await getCompany(params.locale)
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/capacitaciones" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <FeatureGrid items={TRAINING_FORMATS.map((f) => ({ title: f.title, text: `${f.text} · ${f.meta}`, icon: f.icon }))} columns={4} />
        </Section>
        <Section eyebrow={t('pathsEyebrow')} title={t('pathsTitle')}>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LEARNING_PATHS.map((p) => (
              <RevealItem key={p.role}>
                <article className="flex h-full flex-col gap-4 rounded-[20px] border border-ink-line bg-white p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-go-tint text-go-deep">
                    <Icon name={p.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <h3 className="text-h4 text-ink">{p.role}</h3>
                  <ol className="grid gap-2.5">
                    {p.lessons.map((l, i) => (
                      <li key={l} className="flex items-center gap-2.5 text-sm text-ink-body">
                        <span className="tabular grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-ink">{i + 1}</span>
                        {l}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-auto flex items-center gap-1.5 text-xs text-ink-muted">
                    <Check className="h-3.5 w-3.5 text-go" strokeWidth={2} aria-hidden /> {t('guides')}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>
        <CtaBand title={t('ctaTitle')} text={t('ctaText', { hours: hours.toLowerCase() })} cta={t('cta')} href={CONTACT.whatsappUrl} />
      </main>
      <SiteFooter />
    </>
  )
}
