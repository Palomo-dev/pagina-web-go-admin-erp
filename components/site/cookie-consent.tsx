'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { Link } from '@/i18n/navigation'
import { useT } from '@/i18n/t'
import { cn } from '@/lib/utils'
import { readChoice, saveChoice, rejectAll, revokeConsent, type ConsentChoice, CONSENT_VERSION } from '@/lib/consent'

/**
 * Banner de consentimiento de cookies según el contrato compartido con el ERP.
 * 
 * - 3 botones del mismo peso: Aceptar todas, Rechazar, Configurar.
 * - Cookie goadmin_consent con formato JSON: {"v":1,"analytics":bool,"marketing":bool,"ts":epoch}
 * - Domain=.goadmin.io solo en producción, Path=/, SameSite=Lax, Secure, 180 días.
 * - Emite evento window.dispatchEvent(new CustomEvent('goadmin:consent', {detail}))
 * - Vercel Analytics solo se carga con analytics=true.
 * - BLOQUEANTE #2: "Rechazar" GUARDA la elección (no borra la cookie).
 */

export function CookieConsent() {
  const t = useT('consent')
  const [choice, setChoice] = useState<ConsentChoice | null>(null)
  const [open, setOpen] = useState(false)
  const [showConfig, setShowConfig] = useState(false)
  const [tempAnalytics, setTempAnalytics] = useState(false)
  const [tempMarketing, setTempMarketing] = useState(false)

  useEffect(() => {
    const saved = readChoice()
    setChoice(saved)
    setOpen(!saved)
    
    // BLOQUEANTE #3: Escuchar eventos para abrir el panel de configuración SIEMPRE
    const handleOpenPreferences = () => {
      const current = readChoice()
      if (current) {
        // Si ya hay una elección, abrir el panel de configuración
        setTempAnalytics(current.analytics)
        setTempMarketing(current.marketing)
        setShowConfig(true)
        setOpen(true) // BLOQUEANTE #3: Abrir el banner para mostrar el panel
      } else {
        // Si no hay elección, abrir el banner inicial
        setOpen(true)
      }
    }
    
    // Evento desde el pie de página
    window.addEventListener('goadmin:consent-open', handleOpenPreferences)
    // Evento desde la página /cookies (PR #22)
    window.addEventListener('goadmin:open-cookie-preferences', handleOpenPreferences)
    
    return () => {
      window.removeEventListener('goadmin:consent-open', handleOpenPreferences)
      window.removeEventListener('goadmin:open-cookie-preferences', handleOpenPreferences)
    }
  }, [])

  const decide = (analytics: boolean, marketing: boolean) => {
    // BLOQUEANTE #2: "Rechazar" GUARDA la elección (no borra)
    if (!analytics && !marketing) {
      const rejectedChoice = rejectAll()
      setChoice(rejectedChoice)
      setOpen(false)
      setShowConfig(false)
      return
    }
    
    // BLOQUEANTE #3: Revocar categorías específicas si se retira consentimiento
    const previous = choice
    const newChoice: ConsentChoice = {
      v: CONSENT_VERSION,
      analytics,
      marketing,
      ts: Date.now(),
    }
    
    if (previous) {
      revokeConsent(previous, newChoice)
    }
    
    saveChoice(newChoice)
    setChoice(newChoice)
    setOpen(false)
    setShowConfig(false)
  }

  const openConfig = () => {
    setTempAnalytics(choice?.analytics ?? false)
    setTempMarketing(choice?.marketing ?? false)
    setShowConfig(true)
  }

  const saveConfig = () => {
    decide(tempAnalytics, tempMarketing)
  }

  return (
    <>
      {/* Solo cargar Vercel Analytics si analytics=true */}
      {choice?.analytics ? <Analytics /> : null}
      
      {open ? (
        <div
          role="region"
          aria-label={t('label')}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-[20px] border border-ink-line bg-white shadow-float sm:inset-x-6 sm:bottom-6"
        >
          {!showConfig ? (
            <div className="p-5 sm:p-6">
              <p className="text-h4 text-ink">{t('title')}</p>
              <p className="mt-2 text-sm text-ink-body">
                {t('text')}{' '}
                <Link href="/cookies" className="font-semibold text-go-deep underline">
                  {t('policy')}
                </Link>
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <ConsentButton onClick={() => decide(false, false)} kind="secondary">
                  {t('reject')}
                </ConsentButton>
                <ConsentButton onClick={openConfig} kind="secondary">
                  {t('configure')}
                </ConsentButton>
                <ConsentButton onClick={() => decide(true, true)}>
                  {t('accept')}
                </ConsentButton>
              </div>
            </div>
          ) : (
            <div className="p-5 sm:p-6">
              <p className="text-h4 text-ink">{t('configTitle')}</p>
              <p className="mt-2 text-sm text-ink-body">{t('configText')}</p>
              
              <div className="mt-6 space-y-4">
                {/* Cookies necesarias (siempre activas) */}
                <div className="flex items-start justify-between gap-4 rounded-xl border border-ink-line bg-go-wash/40 p-4">
                  <div className="flex-1">
                    <p className="font-semibold text-ink">{t('necessary')}</p>
                    <p className="mt-1 text-sm text-ink-body">{t('necessaryText')}</p>
                  </div>
                  <div className="shrink-0">
                    <div className="inline-flex h-10 items-center rounded-lg bg-slate-200 px-4 text-sm font-medium text-slate-500">
                      {t('alwaysActive')}
                    </div>
                  </div>
                </div>
                
                {/* Cookies de analítica */}
                <div className="flex items-start justify-between gap-4 rounded-xl border border-ink-line bg-white p-4">
                  <div className="flex-1">
                    <p className="font-semibold text-ink">{t('analytics')}</p>
                    <p className="mt-1 text-sm text-ink-body">{t('analyticsText')}</p>
                  </div>
                  <div className="shrink-0">
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        checked={tempAnalytics}
                        onChange={(e) => setTempAnalytics(e.target.checked)}
                        className="peer sr-only"
                      />
                      <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-go peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-go peer-focus:ring-offset-2"></div>
                      <span className="sr-only">{t('analytics')}</span>
                    </label>
                  </div>
                </div>
                
                {/* Cookies de publicidad (Meta y Google) */}
                <div className="flex items-start justify-between gap-4 rounded-xl border border-ink-line bg-white p-4">
                  <div className="flex-1">
                    <p className="font-semibold text-ink">{t('marketing')}</p>
                    <p className="mt-1 text-sm text-ink-body">{t('marketingText')}</p>
                  </div>
                  <div className="shrink-0">
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        checked={tempMarketing}
                        onChange={(e) => setTempMarketing(e.target.checked)}
                        className="peer sr-only"
                      />
                      <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-go peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-go peer-focus:ring-offset-2"></div>
                      <span className="sr-only">{t('marketing')}</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <ConsentButton onClick={() => setShowConfig(false)} kind="secondary">
                  {t('back')}
                </ConsentButton>
                <ConsentButton onClick={saveConfig}>
                  {t('saveConfig')}
                </ConsentButton>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </>
  )
}

function ConsentButton({ onClick, kind = 'primary', children }: { onClick: () => void; kind?: 'primary' | 'secondary'; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition-colors',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-go',
        kind === 'primary' ? 'bg-go-action text-white hover:bg-go-deep' : 'border border-slate-300 bg-white text-ink hover:border-go hover:text-go-deep',
      )}
    >
      {children}
    </button>
  )
}

/** Botón para volver a abrir el aviso y cambiar la elección. */
export function CookieSettingsButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('goadmin:consent-open'))} className={className}>
      {children}
    </button>
  )
}

// Re-exportar para compatibilidad
export { CONSENT_COOKIE } from '@/lib/consent'
