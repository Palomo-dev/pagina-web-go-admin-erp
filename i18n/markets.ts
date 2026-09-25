/**
 * Mercados del sitio: idioma + país.
 *
 * GO Admin opera en 10 países (tabla `countries` del ERP) y en 4 idiomas (es, en, pt, fr,
 * igual que `messages/` del ERP). Cada mercado es una combinación idioma-país con su propia URL,
 * para que el contenido fiscal, la moneda y los medios de pago sean los de ese país:
 *
 *   /                → es-CO (predeterminado)     /en-us, /en-gb, /en-ca, /en-au, /en-jp
 *   /es-mx, /es-cl, /es-es                        /fr-ca, /pt-br
 *
 * Los datos de cada país se copiaron de la configuración del ERP (countries,
 * country_identification_types, country_payment_methods, tax_templates, plans).
 * El sitio NO consulta la base de datos del ERP: si algo cambia allá, se actualiza aquí.
 */

export type Language = 'es' | 'en' | 'pt' | 'fr'
export type CountryCode = 'COL' | 'MEX' | 'CHL' | 'ESP' | 'BRA' | 'USA' | 'CAN' | 'GBR' | 'AUS' | 'JPN'

/**
 * Estado de la facturación electrónica en el país:
 * - integrated: GO Admin emite y valida ante la autoridad (hoy solo Colombia, vía proveedor tecnológico).
 * - not_integrated: el país exige o usa un sistema electrónico, pero GO Admin aún no está conectado.
 * - not_mandatory: no hay un sistema nacional obligatorio de factura electrónica.
 */
export type EInvoiceStatus = 'integrated' | 'not_integrated' | 'not_mandatory'

type Localized = Record<Language, string>

export type Country = {
  code: CountryCode
  iso2: string
  name: Localized
  /** "en Colombia" / "au Mexique": preposición correcta en cada idioma */
  inCountry: Localized
  currency: string
  /** Moneda en la que se cobran los planes de GO Admin en este país */
  planCurrency: 'COP' | 'USD'
  phoneCode: string
  fiscal: {
    status: EInvoiceStatus
    /** Autoridad tributaria, como se conoce en el país */
    authority: Localized
    /** La autoridad con artículo, para frases como "ante la DIAN" / "ante el SAT" */
    theAuthority: Localized
    /** Sistema o documento electrónico del país (vacío si no aplica) */
    system: Localized
    /** Nombre del producto de facturación en este país */
    product: Localized
    /** Identificador del documento validado (CUFE, UUID, clave de acceso…) */
    docId: string
    /** Identificación tributaria de empresas */
    taxId: string
    /** Impuesto principal al consumo y su tarifa general (tax_templates), para ejemplos */
    mainTax: { label: Localized; rate: number }
    /** Identificación ficticia con el formato del país, para ejemplos */
    sampleTaxId: string
    /** Impuestos al consumo principales (de tax_templates) */
    taxes: Localized
    /** Plan de cuentas de referencia */
    chart: Localized
    /** Nómina electrónica ante la autoridad (solo donde GO Admin la emite) */
    ePayroll: boolean
  }
  /** Medios de pago habilitados en el ERP para el país (country_payment_methods). Los genéricos se traducen con PAYMENT_LABELS. */
  payments: string[]
}

