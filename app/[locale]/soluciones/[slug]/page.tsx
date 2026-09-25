import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { getT } from '@/i18n/t-server'
import { alternates } from '@/lib/seo'
import type { PageProps } from '@/lib/page'
import { SOLUTIONS } from '@/lib/catalog/solutions'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { CardLinkGrid, DayTimeline, FaqSection, FeatureGrid, PainPoints, Section, Split, TypeChips } from '@/components/sections/blocks'
import { ProductMock } from '@/components/sections/product-mock'
import { SiteFooter } from '@/components/site/footer'
import { Icon } from '@/components/site/icon'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHeroSplit } from '@/components/site/page-hero-split'
import { LinkArrow, SectionHeader, Tag } from '@/components/site/primitives'
import { findSolution, listProducts, listSolutions } from '@/lib/data'
import { SIGNUP_URL } from '@/lib/site'

type Props = PageProps<{ slug: string }>

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  setRequestLocale(params.locale)
  const s = await findSolution(params.locale, params.slug)
  if (!s) return {}
  const t = await getT('pages.solution')
  return { title: t('metaTitle', { name: s.name.toLowerCase() }), description: s.lead, alternates: alternates(`/soluciones/${s.slug}`, params.locale) }
}

/** Solución · plantilla (Figma › 03 Pantallas › Solución). Contenido en lib/catalog/solutions.ts. */
export default async function SolutionPage({ params }: Props) {
  setRequestLocale(params.locale)
  const s = await findSolution(params.locale, params.slug)
  if (!s) notFound()
  const t = await getT('pages.solution')
  const c = await getT('common')
  const products = await listProducts(params.locale)
  const modules = s.modules.map((slug) => products.find((p) => p.slug === slug)).filter((p): p is NonNullable<typeof p> => Boolean(p))
  const channel = products.find((p) => p.slug === s.channel.product)
  const others = (await listSolutions(params.locale)).filter((x) => x.slug !== s.slug).slice(0, 4)

  return (
    <>
      <SiteNavbar tone="sky" currentPage="/soluciones" />
      <main id="contenido">
        <PageHeroSplit
          breadcrumb={
            <nav aria-label={c('breadcrumb')} className="flex items-center gap-1.5 text-xs text-go-200">
              <Link href="/soluciones" className="hover:text-white">
                {t('breadcrumb')}
              </Link>
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              <span className="text-white" aria-current="page">
                {s.name}
              </span>
            </nav>
          }
          title={s.headline}
          description={s.lead}
          icon={<Icon name={s.icon} className="h-8 w-8 text-white" />}
          primary={{ label: c('signupLong'), href: SIGNUP_URL }}
        />

        <Section tone="wash" eyebrow={t('forEyebrow')} title={t('forTitle')} subtitle={t('forSubtitle')}>
          <TypeChips items={s.types} className="mx-auto max-w-4xl" />
        </Section>

        <Section eyebrow={s.name} title={t('changesTitle')}>
          <div className="mx-auto max-w-4xl">
            <PainPoints items={s.pains} />
          </div>
        </Section>

        <Section tone="wash" eyebrow={t('dayEyebrow')} title={t('dayTitle')}>
          <DayTimeline moments={s.day} />
        </Section>

        <Section eyebrow={t('featuresEyebrow')} title={t('featuresTitle')}>
          <FeatureGrid items={s.features} columns={4} />
        </Section>

        {channel ? (
          <Section tone="tint">
            <Split
              visual={<ProductMock kind={channel.mock} />}
              children={
                <>
                  <Tag kind="recommended">{t('channelTag')}</Tag>
                  <SectionHeader align="left" title={s.channel.title} subtitle={s.channel.text} />
                  <LinkArrow href={`/producto/${channel.slug}`}>{t('channelCta', { name: channel.name })}</LinkArrow>
                </>
              }
            />
          </Section>
        ) : null}

        <Section eyebrow={t('modulesEyebrow')} title={t('modulesTitle')}>
          <CardLinkGrid items={modules.map((p) => ({ href: `/producto/${p.slug}`, title: p.name, text: p.short, icon: p.icon }))} columns={modules.length > 6 ? 4 : 3} />
        </Section>

        <FaqSection items={s.faq} tone="wash" />

        <Section eyebrow={t('othersEyebrow')} title={t('othersTitle')}>
          <CardLinkGrid items={others.map((o) => ({ href: `/soluciones/${o.slug}`, title: o.name, text: o.short, icon: o.icon, tags: o.types.slice(0, 3) }))} columns={4} />
        </Section>

        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
