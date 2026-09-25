import { TravelerSitting } from '@/components/illustrations/art'
import { CtaLink, Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { Sky } from '@/components/site/sky'
import { useT } from '@/i18n/t'
import { SIGNUP_URL } from '@/lib/site'

/** Cierre nocturno (Figma › 10 Cierre nocturno): el viajero se sienta a mirar las estrellas. */
export function NightCta({
  title,
  text,
  eyebrow,
  primary,
  primaryHref = SIGNUP_URL,
  secondary,
}: {
  title?: string
  text?: string
  eyebrow?: string
  primary?: string
  primaryHref?: string
  secondary?: { label: string; href: string } | null
}) {
  const t = useT('nightCta')
  const c = useT('common')
  title ??= t('title')
  text ??= t('text')
  primary ??= c('signupLong')
  if (secondary === undefined) secondary = { label: c('talkToSales'), href: '/contacto' }
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="cierre-title">
      <Sky mode="night" />
      <div className="container relative grid items-center gap-10 py-24 sm:py-32 lg:grid-cols-[minmax(0,1fr)_420px]">
        <Reveal className="flex max-w-2xl flex-col items-start gap-6">
          <Eyebrow tone="blue">{eyebrow ?? t('eyebrow')}</Eyebrow>
          <h2 id="cierre-title" className="text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-display-l">
            {title}
          </h2>
          <p className="text-pretty text-base text-go-200 sm:text-lead">{text}</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <CtaLink href={primaryHref} kind="light" size="lg">
              {primary}
            </CtaLink>
            {secondary ? (
              <CtaLink href={secondary.href} kind="outline-light" size="lg" arrow={false}>
                {secondary.label}
              </CtaLink>
            ) : null}
          </div>
        </Reveal>
        <Reveal delay={0.16} className="mx-auto w-64 sm:w-80 lg:w-full">
          <TravelerSitting tone="ink" title={t('travelerTitle')} className="w-full" />
        </Reveal>
      </div>
    </section>
  )
}
