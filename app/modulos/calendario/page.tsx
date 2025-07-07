import { Calendar, CheckSquare, Clock, User } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CalendarioPage() {
  const features = [
    {
      icon: Calendar,
      title: "Calendario Completo",
      description:
        "Vista mensual/semanal/día con eventos, tareas y recordatorios. Soporte RRULE para eventos recurrentes.",
    },
    {
      icon: CheckSquare,
      title: "Tareas Integradas",
      description: "To-dos enlazadas a clientes, reservas, órdenes con seguimiento cross-módulo automático.",
    },
    {
      icon: Clock,
      title: "Timeline Operacional",
      description: "Flujo cronológico de toda la operación con enlaces directos al registro de origen.",
    },
    {
      icon: User,
      title: "Preferencias Personales",
      description: "Zona horaria, vista por defecto y módulos ocultos configurables por usuario.",
    },
  ]

  return (
    <ModuleLayout
      title="Calendario & Actividades"
      description="Sistema centralizado de calendario con tareas integradas, timeline operacional y preferencias personalizables por usuario."
      icon={<Calendar className="h-8 w-8 text-white" />}
      prevModule={{ name: "Integraciones", href: "/modulos/integraciones" }}
      nextModule={{ name: "Operaciones", href: "/modulos/operaciones" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gestión Centralizada de Actividades</h2>
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
