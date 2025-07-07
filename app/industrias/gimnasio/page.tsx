import { Dumbbell, Users, Calendar, QrCode } from "lucide-react"
import { IndustryLayout } from "@/components/industry-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GimnasioPage() {
  const keyModules = [
    {
      icon: Dumbbell,
      title: "POS Gimnasio",
      description: "Punto de venta especializado con membresías recurrentes, agenda de clases y extras a crédito.",
      features: ["Membresías recurrentes", "Agenda de clases", "Extras a crédito", "Check-in QR"],
    },
    {
      icon: Users,
      title: "Gestión de Miembros",
      description: "CRM especializado con planes de entrenamiento, seguimiento de progreso y renovaciones automáticas.",
      features: ["Perfil completo", "Planes de entrenamiento", "Seguimiento progreso", "Renovaciones auto"],
    },
    {
      icon: Calendar,
      title: "Agenda de Clases",
      description: "Sistema de reservas para clases grupales, instructores y espacios con límites de capacidad.",
      features: ["Reserva de clases", "Gestión instructores", "Control capacidad", "Lista de espera"],
    },
    {
      icon: QrCode,
      title: "Control de Acceso",
      description: "Sistema QR para check-in/out, control de horarios y estadísticas de uso de instalaciones.",
      features: ["Check-in QR", "Control horarios", "Estadísticas uso", "Alertas de seguridad"],
    },
  ]

  return (
    <IndustryLayout
      title="Gimnasio"
      description="ERP especializado para gimnasios con gestión de membresías, agenda de clases, control de acceso QR y seguimiento de miembros."
      icon="💪"
      color="red"
      prevIndustry={{ name: "SaaS", href: "/industrias/saas" }}
      nextIndustry={{ name: "Parqueadero", href: "/industrias/parqueadero" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Módulos Especializados para Gimnasios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyModules.map((module, index) => (
              <Card key={index} className="border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-gray-900">{module.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-red-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-red-800 font-medium">{feature}</span>
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
