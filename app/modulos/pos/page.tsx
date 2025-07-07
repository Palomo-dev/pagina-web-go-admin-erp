import { ShoppingCart, Utensils, Dumbbell, CreditCard, Receipt, BarChart3 } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function POSPage() {
  const posTypes = [
    {
      icon: ShoppingCart,
      title: "Core Retail",
      description:
        "Búsqueda por escáner, carritos simultáneos, pagos parciales, CxC, devoluciones. Caja chica con apertura, movimientos, arqueo y PDF de cierre X/Z.",
      features: [
        "Escáner de códigos",
        "Múltiples carritos",
        "Pagos parciales",
        "Gestión de devoluciones",
        "Caja chica integrada",
      ],
    },
    {
      icon: Utensils,
      title: "F&B (Restauración & Cocina)",
      description:
        "Plano de mesas drag-&-drop, comandas KDS en tiempo real, pre-cuentas, split-bill para restaurantes y bares.",
      features: ["Plano de mesas visual", "KDS tiempo real", "Pre-cuentas", "División de cuenta", "Comandas de cocina"],
    },
    {
      icon: Dumbbell,
      title: "Gym (Membresías & Extras)",
      description:
        "Planes recurrentes, agenda de clases, QR-check-in, extras a crédito para gimnasios y centros deportivos.",
      features: ["Membresías recurrentes", "Agenda de clases", "Check-in QR", "Extras a crédito", "Control de acceso"],
    },
  ]

  const integrations = [
    { name: "Facturación Electrónica", desc: "Cada venta genera factura DIAN automáticamente" },
    { name: "Contabilidad", desc: "Asientos contables automáticos por cada transacción" },
    { name: "Inventario", desc: "Descuento automático de stock en tiempo real" },
    { name: "CRM", desc: "Registro de compras en perfil del cliente" },
    { name: "Reportes", desc: "Análisis de ventas y rendimiento en tiempo real" },
  ]

  return (
    <ModuleLayout
      title="POS (Punto de Venta)"
      description="Sistema de punto de venta completo adaptado para retail, restaurantes y gimnasios con integración financiera automática y gestión de caja avanzada."
      icon={<ShoppingCart className="h-8 w-8 text-white" />}
      prevModule={{ name: "Roles & Permisos", href: "/modulos/roles-permisos" }}
      nextModule={{ name: "Inventario", href: "/modulos/inventario" }}
    >
      <div className="space-y-12">
        {/* POS Types */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tipos de POS Especializados</h2>
          <div className="space-y-8">
            {posTypes.map((pos, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <pos.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-gray-900 text-xl">{pos.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-2">{pos.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {pos.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-blue-50 px-3 py-2 rounded-lg">
                        <span className="text-sm text-blue-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Cases */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Casos de Éxito Reales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Utensils className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Restaurante La Plaza</h3>
                    <p className="text-sm text-gray-600">Cadena de 5 restaurantes</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Aumento en ventas:</span>
                    <span className="font-semibold text-green-600">+35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tiempo de servicio:</span>
                    <span className="font-semibold text-green-600">-40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Errores en órdenes:</span>
                    <span className="font-semibold text-green-600">-85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Tienda Fashion Store</h3>
                    <p className="text-sm text-gray-600">Retail de moda</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Control de inventario:</span>
                    <span className="font-semibold text-blue-600">+95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tiempo de checkout:</span>
                    <span className="font-semibold text-blue-600">-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Satisfacción cliente:</span>
                    <span className="font-semibold text-blue-600">4.8/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Dumbbell className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Gym PowerFit</h3>
                    <p className="text-sm text-gray-600">Centro deportivo</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Retención miembros:</span>
                    <span className="font-semibold text-purple-600">+45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ingresos recurrentes:</span>
                    <span className="font-semibold text-purple-600">+28%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gestión de clases:</span>
                    <span className="font-semibold text-purple-600">100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <CreditCard className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Gestión de Pagos</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Múltiples métodos de pago simultáneos</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Pagos parciales y a crédito</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Integración con pasarelas de pago</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Propinas y descuentos automáticos</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Receipt className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">Caja y Arqueo</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Apertura y cierre de caja automático</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Arqueo con diferencias detectadas</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Reportes X y Z en PDF</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Control de movimientos de efectivo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Integrations */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Integración Financiera Automática</h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Cada venta se integra automáticamente</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{integration.name}</h4>
                  <p className="text-sm text-gray-600">{integration.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Calcula tu ROI</h2>
            <p className="text-xl text-blue-100">Descubre cuánto puedes ahorrar con nuestro POS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <p className="text-blue-100">Reducción en tiempo de checkout</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
              <p className="text-blue-100">Aumento en ventas promedio</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <p className="text-blue-100">Reducción en errores</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">3 meses</div>
              <p className="text-blue-100">Tiempo de retorno de inversión</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Solicitar Análisis Personalizado
            </Button>
          </div>
        </div>

        {/* Restaurant Specific Features */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Características Especiales para Restaurantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Gestión de Mesas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Plano visual drag-and-drop</li>
                <li>• Estados de mesa en tiempo real</li>
                <li>• Reservas integradas</li>
                <li>• Transferencia entre mesas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Kitchen Display System</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Comandas en tiempo real</li>
                <li>• Tiempos de preparación</li>
                <li>• Priorización automática</li>
                <li>• Notificaciones de cocina</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ModuleLayout>
  )
}
