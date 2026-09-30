/**
 * Textos legales. Migrados desde las páginas anteriores (app/privacidad y app/eliminacion-datos).
 * Cualquier cambio de fondo debe pasar por revisión legal.
 *
 * PRIVACY (27-sep-2026): ajuste provisional mientras el abogado revisa la nueva política de
 * tratamiento de datos (borradores de Marketing). Se agregó el responsable del tratamiento y se
 * quitaron afirmaciones de seguridad no verificables (certificaciones SOC 2 / ISO 27001, cifrado de
 * extremo a extremo, monitoreo 24/7, auditorías independientes). Reemplazar por el texto aprobado.
 */
import { CONTACT } from '@/lib/site'

export type LegalSection = { title: string; items: string[] }

export const PRIVACY = {
  title: 'Política de privacidad',
  updated: '27 de septiembre de 2026',
  intro:
    'En GO Admin protegemos tu información personal con los más altos estándares de seguridad y transparencia. Conoce cómo recopilamos, usamos y protegemos tus datos.',
  principles: [
    { title: 'Transparencia total', text: 'Te explicamos claramente qué datos recopilamos y por qué.' },
    { title: 'Seguridad', text: 'Protegemos tu información con altos estándares.' },
    { title: 'Control del usuario', text: 'Tú decides qué información compartir y cómo usarla.' },
    { title: 'Minimización de datos', text: 'Solo recopilamos la información necesaria para el servicio.' },
  ],
  sections: [
    {
      title: 'Responsable del tratamiento',
      items: [
        `GO Admin S.A.S., identificada con NIT ${CONTACT.nit}, con domicilio en ${CONTACT.city}.`,
        `Correo: ${CONTACT.email} · Teléfono: ${CONTACT.phoneDisplay}.`,
      ],
    },
    {
      "title": "1. Información que Recopilamos",
      "items": [
        "Información de cuenta: nombre, email, teléfono y datos de facturación (Art. 5 Ley 1581)",
        "Datos de uso: cómo interactúas con nuestra plataforma y servicios",
        "Información técnica: dirección IP, tipo de navegador, sistema operativo",
        "Datos de negocio: información ingresada en los módulos del ERP (tratamiento según consentimiento)",
        "Cookies y tecnologías similares para mejorar la experiencia (GDPR Art. 7, CCPA Sección 1798.100)",
        "Información de contacto y comunicaciones (con consentimiento previo)"
      ]
    },
    {
      "title": "2. Cómo Usamos tu Información",
      "items": [
        "Proporcionar y mantener nuestros servicios (Art. 6 GDPR - Ejecución del contrato)",
        "Procesar transacciones y gestionar tu cuenta (Ley 1581 - Finalidad contractual)",
        "Comunicarnos contigo sobre actualizaciones y soporte (con consentimiento previo)",
        "Mejorar nuestros productos y desarrollar nuevas funcionalidades (GDPR Art. 6.1.f)",
        "Cumplir con obligaciones legales, fiscales y tributarias colombianas",
        "Prevenir fraude, seguridad y protección de derechos (GDPR Art. 6.1.f - Interés legítimo)"
      ]
    },
    {
      "title": "3. Compartir Información",
      "items": [
        "No vendemos tu información personal a terceros (CCPA Sección 1798.100(d))",
        "Compartimos datos solo cuando es necesario para el servicio (Art. 7 Ley 1581)",
        "Proveedores de servicios bajo estrictos acuerdos de confidencialidad y DPA",
        "Autoridades cuando lo requiera la ley colombiana o normas internacionales",
        "En caso de fusión o adquisición (con previo aviso y opción de opt-out)",
        "Cumplimiento de requerimientos judiciales o gubernamentales"
      ]
    },
    {
      "title": "4. Seguridad de Datos",
      "items": [
        'Conexiones cifradas (HTTPS/TLS) entre tu navegador y GO Admin.',
        'Acceso por roles: cada usuario ve solo lo que su rol le permite.',
        'Copias de respaldo automáticas de la información.',
        'Acceso a los datos restringido a personal autorizado.',
      ]
    },
    {
      "title": "5. Tus Derechos",
      "items": [
        "Derecho de acceso: obtener confirmación si procesamos tus datos (Art. 15 GDPR, Art. 12 Ley 1581)",
        "Derecho de rectificación: corregir datos inexactos o incompletos (Art. 16 GDPR)",
        "Derecho al olvido: solicitar la eliminación de tu información (Art. 17 GDPR)",
        "Derecho a la portabilidad: obtener datos en formato estructurado (Art. 20 GDPR)",
        "Derecho de oposición: objetar procesamiento en ciertos casos (CCPA Sección 1798.120)",
        "Derecho a retirar consentimiento: en cualquier momento sin penalización",
        "Derechos CCPA: acceder, eliminar, conocer el origen de datos compartidos"
      ]
    },
    {
      "title": "6. Retención de Datos",
      "items": [
        "Información de cuenta: mantenida mientras tu cuenta esté activa (Art. 5 Ley 1581)",
        "Datos de facturación: conservados por 7 años según normativa tributaria colombiana",
        "Logs de seguridad: mantenidos por 2 años para auditoría y cumplimiento",
        "Datos de navegación: almacenados por máximo 90 días (GDPR Art. 5.1.e)",
        "Eliminación segura: datos borrados permanentemente mediante métodos certificados",
        "Derecho a solicitar eliminación: puedes solicitar borrado al cerrar tu cuenta"
      ]
    },
    {
      "title": "7. Transferencias Internacionales de Datos",
      "items": [
        "Tus datos pueden procesarse en diferentes países según infraestructura (GDPR Cap. V)",
        "Utilizamos cláusulas contractuales estándar (SCCs) aprobadas por la UE",
        "Garantizamos el mismo nivel de protección en todas las ubicaciones",
        "Cumplimos con marcos de transferencia reconocidos internacionalmente",
        "Para usuarios en EU: cumplimiento total GDPR, incluyendo transferencias seguras",
        "Información de ubicación: disponible bajo solicitud (derecho de acceso)"
      ]
    },
    {
      "title": "8. Derechos Específicos por Jurisdicción",
      "items": [
        "Colombia (Ley 1581): Autoridad de Supervisión: Superintendencia de Industria y Comercio",
        "EU (GDPR): Derechos ampliados incluyendo consentimiento previo y evaluación de impacto",
        "California (CCPA): Derecho a no ser discriminado por ejercer derechos de privacidad",
        "Acceso a datos: Puedes solicitar acceso dentro de 30 días hábiles (Ley 1581 Art. 12)",
        "Reclamos: contacta nuestro DPO para resolver inquietudes antes de autoridades",
        "Protección de menores: no recopilamos datos de menores de 13 años (COPPA)"
      ]
    },
    {
      "title": "9. Cookies y Tecnologías de Seguimiento",
      "items": [
        "Cookies esenciales: necesarias para funcionamiento del servicio",
        "Cookies de análisis: opcional, mejoran experiencia (consentimiento mediante banner)",
        "Gestión de preferencias: puedes controlar cookies en tu navegador",
        "No utilizamos: cookies de publicidad de terceros o tracking invasivo",
        "Transparencia: listado completo de cookies y terceros disponible bajo solicitud",
        "Retirada de consentimiento: disponible en cualquier momento"
      ]
    },
    {
      "title": "10. Cambios a esta Política",
      "items": [
        "Nos reservamos el derecho de actualizar esta política (con 30 días de aviso)",
        "Cambios significativos serán comunicados por email",
        "Continuación del uso implica aceptación de cambios",
        "Versión anterior disponible bajo solicitud"
      ]
    }
  ] as LegalSection[],
  contacts: [
    { title: 'Oficial de protección de datos', text: 'Consultas específicas sobre privacidad.', email: CONTACT.email },
    { title: 'Ejercer tus derechos', text: 'Solicita acceso, corrección o eliminación de tus datos personales.', email: CONTACT.email },
  ],
}

