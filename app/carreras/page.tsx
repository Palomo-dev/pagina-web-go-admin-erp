"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Globe, Award, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useContent } from "@/lib/i18n"

export default function CarrerasPage() {
  const c = useContent({
    es: {
      badge: "Unete al Equipo",
      heroTitle: "Construye el Futuro del ERP",
      heroDesc: "Unete a un equipo apasionado que esta revolucionando la gestion empresarial. Crea soluciones que impactan a miles de empresas en todo el mundo.",
      viewOpenings: "Ver Vacantes Abiertas",
      learnCulture: "Conoce la Cultura",
      employees: "Empleados",
      countries: "Paises",
      retention: "Retencion",
      whyWork: "Por que trabajar en GO Admin?",
      whyWorkDesc: "Ofrecemos un ambiente de trabajo excepcional donde puedes crecer profesional y personalmente",
      benefits: [
        { title: "Crecimiento Acelerado", description: "Empresa en rapido crecimiento con oportunidades ilimitadas de desarrollo profesional" },
        { title: "Trabajo Remoto", description: "Flexibilidad total para trabajar desde cualquier lugar del mundo" },
        { title: "Beneficios Premium", description: "Seguro medico completo, vacaciones ilimitadas y presupuesto para desarrollo" },
        { title: "Tecnologia Cutting-Edge", description: "Trabaja con las ultimas tecnologias: Next.js, Supabase, AI, y mas" },
        { title: "Equipo Diverso", description: "Colabora con talento de 25+ paises en un ambiente inclusivo" },
        { title: "Reconocimiento", description: "Cultura de reconocimiento con bonos por performance y equity options" },
      ],
      openPositions: "Posiciones Abiertas",
      openPositionsDesc: "Encuentra la oportunidad perfecta para tu carrera",
      applyNow: "Aplicar Ahora",
      noPosition: "No encuentras la posicion perfecta?",
      sendCV: "Envia tu CV para Futuras Oportunidades",
      cultureTitle: "Nuestra Cultura",
      cultureDesc: "Conoce los valores que nos definen y como trabajamos juntos",
      ourValues: "Nuestros Valores",
      valExcellence: "Excelencia", valExcellenceD: "Buscamos la excelencia en todo lo que hacemos",
      valCollab: "Colaboracion", valCollabD: "Trabajamos mejor cuando trabajamos juntos",
      valInnov: "Innovacion", valInnovD: "Siempre buscamos formas mejores de hacer las cosas",
      valImpact: "Impacto", valImpactD: "Creamos soluciones que realmente importan",
      teamBuilding: "Team Building", teamBuildingD: "Eventos mensuales y retiros anuales",
      learning: "Aprendizaje", learningD: "$2,000 anuales para desarrollo",
      flexibility: "Flexibilidad", flexibilityD: "Horarios flexibles y trabajo remoto",
      wellness: "Wellness", wellnessD: "Gym, salud mental y bienestar",
      ctaTitle: "Listo para Unirte?",
      ctaDesc: "Comienza tu carrera en GO Admin y ayuda a transformar la gestion empresarial",
      viewAllOpenings: "Ver Todas las Vacantes",
      talkRecruiting: "Hablar con Reclutamiento",
      fullTime: "Tiempo Completo",
      remote: "Remoto",
    },
    en: {
      badge: "Join the Team",
      heroTitle: "Build the Future of ERP",
      heroDesc: "Join a passionate team that is revolutionizing business management. Create solutions that impact thousands of companies worldwide.",
      viewOpenings: "View Open Positions",
      learnCulture: "Learn About Culture",
      employees: "Employees",
      countries: "Countries",
      retention: "Retention",
      whyWork: "Why work at GO Admin?",
      whyWorkDesc: "We offer an exceptional work environment where you can grow professionally and personally",
      benefits: [
        { title: "Accelerated Growth", description: "Fast-growing company with unlimited professional development opportunities" },
        { title: "Remote Work", description: "Full flexibility to work from anywhere in the world" },
        { title: "Premium Benefits", description: "Full health insurance, unlimited PTO and development budget" },
        { title: "Cutting-Edge Technology", description: "Work with the latest technologies: Next.js, Supabase, AI, and more" },
        { title: "Diverse Team", description: "Collaborate with talent from 25+ countries in an inclusive environment" },
        { title: "Recognition", description: "Recognition culture with performance bonuses and equity options" },
      ],
      openPositions: "Open Positions",
      openPositionsDesc: "Find the perfect opportunity for your career",
      applyNow: "Apply Now",
      noPosition: "Can't find the perfect position?",
      sendCV: "Send Your CV for Future Opportunities",
      cultureTitle: "Our Culture",
      cultureDesc: "Learn about the values that define us and how we work together",
      ourValues: "Our Values",
      valExcellence: "Excellence", valExcellenceD: "We seek excellence in everything we do",
      valCollab: "Collaboration", valCollabD: "We work better when we work together",
      valInnov: "Innovation", valInnovD: "We always look for better ways to do things",
      valImpact: "Impact", valImpactD: "We create solutions that truly matter",
      teamBuilding: "Team Building", teamBuildingD: "Monthly events and annual retreats",
      learning: "Learning", learningD: "$2,000 annual development budget",
      flexibility: "Flexibility", flexibilityD: "Flexible hours and remote work",
      wellness: "Wellness", wellnessD: "Gym, mental health and wellbeing",
      ctaTitle: "Ready to Join?",
      ctaDesc: "Start your career at GO Admin and help transform business management",
      viewAllOpenings: "View All Openings",
      talkRecruiting: "Talk to Recruiting",
      fullTime: "Full Time",
      remote: "Remote",
    },
  })

  const benefitIcons = [TrendingUp, Globe, Heart, Zap, Users, Award]
  const benefitColors = ["blue", "green", "red", "purple", "orange", "indigo"]

  const jobs = [
    { title: "Senior Full Stack Developer", department: "Engineering", location: c.remote, type: c.fullTime, experience: "5+ years", description: "Build new ERP features using Next.js, TypeScript and Supabase", skills: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"], salary: "$80k - $120k" },
    { title: "Product Manager", department: "Product", location: `${c.remote} / Bogota`, type: c.fullTime, experience: "3+ years", description: "Lead product strategy and roadmap for specific ERP modules", skills: ["Product Strategy", "Analytics", "User Research", "Agile"], salary: "$70k - $100k" },
    { title: "DevOps Engineer", department: "Infrastructure", location: c.remote, type: c.fullTime, experience: "4+ years", description: "Optimize cloud infrastructure and CI/CD processes", skills: ["AWS", "Docker", "Kubernetes", "Terraform"], salary: "$75k - $110k" },
    { title: "UX/UI Designer", department: "Design", location: c.remote, type: c.fullTime, experience: "3+ years", description: "Design intuitive experiences for business users", skills: ["Figma", "Design Systems", "User Research", "Prototyping"], salary: "$60k - $90k" },
    { title: "Customer Success Manager", department: "Customer Success", location: `Mexico / ${c.remote}`, type: c.fullTime, experience: "2+ years", description: "Ensure enterprise client success and growth", skills: ["Customer Success", "SaaS", "Analytics", "Communication"], salary: "$50k - $75k" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar currentPage="/carreras" />

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{c.badge}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">{c.heroTitle}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{c.heroDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">{c.viewOpenings}</Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50">{c.learnCulture}</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">150+</div><div className="text-gray-600">{c.employees}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">25+</div><div className="text-gray-600">{c.countries}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">4.8/5</div><div className="text-gray-600">Glassdoor</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">95%</div><div className="text-gray-600">{c.retention}</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.whyWork}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{c.whyWorkDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index]
              const color = benefitColors[index]
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-${color}-100 flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 text-${color}-600`} />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.openPositions}</h2>
            <p className="text-xl text-gray-600">{c.openPositionsDesc}</p>
          </div>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1"><Clock className="h-3 w-3" /> {job.type}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {job.experience}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600 mb-2">{job.salary}</div>
                      <Button className="bg-blue-600 hover:bg-blue-700">{c.applyNow}</Button>
                    </div>
                  </div>
                  <CardDescription className="text-base">{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, si) => <Badge key={si} variant="outline" className="bg-blue-50 text-blue-700">{skill}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">{c.noPosition}</p>
            <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">{c.sendCV}</Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{c.cultureTitle}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{c.cultureDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">{c.ourValues}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><Star className="h-6 w-6 text-blue-600 mt-1" /><div><h4 className="font-semibold mb-1">{c.valExcellence}</h4><p className="text-gray-600">{c.valExcellenceD}</p></div></div>
                <div className="flex items-start gap-3"><Users className="h-6 w-6 text-blue-600 mt-1" /><div><h4 className="font-semibold mb-1">{c.valCollab}</h4><p className="text-gray-600">{c.valCollabD}</p></div></div>
                <div className="flex items-start gap-3"><Zap className="h-6 w-6 text-blue-600 mt-1" /><div><h4 className="font-semibold mb-1">{c.valInnov}</h4><p className="text-gray-600">{c.valInnovD}</p></div></div>
                <div className="flex items-start gap-3"><Heart className="h-6 w-6 text-blue-600 mt-1" /><div><h4 className="font-semibold mb-1">{c.valImpact}</h4><p className="text-gray-600">{c.valImpactD}</p></div></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md"><h4 className="font-semibold mb-2">{c.teamBuilding}</h4><p className="text-sm text-gray-600">{c.teamBuildingD}</p></div>
              <div className="bg-white p-6 rounded-lg shadow-md"><h4 className="font-semibold mb-2">{c.learning}</h4><p className="text-sm text-gray-600">{c.learningD}</p></div>
              <div className="bg-white p-6 rounded-lg shadow-md"><h4 className="font-semibold mb-2">{c.flexibility}</h4><p className="text-sm text-gray-600">{c.flexibilityD}</p></div>
              <div className="bg-white p-6 rounded-lg shadow-md"><h4 className="font-semibold mb-2">{c.wellness}</h4><p className="text-sm text-gray-600">{c.wellnessD}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{c.ctaTitle}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">{c.viewAllOpenings}</Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50">{c.talkRecruiting}</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
