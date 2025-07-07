import { Users, CreditCard, BarChart3, Zap } from "lucide-react"
import { IndustryLayout } from "@/components/industry-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SaaSPage() {
  const keyModules = [
    {
      icon: Users,
      title: "Gestión Multi-tenant",
      description:
        "Arquitectura SaaS nativa con organizaciones independientes, planes flexibles y escalabilidad automática.",
      features: ["Multi-tenancy", "Planes dinámicos", "Escalabilidad", "Subdominios"],
    },
    {
      icon: CreditCard,
      title: "Billing Automatizado",
      description: "Facturación recurrente con Stripe, gestión de suscripciones y métricas MRR/ARR en tiempo real.",
      features: ["Facturación recurrente", "Métricas SaaS", "Stripe integrado", "Dunning management"],
    },
    {
      icon: BarChart3,
      title: "Analytics SaaS",
      description: "Dashboards especializados con métricas de retención, churn, LTV y análisis de cohortes.",
      features: ["Métricas de retención", "Análisis de churn", "LTV calculation", "Cohorte analysis"],
    },
    {
      icon: Zap,
      title: "API Management",
      description: "Gestión completa de APIs, webhooks, rate limiting y documentación automática para desarrolladores.",
      features: ["API Gateway", "Rate limiting", "Webhooks", "Documentación auto"],
    },
  ]

  const saasMetrics = [
    { metric: "MRR", value: "$45K", description: "Monthly Recurring Revenue" },
    { metric: "Churn", value: "2.3%", description: "Tasa de cancelación mensual" },
    { metric: "LTV", value: "$1,250", description: "Lifetime Value promedio" },
    { metric: "CAC", value: "$180", description: "Customer Acquisition Cost" },
  ]

  return (
    <IndustryLayout
      title="SaaS"
      description="Plataforma SaaS completa con multi-tenancy, billing automatizado, analytics avanzados y gestión de APIs."
      icon="💻"
      color="purple"
      prevIndustry={{ name: "Tienda", href: "/industrias/tienda" }}
      nextIndustry={{ name: "Gimnasio", href: "/industrias/gimnasio" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Módulos Especializados para SaaS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyModules.map((module, index) => (
              <Card key={index} className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-gray-900">{module.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-purple-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-purple-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Métricas SaaS Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saasMetrics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-purple-200">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">{item.value}</h3>
                <h4 className="font-semibold text-gray-900 mb-1">{item.metric}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </IndustryLayout>
  )
}
