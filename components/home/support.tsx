import { Traveler } from '@/components/illustrations/art'
import { SectionHeader } from '@/components/site/primitives'
import { SupportCards } from '@/components/site/support-cards'
import { useT } from '@/i18n/t'

/** 08 · Soporte — "No estás solo en esto." */
export function Support() {
  const t = useT('home.support')
  return (
    <section className="bg-go-tint py-20 sm:py-32" aria-labelledby="soporte-title">
      <div className="container grid items-center gap-14 lg:grid-cols-[440px_1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeader
            align="left"
            eyebrow={t('eyebrow')}
            title={<span id="soporte-title">{t('title')}</span>}
            subtitle={t('subtitle')}
          />
          <Traveler className="hidden w-56 lg:block" title={t('travelerTitle')} />
        </div>
        <SupportCards />
      </div>
    </section>
  )
}
