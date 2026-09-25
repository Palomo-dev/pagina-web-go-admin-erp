import { Bell, FileCheck, LockKeyhole, Package, TrendingUp, Users, Wallet } from 'lucide-react'
import { Isotipo } from '@/components/brand/logo'
import { Icon } from '@/components/site/icon'
import { cn } from '@/lib/utils'
import { useLocale } from 'next-intl'
import { getMarket, sampleAmount } from '@/i18n/markets'
import { useT } from '@/i18n/t'
import type { IconName } from '@/lib/site'

const BARS = [46, 62, 54, 80, 96, 86, 40]

const SIDE: { icon: IconName; active?: boolean }[] = [
  { icon: 'layout', active: true },
  { icon: 'cart' },
  { icon: 'package' },
  { icon: 'receipt' },
  { icon: 'users' },
  { icon: 'chart' },
  { icon: 'bot' },
]

/**
 * Vista del producto para el hero (Figma › DashboardMock).
 * Los datos son ilustrativos y se rotulan como ejemplo (Manual › 09: no presentar como captura real de un cliente).
 */
export function DashboardMock({ className }: { className?: string }) {
  const t = useT('mock.dashboard')
  const locale = useLocale()
  const currency = getMarket(locale).countryData.currency
  const sample = useT('common')('sampleData')
  return (
    <div className={cn('overflow-hidden rounded-[20px] border border-white/60 bg-white shadow-float', className)} role="img" aria-label={t('aria')}>
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
          {SIDE.map((s, i) => (
            <span key={i} title={t(`side.${i}`)} className={cn('grid h-9 w-9 place-items-center rounded-[10px]', s.active ? 'bg-go-tint text-go-deep' : 'text-ink-muted')}>
              <Icon name={s.icon} className="h-[18px] w-[18px]" />
            </span>
          ))}
        </aside>
        <div className="flex-1 bg-go-wash p-4 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-base font-semibold text-ink sm:text-h4">{t('greeting')}</p>
              <p className="text-xs text-ink-muted">{t('where')}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-ink-body">{sample}</span>
              <span className="hidden h-9 w-9 place-items-center rounded-[10px] border border-ink-line bg-white text-ink-body sm:grid">
                <Bell className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-4">
            <Kpi icon={<TrendingUp className="h-4 w-4" strokeWidth={1.5} />} label={t('salesToday')} value={sampleAmount(locale, 2340000)} note={t('salesNote')} />
            <Kpi icon={<FileCheck className="h-4 w-4" strokeWidth={1.5} />} label={t('invoices')} value="38" note={t('invoicesNote')} />
            <Kpi icon={<Package className="h-4 w-4" strokeWidth={1.5} />} label={t('lowStock')} value={t('lowStockValue')} note={t('lowStockNote')} warn />
          </div>
          <div className="mt-4 grid gap-4 sm:mt-5 md:grid-cols-[1fr_260px]">
            <div className="rounded-[14px] border border-ink-line bg-white p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink">{t('weekSales')}</p>
                <p className="text-xs text-ink-muted">{t('weekUnit', { currency })}</p>
              </div>
              <div className="mt-4 flex h-28 items-end gap-2 sm:h-36 sm:gap-3">
                {BARS.map((h, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col items-center gap-1.5">
                    <div className="flex w-full flex-1 items-end">
                      <div className={cn('w-full rounded-b-sm rounded-t-lg', i === 3 ? 'bg-go' : 'bg-go-200')} style={{ height: `${h}%` }} />
                    </div>
                    <span className="text-[10px] text-ink-muted sm:text-xs">{t(`days.${i}`)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden rounded-[14px] border border-ink-line bg-white p-5 md:block">
              <p className="text-sm font-semibold text-ink">{t('activity')}</p>
              <ul className="mt-3 grid gap-3">
                <Activity icon={<FileCheck className="h-4 w-4 text-success" strokeWidth={1.5} />} title={t('act1')} time={t('act1Time')} />
                <Activity icon={<Package className="h-4 w-4 text-go" strokeWidth={1.5} />} title={t('act2')} time={t('act2Time')} />
                <Activity icon={<Wallet className="h-4 w-4 text-go" strokeWidth={1.5} />} title={t('act3')} time={t('act3Time')} />
                <Activity icon={<Users className="h-4 w-4 text-go" strokeWidth={1.5} />} title={t('act4')} time={t('act4Time')} />
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
