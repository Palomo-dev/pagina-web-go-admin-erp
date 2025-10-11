"use client"

import { Calendar, CreditCard, ArrowRight, Check } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PricingPlan {
  name: string
  price: number
  period: "month" | "year"
  originalPrice?: number
  savings?: string
  description: string
  features: string[]
  popular?: boolean
  additionalFeatures?: string[]
}

interface PricingTableProps {
  plans?: PricingPlan[]
  showAllIncluded?: boolean
  showFAQ?: boolean
  showGuarantee?: boolean
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Plan Mensual",
    price: 20,
    period: "month",
    description: "Perfecto para empezar sin compromisos",
    features: [
      "Todos los 15 módulos incluidos",
      "Sucursales y usuarios ilimitados",
      "Soporte técnico por chat y email",
      "Integraciones premium incluidas",
      "Backup automático diario",
    ],
  },
  {
    name: "Plan Anual",
    price: 196,
    period: "year",
    originalPrice: 240,
    savings: "Ahorra $44 al año",
    description: "El más elegido por empresas exitosas",
    popular: true,
    features: [
      "Todos los 15 módulos incluidos",
      "Sucursales y usuarios ilimitados",
      "Soporte técnico por chat y email",
      "Integraciones premium incluidas",
      "Backup automático diario",
    ],
    additionalFeatures: [
      "2 meses completamente gratis",
      "Soporte técnico prioritario",
      "Onboarding personalizado 1:1",
      "Reportes avanzados exclusivos",
      "Acceso anticipado a nuevas funciones",
    ],
  },
]

const allIncludedFeatures = [
  { icon: "✅", title: "Todos los 15 Módulos", desc: "POS, Inventario, PMS, CRM, HRM, Finanzas y más" },
  { icon: "🏢", title: "Sucursales Ilimitadas", desc: "Gestiona todas tus ubicaciones desde un solo lugar" },
  { icon: "👥", title: "Usuarios Ilimitados", desc: "Agrega todo tu equipo sin costo adicional" },
  { icon: "📊", title: "Reportes Avanzados", desc: "Dashboards personalizables y métricas en tiempo real" },
  { icon: "🔒", title: "Seguridad Empresarial", desc: "Autenticación MFA, roles granulares, auditoría completa" },
  { icon: "🌐", title: "Integraciones Premium", desc: "Stripe, MercadoPago, QuickBooks, Shopify y más" },
  { icon: "📱", title: "Apps Móviles", desc: "iOS y Android para gestión sobre la marcha" },
  { icon: "☁️", title: "Backup Automático", desc: "Respaldos diarios automáticos en la nube" },
  { icon: "🎯", title: "Soporte Técnico", desc: "Chat en vivo, email y base de conocimientos" },
]

const faqItems = [
  {
    q: "¿Hay costos ocultos o módulos premium?",
    a: "No. El precio incluye acceso completo a todos los módulos, integraciones y características. Sin sorpresas.",
  },
  {
    q: "¿Puedo cambiar de plan mensual a anual?",
    a: "Sí, puedes cambiar en cualquier momento. Al cambiar a anual, se aplicará el descuento proporcionalmente.",
  },
  {
    q: "¿Qué incluye el soporte técnico?",
    a: "Chat en vivo, soporte por email, base de conocimientos completa y onboarding personalizado.",
  },
  {
    q: "¿Hay límite de transacciones o almacenamiento?",
    a: "No hay límites en transacciones, productos, clientes o almacenamiento. Úsalo sin restricciones.",
  },
]

