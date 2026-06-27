"use client"

import { Mail, Phone, MapPin, Shield, Eye, Lock, FileText, Users, Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/lib/i18n"

export default function PrivacidadPage() {
  const { t, lang } = useLanguage()
  const [expandedSection, setExpandedSection] = useState<number | null>(null)

  const sections = [
    {
      title: lang === "es" ? "1. Objeto de la Política" : "1. Purpose of This Policy",
      content: lang === "es" ? [
        "Esta Política de Privacidad establece cómo GO Admin (en adelante 'la Plataforma', 'nosotros' o 'nuestros') recopila, usa, protege y comparte la información personal de nuestros usuarios.",
        "Cumplimos con la legislación colombiana, incluyendo la Ley Estatutaria 1581 de 2012 (LSIPA) y su decreto reglamentario 1377 de 2013, así como regulaciones internacionales como el RGPD (Reglamento General de Protección de Datos).",
        "Nos comprometemos a ser transparentes sobre nuestras prácticas de privacidad y a proteger tus derechos como titular de datos.",
      ] : [
        "This Privacy Policy establishes how GO Admin (hereinafter 'the Platform', 'we' or 'our') collects, uses, protects and shares the personal information of our users.",
        "We comply with Colombian legislation, including Law 1581 of 2012 (LSIPA) and its regulatory decree 1377 of 2013, as well as international regulations such as the GDPR (General Data Protection Regulation).",
        "We are committed to being transparent about our privacy practices and protecting your rights as a data subject.",
      ],
    },
    {
      title: lang === "es" ? "2. Datos que Recopilamos" : "2. Data We Collect",
      content: lang === "es" ? [
        "Información de Registro: nombre completo, correo electrónico, número de teléfono, empresa, cargo y datos de facturación",
        "Información del Perfil: foto de perfil, preferencias de idioma, zona horaria y configuración de cuenta",
        "Datos de Uso: registro de acceso, módulos utilizados, informes generados, tiempo de sesión",
        "Información Técnica: dirección IP, tipo de navegador, sistema operativo, dispositivo, identificador único",
        "Datos Empresariales: información ingresada en los módulos (ventas, inventario, finanzas, recursos humanos, etc.)",
        "Comunicaciones: mensajes de soporte, retroalimentación, encuestas y preferencias de contacto",
        "Cookies y Tecnologías Similares: identificadores de sesión, preferencias de usuario, análisis de comportamiento",
      ] : [
        "Registration Information: full name, email address, phone number, company, position and billing data",
        "Profile Information: profile picture, language preferences, timezone and account settings",
        "Usage Data: access logs, modules used, generated reports, session time",
        "Technical Information: IP address, browser type, operating system, device, unique identifier",
        "Business Data: information entered in modules (sales, inventory, finance, human resources, etc.)",
        "Communications: support messages, feedback, surveys and contact preferences",
        "Cookies and Similar Technologies: session identifiers, user preferences, behavioral analytics",
      ],
    },
    {
      title: lang === "es" ? "3. Base Legal para el Procesamiento" : "3. Legal Basis for Processing",
      content: lang === "es" ? [
        "Cumplimiento de Contrato: procesamos datos necesarios para cumplir con nuestros términos de servicio",
        "Consentimiento: recopilamos datos adicionales solo con tu consentimiento explícito",
        "Obligaciones Legales: cumplimos con requisitos de autoridades competentes y reguladores",
        "Intereses Legítimos: mejora de servicios, seguridad y prevención de fraude",
        "Acuerdos de Confidencialidad: protección de datos confidenciales de tu empresa",
      ] : [
        "Contract Performance: we process data necessary to fulfill our terms of service",
        "Consent: we collect additional data only with your explicit consent",
        "Legal Obligations: we comply with requirements from competent authorities and regulators",
        "Legitimate Interests: service improvement, security and fraud prevention",
        "Confidentiality Agreements: protection of your company's confidential data",
      ],
    },
    {
      title: lang === "es" ? "4. Uso de la Información" : "4. Use of Information",
      content: lang === "es" ? [
        "Proporcionar y mantener nuestros servicios ERP",
        "Procesar pagos y gestionar tu suscripción",
        "Comunicarnos contigo sobre actualizaciones, mantenimiento y cambios de política",
        "Proporcionar soporte técnico y atención al cliente (24/7)",
        "Personalizar tu experiencia y recomendaciones",
        "Mejorar nuestros productos y desarrollar nuevas funcionalidades",
        "Cumplir con obligaciones legales y regulatorias",
        "Prevenir fraude, abuso y garantizar la seguridad de la plataforma",
        "Análisis estadístico y reportes (datos agregados y anonimizados)",
      ] : [
        "Provide and maintain our ERP services",
        "Process payments and manage your subscription",
        "Communicate with you about updates, maintenance and policy changes",
        "Provide technical support and customer service (24/7)",
        "Personalize your experience and recommendations",
        "Improve our products and develop new features",
        "Comply with legal and regulatory obligations",
        "Prevent fraud, abuse and ensure platform security",
        "Statistical analysis and reporting (aggregated and anonymized data)",
      ],
    },
    {
      title: lang === "es" ? "5. Compartir Información con Terceros" : "5. Sharing Information with Third Parties",
      content: lang === "es" ? [
        "NO VENDEMOS tu información personal a terceros bajo ninguna circunstancia",
        "Compartimos datos solo cuando es necesario para cumplir nuestro servicio",
        "Proveedores de Servicios: procesadores de pago, servidores cloud (bajo acuerdos de confidencialidad)",
        "Autoridades Competentes: solo cuando lo requiera la ley (orden judicial, investigación)",
        "Fusión o Adquisición: en caso de cambio de control, con previo aviso y oportunidad de oposición",
        "Servicios Integrados: con tu consentimiento explícito para integraciones de terceros",
        "Todos los procesadores de datos firman acuerdos de Encargo de Procesamiento (APT) según LSIPA",
      ] : [
        "WE DO NOT SELL your personal information to third parties under any circumstances",
        "We share data only when necessary to provide our service",
        "Service Providers: payment processors, cloud servers (under confidentiality agreements)",
        "Competent Authorities: only when required by law (court order, investigation)",
        "Merger or Acquisition: in case of change of control, with prior notice and opportunity to object",
        "Third-Party Services: with your explicit consent for third-party integrations",
        "All data processors sign Data Processing Agreements (DPA) according to LSIPA",
      ],
    },
    {
      title: lang === "es" ? "6. Seguridad y Protección de Datos" : "6. Security and Data Protection",
      content: lang === "es" ? [
        "Cifrado End-to-End: todos los datos en tránsito utilizan TLS 1.3",
        "Almacenamiento Seguro: datos en reposo cifrados con AES-256",
        "Servidores Certificados: infraestructura con certificaciones SOC 2 Type II, ISO 27001",
        "Autenticación Fuerte: autenticación de dos factores (2FA) disponible",
        "Acceso Restringido: principio de mínimo privilegio para personal autorizado",
        "Monitoreo 24/7: detección de intrusiones y monitoreo de seguridad continuo",
        "Backups Automáticos: copias de seguridad diarias en múltiples ubicaciones",
        "Plan de Respuesta: protocolo de incidentes de seguridad y notificación a usuarios",
        "Auditorías Regulares: pruebas de penetración y auditorías de seguridad anuales",
      ] : [
        "End-to-End Encryption: all data in transit uses TLS 1.3",
        "Secure Storage: data at rest encrypted with AES-256",
        "Certified Servers: infrastructure with SOC 2 Type II, ISO 27001 certifications",
        "Strong Authentication: two-factor authentication (2FA) available",
        "Restricted Access: principle of least privilege for authorized personnel",
        "24/7 Monitoring: intrusion detection and continuous security monitoring",
        "Automatic Backups: daily backups in multiple locations",
        "Incident Response: security incident protocol and user notification",
        "Regular Audits: annual penetration testing and security audits",
      ],
    },
    {
      title: lang === "es" ? "7. Tus Derechos como Titular de Datos" : "7. Your Rights as a Data Subject",
      content: lang === "es" ? [
        "Derecho de Acceso: solicitar acceso a tu información personal (LSIPA Art. 14)",
        "Derecho de Rectificación: corregir datos inexactos o incompletos",
        "Derecho de Cancelación: solicitar eliminación de tus datos personales",
        "Derecho de Oposición: oponerte al procesamiento de tus datos en ciertos casos",
        "Derecho a la Portabilidad: recibir tus datos en formato estructurado y transferible",
        "Derecho a no ser Sometido a Decisiones Automatizadas: exclusión de perfilado automatizado",
        "Derecho a Retirar Consentimiento: revocar autorización en cualquier momento",
        "Para ejercer estos derechos, contacta al Responsable del Tratamiento (ver sección de contacto)",
      ] : [
        "Right of Access: request access to your personal information (LSIPA Art. 14)",
        "Right of Rectification: correct inaccurate or incomplete data",
        "Right of Erasure: request deletion of your personal data",
        "Right to Object: oppose processing of your data in certain cases",
        "Right to Data Portability: receive your data in structured and transferable format",
        "Right to Automated Decision-Making: exclusion from automated profiling",
        "Right to Withdraw Consent: revoke authorization at any time",
        "To exercise these rights, contact the Data Controller (see contact section)",
      ],
    },
    {
      title: lang === "es" ? "8. Retención de Datos" : "8. Data Retention",
      content: lang === "es" ? [
        "Datos de Cuenta: mantenidos mientras tu cuenta esté activa",
        "Datos de Facturación: conservados por 7 años (requisito legal en Colombia)",
        "Logs de Acceso: mantenidos por 2 años para seguridad y auditoría",
        "Datos Empresariales: conservados según tu política de retención configurada",
        "Al Cancelar Cuenta: datos eliminados en 30 días, excepto lo requerido legalmente",
        "Solicitudes de Cancelación: procesadas en máximo 10 días hábiles (LSIPA)",
      ] : [
        "Account Data: retained while your account is active",
        "Billing Data: retained for 7 years (legal requirement in Colombia)",
        "Access Logs: retained for 2 years for security and audit purposes",
        "Business Data: retained according to your configured retention policy",
        "Upon Account Cancellation: data deleted within 30 days, except as legally required",
        "Cancellation Requests: processed within maximum 10 business days (LSIPA)",
      ],
    },
    {
      title: lang === "es" ? "9. Transferencias Internacionales" : "9. International Transfers",
      content: lang === "es" ? [
        "Tus datos pueden procesarse en servidores ubicados en diferentes países",
        "Garantizamos que todos nuestros proveedores mantienen estándares de protección equivalentes",
        "Utilizamos Cláusulas Contractuales Estándar de la UE para transferencias",
        "Cumplimos con decisiones de adecuación de la UE reconocidas internacionalmente",
        "Protecciones Contractuales: acuerdos de confidencialidad y seguridad con proveedores",
        "Puedes solicitar información detallada sobre ubicaciones de procesamiento",
      ] : [
        "Your data may be processed on servers located in different countries",
        "We guarantee that all our providers maintain equivalent protection standards",
        "We use EU Standard Contractual Clauses for transfers",
        "We comply with internationally recognized EU adequacy decisions",
        "Contractual Protections: confidentiality and security agreements with providers",
        "You can request detailed information about processing locations",
      ],
    },
    {
      title: lang === "es" ? "10. Cookies y Tecnologías de Seguimiento" : "10. Cookies and Tracking Technologies",
      content: lang === "es" ? [
        "Cookies Esenciales: requeridas para el funcionamiento de la plataforma",
        "Cookies de Sesión: mantienen tu sesión activa y segura",
        "Cookies de Análisis: Google Analytics (anonimizado) para mejorar experiencia",
        "Cookies de Preferencia: guardan tus preferencias de idioma y configuración",
        "Sin Cookies de Publicidad: no utilizamos cookies de terceros para publicidad",
        "Gestión: puedes desactivar cookies no esenciales en tu navegador (afectará funcionalidad)",
        "Consentimiento: requiere tu consentimiento explícito para cookies opcionales",
      ] : [
        "Essential Cookies: required for platform functionality",
        "Session Cookies: keep your session active and secure",
        "Analytics Cookies: Google Analytics (anonymized) to improve experience",
        "Preference Cookies: save your language preferences and settings",
        "No Advertising Cookies: we do not use third-party cookies for advertising",
        "Management: you can disable non-essential cookies in your browser (will affect functionality)",
        "Consent: requires your explicit consent for optional cookies",
      ],
    },
    {
      title: lang === "es" ? "11. Menores de Edad" : "11. Minors",
      content: lang === "es" ? [
        "GO Admin está destinado a usuarios mayores de 18 años",
        "No recopilamos conscientemente información de menores",
        "Si descubrimos que un menor ha proporcionado información, la eliminaremos inmediatamente",
        "Los padres/tutores pueden contactarnos para solicitar eliminación de datos de menores",
        "Para cuentas empresariales, el responsable debe garantizar consentimiento de empleados mayores de edad",
      ] : [
        "GO Admin is intended for users over 18 years old",
        "We do not knowingly collect information from minors",
        "If we discover a minor has provided information, we will delete it immediately",
        "Parents/guardians can contact us to request deletion of minor's data",
        "For business accounts, the responsible person must ensure consent from employees over 18 years old",
      ],
    },
    {
      title: lang === "es" ? "12. Cambios a Esta Política" : "12. Changes to This Policy",
      content: lang === "es" ? [
        "Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento",
        "Cambios Significativos: notificaremos mediante correo electrónico con 30 días de anticipación",
        "Cambios Menores: pueden entrar en vigor inmediatamente",
        "Continuación del Servicio: implica aceptación de la política actualizada",
        "Versión Anterior: disponible bajo solicitud al Responsable del Tratamiento",
      ] : [
        "We reserve the right to update this Privacy Policy at any time",
        "Significant Changes: we will notify via email with 30 days notice",
        "Minor Changes: may take effect immediately",
        "Continuation of Service: implies acceptance of the updated policy",
        "Previous Version: available upon request to the Data Controller",
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                {lang === "es" ? "Política de Privacidad" : "Privacy Policy"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {lang === "es" ? "Política de Privacidad de GO Admin" : "GO Admin Privacy Policy"}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {lang === "es" 
                  ? "Última actualización: Junio de 2026. Entra en vigor de inmediato para nuevos usuarios." 
                  : "Last updated: June 2026. Effective immediately for new users."}
              </p>
              <p className="text-sm text-gray-500">
                {lang === "es" ? "Versión en Español" : "Version in English"} • {lang === "es" ? "Cumple con LSIPA, RGPD e ISO 27001" : "Complies with LSIPA, GDPR and ISO 27001"}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Principles Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm">
                <CardHeader className="pb-3">
                  <Shield className="h-6 w-6 text-blue-600 mb-2" />
                  <CardTitle className="text-sm font-semibold text-gray-900">
                    {lang === "es" ? "Transparencia" : "Transparency"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">
                  {lang === "es" 
                    ? "Te explicamos clara y honestamente qué datos recopilamos" 
                    : "We explain clearly what data we collect"}
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 shadow-sm">
                <CardHeader className="pb-3">
                  <Lock className="h-6 w-6 text-green-600 mb-2" />
                  <CardTitle className="text-sm font-semibold text-gray-900">
                    {lang === "es" ? "Seguridad" : "Security"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">
                  {lang === "es" 
                    ? "Protegemos tus datos con estándares internacionales" 
                    : "We protect your data with international standards"}
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 shadow-sm">
                <CardHeader className="pb-3">
                  <Eye className="h-6 w-6 text-purple-600 mb-2" />
                  <CardTitle className="text-sm font-semibold text-gray-900">
                    {lang === "es" ? "Control" : "Control"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">
                  {lang === "es" 
                    ? "Tienes control total sobre tus datos personales" 
                    : "You have full control over your personal data"}
                </CardContent>
              </Card>
            </div>

            {/* Sections */}
            <div className="space-y-3">
              {sections.map((section, index) => (
                <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-500 transition-transform ${expandedSection === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedSection === index && (
                    <CardContent className="px-6 pb-4 pt-0 border-t border-gray-200">
                      <ul className="space-y-2">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex gap-3 text-sm text-gray-700">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 mt-12 text-white">
              <h2 className="text-2xl font-bold mb-6">
                {lang === "es" ? "Responsable del Tratamiento de Datos" : "Data Controller"}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">{lang === "es" ? "Contacto Directo" : "Direct Contact"}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Juan Camilo Gallego</p>
                        <p className="text-blue-100">{lang === "es" ? "Responsable de Privacidad" : "Privacy Officer"}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{lang === "es" ? "Correo Electrónico" : "Email"}</p>
                        <a href="mailto:Servicio@goadmin.io" className="text-blue-100 hover:text-white underline">
                          Servicio@goadmin.io
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{lang === "es" ? "Teléfono" : "Phone"}</p>
                        <a href="tel:+573113195711" className="text-blue-100 hover:text-white underline">
                          +57 311 3195711
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">{lang === "es" ? "Plataforma" : "Platform"}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{lang === "es" ? "Acceso a Aplicación" : "Application Access"}</p>
                        <a href="https://app.goadmin.io/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white underline">
                          app.goadmin.io
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{lang === "es" ? "Respuesta a Solicitudes" : "Response Time"}</p>
                        <p className="text-blue-100">
                          {lang === "es" ? "Máximo 10 días hábiles (LSIPA)" : "Maximum 10 business days (LSIPA)"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="bg-gray-50 rounded-lg p-6 mt-8 border border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                {lang === "es" 
                  ? "Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer cualquiera de tus derechos como titular de datos, por favor contacta al Responsable del Tratamiento. Nos comprometemos a responder todas las solicitudes dentro de los plazos establecidos por la ley." 
                  : "If you have questions about this Privacy Policy or wish to exercise any of your rights as a data subject, please contact the Data Controller. We are committed to responding to all requests within the timelines established by law."}
              </p>
              <p className="text-xs text-gray-500">
                {lang === "es" 
                  ? "Esta política cumple con: Ley Estatutaria 1581 de 2012 (LSIPA), Decreto 1377 de 2013, RGPD (UE) 2016/679, ISO 27001:2022" 
                  : "This policy complies with: Law 1581 of 2012 (LSIPA), Decree 1377 of 2013, GDPR (EU) 2016/679, ISO 27001:2022"}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 border-t border-gray-200 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {lang === "es" ? "¿Preguntas sobre tu privacidad?" : "Questions about your privacy?"}
              </h2>
              <p className="text-gray-600 mb-6">
                {lang === "es" 
                  ? "Nuestro equipo de privacidad está listo para ayudarte. Contacta con nosotros en cualquier momento." 
                  : "Our privacy team is ready to help you. Contact us at any time."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.location.href = "mailto:Servicio@goadmin.io"}
                >
                  {lang === "es" ? "Enviar Email" : "Send Email"}
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.location.href = "/contacto"}
                >
                  {lang === "es" ? "Formulario de Contacto" : "Contact Form"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
