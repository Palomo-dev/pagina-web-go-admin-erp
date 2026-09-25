import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { FiscalCountries } from '@/components/sections/fiscal-countries'
import { Link } from '@/i18n/navigation'
import { getT } from '@/i18n/t-server'
import { alternates } from '@/lib/seo'
import type { PageProps } from '@/lib/page'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { CardLinkGrid, CheckList, ChipLinks, FaqSection, FeatureGrid, PainPoints, Section, Split, StepList } from '@/components/sections/blocks'
import { ProductMock } from '@/components/sections/product-mock'
import { SiteFooter } from '@/components/site/footer'
import { Icon } from '@/components/site/icon'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHeroSplit } from '@/components/site/page-hero-split'
import { SectionHeader, Tag } from '@/components/site/primitives'
import { PRODUCTS } from '@/lib/catalog/products'
import { findProduct, listCategories, listProducts, listSolutions } from '@/lib/data'
import { SIGNUP_URL } from '@/lib/site'

type Props = PageProps<{ slug: string }>

// El layout genera los mercados; aquí, un producto por mercado.
export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  setRequestLocale(params.locale)
  const p = await findProduct(params.locale, params.slug)
  if (!p) return {}
  return { title: p.name, description: p.lead, alternates: alternates(`/producto/${p.slug}`, params.locale) }
}

/** Producto · plantilla (Figma › 03 Pantallas › Producto). Todo el contenido sale de lib/catalog/products.ts. */
export default async function ProductPage({ params }: Props) {
  setRequestLocale(params.locale)
  const p = await findProduct(params.locale, params.slug)
  if (!p) notFound()
  const t = await getT('pages.product')
  const c = await getT('common')
  const all = await listProducts(params.locale)
  const solutions = (await listSolutions(params.locale)).filter((s) => p.solutions.includes(s.slug))
  const related = all.filter((x) => p.connects.includes(x.slug))
  const category = (await listCategories(params.locale)).find((x) => x.id === p.category)!

  return (
    <>
      <SiteNavbar tone="sky" currentPage="/producto" />
      <main id="contenido">
        <PageHeroSplit
          breadcrumb={
            <nav aria-label={c('breadcrumb')} className="flex items-center gap-1.5 text-xs text-go-200">
              <Link href="/producto" className="hover:text-white">
                {t('breadcrumb')}
              </Link>
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              <span>{category.name}</span>
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              <span className="text-white" aria-current="page">
                {p.eyebrow}
              </span>
            </nav>
          }
          title={p.headline}
          description={p.lead}
          icon={<Icon name={p.icon} className="h-8 w-8 text-white" />}
          primary={{ label: c('signupLong'), href: SIGNUP_URL }}
        />

        <Section tone="wash" className="-mt-10 pt-0 sm:pt-0">
          <Split
            visual={<ProductMock kind={p.mock} />}
            children={
              <>
                {p.isChannel ? <Tag kind="brand">{t('includedTag')}</Tag> : null}
                <SectionHeader align="left" eyebrow={p.eyebrow} title={t('connectedTitle', { name: p.name })} />
                <CheckList items={p.highlights} />
              </>
            }
          />
        </Section>

        <Section eyebrow={t('solvesEyebrow')} title={t('solvesTitle')}>
          <div className="mx-auto max-w-4xl">
            <PainPoints items={p.pains} />
          </div>
        </Section>

        <Section tone="wash" eyebrow={t('featuresEyebrow')} title={t('featuresTitle')}>
          <FeatureGrid items={p.features} />
        </Section>

        <Section eyebrow={t('howEyebrow')} title={t('howTitle')}>
          <StepList steps={p.steps} />
        </Section>

        {p.slug === 'facturacion-electronica' ? <FiscalCountries /> : null}

        {related.length ? (
          <Section tone="tint" eyebrow={t('connectsEyebrow')} title={t('connectsTitle')}>
            <ChipLinks items={related.map((r) => ({ href: `/producto/${r.slug}`, label: r.name, icon: r.icon }))} />
          </Section>
        ) : null}

        {solutions.length ? (
          <Section eyebrow={t('solutionsEyebrow')} title={t('solutionsTitle')}>
            <CardLinkGrid items={solutions.map((s) => ({ href: `/soluciones/${s.slug}`, title: s.name, text: s.short, icon: s.icon }))} columns={solutions.length > 3 ? 4 : 3} />
          </Section>
        ) : null}

        <FaqSection items={p.faq} tone="wash" />
        <NightCta title={t('ctaTitle', { name: p.eyebrow })} />
      </main>
      <SiteFooter />
    </>
  )
}
