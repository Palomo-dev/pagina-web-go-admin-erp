import { setRequestLocale } from 'next-intl/server'
import { Download } from 'lucide-react'
import { FeatureGrid, Section, StepList } from '@/components/sections/blocks'
import { SiteFooter } from '@/components/site/footer'
import { SiteNavbar } from '@/components/site/navbar'
import { PageHero } from '@/components/site/page-hero'
import { tl } from '@/i18n/t'
import { getT } from '@/i18n/t-server'
import { DESKTOP_LATEST_URL } from '@/lib/content/desktop'
import { listDesktopReleases } from '@/lib/data'
import { pageMetadata, type PageProps } from '@/lib/page'
import { APP_URL, type IconName } from '@/lib/site'

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata(params.locale, '/descargas', 'pages.download')
}

const FEATURE_ICONS: IconName[] = ['printer', 'wifi-off', 'monitor', 'refresh']

const semver = (v: string) => v.split('.').map(Number)
const newer = (a: string, b: string) => {
  const [x, y] = [semver(a), semver(b)]
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return y[i] - x[i]
  return 0
}

/** Descargas: GO Admin para Windows, última versión (Figma › Descargas). */
export default async function DescargasPage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const t = await getT('pages.download')
  const releases = (await listDesktopReleases(params.locale)).sort((a, b) => newer(a.version, b.version))
  const latest = releases[0]
  const date = (iso: string) => new Intl.DateTimeFormat(params.locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T12:00:00Z`))
  const features = tl<{ title: string; text: string }[]>(t, 'features').map((f, i) => ({ ...f, icon: FEATURE_ICONS[i] }))
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/descargas" />
      <main id="contenido">
        <PageHero eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')}>
          <div className="flex flex-col items-center gap-3">
            <a
              href={DESKTOP_LATEST_URL}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-7 font-semibold text-go-deep shadow-md transition-colors hover:bg-go-tint"
            >
              <Download className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              {t('cta')}
            </a>
            <p className="text-sm text-go-50">
              {t('ctaMeta', { version: latest.version, size: latest.sizeMb })}
            </p>
          </div>
        </PageHero>

        <Section tone="wash" className="-mt-16 pt-0 sm:pt-0" eyebrow={t('featuresEyebrow')} title={t('featuresTitle')}>
          <FeatureGrid items={features} columns={4} />
        </Section>

        <Section eyebrow={t('installEyebrow')} title={t('installTitle')}>
          <StepList steps={tl(t, 'steps')} />
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl bg-go-wash px-5 py-4 text-center text-sm text-ink-body">{t('smartscreen')}</p>
        </Section>

        {/* Por ahora solo se muestra la última versión (el historial sigue en GitHub Releases). */}
        <Section tone="wash" id="version" eyebrow={t('versionsEyebrow')} title={t('versionsTitle')}>
          <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-[20px] border border-ink-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <p className="flex flex-wrap items-center gap-2">
                <span className="text-h4 tabular text-ink">{t('version', { version: latest.version })}</span>
                <span className="text-sm text-ink-muted">{date(latest.date)}</span>
              </p>
              <p className="mt-1 text-sm text-ink-body">{latest.notes ?? t('noNotes')}</p>
            </div>
            <a
              href={DESKTOP_LATEST_URL}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-go-action px-5 text-sm font-semibold text-white transition-colors hover:bg-go-deep sm:self-center"
            >
              <Download className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              {t('size', { size: latest.sizeMb })}
            </a>
          </div>
        </Section>

        <Section eyebrow={t('otherEyebrow')} title={t('otherTitle')} subtitle={t('otherText')}>
          <p className="text-center">
            <a href={APP_URL} className="inline-flex h-11 items-center justify-center rounded-xl bg-go-action px-5 text-sm font-semibold text-white transition-colors hover:bg-go-deep">
              {t('openWeb')}
            </a>
          </p>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
