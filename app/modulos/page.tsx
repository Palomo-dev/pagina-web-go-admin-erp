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
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { useContent } from "@/lib/i18n"

export default function ModulosPage() {
  const c = useContent({
    es: {
      badge: "15 Módulos Completamente Integrados",
      heroTitle1: "Módulos ERP",
      heroTitle2: "Todo Integrado",
      heroSubtitle: "Descubre todos los módulos de GO Admin. Cada uno diseñado para trabajar en",
      heroSubtitleBold: "perfecta armonía",
      heroSubtitleEnd: ", compartiendo datos y automatizando procesos entre sí.",
      exploreModules: "Explorar Módulos",
      fullDemo: "Ver Demo Completa",
      byCategory: "Módulos por Categoría",
      byCategoryDesc: "Organizados por área funcional para una mejor comprensión de cómo cada módulo potencia tu negocio.",
      allModules: "Todos los Módulos",
      allModulesDesc: "Cada módulo está diseñado para integrarse perfectamente con los demás, creando un ecosistema empresarial completo y eficiente.",
      featured: "Destacado:",
      viewDetails: "Ver detalles",
      nativeIntegration: "Integración Nativa",
      modulesAsOne: "Módulos que trabajan como uno solo",
      modulesAsOneDesc: "A diferencia de otros sistemas, nuestros módulos están diseñados desde cero para trabajar juntos. Los datos fluyen automáticamente entre módulos sin duplicación ni procesos manuales.",
      integrationExample: "Ejemplo de Integración",
      integrationExampleDesc: "Flujo automático entre módulos",
      step1: "Venta en POS",
      step1d: "Cliente compra producto en tienda",
      step2: "Actualización Inventario",
      step2d: "Stock se reduce automáticamente",
      step3: "Registro Contable",
      step3d: "Asiento contable automático",
      step4: "Actualización CRM",
      step4d: "Historial del cliente se actualiza",
      testimonialsTitle: "Lo que dicen sobre nuestros módulos",
      testimonialsSubtitle: "Empresas que aprovechan la integración completa",
      ctaTitle: "¿Listo para integrar todos los módulos?",
      ctaDesc: "Comienza con los módulos que necesitas hoy y activa nuevos módulos cuando tu negocio crezca. Todo integrado desde el primer día.",
      startTrial: "Comenzar Prueba Gratuita",
      seeIntegrationDemo: "Ver Demo de Integración",
      ctaNote: "Todos los módulos incluidos - Sin costo adicional - Integración automática",
      modules: "módulos",
      integratedModules: "Módulos Integrados",
      activeCompanies: "Empresas Activas",
      uptimeGuaranteed: "Uptime Garantizado",
      techSupport: "Soporte Técnico",
      benefits: [
        "Integración nativa entre todos los módulos",
        "Datos unificados sin duplicación",
        "Flujos de trabajo automatizados",
        "Configuración modular flexible",
        "Actualizaciones sincronizadas",
        "Soporte especializado por módulo",
      ],
      catSales: "Ventas", catOps: "Operaciones", catFinance: "Finanzas", catHR: "RRHH", catAnalytics: "Analítica", catSecurity: "Seguridad",
    },
    en: {
      badge: "15 Fully Integrated Modules",
      heroTitle1: "ERP Modules",
      heroTitle2: "All Integrated",
      heroSubtitle: "Discover all GO Admin modules. Each one designed to work in",
      heroSubtitleBold: "perfect harmony",
      heroSubtitleEnd: ", sharing data and automating processes between them.",
      exploreModules: "Explore Modules",
      fullDemo: "Watch Full Demo",
      byCategory: "Modules by Category",
      byCategoryDesc: "Organized by functional area for a better understanding of how each module powers your business.",
      allModules: "All Modules",
      allModulesDesc: "Each module is designed to integrate seamlessly with others, creating a complete and efficient business ecosystem.",
      featured: "Featured:",
      viewDetails: "View details",
      nativeIntegration: "Native Integration",
      modulesAsOne: "Modules that work as one",
      modulesAsOneDesc: "Unlike other systems, our modules are designed from scratch to work together. Data flows automatically between modules without duplication or manual processes.",
      integrationExample: "Integration Example",
      integrationExampleDesc: "Automatic flow between modules",
      step1: "POS Sale",
      step1d: "Customer buys product in store",
      step2: "Inventory Update",
      step2d: "Stock is reduced automatically",
      step3: "Accounting Entry",
      step3d: "Automatic accounting entry",
      step4: "CRM Update",
      step4d: "Customer history is updated",
      testimonialsTitle: "What they say about our modules",
      testimonialsSubtitle: "Companies that leverage full integration",
      ctaTitle: "Ready to integrate all modules?",
      ctaDesc: "Start with the modules you need today and activate new ones as your business grows. All integrated from day one.",
      startTrial: "Start Free Trial",
      seeIntegrationDemo: "Watch Integration Demo",
      ctaNote: "All modules included - No additional cost - Automatic integration",
      modules: "modules",
      integratedModules: "Integrated Modules",
      activeCompanies: "Active Companies",
      uptimeGuaranteed: "Guaranteed Uptime",
      techSupport: "Technical Support",
      benefits: [
        "Native integration between all modules",
        "Unified data without duplication",
        "Automated workflows",
        "Flexible modular configuration",
        "Synchronized updates",
        "Specialized support per module",
      ],
      catSales: "Sales", catOps: "Operations", catFinance: "Finance", catHR: "HR", catAnalytics: "Analytics", catSecurity: "Security",
    },
  })
  const handleSignupClick = () => {
    window.open("https://app.goadmin.io/auth/signup", "_blank")
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
    { name: c.catSales, count: 2, icon: ShoppingCart, color: "text-orange-600" },
    { name: c.catOps, count: 3, icon: Zap, color: "text-blue-600" },
    { name: c.catFinance, count: 1, icon: CreditCard, color: "text-emerald-600" },
    { name: c.catHR, count: 1, icon: Users, color: "text-indigo-600" },
    { name: c.catAnalytics, count: 1, icon: PieChart, color: "text-cyan-600" },
    { name: c.catSecurity, count: 2, icon: Lock, color: "text-gray-600" },
  ]

  const stats = [
    { number: "15+", label: c.integratedModules, icon: Building2 },
    { number: "500+", label: c.activeCompanies, icon: TrendingUp },
    { number: "99.9%", label: c.uptimeGuaranteed, icon: CheckCircle },
    { number: "24/7", label: c.techSupport, icon: Users },
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

  const benefits = c.benefits

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <Navbar currentPage="/modulos" />

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
            {c.heroSubtitle} <strong>{c.heroSubtitleBold}</strong>{c.heroSubtitleEnd}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl text-lg px-8 py-4"
            >
              {c.exploreModules}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 bg-transparent"
            >
              {c.fullDemo}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{c.byCategory}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {c.byCategoryDesc}
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
                  <p className="text-sm text-gray-600">{category.count} {c.modules}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{c.allModules}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {c.allModulesDesc}
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
                        <div className="text-xs text-gray-600 mb-1">{c.featured}</div>
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
                        <span className="mr-2">{c.viewDetails}</span>
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
              <Badge className="mb-4 bg-blue-100 text-blue-800">{c.nativeIntegration}</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{c.modulesAsOne}</h2>
              <p className="text-xl text-gray-600 mb-8">
                {c.modulesAsOneDesc}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{c.integrationExample}</h3>
                <p className="text-gray-600">{c.integrationExampleDesc}</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-lg">🛒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{c.step1}</h4>
                    <p className="text-sm text-gray-600">{c.step1d}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-lg">📦</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{c.step2}</h4>
                    <p className="text-sm text-gray-600">{c.step2d}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 text-lg">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{c.step3}</h4>
                    <p className="text-sm text-gray-600">{c.step3d}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 text-lg">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{c.step4}</h4>
                    <p className="text-sm text-gray-600">{c.step4d}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{c.testimonialsTitle}</h2>
            <p className="text-xl text-gray-600">{c.testimonialsSubtitle}</p>
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
              {c.startTrial}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 font-semibold bg-transparent"
            >
              {c.seeIntegrationDemo}
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
