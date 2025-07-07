import { Car, MapPin, Clock, CreditCard } from "lucide-react"
import { IndustryLayout } from "@/components/industry-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ParqueaderoPage() {
  const keyModules = [
    {
      icon: MapPin,
      title: "Plano Inteligente",
      description: "Visualización gráfica de espacios con estados en tiempo real y asignación automática de puestos.",
      features: ["Plano visual", "Estados tiempo real", "Asignación automática", "Diferentes tipos"],
    },
    {
      icon: Clock,
      title: "Control de Tarifas",
      description: "Sistema flexible de tarifas por minuto/hora/día con abonos mensuales y descuentos especiales.",
      features: ["Tarifas flexibles", "Abonos mensuales", "Descuentos especiales", "Tarifas por zona"],
    },
    {
      icon: Car,
      title: "Control de Acceso",
      description: "Entrada y salida automatizada con reconocimiento de placas y barreras inteligentes.",
      features: ["Reconocimiento placas", "Barreras automáticas", "Control acceso", "Alertas seguridad"],
    },
    {
      icon: CreditCard,
      title: "Pagos Integrados",
      description: "Múltiples métodos de pago con facturación automática y integración con sistemas hoteleros.",
      features: ["Pagos múltiples", "Facturación auto", "Integración hotel", "Reportes financieros"],
    },
  ]

  return (
    <IndustryLayout
      title="Parqueadero"
      description="Sistema completo de gestión de parqueaderos con control de acceso, tarifas flexibles y plano inteligente en tiempo real."
      icon="🅿️"
      color="yellow"
      prevIndustry={{ name: "Gimnasio", href: "/industrias/gimnasio" }}
      nextIndustry={{ name: "Transporte", href: "/industrias/transporte" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Módulos Especializados para Parqueaderos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyModules.map((module, index) => (
              <Card key={index} className="border-yellow-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-gray-900">{module.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-yellow-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-yellow-800 font-medium">{feature}</span>
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
