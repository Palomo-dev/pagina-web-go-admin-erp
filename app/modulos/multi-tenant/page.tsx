import { Building2, Crown, MapPin, Palette, Settings, Users, Star, CheckCircle, TrendingUp } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MultiTenantPage() {
  const features = [
    {
      icon: Building2,
      title: "Organizaciones",
      description:
        "Alta rápida al registrarse con logo, color corporativo y subdominio SaaS. Selección múltiple de tipos: Restaurante, Hotel, Tienda, Gym, SaaS, Transporte, Parking.",
    },
    {
      icon: Crown,
      title: "Planes & Suscripción",
      description:
        "Catálogo de planes con upgrade/downgrade vía Stripe. Prueba gratuita configurable, límites de módulos y sucursales por plan con historial completo.",
    },
    {
      icon: MapPin,
      title: "Sucursales",
      description:
        "CRUD de sedes con geo-data y zona horaria. Cada módulo opera aislado por branch con reportes independientes o consolidados.",
    },
    {
      icon: Palette,
      title: "Branding & Módulos",
      description:
        "Personalización completa: tema de colores, favicon, facturas corporativas. Activación/desactivación de POS, PMS, CRM según necesidades.",
    },
  ]

  const businessTypes = [
    { name: "Restaurante", icon: "🍽️", description: "POS F&B, mesas, cocina", clients: "1,200+" },
    { name: "Hotel", icon: "🏨", description: "PMS, reservas, folios", clients: "800+" },
    { name: "Tienda", icon: "🛍️", description: "POS retail, inventario", clients: "2,500+" },
    { name: "Gimnasio", icon: "💪", description: "Membresías, clases, QR", clients: "600+" },
    { name: "SaaS", icon: "💻", description: "Suscripciones, usuarios", clients: "300+" },
    { name: "Transporte", icon: "🚌", description: "Rutas, tickets, horarios", clients: "150+" },
    { name: "Parking", icon: "🅿️", description: "Puestos, tarifas, abonos", clients: "400+" },
  ]

  const scalabilityMetrics = [
    { metric: "10,000+", description: "Organizaciones activas", icon: Building2 },
    { metric: "50,000+", description: "Sucursales gestionadas", icon: MapPin },
    { metric: "99.9%", description: "Tiempo de actividad", icon: TrendingUp },
    { metric: "< 200ms", description: "Tiempo de respuesta", icon: Settings },
  ]

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/mes",
      features: ["1 Organización", "3 Sucursales", "5 Módulos básicos", "Soporte email"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/mes",
      features: ["1 Organización", "10 Sucursales", "Todos los módulos", "Soporte 24/7", "API completa"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      features: ["Múltiples organizaciones", "Sucursales ilimitadas", "Módulos personalizados", "Soporte dedicado"],
      popular: false,
    },
  ]

  return (
    <ModuleLayout
      title="Gestión Multi-tenant"
      description="Arquitectura multi-tenant completa que permite gestionar múltiples organizaciones, sucursales y planes de suscripción desde una sola plataforma."
      icon={<Building2 className="h-8 w-8 text-white" />}
      prevModule={{ name: "Autenticación & Autorización", href: "/modulos/autenticacion" }}
      nextModule={{ name: "Roles & Permisos", href: "/modulos/roles-permisos" }}
    >
      <div className="space-y-12">
        {/* Scalability Metrics */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Escalabilidad Empresarial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scalabilityMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <p className="text-gray-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Características Principales</h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-gray-900 text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-2">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Types */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tipos de Negocio Soportados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {businessTypes.map((type, index) => (
              <Card
                key={index}
                className="text-center border-blue-100 hover:border-blue-300 transition-colors hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                  <div className="bg-blue-50 px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-blue-700">{type.clients} clientes</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Planes de Suscripción</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-2 border-blue-500 shadow-xl" : "border border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Más Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"}`}
                  >
                    {plan.name === "Enterprise" ? "Contactar Ventas" : "Comenzar Prueba"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Arquitectura Escalable</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Aislamiento completo de datos por organización</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Subdominios personalizados automáticos</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Gestión de recursos por sucursal</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Reportes consolidados o independientes</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Gestión de Suscripciones</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Integración nativa con Stripe</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Upgrade/downgrade automático</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Límites dinámicos por plan</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Historial completo de cambios</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-white rounded-3xl border-2 border-blue-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Caso de Éxito: Cadena Hotelera</h2>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  GH
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Grand Hotels International</h3>
                  <p className="text-gray-600">Cadena hotelera con 25 hoteles en 8 países</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "GO Admin nos permitió centralizar la gestión de todos nuestros hoteles manteniendo la autonomía
                operativa de cada propiedad. La implementación fue increíblemente rápida y el ROI se vio en el primer
                mes."
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">25</div>
                  <p className="text-sm text-gray-600">Hoteles conectados</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">8</div>
                  <p className="text-sm text-gray-600">Países operando</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">40%</div>
                  <p className="text-sm text-gray-600">Reducción en costos</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">2 semanas</div>
                  <p className="text-sm text-gray-600">Tiempo implementación</p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">5.0/5 - Calificación del cliente</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Calcula tu Ahorro</h2>
            <p className="text-xl text-blue-100">
              Descubre cuánto puedes ahorrar con nuestra arquitectura multi-tenant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
              <p className="text-blue-100">Reducción en costos IT</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <p className="text-blue-100">Menos tiempo de setup</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <p className="text-blue-100">Disponibilidad garantizada</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-blue-100">Soporte especializado</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Solicitar Demo Personalizada
            </Button>
          </div>
        </div>
      </div>
    </ModuleLayout>
  )
}
