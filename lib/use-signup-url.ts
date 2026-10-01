'use client'

import { useEffect, useState } from 'react'
import { decorateSignupUrl } from '@/lib/attribution'
import { SIGNUP_URL as BASE_SIGNUP_URL } from '@/lib/site'
import { readChoice } from '@/lib/consent'

/**
 * Hook para obtener la URL de registro decorada con parámetros de atribución.
 * BLOQUEANTE #1: Usa readChoice() centralizada que rechaza formatos viejos.
 * Solo decora con UTMs/gclid/fbclid cuando hay consentimiento de medición.
 */
export function useSignupUrl(): string {
  const [url, setUrl] = useState(BASE_SIGNUP_URL)
  
  useEffect(() => {
    const choice = readChoice()
    const hasAnalytics = choice?.analytics === true
    const decorated = decorateSignupUrl(BASE_SIGNUP_URL, hasAnalytics)
    setUrl(decorated)
  }, [])
  
  return url
}
