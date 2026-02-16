"use client"

import { ArrowRight, CheckCircle, TrendingUp, Users, Building2, Star, Quote } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { useContent } from "@/lib/i18n"

export default function IndustriasPage() {
  const c = useContent({
    es: {
      badge: "Soluciones Especializadas por Industria",
      heroTitle1: "ERP Especializado", heroTitle2: "para tu Industria",
      heroSubtitle1: "GO Admin se adapta perfectamente a tu tipo de negocio con", heroSubtitleBold: "módulos especializados", heroSubtitle2: ", flujos optimizados y características únicas para cada industria.",
      exploreIndustries: "Explorar Industrias", requestDemo: "Solicitar Demo",
      activeCompanies: "Empresas Activas", specializedIndustries: "Industrias Especializadas", uptimeGuaranteed: "Uptime Garantizado", specializedSupport: "Soporte Especializado",
      solutionsByIndustry: "Soluciones por Industria", solutionsDesc: "Cada industria tiene necesidades únicas. Nuestros módulos especializados están diseñados específicamente para optimizar las operaciones de tu sector.",
      activeClients: "Clientes activos:", annualGrowth: "Crecimiento anual:", featured: "Destacado:", exploreSolution: "Explorar solución",
      whyChoose: "¿Por qué elegir GO Admin?", whyTitle: "Especialización que marca la diferencia", whyDesc: "No somos un ERP genérico. Cada módulo está diseñado específicamente para las necesidades únicas de tu industria, con flujos optimizados y características especializadas.",
      expressImpl: "Implementación Express", expressDesc: "Tu ERP especializado listo en tiempo récord",
      step1: "Análisis de Necesidades", step1d: "Evaluamos tu industria y procesos específicos",
      step2: "Configuración Especializada", step2d: "Adaptamos los módulos a tu operación",
      step3: "Go Live en 48h", step3d: "Tu equipo operando con el nuevo sistema",
      testimonialsTitle: "Lo que dicen nuestros clientes", testimonialsSubtitle: "Empresas de diferentes industrias confían en GO Admin",
      ctaTitle: "¿Listo para revolucionar tu industria?", ctaDesc: "Únete a miles de empresas que ya optimizaron sus operaciones con GO Admin. Solicita una demo personalizada para tu industria y descubre el potencial de tu negocio.",
      requestPersonalDemo: "Solicitar Demo Personalizada", talkExpert: "Hablar con un Experto",
      ctaNote: "Demo gratuita de 30 minutos - Sin compromiso - Asesoría especializada",
      benefits: [
        "Módulos especializados por industria", "Implementación rápida en 48 horas", "Soporte técnico especializado 24/7",
        "Actualizaciones automáticas incluidas", "Integración con sistemas existentes", "Capacitación completa del equipo",
      ],
    },
    en: {
      badge: "Specialized Solutions by Industry",
      heroTitle1: "Specialized ERP", heroTitle2: "for your Industry",
      heroSubtitle1: "GO Admin adapts perfectly to your business type with", heroSubtitleBold: "specialized modules", heroSubtitle2: ", optimized workflows and unique features for each industry.",
      exploreIndustries: "Explore Industries", requestDemo: "Request Demo",
      activeCompanies: "Active Companies", specializedIndustries: "Specialized Industries", uptimeGuaranteed: "Guaranteed Uptime", specializedSupport: "Specialized Support",
      solutionsByIndustry: "Solutions by Industry", solutionsDesc: "Each industry has unique needs. Our specialized modules are specifically designed to optimize operations in your sector.",
      activeClients: "Active clients:", annualGrowth: "Annual growth:", featured: "Featured:", exploreSolution: "Explore solution",
      whyChoose: "Why choose GO Admin?", whyTitle: "Specialization that makes the difference", whyDesc: "We are not a generic ERP. Each module is specifically designed for the unique needs of your industry, with optimized workflows and specialized features.",
      expressImpl: "Express Implementation", expressDesc: "Your specialized ERP ready in record time",
      step1: "Needs Analysis", step1d: "We evaluate your industry and specific processes",
      step2: "Specialized Configuration", step2d: "We adapt the modules to your operation",
      step3: "Go Live in 48h", step3d: "Your team operating with the new system",
      testimonialsTitle: "What our clients say", testimonialsSubtitle: "Companies from different industries trust GO Admin",
      ctaTitle: "Ready to revolutionize your industry?", ctaDesc: "Join thousands of companies that have already optimized their operations with GO Admin. Request a personalized demo for your industry and discover your business potential.",
      requestPersonalDemo: "Request Personalized Demo", talkExpert: "Talk to an Expert",
      ctaNote: "Free 30-minute demo - No commitment - Specialized advice",
      benefits: [
        "Specialized modules per industry", "Quick implementation in 48 hours", "Specialized 24/7 technical support",
        "Automatic updates included", "Integration with existing systems", "Full team training",
      ],
    },
  })
  const handleSignupClick = () => {
    window.open("https://app.goadmin.io/auth/signup", "_blank")
  }

  const industries = [
    {
      name: "Restaurante",
      icon: "🍽️",
      description:
        "POS F&B especializado, gestión de mesas, comandas digitales y control de costos por plato en tiempo real.",
      href: "/industrias/restaurante",
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      modules: ["POS F&B", "Inventario", "CRM", "HRM"],
      clients: "500+",
      growth: "+40%",
      highlight: "Reducción 85% errores comandas",
    },
    {
      name: "Hotel",
      icon: "🏨",
      description: "PMS completo con reservas, channel manager, gestión de huéspedes y revenue management integrado.",
      href: "/industrias/hotel",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      modules: ["PMS", "Parking", "CRM", "Finanzas"],
      clients: "200+",
      growth: "+60%",
      highlight: "ADR promedio $85",
    },
    {
      name: "Tienda",
      icon: "🛍️",
      description:
        "POS retail avanzado, inventario por variantes, e-commerce integrado y experiencia omnicanal completa.",
      href: "/industrias/tienda",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      modules: ["POS Retail", "Inventario", "E-commerce", "CRM"],
      clients: "800+",
      growth: "+35%",
      highlight: "92% disponibilidad stock",
    },
    {
      name: "SaaS",
      icon: "💻",
      description:
        "Arquitectura multi-tenant, billing recurrente automatizado, analytics SaaS y gestión completa de APIs.",
      href: "/industrias/saas",
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      modules: ["Multi-tenant", "Billing", "Analytics", "APIs"],
      clients: "150+",
      growth: "+120%",
      highlight: "MRR promedio $45K",
    },
    {
      name: "Gimnasio",
      icon: "💪",
      description:
        "Gestión de membresías, agenda de clases, control de acceso QR y seguimiento personalizado de miembros.",
      href: "/industrias/gimnasio",
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      modules: ["POS Gym", "Membresías", "Clases", "Acceso QR"],
      clients: "300+",
      growth: "+50%",
      highlight: "Check-in automático QR",
    },
    {
      name: "Parqueadero",
      icon: "🅿️",
      description:
        "Plano inteligente en tiempo real, control de acceso automatizado, tarifas flexibles e integración hotelera.",
      href: "/industrias/parqueadero",
      color: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
      modules: ["Plano Visual", "Tarifas", "Acceso", "Integración"],
      clients: "100+",
      growth: "+80%",
      highlight: "Reconocimiento de placas",
    },
    {
      name: "Transporte",
      icon: "🚌",
      description:
        "Gestión completa de rutas, tickets QR inteligentes, venta corporativa B2B/B2C y control operacional avanzado.",
      href: "/industrias/transporte",
      color: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      modules: ["Rutas", "Tickets QR", "B2B/B2C", "Operaciones"],
      clients: "80+",
      growth: "+90%",
      highlight: "Control puntualidad 95%",
    },
  ]

  const stats = [
    { number: "2,000+", label: c.activeCompanies, icon: Building2 },
    { number: "15+", label: c.specializedIndustries, icon: TrendingUp },
    { number: "99.9%", label: c.uptimeGuaranteed, icon: CheckCircle },
    { number: "24/7", label: c.specializedSupport, icon: Users },
  ]

  const testimonials = [
    {
      quote:
        "GO Admin transformó completamente nuestras operaciones. La especialización para restaurantes es impresionante.",
      author: "María González",
      position: "Gerente General",
      company: "Restaurante El Buen Sabor",
      industry: "Restaurante",
      rating: 5,
    },
    {
      quote: "El PMS hotelero con channel manager integrado nos aumentó las reservas directas en un 40%.",
      author: "Carlos Mendoza",
      position: "Director de Operaciones",
      company: "Hotel Plaza Central",
      industry: "Hotel",
      rating: 5,
    },
    {
      quote:
        "La integración omnicanal entre nuestra tienda física y e-commerce es perfecta. Inventario unificado real.",
      author: "Ana Rodríguez",
      position: "Propietaria",
      company: "Boutique Fashion Store",
      industry: "Retail",
      rating: 5,
    },
  ]

  const benefits = c.benefits

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <Navbar currentPage="/industrias" />

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto text-center relative">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 py-2 text-sm font-semibold">
            {c.badge}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              {c.heroTitle1}
            </span>
            <br />
            <span className="text-blue-600">{c.heroTitle2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {c.heroSubtitle1} <strong>{c.heroSubtitleBold}</strong>{c.heroSubtitle2}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl text-lg px-8 py-4"
            >
              {c.exploreIndustries}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 bg-transparent"
            >
              {c.requestDemo}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{c.solutionsByIndustry}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {c.solutionsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href}>
                <Card
                  className={`bg-gradient-to-br ${industry.color} ${industry.borderColor} border-2 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:scale-105 group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-900 mb-2">{industry.name}</CardTitle>
                    <CardDescription className="text-gray-700 text-base leading-relaxed">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{c.activeClients}</span>
                        <span className="font-bold text-gray-900">{industry.clients}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{c.annualGrowth}</span>
                        <span className="font-bold text-green-600">{industry.growth}</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">{c.featured}</div>
                        <div className="text-sm font-semibold text-gray-900">{industry.highlight}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.modules.map((module, moduleIndex) => (
                          <div
                            key={moduleIndex}
                            className="bg-white/90 px-3 py-2 rounded-lg text-xs font-semibold text-gray-800 text-center shadow-sm"
                          >
                            {module}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center mt-6 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        <span className="mr-2">{c.exploreSolution}</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">{c.whyChoose}</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{c.whyTitle}</h2>
              <p className="text-xl text-gray-600 mb-8">
                {c.whyDesc}
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{c.expressImpl}</h3>
                <p className="text-gray-600">{c.expressDesc}</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{c.step1}</h4>
                    <p className="text-sm text-gray-600">{c.step1d}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{c.step2}</h4>
                    <p className="text-sm text-gray-600">{c.step2d}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{c.step3}</h4>
                    <p className="text-sm text-gray-600">{c.step3d}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{c.testimonialsTitle}</h2>
            <p className="text-xl text-gray-600">{c.testimonialsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                    <Badge className="mt-2 bg-blue-50 text-blue-700 text-xs">{testimonial.industry}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{c.ctaTitle}</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            {c.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4 font-semibold"
              onClick={handleSignupClick}
            >
              {c.requestPersonalDemo}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 font-semibold bg-transparent"
            >
              {c.talkExpert}
            </Button>
          </div>
          <div className="mt-12 text-blue-100">
            <p className="text-sm">{c.ctaNote}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
