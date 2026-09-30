import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Bullets, LegalLayout, LegalSection } from '@/components/sections/legal-layout'
import { TERMS } from '@/lib/content/legal'

export async function generateMetadata({ params }: PageProps) {
  const meta = await pageMetadata(params.locale, '/terminos', 'pages.terms')
  // Borrador pendiente de revisión legal: no se indexa hasta publicarse la versión final.
  return TERMS.draft ? { ...meta, robots: { index: false, follow: true } } : meta
}

export default async function TerminosPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.terms')
  
  // Mostrar siempre el texto español en todos los locales
  const showSpanishOnlyNotice = !params.locale.startsWith('es')
  const spanishNotice = params.locale.startsWith('en')
    ? 'This legal document is available only in Spanish.'
    : params.locale.startsWith('pt')
      ? 'Este documento legal está disponível apenas em espanhol.'
      : params.locale.startsWith('fr')
        ? 'Ce document juridique est disponible uniquement en espagnol.'
        : ''
  
  const id = (i: number) => `seccion-${i + 1}`
  const toc = [...TERMS.sections.map((s, i) => ({ id: id(i), label: s.title.replace(/^\d+\.\s*/, '') })), { id: 'contacto', label: 'Contacto' }]
  return (
    <LegalLayout 
      eyebrow="Legal" 
      title={TERMS.title} 
      intro={TERMS.intro} 
      updated={`Última actualización: ${TERMS.updated}`} 
      toc={toc} 
      currentPage="/terminos" 
      reference={false}
    >
      {showSpanishOnlyNotice && (
        <div className="mb-8 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {spanishNotice}
        </div>
      )}
      {TERMS.draft ? <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">Versión preliminar en revisión legal. Puede cambiar antes de su publicación definitiva.</p> : null}
      {TERMS.sections.map((s, i) => (
        <LegalSection key={s.title} id={id(i)} title={s.title}>
          <Bullets items={s.items} />
        </LegalSection>
      ))}
      <LegalSection id="contacto" title={TERMS.contact.title}>
        <a href={`mailto:${TERMS.contact.email}`} className="block rounded-2xl border border-ink-line p-5 transition-colors hover:border-go sm:max-w-sm">
          <p className="text-sm">{TERMS.contact.text}</p>
          <p className="mt-2 text-sm font-semibold text-go-deep">{TERMS.contact.email}</p>
        </a>
      </LegalSection>
    </LegalLayout>
  )
}
