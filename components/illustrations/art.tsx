// Archivo generado por design/illustrations-src/to_tsx.py — no editar a mano.
// Ilustraciones originales del viajero GO (inspiradas en El Principito, dibujo propio).
import type { SVGProps } from 'react'
import { palette, type Tone } from './palette'

type ArtProps = SVGProps<SVGSVGElement> & { tone?: Tone; title?: string; animated?: boolean }

export function Traveler({ tone = 'light', title, animated = true, ...props }: ArtProps) {
  const c = palette[tone]
  return (
    <svg viewBox="0 0 320 360" fill="none" strokeLinecap="round" strokeLinejoin="round" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <g >
      <path d="M40 300 C40 250 95 226 160 226 C225 226 280 250 280 300 C280 338 230 356 160 356 C90 356 40 338 40 300 Z" fill={c.paper} stroke={c.line} strokeWidth="2.5"/>
      <path d="M78 268 q10 -6 22 -2" stroke={c.line} strokeWidth="2"/>
      <ellipse cx="212" cy="300" rx="14" ry="6" stroke={c.line} strokeWidth="2"/>
      <ellipse cx="112" cy="322" rx="9" ry="4" stroke={c.line} strokeWidth="2"/>
      <path d="M244 266 q8 3 12 10" stroke={c.line} strokeWidth="2"/>
      <circle cx="176" cy="336" r="2.5" fill={c.line}/>
      </g>
      <g className={animated ? "go-sprout" : undefined}>
      <path d="M232 238 C232 226 233 216 236 206" stroke={c.line} strokeWidth="2.5"/>
      <path d="M235 214 C226 206 214 206 208 212 C216 220 228 220 235 214 Z" fill={c.leaf} stroke={c.line} strokeWidth="2"/>
      <path d="M236 206 C242 196 254 194 262 198 C256 208 244 210 236 206 Z" fill={c.accent} stroke={c.line} strokeWidth="2"/>
      </g>
      <g >
      <path d="M146 196 L143 229" stroke={c.line} strokeWidth="2.5"/>
      <path d="M168 196 L171 229" stroke={c.line} strokeWidth="2.5"/>
      <path d="M132 232 C132 226 138 226 145 228 L147 233 L133 234 Z" fill={c.line} stroke={c.line} strokeWidth="2"/>
      <path d="M169 228 C176 226 183 226 183 232 L181 234 L168 233 Z" fill={c.line} stroke={c.line} strokeWidth="2"/>
      <path d="M140 134 C132 150 128 178 124 202 C142 208 172 208 190 202 C186 178 182 150 174 134 C164 130 150 130 140 134 Z" fill={c.paper} stroke={c.line} strokeWidth="2.5"/>
      <path d="M157 138 L157 204" stroke={c.line} strokeWidth="1.8"/>
      <circle cx="151" cy="156" r="1.8" fill={c.line}/>
      <circle cx="151" cy="172" r="1.8" fill={c.line}/>
      <path d="M130 186 q27 6 54 0" stroke={c.line} strokeWidth="1.8"/>
      <path d="M140 140 C132 156 128 170 130 182" stroke={c.line} strokeWidth="2.5"/>
      <circle cx="130" cy="185" r="4" fill={c.paper} stroke={c.line} strokeWidth="2"/>
      <path d="M174 140 C186 150 194 160 198 166" stroke={c.line} strokeWidth="2.5"/>
      <g >
      <rect x="192" y="146" width="30" height="30" rx="9" fill={c.accent} stroke={c.line} strokeWidth="2.2" transform="rotate(-8 207 161)"/>
      <path d="M200 142 l-3 -6 M209 139 l0 -7 M218 142 l3 -6" stroke={c.accent} strokeWidth="2"/>
      </g>
      <circle cx="198" cy="168" r="4" fill={c.paper} stroke={c.line} strokeWidth="2"/>
      <path d="M136 104 C136 88 146 78 158 78 C171 78 180 88 180 103 C180 119 171 130 158 130 C145 130 136 120 136 104 Z" fill={c.paper} stroke={c.line} strokeWidth="2.5"/>
      <path d="M136 98 C132 90 136 82 142 82 C140 74 148 68 155 72 C158 64 170 64 172 72 C180 70 186 78 182 86 C188 90 186 98 180 100 C176 92 170 88 164 90 C160 84 152 84 148 90 C144 88 138 92 136 98 Z" fill={c.paper} stroke={c.line} strokeWidth="2.2"/>
      <path d="M150 78 q4 -2 7 1 M163 76 q4 -1 6 3" stroke={c.line} strokeWidth="1.6"/>
      <path d="M184 84 q8 -2 13 -8 M186 92 q7 1 12 -3" stroke={c.line} strokeWidth="2"/>
      <ellipse cx="151" cy="106" rx="2" ry="3" fill={c.line}/>
      <ellipse cx="167" cy="106" rx="2" ry="3" fill={c.line}/>
      <path d="M155 118 q4 3 8 0" stroke={c.line} strokeWidth="1.8"/>
      <path d="M143 114 q3 1 5 0 M170 114 q3 1 5 0" stroke={c.blush} strokeWidth="2"/>
      </g>
      <g >
      <path d="M140 128 C150 136 166 136 176 128 L178 136 C168 144 148 144 138 136 Z" fill={c.accent} stroke={c.line} strokeWidth="2.2"/>
      <path className={animated ? "go-scarf" : undefined} d="M172 134 C196 128 214 112 236 116 C256 120 268 108 284 98 C282 112 270 128 252 132 C232 136 216 132 200 144 C192 150 180 146 172 140 Z" fill={c.accent} stroke={c.line} strokeWidth="2.2"/>
      <path d="M284 98 l6 -4 M282 106 l7 -1" stroke={c.line} strokeWidth="1.8"/>
      </g>
    </svg>
  )
}

