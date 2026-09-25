import type { Metadata } from 'next'
import { Traveler } from '@/components/illustrations/art'
import { CardLinkGrid, FeatureGrid, Section, Split } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeader } from '@/components/site/primitives'
import { ABOUT } from '@/lib/content/company'
import { CONTACT } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Acerca de',
  description: 'GO Admin reúne las herramientas para organizar la operación de las pequeñas y medianas empresas colombianas. Desde Medellín.',
}

export default function AcercaDePage() {
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/acerca-de" />
      <main id="contenido">
        <PageHero eyebrow="Acerca de GO Admin" title="El negocio al centro." subtitle="Inventario, ventas, contabilidad, nómina, clientes y canales digitales forman parte de una misma historia: entender qué pasa en el negocio y poder actuar." />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <Split visual={<Traveler className="mx-auto w-72" title="El viajero de GO Admin" />}>
            <SectionHeader align="left" eyebrow="Misión" title="Tu negocio, en un solo lugar." subtitle={ABOUT.mission} />
            <p className="text-ink-body">{ABOUT.audience}</p>
          </Split>
        </Section>
        <Section eyebrow="Cómo somos" title="Así trabajamos y así te hablamos.">
          <FeatureGrid items={ABOUT.values} columns={4} />
        </Section>
        <Section tone="wash" eyebrow="Desde Colombia" title="Palabras familiares, pesos colombianos y situaciones reconocibles." subtitle={`${CONTACT.legalName} · NIT ${CONTACT.nit} · ${CONTACT.city}`}>
          <CardLinkGrid
            items={[
              { href: '/carreras', title: 'Carreras', text: 'Construye con nosotros.', icon: 'rocket' },
              { href: '/blog', title: 'Blog', text: 'Ideas para ordenar tu negocio.', icon: 'book' },
              { href: '/contacto', title: 'Contacto', text: 'Hablemos de tu negocio.', icon: 'message' },
            ]}
          />
        </Section>
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
