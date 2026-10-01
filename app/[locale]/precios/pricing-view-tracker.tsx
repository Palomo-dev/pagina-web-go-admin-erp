'use client'

import { useEffect } from 'react'
import { trackViewContent } from '@/components/site/marketing-tags'

/**
 * Componente cliente para disparar el evento ViewContent en /precios.
 */
export function PricingViewTracker() {
  useEffect(() => {
    trackViewContent({ content_name: 'Precios', content_category: 'pricing' })
  }, [])
  
  return null
}
