import type { Metadata } from 'next'
import { Industries } from '@/components/home/industries'
import { Support } from '@/components/home/support'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'

export const metadata: Metadata = {
  title: 'Soluciones por industria',
  description: 'GO Admin para restaurantes, hoteles, tiendas, gimnasios, parqueaderos, transporte y servicios en Colombia.',
}

/** Soluciones: cada industria llega configurada con sus módulos y flujos. */
export default function IndustriasPage() {
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/industrias" />
      <main id="contenido">
        <PageHero eyebrow="Soluciones" title="Cada negocio es un pequeño planeta." subtitle="Un restaurante no se administra como un hotel. Elige tu industria y empieza con los módulos, reportes y flujos que ya usas." />
        <div className="-mt-16">
          <Industries />
        </div>
        <Support />
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
