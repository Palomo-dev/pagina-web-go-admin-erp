"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import {
  ArrowRight,
  Building2,
  Calendar,
  CreditCard,
  Database,
  FileText,
  Globe,
  Lock,
  MessageSquare,
  PieChart,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const modules = [
    {
      category: "Gestión Comercial",
      icon: ShoppingCart,
      items: [
        { name: "POS Punto de Venta", desc: "Retail, F&B, Gym con caja integrada" },
        { name: "Inventario", desc: "Control de stock en tiempo real" },
        { name: "CRM", desc: "Gestión de clientes 360°" },
      ],
    },
    {
      category: "Hotelería & Servicios",
      icon: Building2,
      items: [
        { name: "PMS Hotel", desc: "Reservas, check-in/out, folios" },
        { name: "Parking", desc: "Control de estacionamientos" },
        { name: "Transport", desc: "Programación de rutas y tickets" },
      ],
    },
    {
      category: "Recursos Humanos",
      icon: Users,
      items: [
        { name: "HRM", desc: "Empleados, contratos, nómina" },
        { name: "Asistencia", desc: "Control de turnos y vacaciones" },
        { name: "Evaluaciones", desc: "Desempeño y capacitación" },
      ],
    },
    {
      category: "Finanzas",
      icon: CreditCard,
      items: [
        { name: "Facturación", desc: "Facturación electrónica DIAN" },
        { name: "Contabilidad", desc: "PUC, asientos automáticos" },
        { name: "CxC & CxP", desc: "Cuentas por cobrar y pagar" },
      ],
    },
    {
      category: "Analítica",
      icon: PieChart,
      items: [
        { name: "Dashboards", desc: "Reportes personalizables" },
        { name: "KPIs", desc: "Indicadores en tiempo real" },
        { name: "Alertas", desc: "Notificaciones automáticas" },
      ],
    },
    {
      category: "Integraciones",
      icon: Zap,
      items: [
        { name: "APIs", desc: "Conectores con terceros" },
        { name: "Webhooks", desc: "Automatizaciones" },
        { name: "Marketplace", desc: "Stripe, MercadoPago, más" },
      ],
    },
  ]

  const features = [
    { icon: Globe, title: "Multi-tenant", desc: "Múltiples organizaciones y sucursales" },
    { icon: Lock, title: "Seguridad", desc: "Autenticación MFA y control de acceso" },
    { icon: Database, title: "Tiempo Real", desc: "Datos sincronizados instantáneamente" },
    { icon: MessageSquare, title: "Notificaciones", desc: "Email, WhatsApp, SMS integrados" },
    { icon: Calendar, title: "Calendario", desc: "Actividades y recordatorios centralizados" },
    { icon: FileText, title: "Auditoría", desc: "Trazabilidad completa de cambios" },
  ]

  const industries = [
    { name: "Restaurante", icon: "🍽️", href: "/industrias/restaurante" },
    { name: "Hotel", icon: "🏨", href: "/industrias/hotel" },
    { name: "Tienda", icon: "🛍️", href: "/industrias/tienda" },
    { name: "SaaS", icon: "💻", href: "/industrias/saas" },
    { name: "Gimnasio", icon: "💪", href: "/industrias/gimnasio" },
    { name: "Parking", icon: "🅿️", href: "/industrias/parqueadero" },
    { name: "Transporte", icon: "🚌", href: "/industrias/transporte" },
  ]

  const testimonials = [
    {
      name: "Maria Rodriguez",
      company: "Restaurant La Casita",
      quote:
        "GO Admin ha transformado la gestión de mi restaurante. Ahora tengo control total de mi inventario y ventas.",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ce0e5e292c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Carlos Perez",
      company: "Hotel El Sol",
      quote:
        "La gestión de reservas y el check-in/out nunca fueron tan fáciles. GO Admin ha simplificado mi trabajo y mejorado la experiencia de mis clientes.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00d5a4ee9baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]

  const stats = [
    { value: "500+", label: "Empresas que confían en nosotros" },
    { value: "15", label: "Módulos integrados" },
    { value: "99.9%", label: "Tiempo de actividad garantizado" },
    { value: "24/7", label: "Soporte técnico disponible" },
  ]

  const whyChooseUs = [
    {
      title: "Fácil de usar",
      description: "Interfaz intuitiva y amigable para que puedas empezar a gestionar tu negocio en minutos.",
      icon: "💡",
    },
    {
      title: "Personalizable",
      description:
        "Adapta GO Admin a las necesidades específicas de tu negocio con módulos y configuraciones flexibles.",
      icon: "⚙️",
    },
    {
      title: "Soporte técnico",
      description: "Nuestro equipo de expertos está siempre disponible para ayudarte con cualquier duda o problema.",
      icon: "⛑️",
    },
    {
      title: "Integraciones",
      description: "Conecta GO Admin con tus herramientas favoritas para una gestión aún más eficiente.",
      icon: "🔗",
    },
  ]

  const useCases = [
    {
      industry: "Restaurante",
      description: "Gestiona tu inventario, mesas, pedidos y ventas en tiempo real.",
      image:
        "https://images.unsplash.com/photo-1517248135469-4cd6edaaeb96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      industry: "Hotel",
      description: "Gestiona tus reservas, habitaciones, check-ins/outs y facturación de manera eficiente.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a98b9d7a0e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      industry: "Tienda",
      description: "Gestiona tu inventario, ventas, clientes y promociones en un solo lugar.",
      image:
        "https://images.unsplash.com/photo-1555296891-4f5c3b589ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]

  const companies = [
    { name: "Empresa A", logo: "https://via.placeholder.com/50" },
    { name: "Empresa B", logo: "https://via.placeholder.com/50" },
    { name: "Empresa C", logo: "https://via.placeholder.com/50" },
  ]

  const resources = [
    { title: "Guía de inicio rápido", link: "#" },
    { title: "Preguntas frecuentes", link: "#" },
    { title: "Blog", link: "#" },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GO</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GO Admin</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/modulos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Módulos
              </Link>
              <Link href="/industrias" className="text-gray-600 hover:text-blue-600 transition-colors">
                Industrias
              </Link>
              <Link href="/precios" className="text-gray-600 hover:text-blue-600 transition-colors">
                Precios
              </Link>
              <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contacto
              </Link>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.open("https://app.goadmin.io/auth/login", "_blank")}
              >
                Iniciar Sesión
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Prueba Gratis</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link
                  href="/modulos"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Módulos
                </Link>
                <Link
                  href="/industrias"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Industrias
                </Link>
                <Link
                  href="/precios"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Precios
                </Link>
                <Link
                  href="/contacto"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </Link>
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full"
                    onClick={() => {
                      window.open("https://app.goadmin.io/auth/login", "_blank")
                      setMobileMenuOpen(false)
                    }}
                  >
                    Iniciar Sesión
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full" onClick={() => setMobileMenuOpen(false)}>
                    Prueba Gratis
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full border border-blue-200 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-blue-800 font-semibold text-sm">
              ERP Empresarial • Más de 500 empresas confían en nosotros
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Transforma tu negocio con{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">GO Admin</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            La plataforma ERP más completa del mercado. Gestiona ventas, inventario, finanzas, recursos humanos y más
            desde una sola solución empresarial.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-700 font-medium">15 módulos integrados</span>
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-700 font-medium">Usuarios ilimitados</span>
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-gray-700 font-medium">Soporte 24/7</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="mr-2">🚀</span>
              Comenzar Prueba Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="mr-2">📹</span>
              Ver Demo en Vivo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-gray-500 mb-6 font-medium">Empresas líderes que confían en GO Admin</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                <span className="text-2xl">🏨</span>
                <span className="ml-2 text-gray-600 font-medium">Hoteles</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                <span className="text-2xl">🍽️</span>
                <span className="ml-2 text-gray-600 font-medium">Restaurantes</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                <span className="text-2xl">🛍️</span>
                <span className="ml-2 text-gray-600 font-medium">Retail</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                <span className="text-2xl">💪</span>
                <span className="ml-2 text-gray-600 font-medium">Gimnasios</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                <span className="text-2xl">🚌</span>
                <span className="ml-2 text-gray-600 font-medium">Transporte</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-8 hidden lg:block">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-200 transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700">Ventas +127%</span>
            </div>
          </div>
        </div>

        <div className="absolute top-1/3 right-8 hidden lg:block">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-200 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700">Tiempo ahorrado 40h/sem</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 text-sm font-semibold">
              Características Empresariales
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Todo lo que necesitas para{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                hacer crecer tu empresa
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              GO Admin incluye todas las herramientas empresariales que necesitas para gestionar tu negocio de manera
              eficiente y profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modulos" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Módulos Integrados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Todos los módulos trabajan juntos para darte una visión completa de tu negocio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => {
              const moduleLinks = {
                "Gestión Comercial": "/modulos/pos",
                "Hotelería & Servicios": "/modulos/pms",
                "Recursos Humanos": "/modulos/hrm",
                Finanzas: "/modulos/finanzas",
                Analítica: "/modulos/reportes",
                Integraciones: "/modulos/integraciones",
              }

              return (
                <Link key={index} href={moduleLinks[module.category as keyof typeof moduleLinks] || "#"}>
                  <Card className="bg-white border-blue-100 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <module.icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-gray-900">{module.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {module.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-l-2 border-blue-200 pl-4">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Soluciones por Industria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              GO Admin se especializa en diferentes tipos de negocio con módulos y flujos optimizados
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href}>
                <Card className="text-center border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{industry.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm">{industry.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industrias">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Ver Todas las Industrias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre cómo GO Admin ha ayudado a empresas como la tuya a crecer y optimizar sus operaciones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-gray-900">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-600">{testimonial.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Números que demuestran nuestro <span className="text-yellow-300">impacto</span>
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Miles de empresas ya confían en GO Admin para impulsar su crecimiento y optimizar sus operaciones
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 font-medium text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/5 rounded-full"></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir GO Admin?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre los beneficios clave que hacen de GO Admin la mejor opción para tu negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="bg-white border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-3">{reason.icon}</div>
                  <CardTitle className="text-gray-900">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Casos de uso por industria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre cómo GO Admin se adapta a las necesidades específicas de tu industria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border-blue-100 hover:shadow-lg transition-shadow">
                <img
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.industry}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <CardContent className="p-6">
                  <CardTitle className="text-gray-900">{useCase.industry}</CardTitle>
                  <CardDescription className="text-gray-600">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seguridad y Confianza</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Protegemos tus datos con los más altos estándares de seguridad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-white border border-gray-100">
              <div className="text-2xl text-green-600">
                <CheckCircle />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Encriptación de datos</h4>
                <p className="text-sm text-gray-600">
                  Tus datos están protegidos con encriptación de última generación.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-white border border-gray-100">
              <div className="text-2xl text-green-600">
                <CheckCircle />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Autenticación de dos factores</h4>
                <p className="text-sm text-gray-600">Protege tu cuenta con autenticación de dos factores.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-white border border-gray-100">
              <div className="text-2xl text-green-600">
                <CheckCircle />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Cumplimiento normativo</h4>
                <p className="text-sm text-gray-600">Cumplimos con las normativas de seguridad más exigentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Empresas que confían en nosotros</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cientos de empresas ya confían en GO Admin para gestionar sus operaciones diarias.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center space-x-3">
                <img src={company.logo || "/placeholder.svg"} alt={company.name} className="w-10 h-10 object-contain" />
                <span className="text-gray-600">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recursos y Contenido</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aprende a sacar el máximo provecho de GO Admin con nuestros recursos y contenido.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="bg-white border-blue-100 hover:shadow-lg transition-shadow p-6 rounded-md"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                <p className="text-gray-600">Leer más...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Precios Transparentes</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Un solo plan, <span className="text-blue-600">todo incluido</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sin límites ocultos, sin módulos extra. Acceso completo a todos los módulos desde el primer día con
              soporte técnico incluido.
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

          {/* Main Pricing Cards */}
          <div className="mx-auto mb-16">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Monthly Plan */}
              <Card className="border-2 border-gray-200 relative overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Plan Mensual</h3>
                    <p className="text-gray-600 mt-2">Perfecto para empezar sin compromisos</p>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-5xl font-bold text-gray-900">$20</span>
                      <div className="ml-2">
                        <div className="text-gray-600 text-lg">/mes</div>
                        <div className="text-sm text-gray-500">por organización</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">Facturación mensual • Sin permanencia</div>
                  </div>
                </CardHeader>
                <CardContent className="px-4 md:px-8 pb-8">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">Todos los 15 módulos incluidos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">Sucursales y usuarios ilimitados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">Soporte técnico por chat y email</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">Integraciones premium incluidas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">Backup automático diario</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 mb-4">
                    Comenzar Prueba Gratuita
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    14 días gratis • No se requiere tarjeta de crédito
                  </p>
                </CardContent>
              </Card>

              {/* Annual Plan */}
              <Card className="border-2 border-blue-600 relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 text-sm font-bold shadow-lg">
                    🔥 AHORRA 18% • MÁS POPULAR
                  </Badge>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-600"></div>
                <CardHeader className="text-center pb-6 pt-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Plan Anual</h3>
                    <p className="text-gray-600 mt-2">El más elegido por empresas exitosas</p>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <div className="text-right mr-3">
                        <div className="text-lg text-gray-500 line-through">$240</div>
                      </div>
                      <span className="text-5xl font-bold text-blue-600">$196</span>
                      <div className="ml-2">
                        <div className="text-gray-600 text-lg">/año</div>
                        <div className="text-sm text-gray-500">por organización</div>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block mb-2">
                      <span className="font-semibold">Ahorra $44 al año</span>
                    </div>
                    <div className="text-sm text-gray-500">Equivale a $16.33/mes • Facturación anual</div>
                  </div>
                </CardHeader>
                <CardContent className="px-4 md:px-8 pb-8">
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3">✨ Todo del plan mensual, PLUS:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-blue-800 font-medium">2 meses completamente gratis</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-blue-800 font-medium">Soporte técnico prioritario</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-blue-800 font-medium">Onboarding personalizado 1:1</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-blue-800 font-medium">Reportes avanzados exclusivos</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-blue-800 font-medium">Acceso anticipado a nuevas funciones</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-lg py-3 mb-4 shadow-lg">
                    🚀 Comenzar con Descuento Anual
                  </Button>
                  <p className="text-sm text-gray-500 text-center">14 días gratis • Garantía de devolución 30 días</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What's Included */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Todo incluido en ambos planes</h3>
              <p className="text-gray-600">Sin restricciones, sin módulos premium, sin sorpresas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "✅", title: "Todos los 15 Módulos", desc: "POS, Inventario, PMS, CRM, HRM, Finanzas y más" },
                {
                  icon: "🏢",
                  title: "Sucursales Ilimitadas",
                  desc: "Gestiona todas tus ubicaciones desde un solo lugar",
                },
                { icon: "👥", title: "Usuarios Ilimitados", desc: "Agrega todo tu equipo sin costo adicional" },
                {
                  icon: "📊",
                  title: "Reportes Avanzados",
                  desc: "Dashboards personalizables y métricas en tiempo real",
                },
                {
                  icon: "🔒",
                  title: "Seguridad Empresarial",
                  desc: "Autenticación MFA, roles granulares, auditoría completa",
                },
                { icon: "🌐", title: "Integraciones Premium", desc: "Stripe, MercadoPago, QuickBooks, Shopify y más" },
                { icon: "📱", title: "Apps Móviles", desc: "iOS y Android para gestión sobre la marcha" },
                { icon: "☁️", title: "Backup Automático", desc: "Respaldos diarios automáticos en la nube" },
                { icon: "🎯", title: "Soporte Técnico", desc: "Chat en vivo, email y base de conocimientos" },
              ].map((feature, index) => (
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

          {/* Pricing FAQ */}
          <div className="max-w-4xl mx-auto mb-16 px-2">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Preguntas Frecuentes</h3>
            <div className="space-y-6">
              {[
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
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="max-w-4xl mx-auto px-2">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 md:p-8 text-center border border-green-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantía de 30 días</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Si no estás completamente satisfecho con GO Admin en los primeros 30 días, te devolvemos el 100% de tu
                dinero. Sin preguntas, sin complicaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Probar 14 Días Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Hablar con Ventas
                </Button>
              </div>
            </div>
          </div>

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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a cientos de empresas que ya confían en GO Admin para gestionar sus operaciones diarias de manera
            eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Prueba Gratuita 14 Días
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
            >
              Solicitar Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GO</span>
                </div>
                <span className="text-xl font-bold">GO Admin</span>
              </div>
              <p className="text-gray-400">El ERP completo para gestionar tu negocio de manera eficiente.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/caracteristicas" className="hover:text-white transition-colors">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="/modulos" className="hover:text-white transition-colors">
                    Módulos
                  </Link>
                </li>
                <li>
                  <Link href="/integraciones" className="hover:text-white transition-colors">
                    Integraciones
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/centro-ayuda" className="hover:text-white transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="/centro-ayuda" className="hover:text-white transition-colors">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Estado del Sistema
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/acerca-de" className="hover:text-white transition-colors">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/carreras" className="hover:text-white transition-colors">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="hover:text-white transition-colors">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GO Admin. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
