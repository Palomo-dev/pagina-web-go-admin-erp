import { Activity, Eye, AlertCircle, Monitor, FileText } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OperacionesPage() {
  const features = [
    {
      icon: Activity,
      title: "Dashboard 360°",
      description: "KPIs en vivo: ventas/hora, ocupación, incidencias con semáforo de servicios en tiempo real.",
    },
    {
      icon: Eye,
      title: "Feed en Tiempo Real",
      description: "Timeline de eventos con filtros por módulo/sucursal para monitoreo operacional completo.",
    },
    {
      icon: AlertCircle,
      title: "Gestión de Pendientes",
      description: "Pagos, folios abiertos, órdenes de mantenimiento con botón 'Resolver' para acción inmediata.",
    },
    {
      icon: Monitor,
      title: "Monitor de Servicios",
      description: "Estado de webhooks, impresoras, pasarelas con métricas de latencia y disponibilidad.",
    },
    {
      icon: FileText,
      title: "Auditoría Transversal",
      description: "Tabla única de cambios críticos con trazabilidad completa cross-módulo.",
    },
  ]

  return (
    <ModuleLayout
      title="Operaciones"
      description="Centro de comando operacional con dashboard 360°, monitoreo en tiempo real y gestión centralizada de incidencias y pendientes."
      icon={<Activity className="h-8 w-8 text-white" />}
      prevModule={{ name: "Calendario & Actividades", href: "/modulos/calendario" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Centro de Comando Operacional</h2>
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
      </div>
    </ModuleLayout>
  )
}
