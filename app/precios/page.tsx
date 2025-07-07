"use client"

import { ArrowRight, Check, Star } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PreciosPage() {
  const plans = [
    {
      name: "Plan Mensual",
      price: "$20",
      period: "/mes",
      description: "Perfecto para empezar sin compromisos",
      features: [
        "Todos los 15 módulos incluidos",
        "Usuarios ilimitados",
        "Sucursales ilimitadas",
        "Soporte técnico 24/7",
        "Backup diario automático",
        "Todas las integraciones premium",
        "Reportes avanzados",
        "API completa",
      ],
      popular: false,
      color: "border-gray-200",
    },
    {
      name: "Plan Anual",
      price: "$196",
      period: "/año",
      description: "La opción más popular - Ahorra 2 meses",
      features: [
        "Todo del plan mensual incluido",
        "2 meses completamente gratis",
        "Soporte técnico prioritario",
        "Onboarding personalizado 1:1",
        "Reportes avanzados exclusivos",
        "Acceso anticipado a nuevas funciones",
        "Consultoría especializada",
        "SLA garantizado 99.9%",
      ],
      popular: true,
      color: "border-blue-600",
    },
  ]

  const faqs = [
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer:
        "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejan inmediatamente y se facturan de forma proporcional.",
    },
    {
      question: "¿Hay costos de implementación?",
      answer:
        "No hay costos de implementación para los planes Starter y Professional. El plan Enterprise incluye implementación dedicada sin costo adicional.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos todas las tarjetas de crédito principales, transferencias bancarias y PayPal. Para planes anuales ofrecemos descuentos especiales.",
    },
    {
      question: "¿Hay límites en el volumen de transacciones?",
      answer:
        "No hay límites en el número de transacciones, productos, clientes o almacenamiento en ninguno de nuestros planes.",
    },
    {
      question: "¿Ofrecen descuentos por pago anual?",
      answer: "Sí, ofrecemos 2 meses gratis al pagar anualmente (equivale a 16.7% de descuento) en todos los planes.",
    },
    {
      question: "¿Qué incluye el soporte técnico?",
      answer:
        "Incluye chat en vivo, soporte por email, base de conocimientos, tutoriales en video y onboarding personalizado según el plan.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GO</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GO Admin</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/caracteristicas" className="text-gray-600 hover:text-blue-600 transition-colors">
                Características
              </Link>
              <Link href="/integraciones" className="text-gray-600 hover:text-blue-600 transition-colors">
                Integraciones
              </Link>
              <Link href="/precios" className="text-blue-600 font-medium">
                Precios
              </Link>
              <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contacto
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.open("https://app.goadmin.io/auth/login", "_blank")}
              >
                Iniciar Sesión
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Prueba Gratis</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800">Precios Transparentes</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Planes que se adaptan a tu <span className="text-blue-600">crecimiento</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Desde pequeños negocios hasta grandes empresas. Encuentra el plan perfecto para tu organización con precios
            transparentes y sin sorpresas.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>14 días gratis</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Sin permanencia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancela cuando quieras</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.color} ${plan.popular ? "border-2 scale-105 shadow-2xl" : "border"} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-6 py-2">
                      <Star className="h-4 w-4 mr-1" />
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-center justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-600 text-lg ml-2">{plan.period}</span>}
                    </div>
                    {plan.period && <p className="text-sm text-gray-500 mt-2">por organización</p>}
                    {plan.name === "Plan Anual" && (
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block mb-2">
                        <span className="font-semibold">Equivale a $16.33/mes</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Contactar Ventas" : "Comenzar Prueba Gratuita"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comparación Detallada</h2>
            <p className="text-gray-600">Todas las características incluidas en cada plan</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Características</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-purple-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Usuarios", starter: "5", professional: "Ilimitados", enterprise: "Ilimitados" },
                  { feature: "Sucursales", starter: "2", professional: "Ilimitadas", enterprise: "Ilimitadas" },
                  { feature: "Módulos POS", starter: "✓", professional: "✓", enterprise: "✓" },
                  { feature: "Inventario", starter: "✓", professional: "✓", enterprise: "✓" },
                  { feature: "CRM", starter: "✓", professional: "✓", enterprise: "✓" },
                  { feature: "PMS Hotel", starter: "✗", professional: "✓", enterprise: "✓" },
                  { feature: "HRM", starter: "✗", professional: "✓", enterprise: "✓" },
                  { feature: "Finanzas", starter: "✗", professional: "✓", enterprise: "✓" },
                  { feature: "Reportes Avanzados", starter: "✗", professional: "✓", enterprise: "✓" },
                  { feature: "API Completa", starter: "✗", professional: "✓", enterprise: "✓" },
                  { feature: "Soporte", starter: "Email", professional: "24/7", enterprise: "Dedicado" },
                  { feature: "SLA", starter: "✗", professional: "99%", enterprise: "99.9%" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.starter}</td>
                    <td className="py-4 px-6 text-center text-blue-600 font-medium">{row.professional}</td>
                    <td className="py-4 px-6 text-center text-purple-600 font-medium">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600">Resolvemos las dudas más comunes sobre nuestros precios</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Prueba GO Admin gratis por 14 días. No necesitas tarjeta de crédito y puedes cancelar en cualquier momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Comenzar Prueba Gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
            >
              Hablar con Ventas
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
