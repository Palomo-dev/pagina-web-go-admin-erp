import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { LegalLayout, LegalSection } from '@/components/sections/legal-layout'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/eliminacion-datos', 'pages.deletion')
}

export default async function EliminacionDatosPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.deletion')
  const { DATA_DELETION: d } = await getLegal(params.locale)
  
  // Mensaje para idiomas no españoles
  const showSpanishOnlyNotice = !params.locale.startsWith('es')
  const spanishNotice = params.locale.startsWith('en')
    ? 'This legal document is available only in Spanish.'
    : params.locale.startsWith('pt')
      ? 'Este documento legal está disponível apenas em espanhol.'
      : params.locale.startsWith('fr')
        ? 'Ce document juridique est disponible uniquement en espagnol.'
        : ''
  
  const toc = ['como', 'plazos', 'que-borramos', 'conservamos', 'erp', 'queja', 'ley'].map((id) => ({ id, label: t(`toc.${id}`) }))
  return (
    <LegalLayout eyebrow={t('eyebrow')} title={d.title} intro={d.intro} updated={d.updated} toc={toc} currentPage="/eliminacion-datos" reference={false}>
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
        <p className="mt-4 leading-relaxed">{d.include}</p>
      </LegalSection>
      <LegalSection id="plazos" title={t('timelineTitle')}>
        <div className="grid gap-2.5 leading-relaxed">
          {d.timeline.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </LegalSection>
      <LegalSection id="que-borramos" title={t('weDeleteTitle')}>
        <div className="grid gap-2.5 leading-relaxed">
          {d.weDelete.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </LegalSection>
      <LegalSection id="conservamos" title={t('retentionTitle')}>
        <p className="mb-4 leading-relaxed">{t('retentionIntro')}</p>
        <div className="overflow-hidden rounded-2xl border border-ink-line">
          {d.retention.map((r, i) => (
            <div key={r.type} className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between ${i ? 'border-t border-ink-line' : ''}`}>
              <span className="font-semibold text-ink">{r.type}</span>
              <span className="text-sm">{r.period}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-muted">{d.retentionNote}</p>
      </LegalSection>
      <LegalSection id="erp" title={t('erpTitle')}>
        <p className="leading-relaxed">{d.erp}</p>
      </LegalSection>
      <LegalSection id="queja" title={t('complaintTitle')}>
        <p className="leading-relaxed">{d.complaint}</p>
      </LegalSection>
      <LegalSection id="ley" title={t('lawTitle')}>
        <p className="leading-relaxed">{d.law}</p>
      </LegalSection>
    </LegalLayout>
  )
}
