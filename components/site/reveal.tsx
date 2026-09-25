'use client'

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'

const EASE = [0.2, 0.8, 0.2, 1] as const

/**
 * Entrada al hacer scroll (Figma › Movimiento): fade + 16 px, 320 ms, ease-out.
 * Con prefers-reduced-motion solo aparece (fade), sin desplazamiento.
 */
export function Reveal({ delay = 0, y = 16, children, ...props }: HTMLMotionProps<'div'> & { delay?: number; y?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.32, ease: EASE, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/** Contenedor que escalona a sus hijos <RevealItem> cada 80 ms. */
export function RevealGroup({ children, stagger = 0.08, ...props }: HTMLMotionProps<'div'> & { stagger?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, ...props }: HTMLMotionProps<'div'>) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: EASE } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
