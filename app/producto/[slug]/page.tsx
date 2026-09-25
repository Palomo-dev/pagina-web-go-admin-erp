import type { Metadata } from 'next'
import Link from 'next/link'
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
import { CATEGORIES } from '@/lib/catalog/products'
import { findProduct, listProducts, listSolutions } from '@/lib/data'
import { SIGNUP_URL } from '@/lib/site'

export async function generateStaticParams() {
  return (await listProducts()).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await findProduct(params.slug)
  if (!p) return {}
  return { title: p.name, description: p.lead }
}

/** Producto · plantilla (Figma › 03 Pantallas › Producto). Todo el contenido sale de lib/catalog/products.ts. */
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const p = await findProduct(params.slug)
  if (!p) notFound()
  const all = await listProducts()
  const solutions = (await listSolutions()).filter((s) => p.solutions.includes(s.slug))
  const related = all.filter((x) => p.connects.includes(x.slug))
  const category = CATEGORIES.find((c) => c.id === p.category)!

  return (
    <>
      <SiteNavbar tone="sky" currentPage="/producto" />
      <main id="contenido">
        <PageHeroSplit
          breadcrumb={
            <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-go-200">
              <Link href="/producto" className="hover:text-white">
                Producto
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
          primary={{ label: 'Crear mi cuenta gratis', href: SIGNUP_URL }}
        />

        <Section tone="wash" className="-mt-10 pt-0 sm:pt-0">
          <Split
            visual={<ProductMock kind={p.mock} />}
            children={
              <>
                {p.isChannel ? <Tag kind="brand">Incluido al registrar tu organización</Tag> : null}
                <SectionHeader align="left" eyebrow={p.eyebrow} title={`${p.name}, conectado con todo lo demás.`} />
                <CheckList items={p.highlights} />
              </>
            }
          />
        </Section>

        <Section eyebrow="Lo que resuelve" title="De cómo es hoy a cómo puede ser.">
          <div className="mx-auto max-w-4xl">
            <PainPoints items={p.pains} />
          </div>
        </Section>

        <Section tone="wash" eyebrow="Funciones" title="Todo lo que necesitas, sin módulos sueltos.">
          <FeatureGrid items={p.features} />
        </Section>

        <Section eyebrow="Cómo funciona" title="Empieza en cuatro pasos.">
          <StepList steps={p.steps} />
        </Section>

        {related.length ? (
          <Section tone="tint" eyebrow="Módulos conectados" title="La información fluye sin volver a digitarla.">
            <ChipLinks items={related.map((r) => ({ href: `/producto/${r.slug}`, label: r.name, icon: r.icon }))} />
          </Section>
        ) : null}

        {solutions.length ? (
          <Section eyebrow="Soluciones" title="Así lo usan distintos negocios.">
            <CardLinkGrid items={solutions.map((s) => ({ href: `/soluciones/${s.slug}`, title: s.name, text: s.short, icon: s.icon }))} columns={solutions.length > 3 ? 4 : 3} />
          </Section>
        ) : null}

        <FaqSection items={p.faq} tone="wash" />
        <NightCta title={`Empieza con ${p.eyebrow} hoy.`} />
      </main>
      <SiteFooter />
    </>
  )
}
