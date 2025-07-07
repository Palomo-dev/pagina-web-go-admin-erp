import { Users, Target, Calendar, Mail, Zap, BarChart3 } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CRMPage() {
  const features = [
    {
      icon: Users,
      title: "Contactos 360°",
      description:
        "Gestión completa con tags, detección de duplicados y timeline de interacciones cross-módulo para visión integral del cliente.",
    },
    {
      icon: Target,
      title: "Pipelines Personalizables",
      description:
        "Pipelines por segmento (B2B, B2C) con drag-&-drop Kanban, probabilidad de cierre y seguimiento detallado.",
    },
    {
      icon: Calendar,
      title: "Tareas & Actividades",
      description: "Gestión de llamadas, visitas y emails con recordatorios automáticos y seguimiento de actividades.",
    },
    {
      icon: Mail,
      title: "Campañas Masivas",
      description:
        "Email/WhatsApp masivos con segmentos dinámicos, estadísticas de apertura/clic y análisis de rendimiento.",
    },
    {
      icon: Zap,
      title: "Automatizaciones",
      description: "Triggers inteligentes: lead nuevo, venta ganada, cumpleaños → acciones múltiples automáticas.",
    },
  ]

  const pipelineStages = [
    { stage: "Lead", color: "gray", desc: "Contacto inicial identificado" },
    { stage: "Calificado", color: "blue", desc: "Lead validado y calificado" },
    { stage: "Propuesta", color: "yellow", desc: "Propuesta comercial enviada" },
    { stage: "Negociación", color: "orange", desc: "En proceso de negociación" },
    { stage: "Ganado", color: "green", desc: "Venta cerrada exitosamente" },
    { stage: "Perdido", color: "red", desc: "Oportunidad perdida" },
  ]

  const automationTriggers = [
    "Nuevo lead registrado",
    "Venta ganada",
    "Cumpleaños del cliente",
    "Inactividad prolongada",
    "Carrito abandonado",
    "Fecha de seguimiento",
  ]

  const campaignMetrics = [
    { metric: "Tasa de Apertura", value: "24.5%", trend: "up" },
    { metric: "Tasa de Clic", value: "3.2%", trend: "up" },
    { metric: "Conversión", value: "1.8%", trend: "down" },
    { metric: "ROI Campaña", value: "340%", trend: "up" },
  ]

  return (
    <ModuleLayout
      title="CRM"
      description="Sistema completo de gestión de relaciones con clientes con automatizaciones inteligentes, campañas masivas y pipelines personalizables."
      icon={<Users className="h-8 w-8 text-white" />}
      prevModule={{ name: "Transport Scheduler", href: "/modulos/transport" }}
      nextModule={{ name: "HRM", href: "/modulos/hrm" }}
    >
      <div className="space-y-12">
        {/* Main Features */}
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

        {/* Pipeline Stages */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pipeline de Ventas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pipelineStages.map((stage, index) => {
              const colorClasses = {
                gray: "bg-gray-50 border-gray-200 text-gray-800",
                blue: "bg-blue-50 border-blue-200 text-blue-800",
                yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
                orange: "bg-orange-50 border-orange-200 text-orange-800",
                green: "bg-green-50 border-green-200 text-green-800",
                red: "bg-red-50 border-red-200 text-red-800",
              }

              return (
                <Card key={index} className={`${colorClasses[stage.color as keyof typeof colorClasses]} border-2`}>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">{stage.stage}</h3>
                    <p className="text-sm opacity-80">{stage.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Campaign Metrics */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Métricas de Campañas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignMetrics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">{item.value}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.metric}</p>
                <div
                  className={`inline-flex items-center text-xs px-2 py-1 rounded-full ${
                    item.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.trend === "up" ? "↗" : "↘"} Tendencia
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Triggers de Automatización</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              {automationTriggers.map((trigger, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>{trigger}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Análisis Avanzado</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Segmentación dinámica de clientes</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Predicción de comportamiento</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Análisis de lifetime value</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Reportes de rendimiento ROI</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Customer Journey */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Journey Integrado</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Captación</h3>
              <p className="text-sm text-gray-600">Formularios web, redes sociales, referencias</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Calificación</h3>
              <p className="text-sm text-gray-600">Scoring automático, segmentación inteligente</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Nutrición</h3>
              <p className="text-sm text-gray-600">Campañas automatizadas, contenido personalizado</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Conversión</h3>
              <p className="text-sm text-gray-600">Cierre de ventas, onboarding, fidelización</p>
            </div>
          </div>
        </div>

        {/* Cross-module Integration */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Integración Cross-módulo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-green-800 mb-2">POS Integrado</h3>
                <p className="text-sm text-green-700">Historial de compras automático en perfil del cliente</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-800 mb-2">PMS Hotel</h3>
                <p className="text-sm text-blue-700">Preferencias de huéspedes y historial de estancias</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-purple-800 mb-2">Finanzas</h3>
                <p className="text-sm text-purple-700">Estado de cuentas y comportamiento de pago</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ModuleLayout>
  )
}
