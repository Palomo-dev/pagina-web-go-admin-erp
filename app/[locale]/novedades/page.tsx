import { setRequestLocale } from 'next-intl/server'
import { CtaBand } from '@/components/sections/blocks'
import { Icon } from '@/components/site/icon'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { Tag } from '@/components/site/primitives'
import { getT } from '@/i18n/t-server'
import { listReleases } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { SIGNUP_URL } from '@/lib/site'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/novedades', 'pages.changelog')
}

/** Novedades del producto por mes (Figma › Novedades). */
export default async function NovedadesPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.changelog')
  const releases = await listReleases(params.locale)
  const monthName = (month: string) =>
    new Intl.DateTimeFormat(params.locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${month}-01T12:00:00Z`))
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/novedades" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <section className="-mt-16 bg-go-wash pb-20 sm:pb-28">
          <div className="container grid max-w-5xl gap-16">
            {releases.map((r) => (
              <section key={r.month} aria-labelledby={`mes-${r.month}`} className="grid gap-6 lg:grid-cols-[200px_1fr]">
                <h2 id={`mes-${r.month}`} className="text-h3 text-ink first-letter:uppercase lg:sticky lg:top-28 lg:self-start">
                  {monthName(r.month)}
                </h2>
                <ul className="grid gap-4">
                  {r.items.map((i) => (
                    <li key={i.title} className="flex gap-4 rounded-[20px] border border-ink-line bg-white p-6">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-go-tint text-go-deep">
                        <Icon name={i.icon} className="h-[22px] w-[22px]" />
                      </span>
                      <div>
                        <Tag kind="brand">{i.area}</Tag>
                        <h3 className="mt-2 text-h4 text-ink">{i.title}</h3>
                        <p className="mt-1 text-sm text-ink-body">{i.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <p className="text-center text-sm text-ink-muted">{t('note')}</p>
          </div>
        </section>
        <CtaBand title={t('ctaTitle')} text={t('ctaText')} cta={t('cta')} href={SIGNUP_URL} />
      </main>
      <SiteFooter />
    </>
  )
}
