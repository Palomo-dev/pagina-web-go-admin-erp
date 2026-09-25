'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { CtaLink, Tag } from '@/components/site/primitives'
import { PLANS, SIGNUP_URL, formatCOP } from '@/lib/site'
import { cn } from '@/lib/utils'

/** BillingToggle + PricingCard × 3 (Figma › PricingCard · Plan). */
export function PricingCards({ className }: { className?: string }) {
  const [annual, setAnnual] = useState(false)
  return (
    <div className={cn('flex flex-col items-center gap-10', className)}>
      <div role="radiogroup" aria-label="Periodo de facturación" className="inline-flex gap-1 rounded-full border border-ink-line bg-white p-1 shadow-sm">
        {[
          { v: false, label: 'Mensual' },
          { v: true, label: 'Anual' },
        ].map((o) => (
          <button
            key={o.label}
            type="button"
            role="radio"
            aria-checked={annual === o.v}
            onClick={() => setAnnual(o.v)}
            className={cn('relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-fast', annual === o.v ? 'text-white' : 'text-ink-body hover:text-ink')}
          >
            {annual === o.v ? <motion.span layoutId="billing-pill" className="absolute inset-0 rounded-full bg-go-action" transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }} /> : null}
            <span className="relative">{o.label}</span>
            {o.v ? <Tag kind="success" className="relative">2 meses gratis</Tag> : null}
          </button>
        ))}
      </div>

      <div className="grid w-full items-center gap-6 lg:grid-cols-3">
        {PLANS.map((p) => {
          const price = annual ? p.annual : p.monthly
          return (
            <article
              key={p.id}
              className={cn(
                'relative flex h-full flex-col gap-5 rounded-3xl border bg-white p-7 sm:p-8',
                p.recommended ? 'border-2 border-go shadow-lg lg:-my-4 lg:py-12' : 'border-ink-line',
              )}
            >
              <header className="flex items-center justify-between">
                <h3 className="text-h3 text-ink">{p.name}</h3>
                {p.recommended ? <Tag kind="recommended">Más elegido</Tag> : null}
              </header>
              <p className="-mt-3 text-sm text-ink-body">{p.forWho}</p>
              <div>
                <p className="flex items-baseline gap-1.5">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={price}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="tabular text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-ink"
                    >
                      {formatCOP(price)}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-ink-muted">/ {annual ? 'año' : 'mes'}</span>
                </p>
                <p className="mt-2 text-xs text-ink-muted">
                  {annual ? `Equivale a ${formatCOP(Math.round(p.annual / 12))} al mes` : `${formatCOP(p.annual)} al año · 2 meses gratis`} · {p.trialDays} días de prueba
                </p>
              </div>
              <CtaLink href={SIGNUP_URL} kind={p.recommended ? 'primary' : 'secondary'} className="w-full">
                {`Probar ${p.name} gratis`}
              </CtaLink>
              <hr className="border-ink-line" />
              <ul className="grid gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-go" strokeWidth={2} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
      <p className="text-center text-xs text-ink-muted">Precios en pesos colombianos. Cancela cuando quieras.</p>
    </div>
  )
}
