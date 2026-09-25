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

export const APP_URL = 'https://app.goadmin.io'
export const SIGNUP_URL = `${APP_URL}/auth/signup`
export const LOGIN_URL = `${APP_URL}/auth/login`

// Canales de contacto (tomados de /eliminacion-datos). Confirmar horario con operación.
export const CONTACT = {
  email: 'Servicio@goadmin.io',
  phoneDisplay: '+57 311 319 5711',
  whatsappUrl: 'https://wa.me/573113195711',
  supportHours: 'Lun a sáb · 7:00 a. m. – 8:00 p. m.',
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

// ---------------------------------------------------------------------------
// Navegación
// ---------------------------------------------------------------------------
export type NavItem = { label: string; href: string; menu?: 'producto' | 'soluciones' | 'recursos' }

export const NAV: NavItem[] = [
  { label: 'Producto', href: '/modulos', menu: 'producto' },
  { label: 'Soluciones', href: '/industrias', menu: 'soluciones' },
  { label: 'Precios', href: '/precios' },
  { label: 'Soporte', href: '/soporte' },
  { label: 'Recursos', href: '/blog', menu: 'recursos' },
]

export const RESOURCES = [
  { label: 'Blog', description: 'Ideas para ordenar tu negocio.', href: '/blog', icon: 'book' as IconName },
  { label: 'Centro de ayuda', description: 'Guías paso a paso y videos cortos.', href: '/soporte', icon: 'heart-handshake' as IconName },
  { label: 'API para desarrolladores', description: 'Conecta tus sistemas con GO Admin.', href: '/api', icon: 'plug' as IconName },
  { label: 'Acerca de GO Admin', description: 'Quiénes somos y cómo trabajamos.', href: '/acerca-de', icon: 'building' as IconName },
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
    slug: 'pos', href: '/modulos/pos', name: 'Ventas y punto de venta', short: 'Vende en tienda, mesa o en línea.',
    planet: 'Vender', headline: 'Cobra sin filas y sin cuadernos.',
    description: 'Cobra en mostrador, mesa o en línea. Cada venta descuenta inventario y queda lista para facturar.',
    points: ['Caja con arqueo y cierre diario', 'Pagos en efectivo, tarjeta y QR', 'Venta por mesas y comandas'], icon: 'cart',
  },
  {
    slug: 'inventario', href: '/modulos/inventario', name: 'Inventario', short: 'Stock por bodega y sucursal.',
    planet: 'Guardar', headline: 'Sabe qué tienes y dónde.',
    description: 'Existencias por bodega y sucursal, lotes, costos y traslados sin hojas de cálculo.',
    points: ['Alertas de stock bajo', 'Kardex y costo promedio', 'Traslados entre sedes'], icon: 'package',
  },
  {
    slug: 'finanzas', href: '/modulos/finanzas', name: 'Facturación y finanzas', short: 'Facturas DIAN, cartera y bancos.',
    planet: 'Facturar', headline: 'Factura y cuadra cuentas en el mismo lugar.',
    description: 'Facturas electrónicas validadas por la DIAN, cartera, bancos y contabilidad al día.',
    points: ['Factura y nota crédito DIAN', 'Cuentas por cobrar y pagar', 'Asientos automáticos'], icon: 'receipt',
  },
  {
    slug: 'crm', href: '/modulos/crm', name: 'Clientes (CRM)', short: 'Historial, seguimientos y campañas.',
    planet: 'Cuidar', headline: 'Recuerda a cada cliente.',
    description: 'Historial de compras, seguimientos, oportunidades y campañas por WhatsApp o correo.',
    points: ['Ficha 360° del cliente', 'Seguimientos con recordatorio', 'Campañas segmentadas'], icon: 'users',
  },
  {
    slug: 'hrm', href: '/modulos/hrm', name: 'Nómina y equipo', short: 'Empleados, turnos y nómina.',
    planet: 'Acompañar', headline: 'Tu equipo, en orden.',
    description: 'Contratos, turnos, asistencia, vacaciones y nómina electrónica sin volver a digitar.',
    points: ['Nómina electrónica', 'Turnos y asistencia', 'Vacaciones y novedades'], icon: 'user-check',
  },
  {
    slug: 'pms', href: '/modulos/pms', name: 'Hotelería (PMS)', short: 'Reservas, check-in y folios.',
    planet: 'Hospedar', headline: 'Reservas y habitaciones sin cruces.',
    description: 'Calendario de reservas, check-in y check-out, folios y conexión con canales como Booking.',
    points: ['Calendario de ocupación', 'Folios por huésped', 'Canales de reserva'], icon: 'bed',
  },
  {
    slug: 'reportes', href: '/modulos/reportes', name: 'Reportes', short: 'Tableros listos para decidir.',
    planet: 'Entender', headline: '¿Vendiste más o ganaste más?',
    description: 'Tableros de ventas, márgenes, cartera e inventario listos desde el primer día.',
    points: ['Tableros por sede', 'Comparativos por periodo', 'Exporta a Excel y PDF'], icon: 'chart',
  },
  {
    slug: 'ia', href: '/#ia', name: 'GO Admin IA', short: 'Pregúntale a tu negocio.',
    planet: 'Preguntar', headline: 'Pregúntale a tu negocio.',
    description: 'Escribe como le hablarías a tu contador y recibe cifras, gráficos y reportes al instante.',
    points: ['Asistente contable', 'Reportes a partir de una pregunta', 'Imágenes para tus productos'], icon: 'bot',
  },
]