export const COUNTRIES: Record<CountryCode, Country> = {
  COL: {
    code: 'COL', iso2: 'CO', currency: 'COP', planCurrency: 'COP', phoneCode: '+57',
    name: { es: 'Colombia', en: 'Colombia', pt: 'Colômbia', fr: 'Colombie' },
    inCountry: { es: 'en Colombia', en: 'in Colombia', pt: 'na Colômbia', fr: 'en Colombie' },
    fiscal: {
      status: 'integrated',
      authority: { es: 'DIAN', en: 'DIAN', pt: 'DIAN', fr: 'DIAN' },
      theAuthority: { es: 'la DIAN', en: 'DIAN', pt: 'a DIAN', fr: 'la DIAN' },
      system: { es: 'factura electrónica', en: 'electronic invoice', pt: 'fatura eletrônica', fr: 'facture électronique' },
      product: { es: 'Facturación electrónica', en: 'Electronic invoicing', pt: 'Faturamento eletrônico', fr: 'Facturation électronique' },
      docId: 'CUFE',
      taxId: 'NIT',
      mainTax: { label: { es: 'IVA', en: 'VAT', pt: 'IVA', fr: 'TVA' }, rate: 19 },
      sampleTaxId: '900.000.000-0',
      taxes: { es: 'IVA, INC y retenciones', en: 'VAT (IVA), INC and withholdings', pt: 'IVA, INC e retenções', fr: 'TVA (IVA), INC et retenues' },
      chart: { es: 'PUC colombiano', en: 'Colombian chart of accounts (PUC)', pt: 'plano de contas colombiano (PUC)', fr: 'plan comptable colombien (PUC)' },
      ePayroll: true,
    },
    payments: ['cash', 'card', 'transfer', 'Nequi', 'Wompi', 'DaviPlata', 'PSE', 'PayU', 'Mercado Pago', 'PayPal'],
  },
  MEX: {
    code: 'MEX', iso2: 'MX', currency: 'MXN', planCurrency: 'USD', phoneCode: '+52',
    name: { es: 'México', en: 'Mexico', pt: 'México', fr: 'Mexique' },
    inCountry: { es: 'en México', en: 'in Mexico', pt: 'no México', fr: 'au Mexique' },
    fiscal: {
      status: 'not_integrated',
      authority: { es: 'SAT', en: 'SAT', pt: 'SAT', fr: 'SAT' },
      theAuthority: { es: 'el SAT', en: 'the SAT', pt: 'o SAT', fr: 'le SAT' },
      system: { es: 'CFDI 4.0', en: 'CFDI 4.0', pt: 'CFDI 4.0', fr: 'CFDI 4.0' },
      product: { es: 'Facturación electrónica (CFDI)', en: 'E-invoicing (CFDI)', pt: 'Faturamento eletrônico (CFDI)', fr: 'Facturation électronique (CFDI)' },
      docId: 'UUID',
      taxId: 'RFC',
      mainTax: { label: { es: 'IVA', en: 'VAT', pt: 'IVA', fr: 'TVA' }, rate: 16 },
      sampleTaxId: 'CAR210101AB1',
      taxes: { es: 'IVA e IEPS', en: 'VAT (IVA) and IEPS', pt: 'IVA e IEPS', fr: 'TVA (IVA) et IEPS' },
      chart: { es: 'catálogo de cuentas', en: 'chart of accounts', pt: 'plano de contas', fr: 'plan comptable' },
      ePayroll: false,
    },
    payments: ['cash', 'card', 'transfer', 'SPEI', 'OXXO Pay', 'Conekta', 'Stripe', 'Mercado Pago', 'PayU', 'PayPal'],
  },
  CHL: {
    code: 'CHL', iso2: 'CL', currency: 'CLP', planCurrency: 'USD', phoneCode: '+56',
    name: { es: 'Chile', en: 'Chile', pt: 'Chile', fr: 'Chili' },
    inCountry: { es: 'en Chile', en: 'in Chile', pt: 'no Chile', fr: 'au Chili' },
    fiscal: {
      status: 'not_integrated',
      authority: { es: 'SII', en: 'SII', pt: 'SII', fr: 'SII' },
      theAuthority: { es: 'el SII', en: 'the SII', pt: 'o SII', fr: 'le SII' },
      system: { es: 'boleta y factura electrónica (DTE)', en: 'electronic receipts and invoices (DTE)', pt: 'boleta e fatura eletrônica (DTE)', fr: 'reçus et factures électroniques (DTE)' },
      product: { es: 'Boleta y factura electrónica', en: 'Electronic receipts and invoices', pt: 'Boleta e fatura eletrônica', fr: 'Reçus et factures électroniques' },
      docId: 'folio',
      taxId: 'RUT',
      mainTax: { label: { es: 'IVA', en: 'VAT', pt: 'IVA', fr: 'TVA' }, rate: 19 },
      sampleTaxId: '76.000.000-0',
      taxes: { es: 'IVA', en: 'VAT (IVA)', pt: 'IVA', fr: 'TVA (IVA)' },
      chart: { es: 'plan de cuentas', en: 'chart of accounts', pt: 'plano de contas', fr: 'plan comptable' },
      ePayroll: false,
    },
    payments: ['cash', 'card', 'transfer', 'Mercado Pago', 'PayU', 'PayPal'],
  },
  ESP: {
    code: 'ESP', iso2: 'ES', currency: 'EUR', planCurrency: 'USD', phoneCode: '+34',
    name: { es: 'España', en: 'Spain', pt: 'Espanha', fr: 'Espagne' },
    inCountry: { es: 'en España', en: 'in Spain', pt: 'na Espanha', fr: 'en Espagne' },
    fiscal: {
      status: 'not_integrated',
      authority: { es: 'Agencia Tributaria', en: 'Spanish Tax Agency (AEAT)', pt: 'Agência Tributária (AEAT)', fr: 'Agence fiscale (AEAT)' },
      theAuthority: { es: 'la Agencia Tributaria', en: 'the Spanish Tax Agency', pt: 'a Agência Tributária', fr: "l’Agence fiscale espagnole" },
      system: { es: 'Verifactu', en: 'Verifactu', pt: 'Verifactu', fr: 'Verifactu' },
      product: { es: 'Facturación (Verifactu)', en: 'Invoicing (Verifactu)', pt: 'Faturamento (Verifactu)', fr: 'Facturation (Verifactu)' },
      docId: 'QR',
      taxId: 'NIF',
      mainTax: { label: { es: 'IVA', en: 'VAT', pt: 'IVA', fr: 'TVA' }, rate: 21 },
      sampleTaxId: 'B00000000',
      taxes: { es: 'IVA', en: 'VAT (IVA)', pt: 'IVA', fr: 'TVA (IVA)' },
      chart: { es: 'Plan General Contable', en: 'Spanish chart of accounts (PGC)', pt: 'plano de contas espanhol (PGC)', fr: 'plan comptable espagnol (PGC)' },
      ePayroll: false,
    },
    payments: ['cash', 'card', 'transfer', 'Stripe', 'PayPal'],
  },
  BRA: {
    code: 'BRA', iso2: 'BR', currency: 'BRL', planCurrency: 'USD', phoneCode: '+55',
    name: { es: 'Brasil', en: 'Brazil', pt: 'Brasil', fr: 'Brésil' },
    inCountry: { es: 'en Brasil', en: 'in Brazil', pt: 'no Brasil', fr: 'au Brésil' },
    fiscal: {
      status: 'not_integrated',
      authority: { es: 'SEFAZ', en: 'SEFAZ', pt: 'SEFAZ', fr: 'SEFAZ' },
      theAuthority: { es: 'la SEFAZ', en: 'SEFAZ', pt: 'a SEFAZ', fr: 'la SEFAZ' },
      system: { es: 'NF-e, NFC-e y NFS-e', en: 'NF-e, NFC-e and NFS-e', pt: 'NF-e, NFC-e e NFS-e', fr: 'NF-e, NFC-e et NFS-e' },
      product: { es: 'Nota fiscal electrónica', en: 'Electronic fiscal notes (NF-e)', pt: 'Nota fiscal eletrônica', fr: 'Notes fiscales électroniques (NF-e)' },
      docId: 'chave de acesso',
      taxId: 'CNPJ',
      mainTax: { label: { es: 'ICMS', en: 'ICMS', pt: 'ICMS', fr: 'ICMS' }, rate: 18 },
      sampleTaxId: '00.000.000/0001-00',
      taxes: { es: 'ICMS e ISS', en: 'ICMS and ISS', pt: 'ICMS e ISS', fr: 'ICMS et ISS' },
      chart: { es: 'plan de cuentas', en: 'chart of accounts', pt: 'plano de contas', fr: 'plan comptable' },
      ePayroll: false,
    },
    payments: ['cash', 'card', 'transfer', 'Mercado Pago', 'Stripe', 'PayU', 'PayPal'],
  },
  USA: {
    code: 'USA', iso2: 'US', currency: 'USD', planCurrency: 'USD', phoneCode: '+1',
    name: { es: 'Estados Unidos', en: 'United States', pt: 'Estados Unidos', fr: 'États-Unis' },
    inCountry: { es: 'en Estados Unidos', en: 'in the United States', pt: 'nos Estados Unidos', fr: 'aux États-Unis' },
    fiscal: {
      status: 'not_mandatory',
      authority: { es: 'IRS', en: 'IRS', pt: 'IRS', fr: 'IRS' },
      theAuthority: { es: 'el IRS', en: 'the IRS', pt: 'o IRS', fr: "l’IRS" },
      system: { es: '', en: '', pt: '', fr: '' },
      product: { es: 'Facturación', en: 'Invoicing', pt: 'Faturamento', fr: 'Facturation' },
      docId: '',
      taxId: 'EIN',
      mainTax: { label: { es: 'Sales tax', en: 'Sales tax', pt: 'Sales tax', fr: 'Taxe de vente' }, rate: 8 },
      sampleTaxId: '00-0000000',
      taxes: { es: 'sales tax', en: 'sales tax', pt: 'sales tax', fr: 'taxe de vente (sales tax)' },
      chart: { es: 'plan de cuentas', en: 'chart of accounts', pt: 'plano de contas', fr: 'plan comptable' },
      ePayroll: false,
    },
    payments: ['cash', 'card', 'transfer', 'check', 'Stripe', 'PayPal', 'Venmo', 'Cash App', 'Zelle'],
  },
  CAN: {
    code: 'CAN', iso2: 'CA', currency: 'CAD', planCurrency: 'USD', phoneCode: '+1',
    name: { es: 'Canadá', en: 'Canada', pt: 'Canadá', fr: 'Canada' },
    inCountry: { es: 'en Canadá', en: 'in Canada', pt: 'no Canadá', fr: 'au Canada' },
    fiscal: {
      status: 'not_mandatory',
      authority: { es: 'CRA', en: 'CRA', pt: 'CRA', fr: 'ARC' },
      theAuthority: { es: 'la CRA', en: 'the CRA', pt: 'a CRA', fr: "l’ARC" },
      system: { es: '', en: '', pt: '', fr: '' },
      product: { es: 'Facturación', en: 'Invoicing', pt: 'Faturamento', fr: 'Facturation' },
      docId: '',
      taxId: 'BN',
      mainTax: { label: { es: 'GST', en: 'GST', pt: 'GST', fr: 'TPS' }, rate: 5 },
      sampleTaxId: '000000000 RT0001',
      taxes: { es: 'GST/HST', en: 'GST/HST', pt: 'GST/HST', fr: 'TPS/TVH' },
      chart: { es: 'plan de cuentas', en: 'chart of accounts', pt: 'plano de contas', fr: 'plan comptable' },
      ePayroll: false,
    },
    payments: ['cash', 'card', 'transfer', 'check', 'Stripe', 'PayPal'],
  },
  GBR: {
    code: 'GBR', iso2: 'GB', currency: 'GBP', planCurrency: 'USD', phoneCode: '+44',
    name: { es: 'Reino Unido', en: 'United Kingdom', pt: 'Reino Unido', fr: 'Royaume-Uni' },
    inCountry: { es: 'en el Reino Unido', en: 'in the United Kingdom', pt: 'no Reino Unido', fr: 'au Royaume-Uni' },
    fiscal: {
      status: 'not_integrated',
      authority: { es: 'HMRC', en: 'HMRC', pt: 'HMRC', fr: 'HMRC' },
      theAuthority: { es: 'el HMRC', en: 'HMRC', pt: 'o HMRC', fr: 'le HMRC' },
      system: { es: 'Making Tax Digital', en: 'Making Tax Digital', pt: 'Making Tax Digital', fr: 'Making Tax Digital' },
      product: { es: 'Facturación con VAT', en: 'VAT invoicing', pt: 'Faturamento com VAT', fr: 'Facturation avec TVA (VAT)' },
      docId: '',
      taxId: 'VAT number',
      mainTax: { label: { es: 'VAT', en: 'VAT', pt: 'VAT', fr: 'TVA' }, rate: 20 },
      sampleTaxId: 'GB000000000',
      taxes: { es: 'VAT', en: 'VAT', pt: 'VAT', fr: 'TVA (VAT)' },
      chart: { es: 'plan de cuentas', en: 'chart of accounts', pt: 'plano de contas', fr: 'plan comptable' },
      ePayroll: false,
    },
    payments: ['cash', 'card', 'transfer', 'check', 'Stripe', 'PayPal'],
  },
  AUS: {
    code: 'AUS', iso2: 'AU', currency: 'AUD', planCurrency: 'USD', phoneCode: '+61',
    name: { es: 'Australia', en: 'Australia', pt: 'Austrália', fr: 'Australie' },
    inCountry: { es: 'en Australia', en: 'in Australia', pt: 'na Austrália', fr: 'en Australie' },
    fiscal: {
      status: 'not_integrated',
      authority: { es: 'ATO', en: 'ATO', pt: 'ATO', fr: 'ATO' },
      theAuthority: { es: 'la ATO', en: 'the ATO', pt: 'a ATO', fr: "l’ATO" },
      system: { es: 'eInvoicing (Peppol)', en: 'eInvoicing (Peppol)', pt: 'eInvoicing (Peppol)', fr: 'eInvoicing (Peppol)' },
      product: { es: 'Facturación con GST', en: 'GST invoicing', pt: 'Faturamento com GST', fr: 'Facturation avec GST' },
      docId: '',
      taxId: 'ABN',
      mainTax: { label: { es: 'GST', en: 'GST', pt: 'GST', fr: 'GST' }, rate: 10 },
      sampleTaxId: '00 000 000 000',
      taxes: { es: 'GST', en: 'GST', pt: 'GST', fr: 'GST' },
      chart: { es: 'plan de cuentas', en: 'chart of accounts', pt: 'plano de contas', fr: 'plan comptable' },
      ePayroll: false,
    },
    payments: ['cash', 'card', 'transfer', 'check', 'Stripe', 'PayPal'],
  },
  JPN: {
    code: 'JPN', iso2: 'JP', currency: 'JPY', planCurrency: 'USD', phoneCode: '+81',
    name: { es: 'Japón', en: 'Japan', pt: 'Japão', fr: 'Japon' },
    inCountry: { es: 'en Japón', en: 'in Japan', pt: 'no Japão', fr: 'au Japon' },
    fiscal: {
      status: 'not_integrated',
      authority: { es: 'Agencia Nacional de Impuestos', en: 'National Tax Agency', pt: 'Agência Nacional de Impostos', fr: 'Agence nationale des impôts' },
      theAuthority: { es: 'la Agencia Nacional de Impuestos', en: 'the National Tax Agency', pt: 'a Agência Nacional de Impostos', fr: "l’Agence nationale des impôts" },
      system: { es: 'Sistema de facturas calificadas', en: 'Qualified Invoice System', pt: 'Sistema de faturas qualificadas', fr: 'Système de factures qualifiées' },
      product: { es: 'Facturas calificadas', en: 'Qualified invoices', pt: 'Faturas qualificadas', fr: 'Factures qualifiées' },
      docId: '',
      taxId: 'Corporate Number',
      mainTax: { label: { es: 'Impuesto al consumo', en: 'Consumption tax', pt: 'Imposto sobre consumo', fr: 'Taxe à la consommation' }, rate: 10 },
      sampleTaxId: 'T0000000000000',
      taxes: { es: 'impuesto al consumo', en: 'consumption tax', pt: 'imposto sobre consumo', fr: 'taxe à la consommation' },
      chart: { es: 'plan de cuentas', en: 'chart of accounts', pt: 'plano de contas', fr: 'plan comptable' },
      ePayroll: false,
    },
    payments: ['cash', 'card', 'transfer', 'Stripe', 'PayPal'],
  },
}

