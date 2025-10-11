"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonAction?: () => void
  secondaryButtonAction?: () => void
  backgroundColor?: "blue" | "gradient" | "white" | "gray"
  showStats?: boolean
}

export function CTASection({
  title = "¿Listo para transformar tu negocio?",
  description = "Únete a miles de empresas que ya confían en GO Admin para gestionar sus operaciones diarias de manera eficiente.",
  primaryButtonText = "Comenzar Prueba Gratuita",
  secondaryButtonText = "Solicitar Demo",
  primaryButtonAction,
  secondaryButtonAction,
  backgroundColor = "blue",
  showStats = true,
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

  const getBackgroundClasses = () => {
    switch (backgroundColor) {
      case "gradient":
        return "bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden"
      case "white":
        return "bg-white"
      case "gray":
        return "bg-gradient-to-br from-gray-50 to-white"
      default:
        return "bg-blue-600"
    }
  }

  const getTextClasses = () => {
    return backgroundColor === "white" || backgroundColor === "gray" ? "text-gray-900" : "text-white"
  }

  const getDescriptionClasses = () => {
    return backgroundColor === "white" || backgroundColor === "gray"
      ? "text-gray-600"
      : backgroundColor === "gradient"
        ? "text-blue-100"
        : "text-blue-100"
  }

  const getPrimaryButtonClasses = () => {
    return backgroundColor === "white" || backgroundColor === "gray"
      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
      : "bg-white text-blue-600 hover:bg-gray-100"
  }

  const getSecondaryButtonClasses = () => {
    return backgroundColor === "white" || backgroundColor === "gray"
      ? "border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
      : "border-white text-blue-600 hover:bg-white hover:text-blue-600 bg-transparent"
  }

  return (
    <section className={`py-20 px-4 ${getBackgroundClasses()}`}>
      {backgroundColor === "gradient" && <div className="absolute inset-0 bg-black/20"></div>}

      <div className="container mx-auto text-center relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${getTextClasses()}`}>{title}</h2>
        <p className={`mb-10 max-w-3xl mx-auto text-lg leading-relaxed ${getDescriptionClasses()}`}>{description}</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button
            size="lg"
            className={`shadow-xl text-lg px-8 py-4 font-semibold ${getPrimaryButtonClasses()}`}
            onClick={handlePrimaryClick}
          >
            {primaryButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={`border-2 text-lg px-8 py-4 font-semibold ${getSecondaryButtonClasses()}`}
            onClick={handleSecondaryClick}
          >
            {secondaryButtonText}
          </Button>
        </div>

        {showStats && (
          <div className={`text-sm ${getDescriptionClasses()}`}>
            <p>✓ Prueba gratuita de 14 días ✓ Sin tarjeta de crédito ✓ Configuración en 5 minutos</p>
          </div>
        )}
      </div>
    </section>
  )
}
