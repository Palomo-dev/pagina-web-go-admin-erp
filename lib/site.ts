/**
 * Estructura del sitio GO Admin: URLs, navegación, planes y datos de contacto.
 *
 * Los TEXTOS no viven aquí: están en messages/{es,en,pt,fr}.json (next-intl, igual que el ERP)
 * y en content/ para los catálogos largos. Aquí solo quedan claves, rutas, íconos y números.
 *
 * Voz de marca (Manual v2.0 › 10): tuteo, voz activa, verbos simples, sin emojis,
 * sin cifras de resultados sin fuente verificable.
 */

export const APP_URL = 'https://app.goadmin.io'
export const SIGNUP_URL = `${APP_URL}/auth/signup`
export const LOGIN_URL = `${APP_URL}/auth/login`

// Portal de aliados y vendedores (repositorio go-admin-sellers)
export const SELLERS_URL = 'https://sellers.goadmin.io'
export const SELLERS_SIGNUP_URL = `${SELLERS_URL}/register`

/**
 * Construye la URL de registro con parámetros de plan y ciclo de facturación.
 * Conserva parámetros UTM y de atribución existentes si se pasan en la base.
 *
 * @param options - Opciones de plan y ciclo de facturación
 * @returns URL de registro con parámetros agregados
 *
 * @example
 * buildSignupUrl({ plan: 'business', cycle: 'yearly' })
 * // => 'https://app.goadmin.io/auth/signup?plan=business&cycle=yearly'
 */
export function buildSignupUrl(options?: { plan?: 'pro' | 'business' | 'ultimate'; cycle?: 'monthly' | 'yearly' }): string {
  if (!options?.plan && !options?.cycle) return SIGNUP_URL
  const params = new URLSearchParams()
  if (options.plan) params.set('plan', options.plan)
  if (options.cycle) params.set('cycle', options.cycle)
  return `${SIGNUP_URL}?${params.toString()}`
}

// Portal de inversionistas (solo por invitación)
export const INVESTORS_URL = 'https://investors.goadmin.io'

// Canales de contacto (tomados de /eliminacion-datos). El horario está en messages › contact.hours.
export const CONTACT = {
  email: 'Servicio@goadmin.io',
  phoneDisplay: '+57 311 319 5711',
  phoneHref: 'tel:+573113195711',
  whatsappUrl: 'https://wa.me/573113195711',
  legalName: 'GO Admin S.A.S.',
  nit: '901.479.683-5',
  city: 'Medellín, Colombia',
  domain: 'goadmin.io',
}

export type IconName =
  | 'cart' | 'package' | 'receipt' | 'calculator' | 'users' | 'user-check' | 'chart' | 'bot'
  | 'bed' | 'utensils' | 'store' | 'dumbbell' | 'parking' | 'bus' | 'briefcase' | 'bell'
  | 'calendar' | 'plug' | 'shield' | 'lock' | 'building' | 'layout' | 'message' | 'book'
  | 'heart-handshake' | 'graduation' | 'mail' | 'database' | 'map-pin' | 'trending' | 'sparkles'
  | 'rocket' | 'key' | 'workflow' | 'file-check' | 'qr' | 'wallet' | 'history'
  | 'boxes' | 'truck' | 'file-text' | 'landmark' | 'zap' | 'globe' | 'search' | 'credit-card' | 'star' | 'wine' | 'palette' | 'link' | 'scissors' | 'ticket'
  | 'download' | 'monitor' | 'monitor-smartphone' | 'printer' | 'refresh' | 'wifi-off'

// ---------------------------------------------------------------------------
// Navegación (etiquetas en messages › nav)
// ---------------------------------------------------------------------------
export type NavKey = 'product' | 'solutions' | 'pricing' | 'support' | 'resources'
export type NavItem = { key: NavKey; href: string; menu?: 'producto' | 'soluciones' | 'recursos' }

export const NAV: NavItem[] = [
  { key: 'product', href: '/producto', menu: 'producto' },
  { key: 'solutions', href: '/soluciones', menu: 'soluciones' },
  { key: 'pricing', href: '/precios' },
  { key: 'support', href: '/soporte' },
  { key: 'resources', href: '/blog', menu: 'recursos' },
]

/** Recursos (messages › nav.resourceItems.<key>.label | description) */
export const RESOURCES: { key: string; href: string; icon: IconName }[] = [
  { key: 'help', href: '/soporte', icon: 'heart-handshake' },
  { key: 'training', href: '/capacitaciones', icon: 'graduation' },
  { key: 'blog', href: '/blog', icon: 'book' },
  { key: 'changelog', href: '/novedades', icon: 'sparkles' },
  { key: 'download', href: '/descargas', icon: 'download' },
  { key: 'customers', href: '/clientes', icon: 'star' },
  { key: 'partners', href: '/aliados', icon: 'heart-handshake' },
  { key: 'integrations', href: '/integraciones', icon: 'plug' },
  { key: 'api', href: '/api', icon: 'workflow' },
  { key: 'security', href: '/seguridad', icon: 'shield' },
  { key: 'about', href: '/acerca-de', icon: 'building' },
  { key: 'careers', href: '/carreras', icon: 'rocket' },
]

