import { setRequestLocale } from 'next-intl/server'
import { CtaBand, FaqSection, FeatureGrid, Section } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { tl } from '@/i18n/t'
import { getT } from '@/i18n/t-server'
import { pageMetadata, type PageProps } from '@/lib/page'
import type { IconName } from '@/lib/site'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/seguridad', 'pages.security')
}

// Solo prácticas que el producto implementa (RLS, auditorías, roles por alcance, doble factor).
// Certificaciones o cifras de disponibilidad se publican únicamente con soporte verificable.
const ICONS: IconName[] = ['lock', 'users', 'history', 'key', 'shield', 'database']

export default async function SeguridadPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.security')
  const c = await getT('common')
  const controls = tl<{ title: string; text: string }[]>(t, 'controls').map((x, i) => ({ ...x, icon: ICONS[i] }))
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/seguridad" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <FeatureGrid items={controls} />
        </Section>
        <FaqSection tone="white" items={tl(t, 'faq')} />
        <CtaBand title={t('ctaTitle')} text={t('ctaText')} cta={c('contact')} href="/contacto" />
      </main>
      <SiteFooter />
    </>
  )
}
