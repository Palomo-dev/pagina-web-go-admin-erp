import { setRequestLocale } from 'next-intl/server'
import { Mail } from 'lucide-react'
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
  return pageMetadata(params.locale, '/inversionistas', 'pages.investors')
}

const PORTAL_ICONS: IconName[] = ['chart', 'file-text', 'lock', 'bell']

/**
 * Inversionistas (Figma › Inversionistas). Página informativa: el portal investors.goadmin.io es
 * solo por invitación. No publica cifras, rondas ni valoraciones (no es una oferta pública).
 */
export default async function InversionistasPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.investors')
  const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t('subject'))}`
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
            <CtaLink href={mail} kind="outline-light" size="lg" arrow={false}>
              {t('contact')}
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
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-dashed border-go-200 bg-white p-10 text-center">
            <Mail className="h-8 w-8 text-go" strokeWidth={1.5} aria-hidden />
            <h2 className="text-h3 text-ink">{t('inviteTitle')}</h2>
            <p className="text-ink-body">{t('inviteText')}</p>
            <CtaLink href={mail}>{CONTACT.email}</CtaLink>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-2 text-center text-sm text-ink-muted">
            <p>{t('company', { legalName: CONTACT.legalName, nit: CONTACT.nit, city: CONTACT.city })}</p>
            <p>{t('disclaimer')}</p>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
