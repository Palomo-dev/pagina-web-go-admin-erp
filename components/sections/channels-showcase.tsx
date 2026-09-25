'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, Globe } from 'lucide-react'
import { Icon } from '@/components/site/icon'
import { LinkArrow } from '@/components/site/primitives'
import { ProductMock, type MockKind } from '@/components/sections/product-mock'
import { useLocale } from 'next-intl'
import { sampleDomain } from '@/i18n/markets'
import { useT } from '@/i18n/t'
import type { IconName } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Pestañas (textos en messages › channels.tabs.<id>) */
const TABS: { id: string; icon: IconName; mock: MockKind; href: string }[] = [
  { id: 'web', icon: 'globe', mock: 'site', href: '/producto/sitio-web' },
  { id: 'tienda', icon: 'store', mock: 'store', href: '/producto/tienda-en-linea' },
  { id: 'reservas', icon: 'calendar', mock: 'booking', href: '/producto/motor-de-reservas' },
]

/**
 * Canales digitales: cada organización recibe página web, tienda y motor de reservas al registrarse.
 * (Figma › ChannelsShowcase)
 */
export function ChannelsShowcase({ showLinks = true }: { showLinks?: boolean }) {
  const tr = useT('channels')
  const [tab, setTab] = useState(0)
  const reduce = useReducedMotion()
  const t = TABS[tab]
  const k = `tabs.${t.id}`
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
      <div className="flex flex-col gap-6">
        <div role="tablist" aria-label={tr('aria')} className="flex flex-wrap gap-2">
          {TABS.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              type="button"
              aria-selected={tab === i}
              aria-controls={`canal-${x.id}`}
              onClick={() => setTab(i)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-fast',
                tab === i ? 'border-go bg-go text-white' : 'border-ink-line bg-white text-ink-body hover:border-go hover:text-ink',
              )}
            >
              <Icon name={x.icon} className="h-4 w-4" />
              {tr(`tabs.${x.id}.label`)}
            </button>
          ))}
        </div>
        <div id={`canal-${t.id}`} role="tabpanel" className="flex flex-col gap-5">
          <h3 className="text-h3 text-ink">{tr(`${k}.title`)}</h3>
          <ul className="grid gap-3">
            {[0, 1, 2].map((n) => tr(`${k}.points.${n}`)).map((p) => (
              <li key={p} className="flex items-center gap-3 text-ink">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-go-tint text-go-deep">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <DomainTicker />
          {showLinks ? <LinkArrow href={t.href}>{tr(`${k}.cta`)}</LinkArrow> : null}
        </div>
      </div>
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={t.id} initial={reduce ? false : { opacity: 0, y: 16, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={reduce ? undefined : { opacity: 0, y: -12 }} transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}>
            <ProductMock kind={t.mock} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/** La dirección del sitio alterna entre el subdominio de GO Admin y un dominio propio. */
function DomainTicker() {
  const tr = useT('channels')
  const DOMAINS = ['cafearoma.goadmin.io', sampleDomain(useLocale())]
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((v) => (v + 1) % DOMAINS.length), 2600)
    return () => clearInterval(t)
  }, [reduce, DOMAINS.length])
  return (
    <div className="flex w-fit items-center gap-3 rounded-2xl border border-ink-line bg-white px-4 py-3">
      <Globe className="h-5 w-5 text-go" strokeWidth={1.5} aria-hidden />
      <span className="relative h-5 w-48 overflow-hidden text-sm font-semibold text-ink">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={DOMAINS[i]} className="absolute inset-0" initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -16, opacity: 0 }} transition={{ duration: 0.24 }}>
            {DOMAINS[i]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">{i === 0 ? tr('included') : tr('ownDomain')}</span>
    </div>
  )
}
