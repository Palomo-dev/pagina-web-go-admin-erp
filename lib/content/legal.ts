/**
 * Textos legales. Migrados sin cambios de redacción desde las páginas anteriores
 * (app/privacidad y app/eliminacion-datos). Cualquier cambio de fondo debe pasar por revisión legal.
 */
import { CONTACT } from '@/lib/site'

export type LegalSection = { title: string; items: string[] }

export const PRIVACY = {
  title: 'Política de privacidad',
  updated: '15 de enero de 2024',
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
        "Cifrado end-to-end de todos los datos sensibles (AES-256, TLS 1.3)",
        "Servidores seguros con certificaciones SOC 2, ISO 27001:2022",
        "Acceso restringido solo a personal autorizado con autenticación multi-factor",
        "Monitoreo continuo de seguridad 24/7 con IDS/IPS avanzados",
        "Backups automáticos y planes de recuperación ante desastres",
        "Auditorías de seguridad regulares e independientes (cumplimiento GDPR Art. 32)",
        "Controles de acceso físico en centros de datos certificados"
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
    { title: 'Ejercer tus derechos', text: 'Solicita acceso, corrección o eliminación de tus datos personales.', email: 'privacidad@goadmin.io' },
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
