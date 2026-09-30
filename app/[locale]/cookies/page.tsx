import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Bullets, LegalLayout, LegalSection } from '@/components/sections/legal-layout'
import { CookieSettingsButton } from '@/components/site/cookie-consent'
import { Tag } from '@/components/site/primitives'

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
  
  const toc = ['que-son', 'tipos', 'lista', 'gestionar', 'contacto'].map((id) => ({ id, label: t(`toc.${id}`) }))
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
      <LegalSection id="tipos" title={t('typesTitle')}>
        <div className="grid gap-4 sm:grid-cols-3">
          {c.categories.map((k) => (
            <div key={k.id} className="rounded-2xl bg-go-wash p-5">
              <p className="flex items-center justify-between gap-3 font-semibold text-ink">
                {k.title}
                <Tag kind={k.always ? 'neutral' : 'brand'}>{k.always ? t('always') : t('optional')}</Tag>
              </p>
              <p className="mt-2 text-sm">{k.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">{c.notUsed}</p>
      </LegalSection>
      <LegalSection id="lista" title={t('listTitle')}>
        <div className="overflow-x-auto rounded-2xl border border-ink-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-ink-muted">
              <tr>
                {(['name', 'category', 'purpose', 'duration', 'provider'] as const).map((k) => (
                  <th key={k} className="px-4 py-3 font-medium">
                    {t(`table.${k}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.table.map((row) => (
                <tr key={row.name} className="border-t border-ink-line align-top">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-ink">{row.name}</td>
                  <td className="px-4 py-3">{row.category}</td>
                  <td className="px-4 py-3">{row.purpose}</td>
                  <td className="px-4 py-3">{row.duration}</td>
                  <td className="px-4 py-3">{row.provider}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-muted">{c.app}</p>
      </LegalSection>
      <LegalSection id="gestionar" title={t('manageTitle')}>
        <Bullets items={c.manage} />
        <CookieSettingsButton className="mt-2 inline-flex h-11 items-center justify-center justify-self-start rounded-xl bg-go-action px-5 text-sm font-semibold text-white transition-colors hover:bg-go-deep">
          {t('settings')}
        </CookieSettingsButton>
      </LegalSection>
      <LegalSection id="contacto" title={c.contact.title}>
        <a href={`mailto:${c.contact.email}`} className="block rounded-2xl border border-ink-line p-5 transition-colors hover:border-go sm:max-w-sm">
          <p className="text-sm">{c.contact.text}</p>
          <p className="mt-2 text-sm font-semibold text-go-deep">{c.contact.email}</p>
        </a>
      </LegalSection>
    </LegalLayout>
  )
}
