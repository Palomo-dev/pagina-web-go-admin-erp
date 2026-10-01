import { setRequestLocale } from 'next-intl/server'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { type PageProps } from '@/lib/page'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Sin indexar ni enlazar: por instrucción legal (Decreto 2555 de 2010).
  return {
    robots: { index: false, follow: false },
  }
}

/**
 * Página sin contenido público. No se enlaza desde el sitio ni se indexa.
 * Sin CTAs, sin enlaces a portales, sin invitación a invertir (Decreto 2555 de 2010).
 */
export default async function InversionistasPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/inversionistas" />
      <main id="contenido" className="min-h-[60vh]">
        {/* Página sin contenido por instrucción legal */}
      </main>
      <SiteFooter />
    </>
  )
}
