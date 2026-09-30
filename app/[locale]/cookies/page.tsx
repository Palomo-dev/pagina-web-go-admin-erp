import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { LegalLayout, LegalSection } from '@/components/sections/legal-layout'
import { CookieSettingsButton } from '@/components/site/cookie-consent'
import { Tag } from '@/components/site/primitives'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/cookies', 'pages.cookies')
}

export default async function CookiesPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.cookies')
  const { COOKIES: c } = await getLegal(params.locale)
  
  // Mensaje para idiomas no españoles
  const showSpanishOnlyNotice = !params.locale.startsWith('es')
  const spanishNotice = params.locale.startsWith('en')
    ? 'This legal document is available only in Spanish.'
    : params.locale.startsWith('pt')
      ? 'Este documento legal está disponível apenas em espanhol.'
      : params.locale.startsWith('fr')
        ? 'Ce document juridique est disponible uniquement en espagnol.'
        : ''
  
  const toc = ['que-son', 'antes', 'tipos', 'lista', 'erp', 'gestionar', 'ley', 'contacto'].map((id) => ({ id, label: t(`toc.${id}`) }))
  return (
    <LegalLayout eyebrow={t('eyebrow')} title={c.title} intro={c.intro} updated={c.updated} toc={toc} currentPage="/cookies" reference={false}>
      {showSpanishOnlyNotice && (
        <div className="mb-8 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {spanishNotice}
        </div>
      )}
      <LegalSection id="que-son" title={t('whatTitle')}>
        <p>{c.what}</p>
      </LegalSection>
      <LegalSection id="antes" title={t('beforeTitle')}>
        <p>{c.beforeChoose}</p>
      </LegalSection>
      <LegalSection id="tipos" title={t('typesTitle')}>
        <ul className="grid gap-2 leading-relaxed">
          {c.categories.map((k) => (
            <li key={k.id} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
              <span>
                <strong>{k.title}.</strong> {k.text}
              </span>
            </li>
          ))}
        </ul>
      </LegalSection>
      <LegalSection id="lista" title={t('listTitle')}>
        <div className="overflow-x-auto rounded-2xl border border-ink-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-ink-muted">
              <tr>
                {(['name', 'provider', 'purpose', 'duration', 'category'] as const).map((k) => (
                  <th key={k} className="px-4 py-3 font-medium">
                    {t(`table.${k}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.table.map((row, idx) => (
                <tr key={idx} className="border-t border-ink-line align-top">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-ink">{row.name}</td>
                  <td className="px-4 py-3">{row.provider}</td>
                  <td className="px-4 py-3">{row.purpose}</td>
                  <td className="px-4 py-3">{row.duration}</td>
                  <td className="px-4 py-3">{row.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-muted">{c.notUsed}</p>
      </LegalSection>
      <LegalSection id="erp" title={t('erpTitle')}>
        <p>{c.app}</p>
      </LegalSection>
      <LegalSection id="gestionar" title={t('manageTitle')}>
        <div className="grid gap-2.5 leading-relaxed">
          {c.manage.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <CookieSettingsButton className="mt-4 inline-flex h-11 items-center justify-center justify-self-start rounded-xl bg-go-action px-5 text-sm font-semibold text-white transition-colors hover:bg-go-deep">
          {t('settings')}
        </CookieSettingsButton>
      </LegalSection>
      <LegalSection id="ley" title={t('lawTitle')}>
        <p>{c.law}</p>
      </LegalSection>
      <LegalSection id="contacto" title={c.contact.title}>
        <p className="leading-relaxed">{c.contact.text}</p>
        <p className="mt-2 text-sm">
          <a href={`mailto:${c.contact.email}`} className="font-semibold text-go-deep hover:underline">
            {c.contact.email}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
