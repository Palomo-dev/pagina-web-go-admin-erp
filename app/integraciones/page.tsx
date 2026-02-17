"use client"

import { Zap, ArrowRight, Check, Star } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function IntegracionesPage() {
  const integrationCategories = [
    {
      name: "Pagos y Finanzas",
      description: "Procesa pagos y gestiona finanzas automáticamente",
      color: "bg-green-100 border-green-200",
      integrations: [
        {
          name: "Stripe",
          description: "Procesamiento de pagos online y suscripciones",
          logo: "💳",
          popular: true,
          features: ["Pagos recurrentes", "Webhooks", "Multi-moneda"],
        },
        {
          name: "MercadoPago",
          description: "Pagos en Latinoamérica",
          logo: "💰",
          popular: true,
          features: ["QR codes", "Link de pago", "Cuotas"],
        },
        {
          name: "PayPal",
          description: "Pagos internacionales",
          logo: "🌐",
          features: ["PayPal Express", "Checkout", "Subscriptions"],
        },
        {
          name: "QuickBooks",
          description: "Contabilidad automática",
          logo: "📊",
          features: ["Sync automático", "Reportes", "Facturas"],
        },
      ],
    },
    {
      name: "E-commerce",
      description: "Sincroniza tu tienda online con el inventario",
      color: "bg-blue-100 border-blue-200",
      integrations: [
        {
          name: "Shopify",
          description: "Tienda online completa",
          logo: "🛍️",
          popular: true,
          features: ["Sync inventario", "Pedidos auto", "Productos"],
        },
        {
          name: "WooCommerce",
          description: "WordPress e-commerce",
          logo: "🔌",
          features: ["WordPress", "Plugins", "Personalizable"],
        },
        {
          name: "Magento",
          description: "E-commerce empresarial",
          logo: "🏪",
          features: ["Multi-tienda", "B2B", "Escalable"],
        },
        {
          name: "PrestaShop",
          description: "Solución e-commerce europea",
          logo: "🇪🇺",
          features: ["Multi-idioma", "Módulos", "Open source"],
        },
      ],
    },
    {
      name: "Marketing y CRM",
      description: "Automatiza campañas y gestiona clientes",
      color: "bg-purple-100 border-purple-200",
      integrations: [
        {
          name: "Mailchimp",
          description: "Email marketing automatizado",
          logo: "📧",
          popular: true,
          features: ["Campañas", "Segmentación", "Analytics"],
        },
        {
          name: "HubSpot",
          description: "CRM y marketing automation",
          logo: "🎯",
          features: ["Lead scoring", "Workflows", "Reportes"],
        },
        {
          name: "WhatsApp Business",
          description: "Mensajería empresarial",
          logo: "💬",
          popular: true,
          features: ["API oficial", "Templates", "Chatbots"],
        },
        {
          name: "Twilio",
          description: "SMS y comunicaciones",
          logo: "📱",
          features: ["SMS masivos", "Voice", "Verify"],
        },
      ],
    },
    {
      name: "Hotelería y Turismo",
      description: "Conecta con OTAs y sistemas hoteleros",
      color: "bg-orange-100 border-orange-200",
      integrations: [
        {
          name: "Booking.com",
          description: "OTA líder mundial",
          logo: "🏨",
          popular: true,
          features: ["Channel manager", "Tarifas", "Disponibilidad"],
        },
        {
          name: "Expedia",
          description: "Red global de viajes",
          logo: "✈️",
          features: ["Multi-marca", "Paquetes", "API"],
        },
        {
          name: "Airbnb",
          description: "Alquileres vacacionales",
          logo: "🏠",
          features: ["Calendario sync", "Precios", "Mensajes"],
        },
        {
          name: "SiteMinder",
          description: "Channel manager profesional",
          logo: "🔄",
          features: ["200+ canales", "Revenue", "Analytics"],
        },
      ],
    },
    {
      name: "Logística y Envíos",
      description: "Gestiona envíos y logística automáticamente",
      color: "bg-yellow-100 border-yellow-200",
      integrations: [
        {
          name: "Coordinadora",
          description: "Envíos nacionales Colombia",
          logo: "📦",
          popular: true,
          features: ["Tracking", "Cotizaciones", "Recogidas"],
        },
        {
          name: "Servientrega",
          description: "Logística integral",
          logo: "🚚",
          features: ["Nacional", "Internacional", "COD"],
        },
        {
          name: "DHL",
          description: "Envíos internacionales",
          logo: "🌍",
          features: ["Express", "Tracking", "Customs"],
        },
        {
          name: "Rappi",
          description: "Delivery on-demand",
          logo: "🛵",
          features: ["Last mile", "API", "Real-time"],
        },
      ],
    },
    {
      name: "Productividad",
      description: "Conecta con herramientas de trabajo diario",
      color: "bg-gray-100 border-gray-200",
      integrations: [
        {
          name: "Google Workspace",
          description: "Suite de productividad",
          logo: "📝",
          popular: true,
          features: ["Calendar", "Drive", "Gmail"],
        },
        {
          name: "Microsoft 365",
          description: "Herramientas empresariales",
          logo: "💼",
          features: ["Teams", "Outlook", "OneDrive"],
        },
        {
          name: "Slack",
          description: "Comunicación de equipos",
          logo: "💬",
          features: ["Notificaciones", "Bots", "Workflows"],
        },
        {
          name: "Zapier",
          description: "Automatización sin código",
          logo: "⚡",
          features: ["5000+ apps", "Triggers", "Actions"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar currentPage="/integraciones" />

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Marketplace de Integraciones</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Conecta con <span className="text-blue-600">todo tu ecosistema</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Más de 100 integraciones pre-construidas para conectar GO Admin con todas las herramientas que ya usas.
            Configuración en minutos, no en semanas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Ver Todas las Integraciones
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Solicitar Integración
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-16">
            {integrationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.integrations.map((integration, index) => (
                    <Card
                      key={index}
                      className={`${category.color} hover:shadow-lg transition-all duration-300 relative`}
                    >
                      {integration.popular && (
                        <div className="absolute -top-2 -right-2">
                          <Badge className="bg-orange-500 text-white">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="text-center pb-4">
                        <div className="text-4xl mb-3">{integration.logo}</div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        <CardDescription className="text-sm">{integration.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {integration.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" size="sm" className="w-full">
                          Configurar
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Zap className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿No encuentras tu integración?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Usa nuestra API REST completa para crear integraciones personalizadas o solicita que desarrollemos la
              integración que necesitas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">API REST Completa</h3>
                  <p className="text-sm text-gray-600">Documentación completa y SDKs disponibles</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Webhooks</h3>
                  <p className="text-sm text-gray-600">Recibe notificaciones en tiempo real</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Desarrollo Personalizado</h3>
                  <p className="text-sm text-gray-600">Creamos la integración que necesitas</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/api">Ver Documentación API</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Solicitar Integración Personalizada
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para conectar tu ecosistema?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Comienza a integrar todas tus herramientas favoritas con GO Admin y automatiza tu flujo de trabajo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Comenzar Prueba Gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Hablar con un Experto
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
