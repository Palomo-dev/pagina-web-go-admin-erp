"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n"

interface PricingTableProps {
  showAllIncluded?: boolean
}

export function PricingTable({ showAllIncluded = true }: PricingTableProps) {
  const { lang } = useLanguage()
  const [isAnnual, setIsAnnual] = useState(false)

  const handleSignupClick = () => {
    window.open("https://app.goadmin.io/auth/signup", "_blank")
  }

  // Planes con precios
  const plans = [
    {
      id: "pro",
      name: lang === "es" ? "Pro" : "Pro",
      monthlyPrice: 20,
      annualPrice: 199,
      freeDays: 15,
      modules: 11,
      branches: 1,
      users: 3,
      aiCredits: 500,
      features: [
        lang === "es" ? "11 módulos incluidos" : "11 modules included",
        lang === "es" ? "1 sucursal" : "1 branch",
        lang === "es" ? "3 usuarios" : "3 users",
        lang === "es" ? "500 créditos IA" : "500 AI credits",
        lang === "es" ? "Soporte por email" : "Email support",
      ],
    },
    {
      id: "business",
      name: lang === "es" ? "Business" : "Business",
      monthlyPrice: 49,
      annualPrice: 490,
      freeDays: 30,
      modules: 16,
      branches: 5,
      users: 10,
      aiCredits: 2000,
      recommended: true,
      features: [
        lang === "es" ? "16 módulos incluidos" : "16 modules included",
        lang === "es" ? "5 sucursales" : "5 branches",
        lang === "es" ? "10 usuarios" : "10 users",
        lang === "es" ? "2,000 créditos IA" : "2,000 AI credits",
        lang === "es" ? "Soporte prioritario 24/7" : "24/7 priority support",
      ],
    },
    {
      id: "ultimate",
      name: lang === "es" ? "Ultimate" : "Ultimate",
      monthlyPrice: 199,
      annualPrice: 1990,
      freeDays: 30,
      modules: 18,
      branches: 15,
      users: 30,
      aiCredits: 10000,
      features: [
        lang === "es" ? "18 módulos (todos incluidos)" : "18 modules (all included)",
        lang === "es" ? "15 sucursales" : "15 branches",
        lang === "es" ? "30 usuarios" : "30 users",
        lang === "es" ? "10,000 créditos IA" : "10,000 AI credits",
        lang === "es" ? "Soporte dedicado 24/7" : "24/7 dedicated support",
      ],
    },
  ]

  // Calcular descuento
  const calculateDiscount = (monthlyPrice: number, annualPrice: number) => {
    const monthlyAnnual = monthlyPrice * 12
    const discount = ((monthlyAnnual - annualPrice) / monthlyAnnual) * 100
    return Math.round(discount)
  }

  // Calcular precio por mes en plan anual
  const calculateMonthlyEquivalent = (annualPrice: number) => {
    return (annualPrice / 12).toFixed(2)
  }

  return (
    <section id="precios" className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            {lang === "es" ? "Planes Flexibles y Profesionales" : "Flexible & Professional Plans"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {lang === "es" ? "Elige el plan perfecto" : "Choose the perfect plan"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {lang === "es" 
              ? "Comienza gratis, sin tarjeta de crédito. Upgrade cuando lo necesites."
              : "Start free, no credit card required. Upgrade when you need to."}
          </p>

          {/* Toggle Mensual/Anual */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium ${!isAnnual ? "text-gray-900" : "text-gray-500"}`}>
              {lang === "es" ? "Mensual" : "Monthly"}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors ${
                isAnnual ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-10" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? "text-gray-900" : "text-gray-500"}`}>
              {lang === "es" ? "Anual" : "Annual"}
            </span>
            {isAnnual && (
              <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                {lang === "es" ? "Ahorra hasta 20%" : "Save up to 20%"}
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice
            const discount = isAnnual ? calculateDiscount(plan.monthlyPrice, plan.annualPrice) : 0
            const monthlyEquivalent = isAnnual ? calculateMonthlyEquivalent(plan.annualPrice) : null

            return (
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  plan.recommended
                    ? "border-2 border-blue-600 ring-1 ring-blue-100 lg:scale-105"
                    : "border border-gray-200"
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 shadow-lg">
                      {lang === "es" ? "Más Popular" : "Most Popular"}
                    </Badge>
                  </div>
                )}

                {/* Top accent line */}
                <div className={`h-1 w-full ${plan.recommended ? "bg-blue-600" : "bg-gray-200"}`} />

                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>

                  {/* Price Display */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-gray-900">${currentPrice}</span>
                      <span className="text-gray-600">{isAnnual ? "/año" : "/mes"}</span>
                    </div>
                    {isAnnual && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">
                          {lang === "es" ? "Equivale a" : "Equals"} ${monthlyEquivalent}/mes
                        </span>
                        {discount > 0 && (
                          <Badge className="bg-green-100 text-green-800">
                            {lang === "es" ? `${discount}% descuento` : `${discount}% off`}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Free Days */}
                  <div className="text-sm text-gray-600 mb-6">
                    <span className="font-medium text-blue-600">{plan.freeDays}</span>{" "}
                    {lang === "es" ? "días gratis" : "free days"}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={handleSignupClick}
                    className={`w-full mb-6 ${
                      plan.recommended
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    {lang === "es" ? "Comenzar Gratis" : "Start Free"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{plan.modules}</div>
                      <div className="text-xs text-gray-600">{lang === "es" ? "módulos" : "modules"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{plan.branches}</div>
                      <div className="text-xs text-gray-600">{lang === "es" ? "sucursales" : "branches"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{plan.users}</div>
                      <div className="text-xs text-gray-600">{lang === "es" ? "usuarios" : "users"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{plan.aiCredits.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">{lang === "es" ? "créditos IA" : "AI credits"}</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* What's Included */}
        {showAllIncluded && (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === "es" ? "Incluido en Todos los Planes" : "Included in All Plans"}
              </h3>
              <p className="text-gray-600">
                {lang === "es" 
                  ? "Sin restricciones, sin módulos premium, sin sorpresas"
                  : "No restrictions, no premium modules, no surprises"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: lang === "es" ? "Todos los Módulos" : "All Modules",
                  desc: lang === "es" 
                    ? "POS, Inventario, CRM, Finanzas, RRHH y más"
                    : "POS, Inventory, CRM, Finance, HR and more",
                },
                {
                  title: lang === "es" ? "Soporte 24/7" : "24/7 Support",
                  desc: lang === "es" 
                    ? "Chat en vivo y soporte por email siempre disponible"
                    : "Live chat and email support always available",
                },
                {
                  title: lang === "es" ? "Integraciones Premium" : "Premium Integrations",
                  desc: lang === "es" 
                    ? "Conecta con tus herramientas favoritas"
                    : "Connect with your favorite tools",
                },
                {
                  title: lang === "es" ? "Backup Automático" : "Automatic Backups",
                  desc: lang === "es" 
                    ? "Tus datos están seguros y respaldados"
                    : "Your data is safe and backed up",
                },
                {
                  title: lang === "es" ? "Sin Configuración Técnica" : "No Technical Setup",
                  desc: lang === "es" 
                    ? "Comienza a usar en minutos, sin código"
                    : "Start using in minutes, no code needed",
                },
                {
                  title: lang === "es" ? "Garantía de 30 Días" : "30-Day Guarantee",
                  desc: lang === "es" 
                    ? "Devolución 100% si no estás satisfecho"
                    : "100% refund if not satisfied",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
