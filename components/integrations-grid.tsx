"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

/**
 * IntegrationsGrid — Marquee infinito horizontal con logos desplazándose.
 *
 * Diseño inspirado en las landings de Vercel, Supabase y Stripe:
 * dos filas de pills con glassmorphism que se desplazan continuamente
 * en direcciones opuestas. Al hover, la animación se pausa.
 *
 * Animaciones CSS puras (sin JS) para máximo rendimiento.
 */

type Integration = {
  name: string
}

// Fila 1 — Canales + Pagos
const integrationsRow1: Integration[] = [
  { name: "Airbnb" },
  { name: "Booking.com" },
  { name: "Expedia Group" },
  { name: "Google Vacation Rentals" },
  { name: "TripAdvisor" },
  { name: "Bancolombia" },
  { name: "Bre-B" },
  { name: "Mercado Pago" },
  { name: "PayPal" },
  { name: "PayU" },
  { name: "Redeban Multicolor" },
]

// Fila 2 — Pagos globales + Publicidad + Delivery + Social + Mensajería
const integrationsRow2: Integration[] = [
  { name: "Stripe" },
  { name: "Wompi" },
  { name: "Google Ads" },
  { name: "iFood" },
  { name: "Rappi" },
  { name: "Uber Eats" },
  { name: "Meta" },
  { name: "TikTok Business" },
  { name: "SendGrid" },
  { name: "Twilio" },
  { name: "WhatsApp Business" },
]

function getInitial(name: string): string {
  return name.charAt(0).toUpperCase()
}

export function IntegrationsGrid({ className }: { className?: string }) {
  const { t } = useLanguage()

  return (
    <section className={`w-full ${className ?? ""}`}>
      {/* Encabezado centrado */}
      <div className="text-center mb-12">
        <Badge className="bg-blue-100 text-blue-700 border-transparent">
          {t("integrations.badge")}
        </Badge>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {t("integrations.title")}
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600">
          {t("integrations.subtitle")}
        </p>
      </div>

      {/* Fila 1 — se desplaza hacia la izquierda */}
      <div className="marquee-container overflow-hidden">
        <div className="marquee-track animate-marquee-left flex gap-4 w-max">
          {[...integrationsRow1, ...integrationsRow1].map((integration, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex items-center gap-3 bg-white/80 backdrop-blur border border-gray-200 rounded-full px-5 py-2.5 hover:border-blue-400 hover:shadow-md hover:scale-105 transition-all whitespace-nowrap shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                {getInitial(integration.name)}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fila 2 — se desplaza hacia la derecha */}
      <div className="marquee-container overflow-hidden mt-4">
        <div className="marquee-track animate-marquee-right flex gap-4 w-max">
          {[...integrationsRow2, ...integrationsRow2].map((integration, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex items-center gap-3 bg-white/80 backdrop-blur border border-gray-200 rounded-full px-5 py-2.5 hover:border-blue-400 hover:shadow-md hover:scale-105 transition-all whitespace-nowrap shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                {getInitial(integration.name)}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Botón final */}
      <div className="text-center mt-8">
        <Link href="/integraciones">
          <Button variant="outline" className="gap-2">
            {t("integrations.viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Animaciones CSS del marquee */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default IntegrationsGrid
