"use client"

import { useState } from "react"
import { Check, Zap, Users, Building2, Brain, Headphones } from "lucide-react"
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

  // Planes con precios y descripciones mejoradas
  const plans = [
    {
      id: "pro",
      name: "Pro",
      tagline: lang === "es" ? "Para Emprendedores" : "For Entrepreneurs",
      description: lang === "es" 
        ? "Perfecto para startups y emprendedores que inician su transformación digital"
        : "Perfect for startups and entrepreneurs beginning their digital transformation",
      monthlyPrice: 20,
      annualPrice: 199,
      freeDays: 15,
      modules: 11,
      branches: 1,
      users: 3,
      aiCredits: 500,
      features: [
        { icon: Building2, text: lang === "es" ? "1 sucursal" : "1 branch" },
        { icon: Users, text: lang === "es" ? "Hasta 3 usuarios" : "Up to 3 users" },
        { icon: Zap, text: lang === "es" ? "11 módulos esenciales" : "11 essential modules" },
        { icon: Brain, text: lang === "es" ? "500 créditos IA/mes" : "500 AI credits/month" },
        { text: lang === "es" ? "Soporte por email" : "Email support" },
      ],
      color: "blue",
    },
    {
      id: "business",
      name: "Business",
      tagline: lang === "es" ? "Para Negocios en Crecimiento" : "For Growing Businesses",
      description: lang === "es"
        ? "Escalabilidad y características avanzadas para empresas en expansión"
        : "Scalability and advanced features for expanding businesses",
      monthlyPrice: 49,
      annualPrice: 490,
      freeDays: 30,
      modules: 16,
      branches: 5,
      users: 10,
      aiCredits: 2000,
      recommended: true,
      features: [
        { icon: Building2, text: lang === "es" ? "Hasta 5 sucursales" : "Up to 5 branches" },
        { icon: Users, text: lang === "es" ? "Hasta 10 usuarios" : "Up to 10 users" },
        { icon: Zap, text: lang === "es" ? "16 módulos avanzados" : "16 advanced modules" },
        { icon: Brain, text: lang === "es" ? "2,000 créditos IA/mes" : "2,000 AI credits/month" },
        { icon: Headphones, text: lang === "es" ? "Soporte prioritario 24/7" : "24/7 priority support" },
      ],
      color: "blue",
    },
    {
      id: "ultimate",
      name: "Ultimate",
      tagline: lang === "es" ? "Para Empresas Grandes" : "For Enterprise",
      description: lang === "es"
        ? "Solución completa con todos los módulos y soporte dedicado"
        : "Complete solution with all modules and dedicated support",
      monthlyPrice: 199,
      annualPrice: 1990,
      freeDays: 30,
      modules: 18,
      branches: 15,
      users: 30,
      aiCredits: 10000,
      features: [
        { icon: Building2, text: lang === "es" ? "Hasta 15 sucursales" : "Up to 15 branches" },
        { icon: Users, text: lang === "es" ? "Hasta 30 usuarios" : "Up to 30 users" },
        { icon: Zap, text: lang === "es" ? "18 módulos (todos)" : "18 modules (all)" },
        { icon: Brain, text: lang === "es" ? "10,000 créditos IA/mes" : "10,000 AI credits/month" },
        { icon: Headphones, text: lang === "es" ? "Soporte dedicado 24/7" : "24/7 dedicated support" },
      ],
      color: "blue",
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
    <section id="precios" className="py-24 px-4 md:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-full font-medium">
            {lang === "es" ? "Planes Simples y Transparentes" : "Simple & Transparent Pricing"}
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {lang === "es" ? "Elige tu plan" : "Choose your plan"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            {lang === "es" 
              ? "Sin sorpresas, sin contratos a largo plazo. Cancela cuando quieras."
              : "No surprises, no long-term contracts. Cancel anytime."}
          </p>

          {/* Toggle Mensual/Anual */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className={`font-semibold text-lg transition-colors ${!isAnnual ? "text-gray-900" : "text-gray-500"}`}>
              {lang === "es" ? "Mensual" : "Monthly"}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-12 w-24 items-center rounded-full transition-all duration-300 ${
                isAnnual ? "bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-10 w-10 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                  isAnnual ? "translate-x-12" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`font-semibold text-lg transition-colors ${isAnnual ? "text-gray-900" : "text-gray-500"}`}>
              {lang === "es" ? "Anual" : "Annual"}
            </span>
            {isAnnual && (
              <Badge className="ml-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 hover:from-green-100 hover:to-emerald-100 font-semibold px-4 py-2">
                {lang === "es" ? "Ahorra 20%" : "Save 20%"}
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => {
            const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice
            const discount = isAnnual ? calculateDiscount(plan.monthlyPrice, plan.annualPrice) : 0
            const monthlyEquivalent = isAnnual ? calculateMonthlyEquivalent(plan.annualPrice) : null

            return (
              <div key={plan.id} className={`relative ${plan.recommended ? "md:scale-105 md:-mt-4" : ""}`}>
                {/* Recommended glow effect */}
                {plan.recommended && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-20" />
                )}

                <Card
                  className={`relative overflow-hidden transition-all duration-300 h-full ${
                    plan.recommended
                      ? "border-2 border-blue-500 shadow-2xl"
                      : "border border-gray-200 hover:shadow-lg hover:border-gray-300"
                  }`}
                >
                  {/* Gradient top bar */}
                  <div className={`h-2 w-full ${
                    plan.recommended 
                      ? "bg-gradient-to-r from-blue-600 to-blue-500" 
                      : "bg-gradient-to-r from-gray-300 to-gray-200"
                  }`} />

                  <CardHeader className="pb-8 pt-8">
                    {/* Recommended Badge */}
                    {plan.recommended && (
                      <div className="mb-4">
                        <Badge className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 font-semibold shadow-lg">
                          {lang === "es" ? "⭐ Más Popular" : "⭐ Most Popular"}
                        </Badge>
                      </div>
                    )}

                    {/* Plan name and tagline */}
                    <div className="mb-3">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-sm font-medium text-blue-600">{plan.tagline}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Price Display */}
                    <div className="mb-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl font-bold text-gray-900">${currentPrice}</span>
                        <span className="text-gray-600 font-medium">{isAnnual ? "/año" : "/mes"}</span>
                      </div>
                      {isAnnual ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            {lang === "es" ? "Solo" : "Just"} ${monthlyEquivalent}/mes
                          </span>
                          <Badge className="bg-green-100 text-green-700 text-xs font-semibold">
                            {discount}% {lang === "es" ? "descuento" : "off"}
                          </Badge>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-600">
                          {lang === "es" ? "Facturación mensual" : "Monthly billing"}
                        </div>
                      )}
                    </div>

                    {/* Free Days */}
                    <div className="text-center mb-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm">
                        <span className="font-bold text-blue-600">{plan.freeDays}</span>
                        {` ${lang === "es" ? "días de prueba gratis" : "free trial days"}`}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={handleSignupClick}
                      className={`w-full mb-6 h-12 font-semibold text-base transition-all duration-300 ${
                        plan.recommended
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl text-white"
                          : "bg-gray-800 hover:bg-gray-900 text-white border border-gray-700"
                      }`}
                    >
                      {lang === "es" ? "Comenzar Gratis" : "Start Free"}
                    </Button>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Key Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{plan.modules}</div>
                        <div className="text-xs text-gray-600 font-medium mt-1">{lang === "es" ? "Módulos" : "Modules"}</div>
                      </div>
                      <div className="text-center border-l border-gray-300">
                        <div className="text-3xl font-bold text-blue-600">{plan.branches}</div>
                        <div className="text-xs text-gray-600 font-medium mt-1">{lang === "es" ? "Sucursales" : "Branches"}</div>
                      </div>
                      <div className="text-center border-t border-gray-300">
                        <div className="text-3xl font-bold text-indigo-600">{plan.users}</div>
                        <div className="text-xs text-gray-600 font-medium mt-1">{lang === "es" ? "Usuarios" : "Users"}</div>
                      </div>
                      <div className="text-center border-l border-t border-gray-300">
                        <div className="text-3xl font-bold text-purple-600">{(plan.aiCredits / 1000).toFixed(1)}K</div>
                        <div className="text-xs text-gray-600 font-medium mt-1">{lang === "es" ? "Créditos IA" : "AI Credits"}</div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-200" />

                    {/* Features List */}
                    <div className="space-y-4 pb-2">
                      {plan.features.map((feature, idx) => {
                        const Icon = feature.icon ? feature.icon : null
                        return (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                              {Icon ? (
                                <Icon className="h-5 w-5 text-blue-600" />
                              ) : (
                                <Check className="h-5 w-5 text-green-600" />
                              )}
                            </div>
                            <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature.text}</span>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* What's Included */}
        {showAllIncluded && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {lang === "es" ? "Incluido en Todos los Planes" : "Included in All Plans"}
              </h3>
              <p className="text-lg text-gray-600">
                {lang === "es" 
                  ? "Sin límites ocultos, sin módulos premium, sin sorpresas"
                  : "No hidden limits, no premium modules, no surprises"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: lang === "es" ? "Todos los Módulos" : "All Modules",
                  desc: lang === "es" 
                    ? "Acceso completo a POS, Inventario, CRM, Finanzas, RRHH y más"
                    : "Full access to POS, Inventory, CRM, Finance, HR and more",
                },
                {
                  icon: Headphones,
                  title: lang === "es" ? "Soporte 24/7" : "24/7 Support",
                  desc: lang === "es" 
                    ? "Chat en vivo y soporte técnico siempre disponible"
                    : "Live chat and technical support always available",
                },
                {
                  icon: Brain,
                  title: lang === "es" ? "IA Integrada" : "Built-in AI",
                  desc: lang === "es" 
                    ? "Automatización inteligente en todos tus procesos"
                    : "Smart automation across all your processes",
                },
                {
                  icon: Building2,
                  title: lang === "es" ? "Integraciones Premium" : "Premium Integrations",
                  desc: lang === "es" 
                    ? "Conecta con tus herramientas favoritas sin costo extra"
                    : "Connect with your favorite tools at no extra cost",
                },
                {
                  icon: Users,
                  title: lang === "es" ? "Seguridad Empresarial" : "Enterprise Security",
                  desc: lang === "es" 
                    ? "Encriptación de datos, backups automáticos y cumplimiento"
                    : "Data encryption, automatic backups and compliance",
                },
                {
                  icon: Check,
                  title: lang === "es" ? "Garantía de 30 Días" : "30-Day Guarantee",
                  desc: lang === "es" 
                    ? "Devolución 100% si no estás completamente satisfecho"
                    : "100% refund if you're not completely satisfied",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
