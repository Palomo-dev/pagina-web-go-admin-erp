import { Section } from '@/components/sections/blocks'
import { ChannelsShowcase } from '@/components/sections/channels-showcase'
import { LinkArrow } from '@/components/site/primitives'
import { useT } from '@/i18n/t'

/** Acto 3½ · Canales digitales: página, tienda y reservas incluidas al registrarse. */
export function Channels() {
  const t = useT('home.channels')
  return (
    <Section
      id="canales"
      tone="tint"
      eyebrow={t('eyebrow')}
      title={t('title')}
      subtitle={t('subtitle')}
    >
      <ChannelsShowcase />
      <div className="mt-12 flex justify-center">
        <LinkArrow href="/canales-digitales">{t('cta')}</LinkArrow>
      </div>
    </Section>
  )
}
