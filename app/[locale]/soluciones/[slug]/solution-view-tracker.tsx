'use client'

import { useEffect } from 'react'
import { trackViewContent } from '@/components/site/marketing-tags'

/**
 * Componente cliente para disparar el evento ViewContent en /soluciones/*.
 */
export function SolutionViewTracker({ name, slug }: { name: string; slug: string }) {
  useEffect(() => {
    trackViewContent({ content_name: name, content_category: `solution-${slug}` })
  }, [name, slug])
  
  return null
}
