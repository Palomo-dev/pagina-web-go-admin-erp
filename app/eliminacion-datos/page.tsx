import type { Metadata } from 'next'
import { Faq } from '@/components/site/faq'
import { LegalLayout, LegalSection } from '@/components/sections/legal-layout'
import { DATA_DELETION } from '@/lib/content/legal'

export const metadata: Metadata = {
  title: 'Eliminación de datos',
  description: 'Cómo solicitar la eliminación de tus datos personales en GO Admin, plazos y qué pasa con cada tipo de dato.',
}

export default function EliminacionDatosPage() {
  const d = DATA_DELETION
  const toc = [
    { id: 'como', label: 'Cómo solicitarla' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'datos', label: 'Qué pasa con tus datos' },
    { id: 'plazos', label: 'Plazos por normativa' },
    { id: 'preguntas', label: 'Preguntas frecuentes' },
  ]
  return (
    <LegalLayout eyebrow="Tus derechos" title={d.title} intro={d.intro} toc={toc} currentPage="/eliminacion-datos">
      <LegalSection id="como" title="¿Cómo solicitar la eliminación?">
        <div className="grid gap-4 sm:grid-cols-3">
          {d.methods.map((m) => (
            <a key={m.title} href={m.href} className="flex flex-col gap-1 rounded-2xl border border-ink-line p-5 transition-colors hover:border-go">
              <span className="font-semibold text-ink">{m.title}</span>
              <span className="text-sm">{m.text}</span>
              <span className="break-words text-sm font-semibold text-go-deep">{m.contact}</span>
              <span className="mt-2 text-xs text-ink-muted">{m.details}</span>
            </a>
          ))}
        </div>
      </LegalSection>
      <LegalSection id="proceso" title="Proceso de eliminación">
        <ol className="grid gap-5">
          {d.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-go text-sm font-semibold text-white">{i + 1}</span>
              <span>
                <span className="block font-semibold text-ink">{s.title}</span>
                <span className="block">{s.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </LegalSection>
      <LegalSection id="datos" title="¿Qué sucede con mis datos?">
        <div className="overflow-hidden rounded-2xl border border-ink-line">
          {d.retention.map((r, i) => (
            <div key={r.type} className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between ${i ? 'border-t border-ink-line' : ''}`}>
              <span className="font-semibold text-ink">{r.type}</span>
              <span className="text-sm">{r.period}</span>
            </div>
          ))}
        </div>
      </LegalSection>
      <LegalSection id="plazos" title="Plazos por normativa">
        <div className="grid gap-4 sm:grid-cols-3">
          {d.frameworks.map((f) => (
            <div key={f.title} className="rounded-2xl bg-go-wash p-5">
              <p className="font-semibold text-ink">{f.title}</p>
              <p className="mt-1 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </LegalSection>
      <LegalSection id="preguntas" title="Preguntas frecuentes">
        <Faq items={d.faq} defaultOpen={-1} />
      </LegalSection>
    </LegalLayout>
  )
}
