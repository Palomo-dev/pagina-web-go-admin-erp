/**
 * Contenido del sitio GO Admin.
 *
 * Fuente única para textos de navegación, módulos, industrias, planes, soporte y FAQ.
 * Voz de marca (Manual v2.0 › 10): tuteo, voz activa, verbos simples, sin emojis,
 * sin cifras de resultados sin fuente verificable.
 *
 * Antes de publicar cambios comerciales (precios, horarios, canales), verifícalos con
 * el equipo: el manual define cómo comunicar, no reemplaza el catálogo vigente.
 */

import { PRODUCTS } from '@/lib/catalog/products'
import { SOLUTIONS } from '@/lib/catalog/solutions'

export const APP_URL = 'https://app.goadmin.io'
export const SIGNUP_URL = `${APP_URL}/auth/signup`
export const LOGIN_URL = `${APP_URL}/auth/login`

// Canales de contacto y horario (tomados de /eliminacion-datos).
export const CONTACT = {
  email: 'Servicio@goadmin.io',
  phoneDisplay: '+57 311 319 5711',
  whatsappUrl: 'https://wa.me/573113195711',
  supportHours: 'Lun a vie · 8:00 a. m. – 6:00 p. m.',
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

// ---------------------------------------------------------------------------
// Navegación
// ---------------------------------------------------------------------------
export type NavItem = { label: string; href: string; menu?: 'producto' | 'soluciones' | 'recursos' }

export const NAV: NavItem[] = [
  { label: 'Producto', href: '/producto', menu: 'producto' },
  { label: 'Soluciones', href: '/soluciones', menu: 'soluciones' },
  { label: 'Precios', href: '/precios' },
  { label: 'Soporte', href: '/soporte' },
  { label: 'Recursos', href: '/blog', menu: 'recursos' },
]

export const RESOURCES: { label: string; description: string; href: string; icon: IconName }[] = [
  { label: 'Centro de ayuda', description: 'Guías, canales y horarios de soporte.', href: '/soporte', icon: 'heart-handshake' },
  { label: 'Capacitaciones', description: 'Sesiones en vivo y rutas por rol.', href: '/capacitaciones', icon: 'graduation' },
  { label: 'Blog', description: 'Ideas para ordenar tu negocio.', href: '/blog', icon: 'book' },
  { label: 'Integraciones', description: 'Pagos, reservas, domicilios y mensajería.', href: '/integraciones', icon: 'plug' },
  { label: 'API para desarrolladores', description: 'Conecta tus sistemas con GO Admin.', href: '/api', icon: 'workflow' },
  { label: 'Seguridad', description: 'Cómo protegemos tu información.', href: '/seguridad', icon: 'shield' },
  { label: 'Acerca de GO Admin', description: 'Quiénes somos y cómo trabajamos.', href: '/acerca-de', icon: 'building' },
  { label: 'Carreras', description: 'Construye con nosotros desde Medellín.', href: '/carreras', icon: 'rocket' },
]

// ---------------------------------------------------------------------------
// Módulos · "planetas" del recorrido
// ---------------------------------------------------------------------------
export type Module = {
  slug: string
  href: string
  name: string
  short: string
  planet: string
  headline: string
  description: string
  points: [string, string, string]
  icon: IconName
}

export const JOURNEY: Module[] = [
  {
    slug: 'pos', href: '/producto/ventas-pos', name: 'Ventas y punto de venta', short: 'Vende en tienda, mesa o en línea.',
    planet: 'Vender', headline: 'Cobra sin filas y sin cuadernos.',
    description: 'Cobra en mostrador, mesa o en línea. Cada venta descuenta inventario y queda lista para facturar.',
    points: ['Caja con arqueo y cierre diario', 'Pagos en efectivo, tarjeta y QR', 'Venta por mesas y comandas'], icon: 'cart',
  },
  {
    slug: 'inventario', href: '/producto/inventario', name: 'Inventario', short: 'Stock por bodega y sucursal.',
    planet: 'Guardar', headline: 'Sabe qué tienes y dónde.',
    description: 'Existencias por bodega y sucursal, lotes, costos y traslados sin hojas de cálculo.',
    points: ['Alertas de stock bajo', 'Kardex y costo promedio', 'Traslados entre sedes'], icon: 'package',
  },
  {
    slug: 'finanzas', href: '/producto/facturacion-electronica', name: 'Facturación y finanzas', short: 'Facturas DIAN, cartera y bancos.',
    planet: 'Facturar', headline: 'Factura y cuadra cuentas en el mismo lugar.',
    description: 'Facturas electrónicas validadas por la DIAN, cartera, bancos y contabilidad al día.',
    points: ['Factura y nota crédito DIAN', 'Cuentas por cobrar y pagar', 'Asientos automáticos'], icon: 'receipt',
  },
  {
    slug: 'crm', href: '/producto/clientes-crm', name: 'Clientes (CRM)', short: 'Historial, seguimientos y campañas.',
    planet: 'Cuidar', headline: 'Recuerda a cada cliente.',
    description: 'Historial de compras, seguimientos, oportunidades y campañas por WhatsApp o correo.',
    points: ['Ficha 360° del cliente', 'Seguimientos con recordatorio', 'Campañas segmentadas'], icon: 'users',
  },
  {
    slug: 'hrm', href: '/producto/nomina', name: 'Nómina y equipo', short: 'Empleados, turnos y nómina.',
    planet: 'Acompañar', headline: 'Tu equipo, en orden.',
    description: 'Contratos, turnos, asistencia, vacaciones y nómina electrónica sin volver a digitar.',
    points: ['Nómina electrónica', 'Turnos y asistencia', 'Vacaciones y novedades'], icon: 'user-check',
  },
  {
    slug: 'pms', href: '/producto/hoteleria', name: 'Hotelería (PMS)', short: 'Reservas, check-in y folios.',
    planet: 'Hospedar', headline: 'Reservas y habitaciones sin cruces.',
    description: 'Calendario de reservas, check-in y check-out, folios y conexión con canales como Booking.',
    points: ['Calendario de ocupación', 'Folios por huésped', 'Canales de reserva'], icon: 'bed',
  },
  {
    slug: 'reportes', href: '/producto/reportes', name: 'Reportes', short: 'Tableros listos para decidir.',
    planet: 'Entender', headline: '¿Vendiste más o ganaste más?',
    description: 'Tableros de ventas, márgenes, cartera e inventario listos desde el primer día.',
    points: ['Tableros por sede', 'Comparativos por periodo', 'Exporta a Excel y PDF'], icon: 'chart',
  },
  {
    slug: 'ia', href: '/producto/inteligencia-artificial', name: 'GO Admin IA', short: 'Pregúntale a tu negocio.',
    planet: 'Preguntar', headline: 'Pregúntale a tu negocio.',
    description: 'Escribe como le hablarías a tu contador y recibe cifras, gráficos y reportes al instante.',
    points: ['Asistente contable', 'Reportes a partir de una pregunta', 'Imágenes para tus productos'], icon: 'bot',
  },
]

// Productos para menús (derivado del catálogo)
export const MODULES_MENU: { name: string; description: string; href: string; icon: IconName }[] = PRODUCTS.map((p) => ({
  name: p.name,
  description: p.short,
  href: `/producto/${p.slug}`,
  icon: p.icon,
}))

// ---------------------------------------------------------------------------
// Industrias
// ---------------------------------------------------------------------------
export const INDUSTRIES: { name: string; description: string; examples: string[]; href: string; icon: IconName }[] = SOLUTIONS.map((s) => ({
  name: s.name,
  description: s.short,
  examples: s.types,
  href: `/soluciones/${s.slug}`,
  icon: s.icon,
}))

// ---------------------------------------------------------------------------
// Integraciones (nombres; reemplazar por logos oficiales cuando haya autorización)
// ---------------------------------------------------------------------------
export const INTEGRATIONS_ROW_1 = ['Bancolombia', 'Bre-B', 'Wompi', 'PayU', 'Mercado Pago', 'Stripe', 'PayPal', 'Redeban', 'Nequi', 'DIAN']
export const INTEGRATIONS_ROW_2 = ['WhatsApp Business', 'Booking.com', 'Airbnb', 'Expedia', 'Rappi', 'Uber Eats', 'iFood', 'Meta', 'Google', 'Twilio']

export const TRUST: { label: string; icon: IconName }[] = [
  { label: 'Facturación electrónica DIAN', icon: 'receipt' },
  { label: 'Datos cifrados y respaldos diarios', icon: 'database' },
  { label: 'Roles y permisos por usuario', icon: 'lock' },
  { label: 'Hecho en Medellín, Colombia', icon: 'map-pin' },
]

// ---------------------------------------------------------------------------
// Planes (precios en COP — confirmar con comercial si incluyen IVA)
// ---------------------------------------------------------------------------
export type Plan = {
  id: 'pro' | 'business' | 'ultimate'
  name: string
  forWho: string
  monthly: number
  annual: number
  trialDays: number
  recommended?: boolean
  features: string[]
}

export const PLANS: Plan[] = [
  {
    id: 'pro', name: 'Pro', forWho: 'Para empezar a ordenar', monthly: 99000, annual: 990000, trialDays: 15,
    features: ['12 módulos', '1 sucursal · 10 usuarios', '1.000 facturas electrónicas al mes', '500 créditos de IA al mes', 'Reportes y asistente contable con IA'],
  },
  {
    id: 'business', name: 'Business', forWho: 'Para negocios que crecen', monthly: 189000, annual: 1890000, trialDays: 30, recommended: true,
    features: ['16 módulos', '5 sucursales · 20 usuarios', '3.000 facturas electrónicas al mes', '2.000 créditos de IA al mes', 'Cobros por QR y pagos inmediatos'],
  },
  {
    id: 'ultimate', name: 'Ultimate', forWho: 'Para operaciones con varias sedes', monthly: 990000, annual: 9900000, trialDays: 30,
    features: ['18 módulos (todos)', '15 sucursales · 60 usuarios', 'Facturas electrónicas ilimitadas', '10.000 créditos de IA al mes', 'PSE, nómina por lote y conciliación', 'Soporte dedicado'],
  },
]

export const PLAN_COMPARISON: { label: string; values: [string, string, string] }[] = [
  { label: 'Módulos', values: ['12', '16', '18 (todos)'] },
  { label: 'Sucursales', values: ['1', '5', '15'] },
  { label: 'Usuarios', values: ['10', '20', '60'] },
  { label: 'Facturas electrónicas al mes', values: ['1.000', '3.000', 'Ilimitadas'] },
  { label: 'Créditos de IA al mes', values: ['500', '2.000', '10.000'] },
  { label: 'Días de prueba', values: ['15', '30', '30'] },
  { label: 'Reportes y asistente contable con IA', values: ['yes', 'yes', 'yes'] },
  { label: 'Integraciones externas', values: ['yes', 'yes', 'yes'] },
  { label: 'Cobros por QR y pagos inmediatos', values: ['no', 'yes', 'yes'] },
  { label: 'Paga y cobra desde el ERP', values: ['no', 'yes', 'yes'] },
  { label: 'Cobros por PSE y enlaces de pago por WhatsApp', values: ['no', 'no', 'yes'] },
  { label: 'Nómina por lote y anticipos a empleados', values: ['no', 'no', 'yes'] },
  { label: 'Conciliación bancaria automática', values: ['no', 'no', 'yes'] },
  { label: 'Soporte', values: ['WhatsApp y correo', 'WhatsApp y correo', 'Dedicado'] },
]

export const ADDONS: { label: string; icon: IconName }[] = [
  { label: 'Usuarios adicionales', icon: 'users' },
  { label: 'Sucursales adicionales', icon: 'building' },
  { label: 'Créditos de IA adicionales', icon: 'sparkles' },
  { label: 'Facturas adicionales', icon: 'receipt' },
]

/** Pesos colombianos con el formato del manual: $ 1.250.000 */
export function formatCOP(value: number) {
  return '$ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

// ---------------------------------------------------------------------------
// Soporte
// ---------------------------------------------------------------------------
export const SUPPORT_CHANNELS: { title: string; text: string; meta: string; icon: IconName; cta: string; href: string }[] = [
  { title: 'WhatsApp de soporte', text: 'Escríbenos y una persona del equipo te responde con tu caso a la mano.', meta: CONTACT.supportHours, icon: 'message', cta: 'Abrir WhatsApp', href: CONTACT.whatsappUrl },
  { title: 'Centro de ayuda', text: 'Guías paso a paso, videos cortos y respuestas a las dudas más comunes.', meta: 'Disponible siempre', icon: 'book', cta: 'Ir al centro de ayuda', href: '/soporte#guias' },
  { title: 'Implementación acompañada', text: 'Configuramos contigo empresa, sedes, productos y facturación electrónica.', meta: 'Incluida en todos los planes', icon: 'heart-handshake', cta: 'Agendar implementación', href: '/contacto' },
  { title: 'Capacitaciones en vivo', text: 'Sesiones para tu equipo de caja, bodega y contabilidad.', meta: 'Cada semana', icon: 'graduation', cta: 'Ver capacitaciones', href: '/capacitaciones' },
]

export const GUIDES: { title: string; icon: IconName; articles: string[] }[] = [
  { title: 'Primeros pasos', icon: 'rocket', articles: ['Crea tu empresa y tus sedes', 'Invita a tu equipo', 'Configura impuestos'] },
  { title: 'Facturación electrónica', icon: 'receipt', articles: ['Habilítate ante la DIAN', 'Emite tu primera factura', 'Notas crédito y débito'] },
  { title: 'Inventario', icon: 'package', articles: ['Importa productos desde Excel', 'Traslados entre bodegas', 'Ajustes de inventario'] },
  { title: 'Punto de venta', icon: 'cart', articles: ['Abre y cierra caja', 'Ventas por mesa', 'Medios de pago'] },
  { title: 'Nómina y equipo', icon: 'user-check', articles: ['Registra empleados', 'Liquida la nómina', 'Nómina electrónica'] },
  { title: 'Integraciones', icon: 'plug', articles: ['Conecta tu pasarela de pagos', 'Booking y canales de reserva', 'WhatsApp Business'] },
]

// ---------------------------------------------------------------------------
// Preguntas frecuentes
// ---------------------------------------------------------------------------
export const FAQ_HOME: { q: string; a: string }[] = [
  { q: '¿Necesito instalar algo para usar GO Admin?', a: 'No. GO Admin funciona en el navegador de tu computador, tableta o celular. Solo necesitas conexión a internet y tu usuario.' },
  { q: '¿La facturación electrónica está incluida?', a: 'Sí. Todos los planes incluyen facturación electrónica ante la DIAN. El certificado digital de firma se adquiere aparte si aún no lo tienes.' },
  { q: '¿Puedo migrar la información que ya tengo?', a: 'Sí. Importas productos, clientes y saldos desde Excel y te acompañamos en la primera carga.' },
  { q: '¿Qué pasa cuando termina la prueba gratis?', a: 'Eliges un plan para seguir. Si decides no continuar, puedes descargar tu información antes de cerrar la cuenta.' },
  { q: '¿Puedo cambiar de plan más adelante?', a: 'Sí, subes o bajas de plan cuando lo necesites y el cobro se ajusta de forma proporcional.' },
  { q: '¿Mis datos están seguros?', a: 'Tus datos viajan cifrados, se respaldan todos los días y cada usuario ve solo lo que su rol le permite.' },
]

export const FAQ_BILLING: { q: string; a: string }[] = [
  { q: '¿Hay costos ocultos?', a: 'No. Pagas el plan que eliges y, si los necesitas, los complementos que agregues. Todo aparece en tu factura.' },
  { q: '¿Qué medios de pago aceptan?', a: 'Tarjeta de crédito o débito, PSE y transferencia. Recibes factura electrónica de GO Admin en cada cobro.' },
  { q: '¿Puedo cambiar de plan?', a: 'Sí, cuando quieras. El cobro se ajusta de forma proporcional desde el día del cambio.' },
  { q: '¿Qué pasa si cancelo?', a: 'Tu cuenta sigue activa hasta el final del periodo pagado y puedes descargar tu información.' },
]

// ---------------------------------------------------------------------------
// Pie de página
// ---------------------------------------------------------------------------
export const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Producto',
    links: [
      { label: 'Todos los módulos', href: '/producto' },
      { label: 'Ventas y POS', href: '/producto/ventas-pos' },
      { label: 'Facturación electrónica', href: '/producto/facturacion-electronica' },
      { label: 'Contabilidad', href: '/producto/contabilidad' },
      { label: 'Inventario', href: '/producto/inventario' },
      { label: 'Nómina y equipo', href: '/producto/nomina' },
      { label: 'Clientes (CRM)', href: '/producto/clientes-crm' },
      { label: 'Reportes', href: '/producto/reportes' },
      { label: 'GO Admin IA', href: '/producto/inteligencia-artificial' },
      { label: 'Precios', href: '/precios' },
    ],
  },
  {
    title: 'Canales digitales',
    links: [
      { label: 'Página web', href: '/producto/sitio-web' },
      { label: 'Tienda en línea', href: '/producto/tienda-en-linea' },
      { label: 'Motor de reservas', href: '/producto/motor-de-reservas' },
      { label: 'Chat omnicanal', href: '/producto/chat-omnicanal' },
      { label: 'Integraciones', href: '/integraciones' },
    ],
  },
  {
    title: 'Soluciones',
    links: SOLUTIONS.map((s) => ({ label: s.name, href: `/soluciones/${s.slug}` })),
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Centro de ayuda', href: '/soporte' },
      { label: 'Capacitaciones', href: '/capacitaciones' },
      { label: 'Blog', href: '/blog' },
      { label: 'API para desarrolladores', href: '/api' },
      { label: 'Seguridad', href: '/seguridad' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Acerca de', href: '/acerca-de' },
      { label: 'Carreras', href: '/carreras' },
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Eliminación de datos', href: '/eliminacion-datos' },
    ],
  },
]
