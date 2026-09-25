/**
 * Contenido de empresa: acerca de, carreras, capacitaciones y blog (texto base en español).
 *
 * Contenido estático del repositorio; el sitio no se conecta a la base de datos del ERP.
 * Traducciones con la misma forma en content/{en,pt,fr}/company.ts.
 * Las funciones de lib/data/* son la única puerta de entrada.
 */
import type { CountryCode } from '@/i18n/markets'
import type { IconName } from '@/lib/site'

// ---------------------------------------------------------------------------
// Acerca de (Manual v2.0 › 01 Esencia)
// ---------------------------------------------------------------------------
export const ABOUT = {
  mission: 'Reunir las herramientas para organizar la operación de las pequeñas y medianas empresas, para que entender qué pasa en el negocio y poder actuar sea parte del día a día.',
  audience: 'Le hablamos al dueño o administrador que combina atención a clientes, decisiones y tareas operativas. Necesita claridad, información útil y herramientas que acompañen su trabajo.',
  values: [
    { title: 'Directos', text: 'Nombramos el problema y decimos qué puede hacerse.', icon: 'zap' as IconName },
    { title: 'Competentes', text: 'Explicamos con precisión y demostramos lo que afirmamos.', icon: 'shield' as IconName },
    { title: 'Cercanos', text: 'Entendemos la jornada de trabajo y respetamos tu tiempo.', icon: 'heart-handshake' as IconName },
    { title: 'Con carácter', text: 'Una pregunta, una imagen o una idea memorable, sin perder claridad.', icon: 'sparkles' as IconName },
  ],
}

// ---------------------------------------------------------------------------
// Carreras
// ---------------------------------------------------------------------------
export type Position = { id: string; title: string; area: string; location: string; type: string; summary: string }

/** Vacantes abiertas. Vacío = se muestra la invitación a enviar hoja de vida. */
export const POSITIONS: Position[] = []

export const WORK_PRINCIPLES = [
  { title: 'Trabajo que se ve', text: 'Lo que construimos lo usa un negocio real al día siguiente.', icon: 'rocket' as IconName },
  { title: 'Desde Colombia', text: 'Equipo en Medellín con trabajo remoto según el rol.', icon: 'map-pin' as IconName },
  { title: 'Aprender en serio', text: 'Tiempo y acompañamiento para crecer en tu oficio.', icon: 'graduation' as IconName },
  { title: 'Claridad', text: 'Metas, responsables y decisiones por escrito.', icon: 'book' as IconName },
]

export const HIRING_STEPS = [
  { title: 'Aplica', text: 'Envía tu hoja de vida y cuéntanos qué te gustaría construir.' },
  { title: 'Conversemos', text: 'Una llamada para conocernos.' },
  { title: 'Reto corto', text: 'Un ejercicio acotado, relacionado con el rol.' },
  { title: 'Propuesta', text: 'Respuesta clara, sea cual sea.' },
]

// ---------------------------------------------------------------------------
// Capacitaciones
// ---------------------------------------------------------------------------
export const TRAINING_FORMATS = [
  { title: 'Implementación 1:1', text: 'Una persona configura contigo empresa, sedes, productos y facturación.', meta: 'Al empezar', icon: 'heart-handshake' as IconName },
  { title: 'Sesiones en vivo', text: 'Grupos pequeños por tema, con preguntas al final.', meta: 'Cada semana', icon: 'users' as IconName },
  { title: 'Rutas por rol', text: 'Caja, bodega, contabilidad y administración: lo que cada quien necesita.', meta: 'A tu ritmo', icon: 'graduation' as IconName },
  { title: 'Guías paso a paso', text: 'Artículos con capturas y videos cortos en el centro de ayuda.', meta: 'Siempre', icon: 'book' as IconName },
]

export const LEARNING_PATHS: { role: string; icon: IconName; lessons: string[] }[] = [
  { role: 'Caja y ventas', icon: 'cart', lessons: ['Abrir y cerrar caja', 'Vender y cobrar', 'Devoluciones', 'Facturar desde el POS'] },
  { role: 'Bodega', icon: 'package', lessons: ['Crear productos', 'Recibir compras', 'Traslados', 'Conteos y ajustes'] },
  { role: 'Contabilidad', icon: 'calculator', lessons: ['Plan de cuentas', 'Cartera y pagos', 'Conciliación', 'Cierre de mes'] },
  { role: 'Administración', icon: 'building', lessons: ['Sedes y usuarios', 'Roles y permisos', 'Reportes', 'Página web y tienda'] },
]

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------
export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readingMinutes: number
  body: { heading?: string; paragraphs: string[]; list?: string[] }[]
  /** Solo se publica en estos países (p. ej. una guía de un trámite local). Sin valor: todos. */
  countries?: CountryCode[]
}

