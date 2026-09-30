import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { Link } from '@/i18n/navigation'
import { useT } from '@/i18n/t'

/**
 * Plantilla de documentos legales: índice fijo a la izquierda y texto con ancho de lectura cómodo.
 * (Figma › Legal · plantilla)
 */
export function LegalLayout({
  eyebrow,
  title,
  intro,
  updated,
  toc,
  currentPage,
  reference,
  children,
}: {
  eyebrow: string
  title: string
  intro: string | React.ReactNode
  updated?: string
  toc: { id: string; label: string }[]
  currentPage: string
  /** true en idiomas distintos del español: muestra el aviso de traducción de referencia */
  reference?: boolean
  children: React.ReactNode
}) {
  const t = useT('legal')
  return (
    <>
      <SiteNavbar tone="light" currentPage={currentPage} />
      <main id="contenido" className="bg-white pt-32 sm:pt-40">
        <header className="container max-w-5xl border-b border-ink-line pb-10">
          <p className="text-eyebrow uppercase text-go-deep">{eyebrow}</p>
          <h1 className="mt-3 text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-display-l">{title}</h1>
          <div className="mt-4 max-w-3xl text-lead text-ink-body">{intro}</div>
          {updated ? <p className="mt-4 text-sm text-ink-muted">{updated}</p> : null}
          {reference ? (
            <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
              {t('reference')}{' '}
              <Link href={currentPage} locale="es-CO" className="font-semibold underline">
                {t('seeSpanish')}
              </Link>
            </p>
          ) : null}
        </header>
        <div className="container grid max-w-5xl gap-12 py-12 lg:grid-cols-[220px_1fr] lg:py-16">
          <nav aria-label={t('toc')} className="hidden lg:block">
            <ol className="sticky top-28 grid gap-1 text-sm">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="block rounded-lg px-3 py-1.5 text-ink-body transition-colors hover:bg-go-wash hover:text-ink">
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="grid gap-12 pb-12 text-ink-body">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export function LegalSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-h3 text-ink">{title}</h2>
      <div className="mt-4 grid gap-3 leading-relaxed">{children}</div>
    </section>
  )
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-go" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  )
}
