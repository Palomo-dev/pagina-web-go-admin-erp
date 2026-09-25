import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Firma } from '@/components/brand/logo'
import { CONTACT, FOOTER_COLUMNS } from '@/lib/site'

// Redes: reemplazar "#" por los perfiles oficiales cuando estén confirmados.
const SOCIAL = [
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'YouTube', href: '#', Icon: Youtube },
]

/** Pie de página sobre cielo nocturno (Figma › Footer). */
export function SiteFooter() {
  return (
    <footer className="bg-night-900 text-night-line">
      <div className="container py-16 sm:py-20">
        <div className="grid gap-12 xl:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-5">
            <Firma size={30} variant="on-ink" />
            <p className="max-w-xs text-sm leading-relaxed text-go-200">
              Tu negocio, en un solo lugar. Inventario, ventas, facturación y equipo conectados para que puedas decidir con calma.
            </p>
            <ul className="flex gap-2.5">
              {SOCIAL.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-eyebrow uppercase text-go-300">{col.title}</p>
                <ul className="mt-4 grid gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith('http') ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-white">
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className="text-sm transition-colors hover:text-white">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-go-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {CONTACT.legalName} · NIT {CONTACT.nit} · {CONTACT.city}
          </p>
          <p className="flex gap-4">
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
