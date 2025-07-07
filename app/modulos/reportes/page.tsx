import { BarChart3, Layout, Calendar, AlertTriangle } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReportesPage() {
  const features = [
    {
      icon: Layout,
      title: "Dashboards Editables",
      description: "Builder drag-&-drop de widgets SQL con filtros globales para crear dashboards personalizados.",
    },
    {
      icon: BarChart3,
      title: "Vistas Pre-configuradas",
      description: "Reportes listos: Ventas, Inventario, PMS (ADR, RevPAR), HRM (rotación), CRM (embudo de ventas).",
    },
    {
      icon: Calendar,
      title: "Programador de Reportes",
      description: "Envíos automáticos PDF/Excel vía email/WhatsApp con expresiones CRON personalizables.",
    },
    {
      icon: AlertTriangle,
      title: "KPI & Alertas",
      description: "Umbrales con severidad que disparan notificaciones automáticas y feed de operaciones.",
    },
  ]

  return (
    <ModuleLayout
      title="Reportes & Analítica"
      description="Sistema avanzado de reportes con dashboards personalizables, KPIs en tiempo real y programación automática de envíos."
      icon={<BarChart3 className="h-8 w-8 text-white" />}
      prevModule={{ name: "Finanzas & Facturación", href: "/modulos/finanzas" }}
      nextModule={{ name: "Notificaciones & Alertas", href: "/modulos/notificaciones" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Analítica Empresarial Avanzada</h2>
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
      </div>
    </ModuleLayout>
  )
}
