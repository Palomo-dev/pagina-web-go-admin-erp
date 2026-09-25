'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Traveler } from '@/components/illustrations/art'
import { DashboardMock } from '@/components/site/dashboard-mock'
import { CtaLink, Eyebrow } from '@/components/site/primitives'
import { Sky } from '@/components/site/sky'
import { SIGNUP_URL } from '@/lib/site'

const EASE = [0.2, 0.8, 0.2, 1] as const

/** 01 · Hero (Figma › Inicio · Escritorio › 01 Hero). */
export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  // La captura del producto sube y se endereza con el scroll (8° → 0°)
  const tilt = useTransform(scrollY, [0, 520], [reduce ? 0 : 10, 0])
  const lift = useTransform(scrollY, [0, 520], [reduce ? 0 : 40, 0])
  const scale = useTransform(scrollY, [0, 520], [reduce ? 1 : 0.95, 1])
  const travelerY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -60])

  const enter = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.48, ease: EASE, delay } }

  return (
    <section className="relative isolate overflow-hidden bg-go-wash pb-16 sm:pb-24" aria-labelledby="hero-title">
      <Sky className="bottom-[180px] sm:bottom-[260px]" />
      {/* Horizonte curvo entre el cielo y el contenido */}
      <div className="pointer-events-none absolute bottom-[100px] left-1/2 h-[180px] w-[180%] -translate-x-1/2 rounded-[50%] bg-go-wash sm:bottom-[160px] sm:h-[220px] sm:w-[150%]" aria-hidden />

      <div className="container relative flex flex-col items-center pt-32 text-center sm:pt-40">
        <motion.div {...enter(0)}>
          <Eyebrow tone="blue">
            <span className="sm:hidden">Facturación DIAN incluida</span>
            <span className="hidden sm:inline">Facturación electrónica DIAN incluida en todos los planes</span>
          </Eyebrow>
        </motion.div>
        <motion.h1 id="hero-title" className="mt-6 max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-7xl lg:text-[5rem]" {...enter(0.08)}>
          Tu negocio, <br className="hidden sm:block" />
          en un solo lugar.
        </motion.h1>
        <motion.p className="mt-6 max-w-2xl text-pretty text-base text-go-50 sm:text-lead" {...enter(0.16)}>
          Inventario, ventas, facturación, nómina y clientes conectados. Para que tu negocio no dependa de tu memoria.
        </motion.p>
        <motion.div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row" {...enter(0.24)}>
          <CtaLink href={SIGNUP_URL} kind="light" size="lg" className="w-full sm:w-auto">
            Crear mi cuenta gratis
          </CtaLink>
          <CtaLink href="#recorrido" kind="outline-light" size="lg" arrow={false} className="w-full sm:w-auto">
            Ver GO Admin por dentro
          </CtaLink>
        </motion.div>
        <motion.p className="mt-4 text-xs text-go-200" {...enter(0.3)}>
          Desde 15 días gratis · Sin tarjeta de crédito · Soporte en español
        </motion.p>

        <div className="relative mt-14 w-full max-w-[1040px] sm:mt-16" style={{ perspective: 1400 }}>
          <motion.div style={{ rotateX: tilt, y: lift, scale, transformOrigin: '50% 0%' }} initial={reduce ? false : { opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}>
            <DashboardMock className="text-left" />
          </motion.div>
          <motion.div className="absolute -right-6 -top-[190px] hidden w-[210px] md:block lg:-right-24 lg:-top-[230px] lg:w-[250px]" style={{ y: travelerY }} initial={reduce ? false : { opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}>
            <Traveler tone="blue" title="El viajero de GO Admin sostiene una pieza azul sobre su pequeño planeta" className="w-full drop-shadow-[0_18px_30px_rgba(21,31,84,0.25)]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