export type Market = {
  /** Identificador BCP 47 usado como locale de next-intl */
  id: MarketId
  language: Language
  country: CountryCode
  /** Segmento de URL ('' para el mercado predeterminado) */
  prefix: string
  /** Etiqueta de Open Graph (es_CO) */
  og: string
}

export const MARKET_IDS = ['es-CO', 'es-MX', 'es-CL', 'es-ES', 'pt-BR', 'en-US', 'en-CA', 'fr-CA', 'en-GB', 'en-AU', 'en-JP'] as const
export type MarketId = (typeof MARKET_IDS)[number]
export const DEFAULT_MARKET: MarketId = 'es-CO'

export const MARKETS: Record<MarketId, Market> = {
  'es-CO': { id: 'es-CO', language: 'es', country: 'COL', prefix: '', og: 'es_CO' },
  'es-MX': { id: 'es-MX', language: 'es', country: 'MEX', prefix: '/es-mx', og: 'es_MX' },
  'es-CL': { id: 'es-CL', language: 'es', country: 'CHL', prefix: '/es-cl', og: 'es_CL' },
  'es-ES': { id: 'es-ES', language: 'es', country: 'ESP', prefix: '/es-es', og: 'es_ES' },
  'pt-BR': { id: 'pt-BR', language: 'pt', country: 'BRA', prefix: '/pt-br', og: 'pt_BR' },
  'en-US': { id: 'en-US', language: 'en', country: 'USA', prefix: '/en-us', og: 'en_US' },
  'en-CA': { id: 'en-CA', language: 'en', country: 'CAN', prefix: '/en-ca', og: 'en_CA' },
  'fr-CA': { id: 'fr-CA', language: 'fr', country: 'CAN', prefix: '/fr-ca', og: 'fr_CA' },
  'en-GB': { id: 'en-GB', language: 'en', country: 'GBR', prefix: '/en-gb', og: 'en_GB' },
  'en-AU': { id: 'en-AU', language: 'en', country: 'AUS', prefix: '/en-au', og: 'en_AU' },
  'en-JP': { id: 'en-JP', language: 'en', country: 'JPN', prefix: '/en-jp', og: 'en_JP' },
}