export const DATA_DELETION = {
  title: 'Eliminación de datos',
  intro:
    'Respetamos tu derecho a la privacidad. Puedes solicitar la eliminación completa de tus datos personales en cualquier momento. Aquí te mostramos cómo.',
  methods: [
    { title: 'Correo', text: 'Envía tu solicitud a', contact: CONTACT.email, href: `mailto:${CONTACT.email}`, details: 'Incluye: nombre completo, correo de la cuenta y razón de la solicitud.' },
    { title: 'Teléfono', text: 'Llama a nuestro equipo', contact: CONTACT.phoneDisplay, href: 'tel:+573113195711', details: 'Lunes a viernes, 8:00 a. m. – 6:00 p. m. (hora de Colombia).' },
    { title: 'En tu cuenta', text: 'Desde tu perfil en', contact: 'app.goadmin.io/perfil', href: 'https://app.goadmin.io/perfil', details: 'Selecciona «Solicitar eliminación de datos» en configuración.' },
  ],
  steps: [
    { title: 'Solicitar eliminación', text: 'Contacta a nuestro equipo de privacidad por correo o teléfono con tu solicitud de eliminación de datos.' },
    { title: 'Verificación de identidad', text: 'Verificaremos tu identidad y que seas el propietario de la cuenta para proteger tu seguridad.' },
    { title: 'Procesamiento', text: 'Tu solicitud se procesa dentro de 10 días hábiles (Ley 1581) o 45 días (GDPR/CCPA).' },
    { title: 'Confirmación', text: 'Recibirás confirmación de que tus datos han sido eliminados permanentemente de nuestros sistemas.' },
  ],
  retention: [
    { type: 'Datos de cuenta', period: 'Eliminados de forma segura (30 días de eliminación lógica)' },
    { type: 'Datos de facturación', period: 'Conservados por 7 años (requisito tributario)' },
    { type: 'Datos de negocio', period: 'Eliminados completamente' },
    { type: 'Logs de seguridad', period: 'Purgados después de 30 días (auditoría completada)' },
    { type: 'Copias de respaldo', period: 'Eliminados en el siguiente ciclo de respaldo (máx. 90 días)' },
  ],
  frameworks: [
    { title: 'Ley 1581 (Colombia)', text: '10 días hábiles para responder. Art. 12-15.' },
    { title: 'GDPR', text: '45 días para procesar. Art. 17.' },
    { title: 'CCPA', text: '45 días para procesar. Sección 1798.105.' },
  ],
  faq: [
    { q: '¿Puedo recuperar mis datos después de solicitar la eliminación?', a: 'No. Una vez iniciado el proceso de eliminación, los datos se borran permanentemente. No podrán ser recuperados.' },
    { q: '¿Se eliminarán mis datos de facturación?', a: 'Los datos de facturación se conservan por 7 años conforme a requisitos legales tributarios colombianos. El resto de datos se elimina completamente.' },
    { q: '¿Cuánto tiempo tarda la eliminación?', a: 'En Colombia: 10 días hábiles. En EU/US (GDPR/CCPA): 45 días. Recibirás confirmación cuando se complete.' },
  ],
}

