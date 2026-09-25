import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Bullets, LegalLayout, LegalSection } from '@/components/sections/legal-layout'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/privacidad', 'pages.privacy')
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export default async function PrivacidadPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.privacy')
  const { PRIVACY, isReferenceTranslation } = await getLegal(params.locale)
  const toc = [{ id: 'principios', label: t('principles') }, ...PRIVACY.sections.map((s) => ({ id: slug(s.title), label: s.title.replace(/^\d+\.\s*/, '') })), { id: 'contacto', label: t('contact') }]
  return (
    <LegalLayout eyebrow={t('eyebrow')} title={PRIVACY.title} intro={PRIVACY.intro} updated={PRIVACY.updated} toc={toc} currentPage="/privacidad" reference={isReferenceTranslation}>
      <LegalSection id="principios" title={t('principlesTitle')}>
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
      <LegalSection id="contacto" title={t('contactTitle')}>
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
