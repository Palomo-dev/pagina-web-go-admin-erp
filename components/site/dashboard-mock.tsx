import { Bell, FileCheck, LockKeyhole, Package, TrendingUp, Users, Wallet } from 'lucide-react'
import { Isotipo } from '@/components/brand/logo'
import { Icon } from '@/components/site/icon'
import { cn } from '@/lib/utils'
import type { IconName } from '@/lib/site'

const BARS = [
  { d: 'Lun', h: 46 },
  { d: 'Mar', h: 62 },
  { d: 'Mié', h: 54 },
  { d: 'Jue', h: 80 },
  { d: 'Vie', h: 96 },
  { d: 'Sáb', h: 86 },
  { d: 'Dom', h: 40 },
]

const SIDE: { icon: IconName; active?: boolean; label: string }[] = [
  { icon: 'layout', active: true, label: 'Inicio' },
  { icon: 'cart', label: 'Ventas' },
  { icon: 'package', label: 'Inventario' },
  { icon: 'receipt', label: 'Facturación' },
  { icon: 'users', label: 'Clientes' },
  { icon: 'chart', label: 'Reportes' },
  { icon: 'bot', label: 'IA' },
]

/**
 * Vista del producto para el hero (Figma › DashboardMock).
 * Los datos son ilustrativos y se rotulan como ejemplo (Manual › 09: no presentar como captura real de un cliente).
 */
export function DashboardMock({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-[20px] border border-white/60 bg-white shadow-float', className)} role="img" aria-label="Vista de ejemplo del tablero de GO Admin con ventas del día, facturas emitidas, alertas de stock y actividad reciente">
      <div className="flex items-center gap-4 bg-slate-50 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-ink-line bg-white py-1.5 text-xs text-ink-muted">
          <LockKeyhole className="h-3 w-3" strokeWidth={1.75} aria-hidden />
          app.goadmin.io/inicio
        </div>
      </div>
      <div className="flex">
        <aside className="hidden flex-col items-center gap-3 border-r border-ink-line px-3 py-5 sm:flex" aria-hidden>
          <Isotipo size={30} />
          {SIDE.map((s) => (
            <span key={s.label} className={cn('grid h-9 w-9 place-items-center rounded-[10px]', s.active ? 'bg-go-tint text-go-deep' : 'text-ink-muted')}>
              <Icon name={s.icon} className="h-[18px] w-[18px]" />
            </span>
          ))}
        </aside>
        <div className="flex-1 bg-go-wash p-4 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-base font-semibold text-ink sm:text-h4">Buenos días, Ana</p>
              <p className="text-xs text-ink-muted">Jueves · Sede Laureles</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-ink-body">Datos de ejemplo</span>
              <span className="hidden h-9 w-9 place-items-center rounded-[10px] border border-ink-line bg-white text-ink-body sm:grid">
                <Bell className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-4">
            <Kpi icon={<TrendingUp className="h-4 w-4" strokeWidth={1.5} />} label="Ventas de hoy" value="$ 2.340.000" note="+8 % frente a ayer" />
            <Kpi icon={<FileCheck className="h-4 w-4" strokeWidth={1.5} />} label="Facturas emitidas" value="38" note="Aceptadas por la DIAN" />
            <Kpi icon={<Package className="h-4 w-4" strokeWidth={1.5} />} label="Stock bajo" value="5 productos" note="Revisar antes del viernes" warn />
          </div>
          <div className="mt-4 grid gap-4 sm:mt-5 md:grid-cols-[1fr_260px]">
            <div className="rounded-[14px] border border-ink-line bg-white p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink">Ventas de la semana</p>
                <p className="text-xs text-ink-muted">Millones COP</p>
              </div>
              <div className="mt-4 flex h-28 items-end gap-2 sm:h-36 sm:gap-3">
                {BARS.map((b) => (
                  <div key={b.d} className="flex h-full flex-1 flex-col items-center gap-1.5">
                    <div className="flex w-full flex-1 items-end">
                      <div className={cn('w-full rounded-b-sm rounded-t-lg', b.d === 'Jue' ? 'bg-go' : 'bg-go-200')} style={{ height: `${b.h}%` }} />
                    </div>
                    <span className="text-[10px] text-ink-muted sm:text-xs">{b.d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden rounded-[14px] border border-ink-line bg-white p-5 md:block">
              <p className="text-sm font-semibold text-ink">Actividad reciente</p>
              <ul className="mt-3 grid gap-3">
                <Activity icon={<FileCheck className="h-4 w-4 text-success" strokeWidth={1.5} />} title="Factura FE-001234 aceptada" time="Hace 2 min" />
                <Activity icon={<Package className="h-4 w-4 text-go" strokeWidth={1.5} />} title="Pedido #482 despachado" time="Hace 18 min" />
                <Activity icon={<Wallet className="h-4 w-4 text-go" strokeWidth={1.5} />} title="Cierre de caja · Laureles" time="Hace 1 h" />
                <Activity icon={<Users className="h-4 w-4 text-go" strokeWidth={1.5} />} title="Nuevo cliente: Café Aroma" time="Hace 3 h" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Kpi({ icon, label, value, note, warn }: { icon: React.ReactNode; label: string; value: string; note: string; warn?: boolean }) {
  return (
    <div className="rounded-[14px] border border-ink-line bg-white p-2.5 sm:p-4">
      <div className="flex items-center gap-2">
        <span className={cn('hidden h-7 w-7 place-items-center rounded-lg sm:grid', warn ? 'bg-amber-50 text-amber-700' : 'bg-go-tint text-go-deep')}>{icon}</span>
        <span className="truncate text-[10px] text-ink-body sm:text-xs">{label}</span>
      </div>
      <p className="tabular mt-1.5 truncate text-sm font-semibold tracking-tight text-ink sm:mt-2 sm:text-2xl">{value}</p>
      <p className={cn('mt-0.5 hidden truncate text-xs sm:block', warn ? 'text-amber-700' : 'text-emerald-700')}>{note}</p>
    </div>
  )
}

function Activity({ icon, title, time }: { icon: React.ReactNode; title: string; time: string }) {
  return (
    <li className="flex gap-2.5">
      <span className="mt-0.5">{icon}</span>
      <span className="flex flex-col">
        <span className="text-xs text-ink">{title}</span>
        <span className="text-xs text-ink-muted">{time}</span>
      </span>
    </li>
  )
}
