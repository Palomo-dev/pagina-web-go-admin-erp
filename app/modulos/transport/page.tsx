import { Bus, Route, Users, QrCode, Clock, MapPin } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TransportPage() {
  const features = [
    {
      icon: Route,
      title: "Rutas & Horarios",
      description:
        "Gestión completa de rutas con flota y conductores asignados. Plantillas de asientos personalizables por tipo de bus.",
    },
    {
      icon: QrCode,
      title: "Tickets con QR",
      description:
        "Venta de tickets con asignación de asiento y QR-check-in para control de acceso y validación automática.",
    },
    {
      icon: Users,
      title: "Venta Corporativa",
      description: "Modalidades de venta individual y corporativa con descuentos especiales y facturación empresarial.",
    },
    {
      icon: Clock,
      title: "Reportes de Operación",
      description: "Análisis de ocupación y puntualidad con integración completa de pagos vía POS/Finanzas.",
    },
  ]

  const operationalFeatures = [
    "Gestión de flota y conductores",
    "Plantillas de asientos por vehículo",
    "Control de puntualidad en tiempo real",
    "Alertas de retrasos automáticas",
    "Optimización de rutas",
    "Mantenimiento preventivo",
  ]

  const ticketTypes = [
    { type: "Individual", desc: "Venta directa a pasajeros", color: "blue" },
    { type: "Corporativo", desc: "Contratos empresariales", color: "green" },
    { type: "Abono", desc: "Pases mensuales/anuales", color: "purple" },
    { type: "Promocional", desc: "Descuentos especiales", color: "orange" },
  ]

  return (
    <ModuleLayout
      title="Transport Scheduler"
      description="Sistema completo de gestión de transporte con rutas inteligentes, venta de tickets con QR y control operacional en tiempo real."
      icon={<Bus className="h-8 w-8 text-white" />}
      prevModule={{ name: "PMS Hotel & Parking", href: "/modulos/pms" }}
      nextModule={{ name: "CRM", href: "/modulos/crm" }}
    >
      <div className="space-y-12">
        {/* Main Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ticket Types */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tipos de Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ticketTypes.map((ticket, index) => {
              const colorClasses = {
                blue: "bg-blue-50 border-blue-200 text-blue-800",
                green: "bg-green-50 border-green-200 text-green-800",
                purple: "bg-purple-50 border-purple-200 text-purple-800",
                orange: "bg-orange-50 border-orange-200 text-orange-800",
              }

              return (
                <Card key={index} className={`${colorClasses[ticket.color as keyof typeof colorClasses]} border-2`}>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">{ticket.type}</h3>
                    <p className="text-sm opacity-80">{ticket.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Operational Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Bus className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Gestión Operacional</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              {operationalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Control de Rutas</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Seguimiento GPS en tiempo real</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Optimización automática de rutas</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Alertas de desvíos y retrasos</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Historial de rutas completadas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* QR Check-in Process */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Check-in con QR</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compra</h3>
              <p className="text-sm text-gray-600">Cliente compra ticket con asiento asignado</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">QR Generado</h3>
              <p className="text-sm text-gray-600">Sistema genera QR único para el viaje</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Validación</h3>
              <p className="text-sm text-gray-600">Conductor escanea QR al abordar</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confirmación</h3>
              <p className="text-sm text-gray-600">Sistema confirma asiento y actualiza ocupación</p>
            </div>
          </div>
        </div>

        {/* Integration with Other Modules */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Integración con Otros Módulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-800 mb-2">POS Integrado</h3>
                <p className="text-sm text-blue-700">Venta de tickets directa desde punto de venta</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-green-800 mb-2">Finanzas</h3>
                <p className="text-sm text-green-700">Facturación automática y asientos contables</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-purple-800 mb-2">CRM</h3>
                <p className="text-sm text-purple-700">Historial de viajes y programas de fidelidad</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ModuleLayout>
  )
}