/**
 * Términos y condiciones. BORRADOR redactado a partir del funcionamiento real del servicio
 * (planes, pruebas, pagos, facturación, canales digitales, IA). Debe pasar por revisión legal
 * antes de retirar `draft` (mientras sea borrador la página no se indexa).
 */
export const TERMS = {
  title: 'Términos y condiciones',
  updated: '25 de septiembre de 2026',
  draft: true,
  intro:
    'Estas condiciones regulan el uso de GO Admin, el software de gestión para negocios de GO Admin S.A.S. Léelas con calma: al crear una cuenta o usar el servicio las aceptas.',
  sections: [
    {
      title: '1. Quiénes somos y aceptación',
      items: [
        `GO Admin es un servicio de ${CONTACT.legalName}, identificada con NIT ${CONTACT.nit}, con domicilio en ${CONTACT.city}.`,
        'Al registrarte, iniciar una prueba o usar cualquier módulo aceptas estos términos, la Política de privacidad y la Política de cookies.',
        'Si usas GO Admin en nombre de una empresa, declaras que tienes autorización para aceptar estos términos en su nombre.',
      ],
    },
    {
      title: '2. El servicio',
      items: [
        'GO Admin es un software en la nube (SaaS) con módulos de ventas y POS, inventario, facturación, contabilidad, clientes, nómina, reportes, canales digitales e inteligencia artificial, entre otros.',
        'Los módulos disponibles dependen del plan contratado y del país. La información de cada plan está en la página de precios.',
        'Podemos mejorar, cambiar o retirar funciones. Si un cambio reduce de forma importante lo que contrataste, te avisaremos con anticipación.',
      ],
    },
    {
      title: '3. Tu cuenta',
      items: [
        'Debes entregar información veraz y mantenerla actualizada.',
        'Eres responsable de las credenciales de tu cuenta y de los usuarios que invites. Asigna a cada persona el rol y los permisos que necesita.',
        'Avísanos de inmediato si sospechas un acceso no autorizado.',
      ],
    },
    {
      title: '4. Planes, pruebas y pagos',
      items: [
        'Los planes se cobran por mes o por año, por adelantado. En Colombia el precio se expresa en pesos colombianos (COP); en los demás países, en dólares estadounidenses (USD).',
        'Algunos planes incluyen un periodo de prueba gratuito. Al terminar la prueba, el plan se cobra solo si decides continuar.',
        'La suscripción se renueva automáticamente al final de cada periodo hasta que la canceles.',
        'Los usuarios, sucursales, créditos de IA y documentos adicionales se cobran según las tarifas vigentes.',
        'Podemos cambiar los precios. Los cambios se aplican desde el siguiente periodo y te avisaremos antes.',
      ],
    },
    {
      title: '5. Cancelación',
      items: [
        'Puedes cancelar tu suscripción cuando quieras desde tu cuenta. El servicio sigue activo hasta el final del periodo pagado.',
        'Los pagos de periodos ya iniciados no se reembolsan, salvo que la ley aplicable disponga otra cosa.',
        'Antes de cancelar puedes exportar tu información. Después del cierre conservamos los datos según la Política de privacidad y las obligaciones legales.',
        'Podemos suspender o cerrar una cuenta que incumpla estos términos o tenga pagos vencidos, avisando antes cuando sea posible.',
      ],
    },
    {
      title: '6. Tus datos',
      items: [
        'La información que registras en GO Admin es tuya. La tratamos para prestarte el servicio, según la Política de privacidad.',
        'Tú decides qué datos de tus clientes, empleados y proveedores registras, y respondes por tener la autorización para tratarlos.',
        'Aplicamos medidas de seguridad como cifrado, copias de respaldo y control de acceso por roles.',
      ],
    },
    {
      title: '7. Uso aceptable',
      items: [
        'No uses GO Admin para actividades ilegales, fraude, envío de mensajes no solicitados ni para vulnerar derechos de terceros.',
        'No intentes acceder a cuentas ajenas, interrumpir el servicio ni extraer información de forma automatizada sin autorización.',
        'Los límites de cada plan (usuarios, sucursales, documentos, créditos de IA) aplican a cada cuenta.',
      ],
    },
    {
      title: '8. Facturación electrónica y obligaciones tributarias',
      items: [
        'En Colombia, GO Admin emite y valida documentos electrónicos ante la DIAN a través de un proveedor tecnológico. En otros países la emisión electrónica ante la autoridad puede no estar disponible; la página de cada país indica el estado.',
        'Tú eres responsable de la información tributaria que registras (resoluciones, impuestos, datos de clientes) y del cumplimiento de tus obligaciones fiscales.',
        'GO Admin es una herramienta: no reemplaza la asesoría de tu contador.',
      ],
    },
    {
      title: '9. Canales digitales y contenido',
      items: [
        'Si usas la página web, la tienda en línea, el motor de reservas o el chat, eres responsable del contenido, precios, productos y condiciones que publicas.',
        'Nos das permiso para alojar y mostrar ese contenido con el único fin de prestarte el servicio.',
        'Los dominios que compres por medio de GO Admin quedan sujetos también a las reglas del registrador.',
      ],
    },
    {
      title: '10. Inteligencia artificial',
      items: [
        'Las funciones de IA generan sugerencias, textos y análisis a partir de tu información. Revísalos antes de usarlos: pueden contener errores.',
        'El uso de IA consume créditos según tu plan.',
        'La información que usan las funciones de IA se trata según la Política de privacidad.',
      ],
    },
    {
      title: '11. Servicios de terceros',
      items: [
        'GO Admin se integra con servicios de terceros (pasarelas de pago, mensajería, canales de venta, proveedores tecnológicos).',
        'El uso de esos servicios se rige además por sus propios términos. No respondemos por fallas o cambios de esos servicios.',
      ],
    },
    {
      title: '12. Disponibilidad y soporte',
      items: [
        'Trabajamos para que GO Admin esté disponible de forma continua, pero puede haber interrupciones por mantenimiento o causas ajenas a nosotros.',
        'Avisaremos con anticipación los mantenimientos programados cuando sea posible.',
        'El soporte se presta por los canales publicados en la página de soporte, en los horarios indicados.',
      ],
    },
    {
      title: '13. Propiedad intelectual',
      items: [
        'El software, la marca GO Admin, los diseños y la documentación son de GO Admin S.A.S.',
        'Te damos una licencia de uso no exclusiva e intransferible mientras tu suscripción esté activa.',
        'No puedes copiar, modificar, revender ni hacer ingeniería inversa del software.',
      ],
    },
    {
      title: '14. Responsabilidad',
      items: [
        'Prestamos el servicio con diligencia profesional. En la medida en que la ley lo permita, no respondemos por daños indirectos, lucro cesante ni pérdida de oportunidades.',
        'Nuestra responsabilidad total frente a ti se limita al valor que pagaste por el servicio en los doce meses anteriores al hecho que la origina.',
        'Nada en estos términos limita los derechos que la ley de protección al consumidor te reconozca.',
      ],
    },
    {
      title: '15. Cambios a estos términos',
      items: [
        'Podemos actualizar estos términos. Publicaremos la nueva versión con su fecha y te avisaremos por correo si el cambio es importante.',
        'Si no estás de acuerdo con un cambio, puedes cancelar antes de que entre en vigor.',
      ],
    },
    {
      title: '16. Ley aplicable',
      items: [
        'Estos términos se rigen por las leyes de la República de Colombia.',
        'Buscaremos resolver cualquier diferencia de forma directa. Si no es posible, la resolverán los jueces de Medellín, Colombia, salvo que la ley aplicable disponga otra cosa.',
      ],
    },
  ] as LegalSection[],
  contact: { title: '¿Tienes preguntas sobre estos términos?', text: 'Escríbenos y te respondemos.', email: CONTACT.email },
}

