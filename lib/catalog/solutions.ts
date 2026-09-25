/**
 * Soluciones por tipo de negocio. Alimentan /soluciones/[slug] (Figma › Solución · plantilla).
 *
 * Cada solución agrupa una familia de negocios que trabajan parecido (p. ej. todo lo que vende
 * comida y bebida, o todo lo que se reserva por noche), para que nadie sienta que su negocio
 * quedó por fuera. `types` lista ejemplos, no un límite.
 * Los módulos de cada solución apuntan a slugs de lib/catalog/products.ts.
 */
import type { IconName } from '@/lib/site'

export type Solution = {
  slug: string
  name: string
  short: string
  icon: IconName
  /** Ejemplos de negocios de esta familia (se muestran como etiquetas) */
  types: string[]
  headline: string
  lead: string
  pains: { pain: string; answer: string }[]
  /** Un día en el negocio: mañana, tarde y noche */
  day: { moment: string; title: string; text: string }[]
  modules: string[]
  /** Canal digital destacado para esta familia */
  channel: { product: string; title: string; text: string }
  features: { title: string; text: string; icon: IconName }[]
  faq: { q: string; a: string }[]
}

export const SOLUTIONS: Solution[] = [
  {
    slug: 'gastronomia',
    name: 'Restaurantes, bares y cafés',
    short: 'Todo lo que sirve comida y bebida: mesas, barra, mostrador y domicilios.',
    icon: 'utensils',
    types: [
      'Restaurantes',
      'Comidas rápidas',
      'Bares y gastrobares',
      'Discotecas',
      'Cafeterías',
      'Panaderías y pastelerías',
      'Heladerías',
      'Food trucks',
      'Cocinas ocultas',
      'Catering y eventos',
      'Casinos y comedores',
    ],
    headline: 'Del pedido a la cocina, sin papelitos.',
    lead: 'Mesas, barra o mostrador; comandas que llegan a cada estación, recetas que descuentan ingredientes y una caja que cuadra. Con carta en línea, pedidos a domicilio y reservas desde tu página.',
    pains: [
      { pain: 'Las comandas se pierden entre la barra y la cocina.', answer: 'Comandas por estación con su estado en pantalla o impresora.' },
      { pain: 'No sabes cuánto te cuesta cada plato o cada trago.', answer: 'Recetas que descuentan ingredientes y calculan el costo.' },
      { pain: 'Los pedidos llegan por WhatsApp, apps y teléfono.', answer: 'Pedidos de tu tienda en línea y de apps de domicilios en un solo lugar.' },
      { pain: 'Las cuentas abiertas se enredan al final del turno.', answer: 'Cuentas por mesa o por persona, divisibles al pagar.' },
    ],
    day: [
      { moment: 'Antes de abrir', title: 'Revisas insumos y producción', text: 'Alertas de lo que se está acabando y órdenes de producción para cocina u horno.' },
      { moment: 'Hora pico', title: 'Mesas, barra y mostrador', text: 'Cobros rápidos, cuentas divididas, propinas y comandas a cada estación.' },
      { moment: 'Toda la jornada', title: 'Pedidos en línea', text: 'Domicilios y pedidos para recoger desde tu tienda, con estado y responsable.' },
      { moment: 'Al cerrar', title: 'Cierras el día', text: 'Arqueo, ventas por mesero o cajero, mermas y facturas enviadas a la DIAN.' },
    ],
    modules: ['ventas-pos', 'inventario', 'facturacion-electronica', 'tienda-en-linea', 'motor-de-reservas', 'nomina', 'reportes'],
    channel: { product: 'tienda-en-linea', title: 'Tu carta en línea, con pedidos y reservas', text: 'Publica tu menú con fotos, recibe pedidos a domicilio o para recoger y reservas de mesa desde tu página.' },
    features: [
      { title: 'Mesas, barra o mostrador', text: 'Plano de mesas por zona, cuentas abiertas o venta rápida.', icon: 'layout' },
      { title: 'Modificadores', text: 'Término, adiciones y sin ingredientes en cada producto.', icon: 'utensils' },
      { title: 'Recetas y producción', text: 'Costo por plato o por trago y descuento de ingredientes.', icon: 'package' },
      { title: 'Propinas y cargos', text: 'Propina sugerida, cargo por servicio y cover.', icon: 'wallet' },
      { title: 'Varias cajas y estaciones', text: 'Cocina, barra, postres o varios puntos de venta.', icon: 'store' },
      { title: 'Mermas', text: 'Desperdicio y cortesías registrados con motivo.', icon: 'history' },
      { title: 'Botones rápidos', text: 'Tus productos más vendidos a un toque.', icon: 'zap' },
      { title: 'Varias sedes', text: 'Producción central y traslados a cada punto.', icon: 'building' },
    ],
    faq: [
      { q: '¿Sirve si no tengo mesas, solo mostrador?', a: 'Sí. Puedes vender en modo mostrador, por mesas o combinar ambos en el mismo negocio.' },
      { q: '¿Puedo tener comandas en pantalla en la cocina?', a: 'Sí, o en impresoras por estación: cocina, barra o postres.' },
      { q: '¿Recibo pedidos de apps de domicilios?', a: 'Hay conectores con apps de domicilios; revisa en Integraciones cuáles están disponibles.' },
      { q: '¿Puedo producir en una sede y vender en otras?', a: 'Sí, con órdenes de producción y traslados entre bodegas.' },
    ],
  },
  {
    slug: 'hospedaje',
    name: 'Hoteles, hospedaje y turismo',
    short: 'Todo lo que se reserva por noche o por día: habitaciones, cabañas y espacios.',
    icon: 'bed',
    types: [
      'Hoteles',
      'Hostales',
      'Cabañas',
      'Glamping',
      'Fincas y casas vacacionales',
      'Apartamentos turísticos',
      'Moteles',
      'Clubes y centros vacacionales',
      'Posadas y ecohoteles',
      'Agencias y planes turísticos',
    ],
    headline: 'Tu alojamiento lleno, sin reservas cruzadas.',
    lead: 'Calendario de ocupación, check-in y check-out, folios por huésped, aseo y mantenimiento, y sincronización con Booking.com, Expedia y Airbnb. Con motor de reservas propio en tu página.',
    pains: [
      { pain: 'Sobreventas entre los portales y la recepción.', answer: 'Disponibilidad sincronizada en todos los canales.' },
      { pain: 'Pagas comisión por casi todas tus reservas.', answer: 'Motor de reservas directas en tu propia página.' },
      { pain: 'Los consumos del huésped se olvidan al salir.', answer: 'Folios con cargos del restaurante, minibar y servicios.' },
      { pain: 'Las reservas llegan por WhatsApp y se anotan en un cuaderno.', answer: 'Un calendario único, con anticipos y confirmación.' },
    ],
    day: [
      { moment: 'En la mañana', title: 'Revisas llegadas y salidas', text: 'El equipo de aseo sabe qué habitación, cabaña o espacio preparar.' },
      { moment: 'Mediodía', title: 'Check-out', text: 'Folio cerrado y factura electrónica enviada.' },
      { moment: 'En la tarde', title: 'Check-in', text: 'Registro de huéspedes y asignación del espacio.' },
      { moment: 'En la noche', title: 'Reservas nuevas', text: 'Llegan de los portales y de tu página al mismo calendario.' },
    ],
    modules: ['hoteleria', 'motor-de-reservas', 'facturacion-electronica', 'ventas-pos', 'clientes-crm', 'chat-omnicanal', 'reportes'],
    channel: { product: 'motor-de-reservas', title: 'Motor de reservas directo', text: 'Tu página con fotos, tarifas y disponibilidad real para reservar y pagar el anticipo sin intermediarios.' },
    features: [
      { title: 'Calendario de ocupación', text: 'Por tipo de habitación, cabaña o espacio, con bloqueos.', icon: 'calendar' },
      { title: 'Sincronización con portales', text: 'Booking.com, Expedia, Airbnb e iCal.', icon: 'globe' },
      { title: 'Tarifas flexibles', text: 'Por temporada, noche, día o número de personas.', icon: 'wallet' },
      { title: 'Aseo y mantenimiento', text: 'Tareas priorizadas por llegada y salida.', icon: 'sparkles' },
      { title: 'Folios y consumos', text: 'Restaurante, minibar y servicios cargados a la cuenta.', icon: 'receipt' },
      { title: 'Grupos y empresas', text: 'Reservas grupales, planes y cuentas corporativas.', icon: 'building' },
      { title: 'Anticipos en línea', text: 'Pagos con las pasarelas integradas.', icon: 'credit-card' },
      { title: 'Huéspedes frecuentes', text: 'Historial, preferencias y comunicación.', icon: 'users' },
    ],
    faq: [
      { q: '¿Funciona para cabañas, glamping o fincas?', a: 'Sí. Configuras tus espacios, tipos, capacidad y tarifas según tu operación, sin importar si son habitaciones o unidades independientes.' },
      { q: '¿Y si también tengo restaurante o zonas húmedas?', a: 'Los consumos se venden desde el punto de venta y se cargan al folio del huésped.' },
      { q: '¿Puedo cobrar anticipos?', a: 'Sí, desde el motor de reservas con pagos en línea.' },
    ],
  },
  {
    slug: 'espacios-y-eventos',
    name: 'Espacios, canchas y eventos',
    short: 'Todo lo que se reserva por horas: canchas, salones, clubes y actividades.',
    icon: 'ticket',
    types: [
      'Canchas sintéticas',
      'Clubes sociales y deportivos',
      'Salones de eventos',
      'Coworkings y salas de reunión',
      'Parques recreativos',
      'Piscinas y centros recreativos',
      'Escape rooms',
      'Estudios de grabación y fotografía',
      'Tours y experiencias',
    ],
    headline: 'Tus espacios reservados, sin cruces.',
    lead: 'Reservas por hora o por jornada, anticipos en línea, entradas y consumos en el mismo lugar. Tus clientes ven la disponibilidad real en tu página y reservan solos.',
    pains: [
      { pain: 'Dos grupos llegan a la misma cancha a la misma hora.', answer: 'Un calendario por espacio con disponibilidad real.' },
      { pain: 'Reservas que no llegan y el espacio queda vacío.', answer: 'Anticipo en línea y confirmación automática.' },
      { pain: 'La cafetería, el alquiler y las entradas se cobran por separado.', answer: 'Todo en la misma caja y en el mismo reporte.' },
    ],
    day: [
      { moment: 'En la mañana', title: 'Revisas la agenda', text: 'Espacios reservados, anticipos recibidos y lo que falta por cobrar.' },
      { moment: 'Toda la jornada', title: 'Reservas desde tu página', text: 'Tus clientes eligen espacio, fecha y hora, y pagan el anticipo.' },
      { moment: 'Durante el uso', title: 'Consumos y entradas', text: 'Bebidas, alquiler de implementos y entradas en el punto de venta.' },
      { moment: 'Al cerrar', title: 'Cierre', text: 'Ocupación por espacio, ventas y factura electrónica.' },
    ],
    modules: ['motor-de-reservas', 'ventas-pos', 'clientes-crm', 'facturacion-electronica', 'inventario', 'reportes'],
    channel: { product: 'motor-de-reservas', title: 'Reserva de espacios en línea', text: 'Tus clientes reservan cancha, salón o actividad por horas desde tu página y pagan el anticipo.' },
    features: [
      { title: 'Reservas por horas', text: 'Bloques de tiempo por espacio, con duración mínima.', icon: 'calendar' },
      { title: 'Tarifas por horario', text: 'Precios distintos en hora pico, fines de semana o festivos.', icon: 'wallet' },
      { title: 'Anticipos y depósitos', text: 'Pagos en línea al reservar.', icon: 'credit-card' },
      { title: 'Consumos en el lugar', text: 'Cafetería, alquiler de implementos y entradas.', icon: 'store' },
    ],
    faq: [
      { q: '¿Puedo tener varias canchas o salones?', a: 'Sí. Cada espacio tiene su calendario, capacidad y tarifa.' },
      { q: '¿Sirve para clubes con socios?', a: 'Sí. Los socios se registran como clientes y puedes combinar reservas con membresías desde Gimnasios, academias y membresías.' },
    ],
  },
  {
    slug: 'comercio',
    name: 'Tiendas y comercio',
    short: 'Todo lo que vende productos: en local, en línea o al por mayor.',
    icon: 'store',
    types: [
      'Minimercados y supermercados',
      'Ropa, calzado y accesorios',
      'Ferreterías',
      'Droguerías',
      'Tecnología y celulares',
      'Papelerías y librerías',
      'Tiendas de mascotas',
      'Cosméticos y belleza',
      'Muebles y decoración',
      'Distribuidoras y mayoristas',
      'Tiendas solo en línea',
    ],
    headline: 'Vende en tu local y en línea con un solo inventario.',
    lead: 'Punto de venta con código de barras, variantes, precios por lista, inventario por sede, tienda en línea conectada y facturación electrónica desde la misma venta.',
    pains: [
      { pain: 'Vendes en línea algo que ya no está en la tienda.', answer: 'Un solo inventario para la tienda física y la en línea.' },
      { pain: 'Manejar tallas, colores o presentaciones es un caos.', answer: 'Variantes con su propio stock y código de barras.' },
      { pain: 'No sabes qué productos rotan y cuáles se quedan.', answer: 'Reportes de rotación y margen por producto.' },
      { pain: 'Tus clientes mayoristas pagan precios distintos.', answer: 'Listas de precios y crédito por cliente.' },
    ],
    day: [
      { moment: 'Al abrir', title: 'Revisas existencias', text: 'Stock por sede y alertas de reposición.' },
      { moment: 'En el día', title: 'Vendes en mostrador', text: 'Código de barras, pagos mixtos y factura electrónica.' },
      { moment: 'En la tarde', title: 'Llegan pedidos en línea', text: 'Separas, despachas y facturas.' },
      { moment: 'Al cerrar', title: 'Cierre y compras', text: 'Ventas por vendedor y canal, y pedidos a proveedores.' },
    ],
    modules: ['ventas-pos', 'inventario', 'tienda-en-linea', 'facturacion-electronica', 'clientes-crm', 'contabilidad', 'reportes'],
    channel: { product: 'tienda-en-linea', title: 'Tu tienda en línea, lista', text: 'Tu catálogo publicado con carrito, pagos, envíos y cupones, conectado al mismo inventario.' },
    features: [
      { title: 'Variantes', text: 'Tallas, colores, presentaciones y referencias.', icon: 'boxes' },
      { title: 'Código de barras', text: 'En la venta, la compra y los conteos.', icon: 'qr' },
      { title: 'Listas de precios', text: 'Detal, mayorista o por cliente.', icon: 'wallet' },
      { title: 'Multisede', text: 'Inventario y precios por sucursal.', icon: 'building' },
      { title: 'Compras y proveedores', text: 'Órdenes de compra y recepción de mercancía.', icon: 'truck' },
      { title: 'Lotes y vencimientos', text: 'Para alimentos, medicamentos y cosméticos.', icon: 'history' },
      { title: 'Promociones', text: 'Descuentos, cupones y temporadas.', icon: 'sparkles' },
      { title: 'Garantías', text: 'Seriales y reclamaciones.', icon: 'shield' },
    ],
    faq: [
      { q: '¿Puedo usar lector de código de barras?', a: 'Sí, en el punto de venta, en las compras y en los conteos.' },
      { q: '¿Sirve para ventas al por mayor?', a: 'Sí: listas de precios, cotizaciones, crédito y cartera por cliente.' },
      { q: '¿Puedo vender solo en línea, sin local?', a: 'Sí. La tienda en línea funciona sola, con el mismo inventario y facturación.' },
    ],
  },
  {
    slug: 'belleza-y-salud',
    name: 'Belleza, salud y bienestar',
    short: 'Todo lo que trabaja con citas: servicios, profesionales y agenda.',
    icon: 'scissors',
    types: [
      'Peluquerías y barberías',
      'Spas y centros de estética',
      'Uñas y pestañas',
      'Consultorios',
      'Odontología',
      'Fisioterapia',
      'Psicología y terapias',
      'Veterinarias',
      'Ópticas',
      'Tatuajes',
    ],
    headline: 'Tu agenda llena, tus clientes de vuelta.',
    lead: 'Citas por profesional, recordatorios, historial de cada cliente, venta de servicios y productos en la misma caja, y una página donde tus clientes agendan solos.',
    pains: [
      { pain: 'Las citas se agendan por WhatsApp y se cruzan.', answer: 'Agenda por profesional y por servicio, sin cruces.' },
      { pain: 'Clientes que no llegan a su cita.', answer: 'Recordatorios automáticos y anticipo opcional.' },
      { pain: 'No sabes cuánto vende cada profesional.', answer: 'Ventas y servicios por profesional en tus reportes.' },
    ],
    day: [
      { moment: 'Al abrir', title: 'Revisas la agenda', text: 'Citas del día por profesional y por sala.' },
      { moment: 'En el día', title: 'Atiendes y cobras', text: 'Servicios y productos en la misma cuenta, con factura.' },
      { moment: 'Toda la jornada', title: 'Nuevas citas en línea', text: 'Tus clientes eligen servicio, profesional y hora.' },
      { moment: 'Al cerrar', title: 'Seguimiento', text: 'Ventas por profesional y clientes para volver a contactar.' },
    ],
    modules: ['motor-de-reservas', 'ventas-pos', 'clientes-crm', 'inventario', 'facturacion-electronica', 'chat-omnicanal', 'reportes'],
    channel: { product: 'motor-de-reservas', title: 'Agenda de citas en tu página', text: 'Tus clientes eligen el servicio, el profesional y la hora, y reciben su confirmación.' },
    features: [
      { title: 'Agenda por profesional', text: 'Horarios, servicios y salas de cada persona.', icon: 'calendar' },
      { title: 'Recordatorios', text: 'Por correo o WhatsApp antes de cada cita.', icon: 'bell' },
      { title: 'Historial del cliente', text: 'Servicios, compras y notas de cada visita.', icon: 'users' },
      { title: 'Servicios y productos', text: 'En la misma cuenta, con inventario de insumos.', icon: 'package' },
    ],
    faq: [
      { q: '¿Mis clientes pueden agendar solos?', a: 'Sí, desde tu página, eligiendo servicio, profesional y hora disponible.' },
      { q: '¿Puedo vender paquetes de sesiones?', a: 'Sí, como productos o planes que el cliente consume en varias visitas.' },
    ],
  },
  {
    slug: 'gimnasios-y-academias',
    name: 'Gimnasios, academias y membresías',
    short: 'Todo lo que cobra planes: socios, clases, accesos y renovaciones.',
    icon: 'dumbbell',
    types: [
      'Gimnasios',
      'Entrenamiento funcional',
      'Yoga, pilates y danza',
      'Academias de idiomas y cursos',
      'Escuelas deportivas',
      'Clubes con socios',
      'Artes marciales',
      'Centros de natación',
    ],
    headline: 'Membresías al día, clases llenas.',
    lead: 'Planes de membresía, congelamientos, control de acceso con QR, clases con cupos y reservas, y cobros recurrentes. Con página propia para vender planes y reservar clases.',
    pains: [
      { pain: 'Socios entrando con la membresía vencida.', answer: 'Acceso validado contra el estado de la membresía.' },
      { pain: 'Las clases se llenan de más o quedan vacías.', answer: 'Cupos y reservas desde el celular.' },
      { pain: 'Cobrar las mensualidades es perseguir gente.', answer: 'Recordatorios y pagos en línea.' },
    ],
    day: [
      { moment: 'Al abrir', title: 'Entradas', text: 'Check-in con QR y alertas de vencimiento.' },
      { moment: 'En el día', title: 'Clases', text: 'Asistencia de quienes reservaron.' },
      { moment: 'Mediodía', title: 'Ventas', text: 'Planes, productos y renovaciones.' },
      { moment: 'Al cerrar', title: 'Seguimiento', text: 'Socios por vencer e inactivos.' },
    ],
    modules: ['ventas-pos', 'motor-de-reservas', 'clientes-crm', 'facturacion-electronica', 'nomina', 'reportes'],
    channel: { product: 'motor-de-reservas', title: 'Reserva de clases y venta de planes', text: 'Tus socios y estudiantes reservan clases y renuevan su plan desde tu página.' },
    features: [
      { title: 'Planes y membresías', text: 'Mensuales, trimestrales, anuales o por sesiones.', icon: 'wallet' },
      { title: 'Congelamientos', text: 'Pausas con fecha de reactivación.', icon: 'history' },
      { title: 'Acceso con QR', text: 'Check-in y dispositivos de acceso.', icon: 'qr' },
      { title: 'Clases y cupos', text: 'Horarios, instructores y reservas.', icon: 'calendar' },
    ],
    faq: [
      { q: '¿Sirve para academias o cursos, no solo gimnasios?', a: 'Sí. Los cursos se manejan como planes con horarios, cupos y asistencia.' },
      { q: '¿Puedo cobrar por sesiones sueltas?', a: 'Sí. Puedes vender planes por número de sesiones o entradas individuales.' },
    ],
  },
  {
    slug: 'movilidad',
    name: 'Parqueaderos, transporte y movilidad',
    short: 'Todo lo que mueve o guarda vehículos: puestos, rutas, tiquetes y envíos.',
    icon: 'parking',
    types: [
      'Parqueaderos',
      'Lavaderos de vehículos',
      'Transporte de pasajeros',
      'Transporte especial y turístico',
      'Encomiendas y mensajería',
      'Alquiler de vehículos',
      'Talleres y servitecas',
    ],
    headline: 'Cada vehículo, cada minuto, cobrado.',
    lead: 'Entradas y salidas por placa con tarifa por tiempo, mensualidades, rutas y tiquetes con asiento, envíos con guía, flota y conductores, sincronizados con caja y facturación.',
    pains: [
      { pain: 'Tiquetes de papel que se pierden.', answer: 'Entrada registrada por placa con tiquete impreso o digital.' },
      { pain: 'Cobros mal calculados en la salida.', answer: 'Tarifas por minuto, hora o día aplicadas solas.' },
      { pain: 'Sobreventa de puestos en un mismo viaje.', answer: 'Asignación de asiento por viaje.' },
      { pain: 'Vencimientos de documentos de la flota.', answer: 'Vehículos y licencias con alertas.' },
    ],
    day: [
      { moment: 'Al abrir', title: 'Abres turno', text: 'Caja, ocupación inicial y despachos del día.' },
      { moment: 'Hora pico', title: 'Entradas y ventas', text: 'Registro por placa, tiquetes en taquilla y en línea.' },
      { moment: 'En la tarde', title: 'Envíos y salidas', text: 'Guías, entregas y cobros calculados.' },
      { moment: 'Al cerrar', title: 'Cierre de turno', text: 'Arqueo, ocupación y recaudo por ruta o por operador.' },
    ],
    modules: ['ventas-pos', 'facturacion-electronica', 'clientes-crm', 'nomina', 'reportes'],
    channel: { product: 'sitio-web', title: 'Tarifas, mensualidades y tiquetes en línea', text: 'Publica tarifas, horarios y ubicación; vende mensualidades o tiquetes con asiento desde tu página.' },
    features: [
      { title: 'Plano de puestos', text: 'Zonas y tipos de vehículo.', icon: 'layout' },
      { title: 'Tarifas por tiempo', text: 'Por minuto, hora, día o fracción.', icon: 'wallet' },
      { title: 'Mensualidades', text: 'Abonos con vehículos autorizados.', icon: 'calendar' },
      { title: 'Rutas y tiquetes', text: 'Horarios, paradas y mapa de puestos.', icon: 'map-pin' },
      { title: 'Envíos', text: 'Guías, manifiestos y prueba de entrega.', icon: 'truck' },
      { title: 'Flota', text: 'Vehículos, conductores e incidentes.', icon: 'bus' },
      { title: 'Turnos', text: 'Cierre por operador.', icon: 'user-check' },
      { title: 'Servicios al vehículo', text: 'Lavado, parqueo y servicios en la misma cuenta.', icon: 'sparkles' },
    ],
    faq: [
      { q: '¿Puedo tener varias tarifas según el vehículo?', a: 'Sí, por tipo de vehículo y horario.' },
      { q: '¿Manejan encomiendas?', a: 'Sí: guías, manifiestos, intentos de entrega y prueba de entrega.' },
    ],
  },
  {
    slug: 'servicios',
    name: 'Servicios y empresas',
    short: 'Todo lo que vende conocimiento o trabajo: proyectos, cotizaciones y cobros.',
    icon: 'briefcase',
    types: [
      'Agencias y consultoras',
      'Contadores y abogados',
      'Construcción y mantenimiento',
      'Talleres y servicio técnico',
      'Educación y colegios',
      'Empresas de software',
      'Inmobiliarias',
      'Seguridad y aseo',
      'Fundaciones y ONG',
    ],
    headline: 'Del primer contacto al último cobro.',
    lead: 'Oportunidades, cotizaciones, agenda, proyectos con tareas y horas, facturación electrónica, contabilidad y cartera, en el mismo lugar.',
    pains: [
      { pain: 'Cotizas en Word y pierdes el seguimiento.', answer: 'Cotizaciones ligadas al embudo de ventas.' },
      { pain: 'No sabes si un proyecto deja ganancia.', answer: 'Horas y costos por proyecto.' },
      { pain: 'La cartera se acumula.', answer: 'Cuotas y recordatorios de cobro.' },
    ],
    day: [
      { moment: 'En la mañana', title: 'Agenda del día', text: 'Citas, tareas y reuniones.' },
      { moment: 'Mediodía', title: 'Cotizas', text: 'Desde la oportunidad, con seguimiento.' },
      { moment: 'En la tarde', title: 'Ejecutas', text: 'Proyectos, hitos y horas registradas.' },
      { moment: 'Al cerrar', title: 'Cobras', text: 'Factura y recordatorio automático.' },
    ],
    modules: ['clientes-crm', 'facturacion-electronica', 'contabilidad', 'nomina', 'chat-omnicanal', 'reportes'],
    channel: { product: 'sitio-web', title: 'Página con agenda y formulario', text: 'Presenta tus servicios, recibe solicitudes y deja que tus clientes agenden.' },
    features: [
      { title: 'Cotizaciones', text: 'Con plantillas y aprobación.', icon: 'file-text' },
      { title: 'Proyectos', text: 'Hitos, tareas y equipo.', icon: 'workflow' },
      { title: 'Horas', text: 'Registro de tiempo por tarea.', icon: 'history' },
      { title: 'Cartera', text: 'Cuotas y recordatorios.', icon: 'wallet' },
    ],
    faq: [
      { q: '¿Sirve para empresas con cobros recurrentes?', a: 'Sí: planes, suscripciones y facturación periódica.' },
      { q: '¿Mi contador puede entrar?', a: 'Sí, con un rol que solo ve contabilidad y reportes.' },
    ],
  },
]

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug)
}
