import { setRequestLocale } from 'next-intl/server'
import { redirect } from 'next/navigation'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Bullets, LegalLayout, LegalSection } from '@/components/sections/legal-layout'
import { Link } from '@/i18n/navigation'

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

  // Para locales no españoles, mostrar página mínima con enlace a versión es-CO
  if (isReferenceTranslation) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
        <div className="max-w-2xl text-center">
          <p className="text-lg text-ink-body">
            {params.locale.startsWith('en') && 'This legal document is available in Spanish.'}
            {params.locale.startsWith('pt') && 'Este documento legal está disponível em espanhol.'}
            {params.locale.startsWith('fr') && 'Ce document juridique est disponible en espagnol.'}
          </p>
          <Link href="/privacidad" locale="es-CO" className="mt-6 inline-block rounded-xl bg-go-action px-6 py-3 font-semibold text-white transition-colors hover:bg-go-deep">
            {params.locale.startsWith('en') && 'View in Spanish'}
            {params.locale.startsWith('pt') && 'Ver em espanhol'}
            {params.locale.startsWith('fr') && 'Voir en espagnol'}
          </Link>
        </div>
      </div>
    )
  }

  const toc = [{ id: 'principios', label: t('principles') }, ...PRIVACY.sections.map((s) => ({ id: slug(s.title), label: s.title.replace(/^\d+\.\s*/, '') })), { id: 'contacto', label: t('contact') }]
  return (
    <LegalLayout
      eyebrow={t('eyebrow')}
      title={PRIVACY.title}
      intro={PRIVACY.intro}
      updated={`${PRIVACY.version} · ${PRIVACY.updated} · ${PRIVACY.vigente}`}
      toc={toc}
      currentPage="/privacidad"
      reference={false}
    >
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
          {s.table ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-ink-line">
                    {s.table.cols.map((col) => (
                      <th key={col} className="px-4 py-3 text-left font-semibold text-ink">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.table.rows.map((row, i) => (
                    <tr key={i} className="border-b border-ink-line/50">
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3">
                          {typeof cell === 'string' ? (
                            cell
                          ) : cell.link ? (
                            <a href={cell.link} className="text-go-deep hover:underline">
                              {cell.content}
                            </a>
                          ) : (
                            cell.content
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {s.items ? <Bullets items={s.items} /> : null}
          {s.extraItems ? (
            <div className="mt-4">
              <Bullets items={s.extraItems} />
            </div>
          ) : null}
        </LegalSection>
      ))}
      <LegalSection id="contacto" title={t('contactTitle')}>
        <div className="grid gap-4 sm:grid-cols-2">
          {PRIVACY.contacts.map((c) => (
            <a key={c.title} href={`mailto:${c.email}`} className="rounded-2xl border border-ink-line p-5 transition-colors hover:border-go">
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
