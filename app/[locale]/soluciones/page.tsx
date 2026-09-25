import { setRequestLocale } from 'next-intl/server'
import { Support } from '@/components/home/support'
import { CardLinkGrid, CtaBand, Section } from '@/components/sections/blocks'
import { ChannelsShowcase } from '@/components/sections/channels-showcase'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { getT } from '@/i18n/t-server'
import { listSolutions } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/soluciones', 'pages.solutions')
}

export default async function SolucionesPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.solutions')
  const c = await getT('common')
  const solutions = await listSolutions(params.locale)
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/soluciones" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <Section className="-mt-16 pt-0 sm:pt-0" tone="wash">
          <CardLinkGrid items={solutions.map((s) => ({ href: `/soluciones/${s.slug}`, title: s.name, text: s.short, icon: s.icon, tags: s.types.slice(0, 5) }))} columns={4} />
        </Section>
        <CtaBand title={t('otherTitle')} text={t('otherText')} cta={c('talkToSales')} href="/contacto" />
        <Section tone="tint" eyebrow={t('channelsEyebrow')} title={t('channelsTitle')}>
          <ChannelsShowcase />
        </Section>
        <Support />
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
