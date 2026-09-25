import { Traveler } from '@/components/illustrations/art'
import { SiteNavbar } from '@/components/site/navbar'
import { CtaLink } from '@/components/site/primitives'
import { Sky } from '@/components/site/sky'

export const metadata = { title: 'Página no encontrada' }

/** 404 (Figma › 404 · Escritorio): "Este planeta todavía no existe." */
export default function NotFound() {
  return (
    <>
      <SiteNavbar tone="sky" />
      <main id="contenido" className="relative isolate flex min-h-screen items-center overflow-hidden">
        <Sky mode="night" />
        <div className="container relative grid items-center gap-10 py-32 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="flex max-w-xl flex-col items-start gap-5">
            <p className="text-eyebrow uppercase text-go-300">Error 404</p>
            <h1 className="text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-display-l">Este planeta todavía no existe.</h1>
            <p className="text-lead text-go-200">La página que buscas cambió de lugar o nunca estuvo aquí. Volvamos a un lugar conocido.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/" kind="light" size="lg">
                Volver al inicio
              </CtaLink>
              <CtaLink href="/soporte" kind="outline-light" size="lg" arrow={false}>
                Ir al centro de ayuda
              </CtaLink>
            </div>
          </div>
          <Traveler tone="ink" className="go-bob mx-auto w-64 sm:w-80 lg:w-full" />
        </div>
      </main>
    </>
  )
}
