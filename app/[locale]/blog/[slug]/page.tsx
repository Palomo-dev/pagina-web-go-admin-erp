import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { getMarket } from '@/i18n/markets'
import { getT } from '@/i18n/t-server'
import { alternates } from '@/lib/seo'
import type { PageProps } from '@/lib/page'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { CheckList } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { allPostSlugs, findPost } from '@/lib/data'

type Props = PageProps<{ slug: string }>

// Solo las rutas generadas: cualquier otra es 404.
export const dynamicParams = false

/** Solo los artículos publicados en el país del mercado (algunos son guías de un trámite local). */
export function generateStaticParams({ params }: { params: { locale: string } }) {
  const country = getMarket(params.locale).country
  return allPostSlugs()
    .filter((p) => !p.countries || p.countries.includes(country))
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  setRequestLocale(params.locale)
  const p = await findPost(params.locale, params.slug)
  return p ? { title: p.title, description: p.excerpt, alternates: { canonical: alternates(`/blog/${p.slug}`, params.locale)?.canonical } } : {}
}

function formatDate(iso: string, locale: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function PostPage({ params }: Props) {
  setRequestLocale(params.locale)
  const post = await findPost(params.locale, params.slug)
  if (!post) notFound()
  const t = await getT('pages.blog')
  return (
    <>
      <SiteNavbar tone="light" currentPage="/blog" />
      <main id="contenido" className="bg-white pt-32 sm:pt-40">
        <article className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-go-deep hover:text-go-action">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden /> {t('back')}
          </Link>
          <p className="mt-8 text-eyebrow uppercase text-go-deep">
            {post.category} · {t('readingTime', { n: post.readingMinutes })}
          </p>
          <h1 className="mt-3 text-balance text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-display-l">{post.title}</h1>
          <p className="mt-4 text-lead text-ink-body">{post.excerpt}</p>
          <p className="mt-4 text-sm text-ink-muted">{formatDate(post.date, params.locale)}</p>
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
