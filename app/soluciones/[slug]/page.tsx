import type { Metadata } from 'next'
import Link from 'next/link'
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

export async function generateStaticParams() {
  return (await listSolutions()).map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = await findSolution(params.slug)
  if (!s) return {}
  return { title: `GO Admin para ${s.name.toLowerCase()}`, description: s.lead }
}

/** Solución · plantilla (Figma › 03 Pantallas › Solución). Contenido en lib/catalog/solutions.ts. */
export default async function SolutionPage({ params }: { params: { slug: string } }) {
  const s = await findSolution(params.slug)
  if (!s) notFound()
  const products = await listProducts()
  const modules = s.modules.map((slug) => products.find((p) => p.slug === slug)).filter((p): p is NonNullable<typeof p> => Boolean(p))
  const channel = products.find((p) => p.slug === s.channel.product)
  const others = (await listSolutions()).filter((x) => x.slug !== s.slug).slice(0, 4)

  return (
    <>
      <SiteNavbar tone="sky" currentPage="/soluciones" />
      <main id="contenido">
        <PageHeroSplit
          breadcrumb={
            <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-go-200">
              <Link href="/soluciones" className="hover:text-white">
                Soluciones
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
          primary={{ label: 'Crear mi cuenta gratis', href: SIGNUP_URL }}
        />

        <Section tone="wash" eyebrow="Para quién es" title="Hecho para negocios como el tuyo." subtitle="Estos son algunos ejemplos. Si tu negocio trabaja parecido, GO Admin se adapta: activas los módulos que usas y configuras tus productos, tarifas y roles.">
          <TypeChips items={s.types} className="mx-auto max-w-4xl" />
        </Section>

        <Section eyebrow={s.name} title="Lo que cambia en tu día a día.">
          <div className="mx-auto max-w-4xl">
            <PainPoints items={s.pains} />
          </div>
        </Section>

        <Section tone="wash" eyebrow="Un día contigo" title={`Un día en tu negocio con GO Admin.`}>
          <DayTimeline moments={s.day} />
        </Section>

        <Section eyebrow="Pensado para tu operación" title="Funciones que vas a usar todos los días.">
          <FeatureGrid items={s.features} columns={4} />
        </Section>

        {channel ? (
          <Section tone="tint">
            <Split
              visual={<ProductMock kind={channel.mock} />}
              children={
                <>
                  <Tag kind="recommended">Canal digital incluido</Tag>
                  <SectionHeader align="left" title={s.channel.title} subtitle={s.channel.text} />
                  <LinkArrow href={`/producto/${channel.slug}`}>Conocer {channel.name.toLowerCase()}</LinkArrow>
                </>
              }
            />
          </Section>
        ) : null}

        <Section eyebrow="Módulos" title="Lo que incluye tu operación.">
          <CardLinkGrid items={modules.map((p) => ({ href: `/producto/${p.slug}`, title: p.name, text: p.short, icon: p.icon }))} columns={modules.length > 6 ? 4 : 3} />
        </Section>

        <FaqSection items={s.faq} tone="wash" />

        <Section eyebrow="Otras soluciones" title="También trabajamos con…">
          <CardLinkGrid items={others.map((o) => ({ href: `/soluciones/${o.slug}`, title: o.name, text: o.short, icon: o.icon, tags: o.types.slice(0, 3) }))} columns={4} />
        </Section>

        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
