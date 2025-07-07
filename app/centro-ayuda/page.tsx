import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  MessageCircle,
  Video,
  FileText,
  Search,
  Clock,
  Users,
  Star,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"

export default function CentroAyudaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              GO Admin
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Inicio
              </Link>
              <Link href="/modulos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Módulos
              </Link>
              <Link href="/precios" className="text-gray-600 hover:text-blue-600 transition-colors">
                Precios
              </Link>
              <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contacto
              </Link>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Iniciar Sesión</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Centro de Ayuda 24/7</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            ¿Cómo podemos ayudarte?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Encuentra respuestas rápidas, tutoriales detallados y soporte experto para aprovechar al máximo GO Admin
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Buscar en la documentación, tutoriales, FAQ..."
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
                Buscar
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Artículos de Ayuda</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Video Tutoriales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Soporte Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.9/5</div>
              <div className="text-gray-600">Satisfacción Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías de Ayuda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Guías de Inicio",
                description: "Primeros pasos con GO Admin",
                articles: 45,
                color: "blue",
              },
              {
                icon: Video,
                title: "Video Tutoriales",
                description: "Aprende visualmente paso a paso",
                articles: 120,
                color: "green",
              },
              {
                icon: FileText,
                title: "Documentación API",
                description: "Referencia técnica completa",
                articles: 80,
                color: "purple",
              },
              {
                icon: MessageCircle,
                title: "Preguntas Frecuentes",
                description: "Respuestas a dudas comunes",
                articles: 150,
                color: "orange",
              },
              {
                icon: Users,
                title: "Gestión de Usuarios",
                description: "Roles, permisos y configuración",
                articles: 35,
                color: "red",
              },
              {
                icon: Star,
                title: "Mejores Prácticas",
                description: "Consejos de expertos",
                articles: 60,
                color: "indigo",
              },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-${category.color}-100 flex items-center justify-center mb-4`}
                  >
                    <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.articles} artículos</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Ver más <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Artículos Más Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Cómo configurar tu primera sucursal",
                description: "Guía paso a paso para configurar una nueva sucursal en GO Admin",
                readTime: "5 min",
                views: "2.5k",
                category: "Configuración",
              },
              {
                title: "Gestión de inventario: Mejores prácticas",
                description: "Optimiza tu control de stock con estas técnicas probadas",
                readTime: "8 min",
                views: "1.8k",
                category: "Inventario",
              },
              {
                title: "Configuración de roles y permisos",
                description: "Aprende a crear y asignar roles de manera efectiva",
                readTime: "6 min",
                views: "1.2k",
                category: "Seguridad",
              },
              {
                title: "Integración con sistemas de pago",
                description: "Conecta Stripe, PayPal y otros procesadores de pago",
                readTime: "10 min",
                views: "3.1k",
                category: "Integraciones",
              },
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 cursor-pointer">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.views} vistas</span>
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      Leer más
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">¿Necesitas Ayuda Personalizada?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier consulta
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Soporte Telefónico</CardTitle>
                <CardDescription>Habla directamente con un experto</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-blue-600 mb-4">+1 (555) 123-4567</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Llamar Ahora</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Chat en Vivo</CardTitle>
                <CardDescription>Respuesta inmediata online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Tiempo promedio: &lt;2 min</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Iniciar Chat</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Soporte por Email</CardTitle>
                <CardDescription>Para consultas detalladas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Respuesta en &lt;4 horas</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Enviar Email</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GO Admin</h3>
              <p className="text-gray-400">La solución ERP más completa para tu negocio</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ayuda Rápida</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Guías de Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Video Tutoriales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API Docs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Chat en Vivo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Crear Ticket
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Estado del Sistema
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Comunidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>soporte@goadmin.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Lun - Dom: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GO Admin. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
