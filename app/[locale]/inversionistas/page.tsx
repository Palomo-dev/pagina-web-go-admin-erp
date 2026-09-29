import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { type PageProps } from '@/lib/page'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Sin indexar: esta ruta devuelve 404 por instrucción legal (Decreto 2555 de 2010).
  return {
    robots: { index: false, follow: false },
  }
}

/**
 * Inversionistas: devuelve 404 por cumplimiento legal (Decreto 2555 de 2010).
 * No se enlaza desde el sitio ni se indexa.
 */
export default async function InversionistasPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  notFound()
}
