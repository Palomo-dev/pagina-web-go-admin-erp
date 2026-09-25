'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Firma, Isotipo } from '@/components/brand/logo'
import { Traveler } from '@/components/illustrations/art'
import { Icon } from '@/components/site/icon'
import { CtaLink, LinkArrow } from '@/components/site/primitives'
import { CHANNELS, productsByCategory } from '@/lib/catalog/products'
import { INDUSTRIES, LOGIN_URL, MODULES_MENU, NAV, RESOURCES, SIGNUP_URL, type NavItem } from '@/lib/site'
import { cn } from '@/lib/utils'

type MenuKey = NonNullable<NavItem['menu']>

/**
 * Navbar (Figma › Navbar · Fondo=Cielo|Claro).
 * Sobre el cielo es vidrio translúcido; al bajar 80 px pasa a Claro (200 ms).
 * `tone="light"` la deja siempre clara (páginas sin cielo).
 */
export function SiteNavbar({ tone = 'sky', currentPage }: { tone?: 'sky' | 'light'; currentPage?: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState<MenuKey | null>(null)
  const [mobile, setMobile] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setMobile(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobile])

  const onSky = tone === 'sky' && !scrolled && !open
  const openMenu = (k: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(k)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 140)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        aria-label="Principal"
        className={cn(
          'relative mx-auto flex h-14 max-w-[1200px] items-center justify-between rounded-[18px] pl-4 pr-2 transition-all duration-fast ease-out sm:h-16 sm:rounded-[20px] sm:pl-5',
          onSky ? 'glass-sky' : 'glass-light shadow-md',
        )}
        onMouseLeave={scheduleClose}
      >
        <Link href="/" aria-label="GO Admin, inicio" className="shrink-0 rounded-lg">
          <span className="hidden sm:inline-flex">
            <Firma size={30} variant={onSky ? 'on-blue' : 'primary'} />
          </span>
          <span className="sm:hidden">
            <Isotipo size={32} variant={onSky ? 'white' : 'blue'} />
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = currentPage && item.href !== '/' && currentPage.startsWith(item.href)
            const cls = cn(
              'inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-fast',
              onSky ? 'text-white hover:bg-white/15' : 'text-ink-body hover:bg-go-tint hover:text-ink',
              active && (onSky ? 'bg-white/15' : 'bg-go-tint text-ink'),
            )
            if (!item.menu) {
              return (
                <li key={item.label}>
                  <Link href={item.href} className={cls} onMouseEnter={() => setOpen(null)} aria-current={active ? 'page' : undefined}>
                    {item.label}
                  </Link>
                </li>
              )
            }
            const isOpen = open === item.menu
            return (
              <li key={item.label} onMouseEnter={() => openMenu(item.menu!)}>
                <button type="button" className={cls} aria-expanded={isOpen} aria-controls={`menu-${item.menu}`} onClick={() => (isOpen ? setOpen(null) : openMenu(item.menu!))}>
                  {item.label}
                  <ChevronDown className={cn('h-4 w-4 transition-transform duration-fast', isOpen && 'rotate-180')} strokeWidth={1.75} aria-hidden />
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          <a href={LOGIN_URL} className={cn('hidden rounded-full px-3 py-2 text-sm font-medium transition-colors md:inline-flex', onSky ? 'text-white hover:bg-white/15' : 'text-ink-body hover:text-ink')}>
            Iniciar sesión
          </a>
          <CtaLink href={SIGNUP_URL} kind={onSky ? 'light' : 'primary'} arrow={false} className="h-10 px-4 sm:h-11 sm:px-5">
            Prueba gratis
          </CtaLink>
          <button
            type="button"
            className={cn('grid h-10 w-10 place-items-center rounded-xl lg:hidden', onSky ? 'bg-white/15 text-white' : 'bg-go-tint text-go-deep')}
            aria-label="Abrir menú"
            aria-expanded={mobile}
            onClick={() => setMobile(true)}
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        {/* Mega menús */}
        <AnimatePresence>
          {open ? (
            <motion.div
              key={open}
              id={`menu-${open}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute left-0 right-0 top-[calc(100%+10px)] hidden lg:block"
              onMouseEnter={() => open && openMenu(open)}
              onMouseLeave={scheduleClose}
            >
              <div className="mx-auto flex max-w-[1200px] gap-2 rounded-[20px] border border-ink-line bg-white p-5 shadow-lg">
                {open === 'producto' ? <ProductMenu onPick={() => setOpen(null)} /> : null}
                {open === 'soluciones' ? <SolutionsMenu onPick={() => setOpen(null)} /> : null}
                {open === 'recursos' ? <ResourcesMenu onPick={() => setOpen(null)} /> : null}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>

      <MobileMenu open={mobile} onClose={() => setMobile(false)} />
    </header>
  )
}

function MenuItem({ href, icon, title, text, onPick }: { href: string; icon: Parameters<typeof Icon>[0]['name']; title: string; text: string; onPick: () => void }) {
  return (
    <Link href={href} onClick={onPick} className="group flex gap-3 rounded-xl p-3 transition-colors duration-fast hover:bg-go-wash">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-go-tint text-go-deep transition-colors duration-fast group-hover:bg-go group-hover:text-white">
        <Icon name={icon} className="h-[18px] w-[18px]" />
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-semibold text-ink">{title}</span>
        <span className="text-sm text-ink-body">{text}</span>
      </span>
    </Link>
  )
}

function ProductMenu({ onPick }: { onPick: () => void }) {
  const groups = productsByCategory().filter((g) => g.id !== 'canales')
  return (
    <>
      <div className="grid flex-1 grid-cols-2 gap-x-2 gap-y-1">
        {groups.map((g) => (
          <div key={g.id} className="flex flex-col">
            <p className="px-3 pb-1 pt-2 text-eyebrow uppercase text-ink-muted">{g.name}</p>
            {g.items.map((m) => (
              <MenuItem key={m.slug} href={`/producto/${m.slug}`} icon={m.icon} title={m.name} text={m.short} onPick={onPick} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex w-72 flex-col gap-2 rounded-2xl bg-go p-5 text-white">
        <p className="text-eyebrow uppercase text-go-100">Canales digitales</p>
        <p className="text-h4 font-semibold">Tu negocio en internet desde el primer día</p>
        <div className="mt-1 grid gap-1">
          {CHANNELS.map((c) => (
            <Link key={c.slug} href={`/producto/${c.slug}`} onClick={onPick} className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/20">
              <Icon name={c.icon} className="h-4 w-4" />
              {c.name}
            </Link>
          ))}
        </div>
        <Traveler tone="blue" className="-mb-2 mt-auto w-24 self-end" />
        <LinkArrow href="/canales-digitales" tone="light">
          Conocer los canales digitales
        </LinkArrow>
      </div>
    </>
  )
}

function SolutionsMenu({ onPick }: { onPick: () => void }) {
  return (
    <div className="grid flex-1 grid-cols-3 gap-1">
      {INDUSTRIES.map((i) => (
        <MenuItem key={i.href} href={i.href} icon={i.icon} title={i.name} text={i.description} onPick={onPick} />
      ))}
    </div>
  )
}

function ResourcesMenu({ onPick }: { onPick: () => void }) {
  return (
    <div className="grid flex-1 grid-cols-4 gap-1">
      {RESOURCES.map((r) => (
        <MenuItem key={r.href} href={r.href} icon={r.icon} title={r.label} text={r.description} onPick={onPick} />
      ))}
    </div>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [section, setSection] = useState<string | null>(null)
  const groups: { label: string; items: { label: string; href: string }[] }[] = [
    { label: 'Producto', items: MODULES_MENU.map((m) => ({ label: m.name, href: m.href })) },
    { label: 'Soluciones', items: INDUSTRIES.map((i) => ({ label: i.name, href: i.href })) },
    { label: 'Recursos', items: RESOURCES.map((r) => ({ label: r.label, href: r.href })) },
  ]
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <div className="flex h-[72px] items-center justify-between px-5">
            <Firma size={28} />
            <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-xl bg-go-tint text-go-deep" aria-label="Cerrar menú">
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 pb-6">
            {groups.map((g) => (
              <div key={g.label} className="border-b border-ink-line">
                <button type="button" className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold" aria-expanded={section === g.label} onClick={() => setSection(section === g.label ? null : g.label)}>
                  {g.label}
                  <ChevronDown className={cn('h-5 w-5 transition-transform', section === g.label && 'rotate-180')} strokeWidth={1.75} />
                </button>
                {section === g.label ? (
                  <ul className="grid gap-1 pb-4">
                    {g.items.map((i) => (
                      <li key={i.href}>
                        <Link href={i.href} onClick={onClose} className="block rounded-lg px-2 py-2 text-ink-body hover:bg-go-wash">
                          {i.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            {[
              { label: 'Precios', href: '/precios' },
              { label: 'Soporte', href: '/soporte' },
              { label: 'Contacto', href: '/contacto' },
            ].map((l) => (
              <Link key={l.href} href={l.href} onClick={onClose} className="block border-b border-ink-line py-4 text-lg font-semibold">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-3 border-t border-ink-line p-5">
            <CtaLink href={SIGNUP_URL} size="lg">
              Crear mi cuenta gratis
            </CtaLink>
            <CtaLink href={LOGIN_URL} kind="secondary" size="lg" arrow={false}>
              Iniciar sesión
            </CtaLink>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
