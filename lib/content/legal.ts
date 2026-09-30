/**
 * Textos legales. VERSIÓN FINAL aprobada por Juan el 29 de septiembre de 2026,
 * para publicar el 2 de octubre de 2026.
 *
 * Estos textos NO deben editarse sin aprobación legal. El contenido legal va TAL CUAL
 * fue entregado por el equipo legal. Solo se convirtió de HTML a TypeScript estructurado
 * para mantener la consistencia con el resto del sitio.
 *
 * Reemplaza la «Política de privacidad» del 15 de enero de 2024.
 */
import { CONTACT } from '@/lib/site'

export type LegalSection = { title: string; items: string[] }
export type LegalTable = { cols: string[]; rows: (string | { content: string; link?: string })[][] }

export const PRIVACY = {
  title: 'Política de Tratamiento de Datos Personales de Go Admin S.A.S.',
  updated: '2 de octubre de 2026',
  version: 'Versión 1.0',
  vigente: 'Vigente desde el 2 de octubre de 2026',
  intro:
    'Esta política explica cómo Go Admin S.A.S. («GO Admin», «nosotros») recoge, usa, guarda, comparte y protege tus datos personales, y cómo puedes ejercer tus derechos. Se expide conforme a la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto Único Reglamentario 1074 de 2015, Parte 2, Título 2, Capítulo 25) y las instrucciones de la Superintendencia de Industria y Comercio (SIC). Reemplaza la «Política de privacidad» del 15 de enero de 2024.',
  principles: [
    { title: 'Legalidad', text: 'Cumplimos la Ley 1581 de 2012 y demás normas aplicables.' },
    { title: 'Finalidad', text: 'Usamos tus datos solo para lo que te informamos y autorizas.' },
    { title: 'Libertad', text: 'Solo pedimos lo necesario y con tu autorización.' },
    { title: 'Transparencia', text: 'Te explicamos claramente qué datos recopilamos y por qué.' },
  ],
  sections: [
    {
      title: '1. Quién es el responsable de tus datos',
      table: {
        cols: ['Dato', 'Información'],
        rows: [
          ['Razón social', 'Go Admin S.A.S.'],
          ['NIT', '901.479.683-5'],
          ['Domicilio', 'Medellín, Antioquia, Colombia'],
          ['Dirección física', 'Carrera 87 B # 45 B - 8, Medellín, Antioquia, Colombia'],
          ['Responsable de atender las solicitudes de los titulares', 'Juan Camilo Gallego Aguirre, representante legal'],
          ['Correo para temas de datos personales', { content: 'servicio@goadmin.io', link: 'mailto:servicio@goadmin.io' }],
          ['Teléfono y WhatsApp', '+57 311 319 5711'],
          ['Sitio web', { content: 'https://goadmin.io', link: 'https://goadmin.io' }],
        ],
      },
    },
    {
      title: '2. A quién aplica esta política',
      items: [
        'Aplica a los datos personales que GO Admin trata como responsable, es decir, cuando decide para qué y cómo se usan. Esto incluye a:',
        'personas que visitan goadmin.io y las páginas públicas de app.goadmin.io;',
        'personas que llenan formularios de GO Admin en el sitio, en la aplicación o en anuncios de Facebook e Instagram (formularios de clientes potenciales), o que nos escriben por WhatsApp o correo;',
        'prospectos a quienes contactamos por llamada, WhatsApp o correo, incluidas las llamadas de nuestro asistente virtual con inteligencia artificial;',
        'usuarios, clientes y representantes de las empresas que usan GO Admin ERP (datos de la cuenta, facturación y soporte);',
        'proveedores, aliados comerciales, contadores referidores, candidatos a empleo, trabajadores e inversionistas.',
      ],
    },
    {
      title: '2.1 Datos que nuestros clientes cargan en GO Admin ERP',
      items: [
        'Cuando una empresa usa GO Admin ERP y registra datos de sus propios clientes, trabajadores, proveedores u otras personas (por ejemplo, en el punto de venta, el CRM, la nómina o la facturación), esa empresa es la responsable de esos datos y GO Admin actúa como encargado: los trata por cuenta de la empresa, solo para prestar el servicio y según sus instrucciones y el contrato de transmisión de datos incluido en los Términos y Condiciones (artículo 25 del Decreto 1377 de 2013; artículo 2.2.2.25.5.2 del Decreto 1074 de 2015).',
        'En ese papel, GO Admin:',
        '• no usa esos datos para sus propias finalidades comerciales ni publicitarias, ni los vende;',
        '• aplica las medidas de seguridad de la sección 12 y los deberes del encargado del artículo 18 de la Ley 1581;',
        '• puede apoyarse en los proveedores de infraestructura de la sección 9, que actúan como subencargados con obligaciones equivalentes;',
        '• informa a la empresa, sin demora, las consultas o reclamos que reciba de las personas cuyos datos ella cargó, para que la empresa los resuelva;',
        '• al terminar el contrato, devuelve o suprime los datos según los Términos, salvo que la ley exija conservarlos.',
        'Si eres cliente, clienta o trabajador de una empresa que usa GO Admin ERP y quieres ejercer tus derechos sobre esos datos, dirígete primero a esa empresa. Si nos escribes a nosotros, trasladaremos tu solicitud. La empresa cliente es quien debe obtener la autorización de sus titulares, incluida la de datos sensibles (por ejemplo, datos de salud o de afiliación a seguridad social en la nómina) y la de niñas, niños y adolescentes, cuando aplique.',
      ],
    },
    {
      title: '3. Definiciones',
      items: [
        'Los términos autorización, aviso de privacidad, base de datos, dato personal, dato público, dato semiprivado, dato privado, dato sensible, encargado, responsable, titular, tratamiento, transferencia y transmisión tienen el significado de los artículos 3 y 5 de la Ley 1581 de 2012 y del artículo 3 del Decreto 1377 de 2013. En resumen:',
        'Transmisión: cuando compartimos datos con un encargado (un proveedor que los trata por nuestra cuenta), en Colombia o en el exterior.',
        'Transferencia: cuando enviamos datos a otro responsable, que los trata para sus propias finalidades, en Colombia o en el exterior.',
        'Cookie: pequeño archivo que un sitio web guarda en tu navegador. Algunas cookies y tecnologías similares (píxeles, etiquetas) permiten reconocer tu navegador o dispositivo y, por eso, pueden ser datos personales.',
      ],
    },
    {
      title: '4. Principios',
      items: [
        'Tratamos los datos con legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad (artículo 4 de la Ley 1581 de 2012). En la práctica: solo pedimos lo necesario, lo usamos para lo que te informamos, pedimos tu autorización antes de recogerlo cuando la ley lo exige y guardamos prueba de ella.',
      ],
    },
    {
      title: '5. Datos que tratamos',
      table: {
        cols: ['Categoría', 'Ejemplos', 'De dónde vienen'],
        rows: [
          ['Identificación y contacto', 'Nombre, celular o WhatsApp, correo, cargo', 'Formularios, registro, WhatsApp, correo, llamadas'],
          ['Datos del negocio', 'Nombre del negocio, NIT, ciudad, sector, número de sedes, sistema que usa hoy, cómo nos conoció', 'Formularios, registro y conversaciones'],
          ['Cuenta y facturación', 'Usuario, plan, historial de pagos, datos para la factura', 'Registro y pagos. Los datos de tarjeta los procesa Stripe; GO Admin no guarda el número completo de la tarjeta'],
          [
            'Navegación y medición',
            'Dirección IP, tipo de dispositivo y navegador, páginas visitadas, parámetros de campaña (UTM), identificadores de clic de Meta y Google (fbclid, gclid), identificadores de cookies (_fbp, _fbc, _ga)',
            'Sitio web y páginas de registro, solo según tus preferencias de cookies (sección 8)',
          ],
          ['Comunicaciones comerciales', 'Registro de llamadas, mensajes y reuniones, resultado del contacto, preferencias de contacto y solicitudes de «no contactar»', 'CRM de GO Admin'],
          [
            'Grabaciones y transcripciones de llamadas',
            'Audio de la llamada, transcripción, resumen y datos extraídos de la conversación',
            'Llamadas comerciales de nuestro equipo y de nuestro asistente virtual con IA, solo si aceptas la grabación (sección 7)',
          ],
          ['Datos de candidatos', 'Hoja de vida, experiencia, datos de contacto, resultados de pruebas y entrevistas', 'Formularios de empleo y procesos de selección'],
        ],
      },
      extraItems: [
        'Datos sensibles. GO Admin no pide datos sensibles (origen racial o étnico, orientación política, convicciones religiosas, salud, vida sexual, datos biométricos, entre otros, según el artículo 5 de la Ley 1581) en sus formularios comerciales. No usamos la voz de las grabaciones para identificarte de forma biométrica. Si en un trámite fuera necesario un dato sensible (por ejemplo, en afiliaciones laborales), te diremos que no estás obligado a darlo, qué dato es y para qué, y solo lo trataremos con tu autorización explícita (artículo 6 de la Ley 1581 y artículo 6 del Decreto 1377).',
        'Niñas, niños y adolescentes. Nuestros servicios están dirigidos a negocios y a personas mayores de 18 años. No recogemos a sabiendas datos de menores de edad. Si descubrimos que lo hicimos, los suprimiremos. Cualquier tratamiento excepcional respetará su interés superior y sus derechos fundamentales, con autorización de su representante legal (artículo 7 de la Ley 1581 y artículo 12 del Decreto 1377).',
      ],
    },
    {
      title: '6. Para qué usamos tus datos',
      items: [
        'Usamos cada dato solo para las finalidades que se relacionan con tu caso:',
        'a) Prestar el servicio (clientes y usuarios)',
        '1. Crear y administrar tu cuenta, darte acceso a GO Admin ERP y prestarte soporte y capacitación.',
        '2. Procesar pagos, emitir facturas y cumplir obligaciones contables, tributarias y legales.',
        '3. Enviarte mensajes del servicio: seguridad de la cuenta, cambios del servicio, vencimientos y cobros.',
        'b) Actividad comercial (con tu autorización)',
        '4. Contactarte por llamada, WhatsApp o correo, solo por los canales que autorizaste, para agendar reuniones virtuales, hacer demostraciones y presentarte los planes de GO Admin.',
        '5. Registrar en nuestro CRM las llamadas, mensajes, reuniones y el resultado de cada contacto, y asignar la reunión a una persona de nuestro equipo o de un aliado comercial que actúa por cuenta de GO Admin.',
        '6. Grabar y transcribir las llamadas comerciales, si lo aceptas, para tener prueba de tu autorización, revisar la calidad de la atención y capacitar al equipo.',
        '7. Enviarte novedades, contenidos e invitaciones de GO Admin, solo si marcaste la casilla correspondiente. Puedes cancelarlas en cualquier momento.',
        'c) Medición y publicidad (con tu autorización y según tus preferencias de cookies)',
        '8. Medir el resultado de nuestros anuncios en Meta (Facebook e Instagram) y Google con el píxel de Meta, la API de Conversiones de Meta, la etiqueta de Google Ads y Google Analytics 4: saber si una visita o un formulario terminó en una reunión, un registro, una prueba o un pago.',
        '9. Atribuir cada registro a su origen (campaña, anuncio, ciudad, asesor, aliado o referido) para decidir en qué invertir y liquidar comisiones de referidos y aliados.',
        '10. Crear públicos personalizados en Meta y Google con datos de contacto convertidos en códigos irreversibles (hash SHA-256), para mostrar anuncios a personas que ya se relacionan con GO Admin o para excluirlas. Solo usamos datos de personas que lo autorizaron; no subimos bases de datos de terceros ni bases compradas.',
        'd) Otras finalidades',
        '11. Gestionar procesos de selección de personal y la relación con trabajadores, proveedores, aliados e inversionistas.',
        '12. Atender peticiones, consultas y reclamos, y cumplir órdenes de autoridades.',
        '13. Prevenir fraude, proteger la seguridad de nuestros sistemas y hacer copias de seguridad.',
        '14. Elaborar estadísticas internas con datos agregados o anonimizados, que no te identifican.',
        'Si queremos usar tus datos para una finalidad nueva que no esté aquí, te pediremos una nueva autorización.',
      ],
    },
    {
      title: '7. Contacto comercial, llamadas grabadas y asistente virtual con IA',
      items: [
        '7.1 Reglas de contacto (Ley 2300 de 2023)',
        'Cuando te contactemos con fines comerciales o publicitarios, por llamada, WhatsApp, SMS o correo:',
        '• lo haremos solo por los canales que autorizaste;',
        '• solo de lunes a viernes de 7:00 a. m. a 7:00 p. m. y sábados de 8:00 a. m. a 3:00 p. m.; nunca domingos ni festivos (artículos 3 y 5 de la Ley 2300 de 2023);',
        '• una vez establecido contacto directo contigo, no te contactaremos más de una vez al día ni por varios canales en la misma semana, salvo la confirmación o el recordatorio de una reunión que tú agendaste;',
        '• consultaremos el Registro de Números Excluidos (RNE) de la Comisión de Regulación de Comunicaciones antes de llamar o escribir a quien no nos haya dado su autorización directa, y respetaremos la exclusión;',
        '• puedes pedir en cualquier momento que no te contactemos más, por el mismo canal en el que te contactamos o en servicio@goadmin.io. Lo registraremos en nuestra lista interna de «no contactar», sin costo y sin pedirte explicaciones.',
        'Si obtuvimos el teléfono de tu negocio de una fuente pública (por ejemplo, su página web o un directorio empresarial), en el primer contacto te diremos de dónde lo tomamos y te preguntaremos si autorizas que guardemos tus datos. Si no lo autorizas, no guardamos tus datos personales y solo registramos que no deseas ser contactado.',
        '7.2 Llamadas grabadas',
        'Al inicio de cada llamada comercial te avisaremos que queremos grabarla y para qué. La grabación empieza solo si aceptas; tu silencio no cuenta como aceptación. Si no quieres que se grabe, dilo y no la grabaremos (si ya había empezado, la detenemos y borramos el audio; si no es posible técnicamente, terminaremos la llamada y te ofreceremos otro canal). Si aceptas, la grabación y su transcripción se usan para las finalidades 5 y 6 de la sección 6 y sirven como prueba de tu autorización (artículo 7 del Decreto 1377 de 2013).',
        '7.3 Asistente virtual con inteligencia artificial',
        'GO Admin puede llamarte o conversar contigo mediante un asistente virtual con inteligencia artificial. En ese caso:',
        '• el asistente te dirá desde la primera frase que es un asistente virtual con inteligencia artificial y que llama en nombre de GO Admin, y lo confirmará cada vez que lo preguntes;',
        '• nunca se hará pasar por una persona real;',
        '• puedes pedir hablar con una persona de nuestro equipo en cualquier momento;',
        '• la conversación se procesa con proveedores de voz, transcripción y modelos de lenguaje (sección 9), que convierten tu voz en texto, generan las respuestas del asistente y extraen los datos de la conversación (por ejemplo, el horario de la reunión);',
        '• el asistente no toma decisiones que produzcan efectos jurídicos sobre ti: solo agenda reuniones y registra tu respuesta. Una persona de nuestro equipo revisa los resultados;',
        '• las mismas reglas de grabación, autorización, horarios y «no contactar» de esta sección aplican al asistente.',
        '7.4 Conservación de grabaciones',
        '• Audio de las llamadas: hasta 90 días.',
        '• Transcripción y resumen: hasta 180 días.',
        '• Si la llamada termina en una venta, o si la grabación es la prueba de tu autorización o de un reclamo, la conservamos mientras dure esa relación o el trámite, y durante el tiempo necesario para atender reclamaciones.',
      ],
    },
    {
      title: '8. Cookies, píxeles y tecnologías similares',
      items: [
        '8.1 Cómo pedimos tu consentimiento',
        'Cuando entras a goadmin.io te mostramos un aviso de cookies. Las cookies de medición y de publicidad no se instalan ni se activan hasta que las aceptes. Puedes aceptarlas todas, rechazar las opcionales con un solo clic o elegir por categoría. Seguir navegando o cerrar el aviso no cuenta como aceptación. Tu elección se guarda en la cookie goadmin_consent, que se comparte entre goadmin.io y app.goadmin.io para que no tengas que elegir dos veces.',
        'Puedes cambiar o retirar tu consentimiento en cualquier momento desde el enlace «Preferencias de cookies», en el pie de cada página, o borrando las cookies en tu navegador. Retirar el consentimiento no afecta lo tratado antes de retirarlo.',
      ],
    },
    {
      title: '8.2 Categorías',
      table: {
        cols: ['Categoría', 'Para qué sirven', 'Cookies y herramientas', 'Propias o de terceros', 'Duración aproximada', '¿Requiere tu consentimiento?'],
        rows: [
          [
            'Necesarias',
            'Que el sitio y la aplicación funcionen, sean seguros y recuerden tu elección de cookies',
            'goadmin_consent; cookies de sesión e inicio de sesión de app.goadmin.io (autenticación de Supabase); cookies de seguridad y enrutamiento de Vercel',
            'Propias y de nuestros encargados',
            'goadmin_consent: hasta 12 meses; sesión: mientras dure la sesión',
            'No se pueden desactivar porque sin ellas el servicio no funciona. No se usan para publicidad ni para seguirte en otros sitios',
          ],
          [
            'Medición',
            'Saber cuántas personas visitan el sitio, qué páginas ven y de qué campaña llegaron',
            'Google Analytics 4 (_ga, _ga_<ID>); Vercel Analytics; cookie propia de atribución goadmin_attr (guarda los UTM, fbclid y gclid con los que llegaste y tu página de entrada)',
            'Propias y de terceros (Google, Vercel)',
            '_ga: hasta 2 años; goadmin_attr: 90 días',
            'Sí',
          ],
          [
            'Publicidad',
            'Medir las conversiones de nuestros anuncios y mostrarte anuncios de GO Admin en Meta y Google',
            'Píxel de Meta (_fbp, _fbc); etiqueta de Google Ads y conversiones mejoradas (_gcl_au, _gcl_aw)',
            'De terceros (Meta Platforms, Google)',
            'Hasta 90 días',
            'Sí',
          ],
        ],
      },
      extraItems: [
        'La duración indicada para cookies de terceros es la que informa cada proveedor y puede cambiar. En la página https://goadmin.io/cookies publicamos la lista actualizada.',
      ],
    },
    {
      title: '8.3 API de Conversiones de Meta y datos enviados desde nuestros servidores',
      items: [
        'Además del píxel del navegador, podemos enviar a Meta y a Google, desde nuestros servidores, eventos como «formulario enviado», «reunión agendada», «registro completado», «prueba iniciada» o «pago», junto con tu correo y teléfono convertidos en hash SHA-256 y otros identificadores técnicos (por ejemplo, _fbp, _fbc, dirección IP y navegador). El hash impide leer el dato a simple vista, pero permite a la plataforma relacionarlo con una cuenta, así que lo tratamos como dato personal. Solo enviamos estos eventos de personas que aceptaron la medición y publicidad (en el aviso de cookies o en la casilla correspondiente del formulario). Si no lo aceptaste, no enviamos nada sobre ti.',
      ],
    },
    {
      title: '8.4 Dentro de GO Admin ERP',
      items: ['No usamos cookies de publicidad ni píxeles dentro de la aplicación una vez inicias sesión. La medición se limita a las páginas de registro y bienvenida, y siempre según tu elección de cookies.'],
    },
    {
      title: '9. Con quién compartimos tus datos y transferencias o transmisiones internacionales',
      items: [
        'No vendemos datos personales. Los compartimos solo con:',
        'a) Encargados (transmisión): proveedores que tratan datos por cuenta de GO Admin y según nuestras instrucciones.',
        'b) Terceros responsables (transferencia): plataformas que, además de prestarnos un servicio, tratan ciertos datos para sus propias finalidades según sus políticas (por ejemplo, Meta y Google cuando se usan para publicidad).',
        'c) Autoridades, cuando una ley o una orden lo exija.',
        'Varios de nuestros proveedores tienen servidores fuera de Colombia, principalmente en Estados Unidos. Estados Unidos y los países de la Unión Europea están en la lista de países con nivel adecuado de protección de la SIC (Circular Única, Título V, Capítulo Tercero, adicionado por la Circular Externa 005 de 2017 y actualizado por la Circular Externa 002 de 2018). Para otros destinos aplicamos las excepciones del artículo 26 de la Ley 1581 o pedimos la declaración de conformidad a la SIC. Con cada encargado exigimos, por contrato o por sus condiciones de servicio, confidencialidad, seguridad y uso de los datos solo para la finalidad encargada (artículos 24 y 25 del Decreto 1377 de 2013).',
      ],
      table: {
        cols: ['Proveedor', 'Para qué', 'Datos', 'Rol', 'Ubicación principal'],
        rows: [
          [
            'Supabase',
            'Base de datos, autenticación y almacenamiento de GO Admin ERP y del CRM, incluidas las grabaciones y transcripciones de llamadas',
            'Todos los datos de la cuenta, del CRM y los que cargan los clientes; audio y transcripciones de llamadas',
            'Encargado (transmisión)',
            'EE. UU. (AWS, región us-west-1, norte de California)',
          ],
          [
            'Vercel',
            'Alojamiento del sitio, de la aplicación y de los servicios que reciben los eventos de las llamadas; analítica del sitio',
            'Datos de navegación, datos que pasan por la aplicación y datos de las llamadas',
            'Encargado (transmisión)',
            'EE. UU. (región iad1, Washington D. C.) y red global de entrega',
          ],
          ['Railway', 'Servidor que conecta el asistente virtual con la llamada', 'Audio, texto y datos de la llamada en tránsito', 'Encargado (transmisión)', 'EE. UU. (región us-west2)'],
          ['Stripe', 'Procesamiento de pagos y suscripciones', 'Nombre, correo, datos de pago, facturas', 'Encargado para el cobro; responsable de sus propias obligaciones de prevención de fraude y lavado', 'EE. UU.'],
          [
            'Meta Platforms (Facebook, Instagram, WhatsApp)',
            'Formularios de anuncios, píxel, API de Conversiones, públicos personalizados y mensajería de WhatsApp',
            'Datos del formulario, eventos, identificadores y datos de contacto en hash, mensajes',
            'Encargado en algunos servicios; responsable (transferencia) en el uso publicitario, según sus condiciones',
            'EE. UU. e Irlanda',
          ],
          [
            'Google (Ads, Analytics 4, Workspace, Calendar, Meet, Sheets)',
            'Medición y publicidad; correo, agenda, videollamadas y hojas de respaldo',
            'Eventos, identificadores, datos de contacto en hash; correos, invitaciones y registros de reuniones',
            'Encargado en Analytics y Workspace; responsable (transferencia) en el uso publicitario, según sus condiciones',
            'EE. UU. y otras regiones',
          ],
          ['Google (Gemini)', 'Analizar las llamadas grabadas: resumen, resultado y datos acordados', 'Transcripción de la llamada', 'Encargado (transmisión)', 'Estados Unidos u otros países con nivel adecuado de protección'],
          [
            'Make (Celonis)',
            'Traslado automático de los formularios de anuncios al CRM y a la hoja de respaldo',
            'Datos del formulario',
            'Encargado (transmisión)',
            'Estados Unidos u otros países con nivel adecuado de protección',
          ],
          ['Resend', 'Envío de correos del servicio', 'Nombre, correo y contenido del mensaje', 'Encargado (transmisión)', 'EE. UU.'],
          [
            'Twilio',
            'Telefonía: números, conexión y grabación de las llamadas de nuestro equipo y del asistente virtual; lectura del aviso de grabación',
            'Número de teléfono, metadatos, audio y grabaciones',
            'Encargado (transmisión)',
            'Estados Unidos u otros países con nivel adecuado de protección',
          ],
          ['ElevenLabs (Scribe)', 'Transcribir las grabaciones de las llamadas', 'Audio y transcripción', 'Encargado (transmisión)', 'Estados Unidos u otros países con nivel adecuado de protección'],
          ['OpenAI', 'Modelo de lenguaje que genera las respuestas del asistente virtual con IA', 'Texto de la conversación', 'Encargado (transmisión)', 'EE. UU.'],
          [
            'ElevenLabs (voz) y Deepgram (transcripción en vivo), a través de Twilio',
            'Voz del asistente virtual y conversión de tu voz a texto durante la llamada',
            'Texto de las respuestas y audio de la conversación',
            'Encargados de Twilio (subencargados)',
            'Estados Unidos u otros países con nivel adecuado de protección',
          ],
          ['Amazon Web Services (Amazon Polly), a través de Twilio', 'Voz que lee el aviso de grabación al inicio de las llamadas', 'Texto del aviso (no trata tu voz)', 'Encargado de Twilio (subencargado)', 'Estados Unidos u otros países con nivel adecuado de protección'],
          [
            'Aliados comerciales que atienden reuniones por cuenta de GO Admin',
            'Atender la reunión virtual que agendaste',
            'Nombre, correo, WhatsApp, negocio y resumen de la llamada',
            'Encargado (transmisión), con contrato de transmisión y confidencialidad',
            'Colombia',
          ],
          ['Contador y asesores legales', 'Contabilidad, impuestos y asesoría', 'Datos de facturación y los necesarios para el encargo', 'Encargado o responsable según el caso, con deber de reserva', 'Colombia'],
        ],
      },
      extraItems: ['Cuando cambiemos o agreguemos proveedores que traten tus datos de forma relevante, actualizaremos esta tabla.'],
    },
    {
      title: '10. Tus derechos',
      items: [
        'Como titular tienes derecho a (artículo 8 de la Ley 1581 de 2012):',
        '1. conocer, actualizar y rectificar tus datos, incluso los parciales, inexactos, incompletos o que induzcan a error;',
        '2. pedir prueba de la autorización que nos diste, salvo cuando la ley no la exige;',
        '3. saber, si lo pides, qué uso les hemos dado a tus datos;',
        '4. presentar quejas ante la Superintendencia de Industria y Comercio, después de haber hecho tu consulta o reclamo ante GO Admin (artículo 16 de la Ley 1581);',
        '5. revocar la autorización y pedir que suprimamos tus datos, cuando no exista un deber legal o contractual de conservarlos;',
        '6. acceder gratis a tus datos personales, al menos una vez al mes y cada vez que modifiquemos sustancialmente esta política (artículo 21 del Decreto 1377).',
        'También puedes responder o no las preguntas sobre datos sensibles o sobre datos de niñas, niños y adolescentes: es facultativo.',
      ],
    },
    {
      title: '11. Cómo ejercer tus derechos',
      items: [
        'Responsable de atender las solicitudes: Juan Camilo Gallego Aguirre, representante legal de Go Admin S.A.S. Canal principal: servicio@goadmin.io.',
        'Canales:',
        '• correo: servicio@goadmin.io;',
        '• WhatsApp o teléfono: +57 311 319 5711, de lunes a viernes de 8:00 a. m. a 6:00 p. m.;',
        '• escrito físico: Carrera 87 B # 45 B - 8, Medellín, Antioquia;',
        '• para eliminar tu cuenta de GO Admin ERP: https://goadmin.io/eliminacion-datos.',
        'Quién puede pedir: tú, tus causahabientes, tu representante o apoderado, o quien estipule a tu favor (artículo 20 del Decreto 1377).',
        'Qué incluir: nombre, número de documento, datos de contacto, descripción clara de lo que pides y, si actúas por otra persona, el documento que lo acredite.',
        'Consultas (para saber qué datos tenemos o cómo los usamos): te respondemos en máximo 10 días hábiles desde que recibimos la consulta. Si no es posible, te diremos por qué y la nueva fecha, que no superará 5 días hábiles adicionales (artículo 14 de la Ley 1581).',
        'Reclamos (para corregir, actualizar o suprimir datos, revocar la autorización o denunciar un incumplimiento): te respondemos en máximo 15 días hábiles desde el día siguiente a su recibo. Si no es posible, te diremos por qué y la nueva fecha, que no superará 8 días hábiles adicionales. Si el reclamo está incompleto, te pediremos completarlo dentro de los 5 días siguientes; si pasan 2 meses sin que lo completes, se entenderá que desististe. Mientras se resuelve, marcaremos el dato como «reclamo en trámite» (artículo 15 de la Ley 1581).',
        'Revocatoria y supresión: la atenderemos salvo que tengas un deber legal o contractual de permanecer en la base de datos (por ejemplo, datos de facturación que debemos conservar por ley). Si pides no recibir más mensajes comerciales, lo aplicamos de inmediato en nuestra lista de «no contactar».',
      ],
    },
    {
      title: '12. Autorización y cómo la probamos',
      items: [
        'Pedimos tu autorización antes de recoger tus datos, de forma expresa e informada: por escrito, en casillas sin marcar en formularios, de viva voz en una llamada grabada o mediante conductas inequívocas que permitan concluir razonablemente que la otorgaste (artículo 9 de la Ley 1581; artículos 5 y 7 del Decreto 1377, compilados en los artículos 2.2.2.25.2.2 y 2.2.2.25.2.4 del Decreto 1074 de 2015). El silencio, las casillas marcadas de antemano o seguir navegando no son autorización.',
        'Guardamos prueba de cada autorización: texto aceptado, versión de esta política, fecha, hora, canal y origen (formulario, llamada, registro o aviso de cookies).',
        'No necesitamos autorización cuando la ley lo permite (artículo 10 de la Ley 1581), por ejemplo para datos de naturaleza pública, para cumplir un contrato contigo o por orden de autoridad. Aun así, siempre te informamos.',
      ],
    },
    {
      title: '13. Seguridad',
      items: [
        'Aplicamos medidas técnicas, humanas y administrativas razonables para proteger tus datos contra pérdida, consulta, uso o acceso no autorizado: cifrado en tránsito (TLS), control de acceso por roles y reglas de seguridad a nivel de base de datos, autenticación de usuarios, copias de seguridad de nuestro proveedor de base de datos, acuerdos de confidencialidad con quienes acceden a los datos y acceso limitado del equipo comercial y de los aliados solo a las oportunidades asignadas. Nuestros proveedores de infraestructura cuentan con sus propios programas y certificaciones de seguridad; esas certificaciones son de ellos, no de GO Admin.',
        'Si ocurre un incidente de seguridad que afecte tus datos, lo informaremos a la SIC y, cuando corresponda, a ti, según el artículo 17, literal n, de la Ley 1581.',
      ],
    },
    {
      title: '14. Cuánto tiempo guardamos los datos',
      table: {
        cols: ['Datos', 'Plazo'],
        rows: [
          ['Cuenta y datos del servicio', 'Mientras la cuenta esté activa y, después de la cancelación, el tiempo necesario para devolver o suprimir los datos según los Términos y Condiciones, salvo lo que debamos conservar por ley'],
          ['Contables, de facturación y soportes', '10 años (artículo 28 de la Ley 962 de 2005)'],
          ['Prospectos que no se convierten en clientes', 'Hasta 24 meses desde el último contacto, salvo que antes revoquen la autorización'],
          ['Lista de «no contactar»', 'Mientras GO Admin haga actividades comerciales, solo con el dato mínimo para respetar tu decisión'],
          ['Audio de llamadas', 'Hasta 90 días (sección 7.4)'],
          ['Transcripciones y resúmenes de llamadas', 'Hasta 180 días (sección 7.4)'],
          ['Archivos descargados de formularios de anuncios y hojas de respaldo', '30 días después de cargarlos en el CRM'],
          ['Candidatos no seleccionados', 'Hasta 12 meses desde el cierre del proceso de selección, salvo que antes pidan la supresión'],
          ['Trabajadores y extrabajadores', 'Durante la relación laboral y después, por los plazos legales de conservación laboral, contable y de seguridad social'],
          ['Cookies', 'Según la tabla de la sección 8.2'],
        ],
      },
      extraItems: ['Al vencer el plazo, suprimimos o anonimizamos los datos.'],
    },
    {
      title: '15. Registro Nacional de Bases de Datos',
      items: ['Go Admin S.A.S. inscribirá sus bases de datos en el Registro Nacional de Bases de Datos de la SIC cuando cumpla las condiciones del Decreto 090 de 2018 (sociedades con activos totales superiores a 100.000 UVT).'],
    },
    {
      title: '16. Cambios a esta política',
      items: [
        'Si cambiamos algo sustancial de esta política (por ejemplo, el responsable, las finalidades o los proveedores con los que compartimos datos), lo publicaremos en https://goadmin.io/privacidad y te lo informaremos antes de aplicarlo por correo o en el sitio. Cuando el cambio se refiera a las finalidades, te pediremos una nueva autorización (artículo 5 del Decreto 1377). Usar el sitio o el servicio después de un cambio no equivale a aceptarlo.',
      ],
    },
    {
      title: '17. Vigencia',
      items: [
        'Esta política fue publicada el 2 de octubre de 2026 y rige desde esa fecha. Las bases de datos estarán vigentes mientras GO Admin desarrolle su objeto social y durante los plazos de la sección 14.',
        'Versiones anteriores: «Política de privacidad», 15 de enero de 2024.',
      ],
    },
  ] as (LegalSection & { table?: LegalTable; extraItems?: string[] })[],
  contacts: [
    {
      title: 'Ejercer tus derechos',
      text: 'Solicita acceso, corrección o eliminación de tus datos personales.',
      email: CONTACT.email,
    },
  ],
}

