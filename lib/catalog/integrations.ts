/**
 * Integraciones disponibles (tablas `integration_providers` y `country_payment_methods` del ERP).
 * `countries` limita un proveedor a los países donde opera; sin `countries` se muestra en todos.
 * Reemplazar las iniciales por logos oficiales cuando exista autorización de uso de marca.
 * Texto base en español; traducciones en content/{en,pt,fr}/integrations.ts (por id de grupo y nombre).
 */
import type { CountryCode } from '@/i18n/markets'
import type { IconName } from '@/lib/site'

export type IntegrationItem = { name: string; text: string; countries?: CountryCode[] }
export type IntegrationGroup = { id: string; name: string; text: string; icon: IconName; items: IntegrationItem[] }

const LATAM: CountryCode[] = ['COL', 'MEX', 'CHL', 'BRA']

export const INTEGRATION_GROUPS: IntegrationGroup[] = [
  {
    id: 'pagos',
    name: 'Pagos y bancos',
    text: 'Cobra en línea, por QR o con datáfono y concilia tus cuentas.',
    icon: 'credit-card',
    items: [
      { name: 'Wompi', text: 'Pagos en línea.', countries: ['COL'] },
      { name: 'PSE', text: 'Débito desde cuentas bancarias.', countries: ['COL'] },
      { name: 'Nequi', text: 'Pagos desde la billetera.', countries: ['COL'] },
      { name: 'DaviPlata', text: 'Pagos desde la billetera.', countries: ['COL'] },
      { name: 'SPEI', text: 'Transferencias inmediatas.', countries: ['MEX'] },
      { name: 'OXXO Pay', text: 'Pagos en efectivo en tienda.', countries: ['MEX'] },
      { name: 'Conekta', text: 'Tarjetas y pagos en línea.', countries: ['MEX'] },
      { name: 'PayU', text: 'Tarjetas y medios locales.', countries: LATAM },
      { name: 'Mercado Pago', text: 'Pagos en línea y QR.', countries: LATAM },
      { name: 'Bold', text: 'Datáfonos y links de pago.', countries: ['COL'] },
      { name: 'Bre-B', text: 'Pagos inmediatos del Banco de la República.', countries: ['COL'] },
      { name: 'Bancolombia', text: 'Cuentas y movimientos.', countries: ['COL'] },
      { name: 'Redeban', text: 'Datáfonos y adquirencia.', countries: ['COL'] },
      { name: 'Stripe', text: 'Pagos internacionales.' },
      { name: 'PayPal', text: 'Pagos internacionales.' },
      { name: 'Venmo', text: 'Pagos entre personas.', countries: ['USA'] },
      { name: 'Cash App', text: 'Pagos entre personas.', countries: ['USA'] },
      { name: 'Zelle', text: 'Transferencias bancarias.', countries: ['USA'] },
    ],
  },
  {
    id: 'reservas',
    name: 'Canales de reserva',
    text: 'Disponibilidad y reservas sincronizadas con tu calendario.',
    icon: 'bed',
    items: [
      { name: 'Booking.com', text: 'Reservas, tarifas y disponibilidad.' },
      { name: 'Expedia Group', text: 'Reservas y disponibilidad.' },
      { name: 'Airbnb', text: 'Calendario y reservas.' },
      { name: 'Google Vacation Rentals', text: 'Presencia en Google.' },
      { name: 'TripAdvisor', text: 'Presencia y reseñas.' },
    ],
  },
  {
    id: 'domicilios',
    name: 'Domicilios y envíos',
    text: 'Pedidos de apps y guías de transportadoras.',
    icon: 'truck',
    items: [
      { name: 'Rappi', text: 'Pedidos de domicilio.', countries: LATAM },
      { name: 'Uber Eats', text: 'Pedidos de domicilio.' },
      { name: 'iFood', text: 'Pedidos de domicilio.', countries: ['BRA'] },
      { name: 'Coordinadora', text: 'Guías y seguimiento.', countries: ['COL'] },
      { name: 'Servientrega', text: 'Guías y seguimiento.', countries: ['COL'] },
      { name: 'Interrapidísimo', text: 'Guías y seguimiento.', countries: ['COL'] },
      { name: 'Envía', text: 'Cotización y guías.', countries: ['COL', 'MEX'] },
    ],
  },
  {
    id: 'mensajeria',
    name: 'Mensajería',
    text: 'Conversa y notifica a tus clientes.',
    icon: 'message',
    items: [
      { name: 'WhatsApp Business', text: 'Chat, campañas y notificaciones.' },
      { name: 'Twilio', text: 'SMS y llamadas.' },
      { name: 'SendGrid', text: 'Correos transaccionales.' },
    ],
  },
  {
    id: 'marketing',
    name: 'Redes y publicidad',
    text: 'Catálogo, mensajes y campañas.',
    icon: 'sparkles',
    items: [
      { name: 'Meta (Facebook, Instagram)', text: 'Mensajes y catálogo.' },
      { name: 'TikTok Business', text: 'Catálogo y campañas.' },
      { name: 'Google Ads', text: 'Conversiones y campañas.' },
    ],
  },
]

export const DEVELOPER_TOOLS = [
  { title: 'API', text: 'Consulta y crea información de tu organización con llaves de acceso.', icon: 'plug' as IconName },
  { title: 'Webhooks', text: 'Recibe eventos cuando algo pasa: una venta, una reserva, un pago.', icon: 'workflow' as IconName },
  { title: 'Sincronizaciones', text: 'Trabajos programados con registro de cada ejecución.', icon: 'history' as IconName },
]
