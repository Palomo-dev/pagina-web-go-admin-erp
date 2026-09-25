'use client'

import { SiteNavbar } from '@/components/site/navbar'

interface NavbarProps {
  currentPage?: string
  /** Heredado del scroll fullPage anterior; ya no se usa. */
  scrollContainerId?: string
  onNavigate?: (sectionId: string) => void
  tone?: 'sky' | 'light'
}

/**
 * Compatibilidad con las páginas existentes: la navbar nueva del sistema de diseño.
 * Las páginas heredadas no tienen cielo arriba, así que usan el tono claro y un espacio
 * para que la barra fija no tape el contenido.
 */
export function Navbar({ currentPage, tone = 'light' }: NavbarProps) {
  return (
    <>
      <SiteNavbar currentPage={currentPage} tone={tone} />
      <div aria-hidden className="h-16 sm:h-20" />
    </>
  )
}
