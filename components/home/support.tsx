import { Traveler } from '@/components/illustrations/art'
import { SectionHeader } from '@/components/site/primitives'
import { SupportCards } from '@/components/site/support-cards'

/** 08 · Soporte — "No estás solo en esto." */
export function Support() {
  return (
    <section className="bg-go-tint py-20 sm:py-32" aria-labelledby="soporte-title">
      <div className="container grid items-center gap-14 lg:grid-cols-[440px_1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeader
            align="left"
            eyebrow="Soporte"
            title={<span id="soporte-title">No estás solo en esto.</span>}
            subtitle="Personas reales que conocen tu negocio y hablan tu idioma. Te acompañamos desde la configuración hasta el primer cierre de mes."
          />
          <Traveler className="hidden w-56 lg:block" title="El viajero de GO Admin acompaña tu negocio" />
        </div>
        <SupportCards />
      </div>
    </section>
  )
}
