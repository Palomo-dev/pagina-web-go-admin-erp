"use client"

import {
  Shield,
  Globe,
  Zap,
  BarChart3,
  Users,
  CreditCard,
  Package,
  Building2,
  Clock,
  Lock,
  Smartphone,
  Cloud,
  ArrowRight,
  Check,
  Star,
  Layers,
  Database,
  Workflow,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function CaracteristicasPage() {
  const mainFeatures = [
    {
      icon: Globe,
      title: "Multi-tenant Nativo",
      description: "Arquitectura diseñada desde cero para múltiples organizaciones con aislamiento completo de datos.",
      benefits: [
        "Organizaciones completamente independientes",
        "Subdominios personalizados automáticos",
        "Gestión de planes y suscripciones",
        "Escalabilidad automática",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Seguridad Empresarial",
      description: "Protección de nivel empresarial con autenticación multi-factor y control de acceso granular.",
      benefits: [
        "Autenticación MFA con TOTP",
        "Roles y permisos granulares",
        "Auditoría completa de cambios",
        "Cumplimiento SOC 2 y GDPR",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Integraciones Poderosas",
      description: "Conecta con todas las herramientas que ya usas a través de nuestro marketplace de integraciones.",
      benefits: [
        "Stripe, MercadoPago, PayPal",
        "QuickBooks, Xero contabilidad",
        "Shopify, WooCommerce e-commerce",
        "API REST completa para desarrolladores",
      ],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzados",
      description: "Dashboards personalizables con métricas en tiempo real y reportes automatizados.",
      benefits: [
        "Dashboards drag-and-drop",
        "KPIs en tiempo real",
        "Reportes programados automáticos",
        "Exportación a Excel/PDF",
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  const modules = [
    {
      category: "Ventas y Comercial",
      icon: CreditCard,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      features: [
        {
          name: "POS Punto de Venta",
          description: "Sistema completo para retail, restaurantes y gimnasios con caja integrada",
          icon: Package,
        },
        {
          name: "CRM Avanzado",
          description: "Gestión 360° de clientes con pipelines, automatizaciones y campañas",
          icon: Users,
        },
        {
          name: "E-commerce",
          description: "Tienda online integrada con sincronización automática de inventario",
          icon: Globe,
        },
      ],
    },
    {
      category: "Operaciones",
      icon: Package,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      features: [
        {
          name: "Inventario Inteligente",
          description: "Control de stock en tiempo real con alertas automáticas y trazabilidad",
          icon: Database,
        },
        {
          name: "PMS Hotelero",
          description: "Gestión completa de reservas, check-in/out y channel manager",
          icon: Building2,
        },
        {
          name: "Transport Scheduler",
          description: "Planificación de rutas, tickets QR y control operacional",
          icon: Clock,
        },
      ],
    },
    {
      category: "Recursos Humanos",
      icon: Users,
      color: "bg-gradient-to-r from-purple-500 to-violet-500",
      features: [
        {
          name: "HRM Completo",
          description: "Empleados, contratos, nómina y evaluaciones de desempeño",
          icon: Users,
        },
        {
          name: "Control de Asistencia",
          description: "Turnos, horarios y vacaciones con check-in QR móvil",
          icon: Clock,
        },
        {
          name: "Capacitación",
          description: "Planes de formación y seguimiento de competencias",
          icon: Star,
        },
      ],
    },
    {
      category: "Finanzas",
      icon: Building2,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      features: [
        {
          name: "Facturación Electrónica",
          description: "Facturación automática con timbrado DIAN y notas crédito/débito",
          icon: CreditCard,
        },
        {
          name: "Contabilidad Integrada",
          description: "PUC configurable con asientos automáticos y estados financieros",
          icon: BarChart3,
        },
        {
          name: "CxC y CxP",
          description: "Gestión completa de cuentas por cobrar y pagar con aging",
          icon: Building2,
        },
      ],
    },
  ]

  const technicalFeatures = [
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Infraestructura en la nube con 99.9% de disponibilidad y backup automático",
      stats: "99.9% Uptime",
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Aplicaciones nativas para iOS y Android con sincronización offline",
      stats: "iOS & Android",
    },
    {
      icon: Lock,
      title: "Datos Seguros",
      description: "Cifrado end-to-end y cumplimiento de normativas internacionales",
      stats: "SOC 2 & GDPR",
    },
    {
      icon: Clock,
      title: "Tiempo Real",
      description: "Sincronización instantánea entre todos los dispositivos y sucursales",
      stats: "<100ms latencia",
    },
    {
      icon: Layers,
      title: "API Completa",
      description: "REST API documentada para integraciones personalizadas",
      stats: "200+ endpoints",
    },
    {
      icon: Workflow,
      title: "Automatización",
      description: "Workflows personalizables para automatizar procesos de negocio",
      stats: "Sin límites",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <Navbar currentPage="/caracteristicas" />

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="container mx-auto text-center relative">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
            Características Completas
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Todo lo que necesitas en{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              una sola plataforma
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            GO Admin combina la potencia de múltiples sistemas especializados en una solución integral que crece con tu
            negocio. Descubre por qué más de 10,000 empresas confían en nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
            >
              Ver Demo en Vivo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Explorar Características
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Características Principales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Funcionalidades empresariales diseñadas para maximizar la eficiencia de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
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

      {/* Modules by Category */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Módulos por Categoría</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              15 módulos especializados que cubren todas las áreas de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-gray-900 text-xl">{module.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {module.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors"
                      >
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

      {/* Technical Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tecnología de Vanguardia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Infraestructura moderna y segura que garantiza el mejor rendimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
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

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Números que Hablan</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              La confianza de miles de empresas respalda nuestra plataforma
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Empresas Activas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Tiempo de Actividad</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50M+</div>
              <div className="text-blue-100">Transacciones/Mes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Listo para ver GO Admin en acción?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Descubre cómo todas estas características pueden transformar la gestión de tu negocio. Agenda una demo
            personalizada o comienza tu prueba gratuita hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
            >
              Solicitar Demo Personalizada
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Prueba Gratis 14 Días
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Sin tarjeta de crédito • Configuración en 5 minutos • Soporte incluido
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GO</span>
                </div>
                <span className="text-xl font-bold">GO Admin</span>
              </div>
              <p className="text-gray-400 text-sm">
                La plataforma integral para gestionar tu negocio de manera eficiente y escalable.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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
                  <Link href="/industrias" className="hover:text-white transition-colors">
                    Industrias
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="hover:text-white transition-colors">
                    Precios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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
                  <Link href="/api" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 GO Admin. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