// Todos los módulos con página (/modulos/[slug]) para menús y enlaces
export const MODULES_MENU: { name: string; description: string; href: string; icon: IconName }[] = [
  { name: 'Ventas y POS', description: 'Vende en tienda, mesa o en línea.', href: '/modulos/pos', icon: 'cart' },
  { name: 'Inventario', description: 'Stock por bodega y sucursal.', href: '/modulos/inventario', icon: 'package' },
  { name: 'Facturación y finanzas', description: 'Facturas DIAN, cartera y bancos.', href: '/modulos/finanzas', icon: 'receipt' },
  { name: 'Clientes (CRM)', description: 'Historial, seguimientos y campañas.', href: '/modulos/crm', icon: 'users' },
  { name: 'Nómina y equipo', description: 'Empleados, turnos y nómina.', href: '/modulos/hrm', icon: 'user-check' },
  { name: 'Hotelería (PMS)', description: 'Reservas, check-in y folios.', href: '/modulos/pms', icon: 'bed' },
  { name: 'Reportes', description: 'Tableros listos para decidir.', href: '/modulos/reportes', icon: 'chart' },
  { name: 'Integraciones', description: 'Pagos, canales y mensajería.', href: '/integraciones', icon: 'plug' },
]

// ---------------------------------------------------------------------------
// Industrias
// ---------------------------------------------------------------------------
export const INDUSTRIES: { name: string; description: string; href: string; icon: IconName }[] = [
  { name: 'Restaurantes', description: 'Mesas, comandas, cocina y caja en sintonía.', href: '/industrias/restaurante', icon: 'utensils' },
  { name: 'Hoteles', description: 'Reservas, check-in, folios y canales como Booking.', href: '/industrias/hotel', icon: 'bed' },
  { name: 'Tiendas', description: 'Punto de venta, inventario multisede y e-commerce.', href: '/industrias/tienda', icon: 'store' },
  { name: 'Gimnasios', description: 'Membresías, accesos, clases y cobros recurrentes.', href: '/industrias/gimnasio', icon: 'dumbbell' },
  { name: 'Parqueaderos', description: 'Entradas, tarifas por tiempo y cierre por turno.', href: '/industrias/parqueadero', icon: 'parking' },
  { name: 'Transporte', description: 'Rutas, tiquetes, flota y mantenimiento.', href: '/industrias/transporte', icon: 'bus' },
  { name: 'Servicios y SaaS', description: 'Agenda, órdenes de servicio y cobros recurrentes.', href: '/industrias/saas', icon: 'briefcase' },
]

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
  { title: 'Capacitaciones en vivo', text: 'Sesiones para tu equipo de caja, bodega y contabilidad.', meta: 'Cada semana', icon: 'graduation', cta: 'Ver calendario', href: '/soporte#capacitaciones' },
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
      { label: 'Módulos', href: '/modulos' },
      { label: 'GO Admin IA', href: '/#ia' },
      { label: 'Integraciones', href: '/integraciones' },
      { label: 'Precios', href: '/precios' },
      { label: 'API', href: '/api' },
    ],
  },
  {
    title: 'Soluciones',
    links: INDUSTRIES.slice(0, 6).map((i) => ({ label: i.name, href: i.href })),
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Centro de ayuda', href: '/soporte' },
      { label: 'WhatsApp', href: CONTACT.whatsappUrl },
      { label: 'Capacitaciones', href: '/soporte#capacitaciones' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Acerca de', href: '/acerca-de' },
      { label: 'Blog', href: '/blog' },
      { label: 'Carreras', href: '/carreras' },
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Eliminación de datos', href: '/eliminacion-datos' },
    ],
  },
]
