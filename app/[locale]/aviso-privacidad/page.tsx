import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Bullets, LegalLayout, LegalSection } from '@/components/sections/legal-layout'
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

export default async function AvisoPrivacidadPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.privacyNotice')
  const { PRIVACY_NOTICE, isReferenceTranslation } = await getLegal(params.locale)

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
          <Link href="/aviso-privacidad" locale="es-CO" className="mt-6 inline-block rounded-xl bg-go-action px-6 py-3 font-semibold text-white transition-colors hover:bg-go-deep">
            {params.locale.startsWith('en') && 'View in Spanish'}
            {params.locale.startsWith('pt') && 'Ver em espanhol'}
            {params.locale.startsWith('fr') && 'Voir en espagnol'}
          </Link>
        </div>
      </div>
    )
  }

  const toc = PRIVACY_NOTICE.sections.map((s) => ({ id: slug(s.title), label: s.title }))
  return (
    <LegalLayout
      eyebrow={t('eyebrow')}
      title={PRIVACY_NOTICE.title}
      intro={PRIVACY_NOTICE.intro}
      updated={`${PRIVACY_NOTICE.version} · ${PRIVACY_NOTICE.updated} · ${PRIVACY_NOTICE.vigente}`}
      toc={toc}
      currentPage="/aviso-privacidad"
      reference={false}
    >
      {PRIVACY_NOTICE.sections.map((s) => (
        <LegalSection key={s.title} id={slug(s.title)} title={s.title}>
          <Bullets items={s.items} />
        </LegalSection>
      ))}
    </LegalLayout>
  )
}
