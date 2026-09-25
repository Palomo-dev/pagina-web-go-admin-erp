'use client'

import { useMemo, useState } from 'react'
import { ChevronRight, Search } from 'lucide-react'
import { Icon } from '@/components/site/icon'
import { PageHero } from '@/components/site/page-hero'
import { LinkArrow, SectionHeader } from '@/components/site/primitives'
import { CONTACT, GUIDES } from '@/lib/site'

const POPULAR = [
  { label: 'Primer ingreso', q: 'empresa' },
  { label: 'Facturación DIAN', q: 'factura' },
  { label: 'Importar productos', q: 'importa' },
  { label: 'Cierre de caja', q: 'caja' },
]

function normalize(s: string) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

/**
 * Hero del centro de ayuda con buscador + sección de guías.
 * Comparten el estado de búsqueda: las guías se filtran mientras escribes.
 */
export function SupportHub({ children }: { children?: React.ReactNode }) {
  const [q, setQ] = useState('')
  const results = useMemo(() => {
    const n = normalize(q.trim())
    if (!n) return GUIDES
    return GUIDES.map((g) => ({ ...g, articles: normalize(g.title).includes(n) ? g.articles : g.articles.filter((a) => normalize(a).includes(n)) })).filter((g) => g.articles.length > 0)
  }, [q])

  const search = (value: string) => {
    setQ(value)
    if (value) document.getElementById('guias')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <PageHero eyebrow="Centro de ayuda" title="¿En qué te ayudamos?" subtitle="Guías, personas y capacitaciones para que GO Admin trabaje a tu ritmo.">
        <form role="search" className="mx-auto flex w-full max-w-2xl items-center gap-3 rounded-2xl bg-white py-2 pl-5 pr-2 text-left shadow-float" onSubmit={(e) => { e.preventDefault(); search(q) }}>
          <Search className="h-5 w-5 shrink-0 text-ink-muted" strokeWidth={1.5} aria-hidden />
          <label htmlFor="buscar-ayuda" className="sr-only">
            Buscar en el centro de ayuda
          </label>
          <input
            id="buscar-ayuda"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Busca: “factura”, “cerrar caja”…"
            className="h-12 min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-ink-muted focus:outline-none"
          />
          <button type="submit" className="h-11 rounded-xl bg-go-action px-5 text-sm font-semibold text-white transition-colors hover:bg-go-deep">
            Buscar
          </button>
        </form>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-go-50">Populares:</span>
          {POPULAR.map((p) => (
            <button key={p.label} type="button" onClick={() => search(p.q)} className="rounded-full bg-white/15 px-3 py-1 text-xs text-white transition-colors hover:bg-white/25">
              {p.label}
            </button>
          ))}
        </div>
      </PageHero>

      {children}

      <section id="guias" className="scroll-mt-24 bg-white py-20 sm:py-28" aria-labelledby="guias-title">
        <div className="container">
          <SectionHeader eyebrow="Guías" title={<span id="guias-title">Aprende a tu ritmo.</span>} subtitle="Artículos cortos con capturas y videos de menos de tres minutos." />
          <div className="mt-12" aria-live="polite">
            {results.length === 0 ? (
              <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-go-200 bg-go-wash p-10 text-center">
                <p className="text-h4 text-ink">No encontramos “{q}”.</p>
                <p className="mt-2 text-ink-body">Escríbenos y te respondemos con tu caso a la mano.</p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
                  <LinkArrow href={CONTACT.whatsappUrl}>Preguntar por WhatsApp</LinkArrow>
                  <button type="button" onClick={() => setQ('')} className="text-sm font-semibold text-ink-body underline underline-offset-4">
                    Ver todas las guías
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((g) => (
                  <article key={g.title} className="flex flex-col gap-4 rounded-[20px] border border-ink-line bg-white p-7 transition-shadow duration-fast hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-go-tint text-go-deep">
                        <Icon name={g.icon} className="h-[22px] w-[22px]" />
                      </span>
                      <h3 className="text-h4 text-ink">{g.title}</h3>
                    </div>
                    <ul className="grid gap-2.5">
                      {g.articles.map((a) => (
                        <li key={a} className="flex items-center gap-2 text-sm text-ink-body">
                          <ChevronRight className="h-4 w-4 text-go" strokeWidth={1.75} aria-hidden />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
