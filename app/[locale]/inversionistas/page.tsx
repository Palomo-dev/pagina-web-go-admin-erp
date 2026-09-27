import { setRequestLocale } from 'next-intl/server'
import { FeatureGrid, Section, StepList } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink } from '@/components/site/primitives'
import { tl } from '@/i18n/t'
import { getT } from '@/i18n/t-server'
import { pageMetadata, type PageProps } from '@/lib/page'
import { CONTACT, INVESTORS_URL, type IconName } from '@/lib/site'

export async function generateMetadata({ params }: PageProps) {
  // Sin indexar ni enlazar desde el sitio: el portal es solo por invitación privada (Decreto 2555
  // de 2010, oferta pública de valores). Se entra con el enlace que envía el equipo.
  const meta = await pageMetadata(params.locale, '/inversionistas', 'pages.investors')
  return { ...meta, robots: { index: false, follow: false } }
}

const PORTAL_ICONS: IconName[] = ['chart', 'file-text', 'lock', 'bell']

/**
 * Inversionistas (Figma › Inversionistas). Página para personas ya invitadas: no se enlaza desde el
 * sitio ni se indexa, no invita a invertir y no publica cifras, rondas ni valoraciones. El acceso al
 * portal investors.goadmin.io es solo por invitación privada.
 */
export default async function InversionistasPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.investors')
  const portal = tl<{ title: string; text: string }[]>(t, 'portal').map((p, i) => ({ ...p, icon: PORTAL_ICONS[i] }))
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/inversionistas" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')}>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <CtaLink href={INVESTORS_URL} kind="light" size="lg">
              {t('login')}
            </CtaLink>
          </div>
        </PageHero>

        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0" eyebrow={t('portalEyebrow')} title={t('portalTitle')} subtitle={t('portalSubtitle')}>
          <FeatureGrid items={portal} columns={4} />
        </Section>

        <Section eyebrow={t('accessEyebrow')} title={t('accessTitle')}>
          <StepList steps={tl(t, 'steps')} />
        </Section>

        <Section tone="wash">
          <div className="mx-auto grid max-w-3xl gap-2 text-center text-sm text-ink-muted">
            <p>{t('company', { legalName: CONTACT.legalName, nit: CONTACT.nit, city: CONTACT.city })}</p>
            <p>{t('disclaimer')}</p>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
