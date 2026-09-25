import { Bot, Check, Clock, LockKeyhole, MessageCircle, Minus, Plus, Search, ShoppingBag, Star } from 'lucide-react'
import { Isotipo } from '@/components/brand/logo'
import { DashboardMock } from '@/components/site/dashboard-mock'
import { useLocale } from 'next-intl'
import { formatLocal, getMarket, sampleAmount, sampleDomain, sampleValue } from '@/i18n/markets'
import { useT } from '@/i18n/t'
import { cn } from '@/lib/utils'

/** Hora local del mercado (7:00 p. m. / 7:00 PM / 19:00). */
function useTime() {
  const locale = useLocale()
  return (h: number, m = 0) => new Date(2000, 0, 1, h, m).toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit' })
}
/** Monto de ejemplo en la moneda del país (el valor base está pensado en pesos colombianos). */
function useMoney() {
  const locale = useLocale()
  return (cop: number) => sampleAmount(locale, cop)
}

export type MockKind = 'pos' | 'stock' | 'pms' | 'invoice' | 'ledger' | 'payroll' | 'pipeline' | 'chat' | 'site' | 'store' | 'booking' | 'dashboard' | 'ai'

/**
 * Vistas de ejemplo de cada producto (Figma › ProductMock · Tipo).
 * Datos ilustrativos, siempre rotulados como ejemplo (Manual › 09). Montos, impuestos,
 * identificación tributaria y horas se adaptan al país e idioma del mercado.
 */
