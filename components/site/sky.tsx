'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Cloud } from '@/components/illustrations/cloud'
import { Moon, Planet, Rocket, Star } from '@/components/illustrations/art'
import { cn } from '@/lib/utils'

// Generador determinístico: mismas posiciones en servidor y cliente.
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

type CloudSpec = { top: number; size: number; dur: number; delay: number; opacity: number }

function makeClouds(n: number, seed: number, layer: 0 | 1 | 2): CloudSpec[] {
  const r = seeded(seed)
  const base = [
    { size: [60, 90], dur: [52, 70], op: [0.16, 0.22] }, // lejos
    { size: [90, 130], dur: [38, 50], op: [0.22, 0.3] }, // medio
    { size: [130, 180], dur: [28, 36], op: [0.28, 0.36] }, // cerca
  ][layer]
  return Array.from({ length: n }, () => {
    const dur = base.dur[0] + r() * (base.dur[1] - base.dur[0])
    return {
      top: 4 + r() * 78,
      size: base.size[0] + r() * (base.size[1] - base.size[0]),
      dur,
      delay: -r() * dur,
      opacity: base.op[0] + r() * (base.op[1] - base.op[0]),
    }
  })
}

const LAYERS = [makeClouds(5, 11, 0), makeClouds(4, 23, 1), makeClouds(3, 37, 2)]

function makeStars(n: number, seed: number, maxTop = 100) {
  const r = seeded(seed)
  return Array.from({ length: n }, () => ({ left: r() * 100, top: r() * maxTop, size: 1 + r() * 2.2, dur: 3 + r() * 3, delay: -r() * 6, op: 0.35 + r() * 0.6 }))
}
const DAY_STARS = makeStars(24, 7, 70)
const NIGHT_STARS = makeStars(70, 13)

/**
 * Cielo GO (Figma › Fondo/Cielo · Momento=Día|Noche).
 * Día: nubes en tres capas con parallax, planeta que flota y cohete que despega con el scroll.
 * Noche: estrellas que titilan, luna y estrellas dibujadas.
 */
export function Sky({
  mode = 'day',
  className,
  planet = true,
  rocket = true,
  clouds = true,
}: {
  mode?: 'day' | 'night'
  className?: string
  planet?: boolean
  rocket?: boolean
  clouds?: boolean
}) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const far = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -30])
  const mid = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -70])
  const near = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -130])
  const rocketY = useTransform(scrollY, [0, 520], [0, reduce ? 0 : -520])
  const rocketO = useTransform(scrollY, [0, 380, 520], [1, 1, reduce ? 1 : 0])
  const planetY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -90])
  const layerY = [far, mid, near]

  if (mode === 'night') {
    return (
      <div className={cn('pointer-events-none absolute inset-0 overflow-hidden bg-sky-night', className)} aria-hidden>
        {NIGHT_STARS.map((s, i) => (
          <span
            key={i}
            className="go-twinkle absolute rounded-full bg-white"
            style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, opacity: s.op, ['--dur' as string]: `${s.dur}s`, ['--delay' as string]: `${s.delay}s` }}
          />
        ))}
        <Moon tone="ink" className="go-bob absolute right-[8%] top-[10%] w-16 sm:w-24" />
        <Star tone="ink" className="go-twinkle absolute left-[14%] top-[18%] w-6" style={{ ['--dur' as string]: '5s' }} />
        <Star tone="ink" className="go-twinkle absolute left-[62%] top-[30%] w-4" style={{ ['--dur' as string]: '4s', ['--delay' as string]: '-2s' }} />
        <Star tone="ink" className="go-twinkle absolute bottom-[22%] left-[28%] w-3.5" style={{ ['--dur' as string]: '6s', ['--delay' as string]: '-1s' }} />
      </div>
    )
  }

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden bg-sky-day', className)} aria-hidden>
      {DAY_STARS.map((s, i) => (
        <span
          key={i}
          className="go-twinkle absolute rounded-full bg-white"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, opacity: s.op * 0.6, ['--dur' as string]: `${s.dur}s`, ['--delay' as string]: `${s.delay}s` }}
        />
      ))}
      {clouds
        ? LAYERS.map((layer, li) => (
            <motion.div key={li} className="absolute inset-0" style={{ y: layerY[li] }}>
              {layer.map((c, i) => (
                <div key={i} className="go-cloud absolute left-0 text-white" style={{ top: `${c.top}%`, opacity: c.opacity, ['--dur' as string]: `${c.dur}s`, ['--delay' as string]: `${c.delay}s` }}>
                  <Cloud style={{ width: c.size }} />
                </div>
              ))}
            </motion.div>
          ))
        : null}
      {planet ? (
        <motion.div className="absolute right-[5%] top-[18%] hidden w-40 md:block lg:w-52" style={{ y: planetY }}>
          <Planet tone="blue" className="go-float w-full" />
        </motion.div>
      ) : null}
      {rocket ? (
        <motion.div className="absolute left-[7%] top-[34%] hidden w-14 lg:block" style={{ y: rocketY, opacity: rocketO, rotate: -18 }}>
          <Rocket tone="blue" className="go-bob w-full" />
        </motion.div>
      ) : null}
    </div>
  )
}
