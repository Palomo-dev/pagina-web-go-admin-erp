"use client"

import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Building2,
  Star,
  Quote,
  Zap,
  ShoppingCart,
  CreditCard,
  PieChart,
  Lock,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ModulosPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const modules = [
    {
      name: "POS (Punto de Venta)",
      icon: "🛒",
      description:
        "Sistema POS completo para retail, restaurantes y gimnasios con caja integrada, comandas digitales y gestión de mesas.",
      href: "/modulos/pos",
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      category: "Ventas",
      features: ["Multi-caja", "Comandas digitales", "Gestión de mesas", "Facturación automática"],
      highlight: "Procesamiento instantáneo",
    },
    {
      name: "Inventario",
      icon: "📦",
      description:
        "Control de stock en tiempo real, gestión de variantes, códigos de barras y alertas automáticas de reposición.",
      href: "/modulos/inventario",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      category: "Operaciones",
      features: ["Stock en tiempo real", "Códigos de barras", "Alertas automáticas", "Multi-almacén"],
      highlight: "Precisión 99.9%",
    },
    {
      name: "PMS (Hotel & Parking)",
      icon: "🏨",
      description:
        "Sistema hotelero completo con reservas, check-in/out, folios multi-cuenta y gestión de parking integrada.",
      href: "/modulos/pms",
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      category: "Hotelería",
      features: ["Reservas online", "Check-in automático", "Channel manager", "Parking inteligente"],
      highlight: "ADR optimizado +25%",
    },
    {
      name: "Transport Scheduler",
      icon: "🚌",
      description:
        "Gestión completa de rutas, horarios, tickets QR y venta corporativa B2B/B2C para empresas de transporte.",
      href: "/modulos/transport",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      category: "Transporte",
      features: ["Rutas dinámicas", "Tickets QR", "Venta B2B/B2C", "Control operacional"],
      highlight: "Puntualidad 95%",
    },
    {
      name: "CRM",
      icon: "👥",
      description:
        "Gestión 360° de clientes con historial completo, segmentación avanzada y automatización de marketing.",
      href: "/modulos/crm",
      color: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      category: "Ventas",
      features: ["Historial 360°", "Segmentación", "Email marketing", "Lead scoring"],
      highlight: "Conversión +40%",
    },
    {
      name: "HRM (Recursos Humanos)",
      icon: "👤",
      description: "Gestión completa de empleados, nómina, asistencia, evaluaciones de desempeño y capacitación.",
      href: "/modulos/hrm",
      color: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      category: "RRHH",
      features: ["Nómina automática", "Control asistencia", "Evaluaciones", "Capacitación"],
      highlight: "Automatización 90%",
    },
    {
      name: "Finanzas & Facturación",
      icon: "💰",
      description:
        "Facturación electrónica DIAN, contabilidad automática, cuentas por cobrar/pagar y reportes financieros.",
      href: "/modulos/finanzas",
      color: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      category: "Finanzas",
      features: ["Facturación DIAN", "Contabilidad PUC", "CxC/CxP", "Reportes financieros"],
      highlight: "Cumplimiento 100%",
    },
    {
      name: "Reportes & Analítica",
      icon: "📊",
      description:
        "Dashboards personalizables, KPIs en tiempo real, reportes avanzados y business intelligence integrado.",
      href: "/modulos/reportes",
      color: "from-cyan-50 to-cyan-100",
      borderColor: "border-cyan-200",
      category: "Analítica",
      features: ["Dashboards custom", "KPIs tiempo real", "BI integrado", "Alertas inteligentes"],
      highlight: "Insights accionables",
    },
    {
      name: "Notificaciones & Alertas",
      icon: "🔔",
      description: "Sistema de notificaciones multi-canal con email, SMS, WhatsApp y push notifications automatizadas.",
      href: "/modulos/notificaciones",
      color: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
      category: "Comunicación",
      features: ["Multi-canal", "WhatsApp API", "Push notifications", "Automatización"],
      highlight: "Entrega 99.8%",
    },
    {
      name: "Integraciones",
      icon: "🔗",
      description:
        "APIs REST, webhooks, conectores con Stripe, MercadoPago, QuickBooks, Shopify y más de 100 servicios.",
      href: "/modulos/integraciones",
      color: "from-violet-50 to-violet-100",
      borderColor: "border-violet-200",
      category: "Conectividad",
      features: ["APIs REST", "Webhooks", "100+ conectores", "Sincronización"],
      highlight: "Conectividad total",
    },
    {
      name: "Calendario & Actividades",
      icon: "📅",
      description:
        "Calendario centralizado con gestión de citas, recordatorios automáticos y sincronización con Google Calendar.",
      href: "/modulos/calendario",
      color: "from-rose-50 to-rose-100",
      borderColor: "border-rose-200",
      category: "Productividad",
      features: ["Citas automáticas", "Recordatorios", "Sync Google", "Vista unificada"],
      highlight: "Organización perfecta",
    },
    {
      name: "Operaciones / Timeline",
      icon: "⚡",
      description:
        "Gestión operacional con timeline de actividades, flujos de trabajo automatizados y control de procesos.",
      href: "/modulos/operaciones",
      color: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
      category: "Operaciones",
      features: ["Timeline actividades", "Workflows", "Control procesos", "Automatización"],
      highlight: "Eficiencia +60%",
    },
    {
      name: "Autenticación & Autorización",
      icon: "🔐",
      description: "Sistema de seguridad avanzado con MFA, SSO, control de acceso granular y auditoría completa.",
      href: "/modulos/autenticacion",
      color: "from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      category: "Seguridad",
      features: ["MFA/2FA", "SSO", "Control granular", "Auditoría completa"],
      highlight: "Seguridad empresarial",
    },
    {
      name: "Gestión Multi-tenant",
      icon: "🏢",
      description:
        "Arquitectura multi-tenant con aislamiento de datos, gestión de organizaciones y configuración independiente.",
      href: "/modulos/multi-tenant",
      color: "from-slate-50 to-slate-100",
      borderColor: "border-slate-200",
      category: "Arquitectura",
      features: ["Aislamiento datos", "Multi-org", "Config independiente", "Escalabilidad"],
      highlight: "Arquitectura robusta",
    },
    {
      name: "Roles & Permisos",
      icon: "🛡️",
      description:
        "Sistema granular de roles y permisos con herencia, grupos de usuarios y control de acceso por módulo.",
      href: "/modulos/roles-permisos",
      color: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      category: "Seguridad",
      features: ["Roles granulares", "Herencia permisos", "Grupos usuarios", "Control modular"],
      highlight: "Control total",
    },
  ]

  const categories = [
    { name: "Ventas", count: 2, icon: ShoppingCart, color: "text-orange-600" },
    { name: "Operaciones", count: 3, icon: Zap, color: "text-blue-600" },
    { name: "Finanzas", count: 1, icon: CreditCard, color: "text-emerald-600" },
    { name: "RRHH", count: 1, icon: Users, color: "text-indigo-600" },
    { name: "Analítica", count: 1, icon: PieChart, color: "text-cyan-600" },
    { name: "Seguridad", count: 2, icon: Lock, color: "text-gray-600" },
  ]

  const stats = [
    { number: "15+", label: "Módulos Integrados", icon: Building2 },
    { number: "500+", label: "Empresas Activas", icon: TrendingUp },
    { number: "99.9%", label: "Uptime Garantizado", icon: CheckCircle },
    { number: "24/7", label: "Soporte Técnico", icon: Users },
  ]

  const testimonials = [
    {
      quote:
        "Los módulos de GO Admin están perfectamente integrados. No hay duplicación de datos ni procesos manuales.",
      author: "Laura Martínez",
      position: "Directora de Operaciones",
      company: "TechCorp Solutions",
      industry: "SaaS",
      rating: 5,
    },
    {
      quote:
        "La modularidad nos permite activar solo lo que necesitamos. Empezamos con POS e Inventario, ahora usamos 12 módulos.",
      author: "Roberto Silva",
      position: "Gerente General",
      company: "Retail Express",
      industry: "Retail",
      rating: 5,
    },
    {
      quote:
        "El módulo PMS con parking integrado revolucionó nuestro hotel. Todo fluye automáticamente al folio del huésped.",
      author: "Carmen López",
      position: "Gerente Hotelera",
      company: "Hotel Boutique Central",
      industry: "Hotelería",
      rating: 5,
    },
  ]

  const benefits = [
    "Integración nativa entre todos los módulos",
    "Datos unificados sin duplicación",
    "Flujos de trabajo automatizados",
    "Configuración modular flexible",
    "Actualizaciones sincronizadas",
    "Soporte especializado por módulo",
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/industrias" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Industrias
              </Link>
              <Link href="/caracteristicas" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Características
              </Link>
              <Link href="/precios" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Precios
              </Link>
              <Link href="/centro-ayuda" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Ayuda
              </Link>
              <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Contacto
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium bg-transparent"
                onClick={() => window.open("https://app.goadmin.io/auth/login", "_blank")}
              >
                Iniciar Sesión
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg font-medium">
                Prueba Gratis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
              aria-label="Abrir menú de navegación"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                onClick={closeMobileMenu}
                aria-hidden="true"
              />

              {/* Mobile Menu Panel */}
              <div className="absolute top-full left-0 right-0 bg-white border-b border-blue-100 shadow-lg z-50 md:hidden">
                <nav className="px-4 py-6 space-y-4">
                  <Link
                    href="/industrias"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Industrias
                  </Link>
                  <Link
                    href="/caracteristicas"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Características
                  </Link>
                  <Link
                    href="/precios"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Precios
                  </Link>
                  <Link
                    href="/centro-ayuda"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Centro de Ayuda
                  </Link>
                  <Link
                    href="/blog"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/acerca-de"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Acerca de
                  </Link>
                  <Link
                    href="/carreras"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Carreras
                  </Link>
                  <Link
                    href="/contacto"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Contacto
                  </Link>

                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                      onClick={() => {
                        window.open("https://app.goadmin.io/auth/login", "_blank")
                        closeMobileMenu()
                      }}
                    >
                      Iniciar Sesión
                    </Button>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={closeMobileMenu}>
                      Prueba Gratis
                    </Button>
                  </div>
                </nav>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto text-center relative">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 py-2 text-sm font-semibold">
            ✨ 15 Módulos Completamente Integrados
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Módulos ERP
            </span>
            <br />
            <span className="text-blue-600">Todo Integrado</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Descubre todos los módulos de GO Admin. Cada uno diseñado para trabajar en <strong>perfecta armonía</strong>
            , compartiendo datos y automatizando procesos entre sí.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl text-lg px-8 py-4"
            >
              Explorar Módulos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 bg-transparent"
            >
              Ver Demo Completa
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

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Módulos por Categoría</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizados por área funcional para una mejor comprensión de cómo cada módulo potencia tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="text-center border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} módulos</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Todos los Módulos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada módulo está diseñado para integrarse perfectamente con los demás, creando un ecosistema empresarial
              completo y eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Link key={index} href={module.href}>
                <Card
                  className={`bg-gradient-to-br ${module.color} ${module.borderColor} border-2 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:scale-105 group relative overflow-hidden h-full`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                        {module.icon}
                      </div>
                      <Badge className="bg-white/80 text-gray-700 text-xs">{module.category}</Badge>
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{module.name}</CardTitle>
                    <CardDescription className="text-gray-700 text-sm leading-relaxed">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      <div className="bg-white/80 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Destacado:</div>
                        <div className="text-sm font-semibold text-gray-900">{module.highlight}</div>
                      </div>
                      <div className="space-y-2">
                        {module.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span className="text-xs text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center mt-6 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        <span className="mr-2">Ver detalles</span>
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

      {/* Integration Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Integración Nativa</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Módulos que trabajan como uno solo</h2>
              <p className="text-xl text-gray-600 mb-8">
                A diferencia de otros sistemas, nuestros módulos están diseñados desde cero para trabajar juntos. Los
                datos fluyen automáticamente entre módulos sin duplicación ni procesos manuales.
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
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ejemplo de Integración</h3>
                <p className="text-gray-600">Flujo automático entre módulos</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-lg">🛒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Venta en POS</h4>
                    <p className="text-sm text-gray-600">Cliente compra producto en tienda</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-lg">📦</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Actualización Inventario</h4>
                    <p className="text-sm text-gray-600">Stock se reduce automáticamente</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 text-lg">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Registro Contable</h4>
                    <p className="text-sm text-gray-600">Asiento contable automático</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 text-lg">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Actualización CRM</h4>
                    <p className="text-sm text-gray-600">Historial del cliente se actualiza</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen sobre nuestros módulos</h2>
            <p className="text-xl text-gray-600">Empresas que aprovechan la integración completa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-200 transition-colors bg-white">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Listo para integrar todos los módulos?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Comienza con los módulos que necesitas hoy y activa nuevos módulos cuando tu negocio crezca. Todo integrado
            desde el primer día.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4 font-semibold"
            >
              Comenzar Prueba Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-600 text-lg px-8 py-4 font-semibold bg-transparent"
            >
              Ver Demo de Integración
            </Button>
          </div>
          <div className="mt-12 text-blue-100">
            <p className="text-sm">✓ Todos los módulos incluidos ✓ Sin costo adicional ✓ Integración automática</p>
          </div>
        </div>
      </section>
    </div>
  )
}
