import { ShoppingCart, Users, Clock, Package, BarChart3 } from "lucide-react"
import { IndustryLayout } from "@/components/industry-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RestaurantePage() {
  const keyModules = [
    {
      icon: ShoppingCart,
      title: "POS F&B Especializado",
      description:
        "Plano de mesas drag-&-drop, comandas KDS en tiempo real, pre-cuentas y split-bill para restaurantes.",
      features: ["Gestión visual de mesas", "Kitchen Display System", "División de cuentas", "Comandas por cocina"],
    },
    {
      icon: Package,
      title: "Inventario de Alimentos",
      description: "Control de stock con fechas de vencimiento, recetas, costos por plato y alertas de ingredientes.",
      features: ["Control de vencimientos", "Recetas y costos", "Alertas de stock", "Kardex FIFO"],
    },
    {
      icon: Users,
      title: "CRM Gastronómico",
      description: "Gestión de clientes con preferencias alimentarias, historial de pedidos y programas de fidelidad.",
      features: ["Preferencias del cliente", "Historial de pedidos", "Programas de lealtad", "Reservas integradas"],
    },
    {
      icon: Clock,
      title: "HRM Restaurante",
      description: "Gestión de turnos de cocina y servicio, control de propinas y nómina especializada.",
      features: ["Turnos de cocina/servicio", "Control de propinas", "Asistencia por QR", "Nómina gastronómica"],
    },
  ]

  const workflows = [
    {
      step: "1",
      title: "Pedido",
      description: "Cliente realiza pedido en mesa o delivery",
    },
    {
      step: "2",
      title: "Cocina",
      description: "Comanda aparece en KDS con tiempos",
    },
    {
      step: "3",
      title: "Servicio",
      description: "Plato listo, notificación a mesero",
    },
    {
      step: "4",
      title: "Facturación",
      description: "Pago y factura electrónica automática",
    },
  ]

  const benefits = [
    "Reducción de 40% en errores de comandas",
    "Optimización de tiempos de cocina",
    "Control automático de costos por plato",
    "Gestión eficiente de mesas y reservas",
    "Análisis de platos más vendidos",
    "Integración con delivery apps",
  ]

  return (
    <IndustryLayout
      title="Restaurante"
      description="ERP especializado para restaurantes con POS F&B, gestión de mesas, comandas digitales y control de costos por plato."
      icon="🍽️"
      color="orange"
      nextIndustry={{ name: "Hotel", href: "/industrias/hotel" }}
    >
      <div className="space-y-12">
        {/* Key Modules */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Módulos Clave para Restaurantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyModules.map((module, index) => (
              <Card key={index} className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-gray-900">{module.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-orange-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-orange-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Flujo Operacional del Restaurante</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflows.map((workflow, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{workflow.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{workflow.title}</h3>
                <p className="text-sm text-gray-600">{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Beneficios Específicos</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-6 w-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-900">Métricas Clave</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">85%</div>
                <div className="text-sm text-gray-600">Reducción en errores de comandas</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">12min</div>
                <div className="text-sm text-gray-600">Tiempo promedio de servicio</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">23%</div>
                <div className="text-sm text-gray-600">Aumento en rotación de mesas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IndustryLayout>
  )
}
