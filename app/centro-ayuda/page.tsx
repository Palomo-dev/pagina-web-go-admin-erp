"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, MessageCircle, Video, FileText, Search, Clock, Users, Star, ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useContent } from "@/lib/i18n"

export default function CentroAyudaPage() {
  const c = useContent({
    es: {
      badge: "Centro de Ayuda 24/7",
      heroTitle: "Como podemos ayudarte?",
      heroDesc: "Encuentra respuestas rapidas, tutoriales detallados y soporte experto para aprovechar al maximo GO Admin",
      searchPlaceholder: "Buscar en la documentacion, tutoriales, FAQ...",
      search: "Buscar",
      helpArticles: "Articulos de Ayuda",
      videoTutorials: "Video Tutoriales",
      supportAvailable: "Soporte Disponible",
      clientSatisfaction: "Satisfaccion Cliente",
      helpCategories: "Categorias de Ayuda",
      gettingStarted: "Guias de Inicio", gettingStartedDesc: "Primeros pasos con GO Admin",
      videos: "Video Tutoriales", videosDesc: "Aprende visualmente paso a paso",
      apiDocs: "Documentacion API", apiDocsDesc: "Referencia tecnica completa",
      faq: "Preguntas Frecuentes", faqDesc: "Respuestas a dudas comunes",
      userMgmt: "Gestion de Usuarios", userMgmtDesc: "Roles, permisos y configuracion",
      bestPractices: "Mejores Practicas", bestPracticesDesc: "Consejos de expertos",
      articles: "articulos",
      viewMore: "Ver mas",
      popularArticles: "Articulos Mas Populares",
      views: "vistas",
      readMore: "Leer mas",
      needHelp: "Necesitas Ayuda Personalizada?",
      needHelpDesc: "Nuestro equipo de soporte esta disponible 24/7 para ayudarte con cualquier consulta",
      phoneSupport: "Soporte Telefonico", phoneSupportDesc: "Habla directamente con un experto",
      callNow: "Llamar Ahora",
      liveChat: "Chat en Vivo", liveChatDesc: "Respuesta inmediata online",
      avgTime: "Tiempo promedio:",
      startChat: "Iniciar Chat",
      emailSupport: "Soporte por Email", emailSupportDesc: "Para consultas detalladas",
      responseIn: "Respuesta en",
      sendEmail: "Enviar Email",
      popularArticlesData: [
        { title: "Como configurar tu primera sucursal", description: "Guia paso a paso para configurar una nueva sucursal en GO Admin", readTime: "5 min", views: "2.5k", category: "Configuracion" },
        { title: "Gestion de inventario: Mejores practicas", description: "Optimiza tu control de stock con estas tecnicas probadas", readTime: "8 min", views: "1.8k", category: "Inventario" },
        { title: "Configuracion de roles y permisos", description: "Aprende a crear y asignar roles de manera efectiva", readTime: "6 min", views: "1.2k", category: "Seguridad" },
        { title: "Integracion con sistemas de pago", description: "Conecta Stripe, PayPal y otros procesadores de pago", readTime: "10 min", views: "3.1k", category: "Integraciones" },
      ],
    },
    en: {
      badge: "Help Center 24/7",
      heroTitle: "How can we help you?",
      heroDesc: "Find quick answers, detailed tutorials and expert support to get the most out of GO Admin",
      searchPlaceholder: "Search documentation, tutorials, FAQ...",
      search: "Search",
      helpArticles: "Help Articles",
      videoTutorials: "Video Tutorials",
      supportAvailable: "Support Available",
      clientSatisfaction: "Client Satisfaction",
      helpCategories: "Help Categories",
      gettingStarted: "Getting Started", gettingStartedDesc: "First steps with GO Admin",
      videos: "Video Tutorials", videosDesc: "Learn visually step by step",
      apiDocs: "API Documentation", apiDocsDesc: "Complete technical reference",
      faq: "FAQ", faqDesc: "Answers to common questions",
      userMgmt: "User Management", userMgmtDesc: "Roles, permissions and configuration",
      bestPractices: "Best Practices", bestPracticesDesc: "Expert advice",
      articles: "articles",
      viewMore: "View more",
      popularArticles: "Most Popular Articles",
      views: "views",
      readMore: "Read more",
      needHelp: "Need Personalized Help?",
      needHelpDesc: "Our support team is available 24/7 to help you with any inquiry",
      phoneSupport: "Phone Support", phoneSupportDesc: "Talk directly to an expert",
      callNow: "Call Now",
      liveChat: "Live Chat", liveChatDesc: "Immediate online response",
      avgTime: "Average time:",
      startChat: "Start Chat",
      emailSupport: "Email Support", emailSupportDesc: "For detailed inquiries",
      responseIn: "Response in",
      sendEmail: "Send Email",
      popularArticlesData: [
        { title: "How to set up your first branch", description: "Step-by-step guide to configure a new branch in GO Admin", readTime: "5 min", views: "2.5k", category: "Setup" },
        { title: "Inventory management: Best practices", description: "Optimize your stock control with these proven techniques", readTime: "8 min", views: "1.8k", category: "Inventory" },
        { title: "Roles and permissions setup", description: "Learn to create and assign roles effectively", readTime: "6 min", views: "1.2k", category: "Security" },
        { title: "Payment system integration", description: "Connect Stripe, PayPal and other payment processors", readTime: "10 min", views: "3.1k", category: "Integrations" },
      ],
    },
  })

  const helpCategories = [
    { icon: BookOpen, title: c.gettingStarted, description: c.gettingStartedDesc, articles: 45, color: "blue" },
    { icon: Video, title: c.videos, description: c.videosDesc, articles: 120, color: "green" },
    { icon: FileText, title: c.apiDocs, description: c.apiDocsDesc, articles: 80, color: "purple" },
    { icon: MessageCircle, title: c.faq, description: c.faqDesc, articles: 150, color: "orange" },
    { icon: Users, title: c.userMgmt, description: c.userMgmtDesc, articles: 35, color: "red" },
    { icon: Star, title: c.bestPractices, description: c.bestPracticesDesc, articles: 60, color: "indigo" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar currentPage="/centro-ayuda" />

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{c.badge}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">{c.heroTitle}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{c.heroDesc}</p>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder={c.searchPlaceholder} className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">{c.search}</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">500+</div><div className="text-gray-600">{c.helpArticles}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">100+</div><div className="text-gray-600">{c.videoTutorials}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">24/7</div><div className="text-gray-600">{c.supportAvailable}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">4.9/5</div><div className="text-gray-600">{c.clientSatisfaction}</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{c.helpCategories}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}-100 flex items-center justify-center mb-4`}>
                    <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.articles} {c.articles}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">{c.viewMore} <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{c.popularArticles}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.popularArticlesData.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500"><Clock className="h-4 w-4 mr-1" /> {article.readTime}</div>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 cursor-pointer">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.views} {c.views}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600">{c.readMore}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{c.needHelp}</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">{c.needHelpDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>{c.phoneSupport}</CardTitle>
                <CardDescription>{c.phoneSupportDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-blue-600 mb-4">+1 (555) 123-4567</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">{c.callNow}</Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>{c.liveChat}</CardTitle>
                <CardDescription>{c.liveChatDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{c.avgTime} {"<"}2 min</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">{c.startChat}</Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>{c.emailSupport}</CardTitle>
                <CardDescription>{c.emailSupportDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{c.responseIn} {"<"}4h</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">{c.sendEmail}</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
