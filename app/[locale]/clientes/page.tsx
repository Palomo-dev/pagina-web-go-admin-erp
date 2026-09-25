import { setRequestLocale } from 'next-intl/server'
import { MessageCircle } from 'lucide-react'
import { CardLinkGrid, CheckList, Section, StepList } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink } from '@/components/site/primitives'
import { tl } from '@/i18n/t'
import { getT } from '@/i18n/t-server'
import { listSolutions } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { CONTACT } from '@/lib/site'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/clientes', 'pages.customers')
}

/**
 * Casos de clientes (Figma › Clientes). Solo se publican historias reales, con autorización del
 * negocio y cifras que el propio negocio reporta. Mientras no haya casos publicados, la página
 * invita a contar una historia y muestra cómo se usa GO Admin por industria (sin presentarlos como clientes).
 */
export default async function ClientesPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.customers')
  const solutions = await listSolutions(params.locale)
  const share = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t('subject'))}`
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/clientes" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-dashed border-go-200 bg-white p-10 text-center">
            <MessageCircle className="h-8 w-8 text-go" strokeWidth={1.5} aria-hidden />
            <h2 className="text-h3 text-ink">{t('emptyTitle')}</h2>
            <p className="text-ink-body">{t('emptyText')}</p>
            <CtaLink href={share}>{t('share')}</CtaLink>
          </div>
        </Section>

        <Section eyebrow={t('processEyebrow')} title={t('processTitle')}>
          <StepList steps={tl(t, 'steps')} />
        </Section>

        <Section tone="wash" eyebrow={t('includeEyebrow')} title={t('includeTitle')}>
          <div className="mx-auto max-w-2xl">
            <CheckList items={tl(t, 'include')} />
          </div>
        </Section>

        <Section eyebrow={t('industriesEyebrow')} title={t('industriesTitle')} subtitle={t('industriesSubtitle')}>
          <CardLinkGrid items={solutions.map((s) => ({ href: `/soluciones/${s.slug}`, title: s.name, text: s.short, icon: s.icon }))} />
        </Section>

        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
