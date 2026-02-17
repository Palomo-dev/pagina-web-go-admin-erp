"use client"

import {
  ArrowRight,
  Building2,
  Calendar,
  CreditCard,
  Database,
  FileText,
  Globe,
  Lock,
  MessageSquare,
  PieChart,
  ShoppingCart,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PricingTable } from "@/components/pricing-table"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/lib/i18n"

export default function Component() {
  const { t } = useLanguage()

  const modules = [
    {
      category: t("mod.commercial"),
      icon: ShoppingCart,
      items: [
        { name: t("mod.pos"), desc: t("mod.posDesc") },
        { name: t("mod.inventory"), desc: t("mod.inventoryDesc") },
        { name: t("mod.crm"), desc: t("mod.crmDesc") },
      ],
    },
    {
      category: t("mod.hospitality"),
      icon: Building2,
      items: [
        { name: t("mod.pms"), desc: t("mod.pmsDesc") },
        { name: t("mod.parking"), desc: t("mod.parkingDesc") },
        { name: t("mod.transport"), desc: t("mod.transportDesc") },
      ],
    },
    {
      category: t("mod.hr"),
      icon: Users,
      items: [
        { name: t("mod.hrm"), desc: t("mod.hrmDesc") },
        { name: t("mod.attendance"), desc: t("mod.attendanceDesc") },
        { name: t("mod.evaluations"), desc: t("mod.evaluationsDesc") },
      ],
    },
    {
      category: t("mod.finance"),
      icon: CreditCard,
      items: [
        { name: t("mod.billing"), desc: t("mod.billingDesc") },
        { name: t("mod.accounting"), desc: t("mod.accountingDesc") },
        { name: t("mod.receivables"), desc: t("mod.receivablesDesc") },
      ],
    },
    {
      category: t("mod.analytics"),
      icon: PieChart,
      items: [
        { name: t("mod.dashboards"), desc: t("mod.dashboardsDesc") },
        { name: t("mod.kpis"), desc: t("mod.kpisDesc") },
        { name: t("mod.alerts"), desc: t("mod.alertsDesc") },
      ],
    },
    {
      category: t("mod.integrations"),
      icon: Zap,
      items: [
        { name: t("mod.apis"), desc: t("mod.apisDesc") },
        { name: t("mod.webhooks"), desc: t("mod.webhooksDesc") },
        { name: t("mod.marketplace"), desc: t("mod.marketplaceDesc") },
      ],
    },
  ]

  const features = [
    { icon: Globe, title: t("feat.multiTenant"), desc: t("feat.multiTenantDesc") },
    { icon: Lock, title: t("feat.security"), desc: t("feat.securityDesc") },
    { icon: Database, title: t("feat.realTime"), desc: t("feat.realTimeDesc") },
    { icon: MessageSquare, title: t("feat.notifications"), desc: t("feat.notificationsDesc") },
    { icon: Calendar, title: t("feat.calendar"), desc: t("feat.calendarDesc") },
    { icon: FileText, title: t("feat.audit"), desc: t("feat.auditDesc") },
  ]

  const industries = [
    { name: t("ind.restaurant"), icon: "🍽️", href: "/industrias/restaurante" },
    { name: t("ind.hotel"), icon: "🏨", href: "/industrias/hotel" },
    { name: t("ind.store"), icon: "🛍️", href: "/industrias/tienda" },
    { name: t("ind.saas"), icon: "💻", href: "/industrias/saas" },
    { name: t("ind.gym"), icon: "💪", href: "/industrias/gimnasio" },
    { name: t("ind.parking"), icon: "🅿️", href: "/industrias/parqueadero" },
    { name: t("ind.transport"), icon: "🚌", href: "/industrias/transporte" },
  ]

  const testimonials = [
    {
      name: "María González",
      role: t("test1.role"),
      company: "Hotel Playa Dorada",
      logo: "/hotel-playa-dorada-luxury-hotel-logo-gold-text-ele.jpg",
      quote: t("test1.quote"),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Carlos Rodríguez",
      role: t("test2.role"),
      company: "Restaurantes El Buen Sabor",
      logo: "/el-buen-sabor-restaurant-logo-fork-spoon-red-orang.jpg",
      quote: t("test2.quote"),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Ana Martínez",
      role: t("test3.role"),
      company: "FitLife Gimnasios",
      logo: "/fitlife-gym-fitness-logo-dumbbell-blue-green-moder.jpg",
      quote: t("test3.quote"),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
  ]

  const stats = [
    { value: "500+", label: t("stats.companies") },
    { value: "15", label: t("stats.modules") },
    { value: "99.9%", label: t("stats.uptime") },
    { value: "24/7", label: t("stats.support") },
  ]

  const whyChooseUs = [
    { title: t("why.easyTitle"), description: t("why.easyDesc"), icon: "💡" },
    { title: t("why.customTitle"), description: t("why.customDesc"), icon: "⚙️" },
    { title: t("why.supportTitle"), description: t("why.supportDesc"), icon: "⛑️" },
    { title: t("why.integrationsTitle"), description: t("why.integrationsDesc"), icon: "🔗" },
  ]

  const useCases = [
    {
      industry: t("uc1.title"),
      description: t("uc1.desc"),
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
      companies: ["McDonald's", "Subway", "Domino's"],
    },
    {
      industry: t("uc2.title"),
      description: t("uc2.desc"),
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop",
      companies: ["Marriott", "Hilton", "Decameron"],
    },
    {
      industry: t("uc3.title"),
      description: t("uc3.desc"),
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      companies: ["Zara", "H&M", "Falabella"],
    },
    {
      industry: t("uc4.title"),
      description: t("uc4.desc"),
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
      companies: ["Bodytech", "SmartFit", "Gold's Gym"],
    },
    {
      industry: t("uc5.title"),
      description: t("uc5.desc"),
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop",
      companies: ["DHL", "FedEx", "Servientrega"],
    },
    {
      industry: t("uc6.title"),
      description: t("uc6.desc"),
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=500&fit=crop",
      companies: ["City Parking", "Park & Go", "Valet Plus"],
    },
  ]

  const companies = [
    { name: "Hotel Playa Dorada", logo: "/hotel-playa-dorada-luxury-resort-logo-golden-sun-p.jpg" },
    { name: "Café Central", logo: "/cafe-central-coffee-shop-logo-brown-coffee-cup-ste.jpg" },
    { name: "Supermercados FreshMart", logo: "/freshmart-supermarket-grocery-logo-green-leaf-shop.jpg" },
    { name: "Restaurantes El Buen Sabor", logo: "/el-buen-sabor-restaurant-logo-chef-hat-fork-red-or.jpg" },
    { name: "FitLife Gimnasios", logo: "/fitlife-gym-fitness-center-logo-dumbbell-muscle-bl.jpg" },
    { name: "TransRapido Logística", logo: "/transrapido-logistics-shipping-logo-truck-arrow-sp.jpg" },
    { name: "Farmacias SaludPlus", logo: "/saludplus-pharmacy-drugstore-logo-cross-pill-green.jpg" },
    { name: "Resort Caribe Azul", logo: "/caribe-azul-beach-resort-hotel-logo-wave-palm-tree.jpg" },
  ]

  const resources = [
    { title: t("res.quickStart"), link: "#" },
    { title: t("res.faq"), link: "#" },
    { title: t("res.blog"), link: "#" },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar currentPage="/" />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full border border-blue-200 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-blue-800 font-semibold text-sm">{t("hero.badge")}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            {t("hero.title1")}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">GO Admin</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-700 font-medium">{t("hero.benefit1")}</span>
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-700 font-medium">{t("hero.benefit2")}</span>
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-gray-700 font-medium">{t("hero.benefit3")}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
            >
              {t("hero.cta1")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
            >
              {t("hero.cta2")}
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-500 mb-6 font-medium">{t("hero.trustTitle")}</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              {[
                { icon: "🏨", label: t("hero.hotels") },
                { icon: "🍽️", label: t("hero.restaurants") },
                { icon: "🛍️", label: t("hero.retail") },
                { icon: "💪", label: t("hero.gyms") },
                { icon: "🚌", label: t("hero.transport") },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="ml-2 text-gray-600 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-8 hidden lg:block">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-200 transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700">{t("hero.sales")}</span>
            </div>
          </div>
        </div>

        <div className="absolute top-1/3 right-8 hidden lg:block">
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-200 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700">{t("hero.timeSaved")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-2 text-sm font-semibold">
              {t("features.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("features.title1")}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {t("features.title2")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modulos" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("modules.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("modules.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => {
              const moduleLinks: Record<string, string> = {
                [t("mod.commercial")]: "/modulos/pos",
                [t("mod.hospitality")]: "/modulos/pms",
                [t("mod.hr")]: "/modulos/hrm",
                [t("mod.finance")]: "/modulos/finanzas",
                [t("mod.analytics")]: "/modulos/reportes",
                [t("mod.integrations")]: "/modulos/integraciones",
              }

              return (
                <Link key={index} href={moduleLinks[module.category] || "#"}>
                  <Card className="bg-white border-blue-100 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <module.icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-gray-900">{module.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {module.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-l-2 border-blue-200 pl-4">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("industries.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("industries.subtitle")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href}>
                <Card className="text-center border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{industry.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm">{industry.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industrias">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                {t("ind.viewAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">{t("testimonials.badge")}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-4 border-blue-100" />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 italic leading-relaxed">{`"${testimonial.quote}"`}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <img src={testimonial.logo || "/placeholder.svg"} alt={`Logo ${testimonial.company}`} className="h-8 object-contain opacity-60" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t("stats.title")}<span className="text-yellow-300">{t("stats.titleHighlight")}</span>
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">{t("stats.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">{stat.value}</div>
                  <div className="text-blue-100 font-medium text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/5 rounded-full"></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("why.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("why.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="bg-white border-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-3">{reason.icon}</div>
                  <CardTitle className="text-gray-900">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">{t("useCases.badge")}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("useCases.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("useCases.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <img src={useCase.image || "/placeholder.svg"} alt={useCase.industry} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-2">{t("uc.usedBy")}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.companies.map((company, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{company}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("security.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("security.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t("sec.encryption"), desc: t("sec.encryptionDesc") },
              { title: t("sec.twoFactor"), desc: t("sec.twoFactorDesc") },
              { title: t("sec.compliance"), desc: t("sec.complianceDesc") },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-white border border-gray-100">
                <div className="text-2xl text-green-600"><CheckCircle /></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">{t("companies.badge")}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("companies.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("companies.subtitle")}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
              {companies.map((company, index) => (
                <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                  <img src={company.logo || "/placeholder.svg"} alt={company.name} className="h-10 md:h-12 object-contain max-w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 text-sm">{t("companies.active")}</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">12</div>
              <div className="text-gray-600 text-sm">{t("companies.countries")}</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-gray-600 text-sm">{t("companies.dailyUsers")}</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600 text-sm">{t("companies.uptimeGuaranteed")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("resources.title")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("resources.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link key={index} href={resource.link} className="bg-white border-blue-100 hover:shadow-lg transition-shadow p-6 rounded-md">
                <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                <p className="text-gray-600">{t("res.readMore")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTable showAllIncluded={true} showFAQ={true} showGuarantee={true} />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("pageCta.title")}</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">{t("pageCta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
            >
              {t("pageCta.primary")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
            >
              {t("pageCta.secondary")}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GO</span>
                </div>
                <span className="text-xl font-bold">GO Admin</span>
              </div>
              <p className="text-gray-400">{t("pageFooter.desc")}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("pageFooter.product")}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/caracteristicas" className="hover:text-white transition-colors">{t("nav.features")}</Link></li>
                <li><Link href="/modulos" className="hover:text-white transition-colors">{t("nav.modules")}</Link></li>
                <li><Link href="/integraciones" className="hover:text-white transition-colors">{t("footer.integrations")}</Link></li>
                <li><Link href="/api" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("pageFooter.support")}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/centro-ayuda" className="hover:text-white transition-colors">{t("footer.documentation")}</Link></li>
                <li><Link href="/centro-ayuda" className="hover:text-white transition-colors">{t("nav.helpCenter")}</Link></li>
                <li><Link href="/contacto" className="hover:text-white transition-colors">{t("nav.contact")}</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">{t("footer.systemStatus")}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("pageFooter.company")}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/acerca-de" className="hover:text-white transition-colors">{t("nav.about")}</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">{t("nav.blog")}</Link></li>
                <li><Link href="/carreras" className="hover:text-white transition-colors">{t("nav.careers")}</Link></li>
                <li><Link href="/privacidad" className="hover:text-white transition-colors">{t("footer.privacy")}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{"© 2025 GO Admin. "}{t("pageFooter.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
