import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Journey } from '@/components/home/journey'
import { CardLinkGrid, CtaBand, Section } from '@/components/sections/blocks'
import { ChannelsShowcase } from '@/components/sections/channels-showcase'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { listCategories } from '@/lib/data'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/producto', 'pages.productIndex')
}

/** Producto: recorrido por los planetas, canales digitales y catálogo por categoría. */
export default async function ProductoPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.productIndex')
  const c = await getT('common')
  const groups = await listCategories(params.locale)
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/producto" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <Journey />
        <Section tone="tint" eyebrow={t('channelsEyebrow')} title={t('channelsTitle')} subtitle={t('channelsSubtitle')}>
          <ChannelsShowcase />
        </Section>
        {groups.map((g, i) => (
          <Section key={g.id} id={g.id} tone={i % 2 ? 'wash' : 'white'} eyebrow={g.name} title={g.text} align="left">
            <CardLinkGrid items={g.items.map((p) => ({ href: `/producto/${p.slug}`, title: p.name, text: p.short, icon: p.icon }))} columns={g.items.length === 2 ? 2 : 3} />
          </Section>
        ))}
        <CtaBand title={t('ctaTitle')} text={t('ctaText')} cta={c('talkToSales')} href="/contacto" />
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
