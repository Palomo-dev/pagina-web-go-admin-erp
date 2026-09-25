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
  const { TERMS: terms, isReferenceTranslation } = await getLegal(params.locale)
  const id = (i: number) => `seccion-${i + 1}`
  const toc = [...terms.sections.map((s, i) => ({ id: id(i), label: s.title.replace(/^\d+\.\s*/, '') })), { id: 'contacto', label: t('contact') }]
  return (
    <LegalLayout eyebrow={t('eyebrow')} title={terms.title} intro={terms.intro} updated={terms.updated} toc={toc} currentPage="/terminos" reference={isReferenceTranslation}>
      {terms.draft ? <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">{t('draft')}</p> : null}
      {terms.sections.map((s, i) => (
        <LegalSection key={s.title} id={id(i)} title={s.title}>
          <Bullets items={s.items} />
        </LegalSection>
      ))}
      <LegalSection id="contacto" title={terms.contact.title}>
        <a href={`mailto:${terms.contact.email}`} className="block rounded-2xl border border-ink-line p-5 transition-colors hover:border-go sm:max-w-sm">
          <p className="text-sm">{terms.contact.text}</p>
          <p className="mt-2 text-sm font-semibold text-go-deep">{terms.contact.email}</p>
        </a>
      </LegalSection>
    </LegalLayout>
  )
}
