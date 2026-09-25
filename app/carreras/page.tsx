import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { FeatureGrid, Section, StepList } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink, Tag } from '@/components/site/primitives'
import { HIRING_STEPS, WORK_PRINCIPLES } from '@/lib/content/company'
import { listOpenPositions } from '@/lib/data'
import { CONTACT } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Carreras',
  description: 'Trabaja en GO Admin: construimos el software con el que los negocios colombianos organizan su operación.',
}

export default async function CarrerasPage() {
  const positions = await listOpenPositions()
  const apply = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Hoja de vida · Carreras GO Admin')}`
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/carreras" />
      <main id="contenido">
        <PageHero eyebrow="Carreras" title="Construye lo que usa un negocio mañana." subtitle="Somos un equipo en Medellín que hace software para restaurantes, hoteles, tiendas y empresas de todo el país." />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0" eyebrow="Vacantes" title={positions.length ? 'Vacantes abiertas.' : 'Hoy no tenemos vacantes abiertas.'}>
          {positions.length ? (
            <ul className="mx-auto grid max-w-3xl gap-4">
              {positions.map((p) => (
                <li key={p.id} className="flex flex-col gap-3 rounded-2xl border border-ink-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-h4 text-ink">{p.title}</p>
                    <p className="mt-1 text-sm text-ink-body">{p.summary}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Tag>{p.area}</Tag>
                      <Tag>{p.location}</Tag>
                      <Tag kind="brand">{p.type}</Tag>
                    </div>
                  </div>
                  <CtaLink href={`${apply}%20·%20${encodeURIComponent(p.title)}`} kind="secondary">
                    Aplicar
                  </CtaLink>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-dashed border-go-200 bg-go-wash p-10 text-center">
              <Mail className="h-8 w-8 text-go" strokeWidth={1.5} aria-hidden />
              <p className="text-ink-body">Si quieres trabajar con nosotros, envíanos tu hoja de vida y cuéntanos qué te gustaría construir. Te escribimos cuando abramos un rol que encaje.</p>
              <CtaLink href={apply}>Enviar hoja de vida</CtaLink>
            </div>
          )}
        </Section>
        <Section tone="wash" eyebrow="Cómo trabajamos" title="Lo que puedes esperar.">
          <FeatureGrid items={WORK_PRINCIPLES} columns={4} />
        </Section>
        <Section eyebrow="Proceso" title="Cómo es el proceso.">
          <StepList steps={HIRING_STEPS} />
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
