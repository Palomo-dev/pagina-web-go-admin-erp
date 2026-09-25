'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Planet } from '@/components/illustrations/art'
import { CtaLink } from '@/components/site/primitives'
import { Sky } from '@/components/site/sky'
import { useT } from '@/i18n/t'

function SeePlans() {
  return <>{useT('common')('seePlans')}</>
}

const EASE = [0.2, 0.8, 0.2, 1] as const

/** Hero de módulo/industria: texto a la izquierda y un planeta con el ícono a la derecha. */
export function PageHeroSplit({
  breadcrumb,
  title,
  description,
  icon,
  primary,
}: {
  breadcrumb: React.ReactNode
  title: string
  description: string
  icon?: React.ReactNode
  primary: { label: string; href: string }
}) {
  const reduce = useReducedMotion()
  // Siempre con animate: el servidor pinta opacity 0 y, sin animate, el texto quedaría oculto con movimiento reducido.
  const enter = (d: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: reduce ? { duration: 0 } : { duration: 0.44, ease: EASE, delay: d },
  })
  return (
    <section className="relative isolate overflow-hidden bg-go-wash pb-36" aria-labelledby="detail-title">
      <Sky className="bottom-[40px]" rocket={false} planet={false} />
      <div className="pointer-events-none absolute bottom-[-110px] left-1/2 h-[220px] w-[180%] -translate-x-1/2 rounded-[50%] bg-go-wash sm:w-[150%]" aria-hidden />
      <div className="container relative grid items-center gap-10 pt-32 sm:pt-40 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="flex flex-col items-start gap-5">
          <motion.div {...enter(0)}>{breadcrumb}</motion.div>
          <motion.h1 id="detail-title" className="text-balance text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-display-l" {...enter(0.08)}>
            {title}
          </motion.h1>
          <motion.p className="max-w-2xl text-pretty text-base text-go-50 sm:text-lead" {...enter(0.16)}>
            {description}
          </motion.p>
          <motion.div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row" {...enter(0.24)}>
            <CtaLink href={primary.href} kind="light" size="lg">
              {primary.label}
            </CtaLink>
            <CtaLink href="/precios" kind="outline-light" size="lg" arrow={false}>
              <SeePlans />
            </CtaLink>
          </motion.div>
        </div>
        <motion.div className="relative mx-auto hidden w-[340px] lg:block" initial={reduce ? false : { opacity: 0, rotate: -8, scale: 0.92 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}>
          <Planet tone="blue" className="go-float w-full" />
          {icon ? <span className="absolute left-1/2 top-[51%] grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-go shadow-action">{icon}</span> : null}
        </motion.div>
      </div>
    </section>
  )
}
