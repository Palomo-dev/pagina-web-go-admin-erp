import { Section } from '@/components/sections/blocks'
import { ChannelsShowcase } from '@/components/sections/channels-showcase'
import { LinkArrow } from '@/components/site/primitives'

/** Acto 3½ · Canales digitales: página, tienda y reservas incluidas al registrarse. */
export function Channels() {
  return (
    <Section
      id="canales"
      tone="tint"
      eyebrow="Canales digitales incluidos"
      title="Tu negocio también vende en internet."
      subtitle="Cada organización que se registra recibe su página web, su tienda en línea y su motor de reservas, con dirección propia y conectados al mismo inventario y calendario."
    >
      <ChannelsShowcase />
      <div className="mt-12 flex justify-center">
        <LinkArrow href="/canales-digitales">Todo sobre los canales digitales</LinkArrow>
      </div>
    </Section>
  )
}
