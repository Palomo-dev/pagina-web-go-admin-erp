"use client"

import { useState } from "react"
import {
  Check,
  Minus,
  Zap,
  Users,
  Building2,
  Brain,
  FileText,
  BarChart3,
  MessageSquare,
  Image as ImageIcon,
  Bot,
  Plug,
  CreditCard,
  QrCode,
  Wallet,
  Landmark,
  ShieldCheck,
  Headphones,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n"

interface PricingTableProps {
  showAllIncluded?: boolean
  showFAQ?: boolean
  showGuarantee?: boolean
}

// Formatea números con separadores de miles usando puntos (formato COP)
// 99000 → "99.000", 189000 → "189.000", 990000 → "990.000", 9900000 → "9.900.000"
function formatCOP(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export function PricingTable({
  showAllIncluded = true,
  showFAQ = true,
  showGuarantee = true,
}: PricingTableProps) {
  const { lang } = useLanguage()
  const [isAnnual, setIsAnnual] = useState(false)

  const handleSignupClick = () => {
    window.open("https://app.goadmin.io/auth/signup", "_blank")
  }

  // Planes con precios en COP
  const plans = [
    {
      id: "pro",
      name: "Pro",
      tagline: lang === "es" ? "Para Emprendedores" : "For Entrepreneurs",
      monthlyPrice: 99000,
      annualPrice: 990000,
      freeDays: 15,
      modules: 12,
      branches: 1,
      users: 10,
      aiCredits: 500,
      electronicInvoices: 1000 as number | string,
      recommended: false,
    },
    {
      id: "business",
      name: "Business",
      tagline: lang === "es" ? "Para Negocios en Crecimiento" : "For Growing Businesses",
      monthlyPrice: 189000,
      annualPrice: 1890000,
      freeDays: 30,
      modules: 16,
      branches: 5,
      users: 20,
      aiCredits: 2000,
      electronicInvoices: 3000 as number | string,
      recommended: true,
    },
    {
      id: "ultimate",
      name: "Ultimate",
      tagline: lang === "es" ? "Para Empresas Grandes" : "For Enterprise",
      monthlyPrice: 990000,
      annualPrice: 9900000,
      freeDays: 30,
      modules: 18,
      branches: 15,
      users: 60,
      aiCredits: 10000,
      electronicInvoices: lang === "es" ? "Ilimitadas" : "Unlimited",
      recommended: false,
    },
  ]

  // Stats (sección de capacidad)
  const stats = [
    {
      label: lang === "es" ? "Módulos" : "Modules",
      values: [
        plans[0].modules,
        plans[1].modules,
        `${plans[2].modules} (${lang === "es" ? "todos" : "all"})`,
      ],
    },
    {
      label: lang === "es" ? "Sucursales" : "Branches",
      values: [plans[0].branches, plans[1].branches, plans[2].branches],
    },
    {
      label: lang === "es" ? "Usuarios" : "Users",
      values: [plans[0].users, plans[1].users, plans[2].users],
    },
    {
      label: lang === "es" ? "Créditos IA/mes" : "AI credits/month",
      values: [
        formatCOP(plans[0].aiCredits),
        formatCOP(plans[1].aiCredits),
        formatCOP(plans[2].aiCredits),
      ],
    },
    {
      label: lang === "es" ? "Facturas/mes" : "Invoices/month",
      values: [
        typeof plans[0].electronicInvoices === "string"
          ? plans[0].electronicInvoices
          : formatCOP(plans[0].electronicInvoices),
        typeof plans[1].electronicInvoices === "string"
          ? plans[1].electronicInvoices
          : formatCOP(plans[1].electronicInvoices),
        typeof plans[2].electronicInvoices === "string"
          ? plans[2].electronicInvoices
          : formatCOP(plans[2].electronicInvoices),
      ],
    },
    {
      label: lang === "es" ? "Días de prueba" : "Trial days",
      values: [plans[0].freeDays, plans[1].freeDays, plans[2].freeDays],
    },
  ]

  // Features base (todos los planes)
  const baseFeatures = [
    { icon: BarChart3, text: lang === "es" ? "Reportes profesionales" : "Professional reports" },
    { icon: FileText, text: lang === "es" ? "Reportes contables" : "Accounting reports" },
    { icon: BarChart3, text: lang === "es" ? "Comparación de reportes" : "Report comparison" },
    { icon: Bot, text: lang === "es" ? "Asistencia contable IA" : "AI accounting assistant" },
    { icon: MessageSquare, text: lang === "es" ? "Chat con IA" : "AI chat" },
    { icon: ImageIcon, text: lang === "es" ? "Creación de imágenes IA" : "AI image creation" },
    { icon: Plug, text: lang === "es" ? "Integraciones externas" : "External integrations" },
  ]

  // Features Business + Ultimate (no Pro)
  const businessFeatures = [
    { icon: Wallet, text: lang === "es" ? "Paga y cobra desde ERP" : "Pay and collect from ERP" },
    { icon: CreditCard, text: lang === "es" ? "Mueve dinero real" : "Move real money" },
    { icon: QrCode, text: lang === "es" ? "Cobra por QR" : "Collect via QR" },
    { icon: Zap, text: lang === "es" ? "Pagos instantáneos" : "Instant payments" },
  ]

  // Features solo Ultimate
  const ultimateFeatures = [
    { icon: CreditCard, text: lang === "es" ? "Cobra por PSE" : "Collect via PSE" },
    { icon: Wallet, text: lang === "es" ? "Paga nómina por lote" : "Batch payroll payment" },
    { icon: Zap, text: lang === "es" ? "Transferencias 24/7" : "24/7 transfers" },
    { icon: Wallet, text: lang === "es" ? "Anticipos a empleados" : "Employee advances" },
    { icon: Wallet, text: lang === "es" ? "Reembolsos en segundos" : "Refunds in seconds" },
    { icon: Landmark, text: lang === "es" ? "Conciliación automática" : "Auto reconciliation" },
    { icon: BarChart3, text: lang === "es" ? "Saldos bancarios al día" : "Bank balances up to date" },
    { icon: ShieldCheck, text: lang === "es" ? "Detecta pagos rechazados" : "Detect rejected payments" },
    { icon: FileText, text: lang === "es" ? "Asientos al confirmar" : "Entries on confirmation" },
    { icon: ShieldCheck, text: lang === "es" ? "Pista de auditoría" : "Audit trail" },
    { icon: QrCode, text: lang === "es" ? "Cobros por QR Bre-B" : "Bre-B QR collections" },
    { icon: MessageSquare, text: lang === "es" ? "Enlaces de pago WhatsApp" : "WhatsApp payment links" },
    { icon: CreditCard, text: lang === "es" ? "Menos comisiones" : "Lower fees" },
    { icon: CreditCard, text: lang === "es" ? "Tarjetas Visa por empleado" : "Visa cards per employee" },
    { icon: Wallet, text: lang === "es" ? "Anticipos tarjetas virtuales" : "Virtual card advances" },
    { icon: ShieldCheck, text: lang === "es" ? "Bloquea/libera tarjetas" : "Block/release cards" },
    { icon: Headphones, text: lang === "es" ? "Soporte dedicado 24/7" : "Dedicated 24/7 support" },
  ]

  // Add-ons vendibles
  const addOns = [
    { icon: Users, title: lang === "es" ? "Usuarios adicionales" : "Additional users" },
    { icon: Building2, title: lang === "es" ? "Sucursales adicionales" : "Additional branches" },
    { icon: Brain, title: lang === "es" ? "Créditos IA adicionales" : "Additional AI credits" },
    { icon: FileText, title: lang === "es" ? "Facturas adicionales" : "Additional invoices" },
  ]

  // Renderizar check o dash
  const renderCell = (planIndex: number, availableIn: number[]) => {
    if (availableIn.includes(planIndex)) {
      return <Check className="h-5 w-5 text-blue-600 mx-auto" />
    }
    return <Minus className="h-5 w-5 text-gray-300 mx-auto" />
  }

  // Renderizar valor de stat
  const renderStatValue = (value: string | number, isBusiness: boolean) => (
    <span className={`font-semibold ${isBusiness ? "text-blue-700" : "text-gray-900"}`}>
      {value}
    </span>
  )

  return (
    <section
      id="precios"
      className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <Badge className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full font-medium text-xs md:text-sm">
            {lang === "es" ? "Planes Simples y Transparentes" : "Simple & Transparent Pricing"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            {lang === "es" ? "Elige tu plan" : "Choose your plan"}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto mb-6">
            {lang === "es"
              ? "Sin sorpresas, sin contratos a largo plazo. Cancela cuando quieras."
              : "No surprises, no long-term contracts. Cancel anytime."}
          </p>

          {/* Toggle Mensual/Anual */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span
              className={`font-semibold text-sm transition-colors ${
                !isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {lang === "es" ? "Mensual" : "Monthly"}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-9 w-16 items-center rounded-full transition-all duration-300 ${
                isAnnual
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg"
                  : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-7 w-7 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                  isAnnual ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`font-semibold text-sm transition-colors ${
                isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {lang === "es" ? "Anual" : "Annual"}
            </span>
            {isAnnual && (
              <Badge className="ml-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 hover:from-green-100 hover:to-emerald-100 font-semibold px-4 py-2">
                {lang === "es" ? "Ahorra 20%" : "Save 20%"}
              </Badge>
            )}
          </div>
        </div>

        {/* ===== Cards móviles (responsive) ===== */}
        <div className="md:hidden space-y-4 mb-8">
          {plans.map((plan, pi) => {
            const isBiz = plan.recommended
            const allFeaturesList = [
              ...baseFeatures,
              ...(pi >= 1 ? businessFeatures : []),
              ...(pi >= 2 ? ultimateFeatures : []),
            ]
            return (
              <Card
                key={plan.id}
                className={`overflow-hidden ${isBiz ? "border-2 border-blue-500 shadow-lg" : "border border-gray-200"}`}
              >
                <CardContent className="p-5">
                  {isBiz && (
                    <Badge className="mb-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs">
                      {lang === "es" ? "⭐ Más Popular" : "⭐ Most Popular"}
                    </Badge>
                  )}
                  <h3 className={`text-xl font-bold mb-0.5 ${isBiz ? "text-blue-700" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{plan.tagline}</p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-2xl font-bold text-gray-900">
                      ${formatCOP(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                    </span>
                    <span className="text-xs text-gray-500">
                      {isAnnual ? (lang === "es" ? "/año" : "/year") : (lang === "es" ? "/mes" : "/mo")}
                    </span>
                  </div>
                  <Button
                    onClick={handleSignupClick}
                    className={`w-full mb-4 text-sm font-semibold ${
                      isBiz
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                        : "bg-gray-800 hover:bg-gray-900 text-white"
                    }`}
                  >
                    {lang === "es" ? "Comenzar Gratis" : "Start Free"}
                  </Button>
                  {/* Stats compactas */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-base font-bold text-gray-900">{plan.modules}</div>
                      <div className="text-[10px] text-gray-500">{lang === "es" ? "Módulos" : "Modules"}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-base font-bold text-gray-900">{plan.branches}</div>
                      <div className="text-[10px] text-gray-500">{lang === "es" ? "Sucursales" : "Branches"}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-base font-bold text-gray-900">{plan.users}</div>
                      <div className="text-[10px] text-gray-500">{lang === "es" ? "Usuarios" : "Users"}</div>
                    </div>
                  </div>
                  {/* Features lista compacta */}
                  <div className="space-y-1.5 max-h-48 overflow-y-auto" data-internal-scroll="true">
                    {allFeaturesList.map((feat, fi) => {
                      const FeatureIcon = feat.icon
                      return (
                        <div key={fi} className="flex items-start gap-2 text-xs">
                          <FeatureIcon className="h-3.5 w-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feat.text}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* ===== Tabla comparativa (desktop) ===== */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 shadow-lg bg-white mb-8">
          <table className="w-full border-collapse min-w-[640px]">
            {/* Header de planes */}
            <thead>
              <tr>
                {/* Columna vacía esquina */}
                <th className="sticky left-0 z-20 bg-white border-b border-gray-200 p-3 md:p-4 text-left min-w-[160px]">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    {lang === "es" ? "Comparativa" : "Comparison"}
                  </span>
                </th>
                {/* Pro */}
                <th className="border-b border-gray-200 p-3 md:p-4 text-center min-w-[160px]">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Pro</h3>
                  <p className="text-[10px] font-medium text-gray-500 mb-2">
                    {plans[0].tagline}
                  </p>
                  <div className="mb-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-xl font-bold text-gray-900">
                        ${formatCOP(isAnnual ? plans[0].annualPrice : plans[0].monthlyPrice)}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {isAnnual ? (lang === "es" ? "/año" : "/year") : (lang === "es" ? "/mes" : "/mo")}
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-xs text-gray-400 mt-1">
                        ${formatCOP(Math.round(plans[0].annualPrice / 12))}
                        {lang === "es" ? "/mes" : "/mo"}
                      </p>
                    )}
                  </div>
                  <Button
                    onClick={handleSignupClick}
                    className="w-full h-8 font-semibold text-xs bg-gray-800 hover:bg-gray-900 text-white"
                  >
                    {lang === "es" ? "Comenzar Gratis" : "Start Free"}
                  </Button>
                </th>
                {/* Business (destacado) */}
                <th className="sticky top-0 z-10 border-b border-gray-200 p-3 md:p-4 text-center min-w-[180px] bg-blue-50 border-l-2 border-r-2 border-blue-500">
                  <div className="mb-2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 font-semibold shadow text-xs">
                      {lang === "es" ? "⭐ Más Popular" : "⭐ Most Popular"}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-blue-700 mb-1">Business</h3>
                  <p className="text-[10px] font-medium text-blue-600 mb-2">
                    {plans[1].tagline}
                  </p>
                  <div className="mb-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-xl font-bold text-gray-900">
                        ${formatCOP(isAnnual ? plans[1].annualPrice : plans[1].monthlyPrice)}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {isAnnual ? (lang === "es" ? "/año" : "/year") : (lang === "es" ? "/mes" : "/mo")}
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-xs text-gray-400 mt-1">
                        ${formatCOP(Math.round(plans[1].annualPrice / 12))}
                        {lang === "es" ? "/mes" : "/mo"}
                      </p>
                    )}
                  </div>
                  <Button
                    onClick={handleSignupClick}
                    className="w-full h-8 font-semibold text-xs bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg text-white"
                  >
                    {lang === "es" ? "Comenzar Gratis" : "Start Free"}
                  </Button>
                </th>
                {/* Ultimate */}
                <th className="border-b border-gray-200 p-3 md:p-4 text-center min-w-[160px]">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ultimate</h3>
                  <p className="text-[10px] font-medium text-gray-500 mb-2">
                    {plans[2].tagline}
                  </p>
                  <div className="mb-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-xl font-bold text-gray-900">
                        ${formatCOP(isAnnual ? plans[2].annualPrice : plans[2].monthlyPrice)}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {isAnnual ? (lang === "es" ? "/año" : "/year") : (lang === "es" ? "/mes" : "/mo")}
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-xs text-gray-400 mt-1">
                        ${formatCOP(Math.round(plans[2].annualPrice / 12))}
                        {lang === "es" ? "/mes" : "/mo"}
                      </p>
                    )}
                  </div>
                  <Button
                    onClick={handleSignupClick}
                    className="w-full h-8 font-semibold text-xs bg-gray-800 hover:bg-gray-900 text-white"
                  >
                    {lang === "es" ? "Comenzar Gratis" : "Start Free"}
                  </Button>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Sección: Capacidad (stats) */}
              <tr>
                <td
                  colSpan={4}
                  className="sticky left-0 bg-gray-50 border-b border-gray-200 px-6 py-3"
                >
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                    {lang === "es" ? "Capacidad" : "Capacity"}
                  </span>
                </td>
              </tr>
              {stats.map((stat, i) => (
                <tr key={`stat-${i}`} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="sticky left-0 z-10 bg-inherit border-b border-gray-100 px-6 py-2.5 text-xs text-gray-600 font-medium">
                    {stat.label}
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center text-xs">
                    {renderStatValue(stat.values[0], false)}
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center text-xs bg-blue-50/50 border-l-2 border-r-2 border-blue-500">
                    {renderStatValue(stat.values[1], true)}
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center text-xs">
                    {renderStatValue(stat.values[2], false)}
                  </td>
                </tr>
              ))}

              {/* Sección: Reportes e IA (features base - todos) */}
              <tr>
                <td
                  colSpan={4}
                  className="sticky left-0 bg-gray-50 border-b border-gray-200 px-6 py-3"
                >
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                    {lang === "es" ? "Reportes e IA" : "Reports & AI"}
                  </span>
                </td>
              </tr>
              {baseFeatures.map((feature, i) => (
                <tr key={`base-${i}`} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="sticky left-0 z-10 bg-inherit border-b border-gray-100 px-6 py-2.5 text-xs text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </div>
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center">
                    <Check className="h-4 w-4 text-blue-600 mx-auto" />
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center bg-blue-50/50 border-l-2 border-r-2 border-blue-500">
                    <Check className="h-4 w-4 text-blue-600 mx-auto" />
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center">
                    <Check className="h-4 w-4 text-blue-600 mx-auto" />
                  </td>
                </tr>
              ))}

              {/* Sección: Pagos y cobros (Business + Ultimate) */}
              <tr>
                <td
                  colSpan={4}
                  className="sticky left-0 bg-gray-50 border-b border-gray-200 px-6 py-3"
                >
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                    {lang === "es" ? "Pagos y cobros" : "Payments & Collections"}
                  </span>
                </td>
              </tr>
              {businessFeatures.map((feature, i) => (
                <tr key={`biz-${i}`} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="sticky left-0 z-10 bg-inherit border-b border-gray-100 px-6 py-2.5 text-xs text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </div>
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center">
                    <Minus className="h-4 w-4 text-gray-300 mx-auto" />
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center bg-blue-50/50 border-l-2 border-r-2 border-blue-500">
                    <Check className="h-4 w-4 text-blue-600 mx-auto" />
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center">
                    <Check className="h-4 w-4 text-blue-600 mx-auto" />
                  </td>
                </tr>
              ))}

              {/* Sección: Funciones avanzadas (solo Ultimate) */}
              <tr>
                <td
                  colSpan={4}
                  className="sticky left-0 bg-gray-50 border-b border-gray-200 px-6 py-3"
                >
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                    {lang === "es" ? "Funciones avanzadas" : "Advanced features"}
                  </span>
                </td>
              </tr>
              {ultimateFeatures.map((feature, i) => (
                <tr key={`ult-${i}`} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="sticky left-0 z-10 bg-inherit border-b border-gray-100 px-6 py-2.5 text-xs text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </div>
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center">
                    <Minus className="h-4 w-4 text-gray-300 mx-auto" />
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center bg-blue-50/50 border-l-2 border-r-2 border-blue-500">
                    <Minus className="h-4 w-4 text-gray-300 mx-auto" />
                  </td>
                  <td className="border-b border-gray-100 px-6 py-2.5 text-center">
                    <Check className="h-4 w-4 text-blue-600 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Certificado DIAN */}
        <Card className="border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50 mb-6 md:mb-8 overflow-hidden">
          <CardContent className="p-4 md:p-5">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <Badge className="mb-2 bg-yellow-200 text-yellow-800 hover:bg-yellow-200 text-xs font-semibold">
                    {lang === "es" ? "Add-on opcional" : "Optional add-on"}
                  </Badge>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {lang === "es" ? "Certificado Digital DIAN" : "DIAN Digital Certificate"}
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xl">
                    {lang === "es"
                      ? "Certificado digital necesario para firma de facturas electrónicas ante la DIAN. Válido por 1 año."
                      : "Digital certificate required for electronic invoice signing with DIAN. Valid for 1 year."}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3 flex-shrink-0">
                <div className="text-right">
                  <span className="text-xl font-bold text-gray-900">$130.000</span>
                  <span className="text-sm text-gray-500 font-medium ml-1">
                    {lang === "es" ? "/año" : "/year"}
                  </span>
                </div>
                <Button
                  onClick={handleSignupClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
                >
                  {lang === "es" ? "Agregar al plan" : "Add to plan"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Add-ons vendibles (pills horizontales) */}
        <div className="mb-3">
          <p className="text-center text-sm text-gray-500 mb-3">
            {lang === "es"
              ? "¿Necesitas más capacidad? Add-ons disponibles para cualquier plan:"
              : "Need more capacity? Add-ons available for any plan:"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {addOns.map((addon, i) => {
              const Icon = addon.icon
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <Icon className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
                    {addon.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
