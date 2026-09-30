import { setRequestLocale } from 'next-intl/server'
import { getT } from '@/i18n/t-server'
import { getLegal } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Bullets, LegalLayout, LegalSection } from '@/components/sections/legal-layout'

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
  const toc = PRIVACY_NOTICE.sections.map((s) => ({ id: slug(s.title), label: s.title }))
  return (
    <LegalLayout
      eyebrow={t('eyebrow')}
      title={PRIVACY_NOTICE.title}
      intro={PRIVACY_NOTICE.intro}
      updated={`${PRIVACY_NOTICE.version} · ${PRIVACY_NOTICE.updated} · ${PRIVACY_NOTICE.vigente}`}
      toc={toc}
      currentPage="/aviso-privacidad"
      reference={isReferenceTranslation}
    >
      {PRIVACY_NOTICE.sections.map((s) => (
        <LegalSection key={s.title} id={slug(s.title)} title={s.title}>
          <Bullets items={s.items} />
        </LegalSection>
      ))}
    </LegalLayout>
  )
}
