import { LinkArrow, SectionHeader } from '@/components/site/primitives'
import { PricingCards } from '@/components/site/pricing'
import { RevealGroup, RevealItem } from '@/components/site/reveal'

const STEPS = [
  { n: '1', title: 'Crea tu cuenta', text: 'Sin tarjeta de crédito. Elige tu industria y GO Admin se configura con lo que necesitas.' },
  { n: '2', title: 'Carga tu información', text: 'Importa productos, clientes y saldos desde tu hoja de cálculo. Te acompañamos en el proceso.' },
  { n: '3', title: 'Vende y factura', text: 'Empieza a vender, facturar ante la DIAN y ver tus reportes desde el primer día.' },
]

/** 07 · Cómo empezar y planes (Figma › StepItem, BillingToggle, PricingCard). */
export function Plans() {
  return (
    <section id="planes" className="bg-white py-20 sm:py-32" aria-labelledby="planes-title">
      <div className="container">
        <SectionHeader
          eyebrow="Planes"
          title={<span id="planes-title">Empieza hoy. Crece a tu ritmo.</span>}
          subtitle="Todos los planes incluyen facturación electrónica, soporte en español y actualizaciones."
        />
        <RevealGroup className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-3">
          {STEPS.map((s) => (
            <RevealItem key={s.n} className="flex flex-col gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-go text-sm font-semibold text-white">{s.n}</span>
              <h3 className="text-h4 text-ink">{s.title}</h3>
              <p className="text-sm text-ink-body">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <PricingCards className="mt-16" />
        <div className="mt-8 flex justify-center">
          <LinkArrow href="/precios">Comparar todos los planes y complementos</LinkArrow>
        </div>
      </div>
    </section>
  )
}
