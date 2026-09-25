import type { Metadata } from 'next'
import { Clock, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Traveler } from '@/components/illustrations/art'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { ContactForm } from '@/components/support/contact-form'
import { CONTACT } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Habla con el equipo de GO Admin por WhatsApp o correo. Te ayudamos a elegir el plan y a configurar tu negocio.',
}

const CHANNELS = [
  { icon: MessageCircle, title: 'WhatsApp', text: CONTACT.phoneDisplay, href: CONTACT.whatsappUrl },
  { icon: Mail, title: 'Correo', text: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Clock, title: 'Horario', text: CONTACT.supportHours },
  { icon: MapPin, title: 'Dónde estamos', text: CONTACT.city },
]

/** Contacto: canales reales y un formulario que siempre llega (WhatsApp o correo). */
export default function ContactoPage() {
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/contacto" />
      <main id="contenido">
        <PageHero eyebrow="Contacto" title="Cuéntanos cómo trabajas." subtitle="Te mostramos cómo se vería tu negocio en GO Admin y te ayudamos a elegir el plan justo. Sin compromiso." />
        <section className="relative -mt-20 bg-transparent pb-20 sm:pb-28">
          <div className="container grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
            <ContactForm />
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
