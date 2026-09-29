import { setRequestLocale } from 'next-intl/server'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { type PageProps } from '@/lib/page'
import { CONTACT } from '@/lib/site'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Sin indexar ni enlazar desde el sitio: el portal es solo por invitación privada (Decreto 2555
  // de 2010, oferta pública de valores). Se entra con el enlace que envía el equipo.
  return {
    title: 'Acceso por invitación',
    description: 'Esta sección es solo por invitación.',
    robots: { index: false, follow: false },
  }
}

/**
 * Inversionistas. Página sin contenido público: no se enlaza desde el sitio ni se indexa,
 * no invita a invertir y no publica cifras, rondas ni valoraciones. El acceso al portal
 * investors.goadmin.io es solo por invitación privada.
 */
export default async function InversionistasPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/inversionistas" />
      <main id="contenido" className="min-h-screen py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-ink-muted">
            Esta sección es solo por invitación. El acceso se realiza a través del portal en{' '}
            <a href="https://investors.goadmin.io" className="text-go-600 hover:underline">
              investors.goadmin.io
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-ink-muted">
            {CONTACT.legalName} · NIT {CONTACT.nit} · {CONTACT.city}
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
