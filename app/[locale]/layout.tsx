import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { CookieConsent } from '@/components/site/cookie-consent'
import { MarketDialog } from '@/components/site/market-switcher'
import { MARKETS, type MarketId } from '@/i18n/markets'
import { getT } from '@/i18n/t-server'
import { SITE_URL, alternates } from '@/lib/seo'
import '../globals.css'

// Inter (Manual v2.0 › 06). Archivo local para no depender de servicios externos al compilar.
const inter = localFont({
  src: '../fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: MarketId } }): Promise<Metadata> {
  setRequestLocale(params.locale)
  const t = await getT('meta')
  const title = t('title')
  const description = t('description')
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: '%s · GO Admin' },
    description,
    applicationName: 'GO Admin',
    alternates: alternates('/', params.locale),
    openGraph: { title, description, type: 'website', locale: MARKETS[params.locale].og, siteName: 'GO Admin' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export const viewport: Viewport = {
  themeColor: '#4361EE',
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!hasLocale(routing.locales, params.locale)) notFound()
  setRequestLocale(params.locale)
  const t = await getT('common')
  return (
    <html lang={params.locale} className={inter.variable}>
      <body className="font-sans">
        <a href="#contenido" className="fixed left-4 top-[-80px] z-[100] rounded-lg bg-white px-4 py-3 text-sm font-semibold text-go-deep shadow-lg focus:top-4">
          {t('skipToContent')}
        </a>
        <NextIntlClientProvider>
          {children}
          {/* La analítica solo se carga con el consentimiento (ver /cookies) */}
          <CookieConsent />
          <MarketDialog />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
