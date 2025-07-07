import { Bell, Mail, Settings, Filter } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotificacionesPage() {
  const features = [
    {
      icon: Mail,
      title: "Múltiples Canales",
      description: "Email, Push Web, WhatsApp, SMS y Webhook con configuración independiente por empresa.",
    },
    {
      icon: Settings,
      title: "Plantillas Dinámicas",
      description: "Plantillas con variables dinámicas, versiones A/B y personalización completa por canal.",
    },
    {
      icon: Filter,
      title: "Reglas Automáticas",
      description: "Condiciones SQL personalizadas con triggers por evento y niveles de severidad configurables.",
    },
    {
      icon: Bell,
      title: "Bandeja Unificada",
      description: "Centro de notificaciones con filtros, marca de leído e historial completo de entregas.",
    },
  ]

  return (
    <ModuleLayout
      title="Notificaciones & Alertas"
      description="Sistema completo de notificaciones multi-canal con reglas automáticas, plantillas dinámicas y bandeja unificada."
      icon={<Bell className="h-8 w-8 text-white" />}
      prevModule={{ name: "Reportes & Analítica", href: "/modulos/reportes" }}
      nextModule={{ name: "Integraciones", href: "/modulos/integraciones" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sistema de Notificaciones Avanzado</h2>
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
