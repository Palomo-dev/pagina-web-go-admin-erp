'use client'

import { useEffect, useState } from 'react'
import { decorateSignupUrl } from '@/lib/attribution'
import { SIGNUP_URL as BASE_SIGNUP_URL } from '@/lib/site'

/**
 * Hook para obtener la URL de registro decorada con parámetros de atribución.
 * Agrega UTM y, solo con consentimiento de marketing, gclid/fbclid.
 */
export function useSignupUrl(): string {
  const [url, setUrl] = useState(BASE_SIGNUP_URL)
  
  useEffect(() => {
    // Leer consentimiento
    const readConsent = (): { marketing: boolean } => {
      const match = document.cookie.match(/(?:^|; )goadmin_consent=([^;]+)/)
      if (!match) return { marketing: false }
      
      try {
        const decoded = decodeURIComponent(match[1])
        if (decoded === 'all') return { marketing: true }
        
        const data = JSON.parse(decoded)
        return { marketing: data.marketing === true }
      } catch {
        return { marketing: false }
      }
    }
    
    const consent = readConsent()
    const decorated = decorateSignupUrl(BASE_SIGNUP_URL, consent.marketing)
    setUrl(decorated)
  }, [])
  
  return url
}
