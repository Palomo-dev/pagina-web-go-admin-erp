import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { LegalLayout, LegalSection } from '@/components/sections/legal-layout'
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

// Detectar si un item es un subtítulo (7.1, 8.1, etc. o a), b), c), d))
const isSubheading = (item: string) => /^\d+\.\d+\s/.test(item) || /^[a-d]\)\s/.test(item)

// Convertir enlaces en el texto
const linkify = (text: string, locale: string) => {
  const parts: (string | JSX.Element)[] = []
  let lastIndex = 0
  
  const linkPatterns = [
    { pattern: /Términos y Condiciones/g, href: '/terminos' },
    { pattern: /https:\/\/goadmin\.io\/cookies/g, href: '/cookies' },
    { pattern: /https:\/\/goadmin\.io\/eliminacion-datos/g, href: '/eliminacion-datos' },
    { pattern: /https:\/\/goadmin\.io\/privacidad/g, href: '/privacidad' },
  ]

  const matches: { index: number; length: number; href: string; text: string }[] = []
  
  linkPatterns.forEach(({ pattern, href }) => {
    const regex = new RegExp(pattern.source, 'g')
    let match
    while ((match = regex.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, href, text: match[0] })
    }
  })

  matches.sort((a, b) => a.index - b.index)

  matches.forEach((match, i) => {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <Link key={`link-${i}`} href={match.href} className="text-go-deep underline hover:text-go-action">
        {match.text}
      </Link>
    )
    lastIndex = match.index + match.length
  })

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

export default async function PrivacidadPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.privacy')
  const { PRIVACY } = await getLegal(params.locale)

  // Mensaje para idiomas no españoles
  const showSpanishOnlyNotice = !params.locale.startsWith('es')
  const spanishNotice = params.locale.startsWith('en')
    ? 'This legal document is available only in Spanish.'
    : params.locale.startsWith('pt')
      ? 'Este documento legal está disponível apenas em espanhol.'
      : params.locale.startsWith('fr')
        ? 'Ce document juridique est disponible uniquement en espagnol.'
        : ''

  const toc = PRIVACY.sections.map((s) => ({ id: slug(s.title), label: s.title.replace(/^\d+\.\s*/, '') }))
  
  return (
    <LegalLayout
      eyebrow={t('eyebrow')}
      title={PRIVACY.title}
      intro={PRIVACY.intro}
      updated={PRIVACY.version}
      toc={toc}
      currentPage="/privacidad"
      reference={false}
    >
      {showSpanishOnlyNotice && (
        <div className="mb-8 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {spanishNotice}
        </div>
      )}
      {PRIVACY.sections.map((s) => (
        <LegalSection key={s.title} id={slug(s.title)} title={s.title}>
          {s.items && s.items.length > 0 && (
            <div className="grid gap-3 leading-relaxed">
              {s.items.map((item, idx) => {
                if (isSubheading(item)) {
                  return (
                    <h3 key={idx} className="mt-3 text-base font-semibold text-ink">
                      {item}
                    </h3>
                  )
                }
                return (
                  <div key={idx} className="flex gap-3">
                    {item.startsWith('•') ? (
                      <>
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
                        <span>{linkify(item.slice(1).trim(), params.locale)}</span>
                      </>
                    ) : (
                      <span className="block">{linkify(item, params.locale)}</span>
                    )}
                  </div>
                )
              })}
            </div>
          )}
          {s.table && (
            <div className="mt-4 overflow-x-auto">
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
                            linkify(cell, params.locale)
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
          )}
          {s.extraItems && s.extraItems.length > 0 && (
            <div className="mt-4 grid gap-2.5 leading-relaxed">
              {s.extraItems.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <span>{linkify(item, params.locale)}</span>
                </div>
              ))}
            </div>
          )}
        </LegalSection>
      ))}
    </LegalLayout>
  )
}
