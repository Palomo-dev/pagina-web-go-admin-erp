import type { Metadata } from 'next'
import { Journey } from '@/components/home/journey'
import { CardLinkGrid, CtaBand, Section } from '@/components/sections/blocks'
import { ChannelsShowcase } from '@/components/sections/channels-showcase'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { listProductsByCategory } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Producto',
  description: 'Ventas y POS, inventario, facturación electrónica, contabilidad, nómina, CRM, chat omnicanal, página web, tienda en línea, motor de reservas, reportes e IA en GO Admin.',
}

/** Producto: recorrido por los planetas, canales digitales y catálogo por categoría. */
export default async function ProductoPage() {
  const groups = await listProductsByCategory()
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/producto" />
      <main id="contenido">
        <PageHero eyebrow="Producto" title="Todos los módulos, una sola operación." subtitle="Lo que vendes, guardas, facturas y pagas vive en el mismo lugar. Y tu negocio sale a internet con su página, su tienda y sus reservas." />
        <Journey />
        <Section tone="tint" eyebrow="Canales digitales" title="Tu negocio en internet desde el primer día." subtitle="Cada organización que se registra recibe su página web, su tienda en línea y su motor de reservas, conectados al mismo inventario y al mismo calendario.">
          <ChannelsShowcase />
        </Section>
        {groups.map((g, i) => (
          <Section key={g.id} id={g.id} tone={i % 2 ? 'wash' : 'white'} eyebrow={g.name} title={g.text} align="left">
            <CardLinkGrid items={g.items.map((p) => ({ href: `/producto/${p.slug}`, title: p.name, text: p.short, icon: p.icon }))} columns={g.items.length === 2 ? 2 : 3} />
          </Section>
        ))}
        <CtaBand title="¿No sabes por dónde empezar?" text="Cuéntanos cómo trabajas y te mostramos qué módulos necesitas hoy." cta="Hablar con ventas" href="/contacto" />
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
