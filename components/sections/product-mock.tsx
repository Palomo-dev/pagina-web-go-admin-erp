import { Bot, Check, Clock, LockKeyhole, MessageCircle, Minus, Plus, Search, ShoppingBag, Star } from 'lucide-react'
import { Isotipo } from '@/components/brand/logo'
import { DashboardMock } from '@/components/site/dashboard-mock'
import { cn } from '@/lib/utils'

export type MockKind = 'pos' | 'stock' | 'pms' | 'invoice' | 'ledger' | 'payroll' | 'pipeline' | 'chat' | 'site' | 'store' | 'booking' | 'dashboard' | 'ai'

/**
 * Vistas de ejemplo de cada producto (Figma › ProductMock · Tipo).
 * Datos ilustrativos, siempre rotulados como ejemplo (Manual › 09).
 */
export function ProductMock({ kind, className }: { kind: MockKind; className?: string }) {
  if (kind === 'dashboard') return <DashboardMock className={className} />
  const Body = BODIES[kind]
  const url = URLS[kind]
  return (
    <div className={cn('overflow-hidden rounded-[20px] border border-white/60 bg-white text-left shadow-float', className)} role="img" aria-label={`Vista de ejemplo: ${LABELS[kind]}`}>
      <div className="flex items-center gap-4 bg-slate-50 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex flex-1 items-center justify-center gap-1.5 truncate rounded-lg border border-ink-line bg-white py-1.5 text-xs text-ink-muted">
          <LockKeyhole className="h-3 w-3 shrink-0" strokeWidth={1.75} aria-hidden />
          {url}
        </div>
        <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-ink-body sm:inline">Ejemplo</span>
      </div>
      <div aria-hidden>
        <Body />
      </div>
    </div>
  )
}

const LABELS: Record<MockKind, string> = {
  pos: 'punto de venta con cuenta de mesa',
  stock: 'existencias por bodega',
  pms: 'calendario de ocupación del hotel',
  invoice: 'factura electrónica aceptada por la DIAN',
  ledger: 'asiento contable automático',
  payroll: 'liquidación de nómina',
  pipeline: 'embudo de oportunidades',
  chat: 'bandeja de conversaciones',
  site: 'página web de un negocio',
  store: 'tienda en línea con carrito',
  booking: 'reserva de mesa',
  dashboard: 'tablero de ventas',
  ai: 'asistente de IA',
}

const URLS: Record<MockKind, string> = {
  pos: 'app.goadmin.io/pos',
  stock: 'app.goadmin.io/inventario',
  pms: 'app.goadmin.io/hotel/calendario',
  invoice: 'app.goadmin.io/finanzas/facturas',
  ledger: 'app.goadmin.io/contabilidad',
  payroll: 'app.goadmin.io/nomina',
  pipeline: 'app.goadmin.io/crm',
  chat: 'app.goadmin.io/chat',
  site: 'cafearoma.goadmin.io',
  store: 'tienda.cafearoma.co',
  booking: 'cafearoma.goadmin.io/reservas',
  dashboard: 'app.goadmin.io/inicio',
  ai: 'app.goadmin.io/ia',
}

const Pad = ({ children, className }: { children: React.ReactNode; className?: string }) => <div className={cn('bg-go-wash p-4 sm:p-6', className)}>{children}</div>
const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => <div className={cn('rounded-[14px] border border-ink-line bg-white', className)}>{children}</div>
const Pill = ({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'ok' | 'warn' | 'brand' }) => (
  <span className={cn('inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium', { neutral: 'bg-slate-100 text-ink-body', ok: 'bg-emerald-50 text-emerald-700', warn: 'bg-amber-50 text-amber-700', brand: 'bg-go-tint text-go-deep' }[tone])}>{children}</span>
)

