/**
 * Integraciones disponibles (tabla `integration_providers` del ERP).
 * Reemplazar las iniciales por logos oficiales cuando exista autorización de uso de marca.
 */
import type { IconName } from '@/lib/site'

export type IntegrationGroup = { id: string; name: string; text: string; icon: IconName; items: { name: string; text: string }[] }

export const INTEGRATION_GROUPS: IntegrationGroup[] = [
  {
    id: 'pagos',
    name: 'Pagos y bancos',
    text: 'Cobra en línea, por QR o con datáfono y concilia tus cuentas.',
    icon: 'credit-card',
    items: [
      { name: 'Wompi', text: 'Pagos en línea en Colombia.' },
      { name: 'PayU', text: 'Tarjetas, PSE y efectivo.' },
      { name: 'Mercado Pago', text: 'Pagos en línea y QR.' },
      { name: 'Bold', text: 'Datáfonos y links de pago.' },
      { name: 'Bre-B', text: 'Pagos inmediatos del Banco de la República.' },
      { name: 'Bancolombia', text: 'Cuentas y movimientos.' },
      { name: 'Redeban', text: 'Datáfonos y adquirencia.' },
      { name: 'Stripe', text: 'Pagos internacionales.' },
      { name: 'PayPal', text: 'Pagos internacionales.' },
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
      { name: 'Rappi', text: 'Pedidos de domicilio.' },
      { name: 'Uber Eats', text: 'Pedidos de domicilio.' },
      { name: 'iFood', text: 'Pedidos de domicilio.' },
      { name: 'Coordinadora', text: 'Guías y seguimiento.' },
      { name: 'Servientrega', text: 'Guías y seguimiento.' },
      { name: 'Interrapidísimo', text: 'Guías y seguimiento.' },
      { name: 'Envía', text: 'Cotización y guías.' },
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
      { name: 'Meta (Facebook e Instagram)', text: 'Mensajes y catálogo.' },
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
