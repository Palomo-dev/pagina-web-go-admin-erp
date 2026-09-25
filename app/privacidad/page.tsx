import type { Metadata } from 'next'
import { Bullets, LegalLayout, LegalSection } from '@/components/sections/legal-layout'
import { PRIVACY } from '@/lib/content/legal'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Cómo GO Admin recopila, usa y protege tus datos personales.',
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export default function PrivacidadPage() {
  const toc = [{ id: 'principios', label: 'Principios' }, ...PRIVACY.sections.map((s) => ({ id: slug(s.title), label: s.title.replace(/^\d+\.\s*/, '') })), { id: 'contacto', label: 'Contacto' }]
  return (
    <LegalLayout eyebrow="Legal" title={PRIVACY.title} intro={PRIVACY.intro} updated={PRIVACY.updated} toc={toc} currentPage="/privacidad">
      <LegalSection id="principios" title="Nuestros principios">
        <div className="grid gap-4 sm:grid-cols-2">
          {PRIVACY.principles.map((p) => (
            <div key={p.title} className="rounded-2xl bg-go-wash p-5">
              <p className="font-semibold text-ink">{p.title}</p>
              <p className="mt-1 text-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </LegalSection>
      {PRIVACY.sections.map((s) => (
        <LegalSection key={s.title} id={slug(s.title)} title={s.title}>
          <Bullets items={s.items} />
        </LegalSection>
      ))}
      <LegalSection id="contacto" title="¿Tienes preguntas sobre privacidad?">
        <div className="grid gap-4 sm:grid-cols-2">
          {PRIVACY.contacts.map((c) => (
            <a key={c.email} href={`mailto:${c.email}`} className="rounded-2xl border border-ink-line p-5 transition-colors hover:border-go">
              <p className="font-semibold text-ink">{c.title}</p>
              <p className="mt-1 text-sm">{c.text}</p>
              <p className="mt-3 text-sm font-semibold text-go-deep">{c.email}</p>
            </a>
          ))}
        </div>
      </LegalSection>
    </LegalLayout>
  )
}
