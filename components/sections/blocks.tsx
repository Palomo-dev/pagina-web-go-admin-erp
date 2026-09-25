/**
 * Bloques de sección reutilizables (Figma › 02 Componentes › Secciones).
 * Cada página de producto, solución y empresa se arma solo con estos bloques.
 */
import { Link } from '@/i18n/navigation'
import { useT } from '@/i18n/t'
import { ArrowRight, Check, X } from 'lucide-react'
import { Faq } from '@/components/site/faq'
import { Icon } from '@/components/site/icon'
import { CtaLink, SectionHeader } from '@/components/site/primitives'
import { Reveal, RevealGroup, RevealItem } from '@/components/site/reveal'
import type { IconName } from '@/lib/site'
import { cn } from '@/lib/utils'

type Tone = 'white' | 'wash' | 'tint'
const BG: Record<Tone, string> = { white: 'bg-white', wash: 'bg-go-wash', tint: 'bg-go-tint' }

/** Envoltura de sección con encabezado opcional y ritmo vertical del sistema. */
export function Section({
  id,
  tone = 'white',
  eyebrow,
  title,
  subtitle,
  align = 'center',
  children,
  className,
}: {
  id?: string
  tone?: Tone
  eyebrow?: string
  title?: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'center' | 'left'
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('relative scroll-mt-24 py-20 sm:py-28', BG[tone], className)}>
      <div className="container">
        {title ? <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align={align} /> : null}
        <div className={title ? 'mt-12 sm:mt-14' : undefined}>{children}</div>
      </div>
    </section>
  )
}

