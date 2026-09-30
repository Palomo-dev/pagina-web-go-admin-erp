import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Faq } from '@/components/site/faq'
import { LegalLayout, LegalSection } from '@/components/sections/legal-layout'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/eliminacion-datos', 'pages.deletion')
}

export default async function EliminacionDatosPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.deletion')
  const { DATA_DELETION: d, isReferenceTranslation } = await getLegal(params.locale)
  
  // Mensaje para idiomas no españoles
  const showSpanishOnlyNotice = !params.locale.startsWith('es')
  const spanishNotice = params.locale.startsWith('en')
    ? 'This legal document is available only in Spanish.'
    : params.locale.startsWith('pt')
      ? 'Este documento legal está disponível apenas em espanhol.'
      : params.locale.startsWith('fr')
        ? 'Ce document juridique est disponible uniquement en espagnol.'
        : ''
  
  const toc = ['como', 'proceso', 'datos', 'preguntas'].map((id) => ({ id, label: t(`toc.${id}`) }))
  return (
    <LegalLayout eyebrow={t('eyebrow')} title={d.title} intro={d.intro} toc={toc} currentPage="/eliminacion-datos" reference={false}>
      {showSpanishOnlyNotice && (
        <div className="mb-8 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {spanishNotice}
        </div>
      )}
      <LegalSection id="como" title={t('howTitle')}>
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
      <LegalSection id="proceso" title={t('processTitle')}>
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
      <LegalSection id="datos" title={t('dataTitle')}>
        <div className="overflow-hidden rounded-2xl border border-ink-line">
          {d.retention.map((r, i) => (
            <div key={r.type} className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between ${i ? 'border-t border-ink-line' : ''}`}>
              <span className="font-semibold text-ink">{r.type}</span>
              <span className="text-sm">{r.period}</span>
            </div>
          ))}
        </div>
      </LegalSection>
      <LegalSection id="preguntas" title={t('faqTitle')}>
        <Faq items={d.faq} defaultOpen={-1} />
      </LegalSection>
    </LegalLayout>
  )
}
