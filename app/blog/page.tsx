"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, TrendingUp, BookOpen, Zap, Users, ArrowRight, Eye, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useContent } from "@/lib/i18n"

export default function BlogPage() {
  const c = useContent({
    es: {
      badge: "Blog GO Admin",
      heroTitle: "Insights & Tendencias ERP",
      heroDesc: "Descubre las ultimas tendencias en gestion empresarial, casos de exito, mejores practicas y consejos de expertos para optimizar tu negocio.",
      searchPlaceholder: "Buscar articulos, tutoriales, casos de exito...",
      search: "Buscar",
      articles: "Articulos",
      monthlyReaders: "Lectores Mensuales",
      experts: "Expertos",
      avgRating: "Rating Promedio",
      categories: "Categorias",
      erpTrends: "Tendencias ERP", erpTrendsDesc: "Ultimas novedades del sector",
      successCases: "Casos de Exito", successCasesDesc: "Historias reales de clientes",
      productivity: "Productividad", productivityDesc: "Tips para optimizar procesos",
      teamManagement: "Gestion de Equipos", teamManagementDesc: "Liderazgo y recursos humanos",
      articlesCount: "articulos",
      featuredBadge: "Articulo Destacado",
      recommended: "Lectura Recomendada",
      successCase: "Caso de Exito",
      featuredTitle: "Como HotelMax aumento sus ingresos 40% con GO Admin PMS",
      featuredDesc: "Descubre como esta cadena hotelera de 15 propiedades logro optimizar sus operaciones, mejorar la experiencia del huesped y aumentar significativamente su RevPAR utilizando nuestro modulo PMS.",
      views: "vistas",
      comments: "comentarios",
      readFull: "Leer Completo",
      recentArticles: "Articulos Recientes",
      viewAll: "Ver Todos los Articulos",
      stayUpdated: "Mantente Actualizado",
      newsletterDesc: "Recibe los mejores articulos, casos de exito y tendencias ERP directamente en tu inbox",
      weeklyNewsletter: "Newsletter Semanal",
      newsletterJoin: "Unete a 10,000+ profesionales que ya reciben nuestro newsletter",
      emailPlaceholder: "Tu email profesional",
      subscribeFree: "Suscribirse Gratis",
      noSpam: "Sin spam. Cancela cuando quieras.",
      readTime: "min lectura",
    },
    en: {
      badge: "GO Admin Blog",
      heroTitle: "ERP Insights & Trends",
      heroDesc: "Discover the latest trends in business management, success stories, best practices and expert tips to optimize your business.",
      searchPlaceholder: "Search articles, tutorials, success stories...",
      search: "Search",
      articles: "Articles",
      monthlyReaders: "Monthly Readers",
      experts: "Experts",
      avgRating: "Average Rating",
      categories: "Categories",
      erpTrends: "ERP Trends", erpTrendsDesc: "Latest industry news",
      successCases: "Success Stories", successCasesDesc: "Real client stories",
      productivity: "Productivity", productivityDesc: "Tips to optimize processes",
      teamManagement: "Team Management", teamManagementDesc: "Leadership and human resources",
      articlesCount: "articles",
      featuredBadge: "Featured Article",
      recommended: "Recommended Reading",
      successCase: "Success Story",
      featuredTitle: "How HotelMax increased revenue 40% with GO Admin PMS",
      featuredDesc: "Discover how this 15-property hotel chain optimized operations, improved guest experience and significantly increased RevPAR using our PMS module.",
      views: "views",
      comments: "comments",
      readFull: "Read Full",
      recentArticles: "Recent Articles",
      viewAll: "View All Articles",
      stayUpdated: "Stay Updated",
      newsletterDesc: "Get the best articles, success stories and ERP trends directly in your inbox",
      weeklyNewsletter: "Weekly Newsletter",
      newsletterJoin: "Join 10,000+ professionals who already receive our newsletter",
      emailPlaceholder: "Your professional email",
      subscribeFree: "Subscribe Free",
      noSpam: "No spam. Cancel anytime.",
      readTime: "min read",
    },
  })

  const categoriesData = [
    { icon: TrendingUp, title: c.erpTrends, description: c.erpTrendsDesc, count: 45, color: "blue" },
    { icon: BookOpen, title: c.successCases, description: c.successCasesDesc, count: 32, color: "green" },
    { icon: Zap, title: c.productivity, description: c.productivityDesc, count: 28, color: "purple" },
    { icon: Users, title: c.teamManagement, description: c.teamManagementDesc, count: 24, color: "orange" },
  ]

  const recentArticles = [
    { title: "10 KPI Metrics Essential for Your ERP", excerpt: "Learn to measure ERP implementation success.", category: c.productivity, author: "Carlos Rodriguez", date: "12 Dec 2024", readTime: "6", views: "1.8k", comments: 15 },
    { title: "Process Automation: Complete Guide 2024", excerpt: "Discover how to automate repetitive processes.", category: c.erpTrends, author: "Ana Martinez", date: "10 Dec 2024", readTime: "12", views: "3.2k", comments: 28 },
    { title: "Cloud Migration: Definitive Checklist", excerpt: "Everything you need to know before migrating your ERP to the cloud.", category: "Technology", author: "Diego Lopez", date: "8 Dec 2024", readTime: "9", views: "2.1k", comments: 19 },
    { title: "ERP ROI: How to Calculate Real Returns", excerpt: "Practical methodology to calculate and demonstrate ERP investment ROI.", category: "Finance", author: "Laura Fernandez", date: "5 Dec 2024", readTime: "7", views: "1.5k", comments: 12 },
    { title: "AI in ERPs: The Future is Now", excerpt: "Explore how AI is transforming ERP systems.", category: "Innovation", author: "Roberto Silva", date: "3 Dec 2024", readTime: "10", views: "4.1k", comments: 35 },
    { title: "Data Security: ERP Best Practices", excerpt: "Protect your company's critical information.", category: "Security", author: "Patricia Morales", date: "1 Dec 2024", readTime: "8", views: "1.9k", comments: 22 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar currentPage="/blog" />

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">200+</div><div className="text-gray-600">{c.articles}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">50k+</div><div className="text-gray-600">{c.monthlyReaders}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">15+</div><div className="text-gray-600">{c.experts}</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-blue-600">4.8/5</div><div className="text-gray-600">{c.avgRating}</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{c.categories}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesData.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}-100 flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary">{category.count} {c.articlesCount}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">{c.featuredBadge}</Badge>
            <h2 className="text-3xl font-bold mb-4">{c.recommended}</h2>
          </div>
          <Card className="max-w-4xl mx-auto hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img src="/placeholder.svg?height=400&width=600" alt={c.featuredTitle} className="w-full h-full object-cover rounded-l-lg" />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{c.successCase}</Badge>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 15 Dec 2024</div>
                  <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 {c.readTime}</div>
                  <div className="flex items-center gap-1"><User className="h-4 w-4" /> Maria Gonzalez</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 hover:text-blue-600 cursor-pointer">{c.featuredTitle}</h3>
                <p className="text-gray-600 mb-6">{c.featuredDesc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1"><Eye className="h-4 w-4" /> 2.5k {c.views}</div>
                    <div className="flex items-center gap-1"><MessageCircle className="h-4 w-4" /> 24 {c.comments}</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">{c.readFull} <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">{c.recentArticles}</h2>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">{c.viewAll}</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img src="/placeholder.svg?height=200&width=400" alt={article.title} className="w-full h-48 object-cover rounded-t-lg" />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">{article.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.date}</div>
                    <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime} {c.readTime}</div>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500"><User className="h-4 w-4" /> {article.author}</div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1"><Eye className="h-3 w-3" /> {article.views}</div>
                      <div className="flex items-center gap-1"><MessageCircle className="h-3 w-3" /> {article.comments}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{c.stayUpdated}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{c.newsletterDesc}</p>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2"><BookOpen className="h-5 w-5 text-blue-600" /> {c.weeklyNewsletter}</CardTitle>
              <CardDescription>{c.newsletterJoin}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder={c.emailPlaceholder} className="border-2 border-gray-200 focus:border-blue-500" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">{c.subscribeFree}</Button>
                <p className="text-xs text-gray-500">{c.noSpam}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
