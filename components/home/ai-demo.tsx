'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Bot, Send, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { useLocale } from 'next-intl'
import { sampleAmount } from '@/i18n/markets'
import { useT } from '@/i18n/t'

const TOP = [
  { v: 100 },
  { v: 78 },
  { v: 61 },
  { v: 44 },
]

/** 04 · GO Admin IA — la pregunta se escribe sola y aparece la respuesta con un mini gráfico. */
export function AiDemo() {
  const t = useT('home.ai')
  const prompts = [0, 1, 2].map((i) => t(`prompts.${i}`))
  return (
    <section id="ia" className="bg-go-wash py-20 sm:py-32" aria-labelledby="ia-title">
      <div className="container grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeader
            align="left"
            eyebrow={t('eyebrow')}
            title={<span id="ia-title">{t('title')}</span>}
            subtitle={t('subtitle')}
          />
          <div className="flex flex-col items-start gap-2.5">
            {prompts.map((q, i) => (
              <Reveal key={q} delay={i * 0.08}>
                <p className="inline-flex items-center gap-2.5 rounded-full border border-ink-line bg-white py-2.5 pl-3 pr-4 text-sm text-ink shadow-sm">
                  <Sparkles className="h-4 w-4 shrink-0 text-go" strokeWidth={1.5} aria-hidden />
                  {q}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        <ChatCard />
      </div>
    </section>
  )
}

function ChatCard() {
  const tr = useT('home.ai')
  const c = useT('common')
  const locale = useLocale()
  const QUESTION = tr('question')
  const ANSWER = tr('answer', { amount: sampleAmount(locale, 18450000) })
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [typed, setTyped] = useState(0)
  const [answered, setAnswered] = useState(false)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setTyped(QUESTION.length)
      setAnswered(true)
      return
    }
    let i = 0
    const t = setInterval(() => {
      i += 1
      setTyped(i)
      if (i >= QUESTION.length) {
        clearInterval(t)
        setTimeout(() => setAnswered(true), 500)
      }
    }, 28)
    return () => clearInterval(t)
  }, [inView, reduce, QUESTION.length])

  const done = typed >= QUESTION.length

  return (
    <div ref={ref} className="rounded-[28px] border border-ink-line bg-white p-5 shadow-lg sm:p-7">
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-go text-white">
          <Bot className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
        </span>
        <span className="text-sm font-semibold text-ink">GO Admin IA</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-ink-body">{c('example')}</span>
      </div>

      <div className="mt-5 flex min-h-[340px] flex-col gap-4" aria-live="polite">
        {typed > 0 ? (
          <div className="ml-auto max-w-[80%] rounded-[18px] rounded-br-md bg-go-action px-4 py-3 text-sm text-white">
            {QUESTION.slice(0, typed)}
            {!done ? <span className="go-caret ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-white" aria-hidden /> : null}
          </div>
        ) : null}
        {answered ? (
          <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }} className="flex items-end gap-2.5">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-go text-white">
              <Bot className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </span>
            <div className="max-w-[88%] rounded-[18px] rounded-bl-md border border-ink-line bg-white px-4 py-3 text-sm text-ink">
              <p>{ANSWER}</p>
              <div className="mt-3 grid gap-2.5 rounded-2xl bg-go-wash p-3.5">
                {TOP.map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-36 shrink-0 truncate text-xs text-ink-body">{tr(`top.${i}`)}</span>
                    <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-white">
                      <motion.span
                        className={i === 0 ? 'block h-full rounded-full bg-go' : 'block h-full rounded-full bg-go-200'}
                        initial={reduce ? false : { width: 0 }}
                        animate={{ width: `${t.v}%` }}
                        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 + i * 0.08 }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-slate-300 py-2 pl-4 pr-2">
        <span className="text-sm text-ink-muted">{tr('placeholder')}</span>
        <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-go-action text-white" aria-hidden>
          <Send className="h-4 w-4" strokeWidth={1.5} />
        </span>
      </div>
    </div>
  )
}
