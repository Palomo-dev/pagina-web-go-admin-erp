import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { pageMetadata, type PageProps } from '@/lib/page'
import { CtaBand, FeatureGrid, Section } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { Icon } from '@/components/site/icon'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { listIntegrationGroups } from '@/lib/data'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/integraciones', 'pages.integrations')
}

/** Integraciones disponibles en el país del mercado. */
export default async function IntegracionesPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.integrations')
  const { groups, developer } = await listIntegrationGroups(params.locale)
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/integraciones" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')}>
          <nav aria-label={t('categories')} className="flex flex-wrap justify-center gap-2">
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/25">
                {g.name}
              </a>
            ))}
          </nav>
        </PageHero>
        {groups.map((g, i) => (
          <Section key={g.id} id={g.id} tone={i % 2 ? 'wash' : 'white'} eyebrow={g.name} title={g.text} align="left">
            <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((it) => (
                <div key={it.name} className="flex items-center gap-4 rounded-2xl border border-ink-line bg-white p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-go-tint text-lg font-semibold text-go-deep" aria-hidden>
                    {it.name[0]}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{it.name}</span>
                    <span className="block text-sm text-ink-body">{it.text}</span>
                  </span>
                  <Icon name={g.icon} className="ml-auto h-5 w-5 text-go-200" />
                </div>
              ))}
            </Reveal>
          </Section>
        ))}
        <Section tone="tint" eyebrow={t('devEyebrow')} title={t('devTitle')}>
          <FeatureGrid items={developer} />
        </Section>
        <CtaBand title={t('ctaTitle')} text={t('ctaText')} cta={t('cta')} href="/contacto" />
      </main>
      <SiteFooter />
    </>
  )
}
