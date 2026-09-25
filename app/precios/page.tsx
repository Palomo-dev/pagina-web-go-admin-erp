import type { Metadata } from 'next'
import { Check, FileCheck, Minus } from 'lucide-react'
import { Faq } from '@/components/site/faq'
import { SiteFooter } from '@/components/site/footer'
import { Icon } from '@/components/site/icon'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { PricingCards } from '@/components/site/pricing'
import { CtaLink, SectionHeader } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { ADDONS, FAQ_BILLING, PLANS, PLAN_COMPARISON } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Precios',
  description: 'Planes Pro, Business y Ultimate en pesos colombianos. Todos incluyen facturación electrónica DIAN, soporte en español y actualizaciones.',
}

function Cell({ v }: { v: string }) {
  if (v === 'yes') return <Check className="mx-auto h-5 w-5 text-go" strokeWidth={2} aria-label="Incluido" />
  if (v === 'no') return <Minus className="mx-auto h-5 w-5 text-slate-300" strokeWidth={2} aria-label="No incluido" />
  return <span className="tabular">{v}</span>
}

/** Precios (Figma › 03 Pantallas › Precios · Escritorio). */
export default function PreciosPage() {
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/precios" />
      <main id="contenido">
        <PageHero eyebrow="Precios en pesos colombianos" title="Planes claros, sin letra pequeña." subtitle="Todos incluyen facturación electrónica DIAN, soporte en español y actualizaciones. Elige según el tamaño de tu operación." />

        <section className="relative -mt-24 bg-transparent pb-20 sm:pb-28">
          <div className="container">
            <PricingCards />
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28" aria-labelledby="comparativo-title">
          <div className="container">
            <SectionHeader eyebrow="Comparativo" title={<span id="comparativo-title">Qué incluye cada plan.</span>} />
            <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-ink-line">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <caption className="sr-only">Comparativo de planes Pro, Business y Ultimate</caption>
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold text-ink">
                      Característica
                    </th>
                    {PLANS.map((p) => (
                      <th key={p.id} scope="col" className={`px-6 py-4 text-center font-semibold ${p.recommended ? 'text-go-deep' : 'text-ink'}`}>
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PLAN_COMPARISON.map((row, i) => (
                    <tr key={row.label} className={i % 2 ? 'bg-go-wash/60' : 'bg-white'}>
                      <th scope="row" className="px-6 py-4 font-medium text-ink">
                        {row.label}
                      </th>
                      {row.values.map((v, j) => (
                        <td key={j} className={`px-6 py-4 text-center text-ink ${j === 1 ? 'bg-go-tint/40' : ''}`}>
                          <Cell v={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        <section className="bg-go-wash py-20 sm:py-28" aria-labelledby="complementos-title">
          <div className="container flex flex-col items-center gap-10">
            <SectionHeader eyebrow="Complementos" title={<span id="complementos-title">¿Necesitas más capacidad?</span>} subtitle="Agrega solo lo que te falta, en cualquier plan." />
            <Reveal className="flex w-full max-w-4xl flex-col gap-6 rounded-3xl border border-ink-line bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-go-tint text-go-deep">
                  <FileCheck className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <h3 className="text-h4 text-ink">Certificado digital de firma DIAN</h3>
                  <p className="text-sm text-ink-body">Necesario para firmar tus facturas electrónicas. Vigencia de un año.</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <p className="whitespace-nowrap">
                  <span className="tabular text-h3 text-ink">$ 130.000</span> <span className="text-sm text-ink-muted">/ año</span>
                </p>
                <CtaLink href="/contacto" kind="secondary" arrow={false}>
                  Solicitar
                </CtaLink>
              </div>
            </Reveal>
            <ul className="flex flex-wrap justify-center gap-3">
              {ADDONS.map((a) => (
                <li key={a.label} className="flex items-center gap-2.5 rounded-full border border-ink-line bg-white py-2 pl-2 pr-4">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-go-tint text-go-deep">
                    <Icon name={a.icon} className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-ink">{a.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28" aria-labelledby="faq-precios-title">
          <div className="container">
            <SectionHeader eyebrow="Preguntas de facturación" title={<span id="faq-precios-title">Sobre pagos y planes.</span>} />
            <div className="mt-12">
              <Faq items={FAQ_BILLING} />
            </div>
          </div>
        </section>

        <section className="bg-go text-white">
          <div className="container flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-h3">¿No sabes qué plan elegir?</h2>
              <p className="mt-2 text-go-50">Cuéntanos cuántas sedes, usuarios y facturas manejas y te recomendamos el plan justo.</p>
            </div>
            <CtaLink href="/contacto" kind="light" size="lg">
              Hablar con ventas
            </CtaLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