export function TravelerSitting({ tone = 'light', title, animated = true, ...props }: ArtProps) {
  const c = palette[tone]
  return (
    <svg viewBox="0 0 320 300" fill="none" strokeLinecap="round" strokeLinejoin="round" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <g >
      <path d="M30 250 C30 205 90 186 160 186 C230 186 290 205 290 250 C290 284 236 298 160 298 C84 298 30 284 30 250 Z" fill={c.paper} stroke={c.line} strokeWidth="2.5"/>
      <ellipse cx="96" cy="250" rx="13" ry="5" stroke={c.line} strokeWidth="2"/>
      <path d="M228 222 q9 3 13 10" stroke={c.line} strokeWidth="2"/>
      <circle cx="190" cy="276" r="2.5" fill={c.line}/>
      <ellipse cx="150" cy="282" rx="8" ry="3.5" stroke={c.line} strokeWidth="2"/>
      </g>
      <g className={animated ? "go-sprout" : undefined}>
      <path d="M250 200 C250 190 251 182 254 174" stroke={c.line} strokeWidth="2.5"/>
      <path d="M253 182 C244 174 232 174 226 180 C234 188 246 188 253 182 Z" fill={c.leaf} stroke={c.line} strokeWidth="2"/>
      <path d="M254 174 C260 164 272 162 280 166 C274 176 262 178 254 174 Z" fill={c.accent} stroke={c.line} strokeWidth="2"/>
      </g>
      <g >
      <path d="M112 112 C104 128 100 158 102 186 C120 192 148 192 160 186 C156 160 150 128 142 112 C132 108 120 108 112 112 Z" fill={c.paper} stroke={c.line} strokeWidth="2.5"/>
      <path d="M128 116 L128 150" stroke={c.line} strokeWidth="1.8"/>
      <path d="M132 184 C140 168 158 150 180 146 C188 146 192 152 190 160 L196 186 L182 188 L176 164 C164 170 154 180 150 188 Z" fill={c.paper} stroke={c.line} strokeWidth="2.5"/>
      <path d="M178 186 C184 182 196 182 202 186 L201 191 L178 191 Z" fill={c.line} stroke={c.line} strokeWidth="2"/>
      <path d="M140 122 C150 134 164 142 178 148" stroke={c.line} strokeWidth="2.5"/>
      <circle cx="180" cy="149" r="4" fill={c.paper} stroke={c.line} strokeWidth="2"/>
      <g  transform="rotate(-14 128 82)">
      <path d="M106 84 C106 68 116 58 128 58 C141 58 150 68 150 83 C150 99 141 110 128 110 C115 110 106 100 106 84 Z" fill={c.paper} stroke={c.line} strokeWidth="2.5"/>
      <path d="M106 78 C102 70 106 62 112 62 C110 54 118 48 125 52 C128 44 140 44 142 52 C150 50 156 58 152 66 C158 70 156 78 150 80 C146 72 140 68 134 70 C130 64 122 64 118 70 C114 68 108 72 106 78 Z" fill={c.paper} stroke={c.line} strokeWidth="2.2"/>
      <path d="M154 64 q8 -2 13 -8 M156 72 q7 1 12 -3" stroke={c.line} strokeWidth="2"/>
      <ellipse cx="122" cy="84" rx="2" ry="3" fill={c.line}/>
      <ellipse cx="138" cy="84" rx="2" ry="3" fill={c.line}/>
      <path d="M127 97 q3 2 6 0" stroke={c.line} strokeWidth="1.8"/>
      <path d="M113 93 q3 1 5 0 M141 93 q3 1 5 0" stroke={c.blush} strokeWidth="2"/>
      </g>
      </g>
      <g >
      <path d="M110 108 C120 116 136 116 146 108 L148 116 C138 124 118 124 108 116 Z" fill={c.accent} stroke={c.line} strokeWidth="2.2"/>
      <path className={animated ? "go-scarf-left" : undefined} d="M110 114 C92 118 78 104 60 108 C42 112 32 104 18 96 C22 110 34 124 52 126 C70 128 84 124 100 132 C106 134 110 126 110 120 Z" fill={c.accent} stroke={c.line} strokeWidth="2.2"/>
      </g>
    </svg>
  )
}

