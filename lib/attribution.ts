/**
 * Atribución de marketing según el contrato compartido con el ERP.
 *
 * - Sin consentimiento de medición: SOLO utm_* en sessionStorage.
 * - Con consentimiento de medición: cookie goadmin_attr con primer y último toque (90 días).
 * - Enlaces al registro: agregar UTM vigentes; gclid/fbclid SOLO con consentimiento de medición.
 */

const ATTR_COOKIE = 'goadmin_attr'
const ATTR_SESSION_KEY = 'goadmin_attr_session'

export type Attribution = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  gclid?: string
  fbclid?: string
  _fbp?: string
  _fbc?: string
  landing?: string
  referrer?: string
}

export type AttributionData = {
  first: Attribution
  last: Attribution
}

/**
 * Lee los parámetros UTM y de clic de la URL actual.
 */
function readUrlParams(): Attribution {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const attr: Attribution = {}
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
  utmKeys.forEach(key => {
    const value = params.get(key)
    if (value) attr[key] = value
  })
  
  const gclid = params.get('gclid')
  if (gclid) attr.gclid = gclid
  
  const fbclid = params.get('fbclid')
  if (fbclid) attr.fbclid = fbclid
  
  if (Object.keys(attr).length > 0) {
    attr.landing = window.location.pathname
    const referrer = document.referrer
    if (referrer && !referrer.includes('goadmin.io')) {
      try {
        attr.referrer = new URL(referrer).hostname
      } catch {}
    }
  }
  
  return attr
}

/**
 * Lee la cookie _fbp.
 */
function readFbp(): string | undefined {
  if (typeof document === 'undefined') return undefined
  const match = document.cookie.match(/(?:^|; )_fbp=([^;]+)/)
  return match?.[1]
}

/**
 * Construye _fbc según el formato de Meta: fb.1.{timestamp}.{fbclid}
 */
function buildFbc(fbclid: string): string {
  return `fb.1.${Date.now()}.${fbclid}`
}

/**
 * Lee la cookie _fbc existente.
 */
function readFbc(): string | undefined {
  if (typeof document === 'undefined') return undefined
  const match = document.cookie.match(/(?:^|; )_fbc=([^;]+)/)
  return match?.[1]
}

/**
 * Guarda atribución en sessionStorage (sin consentimiento).
 * Solo guarda UTM, landing y referrer. NO guarda gclid, fbclid ni IDs.
 */
function saveToSession(attr: Attribution) {
  if (typeof sessionStorage === 'undefined') return
  const { utm_source, utm_medium, utm_campaign, utm_content, utm_term, landing, referrer } = attr
  const sessionAttr = { utm_source, utm_medium, utm_campaign, utm_content, utm_term, landing, referrer }
  
  // Eliminar undefined
  Object.keys(sessionAttr).forEach(key => {
    if (sessionAttr[key as keyof typeof sessionAttr] === undefined) {
      delete sessionAttr[key as keyof typeof sessionAttr]
    }
  })
  
  if (Object.keys(sessionAttr).length > 0) {
    sessionStorage.setItem(ATTR_SESSION_KEY, JSON.stringify(sessionAttr))
  }
}

/**
 * Lee atribución de sessionStorage.
 */
export function readSessionAttribution(): Attribution | null {
  if (typeof sessionStorage === 'undefined') return null
  const data = sessionStorage.getItem(ATTR_SESSION_KEY)
  if (!data) return null
  try {
    return JSON.parse(data)
  } catch {
    return null
  }
}

/**
 * Lee la cookie de atribución.
 */
function readAttrCookie(): AttributionData | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${ATTR_COOKIE}=([^;]+)`))
  if (!match) return null
  try {
    return JSON.parse(decodeURIComponent(match[1]))
  } catch {
    return null
  }
}

/**
 * Guarda la cookie de atribución (domain=.goadmin.io, 90 días).
 */
function saveAttrCookie(data: AttributionData) {
  if (typeof document === 'undefined') return
  const value = encodeURIComponent(JSON.stringify(data))
  document.cookie = `${ATTR_COOKIE}=${value}; max-age=${90 * 86400}; path=/; domain=.goadmin.io; SameSite=Lax; Secure`
}

/**
 * Captura la atribución según el consentimiento.
 * - Sin consentimiento de medición: solo sessionStorage con UTM.
 * - Con consentimiento de medición: cookie goadmin_attr con primer y último toque, incluye gclid/fbclid.
 */
export function captureAttribution(hasAnalyticsConsent: boolean) {
  const urlAttr = readUrlParams()
  if (Object.keys(urlAttr).length === 0) return // No hay parámetros de campaña
  
  // Siempre guardar UTM en sessionStorage
  saveToSession(urlAttr)
  
  // Con consentimiento de medición: guardar cookie completa
  if (hasAnalyticsConsent) {
    const current = readAttrCookie()
    
    // Agregar _fbp y _fbc si existen
    const fbp = readFbp()
    if (fbp) urlAttr._fbp = fbp
    
    if (urlAttr.fbclid) {
      const existingFbc = readFbc()
      urlAttr._fbc = existingFbc || buildFbc(urlAttr.fbclid)
    }
    
    const newData: AttributionData = {
      first: current?.first || urlAttr,
      last: urlAttr,
    }
    
    saveAttrCookie(newData)
  }
}

/**
 * Lee la atribución completa (cookie o sessionStorage).
 */
export function readAttribution(): AttributionData | Attribution | null {
  const cookie = readAttrCookie()
  if (cookie) return cookie
  return readSessionAttribution()
}

/**
 * Decora una URL de registro con los parámetros de atribución vigentes.
 * Agrega: UTM, y solo con consentimiento de medición: gclid/fbclid.
 */
export function decorateSignupUrl(baseUrl: string, hasAnalyticsConsent: boolean): string {
  const url = new URL(baseUrl)
  const attr = readAttribution()
  if (!attr) return baseUrl
  
  // Si es AttributionData (cookie), usar last; si es Attribution (session), usar directo
  const data = 'last' in attr ? attr.last : attr
  
  // Siempre agregar UTM
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
  utmKeys.forEach(key => {
    if (data[key]) url.searchParams.set(key, data[key]!)
  })
  
  // Solo con consentimiento de medición: gclid y fbclid
  if (hasAnalyticsConsent) {
    if (data.gclid) url.searchParams.set('gclid', data.gclid)
    if (data.fbclid) url.searchParams.set('fbclid', data.fbclid)
  }
  
  return url.toString()
}
