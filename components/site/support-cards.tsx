import { Icon } from '@/components/site/icon'
import { LinkArrow } from '@/components/site/primitives'
import { RevealGroup, RevealItem } from '@/components/site/reveal'
import { SUPPORT_CHANNELS } from '@/lib/site'
import { cn } from '@/lib/utils'

/** SupportCard × 4 (Figma › SupportCard). */
export function SupportCards({ className, columns = 2 }: { className?: string; columns?: 2 | 4 }) {
  return (
    <RevealGroup className={cn('grid gap-5 sm:grid-cols-2', columns === 4 && 'lg:grid-cols-4', className)}>
      {SUPPORT_CHANNELS.map((c) => (
        <RevealItem key={c.title}>
          <article className="flex h-full flex-col gap-3.5 rounded-[20px] border border-ink-line bg-white p-7">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-go-tint text-go-deep">
              <Icon name={c.icon} className="h-6 w-6" />
            </span>
            <h3 className="text-h4 text-ink">{c.title}</h3>
            <p className="text-sm text-ink-body">{c.text}</p>
            <span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs text-ink-body">{c.meta}</span>
            <LinkArrow href={c.href} className="mt-auto pt-1">
              {c.cta}
            </LinkArrow>
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  )
}
