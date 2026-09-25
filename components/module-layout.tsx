import type React from 'react'
import { DetailLayout } from '@/components/site/detail-layout'

interface ModuleLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  icon?: React.ReactNode
  color?: string
  prevModule?: { name: string; href: string }
  nextModule?: { name: string; href: string }
}

/** Páginas /modulos/* sobre la plantilla de detalle del sistema de diseño. */
export function ModuleLayout({ children, title, description, icon, prevModule, nextModule }: ModuleLayoutProps) {
  // Los emojis no forman parte de la marca (Manual › 10): solo se muestran íconos de trazo.
  const safeIcon = typeof icon === 'string' ? undefined : icon
  return (
    <DetailLayout section="Módulos" sectionHref="/modulos" title={title} description={description} icon={safeIcon} prev={prevModule} next={nextModule} ctaLabel={`Probar ${title} gratis`}>
      {children}
    </DetailLayout>
  )
}
