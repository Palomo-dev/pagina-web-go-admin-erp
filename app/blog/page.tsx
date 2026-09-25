import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { RevealGroup, RevealItem } from '@/components/site/reveal'
import { listPosts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Ideas prácticas para ordenar tu negocio: caja, inventario, finanzas, facturación y canales digitales.',
}

function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPage() {
  const posts = await listPosts()
  const [first, ...rest] = posts
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/blog" />
      <main id="contenido">
        <PageHero eyebrow="Blog" title="Ideas para ordenar tu negocio." subtitle="Listas, preguntas y guías cortas para el día a día." />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <Link href={`/blog/${first.slug}`} className="group mb-8 grid overflow-hidden rounded-3xl border border-ink-line bg-white transition-shadow hover:shadow-lg lg:grid-cols-2">
            <div className="flex min-h-[220px] items-end bg-go p-8 text-white">
              <p className="text-display-m leading-tight">{first.title}</p>
            </div>
            <div className="flex flex-col justify-center gap-3 p-8">
              <p className="text-eyebrow uppercase text-go-deep">
                {first.category} · {first.readingMinutes} min
              </p>
              <p className="text-lead text-ink-body">{first.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-go-deep">
                Leer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
              </span>
            </div>
          </Link>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <RevealItem key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col gap-3 rounded-[20px] border border-ink-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-go hover:shadow-lg">
                  <p className="text-eyebrow uppercase text-go-deep">{p.category}</p>
                  <h2 className="text-h4 text-ink">{p.title}</h2>
                  <p className="text-sm text-ink-body">{p.excerpt}</p>
                  <p className="mt-auto pt-2 text-xs text-ink-muted">
                    {formatDate(p.date)} · {p.readingMinutes} min de lectura
                  </p>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
