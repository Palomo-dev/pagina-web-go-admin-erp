'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeader } from '@/components/site/primitives'
import { useMediaQuery } from '@/hooks/use-media-query'

type ChipSpec = { messy: string; tidy: string; from: [number, number, number]; to: [number, number] }

// Posiciones en % del lienzo: del desorden (from) al orden (to)
const CHIPS: ChipSpec[] = [
  { messy: 'Cuaderno de pedidos', tidy: 'Pedidos', from: [2, 6, -8], to: [55, 8] },
  { messy: 'WhatsApp de proveedores', tidy: 'Proveedores', from: [44, 16, 7], to: [55, 24] },
  { messy: 'Hoja de inventario', tidy: 'Inventario', from: [6, 74, -5], to: [55, 40] },
  { messy: 'Facturas en papel', tidy: 'Facturación DIAN', from: [46, 84, 9], to: [55, 56] },
  { messy: 'Caja registradora', tidy: 'Caja', from: [20, 44, 4], to: [55, 72] },
]

const BULLETS = [
  { title: 'Deja de digitar dos veces', text: 'Lo que vendes en caja llega solo a inventario y contabilidad.' },
  { title: 'Sabe qué tienes y dónde', text: 'Existencias por bodega y sucursal, con alertas de stock bajo.' },
  { title: 'Cierra caja sin sorpresas', text: 'Arqueo, medios de pago y diferencias en un solo reporte.' },
]

/** 02 · ¿Todo pasa por ti? — el nudo de tareas se desata y se vuelve piezas que encajan. */
export function Problem() {
  const ref = useRef<HTMLElement>(null)
  const desktop = useMediaQuery('(min-width: 1024px)')
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: desktop ? ['start start', 'end end'] : ['start 0.9', 'center 0.45'],
  })
  const p = useTransform(scrollYProgress, (v) => (reduce ? 1 : v))

  return (
    <section ref={ref} className="relative bg-go-wash lg:h-[230vh]" aria-labelledby="problema-title">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
        <div className="container grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20 lg:py-0">
          <div className="flex flex-col gap-10">
            <SectionHeader
              align="left"
              eyebrow="El día a día"
              title={<span id="problema-title">¿Todo pasa por ti?</span>}
              subtitle="Compras, pagos, pedidos y pendientes. Cuando todo depende de una persona, hasta una tarea pequeña se vuelve un cuello de botella."
            />
            <ul className="grid gap-5">
              {BULLETS.map((b, i) => (
                <Bullet key={b.title} {...b} p={p} at={0.3 + i * 0.18} />
              ))}
            </ul>
          </div>
          <Composition p={p} />
        </div>
      </div>
    </section>
  )
}

function Bullet({ title, text, p, at }: { title: string; text: string; p: MotionValue<number>; at: number }) {
  const opacity = useTransform(p, [at - 0.12, at], [0.35, 1])
  const x = useTransform(p, [at - 0.12, at], [-8, 0])
  return (
    <motion.li className="flex gap-4" style={{ opacity, x }}>
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-go text-white">
        <Check className="h-4 w-4" strokeWidth={2} aria-hidden />
      </span>
      <span>
        <span className="block font-medium text-ink">{title}</span>
        <span className="block text-sm text-ink-body">{text}</span>
      </span>
    </motion.li>
  )
}

function Composition({ p }: { p: MotionValue<number> }) {
  const knotLen = useTransform(p, [0.05, 0.5], [1, 0])
  const knotOp = useTransform(p, [0.4, 0.55], [1, 0])
  const ribbon = useTransform(p, [0.3, 0.75], [0, 1])
  const piecesOp = useTransform(p, [0.45, 0.7], [0, 1])
  const inkX = useTransform(p, [0.45, 0.85], [-60, 0])
  const blueX = useTransform(p, [0.45, 0.85], [60, 0])
  const whiteY = useTransform(p, [0.5, 0.9], [60, 0])
  const labelOp = useTransform(p, [0.8, 0.95], [0, 1])

  return (
    <div className="relative aspect-[7/6] w-full overflow-hidden rounded-[32px] border border-ink-line bg-white shadow-md" role="img" aria-label="Tareas sueltas —cuaderno, WhatsApp, hojas de cálculo, facturas y caja— se ordenan como piezas conectadas en GO Admin">
      {/* Nudo que se desata */}
      <motion.svg viewBox="0 0 260 220" className="absolute left-[4%] top-[18%] w-[56%]" fill="none" style={{ opacity: knotOp }} aria-hidden>
        <motion.path
          d="M20 120 C60 40 140 30 150 90 C160 150 70 170 80 110 C90 50 200 60 190 120 C182 170 110 180 120 130 C128 90 210 100 240 70"
          stroke="#0F172A"
          strokeWidth={3}
          strokeLinecap="round"
          style={{ pathLength: knotLen }}
        />
      </motion.svg>
      {/* Cinta azul que conecta (se dibuja) */}
      <motion.svg viewBox="0 0 560 480" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        <motion.path d="M-10 452 C100 452 160 424 230 424 C300 424 300 312 332 300" stroke="#4361EE" strokeWidth={5} strokeLinecap="round" style={{ pathLength: ribbon }} />
      </motion.svg>
      {/* Piezas que encajan */}
      <motion.div className="absolute left-[8%] top-[30%] w-[44%]" style={{ opacity: piecesOp }} aria-hidden>
        <svg viewBox="0 0 260 190" className="w-full overflow-visible">
          <motion.rect x="32" y="35" width="92" height="92" rx="24" fill="#0F172A" style={{ x: inkX }} />
          <motion.rect x="134" y="35" width="92" height="92" rx="24" fill="#4361EE" style={{ x: blueX }} />
          <motion.rect x="85" y="106" width="92" height="55" rx="20" fill="#fff" stroke="#4361EE" strokeWidth="3" style={{ y: whiteY }} />
        </svg>
        <motion.p className="mt-2 text-center text-sm font-semibold text-ink" style={{ opacity: labelOp }}>
          Todo conectado en GO Admin
        </motion.p>
      </motion.div>
      {CHIPS.map((c) => (
        <Chip key={c.messy} spec={c} p={p} />
      ))}
    </div>
  )
}

function Chip({ spec, p }: { spec: ChipSpec; p: MotionValue<number> }) {
  const left = useTransform(p, [0.1, 0.7], [`${spec.from[0]}%`, `${spec.to[0]}%`])
  const top = useTransform(p, [0.1, 0.7], [`${spec.from[1]}%`, `${spec.to[1]}%`])
  const rotate = useTransform(p, [0.1, 0.7], [spec.from[2], 0])
  const messy = useTransform(p, [0.5, 0.65], [1, 0])
  const tidy = useTransform(p, [0.55, 0.7], [0, 1])
  return (
    <motion.div className="absolute" style={{ left, top, rotate }}>
      <div className="relative">
        <motion.span style={{ opacity: messy }} className="block whitespace-nowrap rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[11px] text-ink-body shadow-sm sm:text-xs">
          {spec.messy}
        </motion.span>
        <motion.span style={{ opacity: tidy }} className="absolute inset-y-0 left-0 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-go-200 bg-go-tint py-1.5 pl-1.5 pr-3 text-[11px] font-semibold text-go-deep sm:text-xs">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-go text-white">
            <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
          </span>
          {spec.tidy}
        </motion.span>
      </div>
    </motion.div>
  )
}