function Pos() {
  const items = [
    ['Bandeja paisa', 1, '$ 32.000'],
    ['Limonada de coco', 2, '$ 18.000'],
    ['Arepa con queso', 1, '$ 9.500'],
  ] as const
  return (
    <Pad className="grid gap-4 sm:grid-cols-[1fr_240px]">
      <div className="grid grid-cols-3 gap-2">
        {['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Barra', 'Terraza'].map((m, i) => (
          <div key={m} className={cn('rounded-xl border p-3 text-xs', i === 2 ? 'border-go bg-go text-white' : i % 2 ? 'border-ink-line bg-white text-ink' : 'border-amber-200 bg-amber-50 text-amber-800')}>
            <p className="font-semibold">{m}</p>
            <p className="mt-1 opacity-80">{i === 2 ? 'Abierta · 3 pers.' : i % 2 ? 'Libre' : 'Ocupada'}</p>
          </div>
        ))}
      </div>
      <Card className="flex flex-col p-4">
        <p className="text-sm font-semibold text-ink">Mesa 3</p>
        <ul className="mt-3 grid gap-2 text-xs">
          {items.map(([n, q, v]) => (
            <li key={n} className="flex items-center justify-between gap-2">
              <span className="text-ink">
                {q} × {n}
              </span>
              <span className="tabular text-ink-body">{v}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-ink-line pt-3 text-sm">
          <p className="flex justify-between text-ink-body">
            <span>Propina sugerida</span>
            <span className="tabular">$ 5.950</span>
          </p>
          <p className="mt-1 flex justify-between font-semibold text-ink">
            <span>Total</span>
            <span className="tabular">$ 65.450</span>
          </p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5 text-[11px] font-semibold">
          {['Efectivo', 'Tarjeta', 'QR'].map((m, i) => (
            <span key={m} className={cn('rounded-lg py-2 text-center', i === 2 ? 'bg-go-action text-white' : 'bg-slate-100 text-ink')}>
              {m}
            </span>
          ))}
        </div>
      </Card>
    </Pad>
  )
}

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <Card className="overflow-hidden">
      <table className="w-full text-left text-xs">
        <thead className="bg-slate-50 text-ink-muted">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-2.5 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-ink-line">
              {r.map((c, j) => (
                <td key={j} className="px-4 py-2.5 text-ink">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

function Stock() {
  return (
    <Pad>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Existencias · Sede Laureles</p>
        <span className="flex items-center gap-1.5 rounded-lg border border-ink-line bg-white px-2.5 py-1.5 text-xs text-ink-muted">
          <Search className="h-3.5 w-3.5" strokeWidth={1.75} /> Buscar
        </span>
      </div>
      <Table
        head={['Producto', 'Bodega', 'Stock', 'Estado']}
        rows={[
          ['Café de origen 500 g', 'Principal', '124', <Pill key="a" tone="ok">Suficiente</Pill>],
          ['Pan de bono x 6', 'Cocina', '18', <Pill key="b" tone="warn">Stock bajo</Pill>],
          ['Camiseta básica · M · Azul', 'Principal', '42', <Pill key="c" tone="ok">Suficiente</Pill>],
          ['Vaso compostable 12 oz', 'Principal', '0', <Pill key="d">Agotado</Pill>],
        ]}
      />
    </Pad>
  )
}

function Pms() {
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
  const rooms: [string, [number, number, string, string][]][] = [
    ['101 · Doble', [[0, 3, 'Gómez · Booking', 'bg-go']]],
    ['102 · Doble', [[1, 2, 'Ríos · Directa', 'bg-emerald-500']]],
    ['201 · Suite', [[2, 5, 'Grupo Andes', 'bg-go-deep']]],
    ['202 · Sencilla', [[4, 3, 'Pérez · Expedia', 'bg-amber-500']]],
  ]
  return (
    <Pad>
      <div className="grid grid-cols-[110px_repeat(7,1fr)] gap-y-2 text-[11px]">
        <span />
        {days.map((d) => (
          <span key={d} className="text-center text-ink-muted">
            {d}
          </span>
        ))}
        {rooms.map(([room, res]) => (
          <div key={room} className="contents">
            <span className="py-2 font-medium text-ink">{room}</span>
            <div className="relative col-span-7 h-9 rounded-lg bg-white">
              {res.map(([start, len, label, color]) => (
                <span key={label} className={cn('absolute top-1 h-7 truncate rounded-md px-2 py-1.5 font-medium text-white', color)} style={{ left: `${(start / 7) * 100}%`, width: `${(len / 7) * 100}%` }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Pad>
  )
}

function Invoice() {
  return (
    <Pad className="grid place-items-center">
      <Card className="w-full max-w-md p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Isotipo size={28} />
            <div>
              <p className="text-sm font-semibold text-ink">Café Aroma S.A.S.</p>
              <p className="text-[11px] text-ink-muted">NIT 900.000.000-0</p>
            </div>
          </div>
          <Pill tone="ok">Aceptada DIAN</Pill>
        </div>
        <p className="mt-4 text-xs text-ink-muted">Factura electrónica de venta</p>
        <p className="tabular text-lg font-semibold text-ink">FE-001234</p>
        <div className="mt-3 grid gap-1.5 text-xs">
          {[
            ['Subtotal', '$ 210.084'],
            ['IVA 19 %', '$ 39.916'],
            ['Total', '$ 250.000'],
          ].map(([a, b], i) => (
            <p key={a} className={cn('flex justify-between', i === 2 ? 'font-semibold text-ink' : 'text-ink-body')}>
              <span>{a}</span>
              <span className="tabular">{b}</span>
            </p>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <div className="grid h-12 w-12 grid-cols-4 gap-0.5 rounded bg-white p-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className={cn('rounded-[1px]', [0, 2, 5, 7, 8, 10, 13, 15].includes(i) ? 'bg-ink' : 'bg-transparent')} />
            ))}
          </div>
          <p className="truncate text-[10px] text-ink-muted">CUFE 3f9a…c21e · Enviada al cliente por correo</p>
        </div>
      </Card>
    </Pad>
  )
}

function Ledger() {
  return (
    <Pad>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Asiento automático · Venta FE-001234</p>
        <Pill tone="brand">Generado</Pill>
      </div>
      <Table
        head={['Cuenta', 'Débito', 'Crédito']}
        rows={[
          ['110505 · Caja general', '$ 250.000', ''],
          ['413595 · Ventas', '', '$ 210.084'],
          ['240805 · IVA por pagar', '', '$ 39.916'],
        ]}
      />
      <p className="mt-3 text-right text-xs font-semibold text-ink">Débitos = Créditos · $ 250.000</p>
    </Pad>
  )
}

function Payroll() {
  return (
    <Pad>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Nómina · Primera quincena</p>
        <Pill tone="ok">Lista para pagar</Pill>
      </div>
      <Table
        head={['Empleado', 'Cargo', 'Novedades', 'Neto']}
        rows={[
          ['Laura M.', 'Cajera', '2 h extra', '$ 812.400'],
          ['Andrés P.', 'Cocinero', '—', '$ 905.000'],
          ['Sara G.', 'Administradora', 'Vacaciones 3 d', '$ 1.420.000'],
        ]}
      />
    </Pad>
  )
}

function Pipeline() {
  const cols: [string, [string, string][]][] = [
    ['Nuevo', [['Hotel Río Claro', '$ 4,2 M'], ['Café Montaña', '$ 1,1 M']]],
    ['Cotizado', [['Gimnasio Forma', '$ 2,8 M']]],
    ['Negociación', [['Tiendas Lúa', '$ 6,5 M']]],
    ['Ganado', [['Bar La Esquina', '$ 1,9 M']]],
  ]
  return (
    <Pad className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {cols.map(([c, cards], i) => (
        <div key={c} className="rounded-xl bg-white/70 p-2.5">
          <p className="mb-2 flex items-center justify-between text-xs font-semibold text-ink">
            {c} <span className="text-ink-muted">{cards.length}</span>
          </p>
          <div className="grid gap-2">
            {cards.map(([n, v]) => (
              <Card key={n} className={cn('p-2.5 text-xs', i === 3 && 'border-emerald-200')}>
                <p className="font-medium text-ink">{n}</p>
                <p className="tabular mt-1 text-ink-muted">{v}</p>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </Pad>
  )
}

function Chat() {
  const convs = [
    ['WhatsApp', 'María R.', '¿Tienen mesa para 4 hoy?', true],
    ['Instagram', 'juanc.co', '¿Hacen domicilios a Envigado?', false],
    ['Web', 'Visitante', '¿A qué hora abren el domingo?', false],
  ] as const
  return (
    <Pad className="grid gap-3 sm:grid-cols-[220px_1fr]">
      <div className="grid gap-2">
        {convs.map(([ch, n, m, active]) => (
          <Card key={n} className={cn('p-3 text-xs', active && 'border-go')}>
            <p className="flex items-center justify-between">
              <span className="font-semibold text-ink">{n}</span>
              <Pill tone={active ? 'brand' : 'neutral'}>{ch}</Pill>
            </p>
            <p className="mt-1 truncate text-ink-body">{m}</p>
          </Card>
        ))}
      </div>
      <Card className="flex flex-col gap-2.5 p-4 text-xs">
        <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-slate-100 px-3 py-2 text-ink">¿Tienen mesa para 4 hoy a las 8?</p>
        <p className="ml-auto flex max-w-[80%] items-start gap-1.5 rounded-2xl rounded-br-md bg-go-action px-3 py-2 text-white">
          <Bot className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
          Sí, tenemos disponibilidad a las 8:00 p. m. ¿Te la reservo a nombre de María?
        </p>
        <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-slate-100 px-3 py-2 text-ink">Sí, por favor.</p>
        <p className="ml-auto flex items-center gap-1 text-[11px] text-emerald-700">
          <Check className="h-3.5 w-3.5" strokeWidth={2} /> Reserva creada · Mesa 6
        </p>
      </Card>
    </Pad>
  )
}

function SiteHeader({ cart }: { cart?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-ink-line bg-white px-5 py-3 text-xs">
      <span className="font-semibold text-ink">Café Aroma</span>
      <span className="hidden gap-4 text-ink-body sm:flex">
        <span>Menú</span>
        <span>Reservas</span>
        <span>Nosotros</span>
      </span>
      {cart ? (
        <span className="flex items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-white">
          <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.75} /> 2
        </span>
      ) : (
        <span className="rounded-full bg-[#7C4A2D] px-3 py-1.5 text-white">Pedir en línea</span>
      )}
    </div>
  )
}

function Site() {
  return (
    <div>
      <SiteHeader />
      <div className="grid gap-4 bg-[#F6EFE7] p-6 sm:grid-cols-2 sm:p-8">
        <div className="flex flex-col justify-center gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7C4A2D]">Desde 2012 en Laureles</p>
          <p className="text-2xl font-semibold leading-tight tracking-tight text-[#2B1B12]">Café de origen, pan del día.</p>
          <p className="text-xs text-[#5B4636]">Abierto hoy · 7:00 a. m. – 8:00 p. m.</p>
          <div className="flex gap-2 text-xs font-semibold">
            <span className="rounded-full bg-[#7C4A2D] px-3 py-2 text-white">Ver menú</span>
            <span className="rounded-full border border-[#7C4A2D] px-3 py-2 text-[#7C4A2D]">Reservar</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {['bg-[#C9A27E]', 'bg-[#8B5E3C]', 'bg-[#E3CBB0]', 'bg-[#A87B55]'].map((c) => (
            <div key={c} className={cn('aspect-square rounded-xl', c)} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between bg-white px-5 py-2.5 text-[11px] text-ink-muted">
        <span>Plantilla Restaurante · Colores de tu marca</span>
        <span>Hecho con GO Admin</span>
      </div>
    </div>
  )
}

function Store() {
  const products = [
    ['Café de origen 500 g', '$ 38.000', 'bg-[#8B5E3C]'],
    ['Pan de bono x 6', '$ 12.000', 'bg-[#E3CBB0]'],
    ['Taza de cerámica', '$ 29.000', 'bg-[#C9A27E]'],
  ]
  return (
    <div>
      <SiteHeader cart />
      <div className="grid gap-4 bg-white p-5 sm:grid-cols-[1fr_200px]">
        <div className="grid grid-cols-3 gap-3">
          {products.map(([n, p, c]) => (
            <div key={n} className="text-xs">
              <div className={cn('aspect-square rounded-xl', c)} />
              <p className="mt-2 font-medium text-ink">{n}</p>
              <p className="tabular text-ink-body">{p}</p>
              <p className="mt-1 flex items-center gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3" fill="currentColor" strokeWidth={0} />
                ))}
              </p>
            </div>
          ))}
        </div>
        <Card className="p-3 text-xs">
          <p className="font-semibold text-ink">Tu pedido</p>
          <p className="mt-2 flex items-center justify-between text-ink-body">
            Café 500 g
            <span className="flex items-center gap-1.5">
              <Minus className="h-3 w-3" /> 2 <Plus className="h-3 w-3" />
            </span>
          </p>
          <p className="mt-2 flex justify-between text-ink-body">
            Domicilio <span className="text-emerald-700">Gratis</span>
          </p>
          <p className="mt-2 flex justify-between font-semibold text-ink">
            Total <span className="tabular">$ 76.000</span>
          </p>
          <span className="mt-3 block rounded-lg bg-ink py-2 text-center font-semibold text-white">Pagar</span>
        </Card>
      </div>
    </div>
  )
}

function Booking() {
  return (
    <div>
      <SiteHeader />
      <div className="grid gap-4 bg-white p-5 sm:grid-cols-2">
        <div className="text-xs">
          <p className="font-semibold text-ink">Reserva tu mesa</p>
          <div className="mt-3 grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className={cn('rounded-md py-1.5', i === 9 ? 'bg-go text-white' : i < 3 ? 'text-slate-300' : 'bg-slate-50 text-ink')}>
                {i + 15}
              </span>
            ))}
          </div>
          <p className="mt-3 text-ink-body">Personas</p>
          <div className="mt-1 flex gap-1">
            {[2, 3, 4, 5, 6].map((n) => (
              <span key={n} className={cn('rounded-md px-3 py-1.5', n === 4 ? 'bg-go text-white' : 'bg-slate-50 text-ink')}>
                {n}
              </span>
            ))}
          </div>
        </div>
        <div className="text-xs">
          <p className="flex items-center gap-1.5 font-semibold text-ink">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.75} /> Horarios disponibles
          </p>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {['7:00 p. m.', '7:30 p. m.', '8:00 p. m.', '8:30 p. m.', '9:00 p. m.', '9:30 p. m.'].map((h, i) => (
              <span key={h} className={cn('rounded-md border py-1.5 text-center', i === 2 ? 'border-go bg-go-tint font-semibold text-go-deep' : i === 4 ? 'border-ink-line text-slate-300 line-through' : 'border-ink-line text-ink')}>
                {h}
              </span>
            ))}
          </div>
          <span className="mt-4 block rounded-lg bg-[#7C4A2D] py-2 text-center font-semibold text-white">Confirmar reserva</span>
          <p className="mt-2 flex items-center gap-1 text-emerald-700">
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.75} /> Recordatorio por WhatsApp
          </p>
        </div>
      </div>
    </div>
  )
}

function Ai() {
  return (
    <Pad className="grid gap-3">
      <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-go-action px-3 py-2 text-xs text-white">¿Qué productos se están quedando sin stock?</p>
      <Card className="max-w-[90%] p-3 text-xs text-ink">
        <p className="flex items-center gap-1.5 font-semibold">
          <Bot className="h-4 w-4 text-go" strokeWidth={1.75} /> GO Admin IA
        </p>
        <p className="mt-2">Estos 3 productos se agotan antes del viernes al ritmo de venta actual:</p>
        <ul className="mt-2 grid gap-1.5">
          {[
            ['Pan de bono x 6', '2 días'],
            ['Leche entera 1 L', '3 días'],
            ['Vaso 12 oz', 'Agotado'],
          ].map(([n, d]) => (
            <li key={n} className="flex justify-between rounded-lg bg-go-wash px-2.5 py-1.5">
              {n} <span className="font-medium text-amber-700">{d}</span>
            </li>
          ))}
        </ul>
        <span className="mt-3 inline-block rounded-lg bg-go-tint px-3 py-1.5 font-semibold text-go-deep">Crear orden de compra</span>
      </Card>
    </Pad>
  )
}

const BODIES: Record<Exclude<MockKind, 'dashboard'>, () => JSX.Element> = {
  pos: Pos,
  stock: Stock,
  pms: Pms,
  invoice: Invoice,
  ledger: Ledger,
  payroll: Payroll,
  pipeline: Pipeline,
  chat: Chat,
  site: Site,
  store: Store,
  booking: Booking,
  ai: Ai,
}
