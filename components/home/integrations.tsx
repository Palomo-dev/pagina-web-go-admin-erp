import { Icon } from '@/components/site/icon'
import { LinkArrow, SectionHeader } from '@/components/site/primitives'
import { INTEGRATIONS_ROW_1, INTEGRATIONS_ROW_2, TRUST } from '@/lib/site'
import { cn } from '@/lib/utils'

function Pill({ name }: { name: string }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 rounded-full border border-ink-line bg-white py-2 pl-2 pr-4 shadow-sm">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-go-tint text-sm font-semibold text-go-deep" aria-hidden>
        {name[0]}
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-ink">{name}</span>
    </li>
  )
}

function Row({ items, direction }: { items: string[]; direction: 'left' | 'right' }) {
  // Se duplica la lista para un desplazamiento continuo sin cortes.
  return (
    <div className="go-marquee mask-fade-x overflow-hidden py-1">
      <ul className={cn('flex w-max gap-4', direction === 'left' ? 'go-marquee-left' : 'go-marquee-right')}>
        {[...items, ...items].map((n, i) => (
          <Pill key={`${n}-${i}`} name={n} />
        ))}
      </ul>
    </div>
  )
}

/** 06 · Integraciones y confianza (Figma › IntegrationPill, TrustItem). */
export function Integrations() {
  return (
    <section className="overflow-hidden bg-go-wash py-20 sm:py-32" aria-labelledby="integraciones-title">
      <div className="container">
        <SectionHeader
          eyebrow="Integraciones"
          title={<span id="integraciones-title">Conecta lo que ya usas.</span>}
          subtitle="Pasarelas de pago, bancos, canales de reserva, domicilios y mensajería hablan con GO Admin."
        />
      </div>
      <div className="mt-12 grid gap-4" aria-label="Integraciones disponibles">
        <Row items={INTEGRATIONS_ROW_1} direction="left" />
        <Row items={INTEGRATIONS_ROW_2} direction="right" />
      </div>
      <div className="container mt-12 flex flex-col items-center gap-8">
        <ul className="flex flex-wrap justify-center gap-3">
          {TRUST.map((t) => (
            <li key={t.label} className="flex items-center gap-2.5 rounded-full border border-ink-line bg-white py-2 pl-2 pr-4">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-go-tint text-go-deep">
                <Icon name={t.icon} className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-ink">{t.label}</span>
            </li>
          ))}
        </ul>
        <LinkArrow href="/integraciones">Ver todas las integraciones</LinkArrow>
      </div>
    </section>
  )
}
