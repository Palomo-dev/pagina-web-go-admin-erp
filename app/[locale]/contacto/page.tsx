import { setRequestLocale } from 'next-intl/server'
import { getMarket } from '@/i18n/markets'
import { getT } from '@/i18n/t-server'
import { listSolutions } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { Clock, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Traveler } from '@/components/illustrations/art'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { ContactForm } from '@/components/support/contact-form'
import { CONTACT } from '@/lib/site'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/contacto', 'pages.contact')
}

/** Contacto: canales reales y un formulario que siempre llega (WhatsApp o correo). */
export default async function ContactoPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.contact')
  const hoursT = await getT('contact')
  const industries = (await listSolutions(params.locale)).map((s) => s.name)
  const CHANNELS = [
    { icon: MessageCircle, title: t('whatsapp'), text: CONTACT.phoneDisplay, href: CONTACT.whatsappUrl },
    { icon: Mail, title: t('email'), text: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Clock, title: t('hours'), text: getMarket(params.locale).country === 'COL' ? hoursT('hours') : hoursT('hoursZone') },
    { icon: MapPin, title: t('where'), text: CONTACT.city },
  ]
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/contacto" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <section className="relative -mt-20 bg-transparent pb-20 sm:pb-28">
          <div className="container grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
            <ContactForm industries={industries} />
            <aside className="grid gap-4">
              {CHANNELS.map(({ icon: I, title, text, href }) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-go-tint text-go-deep">
                      <I className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{title}</span>
                      <span className="block text-sm text-ink-body">{text}</span>
                    </span>
                  </>
                )
                return href ? (
                  <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-ink-line bg-white p-5 transition-colors hover:border-go">
                    {inner}
                  </a>
                ) : (
                  <div key={title} className="flex items-center gap-4 rounded-2xl border border-ink-line bg-white p-5">
                    {inner}
                  </div>
                )
              })}
              <Traveler className="mx-auto mt-4 hidden w-48 lg:block" />
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