const PAYMENT_LABELS: Record<string, Localized> = {
  cash: { es: 'Efectivo', en: 'Cash', pt: 'Dinheiro', fr: 'Espèces' },
  card: { es: 'Tarjeta', en: 'Card', pt: 'Cartão', fr: 'Carte' },
  transfer: { es: 'Transferencia', en: 'Bank transfer', pt: 'Transferência', fr: 'Virement' },
  check: { es: 'Cheque', en: 'Check', pt: 'Cheque', fr: 'Chèque' },
}

/** Medios de pago del país en el idioma del mercado. */
export function paymentLabels(id: string) {
  const m = getMarket(id)
  return countryPaymentLabels(m.country, m.language)
}

export function countryPaymentLabels(code: CountryCode, l: Language) {
  return COUNTRIES[code].payments.map((p) => PAYMENT_LABELS[p]?.[l] ?? p)
}

/** Orden de los países en selectores y listados. */
export const COUNTRY_ORDER: CountryCode[] = ['COL', 'MEX', 'CHL', 'ESP', 'BRA', 'USA', 'CAN', 'GBR', 'AUS', 'JPN']

/** Segmento de URL de cada país en /paises/<slug>. */
export const COUNTRY_SLUGS: Record<CountryCode, string> = {
  COL: 'colombia', MEX: 'mexico', CHL: 'chile', ESP: 'espana', BRA: 'brasil',
  USA: 'estados-unidos', CAN: 'canada', GBR: 'reino-unido', AUS: 'australia', JPN: 'japon',
}

