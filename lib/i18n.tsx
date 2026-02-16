"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "es" | "en"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Flat translation dictionaries
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.modules": "Módulos",
    "nav.industries": "Industrias",
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.helpCenter": "Centro de Ayuda",
    "nav.blog": "Blog",
    "nav.about": "Acerca de",
    "nav.careers": "Carreras",
    "nav.contact": "Contacto",
    "nav.login": "Iniciar Sesión",
    "nav.signup": "Prueba Gratis",
    "nav.openMenu": "Abrir menú de navegación",

    // Footer
    "footer.description": "La plataforma ERP más completa del mercado. Gestiona tu negocio de manera eficiente con todos los módulos integrados que necesitas.",
    "footer.newsletter": "Suscríbete a nuestro newsletter",
    "footer.subscribe": "Suscribir",
    "footer.emailPlaceholder": "tu@email.com",
    "footer.product": "Producto",
    "footer.support": "Soporte",
    "footer.company": "Empresa",
    "footer.integrations": "Integraciones",
    "footer.api": "API",
    "footer.documentation": "Documentación",
    "footer.systemStatus": "Estado del Sistema",
    "footer.community": "Comunidad",
    "footer.press": "Prensa",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.rights": "Todos los derechos reservados.",
    "footer.uptime": "99.9% Uptime",
    "footer.ssl": "SSL Seguro",
    "footer.gdpr": "GDPR Compliant",

    // CTA
    "cta.title": "¿Listo para transformar tu negocio?",
    "cta.description": "Únete a cientos de empresas que ya confían en GO Admin para gestionar sus operaciones diarias de manera eficiente.",
    "cta.primary": "Prueba Gratuita 14 Días",
    "cta.secondary": "Solicitar Demo",
    "cta.activeCompanies": "Empresas activas",
    "cta.countries": "Países",
    "cta.satisfaction": "Satisfacción",

    // Pricing
    "pricing.badge": "Precios Transparentes",
    "pricing.title": "Un solo plan,",
    "pricing.titleHighlight": "todo incluido",
    "pricing.subtitle": "Sin límites ocultos, sin módulos extra. Acceso completo a todos los módulos desde el primer día con soporte técnico incluido.",
    "pricing.noCommitment": "Sin permanencia",
    "pricing.cancelAnytime": "Cancela cuando quieras",
    "pricing.freeTrial": "14 días gratis",
    "pricing.monthly": "Plan Mensual",
    "pricing.monthlyDesc": "Perfecto para empezar sin compromisos",
    "pricing.month": "/mes",
    "pricing.perOrg": "por organización",
    "pricing.monthlyBilling": "Facturación mensual",
    "pricing.annual": "Plan Anual",
    "pricing.annualDesc": "El más elegido por empresas exitosas",
    "pricing.year": "/año",
    "pricing.savePopular": "AHORRA 18% - MÁS POPULAR",
    "pricing.saveYear": "Ahorra $44 al año",
    "pricing.annualEquiv": "Equivale a $16.33/mes - Facturación anual",
    "pricing.allModules": "Todos los 15 módulos incluidos",
    "pricing.unlimitedBranches": "Sucursales y usuarios ilimitados",
    "pricing.supportChat": "Soporte técnico por chat y email",
    "pricing.premiumIntegrations": "Integraciones premium incluidas",
    "pricing.autoBackup": "Backup automático diario",
    "pricing.startTrial": "Comenzar Prueba Gratuita",
    "pricing.trialNote": "14 días gratis - No se requiere tarjeta de crédito",
    "pricing.annualPlus": "Todo del plan mensual, PLUS:",
    "pricing.freeMonths": "2 meses completamente gratis",
    "pricing.prioritySupport": "Soporte técnico prioritario",
    "pricing.onboarding": "Onboarding personalizado 1:1",
    "pricing.advancedReports": "Reportes avanzados exclusivos",
    "pricing.earlyAccess": "Acceso anticipado a nuevas funciones",
    "pricing.startAnnual": "Comenzar con Descuento Anual",
    "pricing.annualNote": "14 días gratis - Garantía de devolución 30 días",
    "pricing.allIncluded": "Todo incluido en ambos planes",
    "pricing.allIncludedDesc": "Sin restricciones, sin módulos premium, sin sorpresas",
    "pricing.faq": "Preguntas Frecuentes",
    "pricing.guarantee": "Garantía de 30 días",
    "pricing.guaranteeDesc": "Si no estás completamente satisfecho con GO Admin en los primeros 30 días, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.",
    "pricing.try14": "Probar 14 Días Gratis",
    "pricing.talkSales": "Hablar con Ventas",
    "pricing.trustText": "Más de 500 empresas confían en GO Admin",
    "pricing.faq1q": "¿Hay costos ocultos o módulos premium?",
    "pricing.faq1a": "No. El precio incluye acceso completo a todos los módulos, integraciones y características. Sin sorpresas.",
    "pricing.faq2q": "¿Puedo cambiar de plan mensual a anual?",
    "pricing.faq2a": "Sí, puedes cambiar en cualquier momento. Al cambiar a anual, se aplicará el descuento proporcionalmente.",
    "pricing.faq3q": "¿Qué incluye el soporte técnico?",
    "pricing.faq3a": "Chat en vivo, soporte por email, base de conocimientos completa y onboarding personalizado.",
    "pricing.faq4q": "¿Hay límite de transacciones o almacenamiento?",
    "pricing.faq4a": "No hay límites en transacciones, productos, clientes o almacenamiento. Úsalo sin restricciones.",

    // All included features
    "pricing.feat1": "Todos los 15 Módulos",
    "pricing.feat1d": "POS, Inventario, PMS, CRM, HRM, Finanzas y más",
    "pricing.feat2": "Sucursales Ilimitadas",
    "pricing.feat2d": "Gestiona todas tus ubicaciones desde un solo lugar",
    "pricing.feat3": "Usuarios Ilimitados",
    "pricing.feat3d": "Agrega todo tu equipo sin costo adicional",
    "pricing.feat4": "Reportes Avanzados",
    "pricing.feat4d": "Dashboards personalizables y métricas en tiempo real",
    "pricing.feat5": "Seguridad Empresarial",
    "pricing.feat5d": "Autenticación MFA, roles granulares, auditoría completa",
    "pricing.feat6": "Integraciones Premium",
    "pricing.feat6d": "Stripe, MercadoPago, QuickBooks, Shopify y más",
    "pricing.feat7": "Apps Móviles",
    "pricing.feat7d": "iOS y Android para gestión sobre la marcha",
    "pricing.feat8": "Backup Automático",
    "pricing.feat8d": "Respaldos diarios automáticos en la nube",
    "pricing.feat9": "Soporte Técnico",
    "pricing.feat9d": "Chat en vivo, email y base de conocimientos",

    // Module layout
    "module.badge": "Módulo Especializado",
    "module.try": "Probar",
    "module.liveDemo": "Ver Demo en Vivo",
    "module.prev": "Anterior:",
    "module.next": "Siguiente:",
    "module.readyTitle": "¿Listo para implementar",
    "module.readyDesc1": "Únete a miles de empresas que ya utilizan",
    "module.readyDesc2": "para optimizar sus operaciones diarias.",
    "module.startTrial": "Comenzar Prueba Gratuita",

    // Industry layout
    "industry.badge": "Solución Especializada",
    "industry.try": "Probar para",
    "industry.liveDemo": "Ver Demo Especializada",
    "industry.readyTitle": "¿Listo para optimizar tu",
    "industry.readyDesc1": "Únete a cientos de",
    "industry.readyDesc2": "que ya confían en GO Admin para gestionar sus operaciones.",
  },
  en: {
    // Navbar
    "nav.modules": "Modules",
    "nav.industries": "Industries",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.helpCenter": "Help Center",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.careers": "Careers",
    "nav.contact": "Contact",
    "nav.login": "Log In",
    "nav.signup": "Free Trial",
    "nav.openMenu": "Open navigation menu",

    // Footer
    "footer.description": "The most complete ERP platform on the market. Manage your business efficiently with all the integrated modules you need.",
    "footer.newsletter": "Subscribe to our newsletter",
    "footer.subscribe": "Subscribe",
    "footer.emailPlaceholder": "you@email.com",
    "footer.product": "Product",
    "footer.support": "Support",
    "footer.company": "Company",
    "footer.integrations": "Integrations",
    "footer.api": "API",
    "footer.documentation": "Documentation",
    "footer.systemStatus": "System Status",
    "footer.community": "Community",
    "footer.press": "Press",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved.",
    "footer.uptime": "99.9% Uptime",
    "footer.ssl": "SSL Secure",
    "footer.gdpr": "GDPR Compliant",

    // CTA
    "cta.title": "Ready to transform your business?",
    "cta.description": "Join hundreds of companies that already trust GO Admin to manage their daily operations efficiently.",
    "cta.primary": "Free 14-Day Trial",
    "cta.secondary": "Request Demo",
    "cta.activeCompanies": "Active companies",
    "cta.countries": "Countries",
    "cta.satisfaction": "Satisfaction",

    // Pricing
    "pricing.badge": "Transparent Pricing",
    "pricing.title": "One plan,",
    "pricing.titleHighlight": "all included",
    "pricing.subtitle": "No hidden limits, no extra modules. Full access to all modules from day one with technical support included.",
    "pricing.noCommitment": "No commitment",
    "pricing.cancelAnytime": "Cancel anytime",
    "pricing.freeTrial": "14-day free trial",
    "pricing.monthly": "Monthly Plan",
    "pricing.monthlyDesc": "Perfect to start with no commitments",
    "pricing.month": "/month",
    "pricing.perOrg": "per organization",
    "pricing.monthlyBilling": "Monthly billing",
    "pricing.annual": "Annual Plan",
    "pricing.annualDesc": "The most chosen by successful companies",
    "pricing.year": "/year",
    "pricing.savePopular": "SAVE 18% - MOST POPULAR",
    "pricing.saveYear": "Save $44 per year",
    "pricing.annualEquiv": "Equals $16.33/month - Annual billing",
    "pricing.allModules": "All 15 modules included",
    "pricing.unlimitedBranches": "Unlimited branches and users",
    "pricing.supportChat": "Technical support via chat and email",
    "pricing.premiumIntegrations": "Premium integrations included",
    "pricing.autoBackup": "Daily automatic backup",
    "pricing.startTrial": "Start Free Trial",
    "pricing.trialNote": "14-day free trial - No credit card required",
    "pricing.annualPlus": "Everything from monthly plan, PLUS:",
    "pricing.freeMonths": "2 months completely free",
    "pricing.prioritySupport": "Priority technical support",
    "pricing.onboarding": "Personalized 1:1 onboarding",
    "pricing.advancedReports": "Exclusive advanced reports",
    "pricing.earlyAccess": "Early access to new features",
    "pricing.startAnnual": "Start with Annual Discount",
    "pricing.annualNote": "14-day free trial - 30-day money-back guarantee",
    "pricing.allIncluded": "Everything included in both plans",
    "pricing.allIncludedDesc": "No restrictions, no premium modules, no surprises",
    "pricing.faq": "Frequently Asked Questions",
    "pricing.guarantee": "30-Day Guarantee",
    "pricing.guaranteeDesc": "If you are not completely satisfied with GO Admin in the first 30 days, we will refund 100% of your money. No questions, no hassle.",
    "pricing.try14": "Try 14 Days Free",
    "pricing.talkSales": "Talk to Sales",
    "pricing.trustText": "Over 500 companies trust GO Admin",
    "pricing.faq1q": "Are there hidden costs or premium modules?",
    "pricing.faq1a": "No. The price includes full access to all modules, integrations, and features. No surprises.",
    "pricing.faq2q": "Can I switch from monthly to annual?",
    "pricing.faq2a": "Yes, you can switch at any time. When switching to annual, the discount will be applied proportionally.",
    "pricing.faq3q": "What does technical support include?",
    "pricing.faq3a": "Live chat, email support, complete knowledge base, and personalized onboarding.",
    "pricing.faq4q": "Is there a transaction or storage limit?",
    "pricing.faq4a": "There are no limits on transactions, products, customers, or storage. Use it without restrictions.",

    // All included features
    "pricing.feat1": "All 15 Modules",
    "pricing.feat1d": "POS, Inventory, PMS, CRM, HRM, Finance and more",
    "pricing.feat2": "Unlimited Branches",
    "pricing.feat2d": "Manage all your locations from one place",
    "pricing.feat3": "Unlimited Users",
    "pricing.feat3d": "Add your entire team at no additional cost",
    "pricing.feat4": "Advanced Reports",
    "pricing.feat4d": "Customizable dashboards and real-time metrics",
    "pricing.feat5": "Enterprise Security",
    "pricing.feat5d": "MFA authentication, granular roles, full audit",
    "pricing.feat6": "Premium Integrations",
    "pricing.feat6d": "Stripe, MercadoPago, QuickBooks, Shopify and more",
    "pricing.feat7": "Mobile Apps",
    "pricing.feat7d": "iOS and Android for on-the-go management",
    "pricing.feat8": "Automatic Backup",
    "pricing.feat8d": "Daily automatic cloud backups",
    "pricing.feat9": "Technical Support",
    "pricing.feat9d": "Live chat, email, and knowledge base",

    // Module layout
    "module.badge": "Specialized Module",
    "module.try": "Try",
    "module.liveDemo": "Watch Live Demo",
    "module.prev": "Previous:",
    "module.next": "Next:",
    "module.readyTitle": "Ready to implement",
    "module.readyDesc1": "Join thousands of companies already using",
    "module.readyDesc2": "to optimize their daily operations.",
    "module.startTrial": "Start Free Trial",

    // Industry layout
    "industry.badge": "Specialized Solution",
    "industry.try": "Try for",
    "industry.liveDemo": "Watch Specialized Demo",
    "industry.readyTitle": "Ready to optimize your",
    "industry.readyDesc1": "Join hundreds of",
    "industry.readyDesc2": "already trusting GO Admin to manage their operations.",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es")

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("go-admin-lang") : null
    if (saved === "en" || saved === "es") {
      setLangState(saved)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    if (typeof window !== "undefined") {
      localStorage.setItem("go-admin-lang", newLang)
    }
  }

  const t = (key: string): string => {
    return translations[lang][key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
