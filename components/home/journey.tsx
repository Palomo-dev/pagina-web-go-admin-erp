'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import { Traveler } from '@/components/illustrations/art'
import { Icon } from '@/components/site/icon'
import { LinkArrow, SectionHeader } from '@/components/site/primitives'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useT } from '@/i18n/t'
import { JOURNEY, type Module } from '@/lib/site'

const STOP_W = 400
const GAP = 48
const LINE_W = (JOURNEY.length - 1) * (STOP_W + GAP)

/**
 * 03 · Recorrido por los planetas (Figma › ModuleStop).
 * Escritorio: scroll vertical fijado que desplaza la pista en horizontal; el viajero avanza
 * y la línea que conecta se dibuja. Móvil: carrusel con deslizamiento y snap.
 */
export function Journey() {
  const desktop = useMediaQuery('(min-width: 1024px)')
  return (
    <section id="recorrido" className="relative bg-white" aria-labelledby="recorrido-title">
      {desktop ? <PinnedTrack /> : <SwipeTrack />}
    </section>
  )
}

function Intro({ className }: { className?: string }) {
  const t = useT('home.journey')
  return (
    <SectionHeader
      className={className}
      align="left"
      eyebrow={t('eyebrow')}
      title={<span id="recorrido-title">{t('title')}</span>}
      subtitle={t('subtitle')}
    />
  )
}

function PinnedTrack() {
  const outer = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [dist, setDist] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return
      setDist(Math.max(0, track.current.scrollWidth - window.innerWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])
  const draw = useTransform(scrollYProgress, [0, 1], [0.04, 1])
  // El viajero salta de planeta en planeta
  const walker = useTransform(scrollYProgress, [0, 1], [0, (JOURNEY.length - 1) * (STOP_W + GAP)])
  const bar = useTransform(scrollYProgress, [0, 1], ['6%', '100%'])
  const count = useTransform(scrollYProgress, (v) => String(Math.min(JOURNEY.length, Math.floor(v * JOURNEY.length) + 1)).padStart(2, '0'))

  return (
    <div ref={outer} style={{ height: reduce ? 'auto' : `calc(100vh + ${dist}px)` }}>
      <div className={reduce ? 'py-28' : 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden'}>
        <motion.div ref={track} className="relative flex w-max items-start gap-12 pl-[max(2rem,calc((100vw-1200px)/2))] pr-24" style={{ x: reduce ? 0 : x }}>
          <Intro className="w-[440px] shrink-0 pt-10" />
          <div className="relative flex gap-12">
            {/* Línea que conecta: se dibuja con el progreso */}
            <svg className="pointer-events-none absolute left-[100px] top-[4px] h-[140px]" style={{ width: LINE_W }} viewBox={`0 0 ${LINE_W} 140`} preserveAspectRatio="none" fill="none" aria-hidden>
              <motion.path d={wave(LINE_W)} stroke="#4361EE" strokeWidth={3} strokeLinecap="round" strokeDasharray="2 12" style={{ pathLength: draw }} />
            </svg>
            {!reduce ? (
              <motion.div className="pointer-events-none absolute left-[48px] top-[-112px] z-10 w-[104px]" style={{ x: walker }} aria-hidden>
                <Traveler className="go-bob w-full" />
              </motion.div>
            ) : null}
            {JOURNEY.map((m, i) => (
              <Stop key={m.slug} m={m} i={i} />
            ))}
          </div>
        </motion.div>
        {!reduce ? (
          <div className="mx-auto mt-10 flex items-center gap-3" aria-hidden>
            <motion.span className="tabular text-sm font-semibold text-go-deep">{count}</motion.span>
            <span className="relative h-1 w-60 overflow-hidden rounded-full bg-go-tint">
              <motion.span className="absolute inset-y-0 left-0 rounded-full bg-go" style={{ width: bar }} />
            </span>
            <span className="tabular text-sm font-semibold text-ink-muted">{String(JOURNEY.length).padStart(2, '0')}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}

function wave(w: number) {
  const step = STOP_W + GAP
  let d = `M0 70`
  for (let x = 0; x < w; x += step) d += ` C${x + step * 0.3} 0 ${x + step * 0.7} 140 ${x + step} 70`
  return d
}

function SwipeTrack() {
  const t = useT('home.journey')
  return (
    <div className="py-20 sm:py-28">
      <div className="container">
        <Intro />
      </div>
      <ol className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-10">
        {JOURNEY.map((m, i) => (
          <li key={m.slug} className="w-[82vw] max-w-[360px] shrink-0 snap-center">
            <Stop m={m} i={i} />
          </li>
        ))}
      </ol>
      <p className="mt-2 text-center text-xs text-ink-muted">{t('swipe')}</p>
    </div>
  )
}

function Stop({ m, i }: { m: Module; i: number }) {
  const reduce = useReducedMotion()
  const t = useT('home.journey')
  const k = `modules.${m.slug}`
  const name = t(`${k}.name`)
  return (
    <article className="flex w-full shrink-0 flex-col gap-4 lg:w-[400px]">
      <motion.div
        className="relative h-[150px] w-[200px]"
        initial={reduce ? false : { rotate: -10, opacity: 0, scale: 0.9 }}
        whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.48, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <PlanetStop icon={m.icon} />
      </motion.div>
      <p className="text-eyebrow uppercase text-go-deep">
        {t('planet', { n: String(i + 1).padStart(2, '0'), name: t(`${k}.planet`) })}
      </p>
      <h3 className="text-h3 text-ink">{name}</h3>
      <p className="text-ink-body">{t(`${k}.description`)}</p>
      <ul className="grid gap-2.5">
        {[0, 1, 2].map((n) => t(`${k}.points.${n}`)).map((pt) => (
          <li key={pt} className="flex items-center gap-2.5 text-sm text-ink">
            <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-go-tint text-go-deep">
              <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            </span>
            {pt}
          </li>
        ))}
      </ul>
      <LinkArrow href={m.href} className="mt-1">
        {t('cta', { name })}
      </LinkArrow>
    </article>
  )
}

/** Planeta del módulo: esfera blanca con anillo de tinta y el ícono en Azul GO. */
export function PlanetStop({ icon, className }: { icon: Module['icon']; className?: string }) {
  return (
    <div className={className ?? 'relative h-full w-full'}>
      <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        <path d="M30 104 C6 118 4 132 22 134 C48 137 108 122 156 96 C192 76 200 58 186 54 C176 52 164 54 150 60" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="100" cy="74" r="55" fill="#fff" stroke="#0F172A" strokeWidth="2.5" />
        <path d="M30 104 C6 118 4 132 22 134 C48 137 108 122 156 96" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="66" cy="104" rx="7" ry="3" stroke="#0F172A" strokeWidth="2" />
        <circle cx="136" cy="44" r="3" fill="#0F172A" />
      </svg>
      <span className="absolute left-[50%] top-[49%] grid -translate-x-1/2 -translate-y-1/2 place-items-center text-go">
        <Icon name={icon} className="h-10 w-10" />
      </span>
    </div>
  )
}
