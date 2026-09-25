import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Icon } from '@/components/site/icon'
import { LinkArrow, SectionHeader } from '@/components/site/primitives'
import { RevealGroup, RevealItem } from '@/components/site/reveal'
import { INDUSTRIES } from '@/lib/site'

/** 05 · Soluciones por industria (Figma › IndustryCard). */
export function Industries() {
  return (
    <section className="bg-white py-20 sm:py-32" aria-labelledby="industrias-title">
      <div className="container">
        <SectionHeader
          eyebrow="Soluciones"
          title={<span id="industrias-title">Hecho para cómo trabaja tu negocio.</span>}
          subtitle="Restaurantes, hospedajes, tiendas, consultorios, canchas o empresas de servicios: elige lo que más se parece a tu negocio y GO Admin llega con los módulos, reportes y flujos que usas todos los días."
        />
        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {INDUSTRIES.map((i) => (
            <RevealItem key={i.href}>
              <Link
                href={i.href}
                className="group flex h-full min-h-[200px] flex-col justify-between rounded-[20px] border border-ink-line bg-white p-6 transition-all duration-fast ease-out hover:-translate-y-1 hover:border-go hover:shadow-lg"
              >
                <span className="flex flex-col gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-go-tint text-go-deep transition-colors duration-fast group-hover:bg-go group-hover:text-white">
                    <Icon name={i.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <span className="text-h4 text-ink">{i.name}</span>
                  <span className="text-sm text-ink-body">{i.description}</span>
                  <span className="text-xs text-ink-muted">{i.examples.slice(0, 4).join(' · ')} y más</span>
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-go-deep">
                  Ver solución
                  <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
                </span>
              </Link>
            </RevealItem>
          ))}
          <RevealItem className="sm:col-span-2 lg:col-span-4">
            <div className="flex h-full flex-col justify-between gap-4 rounded-[20px] bg-go p-6 text-white sm:flex-row sm:items-center sm:p-8">
              <span className="flex flex-col gap-2">
                <span className="text-h4">¿Tu negocio no aparece?</span>
                <span className="text-sm text-go-50">GO Admin se arma por módulos: activas lo que usas y lo configuras a tu medida. Cuéntanos cómo trabajas y te mostramos cómo se vería.</span>
              </span>
              <LinkArrow href="/contacto" tone="light" className="shrink-0">
                Hablar con ventas
              </LinkArrow>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
