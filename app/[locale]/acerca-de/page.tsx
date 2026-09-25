import { setRequestLocale } from 'next-intl/server'
import { Traveler } from '@/components/illustrations/art'
import { CardLinkGrid, FeatureGrid, Section, Split } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeader } from '@/components/site/primitives'
import { tl } from '@/i18n/t'
import { getT } from '@/i18n/t-server'
import { getCompany } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { CONTACT, type IconName } from '@/lib/site'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/acerca-de', 'pages.about')
}

const LINKS: { href: string; icon: IconName }[] = [
  { href: '/carreras', icon: 'rocket' },
  { href: '/blog', icon: 'book' },
  { href: '/contacto', icon: 'message' },
]

export default async function AcercaDePage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.about')
  const { ABOUT } = await getCompany(params.locale)
  const links = tl<{ title: string; text: string }[]>(t, 'links').map((l, i) => ({ ...l, ...LINKS[i] }))
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/acerca-de" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <Split visual={<Traveler className="mx-auto w-72" title={t('travelerTitle')} />}>
            <SectionHeader align="left" eyebrow={t('missionEyebrow')} title={t('missionTitle')} subtitle={ABOUT.mission} />
            <p className="text-ink-body">{ABOUT.audience}</p>
          </Split>
        </Section>
        <Section eyebrow={t('valuesEyebrow')} title={t('valuesTitle')}>
          <FeatureGrid items={ABOUT.values} columns={4} />
        </Section>
        <Section tone="wash" eyebrow={t('originEyebrow')} title={t('originTitle')} subtitle={t('originSubtitle', { legalName: CONTACT.legalName, nit: CONTACT.nit, city: CONTACT.city })}>
          <CardLinkGrid items={links} />
        </Section>
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
