import { getLocale } from 'next-intl/server'
import { listCategories, listChannels, listSolutions } from '@/lib/data'
import { NavbarClient } from './navbar-client'

/**
 * Navbar (Figma › Navbar · Fondo=Cielo|Claro).
 * Arma en el servidor los menús traducidos y con la variante del país del mercado,
 * y los entrega a la parte interactiva (navbar-client.tsx).
 */
export async function SiteNavbar({ tone = 'sky', currentPage }: { tone?: 'sky' | 'light'; currentPage?: string }) {
  const locale = await getLocale()
  const [categories, channels, solutions] = await Promise.all([listCategories(locale), listChannels(locale), listSolutions(locale)])
  const entry = (href: string, icon: Parameters<typeof NavbarClient>[0]['data']['channels'][number]['icon'], title: string, text: string) => ({ href, icon, title, text })
  return (
    <NavbarClient
      tone={tone}
      currentPage={currentPage}
      data={{
        groups: categories.map((g) => ({ id: g.id, name: g.name, items: g.items.map((p) => entry(`/producto/${p.slug}`, p.icon, p.name, p.short)) })),
        channels: channels.map((p) => entry(`/producto/${p.slug}`, p.icon, p.name, p.short)),
        solutions: solutions.map((s) => entry(`/soluciones/${s.slug}`, s.icon, s.name, s.short)),
      }}
    />
  )
}