/** FeatureGrid: ícono + título + texto (Figma › FeatureCard). */
export function FeatureGrid({ items, columns = 3 }: { items: { title: string; text: string; icon: IconName }[]; columns?: 2 | 3 | 4 }) {
  return (
    <RevealGroup className={cn('grid gap-5 sm:grid-cols-2', columns === 3 && 'lg:grid-cols-3', columns === 4 && 'lg:grid-cols-4')}>
      {items.map((f) => (
        <RevealItem key={f.title}>
          <article className="flex h-full flex-col gap-3.5 rounded-[20px] border border-ink-line bg-white p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-go-tint text-go-deep">
              <Icon name={f.icon} className="h-[22px] w-[22px]" />
            </span>
            <h3 className="text-h4 text-ink">{f.title}</h3>
            <p className="text-sm text-ink-body">{f.text}</p>
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

/** PainPoints: "Hoy" frente a "Con GO Admin". */
export function PainPoints({ items }: { items: { pain: string; answer: string }[] }) {
  return (
    <RevealGroup className="grid gap-4">
      {items.map((p) => (
        <RevealItem key={p.pain}>
          <div className="grid overflow-hidden rounded-[20px] border border-ink-line bg-white sm:grid-cols-2">
            <p className="flex items-start gap-3 p-6 text-ink-body">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-ink-muted">
                <X className="h-3.5 w-3.5" strokeWidth={2} aria-label="Hoy" />
              </span>
              {p.pain}
            </p>
            <p className="flex items-start gap-3 border-t border-ink-line bg-go-wash p-6 font-medium text-ink sm:border-l sm:border-t-0">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-go text-white">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-label="Con GO Admin" />
              </span>
              {p.answer}
            </p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

/** StepList: pasos numerados conectados por una línea (recurso "línea que conecta"). */
export function StepList({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <RevealGroup className={cn('relative grid gap-10 sm:grid-cols-2', steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3')}>
      <span aria-hidden className="absolute left-5 right-5 top-5 hidden h-0.5 bg-go-200 lg:block" />
      {steps.map((s, i) => (
        <RevealItem key={s.title} className="relative flex flex-col gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-go text-sm font-semibold text-white">{i + 1}</span>
          <h3 className="text-h4 text-ink">{s.title}</h3>
          <p className="text-sm text-ink-body">{s.text}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

/** CardLinkGrid: tarjetas navegables (productos, soluciones, artículos). */
export function CardLinkGrid({
  items,
  columns = 3,
}: {
  items: { href: string; title: string; text: string; icon?: IconName; meta?: string; tags?: string[] }[]
  columns?: 2 | 3 | 4
}) {
  return (
    <RevealGroup className={cn('grid gap-4 sm:grid-cols-2', columns === 3 && 'lg:grid-cols-3', columns === 4 && 'lg:grid-cols-4')}>
      {items.map((c) => (
        <RevealItem key={c.href}>
          <Link href={c.href} className="group flex h-full flex-col gap-3 rounded-[20px] border border-ink-line bg-white p-6 transition-all duration-fast ease-out hover:-translate-y-1 hover:border-go hover:shadow-lg">
            {c.icon ? (
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-go-tint text-go-deep transition-colors duration-fast group-hover:bg-go group-hover:text-white">
                <Icon name={c.icon} className="h-[22px] w-[22px]" />
              </span>
            ) : null}
            {c.meta ? <span className="text-eyebrow uppercase text-go-deep">{c.meta}</span> : null}
            <span className="text-h4 text-ink">{c.title}</span>
            <span className="text-sm text-ink-body">{c.text}</span>
            {c.tags?.length ? (
              <span className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-ink-body">
                    {t}
                  </span>
                ))}
              </span>
            ) : null}
            <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-go-deep">
              <LearnMore />
              <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
            </span>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

function LearnMore() {
  return <>{useT('common')('learnMore')}</>
}

/** TypeChips: ejemplos de negocios a los que aplica una solución (sin enlace). */
export function TypeChips({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap justify-center gap-2.5', className)}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-2 rounded-full border border-ink-line bg-white py-2 pl-3 pr-4 text-sm font-medium text-ink">
          <Check className="h-4 w-4 text-go" strokeWidth={2} aria-hidden />
          {t}
        </li>
      ))}
    </ul>
  )
}

/** ChipLinks: enlaces compactos a módulos relacionados. */
export function ChipLinks({ items }: { items: { href: string; label: string; icon: IconName }[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {items.map((i) => (
        <li key={i.href}>
          <Link href={i.href} className="flex items-center gap-2.5 rounded-full border border-ink-line bg-white py-2 pl-2 pr-4 transition-colors hover:border-go">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-go-tint text-go-deep">
              <Icon name={i.icon} className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-ink">{i.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

/** DayTimeline: "Un día en tu negocio" (Figma › DayTimeline). */
export function DayTimeline({ moments }: { moments: { moment: string; title: string; text: string }[] }) {
  return (
    <ol className="relative mx-auto grid max-w-3xl gap-8 border-l-2 border-go-200 pl-8">
      {moments.map((m) => (
        <li key={m.moment} className="relative">
          <span aria-hidden className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-white bg-go ring-2 ring-go-200" />
          <Reveal>
            <p className="tabular text-sm font-semibold text-go-deep">{m.moment}</p>
            <h3 className="mt-1 text-h4 text-ink">{m.title}</h3>
            <p className="mt-1 text-ink-body">{m.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}

/** Split: texto a un lado y contenido visual al otro. */
export function Split({ children, visual, reverse }: { children: React.ReactNode; visual: React.ReactNode; reverse?: boolean }) {
  return (
    <div className={cn('grid items-center gap-12 lg:grid-cols-2 lg:gap-16', reverse && 'lg:[&>*:first-child]:order-2')}>
      <div className="flex flex-col gap-6">{children}</div>
      <Reveal>{visual}</Reveal>
    </div>
  )
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-ink">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-go-tint text-go-deep">
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
          </span>
          {t}
        </li>
      ))}
    </ul>
  )
}

/** CtaBand: banda azul con una acción (una sola llamada principal por bloque). */
export function CtaBand({ title, text, cta, href }: { title: string; text: string; cta: string; href: string }) {
  return (
    <section className="bg-go text-white">
      <div className="container flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-h3">{title}</h2>
          <p className="mt-2 max-w-2xl text-go-50">{text}</p>
        </div>
        <CtaLink href={href} kind="light" size="lg">
          {cta}
        </CtaLink>
      </div>
    </section>
  )
}

export function FaqSection({ items, tone = 'white', title }: { items: { q: string; a: string }[]; tone?: Tone; title?: string }) {
  const t = useT('common')
  if (!items.length) return null
  return (
    <Section tone={tone} eyebrow={t('faqEyebrow')} title={title ?? t('faqTitle')}>
      <Faq items={items} />
    </Section>
  )
}
