import { setRequestLocale } from 'next-intl/server'
import { CardLinkGrid, FaqSection, FeatureGrid, Section, StepList } from '@/components/sections/blocks'
import { ChannelsShowcase } from '@/components/sections/channels-showcase'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { RevealGroup, RevealItem } from '@/components/site/reveal'
import { tl } from '@/i18n/t'
import { getT } from '@/i18n/t-server'
import { listChannels, listProducts } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import type { IconName } from '@/lib/site'
import { cn } from '@/lib/utils'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/canales-digitales', 'pages.channels')
}

// Plantillas disponibles en el ERP (website_settings.template_id). Nombres en messages › pages.channels.templates
const TEMPLATES: { id: string; bg: string; accent: string }[] = [
  { id: 'modern', bg: 'bg-[#EEF1FE]', accent: 'bg-go' },
  { id: 'classic', bg: 'bg-[#F4F1EA]', accent: 'bg-[#3B3A36]' },
  { id: 'elegant', bg: 'bg-[#111827]', accent: 'bg-[#C8A96A]' },
  { id: 'restaurant', bg: 'bg-[#F6EFE7]', accent: 'bg-[#7C4A2D]' },
  { id: 'hotel', bg: 'bg-[#EAF4F4]', accent: 'bg-[#1F6F78]' },
  { id: 'ecommerce', bg: 'bg-[#FFF4EC]', accent: 'bg-[#E4572E]' },
  { id: 'parking', bg: 'bg-[#F1F5F9]', accent: 'bg-[#0F172A]' },
]

const FEATURE_ICONS: IconName[] = ['globe', 'link', 'layout', 'search', 'message', 'chart']

export default async function CanalesDigitalesPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.channels')
  const channels = await listChannels(params.locale)
  const chat = (await listProducts(params.locale)).find((p) => p.slug === 'chat-omnicanal')!
  const features = tl<{ title: string; text: string }[]>(t, 'features').map((f, i) => ({ ...f, icon: FEATURE_ICONS[i] }))
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/canales-digitales" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <ChannelsShowcase />
        </Section>
        <Section eyebrow={t('stepsEyebrow')} title={t('stepsTitle')}>
          <StepList steps={tl(t, 'steps')} />
        </Section>
        <Section tone="wash" eyebrow={t('templatesEyebrow')} title={t('templatesTitle')}>
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEMPLATES.map((tpl) => (
              <RevealItem key={tpl.id}>
                <div className="overflow-hidden rounded-[20px] border border-ink-line bg-white">
                  <div className={cn('flex aspect-[4/3] flex-col gap-2 p-4', tpl.bg)} aria-hidden>
                    <div className="flex items-center justify-between">
                      <span className={cn('h-2 w-10 rounded-full', tpl.accent)} />
                      <span className="h-2 w-16 rounded-full bg-black/10" />
                    </div>
                    <span className={cn('mt-4 h-3 w-3/4 rounded-full', tpl.accent, 'opacity-80')} />
                    <span className="h-2 w-1/2 rounded-full bg-black/10" />
                    <div className="mt-auto grid grid-cols-3 gap-1.5">
                      <span className="aspect-square rounded-md bg-black/10" />
                      <span className="aspect-square rounded-md bg-black/10" />
                      <span className="aspect-square rounded-md bg-black/10" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-ink">{t(`templates.${tpl.id}.name`)}</p>
                    <p className="text-sm text-ink-body">{t(`templates.${tpl.id}.for`)}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>
        <Section eyebrow={t('includedEyebrow')} title={t('includedTitle')}>
          <FeatureGrid items={features} />
        </Section>
        <Section tone="wash" eyebrow={t('eachEyebrow')} title={t('eachTitle')}>
          <CardLinkGrid items={[...channels, chat].map((c) => ({ href: `/producto/${c.slug}`, title: c.name, text: c.short, icon: c.icon }))} columns={4} />
        </Section>
        <FaqSection tone="white" items={tl(t, 'faq')} />
        <NightCta title={t('ctaTitle')} />
      </main>
      <SiteFooter />
    </>
  )
}