export function ProductMock({ kind, className }: { kind: MockKind; className?: string }) {
  const t = useT('mock')
  const locale = useLocale()
  const c = useT('common')
  if (kind === 'dashboard') return <DashboardMock className={className} />
  const Body = BODIES[kind]
  const url = URLS[kind].replace('cafearoma.{tld}', sampleDomain(locale))
  return (
    <div className={cn('overflow-hidden rounded-[20px] border border-white/60 bg-white text-left shadow-float', className)} role="img" aria-label={t('viewLabel', { label: t(`labels.${kind}`) })}>
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
        <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-ink-body sm:inline">{c('example')}</span>
      </div>
      <div aria-hidden>
        <Body />
      </div>
    </div>
  )
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
  store: 'tienda.cafearoma.{tld}',
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
  const t = useT('mock.pos')
  const money = useMoney()
  const items = [
    [t('items.0'), 1, money(32000)],
    [t('items.1'), 2, money(18000)],
    [t('items.2'), 1, money(9500)],
  ] as const
  return (
    <Pad className="grid gap-4 sm:grid-cols-[1fr_240px]">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((n) => t(`tables.${n}`)).map((m, i) => (
          <div key={m} className={cn('rounded-xl border p-3 text-xs', i === 2 ? 'border-go bg-go text-white' : i % 2 ? 'border-ink-line bg-white text-ink' : 'border-amber-200 bg-amber-50 text-amber-800')}>
            <p className="font-semibold">{m}</p>
            <p className="mt-1 opacity-80">{i === 2 ? t('open') : i % 2 ? t('free') : t('busy')}</p>
          </div>
        ))}
      </div>
      <Card className="flex flex-col p-4">
        <p className="text-sm font-semibold text-ink">{t('current')}</p>
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
            <span>{t('tip')}</span>
            <span className="tabular">{money(5950)}</span>
          </p>
          <p className="mt-1 flex justify-between font-semibold text-ink">
            <span>{t('total')}</span>
            <span className="tabular">{money(65450)}</span>
          </p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5 text-[11px] font-semibold">
          {[0, 1, 2].map((n) => t(`methods.${n}`)).map((m, i) => (
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
  const t = useT('mock.stock')
  return (
    <Pad>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">{t('title')}</p>
        <span className="flex items-center gap-1.5 rounded-lg border border-ink-line bg-white px-2.5 py-1.5 text-xs text-ink-muted">
          <Search className="h-3.5 w-3.5" strokeWidth={1.75} /> {t('search')}
        </span>
      </div>
      <Table
        head={[0, 1, 2, 3].map((n) => t(`head.${n}`))}
        rows={[
          [t('rows.0'), t('main'), '124', <Pill key="a" tone="ok">{t('ok')}</Pill>],
          [t('rows.1'), t('kitchen'), '18', <Pill key="b" tone="warn">{t('low')}</Pill>],
          [t('rows.2'), t('main'), '42', <Pill key="c" tone="ok">{t('ok')}</Pill>],
          [t('rows.3'), t('main'), '0', <Pill key="d">{t('out')}</Pill>],
        ]}
      />
    </Pad>
  )
}

function Pms() {
  const t = useT('mock.pms')
  const d = useT('mock.dashboard')
  const days = [0, 1, 2, 3, 4, 5, 6].map((n) => d(`days.${n}`))
  const rooms: [string, [number, number, string, string][]][] = [
    [t('rooms.0'), [[0, 3, 'Gómez · Booking', 'bg-go']]],
    [t('rooms.1'), [[1, 2, `Ríos · ${t('direct')}`, 'bg-emerald-500']]],
    [t('rooms.2'), [[2, 5, t('group'), 'bg-go-deep']]],
    [t('rooms.3'), [[4, 3, 'Pérez · Expedia', 'bg-amber-500']]],
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
  const t = useT('mock.invoice')
  const locale = useLocale()
  const m = getMarket(locale)
  const f = m.countryData.fiscal
  const total = sampleValue(locale, 250000)
  const subtotal = Math.round(total / (1 + f.mainTax.rate / 100))
  const tax = total - subtotal
  const integrated = f.status === 'integrated'
  return (
    <Pad className="grid place-items-center">
      <Card className="w-full max-w-md p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Isotipo size={28} />
            <div>
              <p className="text-sm font-semibold text-ink">{t('company')}</p>
              <p className="text-[11px] text-ink-muted">
                {f.taxId} {f.sampleTaxId}
              </p>
            </div>
          </div>
          <Pill tone="ok">{t('accepted')}</Pill>
        </div>
        <p className="mt-4 text-xs text-ink-muted">{t('docType')}</p>
        <p className="tabular text-lg font-semibold text-ink">FE-001234</p>
        <div className="mt-3 grid gap-1.5 text-xs">
          {[
            [t('subtotal'), formatLocal(locale, subtotal)],
            [`${f.mainTax.label[m.language]} ${f.mainTax.rate} %`, formatLocal(locale, tax)],
            [t('total'), formatLocal(locale, total)],
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
          <p className="truncate text-[10px] text-ink-muted">{integrated && f.docId ? `${f.docId} 3f9a…c21e · ` : ''}{t('sent')}</p>
        </div>
      </Card>
    </Pad>
  )
}

function Ledger() {
  const t = useT('mock.ledger')
  const locale = useLocale()
  const m = getMarket(locale)
  const f = m.countryData.fiscal
  const total = sampleValue(locale, 250000)
  const subtotal = Math.round(total / (1 + f.mainTax.rate / 100))
  // Códigos del PUC solo en Colombia; en otros países el plan de cuentas lo define la empresa.
  const code = (c: string) => (m.country === 'COL' ? `${c} · ` : '')
  return (
    <Pad>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">{t('title')}</p>
        <Pill tone="brand">{t('generated')}</Pill>
      </div>
      <Table
        head={[0, 1, 2].map((n) => t(`head.${n}`))}
        rows={[
          [`${code('110505')}${t('cash')}`, formatLocal(locale, total), ''],
          [`${code('413595')}${t('sales')}`, '', formatLocal(locale, subtotal)],
          [`${code('240805')}${t('taxPayable', { tax: f.mainTax.label[m.language] })}`, '', formatLocal(locale, total - subtotal)],
        ]}
      />
      <p className="mt-3 text-right text-xs font-semibold text-ink">{t('balance', { amount: formatLocal(locale, total) })}</p>
    </Pad>
  )
}

function Payroll() {
  const t = useT('mock.payroll')
  const money = useMoney()
  return (
    <Pad>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">{t('title')}</p>
        <Pill tone="ok">{t('ready')}</Pill>
      </div>
      <Table
        head={[0, 1, 2, 3].map((n) => t(`head.${n}`))}
        rows={[
          ['Laura M.', t('roles.0'), t('notes.0'), money(812400)],
          ['Andrés P.', t('roles.1'), t('notes.1'), money(905000)],
          ['Sara G.', t('roles.2'), t('notes.2'), money(1420000)],
        ]}
      />
    </Pad>
  )
}

function Pipeline() {
  const t = useT('mock.pipeline')
  const money = useMoney()
  const cols: [string, [string, string][]][] = [
    [t('cols.0'), [['Hotel Río Claro', money(4200000)], ['Café Montaña', money(1100000)]]],
    [t('cols.1'), [['Gimnasio Forma', money(2800000)]]],
    [t('cols.2'), [['Tiendas Lúa', money(6500000)]]],
    [t('cols.3'), [['Bar La Esquina', money(1900000)]]],
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
  const t = useT('mock.chat')
  const time = useTime()
  const convs = [
    ['WhatsApp', 'María R.', t('list.0'), true],
    ['Instagram', 'juanc.co', t('list.1'), false],
    [t('web'), t('visitor'), t('list.2'), false],
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
        <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-slate-100 px-3 py-2 text-ink">{t('q')}</p>
        <p className="ml-auto flex max-w-[80%] items-start gap-1.5 rounded-2xl rounded-br-md bg-go-action px-3 py-2 text-white">
          <Bot className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
          {t('a', { time: time(20) })}
        </p>
        <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-slate-100 px-3 py-2 text-ink">{t('yes')}</p>
        <p className="ml-auto flex items-center gap-1 text-[11px] text-emerald-700">
          <Check className="h-3.5 w-3.5" strokeWidth={2} /> {t('done')}
        </p>
      </Card>
    </Pad>
  )
}

function SiteHeader({ cart }: { cart?: boolean }) {
  const t = useT('mock.site')
  return (
    <div className="flex items-center justify-between border-b border-ink-line bg-white px-5 py-3 text-xs">
      <span className="font-semibold text-ink">Café Aroma</span>
      <span className="hidden gap-4 text-ink-body sm:flex">
        <span>{t('menu')}</span>
        <span>{t('bookings')}</span>
        <span>{t('about')}</span>
      </span>
      {cart ? (
        <span className="flex items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-white">
          <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.75} /> 2
        </span>
      ) : (
        <span className="rounded-full bg-[#7C4A2D] px-3 py-1.5 text-white">{t('order')}</span>
      )}
    </div>
  )
}

function Site() {
  const t = useT('mock.site')
  const time = useTime()
  return (
    <div>
      <SiteHeader />
      <div className="grid gap-4 bg-[#F6EFE7] p-6 sm:grid-cols-2 sm:p-8">
        <div className="flex flex-col justify-center gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7C4A2D]">{t('since')}</p>
          <p className="text-2xl font-semibold leading-tight tracking-tight text-[#2B1B12]">{t('headline')}</p>
          <p className="text-xs text-[#5B4636]">{t('open', { from: time(7), to: time(20) })}</p>
          <div className="flex gap-2 text-xs font-semibold">
            <span className="rounded-full bg-[#7C4A2D] px-3 py-2 text-white">{t('seeMenu')}</span>
            <span className="rounded-full border border-[#7C4A2D] px-3 py-2 text-[#7C4A2D]">{t('book')}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {['bg-[#C9A27E]', 'bg-[#8B5E3C]', 'bg-[#E3CBB0]', 'bg-[#A87B55]'].map((c) => (
            <div key={c} className={cn('aspect-square rounded-xl', c)} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between bg-white px-5 py-2.5 text-[11px] text-ink-muted">
        <span>{t('template')}</span>
        <span>{t('madeWith')}</span>
      </div>
    </div>
  )
}

function Store() {
  const t = useT('mock.store')
  const money = useMoney()
  const products = [
    [t('products.0'), money(38000), 'bg-[#8B5E3C]'],
    [t('products.1'), money(12000), 'bg-[#E3CBB0]'],
    [t('products.2'), money(29000), 'bg-[#C9A27E]'],
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
          <p className="font-semibold text-ink">{t('order')}</p>
          <p className="mt-2 flex items-center justify-between text-ink-body">
            {t('item')}
            <span className="flex items-center gap-1.5">
              <Minus className="h-3 w-3" /> 2 <Plus className="h-3 w-3" />
            </span>
          </p>
          <p className="mt-2 flex justify-between text-ink-body">
            {t('delivery')} <span className="text-emerald-700">{t('free')}</span>
          </p>
          <p className="mt-2 flex justify-between font-semibold text-ink">
            {t('total')} <span className="tabular">{money(76000)}</span>
          </p>
          <span className="mt-3 block rounded-lg bg-ink py-2 text-center font-semibold text-white">{t('pay')}</span>
        </Card>
      </div>
    </div>
  )
}

function Booking() {
  const t = useT('mock.booking')
  const time = useTime()
  return (
    <div>
      <SiteHeader />
      <div className="grid gap-4 bg-white p-5 sm:grid-cols-2">
        <div className="text-xs">
          <p className="font-semibold text-ink">{t('title')}</p>
          <div className="mt-3 grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className={cn('rounded-md py-1.5', i === 9 ? 'bg-go text-white' : i < 3 ? 'text-slate-300' : 'bg-slate-50 text-ink')}>
                {i + 15}
              </span>
            ))}
          </div>
          <p className="mt-3 text-ink-body">{t('people')}</p>
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
            <Clock className="h-3.5 w-3.5" strokeWidth={1.75} /> {t('times')}
          </p>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[[19, 0], [19, 30], [20, 0], [20, 30], [21, 0], [21, 30]].map(([hh, mm]) => time(hh, mm)).map((h, i) => (
              <span key={h} className={cn('rounded-md border py-1.5 text-center', i === 2 ? 'border-go bg-go-tint font-semibold text-go-deep' : i === 4 ? 'border-ink-line text-slate-300 line-through' : 'border-ink-line text-ink')}>
                {h}
              </span>
            ))}
          </div>
          <span className="mt-4 block rounded-lg bg-[#7C4A2D] py-2 text-center font-semibold text-white">{t('confirm')}</span>
          <p className="mt-2 flex items-center gap-1 text-emerald-700">
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.75} /> {t('reminder')}
          </p>
        </div>
      </div>
    </div>
  )
}

function Ai() {
  const t = useT('mock.ai')
  return (
    <Pad className="grid gap-3">
      <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-go-action px-3 py-2 text-xs text-white">{t('q')}</p>
      <Card className="max-w-[90%] p-3 text-xs text-ink">
        <p className="flex items-center gap-1.5 font-semibold">
          <Bot className="h-4 w-4 text-go" strokeWidth={1.75} /> GO Admin IA
        </p>
        <p className="mt-2">{t('intro')}</p>
        <ul className="mt-2 grid gap-1.5">
          {[
            [t('items.0'), t('days', { n: 2 })],
            [t('items.1'), t('days', { n: 3 })],
            [t('items.2'), t('out')],
          ].map(([n, d]) => (
            <li key={n} className="flex justify-between rounded-lg bg-go-wash px-2.5 py-1.5">
              {n} <span className="font-medium text-amber-700">{d}</span>
            </li>
          ))}
        </ul>
        <span className="mt-3 inline-block rounded-lg bg-go-tint px-3 py-1.5 font-semibold text-go-deep">{t('cta')}</span>
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
