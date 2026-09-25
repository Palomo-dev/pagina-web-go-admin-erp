import { LinkArrow, SectionHeader } from '@/components/site/primitives'
import { PricingCards } from '@/components/site/pricing'
import { RevealGroup, RevealItem } from '@/components/site/reveal'

import { useT } from '@/i18n/t'

/** 07 · Cómo empezar y planes (Figma › StepItem, BillingToggle, PricingCard). */
export function Plans() {
  const t = useT('home.plans')
  const steps = [0, 1, 2].map((i) => ({ n: String(i + 1), title: t(`steps.${i}.title`), text: t(`steps.${i}.text`) }))
  return (
    <section id="planes" className="bg-white py-20 sm:py-32" aria-labelledby="planes-title">
      <div className="container">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={<span id="planes-title">{t('title')}</span>}
          subtitle={t('subtitle')}
        />
        <RevealGroup className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-3">
          {steps.map((s) => (
            <RevealItem key={s.n} className="flex flex-col gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-go text-sm font-semibold text-white">{s.n}</span>
              <h3 className="text-h4 text-ink">{s.title}</h3>
              <p className="text-sm text-ink-body">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <PricingCards className="mt-16" />
        <div className="mt-8 flex justify-center">
          <LinkArrow href="/precios">{t('cta')}</LinkArrow>
        </div>
      </div>
    </section>
  )
}
