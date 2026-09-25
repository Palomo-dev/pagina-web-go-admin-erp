import { Traveler } from '@/components/illustrations/art'
import { SiteNavbar } from '@/components/site/navbar'
import { CtaLink } from '@/components/site/primitives'
import { Sky } from '@/components/site/sky'
import { useT } from '@/i18n/t'

/** 404 (Figma › 404 · Escritorio): "Este planeta todavía no existe." */
export default function NotFound() {
  const t = useT('notFound')
  return (
    <>
      <title>{t('meta')}</title>
      <SiteNavbar tone="sky" />
      <main id="contenido" className="relative isolate flex min-h-screen items-center overflow-hidden">
        <Sky mode="night" />
        <div className="container relative grid items-center gap-10 py-32 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="flex max-w-xl flex-col items-start gap-5">
            <p className="text-eyebrow uppercase text-go-300">{t('eyebrow')}</p>
            <h1 className="text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-display-l">{t('title')}</h1>
            <p className="text-lead text-go-200">{t('text')}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/" kind="light" size="lg">
                {t('home')}
              </CtaLink>
              <CtaLink href="/soporte" kind="outline-light" size="lg" arrow={false}>
                {t('help')}
              </CtaLink>
            </div>
          </div>
          <Traveler tone="ink" className="go-bob mx-auto w-64 sm:w-80 lg:w-full" />
        </div>
      </main>
    </>
  )
}
