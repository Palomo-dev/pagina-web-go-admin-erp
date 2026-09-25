import { setRequestLocale } from 'next-intl/server'
import { CtaBand, FeatureGrid, Section, StepList } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { tl } from '@/i18n/t'
import { getT } from '@/i18n/t-server'
import { listIntegrationGroups } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/api', 'pages.api')
}

/**
 * API para desarrolladores. Solo describe capacidades del ERP (llaves de API, webhooks y
 * sincronizaciones); la referencia técnica vivirá en ayuda.goadmin.io/api (docs/arquitectura-plataforma-web.md).
 */
export default async function ApiPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.api')
  const { developer } = await listIntegrationGroups(params.locale)
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/api" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0" eyebrow={t('toolsEyebrow')} title={t('toolsTitle')}>
          <FeatureGrid items={developer} />
        </Section>
        <Section eyebrow={t('stepsEyebrow')} title={t('stepsTitle')}>
          <StepList steps={tl(t, 'steps')} />
        </Section>
        <CtaBand title={t('docsTitle')} text={t('docsText')} cta={t('docsCta')} href="/contacto" />
      </main>
      <SiteFooter />
    </>
  )
}
