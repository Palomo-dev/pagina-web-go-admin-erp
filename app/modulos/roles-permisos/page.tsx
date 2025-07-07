import { Shield, Users, Key, FileText, Settings, Lock, CheckCircle, Star } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RolesPermisosPage() {
  const features = [
    {
      icon: Shield,
      title: "Plantillas Globales y Locales",
      description:
        "Super Admin define plantillas base que cada empresa puede clonar o extender según sus necesidades específicas.",
    },
    {
      icon: Key,
      title: "Permisos Granulares",
      description:
        "Control por scope específico (inventory.transfer, pms.checkout, etc.) con máxima flexibilidad y seguridad.",
    },
    {
      icon: Users,
      title: "Asignación Dinámica",
      description: "Un usuario puede tener varios roles ligados a diferentes sucursales con permisos independientes.",
    },
    {
      icon: FileText,
      title: "Auditoría Completa",
      description: "Registro detallado de cualquier cambio en plantillas, roles y usuarios con trazabilidad completa.",
    },
  ]

  const permissionScopes = [
    { module: "POS", scopes: ["pos.sell", "pos.refund", "pos.cash_register", "pos.reports"], color: "blue" },
    {
      module: "Inventario",
      scopes: ["inventory.view", "inventory.transfer", "inventory.adjust", "inventory.purchase"],
      color: "green",
    },
    { module: "PMS", scopes: ["pms.checkin", "pms.checkout", "pms.reservations", "pms.rates"], color: "purple" },
    { module: "CRM", scopes: ["crm.contacts", "crm.campaigns", "crm.pipelines", "crm.reports"], color: "orange" },
    { module: "HRM", scopes: ["hrm.employees", "hrm.payroll", "hrm.attendance", "hrm.evaluations"], color: "red" },
    {
      module: "Finanzas",
      scopes: ["finance.invoices", "finance.payments", "finance.accounting", "finance.reports"],
      color: "indigo",
    },
  ]

  const securityMetrics = [
    { metric: "100%", description: "Trazabilidad de acciones", icon: FileText },
    { metric: "< 50ms", description: "Verificación de permisos", icon: Shield },
    { metric: "256", description: "Niveles de granularidad", icon: Key },
    { metric: "0", description: "Brechas de seguridad", icon: Lock },
  ]

  const roleTemplates = [
    {
      name: "Administrador",
      description: "Acceso completo a todos los módulos",
      permissions: 45,
      users: "120+",
      color: "bg-red-100 text-red-800",
    },
    {
      name: "Gerente",
      description: "Gestión operativa y reportes",
      permissions: 28,
      users: "350+",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Supervisor",
      description: "Supervisión de equipos específicos",
      permissions: 18,
      users: "680+",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Empleado",
      description: "Operaciones básicas del día a día",
      permissions: 12,
      users: "2,400+",
      color: "bg-gray-100 text-gray-800",
    },
  ]

  return (
    <ModuleLayout
      title="Roles & Permisos"
      description="Sistema avanzado de control de acceso con permisos granulares, plantillas reutilizables y auditoría completa para máxima seguridad."
      icon={<Shield className="h-8 w-8 text-white" />}
      prevModule={{ name: "Gestión Multi-tenant", href: "/modulos/multi-tenant" }}
      nextModule={{ name: "POS Punto de Venta", href: "/modulos/pos" }}
    >
      <div className="space-y-12">
        {/* Security Metrics */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Control de Acceso de Nivel Empresarial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">{item.metric}</div>
                <p className="text-gray-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sistema de Permisos Avanzado</h2>
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

        {/* Role Templates */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Plantillas de Roles Predefinidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleTemplates.map((role, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">{role.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${role.color}`}>
                      {role.permissions} permisos
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Usuarios activos:</span>
                    <span className="font-medium text-blue-600">{role.users}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Permission Scopes */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Scopes de Permisos por Módulo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {permissionScopes.map((item, index) => {
              const colorClasses = {
                blue: "border-blue-200 bg-blue-50",
                green: "border-green-200 bg-green-50",
                purple: "border-purple-200 bg-purple-50",
                orange: "border-orange-200 bg-orange-50",
                red: "border-red-200 bg-red-50",
                indigo: "border-indigo-200 bg-indigo-50",
              }

              return (
                <Card key={index} className={`${colorClasses[item.color as keyof typeof colorClasses]} border-2`}>
                  <CardHeader>
                    <CardTitle className="text-gray-900 flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-gray-600" />
                      <span>{item.module}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {item.scopes.map((scope, scopeIndex) => (
                        <div key={scopeIndex} className="bg-white px-3 py-2 rounded-lg border">
                          <code className="text-sm text-gray-700">{scope}</code>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Role Management Flow */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Flujo de Gestión de Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Crear Plantilla</h3>
              <p className="text-sm text-gray-600">Define roles base con permisos específicos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Personalizar</h3>
              <p className="text-sm text-gray-600">Adapta permisos según necesidades</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Asignar Usuarios</h3>
              <p className="text-sm text-gray-600">Vincula usuarios a roles por sucursal</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auditar</h3>
              <p className="text-sm text-gray-600">Rastrea todas las modificaciones</p>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="h-6 w-6 text-red-600" />
              <h3 className="text-xl font-semibold text-gray-900">Seguridad Avanzada</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 mt-0.5" />
                <span>Principio de menor privilegio</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 mt-0.5" />
                <span>Separación de responsabilidades</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 mt-0.5" />
                <span>Revocación inmediata de accesos</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 mt-0.5" />
                <span>Detección de anomalías</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Auditoría y Compliance</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Log completo de actividades</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Reportes de cumplimiento</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Retención configurable</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Exportación para auditorías</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-white rounded-3xl border-2 border-blue-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Caso de Éxito: Banco Regional</h2>
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  BR
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Banco Regional del Norte</h3>
                  <p className="text-gray-600">Institución financiera con 50 sucursales y 1,200 empleados</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "El sistema de roles y permisos de GO Admin nos permitió cumplir con todas las regulaciones bancarias
                mientras mantenemos la agilidad operativa. La auditoría completa nos da total tranquilidad."
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <p className="text-sm text-gray-600">Cumplimiento normativo</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                  <p className="text-sm text-gray-600">Reducción en incidentes</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">50</div>
                  <p className="text-sm text-gray-600">Sucursales protegidas</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                  <p className="text-sm text-gray-600">Monitoreo continuo</p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">5.0/5 - Calificación del cliente</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cumplimiento Normativo</h2>
            <p className="text-xl text-blue-100">Certificaciones y estándares internacionales</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">SOX</div>
              <p className="text-blue-100">Sarbanes-Oxley</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">GDPR</div>
              <p className="text-blue-100">Protección de datos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">ISO</div>
              <p className="text-blue-100">27001 & 27002</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">PCI</div>
              <p className="text-blue-100">DSS Compliant</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Solicitar Certificación de Cumplimiento
            </Button>
          </div>
        </div>
      </div>
    </ModuleLayout>
  )
}
