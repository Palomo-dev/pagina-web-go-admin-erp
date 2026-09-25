import type { Metadata } from 'next'
import { CardLinkGrid, FaqSection, FeatureGrid, Section, StepList } from '@/components/sections/blocks'
import { ChannelsShowcase } from '@/components/sections/channels-showcase'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { RevealGroup, RevealItem } from '@/components/site/reveal'
import { listChannels, listProducts } from '@/lib/data'
import type { IconName } from '@/lib/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Canales digitales',
  description: 'Cada organización en GO Admin recibe su página web, su tienda en línea y su motor de reservas, con subdominio incluido o dominio propio, conectados al inventario y al calendario.',
}

// Plantillas disponibles en el ERP (website_settings.template_id)
const TEMPLATES: { name: string; for: string; bg: string; accent: string }[] = [
  { name: 'Moderna', for: 'Cualquier negocio', bg: 'bg-[#EEF1FE]', accent: 'bg-go' },
  { name: 'Clásica', for: 'Servicios', bg: 'bg-[#F4F1EA]', accent: 'bg-[#3B3A36]' },
  { name: 'Elegante', for: 'Marcas premium', bg: 'bg-[#111827]', accent: 'bg-[#C8A96A]' },
  { name: 'Restaurante', for: 'Carta, pedidos y mesas', bg: 'bg-[#F6EFE7]', accent: 'bg-[#7C4A2D]' },
  { name: 'Hotel', for: 'Habitaciones y reservas', bg: 'bg-[#EAF4F4]', accent: 'bg-[#1F6F78]' },
  { name: 'Tienda', for: 'Catálogo y carrito', bg: 'bg-[#FFF4EC]', accent: 'bg-[#E4572E]' },
  { name: 'Parqueadero', for: 'Tarifas y mensualidades', bg: 'bg-[#F1F5F9]', accent: 'bg-[#0F172A]' },
]

const FEATURES: { title: string; text: string; icon: IconName }[] = [
  { title: 'Subdominio incluido', text: 'Una dirección tunegocio.goadmin.io desde el registro.', icon: 'globe' },
  { title: 'Dominio propio', text: 'Conecta el tuyo con verificación DNS o cómpralo desde GO Admin.', icon: 'link' },
  { title: 'Constructor de páginas', text: 'Secciones editables, borradores, versiones y publicación.', icon: 'layout' },
  { title: 'Buscadores y redes', text: 'Título, descripción, imagen para compartir y verificación de Google.', icon: 'search' },
  { title: 'Chat en tu sitio', text: 'El widget llega a la bandeja omnicanal con asistente de IA.', icon: 'message' },
  { title: 'Visitas y reseñas', text: 'Estadísticas de visitas y reseñas moderadas de tus clientes.', icon: 'chart' },
]

export default async function CanalesDigitalesPage() {
  const channels = await listChannels()
  const chat = (await listProducts()).find((p) => p.slug === 'chat-omnicanal')!
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/canales-digitales" />
      <main id="contenido">
        <PageHero
          eyebrow="Canales digitales"
          title="Tu negocio en internet desde el primer día."
          subtitle="Cada organización que se registra en GO Admin recibe su página web, su tienda en línea y su motor de reservas, conectados al mismo inventario, al mismo calendario y a la misma caja."
        />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <ChannelsShowcase />
        </Section>
        <Section eyebrow="Desde el registro" title="De registrarte a vender en línea.">
          <StepList
            steps={[
              { title: 'Registra tu organización', text: 'Recibes tu dirección tunegocio.goadmin.io.' },
              { title: 'Elige una plantilla', text: 'Por industria, con tus colores y tu logo.' },
              { title: 'Activa lo que necesitas', text: 'Tienda, reservas, citas o pedidos.' },
              { title: 'Conecta tu dominio', text: 'Cuando quieras, sin perder lo publicado.' },
            ]}
          />
        </Section>
        <Section tone="wash" eyebrow="Plantillas" title="Empieza con una plantilla hecha para tu industria.">
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEMPLATES.map((t) => (
              <RevealItem key={t.name}>
                <div className="overflow-hidden rounded-[20px] border border-ink-line bg-white">
                  <div className={cn('flex aspect-[4/3] flex-col gap-2 p-4', t.bg)} aria-hidden>
                    <div className="flex items-center justify-between">
                      <span className={cn('h-2 w-10 rounded-full', t.accent)} />
                      <span className="h-2 w-16 rounded-full bg-black/10" />
                    </div>
                    <span className={cn('mt-4 h-3 w-3/4 rounded-full', t.accent, 'opacity-80')} />
                    <span className="h-2 w-1/2 rounded-full bg-black/10" />
                    <div className="mt-auto grid grid-cols-3 gap-1.5">
                      <span className="aspect-square rounded-md bg-black/10" />
                      <span className="aspect-square rounded-md bg-black/10" />
                      <span className="aspect-square rounded-md bg-black/10" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-ink-body">{t.for}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>
        <Section eyebrow="Incluido" title="Todo lo que tu página necesita para vender.">
          <FeatureGrid items={FEATURES} />
        </Section>
        <Section tone="wash" eyebrow="Conoce cada canal" title="Página, tienda, reservas y conversaciones.">
          <CardLinkGrid items={[...channels, chat].map((c) => ({ href: `/producto/${c.slug}`, title: c.name, text: c.short, icon: c.icon }))} columns={4} />
        </Section>
        <FaqSection
          tone="white"
          items={[
            { q: '¿Tiene costo adicional la página web?', a: 'La página con subdominio de GO Admin se crea al registrar tu organización. Consulta en Precios qué funciones incluye cada plan.' },
            { q: '¿Puedo usar mi propio dominio?', a: 'Sí. Conectas tu dominio con una verificación DNS o lo compras desde GO Admin.' },
            { q: '¿Las ventas en línea se facturan?', a: 'Sí. Cada pedido llega al ERP y puede facturarse electrónicamente.' },
            { q: '¿Puedo tener varias sedes con una sola página?', a: 'Sí. La página puede mostrar información y reservas por sede.' },
          ]}
        />
        <NightCta title="Publica tu negocio hoy." />
      </main>
      <SiteFooter />
    </>
  )
}
