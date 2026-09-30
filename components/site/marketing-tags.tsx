'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { captureAttribution } from '@/lib/attribution'
import { readChoice, type ConsentChoice } from '@/lib/consent'

/**
 * Etiquetas de marketing: píxel de Meta y Google Analytics/Ads.
 * 
 * - Google Analytics se carga con consentimiento de medición (analytics).
 * - Meta Pixel y Google Ads se cargan con consentimiento de publicidad (marketing).
 * - Implementa Consent Mode v2 básico (default denied).
 * - Escucha cambios de consentimiento para activarse sin recargar.
 * - BLOQUEANTE #1: Usa readChoice() centralizada que rechaza formatos viejos.
 * - MENOR: Meta Pixel usa stub estándar (fbq.queue, callMethod, _fbq).
 */

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID

type ConsentState = {
  analytics: boolean
  marketing: boolean
}

declare global {
  interface Window {
    fbq?: ((action: string, event: string, params?: Record<string, any>, options?: Record<string, any>) => void) & {
      callMethod?: (...args: any[]) => void
      queue: any[]
      push: (...args: any[]) => void
      loaded: boolean
      version: string
    }
    _fbq?: Window['fbq']
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
  }
}

/**
 * MENOR: Stub estándar de Meta Pixel (fbq.queue, callMethod, _fbq).
 * Se ejecuta ANTES de cargar fbevents.js.
 */
function initMetaPixelStub() {
  if (typeof window === 'undefined' || window.fbq) return
  
  const fbq = function(...args: any[]) {
    if (fbq.callMethod) {
      fbq.callMethod.apply(fbq, args)
    } else {
      fbq.queue.push(args)
    }
  } as Window['fbq']
  
  fbq!.push = fbq as any
  fbq!.loaded = true
  fbq!.version = '2.0'
  fbq!.queue = []
  
  window.fbq = fbq
  window._fbq = fbq
}

function initMetaPixel() {
  if (!META_PIXEL_ID || typeof window === 'undefined') return
  
  // El stub ya está inicializado, solo llamar init y track
  if (window.fbq) {
    window.fbq('init', META_PIXEL_ID)
    window.fbq('track', 'PageView')
  }
}

function initGoogleTags(hasAnalytics: boolean, hasMarketing: boolean) {
  if (typeof window === 'undefined') return
  
  // Inicializar dataLayer
  window.dataLayer = window.dataLayer || []
  
  // FIX #3: Forma estándar de gtag que preserva arguments
  window.gtag = function() {
    window.dataLayer!.push(arguments)
  }
  
  // Configurar Consent Mode v2 (básico)
  window.gtag('consent', 'default', {
    ad_storage: hasMarketing ? 'granted' : 'denied',
    ad_user_data: hasMarketing ? 'granted' : 'denied',
    ad_personalization: hasMarketing ? 'granted' : 'denied',
    analytics_storage: hasAnalytics ? 'granted' : 'denied',
  })
  
  window.gtag('js', new Date())
  
  // FIX #4: Configurar GA4 solo si analytics es true
  if (GA4_ID && hasAnalytics) {
    window.gtag('config', GA4_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=Lax;Secure',
    })
  }
  
  // FIX #4: Configurar Google Ads solo si marketing es true
  if (GADS_ID && hasMarketing) {
    window.gtag('config', GADS_ID)
  }
}

function updateConsent(hasAnalytics: boolean, hasMarketing: boolean) {
  if (typeof window === 'undefined') return
  
  // Actualizar Consent Mode
  if (window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: hasMarketing ? 'granted' : 'denied',
      ad_user_data: hasMarketing ? 'granted' : 'denied',
      ad_personalization: hasMarketing ? 'granted' : 'denied',
      analytics_storage: hasAnalytics ? 'granted' : 'denied',
    })
  }
  
  // Capturar atribución
  captureAttribution(hasAnalytics)
}

export function MarketingTags() {
  const [consent, setConsent] = useState<ConsentState | null>(null)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)
  
  useEffect(() => {
    // BLOQUEANTE #1: Usar readChoice() centralizada
    const choice = readChoice()
    const currentConsent = choice ? { analytics: choice.analytics, marketing: choice.marketing } : null
    setConsent(currentConsent)
    
    // MENOR REVISIÓN 4: Inicializar stub de Meta Pixel en la primera aceptación
    if (currentConsent?.marketing && META_PIXEL_ID) {
      initMetaPixelStub()
    }
    
    // Escuchar cambios de consentimiento
    const handleConsentChange = (e: CustomEvent) => {
      const newConsent = e.detail as ConsentState
      setConsent(newConsent)
      
      // MENOR REVISIÓN 4: Inicializar stub si se acepta marketing por primera vez
      if (newConsent.marketing && META_PIXEL_ID && !window.fbq) {
        initMetaPixelStub()
      }
      
      if (scriptsLoaded) {
        updateConsent(newConsent.analytics, newConsent.marketing)
      }
    }
    
    window.addEventListener('goadmin:consent', handleConsentChange as EventListener)
    return () => window.removeEventListener('goadmin:consent', handleConsentChange as EventListener)
  }, [scriptsLoaded])
  
  // Capturar atribución al cargar la página
  useEffect(() => {
    if (consent) {
      captureAttribution(consent.analytics)
    }
  }, [consent])
  
  // No cargar nada si no hay consentimiento
  if (!consent) return null
  
  // FIX #4: Cargar gtag.js cuando analytics O marketing es true
  const shouldLoadGtag = (consent.analytics || consent.marketing) && (GA4_ID || GADS_ID)
  const shouldLoadMetaPixel = consent.marketing && META_PIXEL_ID
  
  return (
    <>
      {/* Google Tag (gtag.js) - se carga si hay consentimiento de Medición O Publicidad */}
      {shouldLoadGtag && (
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID || GADS_ID}`}
          onLoad={() => {
            initGoogleTags(consent.analytics, consent.marketing)
            setScriptsLoaded(true)
          }}
        />
      )}
      
      {/* Meta Pixel (requiere consentimiento de publicidad) */}
      {shouldLoadMetaPixel && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            src="https://connect.facebook.net/en_US/fbevents.js"
            onLoad={() => {
              initMetaPixel()
              if (GA4_ID && !scriptsLoaded) {
                setScriptsLoaded(true)
              }
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  )
}

/**
 * Dispara un evento de ViewContent (Meta y GA4).
 */
export function trackViewContent(params?: { content_name?: string; content_category?: string }) {
  if (typeof window === 'undefined') return
  
  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'ViewContent', params)
  }
  
  // GA4
  if (window.gtag) {
    window.gtag('event', 'view_item', {
      ...(params?.content_name && { item_name: params.content_name }),
      ...(params?.content_category && { item_category: params.content_category }),
    })
  }
}

/**
 * Dispara un evento de Lead (Meta y GA4).
 * Para Meta debe incluir event_id para deduplicación con CAPI.
 */
export function trackLead(params: { event_id: string; content_name?: string }) {
  if (typeof window === 'undefined') return
  
  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: params.content_name,
    }, {
      eventID: params.event_id,
    })
  }
  
  // GA4
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      ...(params.content_name && { content_name: params.content_name }),
    })
  }
}
