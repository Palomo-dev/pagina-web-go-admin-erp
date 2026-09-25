/**
 * Catálogo de productos de GO Admin.
 *
 * Cada entrada alimenta la plantilla /producto/[slug] (Figma › Producto · plantilla).
 * Las capacidades descritas corresponden a los módulos del ERP (tabla `modules` y esquema público
 * del proyecto "Go Admin ERP"). No se incluyen cifras de resultados sin fuente verificable.
 */
import type { IconName } from '@/lib/site'
import type { MockKind } from '@/components/sections/product-mock'

export type ProductCategory = 'operacion' | 'finanzas' | 'clientes' | 'canales' | 'inteligencia'

export const CATEGORIES: { id: ProductCategory; name: string; text: string }[] = [
  { id: 'operacion', name: 'Operación', text: 'Lo que pasa en caja, bodega y habitaciones.' },
  { id: 'finanzas', name: 'Finanzas y equipo', text: 'Facturas, cuentas y nómina al día.' },
  { id: 'clientes', name: 'Clientes', text: 'Cada conversación y cada venta, en un historial.' },
  { id: 'canales', name: 'Canales digitales', text: 'Tu negocio en internet desde el primer día.' },
  { id: 'inteligencia', name: 'Información e IA', text: 'Respuestas claras para decidir.' },
]

export type Product = {
  slug: string
  name: string
  short: string
  category: ProductCategory
  icon: IconName
  eyebrow: string
  headline: string
  lead: string
  pains: { pain: string; answer: string }[]
  features: { title: string; text: string; icon: IconName }[]
  steps: { title: string; text: string }[]
  mock: MockKind
  highlights: string[]
  connects: string[]
  solutions: string[]
  faq: { q: string; a: string }[]
  /** true: se destaca como parte de los canales digitales que recibe cada organización */
  isChannel?: boolean
}