// ---------------------------------------------------------------------------
// Recorrido de módulos · "planetas" (textos en messages › home.journey.modules.<slug>)
// ---------------------------------------------------------------------------
export type Module = { slug: string; href: string; icon: IconName }

export const JOURNEY: Module[] = [
  { slug: 'pos', href: '/producto/ventas-pos', icon: 'cart' },
  { slug: 'inventario', href: '/producto/inventario', icon: 'package' },
  { slug: 'finanzas', href: '/producto/facturacion-electronica', icon: 'receipt' },
  { slug: 'crm', href: '/producto/clientes-crm', icon: 'users' },
  { slug: 'hrm', href: '/producto/nomina', icon: 'user-check' },
  { slug: 'pms', href: '/producto/hoteleria', icon: 'bed' },
  { slug: 'reportes', href: '/producto/reportes', icon: 'chart' },
  { slug: 'ia', href: '/producto/inteligencia-artificial', icon: 'bot' },
]

// ---------------------------------------------------------------------------
// Integraciones del inicio: la primera fila sale de los medios de pago del país (i18n/markets.ts)
// ---------------------------------------------------------------------------
export const INTEGRATIONS_ROW_2 = ['WhatsApp Business', 'Booking.com', 'Airbnb', 'Expedia', 'Uber Eats', 'Meta', 'Google', 'Twilio', 'Stripe', 'PayPal']

/** Sellos de confianza (messages › home.integrations.trust.<key>) */
export const TRUST: { key: string; icon: IconName }[] = [
  { key: 'invoicing', icon: 'receipt' },
  { key: 'backups', icon: 'database' },
  { key: 'roles', icon: 'lock' },
  { key: 'madeIn', icon: 'map-pin' },
]

// ---------------------------------------------------------------------------
// Planes (price_cop_* de la tabla `plans` del ERP para Colombia; USD definidos por GO Admin para los demás países,
// anual = 10 meses, «2 meses gratis». La tabla `plans` aún tiene USD 20/49/199: actualizarla desde admin.goadmin.io)
// Textos en messages › pricing.plans.<id>. Confirmar con comercial si los precios incluyen impuestos.
// ---------------------------------------------------------------------------
/** Módulos del ERP (todos incluidos en Ultimate). Actualizar al lanzar un módulo nuevo. */
export const MODULE_COUNT = 19

export type Plan = {
  id: 'pro' | 'business' | 'ultimate'
  name: string
  prices: { COP: { monthly: number; annual: number }; USD: { monthly: number; annual: number } }
  trialDays: number
  recommended?: boolean
  /** Cantidad de viñetas en messages › pricing.plans.<id>.features */
  featureCount: number
}

export const PLANS: Plan[] = [
  { id: 'pro', name: 'Pro', prices: { COP: { monthly: 99000, annual: 990000 }, USD: { monthly: 30, annual: 300 } }, trialDays: 15, featureCount: 5 },
  { id: 'business', name: 'Business', prices: { COP: { monthly: 189000, annual: 1890000 }, USD: { monthly: 60, annual: 600 } }, trialDays: 30, recommended: true, featureCount: 5 },
  { id: 'ultimate', name: 'Ultimate', prices: { COP: { monthly: 990000, annual: 9990000 }, USD: { monthly: 300, annual: 3000 } }, trialDays: 30, featureCount: 6 },
]

/** Filas de la tabla comparativa (messages › pricing.compare.rows.<key>) y valores por plan. */
export const PLAN_COMPARISON: { key: string; values: [string, string, string] }[] = [
  { key: 'modules', values: ['12', '16', 'all'] },
  { key: 'branches', values: ['1', '5', '15'] },
  { key: 'users', values: ['10', '20', '60'] },
  { key: 'invoices', values: ['1000', '3000', 'unlimited'] },
  { key: 'aiCredits', values: ['500', '2000', '10000'] },
  { key: 'trialDays', values: ['15', '30', '30'] },
  { key: 'aiReports', values: ['yes', 'yes', 'yes'] },
  { key: 'integrations', values: ['yes', 'yes', 'yes'] },
  { key: 'qr', values: ['no', 'yes', 'yes'] },
  { key: 'payFromErp', values: ['no', 'yes', 'yes'] },
  { key: 'paymentLinks', values: ['no', 'no', 'yes'] },
  { key: 'batchPayroll', values: ['no', 'no', 'yes'] },
  { key: 'reconciliation', values: ['no', 'no', 'yes'] },
  { key: 'support', values: ['standard', 'standard', 'dedicated'] },
]

export const ADDONS: { key: string; icon: IconName }[] = [
  { key: 'users', icon: 'users' },
  { key: 'branches', icon: 'building' },
  { key: 'ai', icon: 'sparkles' },
  { key: 'invoices', icon: 'receipt' },
]

/**
 * Precio con el formato del mercado. Colombia sigue el manual ($ 1.250.000);
 * USD usa el formato del idioma del visitante (US$ 30, 30 US$…).
 */
