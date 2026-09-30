'use client'

import { useEffect, useState } from 'react'
import { decorateSignupUrl } from '@/lib/attribution'
import { SIGNUP_URL as BASE_SIGNUP_URL } from '@/lib/site'

/**
 * Hook para obtener la URL de registro decorada con parámetros de atribución.
 * Agrega UTM y, solo con consentimiento de medición, gclid/fbclid.
 */
export function useSignupUrl(): string {
  const [url, setUrl] = useState(BASE_SIGNUP_URL)
  
  useEffect(() => {
    // Leer consentimiento
    const readConsent = (): { analytics: boolean } => {
      const match = document.cookie.match(/(?:^|; )goadmin_consent=([^;]+)/)
      if (!match) return { analytics: false }
      
      try {
        const decoded = decodeURIComponent(match[1])
        if (decoded === 'all') return { analytics: true }
        
        const data = JSON.parse(decoded)
        return { analytics: data.analytics === true }
      } catch {
        return { analytics: false }
      }
    }
    
    const consent = readConsent()
    const decorated = decorateSignupUrl(BASE_SIGNUP_URL, consent.analytics)
    setUrl(decorated)
  }, [])
  
  return url
}
