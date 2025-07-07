import { Building2, Calendar, CreditCard, Users, Car, BarChart3 } from "lucide-react"
import { IndustryLayout } from "@/components/industry-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HotelPage() {
  const keyModules = [
    {
      icon: Building2,
      title: "PMS Hotelero",
      description:
        "Sistema completo de gestión hotelera con reservas, check-in/out, folios y channel manager integrado.",
      features: ["Gestión de reservas", "Check-in/out automático", "Folios multi-cuenta", "Channel Manager OTA"],
    },
    {
      icon: Car,
      title: "Parking Integrado",
      description: "Control de estacionamiento del hotel con tarifas especiales para huéspedes y cargos automáticos.",
      features: ["Tarifas para huéspedes", "Cargos al folio", "Control de acceso", "Abonos mensuales"],
    },
    {
      icon: Users,
      title: "CRM Hotelero",
      description: "Gestión de huéspedes con preferencias, historial de estancias y programas de fidelidad.",
      features: ["Perfil de huésped", "Historial completo", "Preferencias de habitación", "Programa VIP"],
    },
    {
      icon: CreditCard,
      title: "Finanzas Hoteleras",
      description: "Facturación automática, cargos por servicios y reportes financieros especializados para hoteles.",
      features: ["Facturación al checkout", "Cargos de servicios", "Reportes ADR/RevPAR", "Conciliación bancaria"],
    },
  ]

  const hotelMetrics = [
    { metric: "ADR", value: "$85", description: "Average Daily Rate" },
    { metric: "RevPAR", value: "$68", description: "Revenue per Available Room" },
    { metric: "Ocupación", value: "78%", description: "Porcentaje de ocupación" },
    { metric: "Estancia", value: "2.3", description: "Noches promedio" },
  ]

  const guestJourney = [
    { step: "Reserva", desc: "Online, OTA o directa", icon: "📅" },
    { step: "Check-in", desc: "Rápido y automatizado", icon: "🔑" },
    { step: "Servicios", desc: "Restaurante, spa, parking", icon: "🛎️" },
    { step: "Check-out", desc: "Facturación automática", icon: "💳" },
  ]

  return (
    <IndustryLayout
      title="Hotel"
      description="Solución hotelera completa con PMS, gestión de reservas, channel manager y control financiero especializado."
      icon="🏨"
      color="blue"
      prevIndustry={{ name: "Restaurante", href: "/industrias/restaurante" }}
      nextIndustry={{ name: "Tienda", href: "/industrias/tienda" }}
    >
      <div className="space-y-12">
        {/* Key Modules */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Módulos Especializados para Hoteles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyModules.map((module, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-gray-900">{module.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-blue-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-blue-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hotel Metrics */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Métricas Hoteleras en Tiempo Real</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotelMetrics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-blue-200">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{item.value}</h3>
                <h4 className="font-semibold text-gray-900 mb-1">{item.metric}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Journey */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Journey del Huésped</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {guestJourney.map((journey, index) => (
              <Card key={index} className="text-center border-blue-100">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{journey.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{journey.step}</h3>
                  <p className="text-sm text-gray-600">{journey.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Channel Manager</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Conexión con Booking.com, Expedia, Airbnb</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Sincronización automática de disponibilidad</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Gestión centralizada de tarifas</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Reportes de rendimiento por canal</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">Revenue Management</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Tarifas dinámicas por temporada</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Análisis de competencia automático</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Optimización de ingresos por habitación</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Forecasting de ocupación</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </IndustryLayout>
  )
}
