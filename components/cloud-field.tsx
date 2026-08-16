"use client";

import { useMemo } from "react";

interface CloudFieldProps {
  opacity?: number; // opacidad base, default 0.15
  count?: number; // número de nubes, default 5
  className?: string; // clases adicionales para el contenedor
  color?: "white" | "blue"; // color de las nubes, default "white"
}

// Generador pseudo-aleatorio determinístico basado en un seed
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export function CloudField({
  opacity = 0.15,
  count = 5,
  className = "",
  color = "white",
}: CloudFieldProps) {
  const clouds = useMemo(() => {
    return Array.from({ length: count }, (_, index) => {
      const seed = index + 1;
      const top = 5 + seededRandom(seed) * 80; // 5% - 85%
      const left = -10 + seededRandom(seed * 2) * 90; // -10% - 80%
      const width = 60 + seededRandom(seed * 3) * 80; // 60px - 140px
      const duration = 20 + seededRandom(seed * 5) * 25; // 20s - 45s
      const delay = -(seededRandom(seed * 7) * duration); // delay negativo
      const cloudOpacity = opacity * (0.7 + seededRandom(seed * 11) * 0.6); // variación de opacidad

      return {
        id: index,
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}px`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        opacity: cloudOpacity,
      };
    });
  }, [count, opacity]);

  const fillColor = color === "blue" ? "#3b82f6" : "white";

  return (
    <>
      <style jsx>{`
        @keyframes auth-cloud-drift {
          0% {
            transform: translateX(-30px);
          }
          100% {
            transform: translateX(calc(100vw + 30px));
          }
        }
      `}</style>

      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {clouds.map((cloud) => (
          <div
            key={cloud.id}
            className="absolute"
            style={{
              top: cloud.top,
              left: cloud.left,
              width: cloud.width,
              animation: `auth-cloud-drift ${cloud.duration} linear infinite`,
              animationDelay: cloud.delay,
            }}
          >
            <svg
              viewBox="0 0 120 60"
              fill="none"
              style={{ width: "100%", height: "auto" }}
            >
              <path
                d="M25 45 Q10 45 10 35 Q10 25 22 25 Q24 15 36 15 Q44 8 54 14 Q64 8 74 16 Q86 14 90 24 Q104 24 104 35 Q104 45 92 45 Z"
                fill={fillColor}
                opacity={cloud.opacity}
              />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
}

export default CloudField;