export function countryBySlug(slug: string): CountryCode | null {
  return (Object.keys(COUNTRY_SLUGS) as CountryCode[]).find((c) => COUNTRY_SLUGS[c] === slug) ?? null
}

/** Montos de ejemplo por moneda para los mocks (ventas de una semana de un negocio pequeño). */
const SAMPLE_WEEK: Record<string, number> = { COP: 18450000, MXN: 92300, CLP: 4250000, EUR: 4200, BRL: 23500, USD: 4600, CAD: 6300, GBP: 3600, AUD: 7000, JPY: 690000 }

/** Formatea un monto en la moneda local del país del mercado (para ejemplos y mocks). */
export function formatLocal(id: string, value: number) {
  const m = getMarket(id)
  return new Intl.NumberFormat(m.id, { style: 'currency', currency: m.countryData.currency, currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 })
    .format(value)
    .replace(/\u00a0/g, ' ')
}

/**
 * Convierte un monto de ejemplo pensado en pesos colombianos a la moneda del país, en la misma
 * proporción que SAMPLE_WEEK. Solo para ilustraciones marcadas como "Ejemplo".
 */
export function sampleValue(id: string, cop: number) {
  const currency = getMarket(id).countryData.currency
  const value = (cop / SAMPLE_WEEK.COP) * (SAMPLE_WEEK[currency] ?? SAMPLE_WEEK.USD)
  const digits = Math.max(0, Math.floor(Math.log10(Math.max(1, value))) - 2)
  const round = 10 ** digits
  return Math.round(value / round) * round
}

