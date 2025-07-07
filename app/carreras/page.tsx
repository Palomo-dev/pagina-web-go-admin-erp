import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Globe, Award, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function CarrerasPage() {
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
            <Button className="bg-blue-600 hover:bg-blue-700">Ver Vacantes</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">🚀 Únete al Equipo</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Construye el Futuro del ERP
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Únete a un equipo apasionado que está revolucionando la gestión empresarial. Crea soluciones que impactan a
            miles de empresas en todo el mundo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Ver Vacantes Abiertas
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Conoce la Cultura
            </Button>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600">Empleados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-gray-600">Países</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.8/5</div>
              <div className="text-gray-600">Glassdoor Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600">Retención</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué trabajar en GO Admin?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos un ambiente de trabajo excepcional donde puedes crecer profesional y personalmente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Crecimiento Acelerado",
                description: "Empresa en rápido crecimiento con oportunidades ilimitadas de desarrollo profesional",
                color: "blue",
              },
              {
                icon: Globe,
                title: "Trabajo Remoto",
                description: "Flexibilidad total para trabajar desde cualquier lugar del mundo",
                color: "green",
              },
              {
                icon: Heart,
                title: "Beneficios Premium",
                description: "Seguro médico completo, vacaciones ilimitadas y presupuesto para desarrollo",
                color: "red",
              },
              {
                icon: Zap,
                title: "Tecnología Cutting-Edge",
                description: "Trabaja con las últimas tecnologías: Next.js, Supabase, AI, y más",
                color: "purple",
              },
              {
                icon: Users,
                title: "Equipo Diverso",
                description: "Colabora con talento de 25+ países en un ambiente inclusivo",
                color: "orange",
              },
              {
                icon: Award,
                title: "Reconocimiento",
                description: "Cultura de reconocimiento con bonos por performance y equity options",
                color: "indigo",
              },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${benefit.color}-100 flex items-center justify-center mb-4`}>
                    <benefit.icon className={`h-6 w-6 text-${benefit.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Posiciones Abiertas</h2>
            <p className="text-xl text-gray-600">Encuentra la oportunidad perfecta para tu carrera</p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Senior Full Stack Developer",
                department: "Ingeniería",
                location: "Remoto",
                type: "Tiempo Completo",
                experience: "5+ años",
                description: "Desarrolla nuevas funcionalidades del ERP usando Next.js, TypeScript y Supabase",
                skills: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
                salary: "$80k - $120k",
              },
              {
                title: "Product Manager",
                department: "Producto",
                location: "Remoto / Bogotá",
                type: "Tiempo Completo",
                experience: "3+ años",
                description: "Lidera la estrategia de producto y roadmap para módulos específicos del ERP",
                skills: ["Product Strategy", "Analytics", "User Research", "Agile"],
                salary: "$70k - $100k",
              },
              {
                title: "DevOps Engineer",
                department: "Infraestructura",
                location: "Remoto",
                type: "Tiempo Completo",
                experience: "4+ años",
                description: "Optimiza nuestra infraestructura cloud y procesos de CI/CD",
                skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
                salary: "$75k - $110k",
              },
              {
                title: "UX/UI Designer",
                department: "Diseño",
                location: "Remoto",
                type: "Tiempo Completo",
                experience: "3+ años",
                description: "Diseña experiencias intuitivas para usuarios empresariales",
                skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
                salary: "$60k - $90k",
              },
              {
                title: "Customer Success Manager",
                department: "Customer Success",
                location: "México / Remoto",
                type: "Tiempo Completo",
                experience: "2+ años",
                description: "Asegura el éxito y crecimiento de nuestros clientes enterprise",
                skills: ["Customer Success", "SaaS", "Analytics", "Communication"],
                salary: "$50k - $75k",
              },
            ].map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {job.experience}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600 mb-2">{job.salary}</div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Aplicar Ahora</Button>
                    </div>
                  </div>
                  <CardDescription className="text-base">{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="bg-blue-50 text-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿No encuentras la posición perfecta?</p>
            <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              Envía tu CV para Futuras Oportunidades
            </Button>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestra Cultura</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce los valores que nos definen y cómo trabajamos juntos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nuestros Valores</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Excelencia</h4>
                    <p className="text-gray-600">Buscamos la excelencia en todo lo que hacemos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Colaboración</h4>
                    <p className="text-gray-600">Trabajamos mejor cuando trabajamos juntos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Innovación</h4>
                    <p className="text-gray-600">Siempre buscamos formas mejores de hacer las cosas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Impacto</h4>
                    <p className="text-gray-600">Creamos soluciones que realmente importan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Team Building</h4>
                <p className="text-sm text-gray-600">Eventos mensuales y retiros anuales</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Aprendizaje</h4>
                <p className="text-sm text-gray-600">$2,000 anuales para desarrollo</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Flexibilidad</h4>
                <p className="text-sm text-gray-600">Horarios flexibles y trabajo remoto</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Wellness</h4>
                <p className="text-sm text-gray-600">Gym, salud mental y bienestar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Unirte?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comienza tu carrera en GO Admin y ayuda a transformar la gestión empresarial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Ver Todas las Vacantes
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Hablar con Reclutamiento
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
              <p className="text-gray-400">Únete al futuro de la gestión empresarial</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Carreras</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Vacantes Abiertas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Proceso de Selección
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cultura
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Departamentos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Ingeniería
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Producto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Diseño
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Customer Success
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>careers@goadmin.com</li>
                <li>+1 (555) 123-4567</li>
                <li>LinkedIn: /company/goadmin</li>
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
