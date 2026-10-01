/**
 * Módulo centralizado de lectura y escritura de consentimiento de cookies.
 * Usado por cookie-consent.tsx, marketing-tags.tsx y use-signup-url.ts.
 */

export const CONSENT_COOKIE = 'goadmin_consent'
export const CONSENT_VERSION = 1
const MAX_AGE_DAYS = 180

export type ConsentChoice = {
  v: number
  analytics: boolean
  marketing: boolean
  ts: number
}

/**
 * Lee el consentimiento de la cookie goadmin_consent.
 * Retorna null para formatos viejos (string "all") o sin campo marketing explícito.
 * Solo acepta formato JSON {"v":1,"analytics":bool,"marketing":bool,"ts":epoch}.
 * MENOR: Valida v===1 y que analytics/marketing sean booleans.
 */
export function readChoice(): ConsentChoice | null {
  if (typeof document === 'undefined') return null
  
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]+)`))
  if (!match) return null
  
  try {
    const decoded = decodeURIComponent(match[1])
    
    // BLOQUEANTE #1: Formato heredado 'all' o 'necessary' NO son válidos
    if (decoded === 'all' || decoded === 'necessary') {
      return null
    }
    
    // Formato nuevo JSON
    const parsed = JSON.parse(decoded)
    
    // MENOR: Validar v===1 y que analytics/marketing sean booleans
    if (
      typeof parsed === 'object' && 
      parsed !== null && 
      parsed.v === 1 &&
      typeof parsed.analytics === 'boolean' &&
      typeof parsed.marketing === 'boolean'
    ) {
      return parsed as ConsentChoice
    }
    
    // Cualquier otro formato no válido
    return null
  } catch {
    return null
  }
}

/**
 * Guarda el consentimiento en la cookie goadmin_consent.
 * Domain=.goadmin.io solo en producción, 180 días de duración.
 */
export function saveChoice(choice: ConsentChoice) {
  if (typeof document === 'undefined') return
  
  const value = encodeURIComponent(JSON.stringify(choice))
  const maxAge = MAX_AGE_DAYS * 86400
  
  const hostname = typeof window !== 'undefined' ? window.location.hostname : ''
  const isProduction = hostname === 'goadmin.io' || hostname === 'www.goadmin.io'
  const domainAttr = isProduction ? '; domain=.goadmin.io' : ''
  
  document.cookie = `${CONSENT_COOKIE}=${value}; max-age=${maxAge}; path=/${domainAttr}; SameSite=Lax; Secure`
  
  // Emitir evento para MarketingTags y otros componentes
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('goadmin:consent', {
      detail: {
        analytics: choice.analytics,
        marketing: choice.marketing,
      }
    }))
  }
}

/**
 * Borra una cookie en el dominio actual y en .goadmin.io (producción).
 */
function deleteCookie(name: string) {
  if (typeof document === 'undefined') return
  
  const hostname = typeof window !== 'undefined' ? window.location.hostname : ''
  const isProduction = hostname === 'goadmin.io' || hostname === 'www.goadmin.io'
  
  // Borrar en dominio actual
  document.cookie = `${name}=; max-age=0; path=/`
  
  // Borrar en .goadmin.io (producción)
  if (isProduction) {
    document.cookie = `${name}=; max-age=0; path=/; domain=.goadmin.io`
  }
}

/**
 * Borra cookies de Google Analytics (_ga, _ga_*).
 */
function deleteGoogleAnalyticsCookies() {
  if (typeof document === 'undefined') return
  
  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const name = cookie.split('=')[0].trim()
    if (name === '_ga' || name.startsWith('_ga_')) {
      deleteCookie(name)
    }
  }
}

/**
 * Borra cookies de Google Ads (_gcl_*).
 */
function deleteGoogleAdsCookies() {
  if (typeof document === 'undefined') return
  
  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const name = cookie.split('=')[0].trim()
    if (name.startsWith('_gcl_')) {
      deleteCookie(name)
    }
  }
}

/**
 * Borra cookies de Meta (_fbp, _fbc).
 */
function deleteMetaCookies() {
  deleteCookie('_fbp')
  deleteCookie('_fbc')
}

/**
 * BLOQUEANTE #3: Retiro parcial de consentimiento.
 * Si se retira Publicidad: revoca Meta, actualiza gtag ads en denied, borra _fbp, _fbc, _gcl_*.
 * Si se retira Medición: actualiza gtag analytics en denied, borra _ga*, goadmin_attr y sessionStorage.
 */
export function revokeConsent(previous: ConsentChoice | null, current: ConsentChoice) {
  if (!previous) return
  
  // Si se retira Publicidad
  if (previous.marketing && !current.marketing) {
    // Revocar Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('consent', 'revoke')
    }
    
    // Actualizar Google Consent Mode
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
    }
    
    // Borrar cookies de Meta y Google Ads
    deleteMetaCookies()
    deleteGoogleAdsCookies()
  }
  
  // Si se retira Medición
  if (previous.analytics && !current.analytics) {
    // Actualizar Google Consent Mode
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      })
    }
    
    // Borrar cookies de Analytics
    deleteGoogleAnalyticsCookies()
    
    // Borrar goadmin_attr
    deleteCookie('goadmin_attr')
    
    // Borrar sessionStorage
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('goadmin_attr_session')
    }
    
    // Limpiar atribución de memoria
    if (typeof window !== 'undefined') {
      const { clearAttribution } = require('@/lib/attribution')
      clearAttribution()
    }
  }
}

/**
 * BLOQUEANTE #2 y REVISIÓN 4 BLOQUEANTE #1: 
 * "Rechazar" guarda {"v":1,"analytics":false,"marketing":false,"ts":...}
 * y borra TODAS las cookies de terceros (_ga*, _fbp, _fbc, _gcl_*), 
 * goadmin_attr, sessionStorage, y revoca Google y Meta.
 */
export function rejectAll() {
  // REVISIÓN 4 BLOQUEANTE #1: Borrar TODAS las cookies de terceros
  deleteGoogleAnalyticsCookies()
  deleteMetaCookies()
  deleteGoogleAdsCookies()
  
  // Borrar goadmin_attr
  deleteCookie('goadmin_attr')
  
  // Borrar sessionStorage
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.removeItem('goadmin_attr_session')
  }
  
  // Revocar Google
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
  }
  
  // Revocar Meta
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('consent', 'revoke')
  }
  
  // Limpiar atribución de memoria
  if (typeof window !== 'undefined') {
    const { clearAttribution } = require('@/lib/attribution')
    clearAttribution()
  }
  
  // Guardar elección de rechazo
  const choice: ConsentChoice = {
    v: CONSENT_VERSION,
    analytics: false,
    marketing: false,
    ts: Date.now(),
  }
  saveChoice(choice)
  
  return choice
}
