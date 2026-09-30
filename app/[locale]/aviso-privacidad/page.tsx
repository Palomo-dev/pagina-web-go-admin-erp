import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { LegalLayout, LegalSection } from '@/components/sections/legal-layout'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/aviso-privacidad', 'pages.privacyNotice')
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Convertir enlaces en el texto
const linkify = (text: string, locale: string) => {
  const parts: (string | JSX.Element)[] = []
  let lastIndex = 0
  
  const linkPatterns = [
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

export default async function AvisoPrivacidadPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.privacyNotice')
  const { PRIVACY_NOTICE } = await getLegal(params.locale)

  // Mensaje para idiomas no españoles
  const showSpanishOnlyNotice = !params.locale.startsWith('es')
  const spanishNotice = params.locale.startsWith('en')
    ? 'This legal document is available only in Spanish.'
    : params.locale.startsWith('pt')
      ? 'Este documento legal está disponível apenas em espanhol.'
      : params.locale.startsWith('fr')
        ? 'Ce document juridique est disponible uniquement en espagnol.'
        : ''

  const toc = PRIVACY_NOTICE.sections.map((s) => ({ id: slug(s.title), label: s.title }))
  
  return (
    <LegalLayout
      eyebrow={t('eyebrow')}
      title={PRIVACY_NOTICE.title}
      intro={PRIVACY_NOTICE.intro}
      updated={`Publicado el ${PRIVACY_NOTICE.updated}`}
      toc={toc}
      currentPage="/aviso-privacidad"
      reference={false}
    >
      {showSpanishOnlyNotice && (
        <div className="mb-8 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {spanishNotice}
        </div>
      )}
      {PRIVACY_NOTICE.sections.map((s) => (
        <LegalSection key={s.title} id={slug(s.title)} title={s.title}>
          <div className="grid gap-2.5 leading-relaxed">
            {s.items.map((item, idx) => (
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
            ))}
          </div>
        </LegalSection>
      ))}
    </LegalLayout>
  )
}
