import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Globe, TrendingUp, Heart, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function AcercaDePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar currentPage="/acerca-de" />

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Fundada en 2020</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Transformando la Gestión Empresarial
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Somos una empresa tecnológica dedicada a simplificar y optimizar la gestión empresarial a través de
            soluciones ERP innovadoras y accesibles para empresas de todos los tamaños.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Conoce Nuestro Equipo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Nuestra Historia
            </Button>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-gray-600">Empresas Activas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-gray-600">Países</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600">Empleados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-600 mb-6">
                Democratizar el acceso a herramientas de gestión empresarial de clase mundial, permitiendo que empresas
                de todos los tamaños puedan competir en igualdad de condiciones con soluciones tecnológicas avanzadas,
                intuitivas y asequibles.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Simplificar la complejidad empresarial</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Alcance global, impacto local</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Centrados en el cliente</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ser la plataforma ERP líder a nivel mundial, reconocida por su innovación, facilidad de uso y capacidad
                de adaptación a las necesidades específicas de cada industria y región.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Para 2030 queremos:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Servir a 100,000+ empresas globalmente</li>
                  <li>• Estar presentes en 50+ países</li>
                  <li>• Ser carbon-neutral en todas nuestras operaciones</li>
                  <li>• Liderar la innovación en IA empresarial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desde una startup hasta una empresa global, conoce nuestro viaje
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2020",
                title: "Los Inicios",
                description:
                  "Fundada por un equipo de ingenieros y empresarios con la visión de simplificar la gestión empresarial",
                milestone: "Primeros 10 clientes",
              },
              {
                year: "2021",
                title: "Crecimiento Acelerado",
                description: "Lanzamiento del primer módulo POS y expansión a 5 países latinoamericanos",
                milestone: "1,000 empresas activas",
              },
              {
                year: "2022",
                title: "Expansión Global",
                description: "Apertura de oficinas en México, Colombia y España. Lanzamiento de módulos PMS y CRM",
                milestone: "5,000 empresas activas",
              },
              {
                year: "2023",
                title: "Innovación IA",
                description: "Integración de inteligencia artificial en reportes y automatización de procesos",
                milestone: "10,000 empresas activas",
              },
              {
                year: "2024",
                title: "Liderazgo Regional",
                description: "Reconocidos como el ERP #1 para PyMEs en Latinoamérica. Expansión a Europa y Asia",
                milestone: "25+ países, 150+ empleados",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-green-100 text-green-800">{item.milestone}</Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600">Los principios que guían cada decisión que tomamos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Excelencia",
                description:
                  "Buscamos la excelencia en cada línea de código, cada interacción con el cliente y cada decisión estratégica",
                color: "blue",
              },
              {
                icon: Users,
                title: "Colaboración",
                description:
                  "Creemos que los mejores resultados surgen cuando trabajamos juntos, tanto internamente como con nuestros clientes",
                color: "green",
              },
              {
                icon: Zap,
                title: "Innovación",
                description: "Constantemente buscamos formas nuevas y mejores de resolver los desafíos empresariales",
                color: "purple",
              },
              {
                icon: Shield,
                title: "Confianza",
                description: "La seguridad y privacidad de los datos de nuestros clientes es nuestra máxima prioridad",
                color: "red",
              },
              {
                icon: Heart,
                title: "Impacto",
                description: "Medimos nuestro éxito por el impacto positivo que generamos en las empresas que servimos",
                color: "orange",
              },
              {
                icon: TrendingUp,
                title: "Crecimiento",
                description: "Fomentamos el crecimiento continuo, tanto de nuestra empresa como de nuestro equipo",
                color: "indigo",
              },
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-${value.color}-100 flex items-center justify-center mx-auto mb-4`}
                  >
                    <value.icon className={`h-8 w-8 text-${value.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Equipo Directivo</h2>
            <p className="text-xl text-gray-600">Líderes con experiencia global en tecnología y gestión empresarial</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "CEO & Co-fundadora",
                experience: "15+ años en SaaS empresarial",
                background: "Ex-VP de Producto en Salesforce",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Carlos Rodríguez",
                role: "CTO & Co-fundador",
                experience: "12+ años en arquitectura de software",
                background: "Ex-Principal Engineer en Google",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Ana Martínez",
                role: "VP de Producto",
                experience: "10+ años en product management",
                background: "Ex-Senior PM en Microsoft",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Diego López",
                role: "VP de Ingeniería",
                experience: "8+ años liderando equipos tech",
                background: "Ex-Engineering Manager en Uber",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Laura Fernández",
                role: "VP de Customer Success",
                experience: "12+ años en customer experience",
                background: "Ex-Director CS en HubSpot",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Roberto Silva",
                role: "VP de Ventas",
                experience: "15+ años en ventas B2B",
                background: "Ex-Sales Director en Oracle",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{leader.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">{leader.experience}</p>
                  <p className="text-sm text-gray-500">{leader.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Reconocimientos</h2>
            <p className="text-xl text-gray-600">Orgullosos de ser reconocidos por la industria y nuestros clientes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                award: "Best SaaS Startup 2023",
                organization: "TechCrunch",
                year: "2023",
              },
              {
                award: "Top 10 ERP Solutions",
                organization: "Gartner",
                year: "2024",
              },
              {
                award: "Customer Choice Award",
                organization: "G2",
                year: "2024",
              },
              {
                award: "Innovation in AI",
                organization: "MIT Technology Review",
                year: "2024",
              },
            ].map((recognition, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle className="text-lg">{recognition.award}</CardTitle>
                  <CardDescription>{recognition.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-yellow-100 text-yellow-800">{recognition.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres Ser Parte de Nuestra Historia?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a miles de empresas que ya confían en GO Admin para gestionar su negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Comenzar Gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Agendar Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GO Admin</h3>
              <p className="text-gray-400">Transformando la gestión empresarial desde 2020</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Nuestra Historia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Equipo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Prensa
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Valores</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Misión & Visión
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Sostenibilidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Diversidad
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
                <li>info@goadmin.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
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
