"use client"

import {
  Shield, Globe, Zap, BarChart3, Users, CreditCard, Package, Building2,
  Clock, Lock, Smartphone, Cloud, ArrowRight, Check, Star, Layers, Database, Workflow,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useContent } from "@/lib/i18n"

export default function CaracteristicasPage() {
  const c = useContent({
    es: {
      badge: "Caracteristicas Completas",
      heroTitle1: "Todo lo que necesitas en ",
      heroTitle2: "una sola plataforma",
      heroDesc: "GO Admin combina la potencia de multiples sistemas especializados en una solucion integral que crece con tu negocio. Descubre por que mas de 10,000 empresas confian en nosotros.",
      liveDemo: "Ver Demo en Vivo",
      exploreFeatures: "Explorar Caracteristicas",
      mainFeaturesTitle: "Caracteristicas Principales",
      mainFeaturesDesc: "Funcionalidades empresariales disenadas para maximizar la eficiencia de tu negocio",
      modulesTitle: "Modulos por Categoria",
      modulesDesc: "15 modulos especializados que cubren todas las areas de tu negocio",
      techTitle: "Tecnologia de Vanguardia",
      techDesc: "Infraestructura moderna y segura que garantiza el mejor rendimiento",
      statsTitle: "Numeros que Hablan",
      statsDesc: "La confianza de miles de empresas respalda nuestra plataforma",
      activeCompanies: "Empresas Activas",
      uptime: "Tiempo de Actividad",
      transactions: "Transacciones/Mes",
      support: "Soporte Tecnico",
      ctaTitle: "Listo para ver GO Admin en accion?",
      ctaDesc: "Descubre como todas estas caracteristicas pueden transformar la gestion de tu negocio. Agenda una demo personalizada o comienza tu prueba gratuita hoy mismo.",
      requestDemo: "Solicitar Demo Personalizada",
      freeTrial: "Prueba Gratis 14 Dias",
      ctaNote: "Sin tarjeta de credito - Configuracion en 5 minutos - Soporte incluido",
      // Main features
      multiTenant: "Multi-tenant Nativo",
      multiTenantDesc: "Arquitectura disenada desde cero para multiples organizaciones con aislamiento completo de datos.",
      multiTenantBenefits: ["Organizaciones completamente independientes", "Subdominios personalizados automaticos", "Gestion de planes y suscripciones", "Escalabilidad automatica"],
      security: "Seguridad Empresarial",
      securityDesc: "Proteccion de nivel empresarial con autenticacion multi-factor y control de acceso granular.",
      securityBenefits: ["Autenticacion MFA con TOTP", "Roles y permisos granulares", "Auditoria completa de cambios", "Cumplimiento SOC 2 y GDPR"],
      integrations: "Integraciones Poderosas",
      integrationsDesc: "Conecta con todas las herramientas que ya usas a traves de nuestro marketplace de integraciones.",
      integrationsBenefits: ["Stripe, MercadoPago, PayPal", "QuickBooks, Xero contabilidad", "Shopify, WooCommerce e-commerce", "API REST completa para desarrolladores"],
      analytics: "Analytics Avanzados",
      analyticsDesc: "Dashboards personalizables con metricas en tiempo real y reportes automatizados.",
      analyticsBenefits: ["Dashboards drag-and-drop", "KPIs en tiempo real", "Reportes programados automaticos", "Exportacion a Excel/PDF"],
      // Modules
      salesCat: "Ventas y Comercial",
      pos: "POS Punto de Venta", posDesc: "Sistema completo para retail, restaurantes y gimnasios con caja integrada",
      crm: "CRM Avanzado", crmDesc: "Gestion 360 de clientes con pipelines, automatizaciones y campanas",
      ecommerce: "E-commerce", ecommerceDesc: "Tienda online integrada con sincronizacion automatica de inventario",
      opsCat: "Operaciones",
      inventory: "Inventario Inteligente", inventoryDesc: "Control de stock en tiempo real con alertas automaticas y trazabilidad",
      pms: "PMS Hotelero", pmsDesc: "Gestion completa de reservas, check-in/out y channel manager",
      transport: "Transport Scheduler", transportDesc: "Planificacion de rutas, tickets QR y control operacional",
      hrCat: "Recursos Humanos",
      hrm: "HRM Completo", hrmDesc: "Empleados, contratos, nomina y evaluaciones de desempeno",
      attendance: "Control de Asistencia", attendanceDesc: "Turnos, horarios y vacaciones con check-in QR movil",
      training: "Capacitacion", trainingDesc: "Planes de formacion y seguimiento de competencias",
      financeCat: "Finanzas",
      invoicing: "Facturacion Electronica", invoicingDesc: "Facturacion automatica con timbrado DIAN y notas credito/debito",
      accounting: "Contabilidad Integrada", accountingDesc: "PUC configurable con asientos automaticos y estados financieros",
      arAp: "CxC y CxP", arApDesc: "Gestion completa de cuentas por cobrar y pagar con aging",
      // Technical
      cloudNative: "Cloud Native", cloudNativeDesc: "Infraestructura en la nube con 99.9% de disponibilidad y backup automatico",
      mobileApps: "Apps Moviles", mobileAppsDesc: "Aplicaciones nativas para iOS y Android con sincronizacion offline",
      secureData: "Datos Seguros", secureDataDesc: "Cifrado end-to-end y cumplimiento de normativas internacionales",
      realTime: "Tiempo Real", realTimeDesc: "Sincronizacion instantanea entre todos los dispositivos y sucursales",
      fullApi: "API Completa", fullApiDesc: "REST API documentada para integraciones personalizadas",
      automation: "Automatizacion", automationDesc: "Workflows personalizables para automatizar procesos de negocio",
      noLimits: "Sin limites",
    },
    en: {
      badge: "Complete Features",
      heroTitle1: "Everything you need in ",
      heroTitle2: "one platform",
      heroDesc: "GO Admin combines the power of multiple specialized systems into a comprehensive solution that grows with your business. Discover why over 10,000 companies trust us.",
      liveDemo: "Watch Live Demo",
      exploreFeatures: "Explore Features",
      mainFeaturesTitle: "Main Features",
      mainFeaturesDesc: "Enterprise features designed to maximize your business efficiency",
      modulesTitle: "Modules by Category",
      modulesDesc: "15 specialized modules covering all areas of your business",
      techTitle: "Cutting-Edge Technology",
      techDesc: "Modern and secure infrastructure guaranteeing the best performance",
      statsTitle: "Numbers That Speak",
      statsDesc: "The trust of thousands of companies backs our platform",
      activeCompanies: "Active Companies",
      uptime: "Uptime",
      transactions: "Transactions/Month",
      support: "Technical Support",
      ctaTitle: "Ready to see GO Admin in action?",
      ctaDesc: "Discover how all these features can transform your business management. Schedule a personalized demo or start your free trial today.",
      requestDemo: "Request Personalized Demo",
      freeTrial: "Free 14-Day Trial",
      ctaNote: "No credit card - Setup in 5 minutes - Support included",
      multiTenant: "Native Multi-tenant",
      multiTenantDesc: "Architecture designed from scratch for multiple organizations with complete data isolation.",
      multiTenantBenefits: ["Completely independent organizations", "Automatic custom subdomains", "Plan and subscription management", "Automatic scalability"],
      security: "Enterprise Security",
      securityDesc: "Enterprise-level protection with multi-factor authentication and granular access control.",
      securityBenefits: ["MFA Authentication with TOTP", "Granular roles and permissions", "Complete change auditing", "SOC 2 and GDPR compliance"],
      integrations: "Powerful Integrations",
      integrationsDesc: "Connect with all the tools you already use through our integration marketplace.",
      integrationsBenefits: ["Stripe, MercadoPago, PayPal", "QuickBooks, Xero accounting", "Shopify, WooCommerce e-commerce", "Complete REST API for developers"],
      analytics: "Advanced Analytics",
      analyticsDesc: "Customizable dashboards with real-time metrics and automated reports.",
      analyticsBenefits: ["Drag-and-drop dashboards", "Real-time KPIs", "Automatic scheduled reports", "Export to Excel/PDF"],
      salesCat: "Sales & Commercial",
      pos: "POS Point of Sale", posDesc: "Complete system for retail, restaurants and gyms with integrated register",
      crm: "Advanced CRM", crmDesc: "360 client management with pipelines, automations and campaigns",
      ecommerce: "E-commerce", ecommerceDesc: "Integrated online store with automatic inventory sync",
      opsCat: "Operations",
      inventory: "Smart Inventory", inventoryDesc: "Real-time stock control with automatic alerts and traceability",
      pms: "Hotel PMS", pmsDesc: "Complete reservation management, check-in/out and channel manager",
      transport: "Transport Scheduler", transportDesc: "Route planning, QR tickets and operational control",
      hrCat: "Human Resources",
      hrm: "Complete HRM", hrmDesc: "Employees, contracts, payroll and performance evaluations",
      attendance: "Attendance Control", attendanceDesc: "Shifts, schedules and vacations with mobile QR check-in",
      training: "Training", trainingDesc: "Training plans and competency tracking",
      financeCat: "Finance",
      invoicing: "Electronic Invoicing", invoicingDesc: "Automatic invoicing with tax compliance and credit/debit notes",
      accounting: "Integrated Accounting", accountingDesc: "Configurable chart of accounts with automatic entries and financial statements",
      arAp: "AR & AP", arApDesc: "Complete accounts receivable and payable management with aging",
      cloudNative: "Cloud Native", cloudNativeDesc: "Cloud infrastructure with 99.9% availability and automatic backup",
      mobileApps: "Mobile Apps", mobileAppsDesc: "Native iOS and Android apps with offline sync",
      secureData: "Secure Data", secureDataDesc: "End-to-end encryption and international regulatory compliance",
      realTime: "Real Time", realTimeDesc: "Instant sync across all devices and branches",
      fullApi: "Complete API", fullApiDesc: "Documented REST API for custom integrations",
      automation: "Automation", automationDesc: "Customizable workflows to automate business processes",
      noLimits: "No limits",
    },
  })

  const mainFeatures = [
    { icon: Globe, title: c.multiTenant, description: c.multiTenantDesc, benefits: c.multiTenantBenefits, color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: c.security, description: c.securityDesc, benefits: c.securityBenefits, color: "from-green-500 to-emerald-500" },
    { icon: Zap, title: c.integrations, description: c.integrationsDesc, benefits: c.integrationsBenefits, color: "from-purple-500 to-violet-500" },
    { icon: BarChart3, title: c.analytics, description: c.analyticsDesc, benefits: c.analyticsBenefits, color: "from-orange-500 to-red-500" },
  ]

  const modules = [
    { category: c.salesCat, icon: CreditCard, color: "bg-gradient-to-r from-green-500 to-emerald-500", features: [
      { name: c.pos, description: c.posDesc, icon: Package },
      { name: c.crm, description: c.crmDesc, icon: Users },
      { name: c.ecommerce, description: c.ecommerceDesc, icon: Globe },
    ]},
    { category: c.opsCat, icon: Package, color: "bg-gradient-to-r from-blue-500 to-cyan-500", features: [
      { name: c.inventory, description: c.inventoryDesc, icon: Database },
      { name: c.pms, description: c.pmsDesc, icon: Building2 },
      { name: c.transport, description: c.transportDesc, icon: Clock },
    ]},
    { category: c.hrCat, icon: Users, color: "bg-gradient-to-r from-purple-500 to-violet-500", features: [
      { name: c.hrm, description: c.hrmDesc, icon: Users },
      { name: c.attendance, description: c.attendanceDesc, icon: Clock },
      { name: c.training, description: c.trainingDesc, icon: Star },
    ]},
    { category: c.financeCat, icon: Building2, color: "bg-gradient-to-r from-orange-500 to-red-500", features: [
      { name: c.invoicing, description: c.invoicingDesc, icon: CreditCard },
      { name: c.accounting, description: c.accountingDesc, icon: BarChart3 },
      { name: c.arAp, description: c.arApDesc, icon: Building2 },
    ]},
  ]

  const technicalFeatures = [
    { icon: Cloud, title: c.cloudNative, description: c.cloudNativeDesc, stats: "99.9% Uptime" },
    { icon: Smartphone, title: c.mobileApps, description: c.mobileAppsDesc, stats: "iOS & Android" },
    { icon: Lock, title: c.secureData, description: c.secureDataDesc, stats: "SOC 2 & GDPR" },
    { icon: Clock, title: c.realTime, description: c.realTimeDesc, stats: "<100ms" },
    { icon: Layers, title: c.fullApi, description: c.fullApiDesc, stats: "200+ endpoints" },
    { icon: Workflow, title: c.automation, description: c.automationDesc, stats: c.noLimits },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <Navbar currentPage="/caracteristicas" />

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="container mx-auto text-center relative">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">{c.badge}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">{c.heroTitle1}</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{c.heroTitle2}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">{c.heroDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">{c.liveDemo} <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">{c.exploreFeatures}</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{c.mainFeaturesTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{c.mainFeaturesDesc}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"><Check className="h-3 w-3 text-green-600" /></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{c.modulesTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{c.modulesDesc}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-gray-900 text-xl">{module.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {module.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{feature.name}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{c.techTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{c.techDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <Badge className="bg-blue-100 text-blue-800 font-medium">{feature.stats}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.statsTitle}</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">{c.statsDesc}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center"><div className="text-4xl md:text-5xl font-bold text-white mb-2">10,000+</div><div className="text-blue-100">{c.activeCompanies}</div></div>
            <div className="text-center"><div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div><div className="text-blue-100">{c.uptime}</div></div>
            <div className="text-center"><div className="text-4xl md:text-5xl font-bold text-white mb-2">50M+</div><div className="text-blue-100">{c.transactions}</div></div>
            <div className="text-center"><div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div><div className="text-blue-100">{c.support}</div></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{c.ctaTitle}</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">{c.requestDemo} <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">{c.freeTrial}</Button>
          </div>
          <p className="text-sm text-gray-500 mt-6">{c.ctaNote}</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
