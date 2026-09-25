import type { Metadata } from 'next'
import { Support } from '@/components/home/support'
import { CardLinkGrid, Section } from '@/components/sections/blocks'
import { ChannelsShowcase } from '@/components/sections/channels-showcase'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { listSolutions } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Soluciones por industria',
  description: 'GO Admin para restaurantes, bares, cafeterías, hoteles, tiendas, gimnasios, parqueaderos, transporte y empresas de servicios en Colombia.',
}

export default async function SolucionesPage() {
  const solutions = await listSolutions()
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/soluciones" />
      <main id="contenido">
        <PageHero eyebrow="Soluciones" title="Cada negocio es un pequeño planeta." subtitle="Un restaurante no se administra como un hotel. Elige tu industria y empieza con los módulos, reportes y canales que ya usas." />
        <Section className="-mt-16 pt-0 sm:pt-0" tone="wash">
          <CardLinkGrid items={solutions.map((s) => ({ href: `/soluciones/${s.slug}`, title: s.name, text: s.short, icon: s.icon }))} />
        </Section>
        <Section tone="tint" eyebrow="Para todas las industrias" title="Tu página, tu tienda y tus reservas, incluidas.">
          <ChannelsShowcase />
        </Section>
        <Support />
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
