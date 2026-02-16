"use client"

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
import { PricingTable } from "@/components/pricing-table"
import { Navbar } from "@/components/navbar"

export default function Component() {
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
      name: "María González",
      role: "Directora de Operaciones",
      company: "Hotel Playa Dorada",
      logo: "/hotel-playa-dorada-luxury-hotel-logo-gold-text-ele.jpg",
      quote:
        "GO Admin ha revolucionado la gestión de nuestros hoteles. La integración del PMS con facturación electrónica nos ahorra 20 horas semanales.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Carlos Rodríguez",
      role: "Gerente General",
      company: "Restaurantes El Buen Sabor",
      logo: "/el-buen-sabor-restaurant-logo-fork-spoon-red-orang.jpg",
      quote:
        "Con GO Admin controlamos inventario en tiempo real de nuestras 100+ sedes. La visibilidad de datos ha mejorado nuestra toma de decisiones.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Ana Martínez",
      role: "CFO",
      company: "FitLife Gimnasios",
      logo: "/fitlife-gym-fitness-logo-dumbbell-blue-green-moder.jpg",
      quote:
        "La gestión de membresías y el control de acceso de GO Admin nos permite atender a más de 50,000 afiliados sin complicaciones.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
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
      industry: "Restaurantes y Cadenas",
      description:
        "Gestiona inventario, mesas, pedidos, cocina y ventas en tiempo real. Integración con apps de delivery.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
      companies: ["McDonald's", "Subway", "Domino's"],
    },
    {
      industry: "Hoteles y Resorts",
      description: "Reservas, check-in/out, housekeeping, folios y facturación electrónica todo integrado.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop",
      companies: ["Marriott", "Hilton", "Decameron"],
    },
    {
      industry: "Retail y Tiendas",
      description: "Control de inventario multi-sede, e-commerce y gestión de proveedores.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      companies: ["Zara", "H&M", "Falabella"],
    },
    {
      industry: "Gimnasios y Fitness",
      description: "Membresías, control de acceso biométrico, programación de clases y seguimiento de clientes.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
      companies: ["Bodytech", "SmartFit", "Gold's Gym"],
    },
    {
      industry: "Transporte y Logística",
      description: "Programación de rutas, venta de tickets, tracking de flotas y mantenimiento de vehículos.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop",
      companies: ["DHL", "FedEx", "Servientrega"],
    },
    {
      industry: "Parqueaderos",
      description: "Control de acceso automatizado, tarifas dinámicas, reportes de ocupación y facturación.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=500&fit=crop",
      companies: ["City Parking", "Park & Go", "Valet Plus"],
    },
  ]

  const companies = [
    {
      name: "Hotel Playa Dorada",
      logo: "/hotel-playa-dorada-luxury-resort-logo-golden-sun-p.jpg",
    },
    {
      name: "Café Central",
      logo: "/cafe-central-coffee-shop-logo-brown-coffee-cup-ste.jpg",
    },
    {
      name: "Supermercados FreshMart",
      logo: "/freshmart-supermarket-grocery-logo-green-leaf-shop.jpg",
    },
    {
      name: "Restaurantes El Buen Sabor",
      logo: "/el-buen-sabor-restaurant-logo-chef-hat-fork-red-or.jpg",
    },
    {
      name: "FitLife Gimnasios",
      logo: "/fitlife-gym-fitness-center-logo-dumbbell-muscle-bl.jpg",
    },
    {
      name: "TransRapido Logística",
      logo: "/transrapido-logistics-shipping-logo-truck-arrow-sp.jpg",
    },
    {
      name: "Farmacias SaludPlus",
      logo: "/saludplus-pharmacy-drugstore-logo-cross-pill-green.jpg",
    },
    {
      name: "Resort Caribe Azul",
      logo: "/caribe-azul-beach-resort-hotel-logo-wave-palm-tree.jpg",
    },
  ]

  const resources = [
    { title: "Guía de inicio rápido", link: "#" },
    { title: "Preguntas frecuentes", link: "#" },
    { title: "Blog", link: "#" },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar currentPage="/" />

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
              onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
            >
              <span className="mr-2">🚀</span>
              Comenzar Prueba Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
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
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Ver Todas las Industrias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">Testimonios</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empresas líderes en Latinoamérica confían en GO Admin para gestionar sus operaciones diarias.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={`Logo ${testimonial.company}`}
                      className="h-8 object-contain opacity-60"
                    />
                  </div>
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
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">Soluciones</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Casos de uso por industria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre cómo GO Admin se adapta a las necesidades específicas de tu industria con soluciones probadas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.industry}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-2">Usado por empresas como:</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.companies.map((company, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">Confianza</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Empresas que confían en nosotros</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más de 500 empresas líderes en Latinoamérica utilizan GO Admin para gestionar sus operaciones.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-10 md:h-12 object-contain max-w-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 text-sm">Empresas activas</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">12</div>
              <div className="text-gray-600 text-sm">Países</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-gray-600 text-sm">Usuarios diarios</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime garantizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-white">
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

      {/* Pricing Section - Using PricingTable Component */}
      <PricingTable showAllIncluded={true} showFAQ={true} showGuarantee={true} />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a cientos de empresas que ya confían en GO Admin para gestionar sus operaciones diarias de manera
            eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
            >
              Prueba Gratuita 14 Días
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
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
            <p>&copy; 2025 GO Admin. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