export function sampleAmount(id: string, cop: number) {
  return formatLocal(id, sampleValue(id, cop))
}

/** Dominio de ejemplo con la terminación del país (cafearoma.co, cafearoma.mx…). */
const TLD: Record<CountryCode, string> = { COL: 'co', MEX: 'mx', CHL: 'cl', ESP: 'es', BRA: 'com.br', USA: 'com', CAN: 'ca', GBR: 'co.uk', AUS: 'com.au', JPN: 'jp' }
export function sampleDomain(id: string, name = 'cafearoma') {
  return `${name}.${TLD[getMarket(id).country]}`
}

export const LANGUAGE_NAMES: Record<Language, string> = { es: 'Español', en: 'English', pt: 'Português', fr: 'Français' }

export function isMarketId(v: string): v is MarketId {
  return (MARKET_IDS as readonly string[]).includes(v)
}

export function getMarket(id: string) {
  const market = MARKETS[isMarketId(id) ? id : DEFAULT_MARKET]
  return { ...market, countryData: COUNTRIES[market.country] }
}

/** Mercado sugerido para un código ISO-2 de país (encabezado de geolocalización) y un idioma. */
export function marketForCountry(iso2: string | null | undefined, preferred?: Language): MarketId | null {
  if (!iso2) return null
  const country = Object.values(COUNTRIES).find((c) => c.iso2 === iso2.toUpperCase())
  if (!country) return null
  const options = MARKET_IDS.filter((m) => MARKETS[m].country === country.code)
  return options.find((m) => MARKETS[m].language === preferred) ?? options[0]
}

