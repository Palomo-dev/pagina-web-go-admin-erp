import { Users, FileText, Clock, DollarSign, Award, UserPlus } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HRMPage() {
  const features = [
    {
      icon: Users,
      title: "Empleados & Contratos",
      description:
        "Gestión completa con firma electrónica, control de expiración y documentación digital centralizada.",
    },
    {
      icon: Clock,
      title: "Control de Asistencia",
      description: "Turnos y calendario con QR mobile, reglas de overtime y control de llegadas tarde automático.",
    },
    {
      icon: FileText,
      title: "Vacaciones & Licencias",
      description: "Flujo de aprobación automatizado con saldo en tiempo real y notificaciones automáticas.",
    },
    {
      icon: DollarSign,
      title: "Nómina Automatizada",
      description: "Cálculo bruto-neto, generación de PDF de recibos, pago masivo y asiento contable automático.",
    },
    {
      icon: Award,
      title: "Evaluaciones & Formación",
      description: "Sistema de evaluaciones de desempeño, planes de formación y gestión de beneficios.",
    },
    {
      icon: UserPlus,
      title: "Reclutamiento",
      description: "Pipeline completo de reclutamiento desde publicación hasta contratación.",
    },
  ]

  return (
    <ModuleLayout
      title="HRM (Recursos Humanos)"
      description="Sistema integral de gestión de recursos humanos con nómina automatizada, control de asistencia y evaluaciones de desempeño."
      icon={<Users className="h-8 w-8 text-white" />}
      prevModule={{ name: "CRM", href: "/modulos/crm" }}
      nextModule={{ name: "Finanzas & Facturación", href: "/modulos/finanzas" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gestión Integral de RRHH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
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
