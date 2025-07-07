import { Package, TrendingUp, ArrowRightLeft, AlertTriangle, FileText, BarChart, Star } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InventarioPage() {
  const features = [
    {
      icon: Package,
      title: "Catálogo de Productos",
      description:
        "Gestión completa con categorías árbol, UoM, variantes, imágenes y códigos de barras para organización eficiente.",
    },
    {
      icon: TrendingUp,
      title: "Stock en Tiempo Real",
      description:
        "Control por sucursal, lote y serie con alertas de mínimos y vencimientos para evitar roturas de stock.",
    },
    {
      icon: ArrowRightLeft,
      title: "Movimientos de Inventario",
      description: "Entradas, salidas, traslados y ajustes con Kardex FIFO/AVG para trazabilidad completa.",
    },
    {
      icon: FileText,
      title: "Órdenes de Compra",
      description: "Gestión completa enlazada a proveedores con recepción automática y conexión directa con CxP.",
    },
  ]

  const movementTypes = [
    { type: "Entradas", desc: "Compras, devoluciones de clientes, ajustes positivos", color: "green" },
    { type: "Salidas", desc: "Ventas, devoluciones a proveedores, ajustes negativos", color: "red" },
    { type: "Traslados", desc: "Movimientos entre sucursales con trazabilidad", color: "blue" },
    { type: "Ajustes", desc: "Correcciones de inventario con justificación", color: "yellow" },
  ]

  const alerts = [
    "Stock mínimo alcanzado",
    "Productos próximos a vencer",
    "Movimientos inusuales detectados",
    "Diferencias en inventario físico",
    "Productos sin movimiento (obsoletos)",
  ]

  return (
    <ModuleLayout
      title="Inventario"
      description="Sistema completo de gestión de inventario con control en tiempo real, trazabilidad por lotes y alertas inteligentes para optimizar tu stock."
      icon={<Package className="h-8 w-8 text-white" />}
      prevModule={{ name: "POS Punto de Venta", href: "/modulos/pos" }}
      nextModule={{ name: "PMS Hotel & Parking", href: "/modulos/pms" }}
    >
      <div className="space-y-12">
        {/* Main Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Características Principales</h2>
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

        {/* Movement Types */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tipos de Movimientos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {movementTypes.map((movement, index) => {
              const colorClasses = {
                green: "bg-green-50 border-green-200 text-green-800",
                red: "bg-red-50 border-red-200 text-red-800",
                blue: "bg-blue-50 border-blue-200 text-blue-800",
                yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
              }

              return (
                <Card key={index} className={`${colorClasses[movement.color as keyof typeof colorClasses]} border-2`}>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">{movement.type}</h3>
                    <p className="text-sm opacity-80">{movement.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Quantifiable Benefits */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Beneficios Cuantificables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600 font-medium">Precisión en inventario</p>
              <p className="text-sm text-gray-500 mt-1">vs 70% método manual</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
              <p className="text-gray-600 font-medium">Reducción en roturas</p>
              <p className="text-sm text-gray-500 mt-1">de stock por alertas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
              <p className="text-gray-600 font-medium">Menos productos vencidos</p>
              <p className="text-sm text-gray-500 mt-1">con alertas automáticas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">45%</div>
              <p className="text-gray-600 font-medium">Tiempo ahorrado</p>
              <p className="text-sm text-gray-500 mt-1">en gestión diaria</p>
            </div>
          </div>
        </div>

        {/* Kardex and Valuation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Kardex y Valoración</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Método FIFO (Primero en Entrar, Primero en Salir)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Método Promedio Ponderado</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Historial completo de movimientos</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Valoración automática del inventario</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-900">Alertas Inteligentes</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              {alerts.map((alert, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span>{alert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Multi-location Management */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestión Multi-sucursal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stock por Sucursal</h3>
              <p className="text-sm text-gray-600">Control independiente de inventario en cada ubicación</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRightLeft className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Traslados Automáticos</h3>
              <p className="text-sm text-gray-600">Movimientos entre sucursales con trazabilidad completa</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reportes Consolidados</h3>
              <p className="text-sm text-gray-600">Visión global o por sucursal según necesidades</p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="bg-white rounded-3xl border-2 border-blue-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MR
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">María Rodríguez</h3>
                    <p className="text-sm text-gray-600">Gerente de Operaciones, SuperMercado Central</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Desde que implementamos GO Admin, nuestro control de inventario mejoró dramáticamente. Las alertas
                  automáticas nos han ahorrado miles de dólares en productos vencidos."
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0/5</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JL
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Juan López</h3>
                    <p className="text-sm text-gray-600">Director de Logística, Distribuidora Norte</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "La trazabilidad por lotes nos ha permitido cumplir con todas las regulaciones. El sistema Kardex es
                  impecable y los reportes son exactamente lo que necesitábamos."
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Integration Benefits */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Integración con Otros Módulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-green-800 mb-2">POS Integrado</h3>
                <p className="text-sm text-green-700">Descuento automático de stock con cada venta</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-800 mb-2">Compras Automáticas</h3>
                <p className="text-sm text-blue-700">Órdenes de compra basadas en mínimos y máximos</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-purple-800 mb-2">Contabilidad</h3>
                <p className="text-sm text-purple-700">Asientos automáticos por movimientos de inventario</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ModuleLayout>
  )
}
