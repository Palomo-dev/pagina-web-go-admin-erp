"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonAction?: () => void
  secondaryButtonText?: string
  secondaryButtonAction?: () => void
  variant?: "blue" | "gradient" | "white" | "gray"
  showStats?: boolean
  stats?: Array<{ label: string; value: string }>
}

export function CTASection({
  title = "¿Listo para transformar tu negocio?",
  description = "Únete a cientos de empresas que ya confían en GO Admin para gestionar sus operaciones diarias de manera eficiente.",
  primaryButtonText = "Prueba Gratuita 14 Días",
  primaryButtonAction,
  secondaryButtonText = "Solicitar Demo",
  secondaryButtonAction,
  variant = "blue",
  showStats = false,
  stats = [
    { label: "Empresas activas", value: "500+" },
    { label: "Países", value: "15+" },
    { label: "Satisfacción", value: "98%" },
  ],
}: CTASectionProps) {
  const handlePrimaryClick = () => {
    if (primaryButtonAction) {
      primaryButtonAction()
    } else {
      window.open("https://app.goadmin.io/auth/signup", "_blank")
    }
  }

  const handleSecondaryClick = () => {
    if (secondaryButtonAction) {
      secondaryButtonAction()
    } else {
      window.open("https://app.goadmin.io/auth/signup", "_blank")
    }
  }

  const variantClasses = {
    blue: "bg-blue-600",
    gradient: "bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700",
    white: "bg-white",
    gray: "bg-gray-50",
  }

  const textColorClasses = {
    blue: "text-white",
    gradient: "text-white",
    white: "text-gray-900",
    gray: "text-gray-900",
  }

  const descriptionColorClasses = {
    blue: "text-blue-100",
    gradient: "text-blue-100",
    white: "text-gray-600",
    gray: "text-gray-600",
  }

  const primaryButtonClasses = {
    blue: "bg-white text-blue-600 hover:bg-gray-100",
    gradient: "bg-white text-blue-600 hover:bg-gray-100",
    white: "bg-blue-600 text-white hover:bg-blue-700",
    gray: "bg-blue-600 text-white hover:bg-blue-700",
  }

  const secondaryButtonClasses = {
    blue: "border-white text-white hover:bg-white hover:text-blue-600",
    gradient: "border-white text-white hover:bg-white hover:text-blue-600",
    white: "border-blue-600 text-blue-600 hover:bg-blue-50",
    gray: "border-blue-600 text-blue-600 hover:bg-blue-50",
  }

  return (
    <section className={`py-20 px-4 relative overflow-hidden ${variantClasses[variant]}`}>
      {variant === "gradient" && <div className="absolute inset-0 bg-black/20"></div>}

      <div className="container mx-auto text-center relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textColorClasses[variant]}`}>{title}</h2>
        <p className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto ${descriptionColorClasses[variant]}`}>
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className={`${primaryButtonClasses[variant]} shadow-lg text-lg px-8 py-6`}
            onClick={handlePrimaryClick}
          >
            {primaryButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          {secondaryButtonText && (
            <Button
              size="lg"
              variant="outline"
              className={`${secondaryButtonClasses[variant]} bg-transparent text-lg px-8 py-6`}
              onClick={handleSecondaryClick}
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>

        {showStats && (
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${textColorClasses[variant]}`}>{stat.value}</div>
                <div className={`text-sm ${descriptionColorClasses[variant]}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Decorative Elements for Gradient Variant */}
      {variant === "gradient" && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/5 rounded-full"></div>
        </div>
      )}
    </section>
  )
}
