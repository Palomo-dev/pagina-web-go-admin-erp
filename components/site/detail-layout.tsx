import Link from 'next/link'
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHeroSplit } from '@/components/site/page-hero-split'
import { SIGNUP_URL } from '@/lib/site'

type Nav = { name: string; href: string }

/**
 * Plantilla de detalle para módulos e industrias (Figma › Módulo · Inventario (plantilla)).
 * Hero sobre el cielo con migas de pan, contenido de la página, navegación anterior/siguiente y cierre nocturno.
 */
export function DetailLayout({
  section,
  sectionHref,
  title,
  description,
  icon,
  prev,
  next,
  ctaLabel,
  children,
}: {
  section: string
  sectionHref: string
  title: string
  description: string
  icon?: React.ReactNode
  prev?: Nav
  next?: Nav
  ctaLabel: string
  children: React.ReactNode
}) {
  return (
    <>
      <SiteNavbar tone="sky" currentPage={sectionHref} />
      <main id="contenido">
        <PageHeroSplit
          breadcrumb={
            <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-go-200">
              <Link href={sectionHref} className="hover:text-white">
                {section}
              </Link>
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              <span className="text-white" aria-current="page">
                {title}
              </span>
            </nav>
          }
          title={title}
          description={description}
          icon={icon}
          primary={{ label: ctaLabel, href: SIGNUP_URL }}
        />
        <section className="legacy-content bg-white py-16 sm:py-24">
          <div className="container max-w-6xl">{children}</div>
        </section>
        {prev || next ? (
          <nav aria-label={`Otros ${section.toLowerCase()}`} className="bg-go-wash py-12">
            <div className="container grid gap-4 sm:grid-cols-2">
              {prev ? (
                <Link href={prev.href} className="group flex flex-col gap-1 rounded-2xl border border-ink-line bg-white p-6 transition-colors hover:border-go">
                  <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" strokeWidth={1.75} aria-hidden /> Anterior
                  </span>
                  <span className="text-h4 text-go-deep">{prev.name}</span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={next.href} className="group flex flex-col items-end gap-1 rounded-2xl border border-ink-line bg-white p-6 text-right transition-colors hover:border-go">
                  <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                    Siguiente <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-h4 text-go-deep">{next.name}</span>
                </Link>
              ) : null}
            </div>
          </nav>
        ) : null}
        <NightCta title={`Empieza con ${title} hoy.`} primary={ctaLabel} />
      </main>
      <SiteFooter />
    </>
  )
}
