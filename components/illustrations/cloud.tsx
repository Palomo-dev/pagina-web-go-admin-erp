import type { SVGProps } from 'react'

/** Nube del cielo GO (la misma forma de la página anterior). */
export function Cloud(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 110 70" fill="none" aria-hidden {...props}>
      <path
        d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
        fill="currentColor"
      />
    </svg>
  )
}
