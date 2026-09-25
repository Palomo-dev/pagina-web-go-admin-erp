import { AiDemo } from '@/components/home/ai-demo'
import { Channels } from '@/components/home/channels'
import { Hero } from '@/components/home/hero'
import { Industries } from '@/components/home/industries'
import { Integrations } from '@/components/home/integrations'
import { Journey } from '@/components/home/journey'
import { Plans } from '@/components/home/plans'
import { Problem } from '@/components/home/problem'
import { Support } from '@/components/home/support'
import { Faq } from '@/components/site/faq'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { SectionHeader } from '@/components/site/primitives'
import { FAQ_HOME } from '@/lib/site'

/**
 * Inicio — la historia en siete actos (Figma › 03 Pantallas › Inicio · Escritorio / Móvil):
 * 1 Hero · 2 ¿Todo pasa por ti? · 3 Recorrido por los planetas · 3½ Canales digitales · 4 IA · 5 Industrias ·
 * 6 Integraciones y confianza · 7 Planes, soporte, preguntas y cierre nocturno.
 */
export default function HomePage() {
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/" />
      <main id="contenido">
        <Hero />
        <Problem />
        <Journey />
        <Channels />
        <AiDemo />
        <Industries />
        <Integrations />
        <Plans />
        <Support />
        <section className="bg-white py-20 sm:py-32" aria-labelledby="faq-title">
          <div className="container">
            <SectionHeader eyebrow="Preguntas frecuentes" title={<span id="faq-title">Lo que suelen preguntarnos.</span>} />
            <div className="mt-12">
              <Faq items={FAQ_HOME} defaultOpen={1} />
            </div>
          </div>
        </section>
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