export const PRIVACY_NOTICE = {
  title: 'Aviso de privacidad de Go Admin S.A.S.',
  updated: '2 de octubre de 2026',
  version: 'Versión 1.0',
  vigente: 'Vigente desde el 2 de octubre de 2026',
  intro: '',
  sections: [
    {
      title: 'Quién trata tus datos',
      items: [
        'Go Admin S.A.S., NIT 901.479.683-5, con domicilio en Medellín, Colombia, dirección Carrera 87 B # 45 B - 8, Medellín, Antioquia, correo servicio@goadmin.io y WhatsApp +57 311 319 5711.',
      ],
    },
    {
      title: 'Para qué usamos tus datos',
      items: [
        '• Crear y administrar tu cuenta, prestarte el servicio, facturar y darte soporte.',
        '• Contactarte por llamada, WhatsApp o correo, solo si lo autorizaste, para agendar una reunión virtual o una demostración de GO Admin.',
        '• Grabar y transcribir las llamadas comerciales, si lo aceptas, como prueba de tu autorización y para revisar la calidad. Algunas llamadas las hace un asistente virtual con inteligencia artificial, que siempre te lo dirá al empezar.',
        '• Enviarte novedades de GO Admin, solo si lo aceptaste.',
        '• Medir nuestros anuncios en Meta y Google y mostrarte publicidad de GO Admin, solo si aceptas las cookies de medición y publicidad o la casilla correspondiente.',
      ],
    },
    {
      title: 'Con quién los compartimos',
      items: [
        'Con proveedores que nos ayudan a operar, la mayoría con servidores en Estados Unidos: Supabase (base de datos y grabaciones), Vercel y Railway (alojamiento), Stripe (pagos), Meta y Google (formularios, publicidad, correo y agenda), Resend (correos), Make (traslado de formularios al CRM), Twilio (llamadas y grabaciones), ElevenLabs (transcripción de grabaciones y voz del asistente), Google Gemini (análisis de las llamadas), OpenAI (respuestas del asistente virtual), Deepgram (transcripción durante las llamadas del asistente) y Amazon Polly (voz del aviso de grabación). También con aliados que atienden reuniones por cuenta nuestra. No vendemos tus datos. El detalle está en la política.',
      ],
    },
    {
      title: 'Si eres cliente de una empresa que usa GO Admin ERP',
      items: ['Esa empresa es la responsable de tus datos; GO Admin solo los trata por su cuenta para prestarle el servicio.'],
    },
    {
      title: 'Tus derechos',
      items: [
        'Conocer, actualizar, rectificar y suprimir tus datos; pedir prueba de tu autorización o revocarla; saber qué uso les damos; pedir que no te contactemos más; y presentar quejas ante la Superintendencia de Industria y Comercio. No estás obligado a responder preguntas sobre datos sensibles ni sobre datos de niñas, niños y adolescentes.',
      ],
    },
    {
      title: 'Cómo ejercerlos',
      items: [
        'Juan Camilo Gallego Aguirre, representante legal de Go Admin S.A.S., es el responsable de atender tus solicitudes. Escribe a servicio@goadmin.io (canal principal), al WhatsApp +57 311 319 5711 o por escrito a la Carrera 87 B # 45 B - 8, Medellín. Respondemos consultas en máximo 10 días hábiles y reclamos en máximo 15 días hábiles.',
      ],
    },
    {
      title: 'Vigencia',
      items: ['Este aviso fue publicado el 2 de octubre de 2026 y rige desde esa fecha.'],
    },
    {
      title: 'Política completa',
      items: ['Consulta la Política de Tratamiento de Datos Personales en https://goadmin.io/privacidad. Si cambia algo sustancial, lo publicaremos allí y te avisaremos antes de aplicarlo.'],
    },
  ] as LegalSection[],
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
    { title: 'Solicitar eliminación', text: 'Contacta a nuestro equipo de privacidad por correo, teléfono o WhatsApp en servicio@goadmin.io o +57 311 319 5711 con tu solicitud de eliminación de datos.' },
    { title: 'Verificación de identidad', text: 'Verificaremos tu identidad y que seas el propietario de la cuenta para proteger tu seguridad.' },
    { title: 'Procesamiento', text: 'Respondemos consultas en máximo 10 días hábiles y reclamos en máximo 15 días hábiles, según los artículos 14 y 15 de la Ley 1581 de 2012.' },
    { title: 'Confirmación', text: 'Recibirás confirmación de que tus datos han sido eliminados permanentemente de nuestros sistemas, salvo los que debamos conservar por ley.' },
  ],
  retention: [
    { type: 'Datos de cuenta', period: 'Eliminados de forma segura (30 días de eliminación lógica)' },
    { type: 'Datos de facturación', period: 'Conservados por 10 años (artículo 28 de la Ley 962 de 2005)' },
    { type: 'Datos de negocio', period: 'Eliminados completamente' },
    { type: 'Logs de seguridad', period: 'Purgados después de 30 días (auditoría completada)' },
    { type: 'Copias de respaldo', period: 'Eliminados en el siguiente ciclo de respaldo (máx. 90 días)' },
  ],
  faq: [
    { q: '¿Puedo recuperar mis datos después de solicitar la eliminación?', a: 'No. Una vez iniciado el proceso de eliminación, los datos se borran permanentemente. No podrán ser recuperados.' },
    { q: '¿Se eliminarán mis datos de facturación?', a: 'Los datos de facturación se conservan por 10 años conforme al artículo 28 de la Ley 962 de 2005. El resto de datos se elimina completamente.' },
    { q: '¿Cuánto tiempo tarda la eliminación?', a: 'Respondemos consultas en máximo 10 días hábiles y reclamos en máximo 15 días hábiles, según los artículos 14 y 15 de la Ley 1581 de 2012. Recibirás confirmación cuando se complete.' },
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
 * Política de cookies. Refleja lo que el sitio usa de verdad: una cookie de preferencia de país e
 * idioma, el registro del consentimiento y la analítica de Vercel (solo si la aceptas).
 */
export const COOKIES = {
  title: 'Política de cookies',
  updated: '2 de octubre de 2026',
  intro:
    'Explicamos qué cookies usa goadmin.io, para qué sirven y cómo cambiar tu elección. Esta página cumple la sección 8 de la Política de Tratamiento de Datos Personales.',
  what: 'Una cookie es un archivo pequeño que el sitio guarda en tu navegador para recordar algo, como tu país o idioma. Tecnologías parecidas, como el almacenamiento local del navegador, se tratan igual en esta política.',
  categories: [
    {
      id: 'necessary',
      title: 'Necesarias',
      text: 'Hacen que el sitio funcione, sean seguros y recuerden tu elección de cookies. No se pueden desactivar porque sin ellas el servicio no funciona.',
      always: true,
    },
    {
      id: 'analytics',
      title: 'Medición',
      text: 'Nos ayudan a saber cuántas personas visitan el sitio, qué páginas ven y de qué campaña llegaron. Solo se activan si las aceptas.',
      always: false,
    },
    {
      id: 'advertising',
      title: 'Publicidad',
      text: 'Miden las conversiones de nuestros anuncios y permiten mostrarte anuncios de GO Admin en Meta y Google. Solo se activan si las aceptas.',
      always: false,
    },
  ],
  table: [
    { name: 'goadmin_consent', category: 'Necesarias', purpose: 'Guarda tu elección sobre cookies para no volver a preguntarte.', duration: 'Hasta 12 meses', provider: 'GO Admin' },
    { name: 'Cookies de sesión de app.goadmin.io', category: 'Necesarias', purpose: 'Autenticación de Supabase para mantenerte conectado.', duration: 'Mientras dure la sesión', provider: 'GO Admin (Supabase)' },
    { name: 'Cookies de seguridad y enrutamiento de Vercel', category: 'Necesarias', purpose: 'Proteger el sitio y enrutar las peticiones.', duration: 'Varía', provider: 'Vercel' },
    { name: '_ga', category: 'Medición', purpose: 'Identificador de Google Analytics 4 para medir visitas.', duration: 'Hasta 2 años', provider: 'Google' },
    { name: '_ga_<ID>', category: 'Medición', purpose: 'Identificador de sesión de Google Analytics 4.', duration: 'Hasta 2 años', provider: 'Google' },
    { name: 'Vercel Analytics', category: 'Medición', purpose: 'Mide visitas a páginas de forma agregada, sin cookies de seguimiento.', duration: 'No guarda cookies', provider: 'Vercel' },
    { name: 'goadmin_attr', category: 'Medición', purpose: 'Cookie propia de atribución que guarda los UTM, fbclid y gclid con los que llegaste y tu página de entrada.', duration: '90 días', provider: 'GO Admin' },
    { name: '_fbp', category: 'Publicidad', purpose: 'Píxel de Meta para medir conversiones de anuncios.', duration: 'Hasta 90 días', provider: 'Meta Platforms' },
    { name: '_fbc', category: 'Publicidad', purpose: 'Píxel de Meta para medir conversiones de anuncios.', duration: 'Hasta 90 días', provider: 'Meta Platforms' },
    { name: '_gcl_au', category: 'Publicidad', purpose: 'Etiqueta de Google Ads para medir conversiones.', duration: 'Hasta 90 días', provider: 'Google' },
    { name: '_gcl_aw', category: 'Publicidad', purpose: 'Etiqueta de Google Ads y conversiones mejoradas.', duration: 'Hasta 90 días', provider: 'Google' },
  ],
  notUsed: 'La duración indicada para cookies de terceros es la que informa cada proveedor y puede cambiar. En esta página publicamos la lista actualizada.',
  app: 'No usamos cookies de publicidad ni píxeles dentro de la aplicación una vez inicias sesión. La medición se limita a las páginas de registro y bienvenida, y siempre según tu elección de cookies.',
  manage: [
    'Puedes cambiar o retirar tu consentimiento en cualquier momento desde el enlace «Preferencias de cookies», en el pie de cada página, o borrando las cookies en tu navegador.',
    'Retirar el consentimiento no afecta lo tratado antes de retirarlo. Si bloqueas las necesarias, el sitio puede no recordar tu país e idioma.',
  ],
  contact: { title: '¿Tienes preguntas sobre cookies?', text: 'Escríbenos y te respondemos.', email: CONTACT.email },
}
