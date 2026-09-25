import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Journey } from '@/components/home/journey'
import { SiteFooter } from '@/components/site/footer'
import { Icon } from '@/components/site/icon'
import { SiteNavbar } from '@/components/site/navbar'
import { NightCta } from '@/components/site/night-cta'
import { PageHero } from '@/components/site/page-hero'
import { SectionHeader } from '@/components/site/primitives'
import { RevealGroup, RevealItem } from '@/components/site/reveal'
import type { IconName } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Módulos',
  description: 'Ventas y POS, inventario, facturación electrónica, contabilidad, CRM, nómina, hotelería, reportes e integraciones conectados en GO Admin.',
}

const GROUPS: { title: string; text: string; items: { name: string; text: string; href: string; icon: IconName }[] }[] = [
  {
    title: 'Vender y atender',
    text: 'Del mostrador a la conversación con tu cliente.',
    items: [
      { name: 'Ventas y POS', text: 'Caja, mesas, comandas y pagos.', href: '/modulos/pos', icon: 'cart' },
      { name: 'Clientes (CRM)', text: 'Historial, seguimientos y campañas.', href: '/modulos/crm', icon: 'users' },
      { name: 'Calendario', text: 'Citas, reservas y recordatorios.', href: '/modulos/calendario', icon: 'calendar' },
      { name: 'Notificaciones', text: 'Correo, WhatsApp y SMS automáticos.', href: '/modulos/notificaciones', icon: 'bell' },
    ],
  },
  {
    title: 'Operar',
    text: 'Lo que pasa en bodega, habitaciones y rutas.',
    items: [
      { name: 'Inventario', text: 'Stock por bodega, lotes y traslados.', href: '/modulos/inventario', icon: 'package' },
      { name: 'Hotelería (PMS)', text: 'Reservas, check-in y folios.', href: '/modulos/pms', icon: 'bed' },
      { name: 'Transporte', text: 'Rutas, tiquetes y flota.', href: '/modulos/transport', icon: 'bus' },
      { name: 'Operaciones', text: 'Órdenes, tareas y flujos internos.', href: '/modulos/operaciones', icon: 'workflow' },
    ],
  },
  {
    title: 'Administrar',
    text: 'Cuentas claras y equipo en orden.',
    items: [
      { name: 'Facturación y finanzas', text: 'Facturas DIAN, cartera y bancos.', href: '/modulos/finanzas', icon: 'receipt' },
      { name: 'Nómina y equipo', text: 'Contratos, turnos y nómina electrónica.', href: '/modulos/hrm', icon: 'user-check' },
      { name: 'Reportes', text: 'Tableros por sede y periodo.', href: '/modulos/reportes', icon: 'chart' },
    ],
  },
  {
    title: 'Plataforma y seguridad',
    text: 'La base que mantiene todo conectado y protegido.',
    items: [
      { name: 'Multisede', text: 'Varias empresas y sucursales.', href: '/modulos/multi-tenant', icon: 'building' },
      { name: 'Autenticación', text: 'Acceso seguro con doble factor.', href: '/modulos/autenticacion', icon: 'key' },
      { name: 'Roles y permisos', text: 'Cada usuario ve lo que le corresponde.', href: '/modulos/roles-permisos', icon: 'lock' },
      { name: 'Integraciones', text: 'Pagos, canales, mensajería y API.', href: '/modulos/integraciones', icon: 'plug' },
    ],
  },
]

/** Producto › Módulos: el recorrido por los planetas y el catálogo completo. */
export default function ModulosPage() {
  return (
    <>
      <SiteNavbar tone="sky" currentPage="/modulos" />
      <main id="contenido">
        <PageHero eyebrow="Producto" title="Todos los módulos, una sola operación." subtitle="Lo que vendes, guardas, facturas y pagas vive en el mismo lugar. Activa lo que necesitas hoy y suma el resto cuando crezcas." />
        <Journey />
        <section className="bg-go-wash py-20 sm:py-28" aria-labelledby="catalogo-title">
          <div className="container">
            <SectionHeader eyebrow="Catálogo" title={<span id="catalogo-title">Explora cada módulo.</span>} />
            <div className="mt-14 grid gap-14">
              {GROUPS.map((g) => (
                <div key={g.title} className="grid gap-6 lg:grid-cols-[260px_1fr]">
                  <div>
                    <h3 className="text-h4 text-ink">{g.title}</h3>
                    <p className="mt-1 text-sm text-ink-body">{g.text}</p>
                  </div>
                  <RevealGroup className="grid gap-4 sm:grid-cols-2">
                    {g.items.map((m) => (
                      <RevealItem key={m.href}>
                        <Link href={m.href} className="group flex h-full items-center gap-4 rounded-2xl border border-ink-line bg-white p-5 transition-all duration-fast hover:-translate-y-0.5 hover:border-go hover:shadow-md">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-go-tint text-go-deep transition-colors group-hover:bg-go group-hover:text-white">
                            <Icon name={m.icon} className="h-[22px] w-[22px]" />
                          </span>
                          <span className="flex-1">
                            <span className="block font-semibold text-ink">{m.name}</span>
                            <span className="block text-sm text-ink-body">{m.text}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 text-go-deep transition-transform group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
                        </Link>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              ))}
            </div>
          </div>
        </section>
        <NightCta />
      </main>
      <SiteFooter />
    </>
  )
}
