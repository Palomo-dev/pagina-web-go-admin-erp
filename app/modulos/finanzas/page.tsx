import { CreditCard, FileText, Calculator, Building, Repeat } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FinanzasPage() {
  const features = [
    {
      icon: FileText,
      title: "Facturación Electrónica",
      description:
        "Facturas de venta automáticas desde POS, PMS y Transport con timbrado DIAN/Tax API y notas crédito/débito.",
    },
    {
      icon: CreditCard,
      title: "Cuentas por Cobrar/Pagar",
      description: "Gestión completa con aging buckets, recordatorios automáticos y exportación CSV para análisis.",
    },
    {
      icon: Calculator,
      title: "Contabilidad Integrada",
      description: "PUC configurable, asientos automáticos y estados financieros (EERR y Balance) en tiempo real.",
    },
    {
      icon: Building,
      title: "Conciliación Bancaria",
      description: "Importación OFX/CSV para conciliación automática de movimientos bancarios y de caja.",
    },
    {
      icon: Repeat,
      title: "Suscripciones ERP",
      description: "Gestión automatizada con Stripe: planes, consumo y generación de facturas PDF.",
    },
  ]

  return (
    <ModuleLayout
      title="Finanzas & Facturación"
      description="Sistema financiero completo con facturación electrónica, contabilidad integrada y gestión automatizada de cuentas por cobrar y pagar."
      icon={<CreditCard className="h-8 w-8 text-white" />}
      prevModule={{ name: "HRM", href: "/modulos/hrm" }}
      nextModule={{ name: "Reportes & Analítica", href: "/modulos/reportes" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sistema Financiero Integral</h2>
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
