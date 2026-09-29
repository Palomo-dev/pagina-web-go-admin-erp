'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { captureAttribution } from '@/lib/attribution'

/**
 * Etiquetas de marketing: píxel de Meta y Google Analytics/Ads.
 * 
 * - Solo se cargan con consentimiento de marketing.
 * - Implementa Consent Mode v2 básico (default denied).
 * - Escucha cambios de consentimiento para activarse sin recargar.
 * - Si las variables de entorno no existen, no se carga nada.
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
    fbq?: (action: string, event: string, params?: Record<string, any>) => void
    _fbq?: Window['fbq']
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
  }
}

function initMetaPixel() {
  if (!META_PIXEL_ID || typeof window === 'undefined') return
  
  // Inicializar Meta Pixel
  const fbq = function(...args: any[]) {
    if (window.fbq?.callMethod) {
      window.fbq.callMethod.apply(window.fbq, args as any)
    } else {
      window.fbq!.queue.push(args)
    }
  } as any
  
  if (!window.fbq) {
    window.fbq = fbq
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
  }
  
  window.fbq('init', META_PIXEL_ID)
  window.fbq('track', 'PageView')
}

function initGoogleTags(hasAnalytics: boolean, hasMarketing: boolean) {
  if (typeof window === 'undefined') return
  
  // Inicializar dataLayer
  window.dataLayer = window.dataLayer || []
  window.gtag = function(...args: any[]) {
    window.dataLayer!.push(args)
  }
  
  // Configurar Consent Mode v2 (básico)
  window.gtag('consent', 'default', {
    ad_storage: hasMarketing ? 'granted' : 'denied',
    ad_user_data: hasMarketing ? 'granted' : 'denied',
    ad_personalization: hasMarketing ? 'granted' : 'denied',
    analytics_storage: hasAnalytics ? 'granted' : 'denied',
  })
  
  // Configurar GA4
  if (GA4_ID) {
    window.gtag('js', new Date())
    window.gtag('config', GA4_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=Lax;Secure',
    })
  }
  
  // Configurar Google Ads
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
  captureAttribution(hasMarketing)
}

export function MarketingTags() {
  const [consent, setConsent] = useState<ConsentState | null>(null)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)
  
  useEffect(() => {
    // Leer consentimiento de la cookie
    const readConsent = (): ConsentState | null => {
      const match = document.cookie.match(/(?:^|; )goadmin_consent=([^;]+)/)
      if (!match) return null
      
      try {
        const decoded = decodeURIComponent(match[1])
        const data = JSON.parse(decoded)
        
        // Manejar formato heredado 'all'
        if (decoded === 'all') {
          return { analytics: true, marketing: true }
        }
        
        // Manejar formato nuevo JSON
        if (typeof data === 'object' && data !== null) {
          return {
            analytics: data.analytics === true,
            marketing: data.marketing === true,
          }
        }
        
        return null
      } catch {
        // Formato heredado 'all' sin JSON
        if (match[1] === 'all') {
          return { analytics: true, marketing: true }
        }
        return null
      }
    }
    
    const currentConsent = readConsent()
    setConsent(currentConsent)
    
    // Escuchar cambios de consentimiento
    const handleConsentChange = (e: CustomEvent) => {
      const newConsent = e.detail as ConsentState
      setConsent(newConsent)
      
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
      captureAttribution(consent.marketing)
    }
  }, [consent])
  
  // No cargar nada si no hay consentimiento
  if (!consent) return null
  
  const shouldLoadAnalytics = consent.analytics && (GA4_ID || GADS_ID)
  const shouldLoadMarketing = consent.marketing && META_PIXEL_ID
  
  return (
    <>
      {/* Google Analytics y Google Ads */}
      {shouldLoadAnalytics && GA4_ID && (
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          onLoad={() => {
            initGoogleTags(consent.analytics, consent.marketing)
            setScriptsLoaded(true)
          }}
        />
      )}
      
      {/* Meta Pixel */}
      {shouldLoadMarketing && META_PIXEL_ID && (
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