export function formatPrice(value: number, currency: 'COP' | 'USD', locale: string) {
  return new Intl.NumberFormat(currency === 'COP' ? 'es-CO' : locale, {
    style: 'currency',
    currency,
    currencyDisplay: currency === 'COP' ? 'narrowSymbol' : 'symbol',
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(/[\u00a0\u202f]/g, ' ')
}

/** Números con el separador de miles del mercado (1.000 / 1,000). */
export function formatNumber(value: number, locale: string) {
  return new Intl.NumberFormat(locale).format(value)
}

// ---------------------------------------------------------------------------
// Programa de aliados (valores predeterminados del portal de vendedores; textos en messages › pages.partners)
// ---------------------------------------------------------------------------
export const PARTNER_TERMS = {
  commissionPct: 10,
  minPayoutUsd: 50,
  cutoffDay: 15,
  processingDays: '3–5',
}

/** Niveles del portal: muestran tu avance según referidos activos y ventas acumuladas (USD). */
export const PARTNER_TIERS: { key: 'bronze' | 'silver' | 'gold' | 'platinum'; referrals: number; salesUsd: number }[] = [
  { key: 'bronze', referrals: 0, salesUsd: 0 },
  { key: 'silver', referrals: 5, salesUsd: 500 },
  { key: 'gold', referrals: 15, salesUsd: 2000 },
  { key: 'platinum', referrals: 30, salesUsd: 5000 },
]

export const PARTNER_PROFILES: { key: string; icon: IconName }[] = [
  { key: 'accountants', icon: 'calculator' },
  { key: 'consultants', icon: 'briefcase' },
  { key: 'agencies', icon: 'palette' },
  { key: 'resellers', icon: 'store' },
]

// ---------------------------------------------------------------------------
// Soporte (textos en messages › support.channels.<key> y support.guides.<key>)
// ---------------------------------------------------------------------------
export const SUPPORT_CHANNELS: { key: string; icon: IconName; href: string }[] = [
  { key: 'whatsapp', icon: 'message', href: CONTACT.whatsappUrl },
  { key: 'help', icon: 'book', href: '/soporte#guias' },
  { key: 'onboarding', icon: 'heart-handshake', href: '/contacto' },
  { key: 'training', icon: 'graduation', href: '/capacitaciones' },
]

export const GUIDES: { key: string; icon: IconName; articles: number }[] = [
  { key: 'start', icon: 'rocket', articles: 3 },
  { key: 'invoicing', icon: 'receipt', articles: 3 },
  { key: 'inventory', icon: 'package', articles: 3 },
  { key: 'pos', icon: 'cart', articles: 3 },
  { key: 'payroll', icon: 'user-check', articles: 3 },
  { key: 'integrations', icon: 'plug', articles: 3 },
]

// ---------------------------------------------------------------------------
// Pie de página (etiquetas en messages › footer). La columna de soluciones sale del catálogo.
// ---------------------------------------------------------------------------
export const FOOTER_COLUMNS: { key: string; links: { key: string; href: string }[] }[] = [
  {
    key: 'product',
    links: [
      { key: 'allModules', href: '/producto' },
      { key: 'pos', href: '/producto/ventas-pos' },
      { key: 'invoicing', href: '/producto/facturacion-electronica' },
      { key: 'accounting', href: '/producto/contabilidad' },
      { key: 'inventory', href: '/producto/inventario' },
      { key: 'payroll', href: '/producto/nomina' },
      { key: 'crm', href: '/producto/clientes-crm' },
      { key: 'reports', href: '/producto/reportes' },
      { key: 'ai', href: '/producto/inteligencia-artificial' },
      { key: 'pricing', href: '/precios' },
    ],
  },
  {
    key: 'channels',
    links: [
      { key: 'website', href: '/producto/sitio-web' },
      { key: 'store', href: '/producto/tienda-en-linea' },
      { key: 'booking', href: '/producto/motor-de-reservas' },
      { key: 'chat', href: '/producto/chat-omnicanal' },
      { key: 'integrations', href: '/integraciones' },
    ],
  },
  { key: 'solutions', links: [] },
  {
    key: 'resources',
    links: [
      { key: 'help', href: '/soporte' },
      { key: 'training', href: '/capacitaciones' },
      { key: 'blog', href: '/blog' },
      { key: 'changelog', href: '/novedades' },
      { key: 'download', href: '/descargas' },
      { key: 'api', href: '/api' },
      { key: 'security', href: '/seguridad' },
      { key: 'contact', href: '/contacto' },
    ],
  },
  {
    key: 'company',
    links: [
      { key: 'about', href: '/acerca-de' },
      { key: 'customers', href: '/clientes' },
      { key: 'partners', href: '/aliados' },
      { key: 'careers', href: '/carreras' },
      { key: 'countries', href: '/paises' },
      { key: 'terms', href: '/terminos' },
      { key: 'privacy', href: '/privacidad' },
      { key: 'privacyNotice', href: '/aviso-privacidad' },
      { key: 'cookies', href: '/cookies' },
      { key: 'deletion', href: '/eliminacion-datos' },
    ],
  },
]
