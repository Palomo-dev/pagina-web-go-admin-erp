import type { Metadata } from 'next'
import { CtaBand, FeatureGrid, Section } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { Icon } from '@/components/site/icon'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { listIntegrationGroups } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Integraciones',
  description: 'Pagos, bancos, canales de reserva, domicilios, transportadoras, mensajería y redes conectados con GO Admin. API y webhooks para desarrolladores.',
}

export default async function IntegracionesPage() {
  const { groups, developer } = await listIntegrationGroups()
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/integraciones" />
      <main id="contenido">
        <PageHero eyebrow="Integraciones" title="Conecta lo que ya usas." subtitle="Pasarelas de pago, bancos, canales de reserva, apps de domicilios, transportadoras y mensajería hablan con GO Admin.">
          <nav aria-label="Categorías de integraciones" className="flex flex-wrap justify-center gap-2">
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
        <Section tone="tint" eyebrow="Para desarrolladores" title="API, webhooks y sincronizaciones.">
          <FeatureGrid items={developer} />
        </Section>
        <CtaBand title="¿Necesitas otra integración?" text="Cuéntanos qué herramienta usas y evaluamos cómo conectarla." cta="Escribirnos" href="/contacto" />
      </main>
      <SiteFooter />
    </>
  )
}
