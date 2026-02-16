import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Clock,
  User,
  Search,
  TrendingUp,
  BookOpen,
  Zap,
  Users,
  ArrowRight,
  Eye,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar currentPage="/blog" />

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">📝 Blog GO Admin</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Insights & Tendencias ERP
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubre las últimas tendencias en gestión empresarial, casos de éxito, mejores prácticas y consejos de
            expertos para optimizar tu negocio.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Buscar artículos, tutoriales, casos de éxito..."
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
                Buscar
              </Button>
            </div>
          </div>

          {/* Blog Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">200+</div>
              <div className="text-gray-600">Artículos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50k+</div>
              <div className="text-gray-600">Lectores Mensuales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Expertos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.8/5</div>
              <div className="text-gray-600">Rating Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Tendencias ERP",
                description: "Últimas novedades del sector",
                count: 45,
                color: "blue",
              },
              {
                icon: BookOpen,
                title: "Casos de Éxito",
                description: "Historias reales de clientes",
                count: 32,
                color: "green",
              },
              {
                icon: Zap,
                title: "Productividad",
                description: "Tips para optimizar procesos",
                count: 28,
                color: "purple",
              },
              {
                icon: Users,
                title: "Gestión de Equipos",
                description: "Liderazgo y recursos humanos",
                count: 24,
                color: "orange",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 rounded-lg bg-${category.color}-100 flex items-center justify-center mx-auto mb-4`}
                  >
                    <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary">{category.count} artículos</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">⭐ Artículo Destacado</Badge>
            <h2 className="text-3xl font-bold mb-4">Lectura Recomendada</h2>
          </div>

          <Card className="max-w-4xl mx-auto hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Artículo destacado"
                  className="w-full h-full object-cover rounded-l-lg"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Caso de Éxito</Badge>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    15 Dic 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />8 min lectura
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    María González
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 hover:text-blue-600 cursor-pointer">
                  Cómo HotelMax aumentó sus ingresos 40% con GO Admin PMS
                </h3>
                <p className="text-gray-600 mb-6">
                  Descubre cómo esta cadena hotelera de 15 propiedades logró optimizar sus operaciones, mejorar la
                  experiencia del huésped y aumentar significativamente su RevPAR utilizando nuestro módulo PMS.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      2.5k vistas
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      24 comentarios
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Leer Completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Artículos Recientes</h2>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              Ver Todos los Artículos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "10 Métricas KPI Esenciales para tu ERP",
                excerpt:
                  "Aprende a medir el éxito de tu implementación ERP con estas métricas clave que todo CEO debe conocer.",
                category: "Productividad",
                author: "Carlos Rodríguez",
                date: "12 Dic 2024",
                readTime: "6 min",
                views: "1.8k",
                comments: 15,
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Automatización de Procesos: Guía Completa 2024",
                excerpt:
                  "Descubre cómo automatizar procesos repetitivos y liberar tiempo valioso para tareas estratégicas.",
                category: "Tendencias ERP",
                author: "Ana Martínez",
                date: "10 Dic 2024",
                readTime: "12 min",
                views: "3.2k",
                comments: 28,
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Migración a la Nube: Checklist Definitivo",
                excerpt:
                  "Todo lo que necesitas saber antes de migrar tu ERP a la nube, paso a paso y sin complicaciones.",
                category: "Tecnología",
                author: "Diego López",
                date: "8 Dic 2024",
                readTime: "9 min",
                views: "2.1k",
                comments: 19,
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "ROI del ERP: Cómo Calcular el Retorno Real",
                excerpt: "Metodología práctica para calcular y demostrar el ROI de tu inversión en software ERP.",
                category: "Finanzas",
                author: "Laura Fernández",
                date: "5 Dic 2024",
                readTime: "7 min",
                views: "1.5k",
                comments: 12,
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Inteligencia Artificial en ERPs: El Futuro es Ahora",
                excerpt:
                  "Explora cómo la IA está transformando los sistemas ERP y qué beneficios puede aportar a tu empresa.",
                category: "Innovación",
                author: "Roberto Silva",
                date: "3 Dic 2024",
                readTime: "10 min",
                views: "4.1k",
                comments: 35,
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Seguridad de Datos: Mejores Prácticas ERP",
                excerpt: "Protege la información crítica de tu empresa con estas estrategias de seguridad probadas.",
                category: "Seguridad",
                author: "Patricia Morales",
                date: "1 Dic 2024",
                readTime: "8 min",
                views: "1.9k",
                comments: 22,
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">{article.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {article.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {article.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Mantente Actualizado</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Recibe los mejores artículos, casos de éxito y tendencias ERP directamente en tu inbox
          </p>

          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Newsletter Semanal
              </CardTitle>
              <CardDescription>Únete a 10,000+ profesionales que ya reciben nuestro newsletter</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Tu email profesional" className="border-2 border-gray-200 focus:border-blue-500" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Suscribirse Gratis</Button>
                <p className="text-xs text-gray-500">Sin spam. Cancela cuando quieras.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GO Admin Blog</h3>
              <p className="text-gray-400">Tu fuente de conocimiento en gestión empresarial y tecnología ERP</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categorías</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Tendencias ERP
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Casos de Éxito
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Productividad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tecnología
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Guías Descargables
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Whitepapers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Medium
                  </Link>
                </li>
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
