import { Route, Users, QrCode, Clock } from "lucide-react"
import { IndustryLayout } from "@/components/industry-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TransportePage() {
  const keyModules = [
    {
      icon: Route,
      title: "Gestión de Rutas",
      description: "Planificación completa de rutas con flota, conductores y plantillas de asientos personalizables.",
      features: ["Planificación rutas", "Gestión flota", "Asignación conductores", "Plantillas asientos"],
    },
    {
      icon: QrCode,
      title: "Tickets Inteligentes",
      description: "Venta de tickets con QR, asignación de asientos y check-in automático para control de acceso.",
      features: ["Tickets con QR", "Asignación asientos", "Check-in automático", "Venta online"],
    },
    {
      icon: Users,
      title: "Venta Corporativa",
      description: "Modalidades B2B y B2C con contratos empresariales, descuentos especiales y facturación masiva.",
      features: ["Contratos B2B", "Descuentos especiales", "Facturación masiva", "Reportes corporativos"],
    },
    {
      icon: Clock,
      title: "Control Operacional",
      description: "Monitoreo de puntualidad, ocupación en tiempo real y optimización automática de horarios.",
      features: ["Control puntualidad", "Ocupación tiempo real", "Optimización horarios", "Alertas operativas"],
    },
  ]

  return (
    <IndustryLayout
      title="Transporte"
      description="ERP completo para empresas de transporte con gestión de rutas, tickets QR, venta corporativa y control operacional."
      icon="🚌"
      color="pink"
      prevIndustry={{ name: "Parqueadero", href: "/industrias/parqueadero" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Módulos Especializados para Transporte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyModules.map((module, index) => (
              <Card key={index} className="border-pink-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-gray-900">{module.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-pink-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-pink-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </IndustryLayout>
  )
}
