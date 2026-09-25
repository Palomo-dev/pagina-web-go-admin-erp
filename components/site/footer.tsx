import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import { Firma } from '@/components/brand/logo'
import { CookieSettingsButton } from '@/components/site/cookie-consent'
import { MarketSwitcher } from '@/components/site/market-switcher'
import { Link } from '@/i18n/navigation'
import { getT } from '@/i18n/t-server'
import { listSolutions } from '@/lib/data'
import { CONTACT, FOOTER_COLUMNS } from '@/lib/site'

// Redes: reemplazar "#" por los perfiles oficiales cuando estén confirmados.
const SOCIAL = [
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'YouTube', href: '#', Icon: Youtube },
]

/** Pie de página sobre cielo nocturno (Figma › Footer). */
export async function SiteFooter() {
  const locale = await getLocale()
  const t = await getT('footer')
  const solutions = await listSolutions(locale)
  const columns = FOOTER_COLUMNS.map((col) => ({
    title: t(`columns.${col.key}`),
    links:
      col.key === 'solutions'
        ? solutions.map((s) => ({ label: s.name, href: `/soluciones/${s.slug}` }))
        : col.links.map((l) => ({ label: t(`links.${l.key}`), href: l.href })),
  }))
  return (
    <footer className="bg-night-900 text-night-line">
      <div className="container py-16 sm:py-20">
        <div className="grid gap-12 xl:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-5">
            <Firma size={30} variant="on-ink" />
            <p className="max-w-xs text-sm leading-relaxed text-go-200">{t('tagline')}</p>
            <ul className="flex gap-2.5">
              {SOCIAL.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
            <MarketSwitcher tone="night" className="self-start" />
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-eyebrow uppercase text-go-300">{col.title}</p>
                <ul className="mt-4 grid gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-go-300 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('legal', { year: new Date().getFullYear(), legalName: CONTACT.legalName, nit: CONTACT.nit, city: CONTACT.city })}</p>
          <p className="flex flex-wrap gap-4">
            <CookieSettingsButton className="hover:text-white">{t('cookieSettings')}</CookieSettingsButton>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
              {CONTACT.email}
            </a>
            <span className="text-night-line">{CONTACT.domain}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
