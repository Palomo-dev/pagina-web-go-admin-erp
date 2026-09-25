'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'

/** FAQItem (Figma › FAQItem · Estado=Cerrado|Abierto). Una pregunta abierta a la vez. */
export function Faq({ items, defaultOpen = 0 }: { items: { q: string; a: string }[]; defaultOpen?: number }) {
  return (
    <Accordion.Root type="single" collapsible defaultValue={`item-${defaultOpen}`} className="mx-auto grid w-full max-w-3xl gap-3">
      {items.map((it, i) => (
        <Accordion.Item
          key={it.q}
          value={`item-${i}`}
          className="group rounded-2xl border border-ink-line bg-white transition-all duration-fast data-[state=open]:border-go data-[state=open]:shadow-md"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left font-medium text-ink">
              {it.q}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-go-tint text-go-deep transition-all duration-fast group-data-[state=open]:rotate-45 group-data-[state=open]:bg-go group-data-[state=open]:text-white">
                <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="px-6 pb-5 text-ink-body">{it.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