export function PricingTable({
  plans = defaultPlans,
  showAllIncluded = true,
  showFAQ = true,
  showGuarantee = true,
}: PricingTableProps) {
  const handleSignupClick = () => {
    window.open("https://app.goadmin.io/auth/signup", "_blank")
  }

  return (
    <section id="precios" className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Precios Transparentes</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Un solo plan, <span className="text-blue-600">todo incluido</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Sin límites ocultos, sin módulos extra. Acceso completo a todos los módulos desde el primer día con soporte
            técnico incluido.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Sin permanencia</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Cancela cuando quieras</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>14 días gratis</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-blue-600 bg-gradient-to-br from-sky-50 to-blue-50 transform hover:-translate-y-1"
                  : "border-2 border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 text-sm font-bold shadow-lg">
                    🔥 AHORRA 18% • MÁS POPULAR
                  </Badge>
                </div>
              )}
              <div
                className={`absolute top-0 left-0 w-full h-1 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-sky-600"
                    : "bg-gradient-to-r from-blue-500 to-blue-600"
                }`}
              ></div>

              <CardHeader className={`text-center pb-6 ${plan.popular ? "pt-10" : "pt-8"}`}>
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      plan.popular ? "bg-gradient-to-br from-sky-100 to-blue-100" : "bg-blue-100"
                    }`}
                  >
                    {plan.period === "month" ? (
                      <Calendar className="h-8 w-8 text-blue-600" />
                    ) : (
                      <CreditCard className="h-8 w-8 text-blue-600" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-center mb-2">
                    {plan.originalPrice && (
                      <div className="text-right mr-3">
                        <div className="text-lg text-gray-500 line-through">${plan.originalPrice}</div>
                      </div>
                    )}
                    <span className={`text-5xl font-bold ${plan.popular ? "text-blue-600" : "text-gray-900"}`}>
                      ${plan.price}
                    </span>
                    <div className="ml-2">
                      <div className="text-gray-600 text-lg">/{plan.period === "month" ? "mes" : "año"}</div>
                      <div className="text-sm text-gray-500">por organización</div>
                    </div>
                  </div>
                  {plan.savings && (
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block mb-2">
                      <span className="font-semibold">{plan.savings}</span>
                    </div>
                  )}
                  <div className="text-sm text-gray-500">
                    {plan.period === "month"
                      ? "Facturación mensual • Sin permanencia"
                      : "Equivale a $16.33/mes • Facturación anual"}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-4 md:px-8 pb-8">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.additionalFeatures && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3">✨ Todo del plan mensual, PLUS:</h4>
                    <div className="space-y-3">
                      {plan.additionalFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-blue-600" />
                          </div>
                          <span className="text-blue-800 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleSignupClick}
                  className={`w-full text-lg py-3 mb-4 shadow-lg ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {plan.popular ? "🚀 Comenzar con Descuento Anual" : "Comenzar Prueba Gratuita"}
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  14 días gratis •{" "}
                  {plan.popular ? "Garantía de devolución 30 días" : "No se requiere tarjeta de crédito"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Included Section */}
        {showAllIncluded && (
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Todo incluido en ambos planes</h3>
              <p className="text-gray-600">Sin restricciones, sin módulos premium, sin sorpresas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allIncludedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-white border border-gray-100">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {showFAQ && (
          <div className="max-w-4xl mx-auto mb-16 px-2">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Preguntas Frecuentes</h3>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Guarantee Section */}
        {showGuarantee && (
          <div className="max-w-4xl mx-auto px-2">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 md:p-8 text-center border border-green-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantía de 30 días</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Si no estás completamente satisfecho con GO Admin en los primeros 30 días, te devolvemos el 100% de tu
                dinero. Sin preguntas, sin complicaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleSignupClick}>
                  Probar 14 Días Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Hablar con Ventas
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-16 text-center px-2">
          <p className="text-gray-500 mb-6">Más de 500 empresas confían en GO Admin</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60">
            <div className="text-2xl">🏨</div>
            <div className="text-2xl">🍽️</div>
            <div className="text-2xl">🛍️</div>
            <div className="text-2xl">💪</div>
            <div className="text-2xl">🚌</div>
          </div>
        </div>
      </div>
    </section>
  )
}
