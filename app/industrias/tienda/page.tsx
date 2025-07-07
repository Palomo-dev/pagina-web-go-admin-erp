import { ShoppingBag, Package, Users, BarChart3, CreditCard, Smartphone } from "lucide-react"
import { IndustryLayout } from "@/components/industry-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TiendaPage() {
  const keyModules = [
    {
      icon: ShoppingBag,
      title: "POS Retail",
      description:
        "Punto de venta especializado para retail con escáner, múltiples carritos y gestión de devoluciones.",
      features: ["Escáner de códigos", "Carritos simultáneos", "Gestión de devoluciones", "Pagos múltiples"],
    },
    {
      icon: Package,
      title: "Inventario Retail",
      description:
        "Control de stock por tallas, colores, ubicaciones con alertas automáticas y reposición inteligente.",
      features: ["Variantes por producto", "Control por ubicación", "Alertas de stock", "Reposición automática"],
    },
    {
      icon: Users,
      title: "CRM Retail",
      description:
        "Gestión de clientes con historial de compras, preferencias y programas de fidelidad personalizados.",
      features: ["Historial de compras", "Preferencias del cliente", "Programa de puntos", "Segmentación avanzada"],
    },
    {
      icon: Smartphone,
      title: "E-commerce Integrado",
      description: "Sincronización con tienda online, gestión de pedidos web y omnicanalidad completa.",
      features: ["Sync con e-commerce", "Pedidos online", "Click & Collect", "Inventario unificado"],
    },
  ]

  const retailFeatures = [
    "Gestión de variantes (tallas, colores)",
    "Control de stock por ubicación",
    "Promociones y descuentos automáticos",
    "Análisis de productos más vendidos",
    "Gestión de temporadas",
    "Integración con proveedores",
  ]

  const salesFlow = [
    { step: "Búsqueda", desc: "Cliente busca producto", icon: "🔍" },
    { step: "Selección", desc: "Escáner o búsqueda manual", icon: "📱" },
    { step: "Pago", desc: "Múltiples métodos", icon: "💳" },
    { step: "Factura", desc: "Electrónica automática", icon: "📄" },
  ]

  return (
    <IndustryLayout
      title="Tienda"
      description="ERP retail completo con POS especializado, gestión de inventario por variantes y integración e-commerce."
      icon="🛍️"
      color="green"
      prevIndustry={{ name: "Hotel", href: "/industrias/hotel" }}
      nextIndustry={{ name: "SaaS", href: "/industrias/saas" }}
    >
      <div className="space-y-12">
        {/* Key Modules */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Módulos Especializados para Retail</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyModules.map((module, index) => (
              <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <module.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-gray-900">{module.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-green-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-green-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sales Flow */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Flujo de Venta Retail</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {salesFlow.map((flow, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{flow.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{flow.step}</h3>
                <p className="text-sm text-gray-600">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Retail Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Características Retail</h2>
            <ul className="space-y-4">
              {retailFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Análisis de Ventas</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">$2,450</div>
                <div className="text-sm text-gray-600">Venta promedio diaria</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">156</div>
                <div className="text-sm text-gray-600">Productos vendidos/día</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">92%</div>
                <div className="text-sm text-gray-600">Disponibilidad de stock</div>
              </div>
            </div>
          </div>
        </div>

        {/* Omnichannel */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experiencia Omnicanal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tienda Física</h3>
              <p className="text-sm text-gray-600">POS integrado con inventario en tiempo real</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">E-commerce</h3>
              <p className="text-sm text-gray-600">Tienda online sincronizada automáticamente</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Click & Collect</h3>
              <p className="text-sm text-gray-600">Compra online, recoge en tienda</p>
            </div>
          </div>
        </div>
      </div>
    </IndustryLayout>
  )
}
