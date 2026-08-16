'use client';

export default function HeroSceneBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Planeta que gira */}
      <div
        className="absolute top-1/4 right-[12%]"
        style={{ opacity: 0.35, animationFillMode: 'both', animation: 'auth-float 8s ease-in-out infinite' }}
      >
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <ellipse
            cx="70"
            cy="70"
            rx="65"
            ry="20"
            stroke="white"
            strokeWidth="2"
            opacity="0.4"
            transform="rotate(-20 70 70)"
          />
          <circle cx="70" cy="70" r="38" fill="white" opacity="0.15" />
          <circle cx="70" cy="70" r="38" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <g style={{ transformOrigin: '70px 70px', animation: 'auth-spin 30s linear infinite' }}>
            <path
              d="M55 55 Q62 48 70 52 Q78 56 75 62 Q72 68 65 66 Q58 64 55 55 Z"
              fill="white"
              opacity="0.35"
            />
            <path
              d="M72 78 Q80 74 85 80 Q88 86 82 88 Q76 90 72 84 Z"
              fill="white"
              opacity="0.3"
            />
            <path
              d="M50 72 Q56 70 58 76 Q56 82 50 80 Q46 77 50 72 Z"
              fill="white"
              opacity="0.25"
            />
          </g>
          <path
            d="M10 70 Q70 100 130 70"
            stroke="white"
            strokeWidth="2"
            opacity="0.3"
            fill="none"
            transform="rotate(-20 70 70)"
          />
        </svg>
      </div>

      {/* Nubes - 11 nubes con distintos tamaños/velocidades/posiciones */}
      {/* Nube 1 */}
      <div
        className="absolute"
        style={{
          top: '5%',
          left: 0,
          opacity: 0.2,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 25s linear infinite',
          animationDelay: '0s',
        }}
      >
        <svg width="120" height="76" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Nube 2 */}
      <div
        className="absolute"
        style={{
          top: '12%',
          left: 0,
          opacity: 0.18,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 35s linear infinite',
          animationDelay: '-5s',
        }}
      >
        <svg width="80" height="51" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Nube 3 */}
      <div
        className="absolute"
        style={{
          top: '18%',
          left: 0,
          opacity: 0.22,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 30s linear infinite',
          animationDelay: '-10s',
        }}
      >
        <svg width="160" height="102" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Nube 4 */}
      <div
        className="absolute"
        style={{
          top: '28%',
          left: 0,
          opacity: 0.15,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 40s linear infinite',
          animationDelay: '-3s',
        }}
      >
        <svg width="100" height="64" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Nube 5 */}
      <div
        className="absolute"
        style={{
          top: '38%',
          left: 0,
          opacity: 0.2,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 28s linear infinite',
          animationDelay: '-15s',
        }}
      >
        <svg width="140" height="89" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Nube 6 */}
      <div
        className="absolute"
        style={{
          top: '48%',
          left: 0,
          opacity: 0.18,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 45s linear infinite',
          animationDelay: '-8s',
        }}
      >
        <svg width="90" height="57" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Nube 7 */}
      <div
        className="absolute"
        style={{
          top: '58%',
          left: 0,
          opacity: 0.22,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 32s linear infinite',
          animationDelay: '-20s',
        }}
      >
        <svg width="130" height="83" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Nube 8 */}
      <div
        className="absolute"
        style={{
          top: '68%',
          left: 0,
          opacity: 0.16,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 38s linear infinite',
          animationDelay: '-12s',
        }}
      >
        <svg width="110" height="70" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Nube 9 */}
      <div
        className="absolute"
        style={{
          top: '75%',
          left: 0,
          opacity: 0.19,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 27s linear infinite',
          animationDelay: '-6s',
        }}
      >
        <svg width="150" height="96" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Nube 10 */}
      <div
        className="absolute"
        style={{
          top: '82%',
          left: 0,
          opacity: 0.2,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 42s linear infinite',
          animationDelay: '-18s',
        }}
      >
        <svg width="85" height="54" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Nube 11 */}
      <div
        className="absolute"
        style={{
          top: '90%',
          left: 0,
          opacity: 0.17,
          animationFillMode: 'both', animation: 'auth-cloud-drift-hero 33s linear infinite',
          animationDelay: '-25s',
        }}
      >
        <svg width="125" height="80" viewBox="0 0 110 70" fill="none">
          <path
            d="M25 55 Q25 40 40 40 Q46 25 62 30 Q76 20 86 33 Q100 33 100 48 Q100 60 85 60 L32 60 Q25 60 25 55 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Cohete con estela */}
      <div
        className="absolute bottom-[10%] right-[15%]"
        style={{
          opacity: 0.4,
          animationFillMode: 'both', animation: 'auth-rocket-float 6s ease-in-out infinite',
        }}
      >
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
          {/* Punta del cohete */}
          <path d="M28 5 L32 5 L36 28 L24 28 Z" fill="white" opacity="0.9" />
          {/* Cuerpo principal */}
          <rect x="24" y="28" width="12" height="45" rx="2" fill="white" opacity="0.85" />
          {/* Ventana */}
          <circle cx="30" cy="40" r="4" fill="white" opacity="0.6" stroke="white" strokeWidth="1" />
          {/* Aleta izquierda */}
          <path d="M24 60 L14 80 L24 72 Z" fill="white" opacity="0.8" />
          {/* Aleta derecha */}
          <path d="M36 60 L46 80 L36 72 Z" fill="white" opacity="0.8" />
          {/* Base del cohete */}
          <path d="M24 73 L36 73 L33 80 L27 80 Z" fill="white" opacity="0.85" />
          {/* Llama central */}
          <path
            d="M27 80 L30 98 L33 80 Z"
            fill="white"
            opacity="0.7"
            style={{ animation: 'auth-flicker 0.3s ease-in-out infinite' }}
          />
          {/* Llama izquierda */}
          <path
            d="M25 80 L26 92 L28 80 Z"
            fill="white"
            opacity="0.5"
            style={{ animation: 'auth-flicker 0.4s ease-in-out infinite', animationDelay: '0.1s' }}
          />
          {/* Llama derecha */}
          <path
            d="M32 80 L34 92 L35 80 Z"
            fill="white"
            opacity="0.5"
            style={{ animation: 'auth-flicker 0.35s ease-in-out infinite', animationDelay: '0.15s' }}
          />
        </svg>
      </div>

      {/* Cohete pequeño lejano decorativo */}
      <div
        className="absolute top-[15%] left-[8%]"
        style={{
          opacity: 0.15,
          animationFillMode: 'both', animation: 'auth-rocket-float 6s ease-in-out infinite',
          animationDelay: '-3s',
        }}
      >
        <svg width="40" height="67" viewBox="0 0 60 100" fill="none">
          {/* Punta del cohete */}
          <path d="M28 5 L32 5 L36 28 L24 28 Z" fill="white" opacity="0.9" />
          {/* Cuerpo principal */}
          <rect x="24" y="28" width="12" height="45" rx="2" fill="white" opacity="0.85" />
          {/* Ventana */}
          <circle cx="30" cy="40" r="4" fill="white" opacity="0.6" stroke="white" strokeWidth="1" />
          {/* Aleta izquierda */}
          <path d="M24 60 L14 80 L24 72 Z" fill="white" opacity="0.8" />
          {/* Aleta derecha */}
          <path d="M36 60 L46 80 L36 72 Z" fill="white" opacity="0.8" />
          {/* Base del cohete */}
          <path d="M24 73 L36 73 L33 80 L27 80 Z" fill="white" opacity="0.85" />
          {/* Llama central */}
          <path
            d="M27 80 L30 98 L33 80 Z"
            fill="white"
            opacity="0.7"
            style={{ animation: 'auth-flicker 0.3s ease-in-out infinite' }}
          />
          {/* Llama izquierda */}
          <path
            d="M25 80 L26 92 L28 80 Z"
            fill="white"
            opacity="0.5"
            style={{ animation: 'auth-flicker 0.4s ease-in-out infinite', animationDelay: '0.1s' }}
          />
          {/* Llama derecha */}
          <path
            d="M32 80 L34 92 L35 80 Z"
            fill="white"
            opacity="0.5"
            style={{ animation: 'auth-flicker 0.35s ease-in-out infinite', animationDelay: '0.15s' }}
          />
        </svg>
      </div>

      {/* Estrellas que titilan - 16 estrellas */}
      {/* Estrella 1 */}
      <div
        className="absolute"
        style={{
          top: '8%',
          left: '5%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '0s',
        }}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 2 */}
      <div
        className="absolute"
        style={{
          top: '15%',
          left: '18%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '0.5s',
        }}
      >
        <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 3 */}
      <div
        className="absolute"
        style={{
          top: '5%',
          left: '30%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '1s',
        }}
      >
        <svg width="10" height="10" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 4 */}
      <div
        className="absolute"
        style={{
          top: '22%',
          left: '8%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '1.5s',
        }}
      >
        <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 5 */}
      <div
        className="absolute"
        style={{
          top: '12%',
          left: '42%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '0.3s',
        }}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 6 */}
      <div
        className="absolute"
        style={{
          top: '30%',
          left: '25%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '2s',
        }}
      >
        <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 7 */}
      <div
        className="absolute"
        style={{
          top: '18%',
          left: '55%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '0.8s',
        }}
      >
        <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 8 */}
      <div
        className="absolute"
        style={{
          top: '8%',
          left: '68%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '1.2s',
        }}
      >
        <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 9 */}
      <div
        className="absolute"
        style={{
          top: '25%',
          left: '48%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '0.6s',
        }}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 10 */}
      <div
        className="absolute"
        style={{
          top: '35%',
          left: '15%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '2.5s',
        }}
      >
        <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 11 */}
      <div
        className="absolute"
        style={{
          top: '15%',
          left: '75%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '1.8s',
        }}
      >
        <svg width="10" height="10" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 12 */}
      <div
        className="absolute"
        style={{
          top: '28%',
          left: '62%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '0.4s',
        }}
      >
        <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 13 */}
      <div
        className="absolute"
        style={{
          top: '40%',
          left: '35%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '2.2s',
        }}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 14 */}
      <div
        className="absolute"
        style={{
          top: '20%',
          left: '85%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '1.6s',
        }}
      >
        <svg width="6" height="6" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 15 */}
      <div
        className="absolute"
        style={{
          top: '10%',
          left: '50%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '0.9s',
        }}
      >
        <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

      {/* Estrella 16 */}
      <div
        className="absolute"
        style={{
          top: '32%',
          left: '78%',
          opacity: 0.6,
          animationFillMode: 'both', animation: 'auth-twinkle 3s ease-in-out infinite',
          animationDelay: '2.8s',
        }}
      >
        <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" fill="white" />
        </svg>
      </div>

    </div>
  );
}
