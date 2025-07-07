"use client"

import { ArrowRight, CheckCircle, TrendingUp, Users, Building2, Star, Quote } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function IndustriasPage() {
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
    { number: "2,000+", label: "Empresas Activas", icon: Building2 },
    { number: "15+", label: "Industrias Especializadas", icon: TrendingUp },
    { number: "99.9%", label: "Uptime Garantizado", icon: CheckCircle },
    { number: "24/7", label: "Soporte Especializado", icon: Users },
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

  const benefits = [
    "Módulos especializados por industria",
    "Implementación rápida en 48 horas",
    "Soporte técnico especializado 24/7",
    "Actualizaciones automáticas incluidas",
    "Integración con sistemas existentes",
    "Capacitación completa del equipo",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">GO</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                GO Admin
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#modulos" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Módulos
              </Link>
              <Link href="/precios" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Precios
              </Link>
              <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Contacto
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium"
                onClick={() => window.open("https://app.goadmin.io/auth/login", "_blank")}
              >
                Iniciar Sesión
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg font-medium">
                Prueba Gratis
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto text-center relative">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 py-2 text-sm font-semibold">
            ✨ Soluciones Especializadas por Industria
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              ERP Especializado
            </span>
            <br />
            <span className="text-blue-600">para tu Industria</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            GO Admin se adapta perfectamente a tu tipo de negocio con <strong>módulos especializados</strong>, flujos
            optimizados y características únicas para cada industria.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl text-lg px-8 py-4"
            >
              Explorar Industrias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
            >
              Solicitar Demo
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Soluciones por Industria</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada industria tiene necesidades únicas. Nuestros módulos especializados están diseñados específicamente
              para optimizar las operaciones de tu sector.
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
                        <span className="text-gray-600">Clientes activos:</span>
                        <span className="font-bold text-gray-900">{industry.clients}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Crecimiento anual:</span>
                        <span className="font-bold text-green-600">{industry.growth}</span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Destacado:</div>
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
                        <span className="mr-2">Explorar solución</span>
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
              <Badge className="mb-4 bg-blue-100 text-blue-800">¿Por qué elegir GO Admin?</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Especialización que marca la diferencia</h2>
              <p className="text-xl text-gray-600 mb-8">
                No somos un ERP genérico. Cada módulo está diseñado específicamente para las necesidades únicas de tu
                industria, con flujos optimizados y características especializadas.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Implementación Express</h3>
                <p className="text-gray-600">Tu ERP especializado listo en tiempo récord</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Análisis de Necesidades</h4>
                    <p className="text-sm text-gray-600">Evaluamos tu industria y procesos específicos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Configuración Especializada</h4>
                    <p className="text-sm text-gray-600">Adaptamos los módulos a tu operación</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Go Live en 48h</h4>
                    <p className="text-sm text-gray-600">Tu equipo operando con el nuevo sistema</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">Empresas de diferentes industrias confían en GO Admin</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Listo para revolucionar tu industria?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Únete a miles de empresas que ya optimizaron sus operaciones con GO Admin. Solicita una demo personalizada
            para tu industria y descubre el potencial de tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4 font-semibold"
            >
              Solicitar Demo Personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-600 text-lg px-8 py-4 font-semibold"
            >
              Hablar con un Experto
            </Button>
          </div>
          <div className="mt-12 text-blue-100">
            <p className="text-sm">✓ Demo gratuita de 30 minutos ✓ Sin compromiso ✓ Asesoría especializada</p>
          </div>
        </div>
      </section>
    </div>
  )
}
