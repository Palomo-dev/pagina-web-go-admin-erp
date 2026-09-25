import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { getT } from '@/i18n/t-server'
import { pageMetadata, type PageProps } from '@/lib/page'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { RevealGroup, RevealItem } from '@/components/site/reveal'
import { listPosts } from '@/lib/data'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/blog', 'pages.blog')
}

function formatDate(iso: string, locale: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.blog')
  const posts = await listPosts(params.locale)
  const [first, ...rest] = posts
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/blog" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0">
          <Link href={`/blog/${first.slug}`} className="group mb-8 grid overflow-hidden rounded-3xl border border-ink-line bg-white transition-shadow hover:shadow-lg lg:grid-cols-2">
            <div className="flex min-h-[220px] items-end bg-go p-8 text-white">
              <p className="text-display-m leading-tight">{first.title}</p>
            </div>
            <div className="flex flex-col justify-center gap-3 p-8">
              <p className="text-eyebrow uppercase text-go-deep">
                {first.category} · {t('minutes', { n: first.readingMinutes })}
              </p>
              <p className="text-lead text-ink-body">{first.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-go-deep">
                {t('read')} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
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
                    {formatDate(p.date, params.locale)} · {t('readingTime', { n: p.readingMinutes })}
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
