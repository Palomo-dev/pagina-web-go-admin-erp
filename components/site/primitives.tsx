import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ---------------------------------------------------------------------------
// Button (Figma › 02 Componentes › Button · Tipo × Tamaño)
// ---------------------------------------------------------------------------
type ButtonKind = 'primary' | 'secondary' | 'ghost' | 'light' | 'outline-light'

const KIND: Record<ButtonKind, string> = {
  // Azul acción: convive con el isotipo en Azul GO
  primary: 'bg-go-action text-white shadow-action hover:bg-go-deep',
  secondary: 'bg-white text-ink border border-slate-300 hover:border-go hover:text-go-deep',
  ghost: 'text-go-deep hover:bg-go-tint',
  light: 'bg-white text-go-deep hover:bg-go-tint shadow-md',
  'outline-light': 'border border-white/60 text-white hover:bg-white/10',
}

export function CtaLink({
  href,
  children,
  kind = 'primary',
  size = 'md',
  arrow = true,
  className,
  external,
}: {
  href: string
  children: React.ReactNode
  kind?: ButtonKind
  size?: 'md' | 'lg'
  arrow?: boolean
  className?: string
  external?: boolean
}) {
  const cls = cn(
    'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-fast ease-out',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-go active:scale-[0.98]',
    size === 'lg' ? 'h-14 px-7 text-base' : 'h-11 px-5 text-sm',
    KIND[kind],
    className,
  )
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowRight className="h-[18px] w-[18px] transition-transform duration-fast ease-out group-hover:translate-x-1" strokeWidth={1.75} aria-hidden /> : null}
    </>
  )
  if (external || href.startsWith('http')) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}

export function LinkArrow({ href, children, className, tone = 'brand' }: { href: string; children: React.ReactNode; className?: string; tone?: 'brand' | 'light' }) {
  const external = href.startsWith('http')
  const cls = cn(
    'group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-fast',
    tone === 'brand' ? 'text-go-deep hover:text-go-action' : 'text-white hover:text-go-100',
    className,
  )
  const inner = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-fast ease-out group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
    </>
  )
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}

// ---------------------------------------------------------------------------
// Eyebrow (Figma › Eyebrow · Fondo=Claro|Azul)
// ---------------------------------------------------------------------------
export function Eyebrow({ children, tone = 'light', className }: { children: React.ReactNode; tone?: 'light' | 'blue'; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full py-1.5 pl-3 pr-3.5 text-xs font-semibold',
        tone === 'light' ? 'bg-go-tint text-go-deep' : 'border border-white/30 bg-white/[0.14] text-white backdrop-blur',
        className,
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', tone === 'light' ? 'bg-go' : 'bg-emerald-300')} aria-hidden />
      {children}
    </span>
  )
}

// ---------------------------------------------------------------------------
// SectionHeader (Figma › SectionHeader · Alineación × Fondo)
// ---------------------------------------------------------------------------
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
  className,
  as: As = 'h2',
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'center' | 'left'
  tone?: 'light' | 'blue'
  className?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <div className={cn('flex max-w-3xl flex-col gap-4', align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left', className)}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <As className={cn('text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-h2', tone === 'light' ? 'text-ink' : 'text-white')}>{title}</As>
      {subtitle ? <p className={cn('text-pretty text-base sm:text-lead', tone === 'light' ? 'text-ink-body' : 'text-go-50/90')}>{subtitle}</p> : null}
    </div>
  )
}

export function Tag({ children, kind = 'neutral', className }: { children: React.ReactNode; kind?: 'neutral' | 'brand' | 'recommended' | 'success' | 'warning'; className?: string }) {
  const k = {
    neutral: 'bg-slate-100 text-ink-body',
    brand: 'bg-go-tint text-go-deep',
    recommended: 'bg-go text-white',
    success: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
  }[kind]
  return <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium', k, className)}>{children}</span>
}
