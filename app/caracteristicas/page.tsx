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
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
    },
  ]

  const modules = [
    {
      category: "Ventas y Comercial",
      icon: CreditCard,
      color: "bg-green-100 text-green-600",
      features: [
        {
          name: "POS Punto de Venta",
          description: "Sistema completo para retail, restaurantes y gimnasios con caja integrada",
        },
        {
          name: "CRM Avanzado",
          description: "Gestión 360° de clientes con pipelines, automatizaciones y campañas",
        },
        {
          name: "E-commerce",
          description: "Tienda online integrada con sincronización automática de inventario",
        },
      ],
    },
    {
      category: "Operaciones",
      icon: Package,
      color: "bg-blue-100 text-blue-600",
      features: [
        {
          name: "Inventario Inteligente",
          description: "Control de stock en tiempo real con alertas automáticas y trazabilidad",
        },
        {
          name: "PMS Hotelero",
          description: "Gestión completa de reservas, check-in/out y channel manager",
        },
        {
          name: "Transport Scheduler",
          description: "Planificación de rutas, tickets QR y control operacional",
        },
      ],
    },
    {
      category: "Recursos Humanos",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
      features: [
        {
          name: "HRM Completo",
          description: "Empleados, contratos, nómina y evaluaciones de desempeño",
        },
        {
          name: "Control de Asistencia",
          description: "Turnos, horarios y vacaciones con check-in QR móvil",
        },
        {
          name: "Capacitación",
          description: "Planes de formación y seguimiento de competencias",
        },
      ],
    },
    {
      category: "Finanzas",
      icon: Building2,
      color: "bg-orange-100 text-orange-600",
      features: [
        {
          name: "Facturación Electrónica",
          description: "Facturación automática con timbrado DIAN y notas crédito/débito",
        },
        {
          name: "Contabilidad Integrada",
          description: "PUC configurable con asientos automáticos y estados financieros",
        },
        {
          name: "CxC y CxP",
          description: "Gestión completa de cuentas por cobrar y pagar con aging",
        },
      ],
    },
  ]

  const technicalFeatures = [
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Infraestructura en la nube con 99.9% de disponibilidad y backup automático",
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Aplicaciones nativas para iOS y Android con sincronización offline",
    },
    {
      icon: Lock,
      title: "Datos Seguros",
      description: "Cifrado end-to-end y cumplimiento de normativas internacionales",
    },
    {
      icon: Clock,
      title: "Tiempo Real",
      description: "Sincronización instantánea entre todos los dispositivos y sucursales",
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
              <Link href="/caracteristicas" className="text-blue-600 font-medium">
                Características
              </Link>
              <Link href="/integraciones" className="text-gray-600 hover:text-blue-600 transition-colors">
                Integraciones
              </Link>
              <Link href="/precios" className="text-gray-600 hover:text-blue-600 transition-colors">
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
          <Badge className="mb-4 bg-blue-100 text-blue-800">Características Completas</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Todo lo que necesitas en <span className="text-blue-600">una sola plataforma</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            GO Admin combina la potencia de múltiples sistemas especializados en una solución integral que crece con tu
            negocio.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Ver Demo en Vivo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Características Principales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Funcionalidades empresariales diseñadas para maximizar la eficiencia de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-gray-900 text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Módulos por Categoría</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              15 módulos especializados que cubren todas las áreas de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${module.color}`}>
                      <module.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-gray-900">{module.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tecnología de Vanguardia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Infraestructura moderna y segura que garantiza el mejor rendimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para ver GO Admin en acción?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Descubre cómo todas estas características pueden transformar la gestión de tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Solicitar Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Prueba Gratis 14 Días
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
