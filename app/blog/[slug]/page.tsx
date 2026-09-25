import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { CheckList } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { findPost, listPosts } from '@/lib/data'

export async function generateStaticParams() {
  return (await listPosts()).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await findPost(params.slug)
  return p ? { title: p.title, description: p.excerpt } : {}
}

function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await findPost(params.slug)
  if (!post) notFound()
  return (
    <>
      <SiteNavbar tone="light" currentPage="/blog" />
      <main id="contenido" className="bg-white pt-32 sm:pt-40">
        <article className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-go-deep hover:text-go-action">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden /> Blog
          </Link>
          <p className="mt-8 text-eyebrow uppercase text-go-deep">
            {post.category} · {post.readingMinutes} min de lectura
          </p>
          <h1 className="mt-3 text-balance text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-display-l">{post.title}</h1>
          <p className="mt-4 text-lead text-ink-body">{post.excerpt}</p>
          <p className="mt-4 text-sm text-ink-muted">{formatDate(post.date)}</p>
          <div className="mt-12 grid gap-10 pb-24 text-[1.0625rem] leading-relaxed text-ink-body">
            {post.body.map((b, i) => (
              <section key={i} className="grid gap-4">
                {b.heading ? <h2 className="text-h3 text-ink">{b.heading}</h2> : null}
                {b.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {b.list ? <CheckList items={b.list} /> : null}
              </section>
            ))}
          </div>
        </article>
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