export const PRODUCTS: Product[] = [
  // -------------------------------------------------------------------------
  // Operación
  // -------------------------------------------------------------------------
  {
    slug: 'ventas-pos',
    name: 'Ventas y punto de venta',
    short: 'Caja, mesas, comandas y pagos.',
    category: 'operacion',
    icon: 'cart',
    eyebrow: 'Ventas y POS',
    headline: 'Cobra sin filas y sin cuadernos.',
    lead: 'Un punto de venta para tienda, restaurante o gimnasio. Cada venta descuenta inventario, queda lista para facturar y aparece en tus reportes.',
    pains: [
      { pain: 'Al cerrar, la caja no cuadra y no sabes por qué.', answer: 'Arqueo por medio de pago y diferencias explicadas en el cierre.' },
      { pain: 'Los pedidos de mesa se pierden entre la barra y la cocina.', answer: 'Comandas que llegan a cocina por estación, con estado en tiempo real.' },
      { pain: 'Vendes algo que ya no tienes en bodega.', answer: 'El stock baja con cada venta y avisa antes de agotarse.' },
    ],
    features: [
      { title: 'Caja con apertura y cierre', text: 'Base inicial, movimientos, arqueo y conteo por denominación.', icon: 'wallet' },
      { title: 'Mesas y comandas', text: 'Plano de mesas por zona, cuentas divididas, propinas y cargos de servicio.', icon: 'utensils' },
      { title: 'Todos los medios de pago', text: 'Efectivo, tarjeta, transferencia y cobros por QR en una misma venta.', icon: 'qr' },
      { title: 'Promociones y cupones', text: 'Reglas de descuento, cupones y precios por lista o sucursal.', icon: 'sparkles' },
      { title: 'Devoluciones ordenadas', text: 'Motivos de devolución, nota crédito y reingreso al inventario.', icon: 'history' },
      { title: 'Impresoras y terminales', text: 'Tiquetes, comandas por estación y varias cajas por sede.', icon: 'receipt' },
    ],
    steps: [
      { title: 'Abre la caja', text: 'Registra la base y quién atiende.' },
      { title: 'Vende', text: 'Busca por nombre o código de barras, cobra con uno o varios medios de pago.' },
      { title: 'Factura', text: 'Emite factura electrónica o tiquete desde la misma venta.' },
      { title: 'Cierra', text: 'El arqueo compara lo contado con lo vendido.' },
    ],
    mock: 'pos',
    highlights: ['Ventas por sede y por cajero', 'Comandas a cocina y barra', 'Facturación en el mismo flujo'],
    connects: ['inventario', 'facturacion-electronica', 'clientes-crm', 'reportes'],
    solutions: ['gastronomia', 'comercio', 'belleza-y-salud', 'espacios-y-eventos', 'gimnasios-y-academias'],
    faq: [
      { q: '¿Funciona en tableta o celular?', a: 'Sí. GO Admin funciona en el navegador del computador, la tableta o el celular.' },
      { q: '¿Puedo tener varias cajas en la misma sede?', a: 'Sí. Cada caja tiene su apertura, sus movimientos y su cierre.' },
      { q: '¿Se conecta con impresoras de tiquetes y comandas?', a: 'Sí. Asignas impresoras por estación para que cada área reciba lo suyo.' },
    ],
  },
  {
    slug: 'inventario',
    name: 'Inventario',
    short: 'Stock por bodega, lotes y traslados.',
    category: 'operacion',
    icon: 'package',
    eyebrow: 'Inventario',
    headline: 'Sabe qué tienes y dónde.',
    lead: 'Existencias por bodega y sucursal, costos, lotes y traslados. Cada venta descuenta y cada compra suma, sin hojas de cálculo.',
    pains: [
      { pain: 'Cuentas el inventario y nunca coincide con el sistema.', answer: 'Conteos cíclicos, ajustes con motivo y kardex de cada movimiento.' },
      { pain: 'No sabes cuánto te cuesta realmente lo que vendes.', answer: 'Costo promedio y FIFO actualizados con cada compra.' },
      { pain: 'Mueves mercancía entre sedes y se pierde el rastro.', answer: 'Traslados con salida, tránsito y recepción con diferencias.' },
    ],
    features: [
      { title: 'Catálogo completo', text: 'Categorías en árbol, variantes (talla, color), imágenes, unidades y códigos de barras.', icon: 'boxes' },
      { title: 'Stock en tiempo real', text: 'Existencias por bodega y sucursal con alertas de mínimos.', icon: 'trending' },
      { title: 'Compras y proveedores', text: 'Órdenes de compra, recepción y enlace con cuentas por pagar.', icon: 'truck' },
      { title: 'Lotes y seriales', text: 'Vencimientos, garantías y trazabilidad por serial.', icon: 'file-check' },
      { title: 'Recetas y producción', text: 'Descuenta ingredientes cuando vendes un plato o produces un lote.', icon: 'utensils' },
      { title: 'Kardex y ajustes', text: 'Historial de cada movimiento con quién, cuándo y por qué.', icon: 'history' },
    ],
    steps: [
      { title: 'Importa tu catálogo', text: 'Sube productos y existencias desde Excel.' },
      { title: 'Define bodegas y mínimos', text: 'Por sede y por producto.' },
      { title: 'Opera', text: 'Ventas, compras y traslados mueven el stock solos.' },
      { title: 'Cuenta y ajusta', text: 'Conteos cíclicos con diferencias explicadas.' },
    ],
    mock: 'stock',
    highlights: ['Multibodega y multisede', 'Variantes y códigos de barras', 'Costo promedio y FIFO'],
    connects: ['ventas-pos', 'tienda-en-linea', 'contabilidad', 'reportes'],
    solutions: ['comercio', 'gastronomia'],
    faq: [
      { q: '¿Puedo manejar tallas y colores?', a: 'Sí. Creas tipos de variante y cada combinación tiene su propio stock y código.' },
      { q: '¿Sirve para restaurantes?', a: 'Sí. Con recetas, cada plato vendido descuenta sus ingredientes.' },
      { q: '¿Cómo cargo mi inventario inicial?', a: 'Importas desde Excel y te acompañamos en la primera carga.' },
    ],
  },
  {
    slug: 'hoteleria',
    name: 'Hotelería (PMS)',
    short: 'Reservas, check-in, folios y canales.',
    category: 'operacion',
    icon: 'bed',
    eyebrow: 'Hotelería',
    headline: 'Reservas y habitaciones sin cruces.',
    lead: 'Calendario de ocupación, check-in y check-out, folios por huésped, tarifas y conexión con canales como Booking.com y Expedia.',
    pains: [
      { pain: 'Una habitación vendida dos veces en canales distintos.', answer: 'Disponibilidad sincronizada con los canales de reserva.' },
      { pain: 'Los consumos del huésped quedan en papel.', answer: 'Folios con cargos del restaurante, minibar y servicios.' },
      { pain: 'Housekeeping no sabe qué habitaciones limpiar primero.', answer: 'Tareas de limpieza y mantenimiento según salidas y llegadas.' },
    ],
    features: [
      { title: 'Calendario de reservas', text: 'Vista por tipo de habitación, bloqueos y grupos.', icon: 'calendar' },
      { title: 'Check-in y check-out', text: 'Registro de huéspedes y salida con folio cerrado.', icon: 'key' },
      { title: 'Folios multicuenta', text: 'Cargos separados por huésped o empresa.', icon: 'receipt' },
      { title: 'Tarifas y extras', text: 'Tarifas por temporada, paquetes y servicios adicionales.', icon: 'wallet' },
      { title: 'Channel manager', text: 'Booking.com, Expedia, Airbnb y calendarios iCal.', icon: 'globe' },
      { title: 'Housekeeping', text: 'Tareas de limpieza y órdenes de mantenimiento.', icon: 'sparkles' },
    ],
    steps: [
      { title: 'Configura habitaciones', text: 'Tipos, espacios, tarifas y servicios.' },
      { title: 'Conecta canales', text: 'Mapea tus tipos de habitación con cada canal.' },
      { title: 'Recibe reservas', text: 'Desde canales, tu motor de reservas o la recepción.' },
      { title: 'Factura la estadía', text: 'El folio pasa a factura electrónica al salir.' },
    ],
    mock: 'pms',
    highlights: ['Motor de reservas propio', 'Booking.com y Expedia', 'Folios y facturación'],
    connects: ['motor-de-reservas', 'facturacion-electronica', 'ventas-pos', 'reportes'],
    solutions: ['hospedaje'],
    faq: [
      { q: '¿Se conecta con Booking.com?', a: 'Sí. Mapeas tus tipos de habitación y tarifas, y las reservas llegan al calendario.' },
      { q: '¿Puedo cargar consumos del restaurante a la habitación?', a: 'Sí. Los cargos del punto de venta pueden ir al folio del huésped.' },
    ],
  },

  // -------------------------------------------------------------------------
  // Finanzas y equipo
  // -------------------------------------------------------------------------
  {
    slug: 'facturacion-electronica',
    name: 'Facturación electrónica',
    short: 'Facturas DIAN desde la misma venta.',
    category: 'finanzas',
    icon: 'receipt',
    eyebrow: 'Facturación electrónica',
    headline: 'Factura sin salir de donde vendes.',
    lead: 'Emite facturas, notas crédito y documentos soporte validados por la DIAN desde el punto de venta o desde finanzas, y consulta su estado en un solo lugar.',
    pains: [
      { pain: 'Facturas en otro programa y digitas todo dos veces.', answer: 'La factura sale de la venta, con cliente, productos e impuestos.' },
      { pain: 'No sabes si la DIAN aceptó o rechazó un documento.', answer: 'Estado de cada documento, con el error explicado si lo hay.' },
      { pain: 'Las notas crédito y devoluciones se enredan.', answer: 'Nota crédito ligada a la factura y a la devolución.' },
    ],
    features: [
      { title: 'Factura de venta', text: 'Numeración, resoluciones y envío al cliente por correo.', icon: 'receipt' },
      { title: 'Notas crédito y débito', text: 'Ligadas a la factura original y a las devoluciones.', icon: 'file-check' },
      { title: 'Documento soporte', text: 'Para compras a proveedores no obligados a facturar.', icon: 'file-text' },
      { title: 'Impuestos y retenciones', text: 'IVA, INC y retenciones configurables por producto y cliente.', icon: 'calculator' },
      { title: 'Estado ante la DIAN', text: 'CUFE, código QR y respuesta de validación de cada documento.', icon: 'shield' },
      { title: 'Consulta de clientes', text: 'Datos tributarios del cliente para evitar errores.', icon: 'users' },
    ],
    steps: [
      { title: 'Habilítate', text: 'Configura tu resolución y certificado de firma.' },
      { title: 'Vende', text: 'Desde el POS, una cotización o finanzas.' },
      { title: 'Emite', text: 'El documento se valida y se envía al cliente.' },
      { title: 'Consulta', text: 'Estado, PDF y XML siempre a la mano.' },
    ],
    mock: 'invoice',
    highlights: ['Incluida en todos los planes', 'Factura, notas y documento soporte', 'Estado DIAN en tiempo real'],
    connects: ['ventas-pos', 'contabilidad', 'clientes-crm', 'reportes'],
    solutions: ['gastronomia', 'hospedaje', 'comercio', 'servicios', 'movilidad'],
    faq: [
      { q: '¿Necesito un certificado digital?', a: 'Sí, para firmar los documentos. Si no lo tienes, puedes adquirirlo como complemento.' },
      { q: '¿Cuántas facturas puedo emitir?', a: 'Depende del plan: 1.000, 3.000 o ilimitadas al mes. Puedes agregar facturas adicionales.' },
      { q: '¿Puedo facturar desde el celular?', a: 'Sí. La facturación funciona desde el navegador en cualquier dispositivo.' },
    ],
  },
  {
    slug: 'contabilidad',
    name: 'Contabilidad y finanzas',
    short: 'Asientos, cartera, bancos y cierres.',
    category: 'finanzas',
    icon: 'calculator',
    eyebrow: 'Contabilidad',
    headline: 'Cuentas claras sin volver a digitar.',
    lead: 'Cada venta, compra y pago genera su asiento. Cartera, cuentas por pagar, bancos, conciliación y cierres en el mismo sistema donde operas.',
    pains: [
      { pain: 'Tu contador recibe la información tarde y en archivos sueltos.', answer: 'Asientos automáticos desde la operación, listos para revisar.' },
      { pain: 'No sabes quién te debe ni a quién le debes.', answer: 'Cartera y cuentas por pagar con cuotas y recordatorios.' },
      { pain: 'Conciliar el banco toma días.', answer: 'Conciliación con los movimientos importados del banco.' },
    ],
    features: [
      { title: 'Plan de cuentas', text: 'PUC colombiano y reglas contables configurables.', icon: 'book' },
      { title: 'Asientos automáticos', text: 'Ventas, compras, pagos y nómina contabilizan solos.', icon: 'workflow' },
      { title: 'Cartera y cuentas por pagar', text: 'Cuotas, vencimientos y recordatorios de cobro.', icon: 'wallet' },
      { title: 'Bancos y conciliación', text: 'Cuentas bancarias, transferencias y conciliación.', icon: 'landmark' },
      { title: 'Centros de costo y presupuestos', text: 'Resultados por sede, área o proyecto.', icon: 'chart' },
      { title: 'Activos fijos y cierres', text: 'Depreciaciones y periodos fiscales.', icon: 'lock' },
    ],
    steps: [
      { title: 'Configura', text: 'Plan de cuentas, impuestos y reglas contables.' },
      { title: 'Opera', text: 'Cada documento genera su asiento.' },
      { title: 'Concilia', text: 'Cruza bancos, cartera y pagos.' },
      { title: 'Cierra el mes', text: 'Revisa, ajusta y bloquea el periodo.' },
    ],
    mock: 'ledger',
    highlights: ['PUC y reglas contables', 'Conciliación bancaria', 'Centros de costo y presupuestos'],
    connects: ['facturacion-electronica', 'nomina', 'ventas-pos', 'reportes'],
    solutions: ['servicios', 'hospedaje', 'comercio', 'gastronomia'],
    faq: [
      { q: '¿Mi contador puede trabajar en GO Admin?', a: 'Sí. Le das un usuario con el rol y los permisos que necesita.' },
      { q: '¿Qué pasa si un asiento falla?', a: 'Queda registrado para revisarlo y corregirlo, sin perder el documento de origen.' },
    ],
  },
  {
    slug: 'nomina',
    name: 'Nómina y equipo',
    short: 'Contratos, turnos y nómina electrónica.',
    category: 'finanzas',
    icon: 'user-check',
    eyebrow: 'Nómina y equipo',
    headline: 'Tu equipo, en orden.',
    lead: 'Empleados, contratos, turnos, asistencia, vacaciones, préstamos y nómina en un solo lugar, conectado con la contabilidad.',
    pains: [
      { pain: 'Los turnos viven en un grupo de WhatsApp.', answer: 'Plantillas de turnos y rotaciones visibles para todos.' },
      { pain: 'Liquidar la nómina toma un día entero.', answer: 'Periodos, novedades y desprendibles calculados.' },
      { pain: 'No sabes cuántos días de vacaciones le quedan a cada persona.', answer: 'Saldos de vacaciones y licencias actualizados.' },
    ],
    features: [
      { title: 'Empleados y contratos', text: 'Cargos, áreas, salarios y documentos.', icon: 'users' },
      { title: 'Turnos y rotaciones', text: 'Plantillas y asignaciones por sede.', icon: 'calendar' },
      { title: 'Asistencia', text: 'Marcaciones de entrada y salida y hojas de tiempo.', icon: 'history' },
      { title: 'Vacaciones y licencias', text: 'Solicitudes, aprobaciones y saldos.', icon: 'heart-handshake' },
      { title: 'Nómina', text: 'Periodos, novedades, desprendibles y nómina electrónica.', icon: 'wallet' },
      { title: 'Préstamos y anticipos', text: 'Cuotas descontadas en cada periodo.', icon: 'landmark' },
    ],
    steps: [
      { title: 'Registra a tu equipo', text: 'Datos, contrato y salario.' },
      { title: 'Programa turnos', text: 'Plantillas y rotaciones por sede.' },
      { title: 'Registra novedades', text: 'Horas extra, ausencias y vacaciones.' },
      { title: 'Liquida', text: 'Desprendibles y asientos contables.' },
    ],
    mock: 'payroll',
    highlights: ['Turnos y asistencia', 'Vacaciones y licencias', 'Nómina conectada con contabilidad'],
    connects: ['contabilidad', 'reportes'],
    solutions: ['gastronomia', 'hospedaje', 'gimnasios-y-academias', 'movilidad', 'servicios'],
    faq: [
      { q: '¿Los empleados pueden ver sus turnos?', a: 'Sí, con un usuario y los permisos que definas para su cargo.' },
      { q: '¿La nómina genera los asientos contables?', a: 'Sí. Cada liquidación queda contabilizada.' },
    ],
  },

  // -------------------------------------------------------------------------
  // Clientes
  // -------------------------------------------------------------------------
  {
    slug: 'clientes-crm',
    name: 'Clientes (CRM)',
    short: 'Historial, oportunidades y campañas.',
    category: 'clientes',
    icon: 'users',
    eyebrow: 'Clientes y CRM',
    headline: 'Recuerda a cada cliente.',
    lead: 'La ficha de cada cliente reúne compras, reservas, conversaciones y tareas. Oportunidades en embudos, seguimientos y campañas por segmento.',
    pains: [
      { pain: 'La información del cliente está en la cabeza de un vendedor.', answer: 'Ficha 360° con todo el historial del cliente.' },
      { pain: 'Las cotizaciones se enfrían sin seguimiento.', answer: 'Embudos con etapas, tareas y recordatorios.' },
      { pain: 'Envías la misma promoción a todos.', answer: 'Segmentos y campañas según lo que compra cada cliente.' },
    ],
    features: [
      { title: 'Ficha 360°', text: 'Compras, facturas, reservas, notas y conversaciones.', icon: 'users' },
      { title: 'Embudos de venta', text: 'Etapas personalizables, oportunidades y cotizaciones.', icon: 'workflow' },
      { title: 'Tareas y actividades', text: 'Llamadas, reuniones y recordatorios por responsable.', icon: 'calendar' },
      { title: 'Segmentos y campañas', text: 'Por correo, WhatsApp o SMS.', icon: 'mail' },
      { title: 'Automatizaciones', text: 'Acciones que se disparan con eventos del negocio.', icon: 'zap' },
      { title: 'Consentimientos', text: 'Preferencias de contacto de cada cliente.', icon: 'shield' },
    ],
    steps: [
      { title: 'Reúne tus clientes', text: 'Importa tu base o créalos al vender.' },
      { title: 'Organiza el embudo', text: 'Define etapas según cómo vendes.' },
      { title: 'Haz seguimiento', text: 'Tareas y recordatorios para cada oportunidad.' },
      { title: 'Comunica', text: 'Campañas por segmento y automatizaciones.' },
    ],
    mock: 'pipeline',
    highlights: ['Ficha 360°', 'Embudos y cotizaciones', 'Campañas por WhatsApp y correo'],
    connects: ['chat-omnicanal', 'ventas-pos', 'facturacion-electronica', 'reportes'],
    solutions: ['servicios', 'belleza-y-salud', 'hospedaje', 'gimnasios-y-academias', 'comercio'],
    faq: [
      { q: '¿Puedo importar mis clientes actuales?', a: 'Sí, desde Excel. También se crean al vender o al reservar.' },
      { q: '¿Las campañas salen por WhatsApp?', a: 'Sí, conectando tu WhatsApp Business. También por correo y SMS.' },
    ],
  },
  {
    slug: 'chat-omnicanal',
    name: 'Chat omnicanal',
    short: 'WhatsApp, Instagram y web en una bandeja.',
    category: 'clientes',
    icon: 'message',
    eyebrow: 'Chat omnicanal',
    headline: 'Todas las conversaciones en una bandeja.',
    lead: 'WhatsApp, Instagram, Facebook y el chat de tu sitio web llegan al mismo lugar. Asigna conversaciones al equipo y deja que un asistente con IA responda lo frecuente.',
    pains: [
      { pain: 'Respondes desde tres celulares distintos.', answer: 'Una bandeja compartida para todos los canales.' },
      { pain: 'Las mismas preguntas te quitan el día.', answer: 'Respuestas rápidas y un asistente con IA entrenado con tu información.' },
      { pain: 'No sabes quién atendió a quién.', answer: 'Asignaciones, estados y notas internas en cada conversación.' },
    ],
    features: [
      { title: 'Bandeja unificada', text: 'WhatsApp, Instagram, Facebook y chat web.', icon: 'message' },
      { title: 'Asignación y estados', text: 'Por agente o departamento, con historial.', icon: 'users' },
      { title: 'Asistente con IA', text: 'Responde con tu catálogo, horarios y políticas.', icon: 'bot' },
      { title: 'Respuestas rápidas', text: 'Plantillas para lo que preguntan siempre.', icon: 'zap' },
      { title: 'Widget para tu sitio', text: 'Chat en tu página web de GO Admin o en otra.', icon: 'globe' },
      { title: 'Resumen y etiquetas', text: 'Resúmenes automáticos y etiquetas por tema.', icon: 'sparkles' },
    ],
    steps: [
      { title: 'Conecta tus canales', text: 'WhatsApp Business, Instagram y tu sitio.' },
      { title: 'Entrena al asistente', text: 'Con tus productos, precios y preguntas frecuentes.' },
      { title: 'Atiende en equipo', text: 'Asigna, responde y deja notas.' },
      { title: 'Vende', text: 'La conversación queda en la ficha del cliente.' },
    ],
    mock: 'chat',
    highlights: ['WhatsApp, Instagram y web', 'Asistente entrenado con tu información', 'Historial en el CRM'],
    connects: ['clientes-crm', 'sitio-web', 'tienda-en-linea', 'inteligencia-artificial'],
    solutions: ['gastronomia', 'hospedaje', 'comercio', 'belleza-y-salud', 'servicios'],
    faq: [
      { q: '¿El asistente responde solo?', a: 'Responde lo frecuente con la información que le das; tu equipo puede tomar la conversación en cualquier momento.' },
      { q: '¿Necesito WhatsApp Business?', a: 'Sí, para conectar WhatsApp a la bandeja compartida.' },
    ],
  },

  // -------------------------------------------------------------------------
  // Canales digitales — cada organización los recibe al registrarse
  // -------------------------------------------------------------------------
  {
    slug: 'sitio-web',
    name: 'Página web',
    short: 'Tu sitio con dominio propio, listo en minutos.',
    category: 'canales',
    icon: 'globe',
    eyebrow: 'Página web',
    headline: 'Tu negocio en internet desde el primer día.',
    lead: 'Cada organización recibe su página web en una dirección de GO Admin o con su propio dominio. Eliges una plantilla, la ajustas con tu marca y se actualiza sola con tus productos, servicios y horarios.',
    pains: [
      { pain: 'Tener página web significaba contratar a alguien y esperar.', answer: 'Plantillas por industria listas para publicar.' },
      { pain: 'La página queda desactualizada con precios viejos.', answer: 'Productos, precios y horarios salen del ERP.' },
      { pain: 'Nadie te encuentra en Google.', answer: 'Título, descripción e imagen para buscadores y redes en cada página.' },
    ],
    features: [
      { title: 'Plantillas por industria', text: 'Moderna, clásica, elegante, restaurante, hotel, tienda y parqueadero.', icon: 'layout' },
      { title: 'Constructor de páginas', text: 'Secciones que ordenas y editas, con borrador y publicación.', icon: 'workflow' },
      { title: 'Dominio propio', text: 'Subdominio de GO Admin o tu dominio, con verificación y certificado.', icon: 'globe' },
      { title: 'Tu marca', text: 'Logo, colores, tipografías, menús y pie de página.', icon: 'sparkles' },
      { title: 'Buscadores y redes', text: 'Metadatos, imagen para compartir y verificación de Google.', icon: 'search' },
      { title: 'Visitas y reseñas', text: 'Estadísticas de visitas y reseñas de clientes moderadas.', icon: 'chart' },
    ],
    steps: [
      { title: 'Elige una plantilla', text: 'Según tu industria.' },
      { title: 'Ponle tu marca', text: 'Logo, colores y contenido.' },
      { title: 'Conecta tu dominio', text: 'O usa la dirección de GO Admin.' },
      { title: 'Publica', text: 'Tus productos y horarios se actualizan solos.' },
    ],
    mock: 'site',
    highlights: ['Subdominio incluido o dominio propio', 'Plantillas por industria', 'Contenido conectado al ERP'],
    connects: ['tienda-en-linea', 'motor-de-reservas', 'chat-omnicanal', 'clientes-crm'],
    solutions: ['gastronomia', 'hospedaje', 'comercio', 'belleza-y-salud', 'espacios-y-eventos', 'gimnasios-y-academias', 'movilidad', 'servicios'],
    faq: [
      { q: '¿Puedo usar mi propio dominio?', a: 'Sí. Conectas tu dominio con una verificación DNS; también puedes comprarlo desde GO Admin.' },
      { q: '¿Necesito saber programar?', a: 'No. Editas secciones, textos e imágenes desde el constructor.' },
      { q: '¿Qué pasa si cambio un precio?', a: 'Se actualiza en tu página porque sale del mismo catálogo.' },
    ],
    isChannel: true,
  },
  {
    slug: 'tienda-en-linea',
    name: 'Tienda en línea',
    short: 'Vende por internet con tu inventario real.',
    category: 'canales',
    icon: 'store',
    eyebrow: 'Tienda en línea',
    headline: 'Vende en línea con el inventario que ya tienes.',
    lead: 'Tu catálogo publicado como tienda: carrito, pagos en línea, domicilio o recogida, cupones y reseñas. Cada pedido llega a GO Admin, descuenta stock y queda listo para facturar.',
    pains: [
      { pain: 'Llevas la tienda en línea y el inventario por separado.', answer: 'El stock es el mismo para la tienda física y la en línea.' },
      { pain: 'Los pedidos llegan por WhatsApp y se pierden.', answer: 'Cada pedido tiene número, estado y responsable.' },
      { pain: 'Cobrar en línea te parece complicado.', answer: 'Pasarelas de pago colombianas conectadas.' },
    ],
    features: [
      { title: 'Catálogo publicado', text: 'Categorías, variantes, fotos y precios desde inventario.', icon: 'store' },
      { title: 'Carrito y pagos', text: 'Wompi, PayU, Mercado Pago, Bold y más.', icon: 'credit-card' },
      { title: 'Domicilio o recogida', text: 'Tarifas de envío, envío gratis desde un monto y pedidos programados.', icon: 'truck' },
      { title: 'Cupones y promociones', text: 'Códigos de descuento y cuentas regresivas.', icon: 'sparkles' },
      { title: 'Pedidos en tiempo real', text: 'Confirmación, preparación, despacho y entrega.', icon: 'bell' },
      { title: 'Reseñas de clientes', text: 'Calificaciones verificadas por compra, con respuesta.', icon: 'star' },
    ],
    steps: [
      { title: 'Activa la tienda', text: 'Tu catálogo ya está cargado.' },
      { title: 'Conecta pagos', text: 'Elige tu pasarela.' },
      { title: 'Define entregas', text: 'Domicilio, recogida y tarifas.' },
      { title: 'Recibe pedidos', text: 'Llegan al ERP con su estado.' },
    ],
    mock: 'store',
    highlights: ['Mismo inventario que la tienda física', 'Pagos en línea en Colombia', 'Domicilio, recogida y cupones'],
    connects: ['inventario', 'ventas-pos', 'facturacion-electronica', 'sitio-web'],
    solutions: ['comercio', 'gastronomia'],
    faq: [
      { q: '¿Qué pasarelas de pago puedo usar?', a: 'Wompi, PayU, Mercado Pago, Bold, Stripe y PayPal, entre otras.' },
      { q: '¿Sirve para pedidos de restaurante?', a: 'Sí. Con domicilio o recogida, propinas y pedidos programados.' },
    ],
    isChannel: true,
  },
  {
    slug: 'motor-de-reservas',
    name: 'Motor de reservas',
    short: 'Reservas directas de habitaciones, mesas y citas.',
    category: 'canales',
    icon: 'calendar',
    eyebrow: 'Motor de reservas',
    headline: 'Reservas directas, sin comisiones de intermediarios.',
    lead: 'Tus clientes reservan habitaciones, mesas o citas desde tu página, con disponibilidad real. Las reservas llegan al calendario de GO Admin junto con las de los canales externos.',
    pains: [
      { pain: 'Dependes de plataformas que cobran comisión por cada reserva.', answer: 'Reservas directas desde tu propia página.' },
      { pain: 'Confirmas reservas una por una por teléfono.', answer: 'Confirmación automática por correo o WhatsApp.' },
      { pain: 'Los clientes no llegan y pierdes la mesa.', answer: 'Recordatorios, políticas de cancelación y depósitos.' },
    ],
    features: [
      { title: 'Habitaciones', text: 'Disponibilidad y tarifas del PMS, con extras.', icon: 'bed' },
      { title: 'Mesas', text: 'Turnos, tamaño de grupo, zonas y asignación de mesa.', icon: 'utensils' },
      { title: 'Citas y clases', text: 'Agenda de servicios, clases y membresías.', icon: 'calendar' },
      { title: 'Depósitos y políticas', text: 'Anticipos, cancelación y confirmación.', icon: 'wallet' },
      { title: 'Recordatorios', text: 'Por correo y WhatsApp antes de la llegada.', icon: 'bell' },
      { title: 'Todo en un calendario', text: 'Directas y de canales externos, sin cruces.', icon: 'layout' },
    ],
    steps: [
      { title: 'Define disponibilidad', text: 'Habitaciones, mesas o servicios.' },
      { title: 'Configura reglas', text: 'Anticipación, grupos, depósitos.' },
      { title: 'Publica', text: 'En tu página de GO Admin.' },
      { title: 'Recibe', text: 'Reservas confirmadas en tu calendario.' },
    ],
    mock: 'booking',
    highlights: ['Habitaciones, mesas y citas', 'Depósitos y recordatorios', 'Mismo calendario que tus canales'],
    connects: ['hoteleria', 'sitio-web', 'clientes-crm', 'facturacion-electronica'],
    solutions: ['hospedaje', 'espacios-y-eventos', 'belleza-y-salud', 'gastronomia', 'gimnasios-y-academias', 'servicios'],
    faq: [
      { q: '¿Funciona junto con Booking.com?', a: 'Sí. Las reservas directas y las de canales comparten el mismo calendario.' },
      { q: '¿Puedo pedir un depósito?', a: 'Sí. Defines si es fijo o por persona.' },
    ],
    isChannel: true,
  },

  // -------------------------------------------------------------------------
  // Información e IA
  // -------------------------------------------------------------------------
  {
    slug: 'reportes',
    name: 'Reportes',
    short: 'Tableros listos para decidir.',
    category: 'inteligencia',
    icon: 'chart',
    eyebrow: 'Reportes y analítica',
    headline: '¿Vendiste más o ganaste más?',
    lead: 'Tableros de ventas, márgenes, cartera, inventario y equipo listos desde el primer día. Guarda tus vistas y recibe reportes programados en tu correo.',
    pains: [
      { pain: 'Armas reportes en Excel cada fin de mes.', answer: 'Tableros que se actualizan con cada operación.' },
      { pain: 'Ves ventas, pero no el margen.', answer: 'Ventas, costo y margen por producto y sede.' },
      { pain: 'Te enteras tarde de lo importante.', answer: 'Alertas cuando un indicador cruza un límite.' },
    ],
    features: [
      { title: 'Tableros por área', text: 'Ventas, inventario, finanzas, clientes y equipo.', icon: 'layout' },
      { title: 'Comparativos', text: 'Por periodo, sede, vendedor o canal.', icon: 'trending' },
      { title: 'Reportes guardados', text: 'Tus filtros y columnas, listos para repetir.', icon: 'file-text' },
      { title: 'Envíos programados', text: 'En tu correo cada día, semana o mes.', icon: 'mail' },
      { title: 'Alertas', text: 'Cuando algo necesita tu atención.', icon: 'bell' },
      { title: 'Exporta', text: 'A Excel y PDF.', icon: 'file-check' },
    ],
    steps: [
      { title: 'Abre tu tablero', text: 'Ya viene armado.' },
      { title: 'Filtra', text: 'Por fecha, sede o canal.' },
      { title: 'Guarda', text: 'Tus vistas favoritas.' },
      { title: 'Programa', text: 'Recibe el reporte sin pedirlo.' },
    ],
    mock: 'dashboard',
    highlights: ['Tableros listos', 'Reportes programados', 'Alertas por indicador'],
    connects: ['inteligencia-artificial', 'ventas-pos', 'contabilidad', 'inventario'],
    solutions: ['gastronomia', 'hospedaje', 'comercio', 'belleza-y-salud', 'espacios-y-eventos', 'gimnasios-y-academias', 'movilidad', 'servicios'],
    faq: [
      { q: '¿Puedo ver varias sedes juntas?', a: 'Sí, y también compararlas entre sí.' },
      { q: '¿Quién puede ver los reportes?', a: 'Lo defines por rol: cada persona ve lo que le corresponde.' },
    ],
  },
  {
    slug: 'inteligencia-artificial',
    name: 'GO Admin IA',
    short: 'Pregúntale a tu negocio.',
    category: 'inteligencia',
    icon: 'bot',
    eyebrow: 'GO Admin IA',
    headline: 'Pregúntale a tu negocio.',
    lead: 'Escribe como le hablarías a tu contador. La IA consulta tus ventas, inventario y cartera y responde con cifras y gráficos. También te ayuda con textos e imágenes para tus productos.',
    pains: [
      { pain: 'Tienes datos, pero no tiempo para analizarlos.', answer: 'Preguntas en lenguaje natural y respuestas con cifras.' },
      { pain: 'Escribir descripciones de productos te toma horas.', answer: 'Textos e imágenes generados a partir de tu catálogo.' },
      { pain: 'Las dudas contables esperan al contador.', answer: 'Asistente contable que explica y sugiere asientos.' },
    ],
    features: [
      { title: 'Pregunta en español', text: '"¿Qué se vendió más esta semana?" y recibe la respuesta.', icon: 'message' },
      { title: 'Reportes a partir de una pregunta', text: 'Con tabla y gráfico listos para compartir.', icon: 'chart' },
      { title: 'Asistente contable', text: 'Explicaciones y sugerencias sobre tus movimientos.', icon: 'calculator' },
      { title: 'Contenido para productos', text: 'Descripciones e imágenes para tu tienda.', icon: 'sparkles' },
      { title: 'Agentes que sugieren', text: 'Recomendaciones de reabastecimiento y cobro.', icon: 'bot' },
      { title: 'Créditos por plan', text: '500, 2.000 o 10.000 créditos al mes, con recargas.', icon: 'zap' },
    ],
    steps: [
      { title: 'Abre el asistente', text: 'Desde cualquier pantalla.' },
      { title: 'Pregunta', text: 'Como le hablarías a una persona.' },
      { title: 'Revisa', text: 'Cifras, tabla y gráfico.' },
      { title: 'Actúa', text: 'Guarda el reporte o crea la tarea.' },
    ],
    mock: 'ai',
    highlights: ['Respuestas con tus datos', 'Asistente contable', 'Textos e imágenes para productos'],
    connects: ['reportes', 'contabilidad', 'inventario', 'chat-omnicanal'],
    solutions: ['gastronomia', 'hospedaje', 'comercio', 'servicios'],
    faq: [
      { q: '¿La IA ve datos de otros negocios?', a: 'No. Consulta solo la información de tu organización y respeta los permisos de cada usuario.' },
      { q: '¿Qué son los créditos de IA?', a: 'Cada consulta o generación consume créditos. Cada plan incluye una cantidad mensual y puedes comprar más.' },
    ],
  },
]

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function productsByCategory() {
  return CATEGORIES.map((c) => ({ ...c, items: PRODUCTS.filter((p) => p.category === c.id) }))
}

export const CHANNELS = PRODUCTS.filter((p) => p.isChannel)
