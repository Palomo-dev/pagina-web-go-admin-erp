import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Mail } from 'lucide-react'
import { FeatureGrid, Section, StepList } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink, Tag } from '@/components/site/primitives'
import { getCompany } from '@/lib/data'
import { CONTACT } from '@/lib/site'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/carreras', 'pages.careers')
}

export default async function CarrerasPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.careers')
  const { POSITIONS: positions, WORK_PRINCIPLES, HIRING_STEPS } = await getCompany(params.locale)
  const apply = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t('subject'))}`
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/carreras" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0" eyebrow={t('openEyebrow')} title={positions.length ? t('open') : t('none')}>
          {positions.length ? (
            <ul className="mx-auto grid max-w-3xl gap-4">
              {positions.map((p) => (
                <li key={p.id} className="flex flex-col gap-3 rounded-2xl border border-ink-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-h4 text-ink">{p.title}</p>
                    <p className="mt-1 text-sm text-ink-body">{p.summary}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Tag>{p.area}</Tag>
                      <Tag>{p.location}</Tag>
                      <Tag kind="brand">{p.type}</Tag>
                    </div>
                  </div>
                  <CtaLink href={`${apply}%20·%20${encodeURIComponent(p.title)}`} kind="secondary">
                    {t('apply')}
                  </CtaLink>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-dashed border-go-200 bg-go-wash p-10 text-center">
              <Mail className="h-8 w-8 text-go" strokeWidth={1.5} aria-hidden />
              <p className="text-ink-body">{t('noneText')}</p>
              <CtaLink href={apply}>{t('send')}</CtaLink>
            </div>
          )}
        </Section>
        <Section tone="wash" eyebrow={t('howEyebrow')} title={t('howTitle')}>
          <FeatureGrid items={WORK_PRINCIPLES} columns={4} />
        </Section>
        <Section eyebrow={t('processEyebrow')} title={t('processTitle')}>
          <StepList steps={HIRING_STEPS} />
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