export function Rocket({ tone = 'light', title, animated = true, ...props }: ArtProps) {
  const c = palette[tone]
  return (
    <svg viewBox="0 0 120 200" fill="none" strokeLinecap="round" strokeLinejoin="round" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <g className={animated ? "go-flame" : undefined}>
      <path d="M48 150 C46 168 54 182 60 194 C66 182 74 168 72 150 Z" fill={c.accent} stroke={c.line} strokeWidth="2.2"/>
      <path d="M54 152 C54 164 58 172 60 178 C62 172 66 164 66 152 Z" fill={c.paper}/>
      </g>
      <path d="M60 10 C82 28 90 62 88 100 L86 146 L34 146 L32 100 C30 62 38 28 60 10 Z" fill={c.paper} stroke={c.line} strokeWidth="2.5"/>
      <path d="M44 34 C52 28 68 28 76 34" stroke={c.line} strokeWidth="2"/>
      <circle cx="60" cy="72" r="13" fill={c.accent} stroke={c.line} strokeWidth="2.5"/>
      <path d="M54 66 q4 -3 8 -2" stroke={c.paper} strokeWidth="2"/>
      <path d="M34 108 C20 116 14 134 16 152 L34 140 Z" fill={c.accent} stroke={c.line} strokeWidth="2.5"/>
      <path d="M86 108 C100 116 106 134 104 152 L86 140 Z" fill={c.accent} stroke={c.line} strokeWidth="2.5"/>
      <path d="M60 112 L60 146" stroke={c.line} strokeWidth="2.5"/>
      <path d="M40 146 L80 146 L76 154 L44 154 Z" fill={c.line} stroke={c.line} strokeWidth="2"/>
    </svg>
  )
}

export function Planet({ tone = 'light', title, animated = true, ...props }: ArtProps) {
  const c = palette[tone]
  return (
    <svg viewBox="0 0 200 160" fill="none" strokeLinecap="round" strokeLinejoin="round" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M34 104 C8 118 4 132 22 134 C48 137 108 122 156 96 C192 76 202 56 186 52 C176 50 162 52 146 58" stroke={c.line} strokeWidth="2.5"/>
      <circle cx="100" cy="82" r="46" fill={c.paper} stroke={c.line} strokeWidth="2.5"/>
      <path d="M60 104 C82 108 118 98 146 80" stroke={c.line} strokeWidth="2"/>
      <path d="M34 104 C8 118 4 132 22 134 C48 137 108 122 156 96" stroke={c.line} strokeWidth="2.5"/>
      <path d="M74 60 q10 -8 22 -4" stroke={c.accent} strokeWidth="3"/>
      <circle cx="118" cy="64" r="5" fill={c.accent}/>
      <circle cx="86" cy="92" r="3" fill={c.line}/>
    </svg>
  )
}

export function Moon({ tone = 'light', title, animated = true, ...props }: ArtProps) {
  const c = palette[tone]
  return (
    <svg viewBox="0 0 120 160" fill="none" strokeLinecap="round" strokeLinejoin="round" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M70 10 C34 22 18 60 28 96 C38 132 72 152 106 146 C74 132 56 104 56 74 C56 46 64 24 70 10 Z" fill={c.paper} stroke={c.line} strokeWidth="2.5"/>
      <path d="M44 70 l4 3 M40 96 q5 2 9 -1 M56 124 l5 2" stroke={c.line} strokeWidth="2"/>
    </svg>
  )
}

export function Star({ tone = 'light', title, animated = true, ...props }: ArtProps) {
  const c = palette[tone]
  return (
    <svg viewBox="0 0 40 40" fill="none" strokeLinecap="round" strokeLinejoin="round" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M20 4 L24 15 L36 16 L27 23 L30 35 L20 28 L10 35 L13 23 L4 16 L16 15 Z" fill={c.paper} stroke={c.line} strokeWidth="2"/>
    </svg>
  )
}
