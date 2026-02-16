"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Globe, TrendingUp, Heart, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useContent } from "@/lib/i18n"

export default function AcercaDePage() {
  const c = useContent({
    es: {
      founded: "Fundada en 2020",
      heroTitle: "Transformando la Gestion Empresarial",
      heroDesc: "Somos una empresa tecnologica dedicada a simplificar y optimizar la gestion empresarial a traves de soluciones ERP innovadoras y accesibles para empresas de todos los tamanos.",
      meetTeam: "Conoce Nuestro Equipo",
      ourStory: "Nuestra Historia",
      activeCompanies: "Empresas Activas",
      countries: "Paises",
      employees: "Empleados",
      missionTitle: "Nuestra Mision",
      missionDesc: "Democratizar el acceso a herramientas de gestion empresarial de clase mundial, permitiendo que empresas de todos los tamanos puedan competir en igualdad de condiciones con soluciones tecnologicas avanzadas, intuitivas y asequibles.",
      missionPoints: ["Simplificar la complejidad empresarial", "Alcance global, impacto local", "Centrados en el cliente"],
      visionTitle: "Nuestra Vision",
      visionDesc: "Ser la plataforma ERP lider a nivel mundial, reconocida por su innovacion, facilidad de uso y capacidad de adaptacion a las necesidades especificas de cada industria y region.",
      visionGoalsTitle: "Para 2030 queremos:",
      visionGoals: ["Servir a 100,000+ empresas globalmente", "Estar presentes en 50+ paises", "Ser carbon-neutral en todas nuestras operaciones", "Liderar la innovacion en IA empresarial"],
      storyTitle: "Nuestra Historia",
      storyDesc: "Desde una startup hasta una empresa global, conoce nuestro viaje",
      timeline: [
        { year: "2020", title: "Los Inicios", description: "Fundada por un equipo de ingenieros y empresarios con la vision de simplificar la gestion empresarial", milestone: "Primeros 10 clientes" },
        { year: "2021", title: "Crecimiento Acelerado", description: "Lanzamiento del primer modulo POS y expansion a 5 paises latinoamericanos", milestone: "1,000 empresas activas" },
        { year: "2022", title: "Expansion Global", description: "Apertura de oficinas en Mexico, Colombia y Espana. Lanzamiento de modulos PMS y CRM", milestone: "5,000 empresas activas" },
        { year: "2023", title: "Innovacion IA", description: "Integracion de inteligencia artificial en reportes y automatizacion de procesos", milestone: "10,000 empresas activas" },
        { year: "2024", title: "Liderazgo Regional", description: "Reconocidos como el ERP #1 para PyMEs en Latinoamerica. Expansion a Europa y Asia", milestone: "25+ paises, 150+ empleados" },
      ],
      valuesTitle: "Nuestros Valores",
      valuesDesc: "Los principios que guian cada decision que tomamos",
      values: [
        { title: "Excelencia", description: "Buscamos la excelencia en cada linea de codigo, cada interaccion con el cliente y cada decision estrategica" },
        { title: "Colaboracion", description: "Creemos que los mejores resultados surgen cuando trabajamos juntos, tanto internamente como con nuestros clientes" },
        { title: "Innovacion", description: "Constantemente buscamos formas nuevas y mejores de resolver los desafios empresariales" },
        { title: "Confianza", description: "La seguridad y privacidad de los datos de nuestros clientes es nuestra maxima prioridad" },
        { title: "Impacto", description: "Medimos nuestro exito por el impacto positivo que generamos en las empresas que servimos" },
        { title: "Crecimiento", description: "Fomentamos el crecimiento continuo, tanto de nuestra empresa como de nuestro equipo" },
      ],
      teamTitle: "Nuestro Equipo Directivo",
      teamDesc: "Lideres con experiencia global en tecnologia y gestion empresarial",
      awardsTitle: "Reconocimientos",
      awardsDesc: "Orgullosos de ser reconocidos por la industria y nuestros clientes",
      ctaTitle: "Quieres Ser Parte de Nuestra Historia?",
      ctaDesc: "Unete a miles de empresas que ya confian en GO Admin para gestionar su negocio",
      startFree: "Comenzar Gratis",
      scheduleDemo: "Agendar Demo",
    },
    en: {
      founded: "Founded in 2020",
      heroTitle: "Transforming Business Management",
      heroDesc: "We are a technology company dedicated to simplifying and optimizing business management through innovative and accessible ERP solutions for companies of all sizes.",
      meetTeam: "Meet Our Team",
      ourStory: "Our Story",
      activeCompanies: "Active Companies",
      countries: "Countries",
      employees: "Employees",
      missionTitle: "Our Mission",
      missionDesc: "Democratize access to world-class business management tools, enabling companies of all sizes to compete on equal terms with advanced, intuitive and affordable technology solutions.",
      missionPoints: ["Simplify business complexity", "Global reach, local impact", "Customer-centric"],
      visionTitle: "Our Vision",
      visionDesc: "To be the leading ERP platform worldwide, recognized for its innovation, ease of use and ability to adapt to the specific needs of each industry and region.",
      visionGoalsTitle: "By 2030 we want to:",
      visionGoals: ["Serve 100,000+ companies globally", "Be present in 50+ countries", "Be carbon-neutral in all our operations", "Lead innovation in business AI"],
      storyTitle: "Our Story",
      storyDesc: "From a startup to a global company, learn about our journey",
      timeline: [
        { year: "2020", title: "The Beginnings", description: "Founded by a team of engineers and entrepreneurs with the vision of simplifying business management", milestone: "First 10 clients" },
        { year: "2021", title: "Accelerated Growth", description: "Launch of the first POS module and expansion to 5 Latin American countries", milestone: "1,000 active companies" },
        { year: "2022", title: "Global Expansion", description: "Opening offices in Mexico, Colombia and Spain. Launch of PMS and CRM modules", milestone: "5,000 active companies" },
        { year: "2023", title: "AI Innovation", description: "Integration of artificial intelligence in reports and process automation", milestone: "10,000 active companies" },
        { year: "2024", title: "Regional Leadership", description: "Recognized as the #1 ERP for SMEs in Latin America. Expansion to Europe and Asia", milestone: "25+ countries, 150+ employees" },
      ],
      valuesTitle: "Our Values",
      valuesDesc: "The principles that guide every decision we make",
      values: [
        { title: "Excellence", description: "We seek excellence in every line of code, every client interaction and every strategic decision" },
        { title: "Collaboration", description: "We believe the best results emerge when we work together, both internally and with our clients" },
        { title: "Innovation", description: "We constantly seek new and better ways to solve business challenges" },
        { title: "Trust", description: "The security and privacy of our clients' data is our top priority" },
        { title: "Impact", description: "We measure our success by the positive impact we create in the companies we serve" },
        { title: "Growth", description: "We foster continuous growth, both of our company and our team" },
      ],
      teamTitle: "Our Leadership Team",
      teamDesc: "Leaders with global experience in technology and business management",
      awardsTitle: "Awards & Recognition",
      awardsDesc: "Proud to be recognized by the industry and our clients",
      ctaTitle: "Want to Be Part of Our Story?",
      ctaDesc: "Join thousands of companies that already trust GO Admin to manage their business",
      startFree: "Start Free",
      scheduleDemo: "Schedule Demo",
    },
  })

  const valueIcons = [Star, Users, Zap, Shield, Heart, TrendingUp]
  const valueColors = ["blue", "green", "purple", "red", "orange", "indigo"]
  const missionIcons = [Target, Globe, Heart]

  const leaders = [
    { name: "Maria Gonzalez", role: "CEO & Co-founder", experience: "15+ years in enterprise SaaS", background: "Ex-VP of Product at Salesforce" },
    { name: "Carlos Rodriguez", role: "CTO & Co-founder", experience: "12+ years in software architecture", background: "Ex-Principal Engineer at Google" },
    { name: "Ana Martinez", role: "VP of Product", experience: "10+ years in product management", background: "Ex-Senior PM at Microsoft" },
    { name: "Diego Lopez", role: "VP of Engineering", experience: "8+ years leading tech teams", background: "Ex-Engineering Manager at Uber" },
    { name: "Laura Fernandez", role: "VP of Customer Success", experience: "12+ years in customer experience", background: "Ex-Director CS at HubSpot" },
    { name: "Roberto Silva", role: "VP of Sales", experience: "15+ years in B2B sales", background: "Ex-Sales Director at Oracle" },
  ]

  const awards = [
    { award: "Best SaaS Startup 2023", organization: "TechCrunch", year: "2023" },
    { award: "Top 10 ERP Solutions", organization: "Gartner", year: "2024" },
    { award: "Customer Choice Award", organization: "G2", year: "2024" },
    { award: "Innovation in AI", organization: "MIT Technology Review", year: "2024" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar currentPage="/acerca-de" />

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{c.founded}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            {c.heroTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{c.heroDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">{c.meetTeam}</Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50">{c.ourStory}</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">10,000+</div><div className="text-gray-600">{c.activeCompanies}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">25+</div><div className="text-gray-600">{c.countries}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">150+</div><div className="text-gray-600">{c.employees}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">99.9%</div><div className="text-gray-600">Uptime</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{c.missionTitle}</h2>
              <p className="text-lg text-gray-600 mb-6">{c.missionDesc}</p>
              {c.missionPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 mb-4">
                  {(() => { const Icon = missionIcons[i]; return <Icon className="h-6 w-6 text-blue-600" />; })()}
                  <span className="font-semibold">{point}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{c.visionTitle}</h2>
              <p className="text-lg text-gray-600 mb-6">{c.visionDesc}</p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">{c.visionGoalsTitle}</h3>
                <ul className="space-y-2 text-gray-600">
                  {c.visionGoals.map((goal, i) => <li key={i}>{"• " + goal}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.storyTitle}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{c.storyDesc}</p>
          </div>
          <div className="space-y-8">
            {c.timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">{item.year}</div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent><Badge className="bg-green-100 text-green-800">{item.milestone}</Badge></CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.valuesTitle}</h2>
            <p className="text-xl text-gray-600">{c.valuesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.values.map((value, index) => {
              const Icon = valueIcons[index]
              const color = valueColors[index]
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full bg-${color}-100 flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 text-${color}-600`} />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.teamTitle}</h2>
            <p className="text-xl text-gray-600">{c.teamDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                    <img src="/placeholder.svg?height=300&width=300" alt={leader.name} className="w-full h-full object-cover" />
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

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.awardsTitle}</h2>
            <p className="text-xl text-gray-600">{c.awardsDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((recognition, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle className="text-lg">{recognition.award}</CardTitle>
                  <CardDescription>{recognition.organization}</CardDescription>
                </CardHeader>
                <CardContent><Badge className="bg-yellow-100 text-yellow-800">{recognition.year}</Badge></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{c.ctaTitle}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">{c.startFree}</Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50">{c.scheduleDemo}</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
