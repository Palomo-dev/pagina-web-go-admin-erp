import { Zap, Key, FolderSyncIcon as Sync, Settings, Globe } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntegracionesPage() {
  const features = [
    {
      icon: Globe,
      title: "Marketplace de Conectores",
      description: "Stripe, MercadoPago, QuickBooks, Shopify, SiteMinder, Zapier y más integraciones pre-construidas.",
    },
    {
      icon: Settings,
      title: "Wizard de Conexión",
      description: "Configuración guiada con OAuth/API-key, mapeo de catálogos y modo one-way/two-way.",
    },
    {
      icon: Sync,
      title: "Sync Jobs Inteligentes",
      description: "Sincronización con logs detallados, métricas de rendimiento y sistema de reintentos automático.",
    },
    {
      icon: Key,
      title: "API Keys & Webhooks",
      description: "Scopes granulares, firma secreta y dashboard completo de uso y monitoreo.",
    },
  ]

  return (
    <ModuleLayout
      title="Integraciones"
      description="Marketplace completo de integraciones con configuración guiada, sincronización inteligente y APIs robustas para conectar tu ERP."
      icon={<Zap className="h-8 w-8 text-white" />}
      prevModule={{ name: "Notificaciones & Alertas", href: "/modulos/notificaciones" }}
      nextModule={{ name: "Calendario & Actividades", href: "/modulos/calendario" }}
    >
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ecosistema de Integraciones</h2>
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