/**
 * Valores fiscales para interpolar en textos: {authority}, {einvoice}, {invoicing}, {taxId},
 * {taxes}, {docId}, {chart}, {country}. Se usan igual en messages/*.json (ICU) y en content/.
 */
export function fiscalValues(id: string) {
  const m = getMarket(id)
  return fiscalValuesFor(m.country, m.language)
}

/** Valores fiscales de cualquier país en un idioma (páginas por país). */
export function fiscalValuesFor(code: CountryCode, l: Language) {
  const c = COUNTRIES[code]
  return {
    /** integrated | not_integrated | not_mandatory, para {status, select, …} en los mensajes */
    status: c.fiscal.status as string,
    /** 'COP' | 'USD': moneda de los planes de GO Admin en el país */
    planCurrency: c.planCurrency as string,
    /** 'yes' | 'no': nómina electrónica ante la autoridad */
    ePayroll: c.fiscal.ePayroll ? 'yes' : 'no',
    authority: c.fiscal.authority[l],
    theAuthority: c.fiscal.theAuthority[l],
    einvoice: c.fiscal.system[l],
    invoicing: c.fiscal.product[l],
    taxId: c.fiscal.taxId,
    taxes: c.fiscal.taxes[l],
    docId: c.fiscal.docId,
    chart: c.fiscal.chart[l],
    country: c.name[l],
    inCountry: c.inCountry[l],
    /** Pasarelas y billeteras del país (sin efectivo, tarjeta, transferencia ni cheque) */
    gateways: c.payments.filter((p) => !(p in PAYMENT_LABELS)).join(', '),
    einvoiceNote: EINVOICE_NOTE[c.fiscal.status][l]
      .replace('{theAuthority}', c.fiscal.theAuthority[l])
      .replace('{einvoice}', c.fiscal.system[l])
      .replace('{inCountry}', c.inCountry[l]),
  }
}

/** Aviso honesto sobre la facturación electrónica según el país. */
const EINVOICE_NOTE: Record<EInvoiceStatus, Localized> = {
  integrated: { es: '', en: '', pt: '', fr: '' },
  not_integrated: {
    es: 'La emisión electrónica ante {theAuthority} ({einvoice}) todavía no está conectada {inCountry}. Escríbenos para conocer la disponibilidad.',
    en: 'Electronic submission to {theAuthority} ({einvoice}) is not connected yet {inCountry}. Contact us to check availability.',
    pt: 'A emissão eletrônica junto a {theAuthority} ({einvoice}) ainda não está conectada {inCountry}. Fale conosco para saber a disponibilidade.',
    fr: 'La transmission électronique à {theAuthority} ({einvoice}) n’est pas encore connectée {inCountry}. Écrivez-nous pour connaître la disponibilité.',
  },
  not_mandatory: {
    es: 'No hay un sistema nacional obligatorio de factura electrónica {inCountry}: emites y envías tus facturas desde GO Admin.',
    en: 'There is no mandatory national e-invoicing system {inCountry}: you issue and send your invoices from GO Admin.',
    pt: 'Não há um sistema nacional obrigatório de nota eletrônica {inCountry}: você emite e envia suas faturas pelo GO Admin.',
    fr: 'Il n’existe pas de système national obligatoire de facture électronique {inCountry} : vous émettez et envoyez vos factures depuis GO Admin.',
  },
}

export type FiscalValues = ReturnType<typeof fiscalValues>

/** Reemplaza {token} por su valor fiscal en textos de content/. */
export function applyFiscal(text: string, values: FiscalValues) {
  return text.replace(/\{(\w+)\}/g, (all, key: string) => (key in values ? values[key as keyof FiscalValues] : all))
}
