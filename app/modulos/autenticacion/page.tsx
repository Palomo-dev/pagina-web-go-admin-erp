import { Shield, Key, Lock, UserCheck, Settings, Eye, CheckCircle, Star, TrendingUp } from "lucide-react"
import { ModuleLayout } from "@/components/module-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AutenticacionPage() {
  const features = [
    {
      icon: Key,
      title: "Registro / Login",
      description:
        "Email + contraseña con Supabase Auth u OAuth (Google, Microsoft, Apple). MFA TOTP opcional y remember-me con refresh tokens seguros.",
    },
    {
      icon: Settings,
      title: "Gestión de Sesión",
      description:
        "Cookies httpOnly + JWT, rotación y revocación de sesiones por dispositivo. Middleware Next 14 protege rutas /app/* y /admin/*.",
    },
    {
      icon: Lock,
      title: "Recuperación de Cuenta",
      description:
        "Flujos completos de forgot-password, reset-password y verificación de email con seguridad avanzada.",
    },
    {
      icon: UserCheck,
      title: "Control de Acceso",
      description:
        "Roles ↔ Scopes globales (module.action) cacheados en cookie. RLS en todas las tablas con aislamiento por organization_id.",
    },
  ]

  const benefits = [
    "Autenticación multi-factor para máxima seguridad",
    "Integración OAuth con proveedores principales",
    "Gestión de sesiones por dispositivo",
    "Recuperación de cuenta automatizada",
    "Control granular de permisos",
    "Aislamiento completo multi-tenant",
  ]

  const securityMetrics = [
    { metric: "99.99%", description: "Tiempo de actividad del sistema", icon: TrendingUp },
    { metric: "< 100ms", description: "Tiempo de autenticación", icon: Shield },
    { metric: "256-bit", description: "Cifrado de datos", icon: Lock },
    { metric: "ISO 27001", description: "Certificación de seguridad", icon: CheckCircle },
  ]

  const oauthProviders = [
    { name: "Google", users: "2B+", color: "bg-red-500" },
    { name: "Microsoft", users: "1.3B+", color: "bg-blue-500" },
    { name: "Apple", users: "1B+", color: "bg-gray-800" },
    { name: "GitHub", users: "100M+", color: "bg-gray-700" },
  ]

  return (
    <ModuleLayout
      title="Autenticación & Autorización"
      description="Sistema de seguridad robusto con autenticación multi-factor, control de acceso granular y gestión de sesiones avanzada para proteger tu negocio."
      icon={<Shield className="h-8 w-8 text-white" />}
      nextModule={{ name: "Gestión Multi-tenant", href: "/modulos/multi-tenant" }}
    >
      <div className="space-y-12">
        {/* Security Metrics */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Seguridad de Nivel Empresarial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <p className="text-gray-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Características Principales</h2>
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

        {/* OAuth Providers */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Proveedores OAuth Integrados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oauthProviders.map((provider, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${provider.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-bold text-lg">{provider.name[0]}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{provider.name}</h3>
                  <p className="text-sm text-gray-600">{provider.users} usuarios</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Flow */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Flujo de Seguridad Avanzado</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Autenticación</h3>
              <p className="text-sm text-gray-600">Login seguro con MFA opcional y OAuth</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Autorización</h3>
              <p className="text-sm text-gray-600">Verificación de permisos granulares</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sesión</h3>
              <p className="text-sm text-gray-600">Gestión segura con tokens JWT</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auditoría</h3>
              <p className="text-sm text-gray-600">Registro completo de actividades</p>
            </div>
          </div>
        </div>

        {/* Benefits and Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">¿Por qué elegir nuestro sistema?</h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Cumplimiento Normativo</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">GDPR - Protección de datos europeos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">SOC 2 Type II - Controles de seguridad</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">ISO 27001 - Gestión de seguridad</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">OWASP - Mejores prácticas web</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Success Story */}
        <div className="bg-white rounded-3xl border-2 border-blue-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Caso de Éxito</h2>
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  TC
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">TechCorp Solutions</h3>
                  <p className="text-gray-600">Empresa de software con 500+ empleados</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "La implementación del sistema de autenticación de GO Admin redujo nuestros incidentes de seguridad en
                un 95%. La integración con nuestros sistemas existentes fue perfecta y el soporte técnico excepcional."
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                  <p className="text-sm text-gray-600">Reducción en incidentes</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">24h</div>
                  <p className="text-sm text-gray-600">Tiempo de implementación</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                  <p className="text-sm text-gray-600">Satisfacción del equipo</p>
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

        {/* Security Enterprise */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seguridad Empresarial</h2>
            <p className="text-xl text-blue-100">Protección de nivel bancario para tu negocio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">256-bit</div>
              <p className="text-blue-100">Cifrado AES</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-blue-100">Monitoreo continuo</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">0</div>
              <p className="text-blue-100">Brechas de seguridad</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
              <p className="text-blue-100">Disponibilidad</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Solicitar Auditoría de Seguridad Gratuita
            </Button>
          </div>
        </div>
      </div>
    </ModuleLayout>
  )
}
