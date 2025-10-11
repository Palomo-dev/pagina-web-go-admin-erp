"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingTable } from "@/components/pricing-table"
import { CTASection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X } from "lucide-react"

export default function PreciosPage() {
  const comparisonFeatures = [
    { feature: "Todos los módulos incluidos", monthly: true, annual: true },
    { feature: "Usuarios ilimitados", monthly: true, annual: true },
    { feature: "Sucursales ilimitadas", monthly: true, annual: true },
    { feature: "Soporte por chat y email", monthly: true, annual: true },
    { feature: "Integraciones premium", monthly: true, annual: true },
    { feature: "Backup automático", monthly: true, annual: true },
    { feature: "Apps móviles iOS/Android", monthly: true, annual: true },
    { feature: "Soporte prioritario 24/7", monthly: false, annual: true },
    { feature: "Onboarding personalizado 1:1", monthly: false, annual: true },
    { feature: "Reportes avanzados exclusivos", monthly: false, annual: true },
    { feature: "Acceso anticipado a nuevas funciones", monthly: false, annual: true },
    { feature: "Account manager dedicado", monthly: false, annual: true },
  ]

  const annualBenefits = [
    {
      title: "Ahorro significativo",
      description: "Ahorra $44 USD al año comparado con el plan mensual",
      icon: "💰",
    },
    {
      title: "Soporte prioritario",
      description: "Acceso a soporte técnico prioritario 24/7 con tiempos de respuesta más rápidos",
      icon: "🚀",
    },
    {
      title: "Onboarding personalizado",
      description: "Sesión 1:1 con nuestro equipo para configurar tu cuenta perfectamente",
      icon: "🎯",
    },
    {
      title: "Reportes exclusivos",
      description: "Acceso a dashboards y reportes avanzados no disponibles en el plan mensual",
      icon: "📊",
    },
  ]

  const testimonials = [
    {
      quote:
        "El plan anual fue la mejor decisión. El ahorro es considerable y el soporte prioritario hace toda la diferencia.",
      author: "Laura Martínez",
      company: "Retail Express",
      plan: "Plan Anual",
    },
    {
      quote: "Empezamos con el plan mensual y luego migramos al anual. ¡No hay vuelta atrás!",
      author: "Carlos Rodríguez",
      company: "Hotel Boutique Central",
      plan: "Plan Anual",
    },
    {
      quote: "El plan mensual nos permitió probar sin compromiso. Una vez vimos los resultados, nos pasamos al anual.",
      author: "Ana Silva",
      company: "Gimnasio Vital",
      plan: "Plan Mensual → Anual",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <Navbar currentPage="/precios" />

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 py-2 text-sm font-semibold">
            💎 Precios Transparentes y Justos
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Precios simples
            </span>
            <br />
            <span className="text-blue-600">para todos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Un solo precio, todas las funcionalidades. Sin límites de usuarios, sin módulos premium ocultos, sin
            sorpresas en la factura. Solo elige entre mensual o anual.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Sin permanencia</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Garantía 30 días</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Soporte incluido</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Component */}
      <PricingTable showAllIncluded={true} showFAQ={true} showGuarantee={true} />

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comparación detallada de planes</h2>
            <p className="text-xl text-gray-600">Descubre todas las diferencias entre el plan mensual y anual</p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-gray-200">
              <div className="font-bold text-gray-900">Características</div>
              <div className="text-center font-bold text-gray-900">Plan Mensual</div>
              <div className="text-center font-bold text-blue-600">Plan Anual</div>
            </div>

            {comparisonFeatures.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-6 border-b border-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="text-gray-700 font-medium">{item.feature}</div>
                <div className="flex justify-center">
                  {item.monthly ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <X className="h-6 w-6 text-gray-300" />
                  )}
                </div>
                <div className="flex justify-center">
                  {item.annual ? (
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  ) : (
                    <X className="h-6 w-6 text-gray-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Benefits */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Plan Anual</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir el plan anual?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Además del ahorro económico, el plan anual incluye beneficios exclusivos para tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {annualBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-blue-200 bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-5xl">{benefit.icon}</div>
                    <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">Empresas que ya eligieron GO Admin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                    <Badge className="mt-2 bg-blue-50 text-blue-700 text-xs">{testimonial.plan}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para comenzar con GO Admin?"
        description="Elige el plan que mejor se adapte a tu negocio y comienza a transformar tu gestión empresarial hoy mismo. Sin permanencia, sin tarjeta de crédito para probar."
        primaryButtonText="Comenzar Prueba Gratuita"
        secondaryButtonText="Hablar con Ventas"
        variant="gradient"
        showStats={true}
        stats={[
          { label: "Empresas activas", value: "500+" },
          { label: "Satisfacción", value: "98%" },
          { label: "Ahorro promedio", value: "$2.5K/año" },
        ]}
      />

      <Footer />
    </div>
  )
}
