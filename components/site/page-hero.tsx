'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Eyebrow } from '@/components/site/primitives'
import { Sky } from '@/components/site/sky'

const EASE = [0.2, 0.8, 0.2, 1] as const

/** Hero interno sobre el cielo GO (Figma › Hero interno). */
export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle: string; children?: React.ReactNode }) {
  const reduce = useReducedMotion()
  // Siempre con animate: el servidor pinta opacity 0 y, sin animate, el texto quedaría oculto con movimiento reducido.
  const enter = (d: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: reduce ? { duration: 0 } : { duration: 0.44, ease: EASE, delay: d },
  })
  return (
    <section className="relative isolate overflow-hidden bg-go-wash pb-44" aria-labelledby="page-title">
      <Sky className="bottom-[40px]" rocket={false} />
      <div className="pointer-events-none absolute bottom-[-110px] left-1/2 h-[220px] w-[180%] -translate-x-1/2 rounded-[50%] bg-go-wash sm:w-[150%]" aria-hidden />
      <div className="container relative flex flex-col items-center pt-36 text-center sm:pt-44">
        <motion.div {...enter(0)}>
          <Eyebrow tone="blue">{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1 id="page-title" className="mt-5 max-w-3xl text-balance text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-display-l" {...enter(0.08)}>
          {title}
        </motion.h1>
        <motion.p className="mt-5 max-w-2xl text-pretty text-base text-go-50 sm:text-lead" {...enter(0.16)}>
          {subtitle}
        </motion.p>
        {children ? (
          <motion.div className="mt-8 w-full" {...enter(0.24)}>
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