/**
 * Política de cookies de GO Admin.
 * Texto aprobado por Legal el 2 de octubre de 2026 (pagina_cookies_publicar_ef7d.html).
 */
export const COOKIES = {
  title: 'Política de cookies de GO Admin',
  version: 'Versión 1.0',
  published: '2 de octubre de 2026',
  updated: '2 de octubre de 2026',
  intro:
    'Esta página explica qué cookies usa goadmin.io, para qué sirve cada una, cuánto duran y cómo cambiar tu elección. Complementa la sección 8 de nuestra Política de Tratamiento de Datos Personales. El responsable es Go Admin S.A.S., NIT 901.479.683-5, con domicilio en Medellín, Colombia.',
  what:
    'Una cookie es un archivo pequeño que un sitio web guarda en tu navegador. Sirve para que el sitio funcione, recuerde tus elecciones o mida cómo se usa. Algunas cookies y tecnologías parecidas (píxeles, etiquetas, almacenamiento del navegador) permiten reconocer tu navegador o dispositivo; por eso pueden ser datos personales y las tratamos como tales. Las cookies pueden ser propias (las pone GO Admin) o de terceros (las pone otra empresa, como Google o Meta, cuando su herramienta está activa en nuestro sitio).',
  beforeConsent:
    'Cuando entras a goadmin.io te mostramos un aviso de cookies. Hasta que elijas, el sitio solo usa las cookies necesarias. Las cookies de medición y de publicidad no se instalan ni se activan hasta que las aceptes, y las herramientas de Google y Meta no se cargan antes de tu consentimiento. En el aviso puedes aceptarlas todas, rechazar las opcionales con un solo clic o elegir por categoría. Seguir navegando o cerrar el aviso no cuenta como aceptación.',
  categories: [
    {
      id: 'necessary',
      title: 'Necesarias',
      text: 'Hacen que el sitio y la aplicación funcionen, sean seguros y recuerden tu país, tu idioma y tu elección de cookies. No se pueden desactivar porque sin ellas el servicio no funciona. No se usan para publicidad ni para seguirte en otros sitios.',
      always: true,
    },
    {
      id: 'analytics',
      title: 'Medición',
      text: 'Nos dicen cuántas personas visitan el sitio, qué páginas ven y de qué campaña llegaron. Se activan solo si aceptas esta categoría.',
      always: false,
    },
    {
      id: 'marketing',
      title: 'Publicidad',
      text: 'Miden las conversiones de nuestros anuncios y permiten mostrarte anuncios de GO Admin en Meta (Facebook e Instagram) y Google. Se activan solo si aceptas esta categoría.',
      always: false,
    },
  ],
  table: [
    { name: 'GOADMIN_MARKET', provider: 'GO Admin (propia)', purpose: 'Recordar el país e idioma del sitio que elegiste o que te asignamos según tu ubicación, para no volver a preguntarte', duration: '12 meses', category: 'Necesaria' },
    { name: 'goadmin_consent', provider: 'GO Admin (propia)', purpose: 'Guardar tu elección de cookies. Se comparte entre goadmin.io y app.goadmin.io para que no tengas que elegir dos veces', duration: 'Hasta 12 meses', category: 'Necesaria' },
    { name: 'Cookies de sesión de app.goadmin.io (autenticación de Supabase)', provider: 'GO Admin, con Supabase como encargado', purpose: 'Mantener tu sesión abierta y proteger tu cuenta cuando entras a GO Admin ERP', duration: 'Mientras dure tu sesión', category: 'Necesaria' },
    { name: 'Cookies de seguridad y enrutamiento de Vercel', provider: 'Vercel, como encargado', purpose: 'Proteger el sitio contra tráfico malicioso y entregar las páginas', duration: 'Duración corta, según Vercel', category: 'Necesaria' },
    { name: 'Vercel Analytics', provider: 'Vercel', purpose: 'Contar visitas a las páginas de forma agregada. No guarda cookies en tu navegador', duration: 'No aplica (sin cookies)', category: 'Medición. Se activa solo si aceptas esa categoría' },
    { name: 'goadmin_attr', provider: 'GO Admin (propia)', purpose: 'Guardar los parámetros de campaña (UTM), los identificadores de clic (fbclid y gclid) y la página por la que entraste, para saber qué campaña te trajo', duration: '90 días', category: 'Medición. Se activa solo si aceptas esa categoría' },
    { name: '_ga', provider: 'Google (Google Analytics 4)', purpose: 'Distinguir visitantes y medir el uso del sitio', duration: 'Hasta 2 años', category: 'Medición. Se activa solo si aceptas esa categoría' },
    { name: '_ga_<ID>', provider: 'Google (Google Analytics 4)', purpose: 'Mantener el estado de la sesión de medición', duration: 'Hasta 2 años', category: 'Medición. Se activa solo si aceptas esa categoría' },
    { name: '_fbp', provider: 'Meta Platforms (píxel de Meta)', purpose: 'Medir las conversiones de nuestros anuncios en Facebook e Instagram y mostrarte anuncios de GO Admin', duration: '90 días', category: 'Publicidad. Se activa solo si aceptas esa categoría' },
    { name: '_fbc', provider: 'Meta Platforms (píxel de Meta)', purpose: 'Guardar el identificador del clic en un anuncio de Meta para atribuir la conversión', duration: '90 días', category: 'Publicidad. Se activa solo si aceptas esa categoría' },
    { name: '_gcl_au', provider: 'Google (Google Ads)', purpose: 'Medir las conversiones de nuestros anuncios en Google', duration: '90 días', category: 'Publicidad. Se activa solo si aceptas esa categoría' },
    { name: '_gcl_aw', provider: 'Google (Google Ads, conversiones mejoradas)', purpose: 'Guardar el identificador del clic en un anuncio de Google para atribuir la conversión', duration: '90 días', category: 'Publicidad. Se activa solo si aceptas esa categoría' },
  ],
  thirdPartyNote: 'La duración de las cookies de terceros es la que informa cada proveedor y puede cambiar. Cuando cambiemos las cookies que usamos, actualizaremos esta tabla.',
  serverEvents: 'Si aceptas la medición y la publicidad, también podemos enviar a Meta y a Google, desde nuestros servidores, eventos como «formulario enviado» o «registro completado», con tu correo y teléfono convertidos en códigos irreversibles (hash SHA-256). Si no lo aceptas, no enviamos nada sobre ti. El detalle está en la sección 8.3 de la Política de Tratamiento de Datos Personales.',
  notUsed: 'No usamos cookies de publicidad ni píxeles dentro de la aplicación una vez inicias sesión. La medición se limita a las páginas de registro y bienvenida, y siempre según tu elección de cookies.',
  app: 'No usamos cookies de publicidad ni píxeles dentro de la aplicación una vez inicias sesión. La medición se limita a las páginas de registro y bienvenida, y siempre según tu elección de cookies.',
  manage: [
    'Puedes cambiar o retirar tu consentimiento cuando quieras desde el enlace «Preferencias de cookies», en el pie de cada página. Al retirarlo, dejamos de activar las cookies de medición y de publicidad desde ese momento; lo tratado antes de retirarlo no se ve afectado.',
    'También puedes borrar o bloquear las cookies desde la configuración de tu navegador. Si bloqueas las necesarias, el sitio puede no recordar tu país, tu idioma ni tu elección, y la aplicación puede no mantener tu sesión.',
  ],
  law: 'Esta política se rige por la ley colombiana, en especial la Ley 1581 de 2012 y sus decretos reglamentarios, aunque visites el sitio desde otro país.',
  contact: {
    title: 'Preguntas',
    text: 'Si tienes preguntas sobre las cookies o quieres ejercer tus derechos sobre tus datos, escríbenos a servicio@goadmin.io. Te respondemos las consultas en máximo 10 días hábiles y los reclamos en máximo 15 días hábiles, como explica la Política de Tratamiento de Datos Personales.',
    email: CONTACT.email,
  },
}
