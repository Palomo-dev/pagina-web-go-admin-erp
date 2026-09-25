'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { Link } from '@/i18n/navigation'
import { useT } from '@/i18n/t'
import { cn } from '@/lib/utils'

/**
 * Aviso de consentimiento de cookies (Figma › CookieConsent).
 * La analítica de Vercel solo se carga si la persona la acepta. La elección se guarda en la
 * cookie `goadmin_consent` ('all' | 'necessary') durante un año.
 */
export const CONSENT_COOKIE = 'goadmin_consent'
const OPEN_EVENT = 'goadmin:consent-open'
type Choice = 'all' | 'necessary'

function readChoice(): Choice | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=(all|necessary)`))
  return (match?.[1] as Choice) ?? null
}

function saveChoice(choice: Choice) {
  document.cookie = `${CONSENT_COOKIE}=${choice}; max-age=31536000; path=/; SameSite=Lax`
}

export function CookieConsent() {
  const t = useT('consent')
  const [choice, setChoice] = useState<Choice | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = readChoice()
    setChoice(saved)
    setOpen(!saved)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, reopen)
    return () => window.removeEventListener(OPEN_EVENT, reopen)
  }, [])

  const decide = (c: Choice) => {
    saveChoice(c)
    setChoice(c)
    setOpen(false)
  }

  return (
    <>
      {choice === 'all' ? <Analytics /> : null}
      {open ? (
        <div
          role="region"
          aria-label={t('label')}
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-[20px] border border-ink-line bg-white p-5 shadow-float sm:inset-x-6 sm:bottom-6 sm:p-6"
        >
          <p className="text-h4 text-ink">{t('title')}</p>
          <p className="mt-2 text-sm text-ink-body">
            {t('text')}{' '}
            <Link href="/cookies" className="font-semibold text-go-deep underline">
              {t('policy')}
            </Link>
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <ConsentButton onClick={() => decide('necessary')} kind="secondary">
              {t('necessary')}
            </ConsentButton>
            <ConsentButton onClick={() => decide('all')}>{t('accept')}</ConsentButton>
          </div>
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
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} className={className}>
      {children}
    </button>
  )
}
