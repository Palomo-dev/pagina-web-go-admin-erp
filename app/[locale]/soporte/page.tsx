import { setRequestLocale } from 'next-intl/server'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { Traveler } from '@/components/illustrations/art'
import { Faq } from '@/components/site/faq'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { SectionHeader } from '@/components/site/primitives'
import { RevealGroup, RevealItem } from '@/components/site/reveal'
import { SupportCards } from '@/components/site/support-cards'
import { SupportHub } from '@/components/support/guide-search'
import { getMarket } from '@/i18n/markets'
import { tl } from '@/i18n/t'
import { getT } from '@/i18n/t-server'
import { pageMetadata, type PageProps } from '@/lib/page'
import { CONTACT } from '@/lib/site'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/soporte', 'pages.support')
}

/** Soporte (Figma › 03 Pantallas › Soporte · Escritorio). */
export default async function SoportePage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.support')
  const c = await getT('common')
  const hoursT = await getT('contact')
  // Fuera de Colombia se aclara la zona horaria del equipo de soporte.
  const hours = getMarket(params.locale).country === 'COL' ? hoursT('hours') : hoursT('hoursZone')
  const steps = tl<{ title: string; text: string }[]>(t, 'steps').map((s, i) => ({ ...s, n: String(i + 1) }))
  const faq = tl<{ q: string; a: string }[]>(await getT(), 'faqHome.items')
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/soporte" />
      <main id="contenido">
        <SupportHub>
          <section className="bg-go-wash pb-20 pt-4 sm:pb-28" aria-labelledby="canales-title">
            <div className="container">
              <SectionHeader eyebrow={t('channelsEyebrow')} title={<span id="canales-title">{t('channelsTitle')}</span>} subtitle={t('channelsSubtitle')} />
              <SupportCards columns={4} className="mt-12" />
            </div>
          </section>
        </SupportHub>

        <section id="capacitaciones" className="scroll-mt-24 bg-go-tint py-20 sm:py-28" aria-labelledby="impl-title">
          <div className="container">
            <SectionHeader eyebrow={t('implEyebrow')} title={<span id="impl-title">{t('implTitle')}</span>} subtitle={t('implSubtitle')} />
            <RevealGroup className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <RevealItem key={s.n} className="flex flex-col gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-go text-sm font-semibold text-white">{s.n}</span>
                  <h3 className="text-h4 text-ink">{s.title}</h3>
                  <p className="text-sm text-ink-body">{s.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28" aria-labelledby="contacto-directo-title">
          <div className="container grid items-center gap-12 lg:grid-cols-[1fr_320px]">
            <div className="flex flex-col gap-8">
              <SectionHeader align="left" eyebrow={t('directEyebrow')} title={<span id="contacto-directo-title">{t('directTitle')}</span>} />
              <ul className="grid gap-4 sm:grid-cols-3">
                <li>
                  <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col gap-2 rounded-2xl border border-ink-line p-5 transition-colors hover:border-go">
                    <MessageCircle className="h-5 w-5 text-go" strokeWidth={1.5} aria-hidden />
                    <span className="text-sm font-semibold text-ink">{t('whatsapp')}</span>
                    <span className="text-sm text-ink-body">{CONTACT.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="flex h-full flex-col gap-2 rounded-2xl border border-ink-line p-5 transition-colors hover:border-go">
                    <Mail className="h-5 w-5 text-go" strokeWidth={1.5} aria-hidden />
                    <span className="text-sm font-semibold text-ink">{t('email')}</span>
                    <span className="text-sm text-ink-body">{CONTACT.email}</span>
                  </a>
                </li>
                <li>
                  <a href={CONTACT.phoneHref} className="flex h-full flex-col gap-2 rounded-2xl border border-ink-line p-5 transition-colors hover:border-go">
                    <Phone className="h-5 w-5 text-go" strokeWidth={1.5} aria-hidden />
                    <span className="text-sm font-semibold text-ink">{t('phone')}</span>
                    <span className="text-sm text-ink-body">{hours}</span>
                  </a>
                </li>
              </ul>
            </div>
            <Traveler className="mx-auto hidden w-64 lg:block" />
          </div>
        </section>

        <section className="bg-go-wash py-20 sm:py-28" aria-labelledby="faq-soporte-title">
          <div className="container">
            <SectionHeader eyebrow={c('faqEyebrow')} title={<span id="faq-soporte-title">{c('faqTitle')}</span>} />
            <div className="mt-12">
              <Faq items={faq} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
