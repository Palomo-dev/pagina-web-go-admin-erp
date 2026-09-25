/**
 * Soluciones por industria. Alimentan /soluciones/[slug] (Figma › Solución · plantilla).
 * Los módulos de cada solución apuntan a slugs de lib/catalog/products.ts.
 */
import type { IconName } from '@/lib/site'

export type Solution = {
  slug: string
  name: string
  short: string
  icon: IconName
  headline: string
  lead: string
  pains: { pain: string; answer: string }[]
  /** Un día en el negocio: mañana, tarde y noche */
  day: { moment: string; title: string; text: string }[]
  modules: string[]
  /** Canal digital destacado para esta industria */
  channel: { product: string; title: string; text: string }
  features: { title: string; text: string; icon: IconName }[]
  faq: { q: string; a: string }[]
}

export const SOLUTIONS: Solution[] = [
  {
    slug: 'restaurantes',
    name: 'Restaurantes',
    short: 'Mesas, comandas, cocina y caja en sintonía.',
    icon: 'utensils',
    headline: 'Del pedido a la cocina, sin papelitos.',
    lead: 'Mesas por zona, comandas que llegan a cada estación, recetas que descuentan ingredientes y una caja que cuadra. Con carta en línea, pedidos a domicilio y reservas de mesa.',
    pains: [
      { pain: 'Las comandas se pierden entre la barra y la cocina.', answer: 'Comandas por estación con su estado en pantalla o impresora.' },
      { pain: 'No sabes cuánto te cuesta cada plato.', answer: 'Recetas que descuentan ingredientes y calculan el costo.' },
      { pain: 'Los domicilios llegan por tres aplicaciones distintas.', answer: 'Pedidos de tu tienda en línea y de apps de domicilios en un solo lugar.' },
    ],
    day: [
      { moment: '7:00 a. m.', title: 'Abres caja y revisas insumos', text: 'Alertas de lo que se está acabando antes del servicio.' },
      { moment: '12:30 p. m.', title: 'Servicio de almuerzo', text: 'Mesas, cuentas divididas, propinas y comandas a cocina.' },
      { moment: '3:00 p. m.', title: 'Llegan pedidos a domicilio', text: 'Desde tu tienda en línea, con estado y responsable.' },
      { moment: '10:00 p. m.', title: 'Cierras el día', text: 'Arqueo, ventas por mesero y facturas enviadas a la DIAN.' },
    ],
    modules: ['ventas-pos', 'inventario', 'facturacion-electronica', 'motor-de-reservas', 'tienda-en-linea', 'nomina', 'reportes'],
    channel: { product: 'tienda-en-linea', title: 'Tu carta en línea, con pedidos y reservas', text: 'Publica tu menú con fotos, recibe pedidos a domicilio o para recoger y reservas de mesa desde tu página.' },
    features: [
      { title: 'Plano de mesas', text: 'Zonas, uniones de mesas y estado de cada cuenta.', icon: 'layout' },
      { title: 'Modificadores', text: 'Término, adiciones y sin ingredientes en cada plato.', icon: 'utensils' },
      { title: 'Recetas y producción', text: 'Costo por plato y descuento de ingredientes.', icon: 'package' },
      { title: 'Propinas y cargos', text: 'Propina sugerida y cargo por servicio.', icon: 'wallet' },
    ],
    faq: [
      { q: '¿Puedo tener comandas en pantalla en la cocina?', a: 'Sí, o en impresoras por estación: cocina, barra o postres.' },
      { q: '¿Recibo pedidos de Rappi o Uber Eats?', a: 'Hay conectores con apps de domicilios; revisa en Integraciones cuáles están disponibles.' },
    ],
  },
  {
    slug: 'bares',
    name: 'Bares y discotecas',
    short: 'Cuentas abiertas, barra y control de licores.',
    icon: 'wine',
    headline: 'Noches movidas, cuentas en orden.',
    lead: 'Cuentas abiertas por mesa o persona, pedidos a barra, control de botellas y cócteles por receta, y un cierre de caja claro al final de la noche.',
    pains: [
      { pain: 'Las cuentas abiertas se confunden al final de la noche.', answer: 'Cuentas por mesa o por persona, divisibles al pagar.' },
      { pain: 'El licor se va y no sabes a dónde.', answer: 'Recetas por cóctel que descuentan cada trago del inventario.' },
      { pain: 'Reservas de mesas VIP por WhatsApp.', answer: 'Reservas con depósito desde tu página.' },
    ],
    day: [
      { moment: '6:00 p. m.', title: 'Preparas la barra', text: 'Inventario de botellas y alertas de faltantes.' },
      { moment: '9:00 p. m.', title: 'Abres cuentas', text: 'Por mesa o persona, con pedidos a barra.' },
      { moment: '1:00 a. m.', title: 'Hora pico', text: 'Cobros rápidos con tarjeta, QR o efectivo.' },
      { moment: '3:00 a. m.', title: 'Cierre', text: 'Arqueo, propinas y ventas por bartender.' },
    ],
    modules: ['ventas-pos', 'inventario', 'motor-de-reservas', 'facturacion-electronica', 'reportes'],
    channel: { product: 'motor-de-reservas', title: 'Reservas de mesa con depósito', text: 'Tus clientes reservan mesa o zona desde tu página y pagan el anticipo en línea.' },
    features: [
      { title: 'Cuentas abiertas', text: 'Sin cerrar hasta el pago, con historial.', icon: 'receipt' },
      { title: 'Recetas de cócteles', text: 'Cada trago descuenta sus ingredientes.', icon: 'package' },
      { title: 'Cover y eventos', text: 'Cobro de entrada y promociones por horario.', icon: 'sparkles' },
      { title: 'Varias barras', text: 'Cajas y comandas por punto de venta.', icon: 'store' },
    ],
    faq: [
      { q: '¿Puedo cobrar cover en la entrada?', a: 'Sí, como un producto en una caja de entrada.' },
      { q: '¿Se pueden dividir las cuentas?', a: 'Sí, por productos o en partes iguales.' },
    ],
  },
  {
    slug: 'cafeterias',
    name: 'Cafeterías y panaderías',
    short: 'Ventas rápidas, producción diaria y domicilios.',
    icon: 'utensils',
    headline: 'Ventas rápidas, producción al día.',
    lead: 'Cobro ágil en mostrador, órdenes de producción para el horno, control de lo que sobra y pedidos en línea para recoger.',
    pains: [
      { pain: 'Horneas de más o de menos cada día.', answer: 'Producción planeada con lo que se vende en cada franja.' },
      { pain: 'Fila larga en la mañana.', answer: 'Botones rápidos y cobro por QR.' },
      { pain: 'No sabes cuánto se pierde.', answer: 'Mermas registradas con motivo.' },
    ],
    day: [
      { moment: '5:00 a. m.', title: 'Producción', text: 'Órdenes de producción y consumo de insumos.' },
      { moment: '7:00 a. m.', title: 'Hora del desayuno', text: 'Ventas rápidas y pedidos para recoger.' },
      { moment: '2:00 p. m.', title: 'Revisas lo vendido', text: 'Productos estrella y lo que sobra.' },
      { moment: '7:00 p. m.', title: 'Cierre y mermas', text: 'Arqueo y registro de desperdicio.' },
    ],
    modules: ['ventas-pos', 'inventario', 'tienda-en-linea', 'facturacion-electronica', 'reportes'],
    channel: { product: 'tienda-en-linea', title: 'Pedidos para recoger', text: 'Tus clientes piden en línea y recogen sin hacer fila.' },
    features: [
      { title: 'Botones rápidos', text: 'Tus productos más vendidos a un toque.', icon: 'zap' },
      { title: 'Órdenes de producción', text: 'Recetas y consumo de insumos por lote.', icon: 'package' },
      { title: 'Mermas', text: 'Registro de desperdicio con motivo.', icon: 'history' },
      { title: 'Varias sedes', text: 'Traslados desde la planta a los puntos.', icon: 'building' },
    ],
    faq: [{ q: '¿Puedo producir en una sede y vender en otras?', a: 'Sí, con traslados entre bodegas.' }],
  },
  {
    slug: 'hoteles',
    name: 'Hoteles',
    short: 'Reservas, check-in, folios y canales.',
    icon: 'bed',
    headline: 'Tu hotel lleno, sin reservas cruzadas.',
    lead: 'Calendario de ocupación, check-in y check-out, folios por huésped, housekeeping y channel manager con Booking.com y Expedia. Con motor de reservas propio en tu página.',
    pains: [
      { pain: 'Sobreventas entre Booking.com y la recepción.', answer: 'Disponibilidad sincronizada en todos los canales.' },
      { pain: 'Pagas comisión por casi todas tus reservas.', answer: 'Motor de reservas directas en tu propia página.' },
      { pain: 'Los consumos del huésped se olvidan al salir.', answer: 'Folios con cargos del restaurante y servicios.' },
    ],
    day: [
      { moment: '7:00 a. m.', title: 'Revisas llegadas y salidas', text: 'Housekeeping sabe qué habitaciones preparar.' },
      { moment: '11:00 a. m.', title: 'Check-out', text: 'Folio cerrado y factura electrónica enviada.' },
      { moment: '3:00 p. m.', title: 'Check-in', text: 'Registro de huéspedes y asignación de habitación.' },
      { moment: '9:00 p. m.', title: 'Reservas nocturnas', text: 'Llegan de canales y de tu página al mismo calendario.' },
    ],
    modules: ['hoteleria', 'motor-de-reservas', 'facturacion-electronica', 'ventas-pos', 'clientes-crm', 'reportes'],
    channel: { product: 'motor-de-reservas', title: 'Motor de reservas directo', text: 'Tu página de hotel con fotos, tarifas y disponibilidad real para reservar sin intermediarios.' },
    features: [
      { title: 'Calendario de ocupación', text: 'Por tipo de habitación, con bloqueos.', icon: 'calendar' },
      { title: 'Channel manager', text: 'Booking.com, Expedia, Airbnb e iCal.', icon: 'globe' },
      { title: 'Housekeeping', text: 'Limpieza y mantenimiento priorizados.', icon: 'sparkles' },
      { title: 'Grupos y empresas', text: 'Reservas grupales y cuentas corporativas.', icon: 'building' },
    ],
    faq: [
      { q: '¿Funciona para hostales y apartamentos turísticos?', a: 'Sí. Configuras espacios, tipos y tarifas según tu operación.' },
      { q: '¿Puedo cobrar anticipos?', a: 'Sí, desde el motor de reservas con pagos en línea.' },
    ],
  },
  {
    slug: 'tiendas',
    name: 'Tiendas y moda',
    short: 'POS, inventario multisede y tienda en línea.',
    icon: 'store',
    headline: 'Vende en tu local y en línea con un solo inventario.',
    lead: 'Punto de venta con código de barras, tallas y colores, inventario por sede, tienda en línea conectada y facturación electrónica desde la misma venta.',
    pains: [
      { pain: 'Vendes en línea algo que ya no está en la tienda.', answer: 'Un solo inventario para la tienda física y la en línea.' },
      { pain: 'Manejar tallas y colores es un caos.', answer: 'Variantes con su propio stock y código de barras.' },
      { pain: 'No sabes qué referencias rotan.', answer: 'Reportes de rotación y margen por referencia.' },
    ],
    day: [
      { moment: '9:00 a. m.', title: 'Abres la tienda', text: 'Stock actualizado por sede y alertas de reposición.' },
      { moment: '12:00 m.', title: 'Llegan pedidos en línea', text: 'Separas, despachas y facturas.' },
      { moment: '5:00 p. m.', title: 'Traslados', text: 'Mueves referencias entre sedes según ventas.' },
      { moment: '8:00 p. m.', title: 'Cierre', text: 'Ventas por vendedor y por canal.' },
    ],
    modules: ['ventas-pos', 'inventario', 'tienda-en-linea', 'facturacion-electronica', 'clientes-crm', 'reportes'],
    channel: { product: 'tienda-en-linea', title: 'Tu tienda en línea, lista', text: 'Tu catálogo publicado con carrito, pagos, envíos y cupones, conectado al mismo inventario.' },
    features: [
      { title: 'Variantes', text: 'Tallas, colores y referencias con código.', icon: 'boxes' },
      { title: 'Multisede', text: 'Inventario y precios por sucursal.', icon: 'building' },
      { title: 'Promociones', text: 'Descuentos, cupones y temporadas.', icon: 'sparkles' },
      { title: 'Garantías', text: 'Seriales y reclamaciones.', icon: 'shield' },
    ],
    faq: [{ q: '¿Puedo usar lector de código de barras?', a: 'Sí, en el punto de venta y en los conteos.' }],
  },
  {
    slug: 'gimnasios',
    name: 'Gimnasios',
    short: 'Membresías, accesos, clases y cobros.',
    icon: 'dumbbell',
    headline: 'Membresías al día, clases llenas.',
    lead: 'Planes de membresía, congelamientos, control de acceso con QR, clases con cupos y reservas, y cobros recurrentes. Con página propia para vender planes y reservar clases.',
    pains: [
      { pain: 'Socios entrando con la membresía vencida.', answer: 'Acceso validado contra el estado de la membresía.' },
      { pain: 'Las clases se llenan de más o quedan vacías.', answer: 'Cupos y reservas desde el celular.' },
      { pain: 'Cobrar las mensualidades es perseguir gente.', answer: 'Recordatorios y pagos en línea.' },
    ],
    day: [
      { moment: '5:30 a. m.', title: 'Entradas', text: 'Check-in con QR y alertas de vencimiento.' },
      { moment: '7:00 a. m.', title: 'Clases', text: 'Asistencia de quienes reservaron.' },
      { moment: '12:00 m.', title: 'Ventas', text: 'Planes, suplementos y renovaciones.' },
      { moment: '8:00 p. m.', title: 'Seguimiento', text: 'Socios por vencer e inactivos.' },
    ],
    modules: ['ventas-pos', 'motor-de-reservas', 'clientes-crm', 'facturacion-electronica', 'nomina', 'reportes'],
    channel: { product: 'motor-de-reservas', title: 'Reserva de clases y venta de planes', text: 'Tus socios reservan clases y renuevan su plan desde tu página.' },
    features: [
      { title: 'Planes de membresía', text: 'Mensuales, trimestrales o por sesiones.', icon: 'wallet' },
      { title: 'Congelamientos', text: 'Pausas con fecha de reactivación.', icon: 'history' },
      { title: 'Acceso con QR', text: 'Check-in y dispositivos de acceso.', icon: 'qr' },
      { title: 'Clases y cupos', text: 'Horarios, instructores y reservas.', icon: 'calendar' },
    ],
    faq: [{ q: '¿Sirve para estudios de yoga o crossfit?', a: 'Sí. Configuras clases, cupos y planes por sesiones.' }],
  },
  {
    slug: 'parqueaderos',
    name: 'Parqueaderos',
    short: 'Entradas, tarifas por tiempo y abonos.',
    icon: 'parking',
    headline: 'Cada carro, cada minuto, cobrado.',
    lead: 'Plano de puestos, entrada y salida con tarifa por minuto, hora o día, mensualidades y cierre por turno, sincronizado con caja y facturación.',
    pains: [
      { pain: 'Tiquetes de papel que se pierden.', answer: 'Entrada registrada por placa con tiquete impreso o digital.' },
      { pain: 'Cobros mal calculados en la salida.', answer: 'Tarifas por minuto, hora o día aplicadas solas.' },
      { pain: 'No sabes cuántos puestos quedan.', answer: 'Ocupación por zona en tiempo real.' },
    ],
    day: [
      { moment: '6:00 a. m.', title: 'Abres turno', text: 'Caja y ocupación inicial.' },
      { moment: '8:00 a. m.', title: 'Hora pico de entradas', text: 'Registro por placa y asignación de zona.' },
      { moment: '6:00 p. m.', title: 'Salidas', text: 'Cobro calculado y factura.' },
      { moment: '10:00 p. m.', title: 'Cierre de turno', text: 'Arqueo y reporte de ocupación.' },
    ],
    modules: ['ventas-pos', 'facturacion-electronica', 'clientes-crm', 'reportes'],
    channel: { product: 'sitio-web', title: 'Página con tarifas y reserva de puesto', text: 'Publica tarifas, horarios y ubicación; vende mensualidades en línea.' },
    features: [
      { title: 'Plano de puestos', text: 'Zonas y tipos de vehículo.', icon: 'layout' },
      { title: 'Tarifas', text: 'Por minuto, hora, día o fracción.', icon: 'wallet' },
      { title: 'Mensualidades', text: 'Abonos con vehículos autorizados.', icon: 'calendar' },
      { title: 'Turnos', text: 'Cierre por operador.', icon: 'user-check' },
    ],
    faq: [{ q: '¿Puedo tener varias tarifas según el vehículo?', a: 'Sí, por tipo de vehículo y horario.' }],
  },
  {
    slug: 'transporte',
    name: 'Transporte',
    short: 'Rutas, tiquetes, flota y envíos.',
    icon: 'bus',
    headline: 'Rutas puntuales, puestos vendidos.',
    lead: 'Rutas y horarios, venta de tiquetes con asiento, flota y conductores, envíos con guía y prueba de entrega, y reportes de ocupación y puntualidad.',
    pains: [
      { pain: 'Sobreventa de puestos en un mismo viaje.', answer: 'Asignación de asiento por viaje.' },
      { pain: 'Encomiendas sin rastro.', answer: 'Guías, estados y prueba de entrega.' },
      { pain: 'Vencimientos de documentos de la flota.', answer: 'Vehículos y licencias con alertas.' },
    ],
    day: [
      { moment: '4:30 a. m.', title: 'Despachos', text: 'Viajes, conductores y manifiestos.' },
      { moment: '9:00 a. m.', title: 'Venta de tiquetes', text: 'En taquilla y en línea con asiento.' },
      { moment: '2:00 p. m.', title: 'Encomiendas', text: 'Recepción, guía y seguimiento.' },
      { moment: '8:00 p. m.', title: 'Liquidación', text: 'Ocupación y recaudo por ruta.' },
    ],
    modules: ['ventas-pos', 'facturacion-electronica', 'nomina', 'reportes'],
    channel: { product: 'sitio-web', title: 'Venta de tiquetes en línea', text: 'Horarios y compra de tiquetes con asiento desde tu página.' },
    features: [
      { title: 'Rutas y horarios', text: 'Paradas, frecuencias y tarifas.', icon: 'map-pin' },
      { title: 'Tiquetes con asiento', text: 'Mapa de puestos por viaje.', icon: 'receipt' },
      { title: 'Envíos', text: 'Guías, manifiestos y entrega.', icon: 'truck' },
      { title: 'Flota', text: 'Vehículos, conductores e incidentes.', icon: 'bus' },
    ],
    faq: [{ q: '¿Manejan encomiendas?', a: 'Sí: guías, manifiestos, intentos de entrega y prueba de entrega.' }],
  },
  {
    slug: 'servicios',
    name: 'Servicios y empresas',
    short: 'Clientes, cotizaciones, proyectos y cobros.',
    icon: 'briefcase',
    headline: 'Del primer contacto al último cobro.',
    lead: 'Oportunidades, cotizaciones, agenda, proyectos con tareas y horas, facturación electrónica y cartera. Para agencias, consultoras, clínicas, talleres y empresas de servicios.',
    pains: [
      { pain: 'Cotizas en Word y pierdes el seguimiento.', answer: 'Cotizaciones ligadas al embudo de ventas.' },
      { pain: 'No sabes si un proyecto deja ganancia.', answer: 'Horas y costos por proyecto.' },
      { pain: 'La cartera se acumula.', answer: 'Cuotas y recordatorios de cobro.' },
    ],
    day: [
      { moment: '8:00 a. m.', title: 'Agenda del día', text: 'Citas, tareas y reuniones.' },
      { moment: '11:00 a. m.', title: 'Cotizas', text: 'Desde la oportunidad, con seguimiento.' },
      { moment: '3:00 p. m.', title: 'Ejecutas', text: 'Proyectos, hitos y horas registradas.' },
      { moment: '6:00 p. m.', title: 'Cobras', text: 'Factura y recordatorio automático.' },
    ],
    modules: ['clientes-crm', 'facturacion-electronica', 'contabilidad', 'chat-omnicanal', 'reportes'],
    channel: { product: 'sitio-web', title: 'Página con agenda de citas', text: 'Presenta tus servicios y deja que tus clientes agenden.' },
    features: [
      { title: 'Cotizaciones', text: 'Con plantillas y aprobación.', icon: 'file-text' },
      { title: 'Proyectos', text: 'Hitos, tareas y equipo.', icon: 'workflow' },
      { title: 'Horas', text: 'Registro de tiempo por tarea.', icon: 'history' },
      { title: 'Cartera', text: 'Cuotas y recordatorios.', icon: 'wallet' },
    ],
    faq: [{ q: '¿Sirve para empresas SaaS con cobros recurrentes?', a: 'Sí: planes, suscripciones y facturación periódica.' }],
  },
]

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug)
}
