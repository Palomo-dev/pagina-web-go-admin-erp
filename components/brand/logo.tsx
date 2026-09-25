import { cn } from '@/lib/utils'

type IsoVariant = 'blue' | 'white' | 'ink-on-white' | 'ink'

const ISO: Record<IsoVariant, string> = {
  blue: 'bg-go text-white',
  white: 'bg-white text-go',
  'ink-on-white': 'bg-white text-ink',
  ink: 'bg-ink text-white',
}

/**
 * Isotipo GO (Manual v2.0 › 04): cuadrado de lado x, radio 0,29x,
 * "GO" en Inter 700 centrado ópticamente (~0,52x de ancho).
 */
export function Isotipo({ size = 32, variant = 'blue', className }: { size?: number; variant?: IsoVariant; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn('inline-grid shrink-0 select-none place-items-center font-bold leading-none', ISO[variant], className)}
      style={{ width: size, height: size, borderRadius: size * 0.29, fontSize: size * 0.365, letterSpacing: '-0.02em' }}
    >
      GO
    </span>
  )
}

type FirmaVariant = 'primary' | 'on-blue' | 'on-ink' | 'mono'

/** Firma GO Admin: isotipo + nombre. Separación x/3. GO en 700, Admin en 500. */
export function Firma({ size = 32, variant = 'primary', className }: { size?: number; variant?: FirmaVariant; className?: string }) {
  const iso: IsoVariant = variant === 'primary' ? 'blue' : variant === 'on-blue' ? 'white' : variant === 'on-ink' ? 'ink-on-white' : 'ink'
  const text = variant === 'primary' || variant === 'mono' ? 'text-ink' : 'text-white'
  return (
    <span className={cn('inline-flex items-center whitespace-nowrap', text, className)} style={{ gap: size / 3 }}>
      <Isotipo size={size} variant={iso} />
      <span className="font-medium leading-none" style={{ fontSize: size * 0.72, letterSpacing: '-0.03em' }}>
        <b className="font-bold">GO</b> Admin
      </span>
    </span>
  )
}
