"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  ArrowRight,
  Sparkles,
  Bot,
  Image as ImageIcon,
  MessageSquare,
  BarChart3,
  Globe,
  Lock,
  Database,
  ShieldCheck,
  FileText,
  Wallet,
  Landmark,
  CreditCard,
  QrCode,
  Zap,
  Receipt,
  CheckCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { PricingTable } from "@/components/pricing-table"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import HeroSceneBackground from "@/components/hero-scene-background"
import { CloudField } from "@/components/cloud-field"
import { HeroDashboard } from "@/components/product-demos"
import { ReportsAnalytics } from "@/components/reports-analytics"
import { InvoicePreview } from "@/components/invoice-preview"
import { ChatMessages } from "@/components/ui/chat-messages"
import { IntegrationsGrid } from "@/components/integrations-grid"
import ScrollDots from "@/components/scroll-dots"
import { useFullPageScroll } from "@/hooks/use-fullpage-scroll"
import { useLanguage } from "@/lib/i18n"

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Component() {
  const { t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
    container: scrollContainerRef,
  })
  const dashboardY = useTransform(heroScrollProgress, [0, 1], [0, -40])
  const heroTextY = useTransform(heroScrollProgress, [0, 1], [0, 60])
  const heroTextOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0])

  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "producto", label: "Producto" },
    { id: "reportes", label: "Reportes" },
    { id: "finanzas", label: "Finanzas" },
    { id: "ia", label: "IA" },
    { id: "integraciones", label: "Integraciones" },
    { id: "precios", label: "Precios" },
    { id: "cta", label: "Comenzar" },
  ]

  const { activeIndex, scrollToSection } = useFullPageScroll({
    sectionCount: sections.length,
    scrollContainerRef,
  })

  const features = [
    { icon: Globe, title: t("feat.multiTenant"), desc: t("feat.multiTenantDesc") },
    { icon: Lock, title: t("feat.security"), desc: t("feat.securityDesc") },
    { icon: Database, title: t("feat.realTime"), desc: t("feat.realTimeDesc") },
    { icon: ShieldCheck, title: t("feat.audit"), desc: t("feat.auditDesc") },
  ]

  const aiFeatures = [
    { icon: Bot, title: "Asistencia contable con IA", desc: "Pregunta y recibe respuestas al instante" },
    { icon: BarChart3, title: "Reportes con IA", desc: "Genera reportes profesionales y contables al instante" },
    { icon: ImageIcon, title: "Creación de imágenes", desc: "Crea imágenes promocionales para tus campañas con IA" },
    { icon: MessageSquare, title: "Chat con IA", desc: "Conversa con tu asistente contable cuando lo necesites" },
  ]

  // Color de los dots según la sección activa (light para fondos oscuros)
  const dotsColor = activeIndex === 0 || activeIndex === 4 || activeIndex === 7 ? "light" : "dark"

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50"
      id="scroll-container"
    >
      <Navbar
        currentPage="/"
        scrollContainerId="scroll-container"
        onNavigate={(sectionId) => {
          const idx = sections.findIndex((s) => s.id === sectionId)
          if (idx >= 0) scrollToSection(idx)
        }}
      />
      <ScrollDots sections={sections} activeIndex={activeIndex} onDotClick={scrollToSection} color={dotsColor} />

      {/* ===== HERO ===== */}
      <section
        id="hero"
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600"
      >
        <HeroSceneBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-blue-900/30 pointer-events-none" />
        <div className="relative z-10 h-full overflow-y-auto flex flex-col items-center justify-center px-4 pt-24 pb-4" data-internal-scroll="true">

        <motion.div style={{ y: heroTextY, opacity: heroTextOpacity }} className="container mx-auto text-center relative z-10 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 mb-4 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-lg"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2.5 animate-pulse"></span>
            <span className="text-white font-semibold text-xs md:text-sm">{t("hero.badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-6xl font-bold text-white mb-3 leading-tight drop-shadow-lg"
          >
            {t("hero.title1")}
            <span className="block bg-gradient-to-r from-white via-blue-50 to-blue-200 bg-clip-text text-transparent">
              GO Admin
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-blue-50 mb-5 max-w-2xl mx-auto leading-relaxed drop-shadow"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 text-sm md:text-base font-semibold shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
            >
              {t("hero.cta1")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 px-6 py-3 text-sm md:text-base font-semibold bg-transparent backdrop-blur-sm"
              onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
            >
              {t("hero.cta2")}
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard compacto — más pequeño en móvil */}
        <motion.div
          style={{ y: dashboardY }}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-2xl md:max-w-3xl"
        >
          <div style={{ perspective: "1200px" }}>
            <div style={{ transform: "rotateX(4deg)", transformOrigin: "center bottom" }}>
              <HeroDashboard />
            </div>
          </div>
        </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-9 border-2 border-white/50 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== PRODUCTO ===== */}
      <section
        id="producto"
        className="relative h-screen bg-white overflow-hidden"
      >
        <CloudField opacity={0.08} count={4} color="blue" />

        <div className="relative z-10 h-full overflow-y-auto pt-24 pb-12 px-4" data-internal-scroll="true">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-8">
              <Badge className="mb-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-1.5 text-xs md:text-sm font-semibold">
                {t("features.badge")}
              </Badge>
              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2">
                {t("features.title1")}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {t("features.title2")}
                </span>
              </h2>
              <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">{t("features.subtitle")}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
            {features.map((feature, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <Card className="group border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all bg-white h-full">
                  <CardContent className="p-3 md:p-5 text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-2 md:mb-3 mx-auto group-hover:scale-110 transition-transform">
                      <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 text-xs md:text-sm">{feature.title}</h3>
                    <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed hidden md:block">{feature.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="text-center mb-3">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-0.5">{t("modules.title")}</h3>
              <p className="text-gray-600 text-xs md:text-sm">{t("modules.subtitle")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2.5 max-w-3xl mx-auto">
              {[
                "POS", "Inventario", "CRM", "PMS Hotel", "Parking", "Transporte",
                "HRM", "Nómina", "Facturación DIAN", "Contabilidad", "CxC & CxP",
                "Dashboards", "KPIs", "Alertas", "APIs", "Webhooks",
              ].map((mod, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 md:px-3.5 md:py-1.5 bg-white border border-gray-200 rounded-full text-[11px] md:text-sm font-medium text-gray-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default shadow-sm"
                >
                  {mod}
                </span>
              ))}
              <span className="px-2.5 py-1 md:px-3.5 md:py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-[11px] md:text-sm font-medium text-white shadow-md">
                + {t("modules.title")}
              </span>
            </div>
          </Reveal>
        </div>
        </div>
      </section>

      {/* ===== REPORTES ===== */}
      <section
        id="reportes"
        className="relative h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
      >
        <CloudField opacity={0.06} count={3} color="blue" />

        <div className="relative z-10 h-full overflow-y-auto pt-24 pb-12 px-4" data-internal-scroll="true">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-4 md:mb-6">
              <Badge className="mb-2 bg-blue-100 text-blue-800 px-3 py-1.5">
                <BarChart3 className="w-3.5 h-3.5 mr-1.5" />
                {t("demos.badge")}
              </Badge>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-1.5">{t("demos.title")}</h2>
              <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto">{t("demos.subtitle")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ReportsAnalytics />
          </Reveal>
        </div>
        </div>
      </section>

      {/* ===== FINANZAS, CONTABILIDAD Y FACTURACIÓN ===== */}
      <section
        id="finanzas"
        className="relative h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden"
      >
        <CloudField opacity={0.06} count={3} color="blue" />

        <div className="relative z-10 h-full overflow-y-auto pt-24 pb-12 px-4" data-internal-scroll="true">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-4 md:mb-6">
              <Badge className="mb-2 bg-indigo-100 text-indigo-700 px-3 py-1.5">
                <Landmark className="w-3.5 h-3.5 mr-1.5" />
                {t("mod.finance")}
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                {t("mod.billing")} · {t("mod.accounting")}
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                {t("mod.billingDesc")} — {t("mod.accounting")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center max-w-5xl mx-auto">
            {/* Tabs de beneficios (izquierda) */}
            <Reveal>
              <Tabs defaultValue="facturacion" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4 h-auto">
                  <TabsTrigger value="facturacion" className="text-xs md:text-sm py-2">
                    <FileText className="w-3.5 h-3.5 mr-1.5" />
                    {t("mod.billing")}
                  </TabsTrigger>
                  <TabsTrigger value="contabilidad" className="text-xs md:text-sm py-2">
                    <Landmark className="w-3.5 h-3.5 mr-1.5" />
                    {t("mod.accounting")}
                  </TabsTrigger>
                  <TabsTrigger value="finanzas" className="text-xs md:text-sm py-2">
                    <Wallet className="w-3.5 h-3.5 mr-1.5" />
                    {t("mod.finance")}
                  </TabsTrigger>
                </TabsList>

                {/* Tab: Facturación DIAN */}
                <TabsContent value="facturacion" className="space-y-2.5 mt-0">
                  {[
                    { icon: CheckCircle, text: "Facturación electrónica validada por la DIAN en tiempo real" },
                    { icon: QrCode, text: "Genera facturas con QR y CUFE automático" },
                    { icon: FileText, text: "Notas crédito y débito electrónicas" },
                    { icon: Zap, text: "Envío automático al cliente por email y WhatsApp" },
                    { icon: ShieldCheck, text: "Validación previa y recepción de acuses DIAN" },
                    { icon: Receipt, text: "Contingencia offline con sincronización automática" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all">
                      <item.icon className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </TabsContent>

                {/* Tab: Contabilidad */}
                <TabsContent value="contabilidad" className="space-y-2.5 mt-0">
                  {[
                    { icon: Landmark, text: "Plan Único de Cuentas (PUC) Colombia completo" },
                    { icon: FileText, text: "Asientos contables automáticos al facturar" },
                    { icon: BarChart3, text: "Balance general y estado de resultados en vivo" },
                    { icon: CheckCircle, text: "Conciliación bancaria automática sin match manual" },
                    { icon: ShieldCheck, text: "Pista de auditoría completa para revisoría fiscal" },
                    { icon: Zap, text: "Cierre fiscal automático con generación de medios magnéticos" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all">
                      <item.icon className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </TabsContent>

                {/* Tab: Finanzas */}
                <TabsContent value="finanzas" className="space-y-2.5 mt-0">
                  {[
                    { icon: Wallet, text: "Paga y cobra desde el ERP sin salir a banca externa" },
                    { icon: CreditCard, text: "Transferencias instantáneas 24/7 incluso festivos" },
                    { icon: QrCode, text: "Cobros por QR Bre-B y enlaces de pago por WhatsApp" },
                    { icon: Zap, text: "Pagos de nómina por lote en un solo clic" },
                    { icon: ShieldCheck, text: "Detección automática de pagos rechazados o duplicados" },
                    { icon: BarChart3, text: "Saldos bancarios siempre al día en el dashboard" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all">
                      <item.icon className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </Reveal>

            {/* InvoicePreview (derecha en desktop, debajo en móvil) */}
            <Reveal delay={0.2}>
              <InvoicePreview />
            </Reveal>
          </div>
        </div>
        </div>
      </section>

      {/* ===== IA ===== */}
      <section
        id="ia"
        className="relative h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden"
      >
        <CloudField opacity={0.12} count={5} color="white" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 h-full overflow-y-auto pt-24 pb-12 px-4" data-internal-scroll="true">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-4 md:mb-6">
              <Badge className="mb-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1.5">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                {t("ai.badge")}
              </Badge>
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-2">{t("ai.title")}</h2>
              <p className="text-sm md:text-lg text-blue-100 max-w-3xl mx-auto">{t("ai.subtitle")}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 items-center">
            {/* Features IA — en móvil solo 2 visibles, scroll horizontal */}
            <Reveal>
              <div className="space-y-2 md:space-y-3">
                {aiFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xs md:text-sm">{feature.title}</h3>
                      <p className="text-blue-100 text-[11px] md:text-xs leading-relaxed hidden md:block">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="text-base font-semibold text-white mb-3 text-center lg:text-left">{t("ai.demoTitle")}</h3>
              <ChatMessages className="h-[300px] md:h-[380px] w-full" autoPlay={true} showReplay={true} interactive={false} />
            </Reveal>
          </div>
        </div>
        </div>
      </section>

      {/* ===== INTEGRACIONES ===== */}
      <section
        id="integraciones"
        className="relative h-screen bg-white overflow-hidden"
      >
        <CloudField opacity={0.06} count={3} color="blue" />
        <div className="relative z-10 h-full overflow-y-auto pt-24 pb-12 px-4" data-internal-scroll="true">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-6 md:mb-10">
              <Badge className="mb-3 bg-blue-100 text-blue-800 px-3 py-1.5">{t("integrations.badge")}</Badge>
              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2">{t("integrations.title")}</h2>
              <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">{t("integrations.subtitle")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <IntegrationsGrid />
          </Reveal>
        </div>
        </div>
      </section>

      {/* ===== PRECIOS ===== */}
      <section id="precios" className="relative h-screen overflow-hidden">
        <div className="h-full overflow-y-auto" data-internal-scroll="true">
          <PricingTable showAllIncluded={true} showFAQ={true} showGuarantee={true} />
        </div>
      </section>

      {/* ===== CTA Final ===== */}
      <section
        id="cta"
        className="relative h-screen py-16 md:py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden flex flex-col justify-center"
      >
        <CloudField opacity={0.15} count={4} color="white" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <Reveal>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-3">{t("pageCta.title")}</h2>
            <p className="text-blue-100 mb-6 text-sm md:text-lg">{t("pageCta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl px-7 py-3.5 text-base font-semibold"
                onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
              >
                {t("pageCta.primary")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-7 py-3.5 text-base font-semibold"
                onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}
              >
                {t("pageCta.secondary")}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <div className="h-screen flex flex-col justify-center bg-gray-950">
        <Footer />
      </div>
    </div>
  )
}
