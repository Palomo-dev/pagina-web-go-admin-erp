"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingTable } from "@/components/pricing-table"
import { CTASection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X } from "lucide-react"
import { useContent } from "@/lib/i18n"

export default function PreciosPage() {
  const c = useContent({
    es: {
      badge: "Precios Transparentes y Justos",
      heroTitle1: "Precios simples",
      heroTitle2: "para todos",
      heroDesc: "Un solo precio, todas las funcionalidades. Sin limites de usuarios, sin modulos premium ocultos, sin sorpresas en la factura. Solo elige entre mensual o anual.",
      noCommitment: "Sin permanencia",
      guarantee: "Garantia 30 dias",
      supportIncluded: "Soporte incluido",
      comparisonTitle: "Comparacion detallada de planes",
      comparisonDesc: "Descubre todas las diferencias entre el plan mensual y anual",
      features: "Caracteristicas",
      monthlyPlan: "Plan Mensual",
      annualPlan: "Plan Anual",
      whyAnnual: "Por que elegir el plan anual?",
      whyAnnualDesc: "Ademas del ahorro economico, el plan anual incluye beneficios exclusivos para tu empresa",
      testimonialsTitle: "Lo que dicen nuestros clientes",
      testimonialsDesc: "Empresas que ya eligieron GO Admin",
      ctaTitle: "Listo para comenzar con GO Admin?",
      ctaDesc: "Elige el plan que mejor se adapte a tu negocio y comienza a transformar tu gestion empresarial hoy mismo. Sin permanencia, sin tarjeta de credito para probar.",
      ctaPrimary: "Comenzar Prueba Gratuita",
      ctaSecondary: "Hablar con Ventas",
      activeCompanies: "Empresas activas",
      satisfaction: "Satisfaccion",
      avgSavings: "Ahorro promedio",
      comparisonFeatures: [
        "Todos los modulos incluidos", "Usuarios ilimitados", "Sucursales ilimitadas",
        "Soporte por chat y email", "Integraciones premium", "Backup automatico",
        "Apps moviles iOS/Android", "Soporte prioritario 24/7", "Onboarding personalizado 1:1",
        "Reportes avanzados exclusivos", "Acceso anticipado a nuevas funciones", "Account manager dedicado",
      ],
      annualBenefits: [
        { title: "Ahorro significativo", description: "Ahorra $44 USD al ano comparado con el plan mensual", icon: "savings" },
        { title: "Soporte prioritario", description: "Acceso a soporte tecnico prioritario 24/7 con tiempos de respuesta mas rapidos", icon: "support" },
        { title: "Onboarding personalizado", description: "Sesion 1:1 con nuestro equipo para configurar tu cuenta perfectamente", icon: "onboarding" },
        { title: "Reportes exclusivos", description: "Acceso a dashboards y reportes avanzados no disponibles en el plan mensual", icon: "reports" },
      ],
      testimonials: [
        { quote: "El plan anual fue la mejor decision. El ahorro es considerable y el soporte prioritario hace toda la diferencia.", author: "Laura Martinez", company: "Retail Express", plan: "Plan Anual" },
        { quote: "Empezamos con el plan mensual y luego migramos al anual. No hay vuelta atras!", author: "Carlos Rodriguez", company: "Hotel Boutique Central", plan: "Plan Anual" },
        { quote: "El plan mensual nos permitio probar sin compromiso. Una vez vimos los resultados, nos pasamos al anual.", author: "Ana Silva", company: "Gimnasio Vital", plan: "Plan Mensual -> Anual" },
      ],
    },
    en: {
      badge: "Transparent and Fair Pricing",
      heroTitle1: "Simple pricing",
      heroTitle2: "for everyone",
      heroDesc: "One price, all features. No user limits, no hidden premium modules, no billing surprises. Just choose between monthly or annual.",
      noCommitment: "No commitment",
      guarantee: "30-day guarantee",
      supportIncluded: "Support included",
      comparisonTitle: "Detailed plan comparison",
      comparisonDesc: "Discover all the differences between the monthly and annual plan",
      features: "Features",
      monthlyPlan: "Monthly Plan",
      annualPlan: "Annual Plan",
      whyAnnual: "Why choose the annual plan?",
      whyAnnualDesc: "In addition to cost savings, the annual plan includes exclusive benefits for your company",
      testimonialsTitle: "What our clients say",
      testimonialsDesc: "Companies that already chose GO Admin",
      ctaTitle: "Ready to start with GO Admin?",
      ctaDesc: "Choose the plan that best fits your business and start transforming your business management today. No commitment, no credit card required to try.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Talk to Sales",
      activeCompanies: "Active companies",
      satisfaction: "Satisfaction",
      avgSavings: "Average savings",
      comparisonFeatures: [
        "All modules included", "Unlimited users", "Unlimited branches",
        "Chat and email support", "Premium integrations", "Automatic backup",
        "iOS/Android mobile apps", "Priority 24/7 support", "Personalized 1:1 onboarding",
        "Exclusive advanced reports", "Early access to new features", "Dedicated account manager",
      ],
      annualBenefits: [
        { title: "Significant savings", description: "Save $44 USD per year compared to the monthly plan", icon: "savings" },
        { title: "Priority support", description: "Access to priority 24/7 technical support with faster response times", icon: "support" },
        { title: "Personalized onboarding", description: "1:1 session with our team to set up your account perfectly", icon: "onboarding" },
        { title: "Exclusive reports", description: "Access to advanced dashboards and reports not available on the monthly plan", icon: "reports" },
      ],
      testimonials: [
        { quote: "The annual plan was the best decision. The savings are considerable and priority support makes all the difference.", author: "Laura Martinez", company: "Retail Express", plan: "Annual Plan" },
        { quote: "We started with the monthly plan and then migrated to annual. There's no going back!", author: "Carlos Rodriguez", company: "Hotel Boutique Central", plan: "Annual Plan" },
        { quote: "The monthly plan allowed us to try without commitment. Once we saw the results, we switched to annual.", author: "Ana Silva", company: "Gimnasio Vital", plan: "Monthly -> Annual" },
      ],
    },
  })

  const benefitIcons: Record<string, string> = { savings: "\u{1F4B0}", support: "\u{1F680}", onboarding: "\u{1F3AF}", reports: "\u{1F4CA}" }

  const comparisonData = c.comparisonFeatures.map((feature, i) => ({
    feature,
    monthly: i < 7,
    annual: true,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <Navbar currentPage="/precios" />

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 py-2 text-sm font-semibold">
            {c.badge}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              {c.heroTitle1}
            </span>
            <br />
            <span className="text-blue-600">{c.heroTitle2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {c.heroDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">{c.noCommitment}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">{c.guarantee}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">{c.supportIncluded}</span>
            </div>
          </div>
        </div>
      </section>

      <PricingTable showAllIncluded={true} showFAQ={true} showGuarantee={true} />

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{c.comparisonTitle}</h2>
            <p className="text-xl text-gray-600">{c.comparisonDesc}</p>
          </div>
          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-gray-200">
              <div className="font-bold text-gray-900">{c.features}</div>
              <div className="text-center font-bold text-gray-900">{c.monthlyPlan}</div>
              <div className="text-center font-bold text-blue-600">{c.annualPlan}</div>
            </div>
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-6 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <div className="text-gray-700 font-medium">{item.feature}</div>
                <div className="flex justify-center">
                  {item.monthly ? <CheckCircle className="h-6 w-6 text-green-500" /> : <X className="h-6 w-6 text-gray-300" />}
                </div>
                <div className="flex justify-center">
                  {item.annual ? <CheckCircle className="h-6 w-6 text-blue-600" /> : <X className="h-6 w-6 text-gray-300" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">{c.annualPlan}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{c.whyAnnual}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{c.whyAnnualDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.annualBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-blue-200 bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{benefitIcons[benefit.icon]}</div>
                    <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{c.testimonialsTitle}</h2>
            <p className="text-xl text-gray-600">{c.testimonialsDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 italic leading-relaxed">{`"${testimonial.quote}"`}</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                    <Badge className="mt-2 bg-blue-50 text-blue-700 text-xs">{testimonial.plan}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={c.ctaTitle}
        description={c.ctaDesc}
        primaryButtonText={c.ctaPrimary}
        secondaryButtonText={c.ctaSecondary}
        variant="gradient"
        showStats={true}
        stats={[
          { label: c.activeCompanies, value: "500+" },
          { label: c.satisfaction, value: "98%" },
          { label: c.avgSavings, value: "$2.5K/yr" },
        ]}
      />

      <Footer />
    </div>
  )
}