export const POSTS: Post[] = [
  {
    slug: 'vendiste-mas-o-ganaste-mas',
    title: '¿Vendiste más o ganaste más?',
    excerpt: 'Vender más no siempre significa ganar más. Tres cifras que conviene mirar cada semana.',
    category: 'Finanzas',
    date: '2026-09-15',
    readingMinutes: 4,
    body: [
      { paragraphs: ['Un mes con más ventas puede terminar con menos dinero en caja. Pasa cuando suben los costos, cuando se vende más de lo que deja poco margen o cuando la cartera crece.'] },
      { heading: '1. Margen por producto', paragraphs: ['Mira cuánto deja cada producto después de su costo. Los más vendidos no siempre son los que más aportan.'] },
      { heading: '2. Costo real de lo vendido', paragraphs: ['Con inventario actualizado y costo promedio, el costo de lo vendido deja de ser una estimación.'] },
      { heading: '3. Lo que te deben', paragraphs: ['Una venta a crédito es ingreso en el reporte, pero no en el banco. Revisa la cartera por antigüedad.'] },
      { heading: 'Qué hacer esta semana', paragraphs: [], list: ['Identifica tus cinco productos con más margen.', 'Revisa si alguno se vende con descuentos que lo dejan en pérdida.', 'Llama a los tres clientes con cartera más antigua.'] },
    ],
  },
  {
    slug: 'antes-de-cerrar-caja',
    title: 'Antes de cerrar caja',
    excerpt: 'Una lista corta para que el cierre cuadre y las diferencias tengan explicación.',
    category: 'Operación',
    date: '2026-09-08',
    readingMinutes: 3,
    body: [
      { paragraphs: ['El cierre de caja es el momento en que el día se vuelve cifras. Estas revisiones evitan la mayoría de las diferencias.'] },
      { heading: 'Lista de cierre', paragraphs: [], list: ['Cuenta el efectivo por denominación.', 'Compara los pagos con tarjeta con el reporte del datáfono.', 'Revisa transferencias y pagos por QR recibidos.', 'Registra los gastos pagados desde la caja con su soporte.', 'Anota el motivo de cualquier diferencia.'] },
      { heading: 'Cuando algo no cuadra', paragraphs: ['Una diferencia pequeña y repetida suele venir de devueltas o de pagos mixtos mal registrados. Un sistema que separa los medios de pago en cada venta hace que la diferencia se encuentre en minutos.'] },
    ],
  },
  {
    slug: 'tu-negocio-en-internet',
    title: 'Tu negocio en internet sin contratar una agencia',
    excerpt: 'Página web, tienda en línea y reservas conectadas a lo que ya tienes en el sistema.',
    category: 'Canales digitales',
    date: '2026-09-01',
    readingMinutes: 5,
    body: [
      { paragraphs: ['Muchos negocios tienen redes sociales, pero no un lugar propio donde sus clientes vean productos, precios, horarios y puedan comprar o reservar.'] },
      { heading: 'Qué necesita una página que venda', paragraphs: [], list: ['Información actualizada: precios y disponibilidad reales.', 'Una acción clara: comprar, reservar o escribir.', 'Una dirección fácil de recordar.', 'Carga rápida en el celular.'] },
      { heading: 'Conectada o desactualizada', paragraphs: ['Una página separada del inventario se desactualiza en semanas. Cuando la página sale del mismo catálogo del sistema, cambiar un precio en la caja lo cambia también en internet.'] },
    ],
  },
  {
    slug: 'facturacion-electronica-que-necesitas',
    title: 'Facturación electrónica: qué necesitas para empezar',
    excerpt: 'Los elementos básicos para emitir tu primera factura electrónica en Colombia.',
    category: 'Guías',
    date: '2026-08-25',
    readingMinutes: 4,
    countries: ['COL'],
    body: [
      { paragraphs: ['Emitir factura electrónica requiere algunos pasos previos ante la DIAN y un sistema que genere y envíe los documentos. Esta es una lista orientativa; valida los requisitos vigentes con tu contador.'] },
      { heading: 'Lo básico', paragraphs: [], list: ['RUT actualizado con la responsabilidad correspondiente.', 'Habilitación como facturador electrónico.', 'Resolución de numeración.', 'Certificado de firma digital.'] },
      { heading: 'En el día a día', paragraphs: ['Lo importante es que la factura salga del mismo lugar donde vendes, con los datos del cliente correctos y el estado de validación a la vista.'] },
    ],
  },
]

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug)
}

// ---------------------------------------------------------------------------
// Novedades del producto. Tomadas del historial real de cambios del ERP; se agrupan por mes.
// `countries` limita una novedad a los países donde aplica (p. ej. pagos o {authority} de Colombia).
// ---------------------------------------------------------------------------
export type ReleaseItem = { title: string; text: string; area: string; icon: IconName; countries?: CountryCode[] }
export type Release = { month: string; items: ReleaseItem[] }

