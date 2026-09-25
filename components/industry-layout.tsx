import type React from 'react'
import { DetailLayout } from '@/components/site/detail-layout'
import { Icon } from '@/components/site/icon'
import type { IconName } from '@/lib/site'

interface IndustryLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  icon?: string
  color?: string
  prevIndustry?: { name: string; href: string }
  nextIndustry?: { name: string; href: string }
}

const ICONS: [RegExp, IconName][] = [
  [/restaur/i, 'utensils'],
  [/hotel/i, 'bed'],
  [/tienda|retail/i, 'store'],
  [/gimnas|gym/i, 'dumbbell'],
  [/parq|parking/i, 'parking'],
  [/transp/i, 'bus'],
  [/saas|servic/i, 'briefcase'],
]

/** Páginas /industrias/* sobre la plantilla de detalle. El ícono emoji se reemplaza por el ícono de trazo. */
export function IndustryLayout({ children, title, description, prevIndustry, nextIndustry }: IndustryLayoutProps) {
  const name = ICONS.find(([re]) => re.test(title))?.[1] ?? 'briefcase'
  return (
    <DetailLayout
      section="Soluciones"
      sectionHref="/industrias"
      title={title}
      description={description}
      icon={<Icon name={name} className="h-8 w-8 text-white" />}
      prev={prevIndustry}
      next={nextIndustry}
      ctaLabel="Crear mi cuenta gratis"
    >
      {children}
    </DetailLayout>
  )
}
