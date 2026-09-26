'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Globe, X } from 'lucide-react'
import { useLocale } from 'next-intl'
import { getPathname, usePathname } from '@/i18n/navigation'
import { COUNTRIES, LANGUAGE_NAMES, MARKETS, getMarket, type MarketId } from '@/i18n/markets'
import { useT } from '@/i18n/t'
import { cn } from '@/lib/utils'

/**
 * Mercados en el orden del selector (una tarjeta cada uno). Las dos de Canadá quedan en la misma
 * fila y Estados Unidos, último, ocupa la fila completa.
 */
const MARKET_ORDER: MarketId[] = ['es-CO', 'es-MX', 'es-CL', 'es-ES', 'pt-BR', 'en-AU', 'en-CA', 'fr-CA', 'en-GB', 'en-JP', 'en-US']

/**
 * Selector de país e idioma (Figma › MarketSwitcher).
 * Cambia de mercado conservando la página actual: /precios → /es-mx/precios.
 * La elección se recuerda en la cookie GOADMIN_MARKET (next-intl).
 */
const OPEN_EVENT = 'goadmin:market-open'

/**
 * Botón del selector (navbar, menú móvil y pie de página). Solo abre el diálogo único del sitio
 * (MarketDialog, montado una vez en el layout). `onOpen` permite cerrar antes el menú móvil:
 * en Safari de iPhone un diálogo abierto encima del menú fijo dejaba pasar los toques al menú.
 */
export function MarketSwitcher({ tone = 'light', className, onOpen }: { tone?: 'light' | 'sky' | 'night'; className?: string; onOpen?: () => void }) {
  const t = useT('market')
  const current = getMarket(useLocale())
  const lang = current.language
  const label = `${current.countryData.iso2} · ${lang.toUpperCase()}`
  return (
    <button
      type="button"
      onClick={() => {
        onOpen?.()
        window.dispatchEvent(new Event(OPEN_EVENT))
      }}
      aria-haspopup="dialog"
      aria-label={`${t('label')}: ${t('current', { country: current.countryData.name[lang], language: LANGUAGE_NAMES[lang] })}`}
      className={cn(
        'inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors duration-fast',
        tone === 'sky' && 'text-white hover:bg-white/15',
        tone === 'light' && 'text-ink-body hover:bg-go-tint hover:text-ink',
        tone === 'night' && 'border border-white/20 text-night-line hover:bg-white/10',
        className,
      )}
    >
      <Globe className="h-4 w-4" strokeWidth={1.75} aria-hidden />
      <span className="tabular">{label}</span>
    </button>
  )
}

/** Diálogo de país e idioma (Figma › MarketSwitcher · diálogo). Uno solo por página, en el layout. */
export function MarketDialog() {
  const t = useT('market')
  const locale = useLocale() as MarketId
  const pathname = usePathname()
  const current = getMarket(locale)
  const lang = current.language
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const panel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const onOpen = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOpen)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    panel.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  /**
   * Cada opción es un enlace normal: el navegador carga la página del mercado elegido por sí solo
   * (no depende de la navegación de Next ni de JavaScript para cambiar de página). Antes de salir,
   * se guarda la elección en la cookie GOADMIN_MARKET para que el middleware no devuelva a la
   * persona al mercado anterior o al de su país (p. ej. al volver a Colombia, que no lleva prefijo).
   */
  const choose = (e: React.MouseEvent<HTMLAnchorElement>, id: MarketId) => {
    document.cookie = `GOADMIN_MARKET=${id}; path=/; max-age=31536000; SameSite=Lax`
    if (id === locale) {
      e.preventDefault()
      setOpen(false)
    }
  }

  return (
    <>
      {mounted
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  className="fixed inset-0 z-[90] grid place-items-end bg-ink/40 sm:place-items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                >
                  <motion.div
                    ref={panel}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="market-title"
                    tabIndex={-1}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 24, opacity: 0 }}
                    transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
                    className="max-h-[88vh] w-full overflow-y-auto rounded-t-[24px] bg-white p-6 text-left shadow-float outline-none sm:max-w-2xl sm:rounded-[24px] sm:p-8"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 id="market-title" className="text-h3 text-ink">
                          {t('title')}
                        </h2>
                        <p className="mt-1 text-sm text-ink-body">{t('subtitle')}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-go-tint text-go-deep"
                        aria-label={t('close')}
                      >
                        <X className="h-5 w-5" strokeWidth={1.75} />
                      </button>
                    </div>

                    {/* Una tarjeta por mercado (país + idioma): todas se eligen con un clic. Canadá tiene dos. */}
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {MARKET_ORDER.map((id) => {
                        const market = MARKETS[id]
                        const country = COUNTRIES[market.country]
                        const selected = id === locale
                        return (
                          <li key={id} className="sm:last:col-span-2">
                            <a
                              href={getPathname({ href: pathname, locale: id })}
                              hrefLang={id}
                              onClick={(e) => choose(e, id)}
                              aria-current={selected ? 'true' : undefined}
                              className={cn(
                                'flex h-full flex-col gap-2 rounded-2xl border p-4 transition-colors',
                                selected ? 'border-go bg-go-wash' : 'border-ink-line hover:border-go hover:bg-go-wash',
                              )}
                            >
                              <span className="flex items-center justify-between gap-3 text-sm font-semibold text-ink">
                                <span>
                                  {country.name[lang]} <span className="font-normal text-ink-muted">· {country.iso2}</span>
                                </span>
                                <span className="text-xs font-normal text-ink-muted">{t('prices', { currency: country.planCurrency })}</span>
                              </span>
                              <span className={cn('flex items-center gap-1.5 text-sm', selected ? 'font-semibold text-go-deep' : 'text-ink-body')}>
                                {selected ? <Check className="h-4 w-4" strokeWidth={2} aria-hidden /> : null}
                                <span lang={market.language}>{LANGUAGE_NAMES[market.language]}</span>
                              </span>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            // En el body: el vidrio de la navbar (backdrop-filter) atraparía un elemento fixed.
            document.body,
          )
        : null}
    </>
  )
}