export const CHANGELOG: Release[] = [
  {
    month: '2026-09',
    items: [
      { title: 'GO Assistant', text: 'Un asistente dentro de GO Admin que responde preguntas sobre tu negocio y te lleva a la pantalla que necesitas.', area: 'IA', icon: 'bot' },
      { title: 'Pantalla para el cliente en el POS', text: 'Tu cliente ve en una segunda pantalla lo que vas cobrando, el total y el cambio.', area: 'Ventas y POS', icon: 'cart' },
      { title: 'POS de escritorio sin conexión', text: 'La aplicación de escritorio sigue vendiendo si se cae el internet y sincroniza cuando vuelve la conexión.', area: 'Ventas y POS', icon: 'zap' },
      { title: 'Seriales y cierre de caja ciego', text: 'Controla productos por número de serie. En el cierre, el cajero cuenta el efectivo sin ver el valor esperado.', area: 'Inventario', icon: 'boxes' },
      { title: 'Paneles por rol', text: 'Cada persona entra a un inicio con los indicadores de su trabajo: caja, ventas, inventario o administración.', area: 'Reportes', icon: 'chart' },
      { title: 'Llamadas desde GO Admin', text: 'Llama y recibe llamadas desde el navegador y deja el registro en la ficha del cliente.', area: 'Clientes (CRM)', icon: 'message' },
      { title: 'Sucursales separadas en todos los módulos', text: 'Cada sucursal ve su propio inventario, ventas y caja. La administración ve el consolidado.', area: 'Organización', icon: 'building' },
      { title: 'Varios puntos de venta y dominio por sucursal', text: 'Abre más de un punto de venta por sucursal y compra un dominio propio para la página de cada una.', area: 'Canales digitales', icon: 'globe' },
      { title: 'Panel en cuatro idiomas', text: 'GO Admin está disponible en español, inglés, portugués y francés.', area: 'Plataforma', icon: 'globe' },
    ],
  },
  {
    month: '2026-08',
    items: [
      { title: 'Cobro internacional', text: 'Tus clientes pagan desde otros países en tu tienda y en el motor de reservas.', area: 'Canales digitales', icon: 'credit-card' },
      { title: 'Catálogo para Facebook e Instagram', text: 'Publica tus productos en el catálogo de Meta con precios en varias monedas.', area: 'Canales digitales', icon: 'store' },
      { title: 'Editor de página web', text: 'Arma la página pública de tu negocio con bloques y publícala en tu dominio.', area: 'Canales digitales', icon: 'layout' },
      { title: 'Notificaciones push', text: 'Recibe avisos de ventas, pedidos y reservas en el celular, aunque no tengas GO Admin abierto.', area: 'Plataforma', icon: 'bell' },
      { title: 'Pedidos web pagados confirmados solos', text: 'Cuando el pago en línea se aprueba, el pedido pasa a preparación sin que tengas que confirmarlo.', area: 'Tienda en línea', icon: 'truck' },
      { title: 'Pagos con Bold y códigos QR', text: 'Cobra con datáfono Bold y con QR de Bancolombia, Bre-B y Redeban desde el POS.', area: 'Pagos', icon: 'qr', countries: ['COL'] },
      { title: 'Conexión con tus bancos', text: 'Sincroniza movimientos bancarios y concilia con ayuda de la IA.', area: 'Finanzas', icon: 'landmark', countries: ['COL'] },
      { title: 'App móvil con impresión Bluetooth', text: 'Vende desde el celular e imprime en impresoras térmicas por Bluetooth.', area: 'Ventas y POS', icon: 'cart' },
      { title: 'Consulta de datos ante {theAuthority}', text: 'Al crear un cliente, trae su nombre y datos tributarios con el {taxId}.', area: '{invoicing}', icon: 'search', countries: ['COL'] },
      { title: 'Reportes con IA y cierres en PDF', text: 'Pide un reporte en tus palabras y descarga los cierres de caja en PDF.', area: 'Reportes', icon: 'sparkles' },
      { title: 'Folios en hotelería y cajón monedero', text: 'Cargos agrupados por huésped en el hotel y apertura automática del cajón al cobrar.', area: 'Hotelería', icon: 'bed' },
    ],
  },
  {
    month: '2026-07',
    items: [
      { title: 'Facturación electrónica ante {theAuthority}', text: 'Emite facturas electrónicas validadas desde el POS y desde ventas.', area: '{invoicing}', icon: 'receipt', countries: ['COL'] },
      { title: 'Comandas a cocina', text: 'Envía los pedidos a cocina impresos o en pantalla, con notas por producto.', area: 'Restaurantes', icon: 'utensils' },
      { title: 'Impresión desde el escritorio', text: 'Un agente de impresión detecta tus impresoras y reintenta en otra si una falla.', area: 'Ventas y POS', icon: 'file-text' },
      { title: 'Recetas y producción', text: 'Define recetas, registra producción y descuenta los insumos del inventario.', area: 'Inventario', icon: 'package' },
      { title: 'Stock por sucursal y variantes', text: 'Controla existencias por sucursal, también por talla, color u otra variante.', area: 'Inventario', icon: 'boxes' },
      { title: 'Envíos y guías', text: 'Asigna domiciliarios, imprime guías y guarda fotos como prueba de entrega.', area: 'Transporte', icon: 'truck' },
      { title: 'Modo claro y oscuro', text: 'Todo GO Admin se adapta al tema de tu dispositivo y se ve bien en el celular.', area: 'Plataforma', icon: 'palette' },
    ],
  },
]
