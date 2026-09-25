import type { Metadata } from 'next'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { Traveler } from '@/components/illustrations/art'
import { Faq } from '@/components/site/faq'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { SectionHeader } from '@/components/site/primitives'
import { RevealGroup, RevealItem } from '@/components/site/reveal'
import { SupportCards } from '@/components/site/support-cards'
import { SupportHub } from '@/components/support/guide-search'
import { CONTACT, FAQ_HOME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Soporte y centro de ayuda',
  description: 'Habla con una persona por WhatsApp, consulta guías paso a paso y agenda tu implementación acompañada de GO Admin.',
}

const STEPS = [
  { n: '1', title: 'Configuramos contigo', text: 'Empresa, sedes, impuestos, resolución de facturación y usuarios.' },
  { n: '2', title: 'Cargamos tu información', text: 'Productos, clientes, proveedores y saldos iniciales.' },
  { n: '3', title: 'Capacitamos a tu equipo', text: 'Caja, bodega y contabilidad, cada quien en lo suyo.' },
  { n: '4', title: 'Te acompañamos al cierre', text: 'Revisamos juntos tu primer cierre de mes.' },
]

/** Soporte (Figma › 03 Pantallas › Soporte · Escritorio). */
export default function SoportePage() {
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/soporte" />
      <main id="contenido">
        <SupportHub>
          <section className="bg-go-wash pb-20 pt-4 sm:pb-28" aria-labelledby="canales-title">
            <div className="container">
              <SectionHeader eyebrow="Canales" title={<span id="canales-title">Habla con una persona.</span>} subtitle="Respondemos en español, con tu caso a la mano. Los horarios están en hora de Colombia." />
              <SupportCards columns={4} className="mt-12" />
            </div>
          </section>
        </SupportHub>

        <section id="capacitaciones" className="scroll-mt-24 bg-go-tint py-20 sm:py-28" aria-labelledby="impl-title">
          <div className="container">
            <SectionHeader eyebrow="Implementación" title={<span id="impl-title">Así te acompañamos.</span>} subtitle="Del primer ingreso al primer cierre de mes, con una persona que conoce tu caso." />
            <RevealGroup className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
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
              <SectionHeader align="left" eyebrow="Contacto directo" title={<span id="contacto-directo-title">¿Prefieres escribir o llamar?</span>} />
              <ul className="grid gap-4 sm:grid-cols-3">
                <li>
                  <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col gap-2 rounded-2xl border border-ink-line p-5 transition-colors hover:border-go">
                    <MessageCircle className="h-5 w-5 text-go" strokeWidth={1.5} aria-hidden />
                    <span className="text-sm font-semibold text-ink">WhatsApp</span>
                    <span className="text-sm text-ink-body">{CONTACT.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="flex h-full flex-col gap-2 rounded-2xl border border-ink-line p-5 transition-colors hover:border-go">
                    <Mail className="h-5 w-5 text-go" strokeWidth={1.5} aria-hidden />
                    <span className="text-sm font-semibold text-ink">Correo</span>
                    <span className="text-sm text-ink-body">{CONTACT.email}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${CONTACT.phoneDisplay.replace(/\s/g, '')}`} className="flex h-full flex-col gap-2 rounded-2xl border border-ink-line p-5 transition-colors hover:border-go">
                    <Phone className="h-5 w-5 text-go" strokeWidth={1.5} aria-hidden />
                    <span className="text-sm font-semibold text-ink">Teléfono</span>
                    <span className="text-sm text-ink-body">{CONTACT.supportHours}</span>
                  </a>
                </li>
              </ul>
            </div>
            <Traveler className="mx-auto hidden w-64 lg:block" />
          </div>
        </section>

        <section className="bg-go-wash py-20 sm:py-28" aria-labelledby="faq-soporte-title">
          <div className="container">
            <SectionHeader eyebrow="Preguntas frecuentes" title={<span id="faq-soporte-title">Lo que suelen preguntarnos.</span>} />
            <div className="mt-12">
              <Faq items={FAQ_HOME} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
