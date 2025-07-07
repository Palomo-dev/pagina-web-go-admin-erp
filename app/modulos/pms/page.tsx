import { Building2, Calendar, Car, CreditCard, Users, MapPin } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PMSPage() {
  const hotelFeatures = [
    {
      icon: Calendar,
      title: "Gestión de Reservas",
      description:
        "Calendario drag-&-drop intuitivo para gestionar reservas, check-in/out automático y upgrade de habitaciones.",
    },
    {
      icon: Users,
      title: "Folios Multi-cuenta",
      description:
        "Gestión avanzada de folios con múltiples cuentas por reserva y cargos automáticos desde otros módulos.",
    },
    {
      icon: CreditCard,
      title: "Tarifas Avanzadas",
      description:
        "Sistema de tarifas dinámicas, paquetes personalizados y channel-manager OTA opcional para maximizar ingresos.",
    },
  ]

  const parkingFeatures = [
    {
      icon: MapPin,
      title: "Plano de Puestos",
      description:
        "Visualización gráfica de espacios de estacionamiento con estados en tiempo real y asignación automática.",
    },
    {
      icon: Car,
      title: "Control de Acceso",
      description: "Entrada y salida automatizada con tarifas por minuto/hora/día y gestión de abonos mensuales.",
    },
    {
      icon: Building2,
      title: "Integración Hotelera",
      description: "Sincronización perfecta con POS - cargos de habitación o parking fluyen automáticamente al folio.",
    },
  ]

  const pmsMetrics = [
    { metric: "ADR", description: "Average Daily Rate - Tarifa promedio diaria" },
    { metric: "RevPAR", description: "Revenue per Available Room - Ingresos por habitación disponible" },
    { metric: "Ocupación", description: "Porcentaje de ocupación en tiempo real" },
    { metric: "Estancia Promedio", description: "Duración promedio de las reservas" },
  ]

  return (
    <ModuleLayout
      title="PMS (Hotel & Parking)"
      description="Sistema completo de gestión hotelera y parking con reservas inteligentes, folios multi-cuenta y integración financiera automática."
      icon={<Building2 className="h-8 w-8 text-white" />}
      prevModule={{ name: "Inventario", href: "/modulos/inventario" }}
      nextModule={{ name: "Transport Scheduler", href: "/modulos/transport" }}
    >
      <div className="space-y-12">
        {/* Hotel Management */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gestión Hotelera Completa</h2>
          <div className="space-y-6">
            {hotelFeatures.map((feature, index) => (
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

        {/* Parking Management */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sistema de Parking Inteligente</h2>
          <div className="space-y-6">
            {parkingFeatures.map((feature, index) => (
              <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow bg-green-50">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-green-600" />
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

        {/* PMS Metrics */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Métricas Hoteleras Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pmsMetrics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{item.metric}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Flow */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Flujo de Reservas</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reserva</h3>
              <p className="text-sm text-gray-600">Cliente realiza reserva online o en recepción</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Check-in</h3>
              <p className="text-sm text-gray-600">Proceso automatizado con asignación de habitación</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Servicios</h3>
              <p className="text-sm text-gray-600">Cargos automáticos de restaurante, spa, parking</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Check-out</h3>
              <p className="text-sm text-gray-600">Facturación automática y cierre de folio</p>
            </div>
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <CreditCard className="h-6 w-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-900">Integración Financiera</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <span>Facturación automática al check-out</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <span>Asientos contables automáticos</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <span>Cargos desde POS y otros módulos</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <span>Reportes financieros en tiempo real</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Channel Manager</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Conexión con OTAs principales</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Sincronización de disponibilidad</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Gestión centralizada de tarifas</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Reservas automáticas desde múltiples canales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ModuleLayout>
  )
}
