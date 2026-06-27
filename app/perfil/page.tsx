"use client"

import { Trash2, FileText, Shield, Clock, CheckCircle, Mail, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/lib/i18n"

export default function EliminacionDatosPage() {
  const { t, lang } = useLanguage()

  const steps = [
    {
      number: "1",
      titleEs: "Solicitar Eliminación",
      titleEn: "Request Deletion",
      descEs: "Contacta a nuestro equipo de privacidad a través de email o teléfono con tu solicitud de eliminación de datos",
      descEn: "Contact our privacy team via email or phone with your data deletion request",
      icon: Mail,
    },
    {
      number: "2",
      titleEs: "Verificación de Identidad",
      titleEn: "Identity Verification",
      descEs: "Verificaremos tu identidad y validaremos que seas el propietario de la cuenta para proteger tu seguridad",
      descEn: "We will verify your identity and confirm you are the account owner to protect your security",
      icon: Shield,
    },
    {
      number: "3",
      titleEs: "Procesamiento de Solicitud",
      titleEn: "Request Processing",
      descEs: "Tu solicitud será procesada dentro de 10 días hábiles (conforme a Ley 1581) o 45 días (GDPR/CCPA)",
      descEn: "Your request will be processed within 10 business days (Colombian Law) or 45 days (GDPR/CCPA)",
      icon: Clock,
    },
    {
      number: "4",
      titleEs: "Confirmación de Eliminación",
      titleEn: "Deletion Confirmation",
      descEs: "Recibirás confirmación de que tus datos han sido eliminados permanentemente de nuestros sistemas",
      descEn: "You will receive confirmation that your data has been permanently deleted from our systems",
      icon: CheckCircle,
    },
  ]

  const methodsEs = [
    {
      title: "Email",
      description: "Envía tu solicitud a:",
      contact: "Servicio@goadmin.io",
      details: "Incluye: nombre completo, email de la cuenta, razón de la solicitud",
    },
    {
      title: "Teléfono",
      description: "Llama a nuestro equipo:",
      contact: "+57 311 3195711",
      details: "Disponible de lunes a viernes, 8am - 6pm (Hora Colombia)",
    },
    {
      title: "En tu Cuenta",
      description: "Accede a tu perfil en:",
      contact: "app.goadmin.io/configuracion/privacidad",
      details: "Selecciona 'Solicitar eliminación de datos' en configuración",
    },
  ]

  const methodsEn = [
    {
      title: "Email",
      description: "Send your request to:",
      contact: "Servicio@goadmin.io",
      details: "Include: full name, account email, reason for request",
    },
    {
      title: "Phone",
      description: "Call our team:",
      contact: "+57 311 3195711",
      details: "Available Monday to Friday, 8am - 6pm (Colombia Time)",
    },
    {
      title: "In Your Account",
      description: "Access your profile at:",
      contact: "app.goadmin.io/settings/privacy",
      details: "Select 'Request data deletion' in settings",
    },
  ]

  const methods = lang === "es" ? methodsEs : methodsEn

  const dataRetentionEs = [
    { type: "Datos de Cuenta", period: "Eliminados de forma segura (30 días de eliminación lógica)" },
    { type: "Datos de Facturación", period: "Conservados por 7 años (requisito tributario)" },
    { type: "Datos de Negocio", period: "Eliminados completamente" },
    { type: "Logs de Seguridad", period: "Purgados después de 30 días (auditoría completada)" },
    { type: "Backups", period: "Eliminados en ciclo de backup siguiente (máx. 90 días)" },
  ]

  const dataRetentionEn = [
    { type: "Account Data", period: "Securely deleted (30-day logical deletion)" },
    { type: "Billing Data", period: "Retained for 7 years (tax requirement)" },
    { type: "Business Data", period: "Completely deleted" },
    { type: "Security Logs", period: "Purged after 30 days (audit completed)" },
    { type: "Backups", period: "Deleted in next backup cycle (max. 90 days)" },
  ]

  const dataRetention = lang === "es" ? dataRetentionEs : dataRetentionEn

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">
            {lang === "es" ? "Derecho de Eliminación" : "Right to Deletion"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {lang === "es"
              ? "Solicitar Eliminación de tus Datos"
              : "Request Your Data Deletion"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {lang === "es"
              ? "Respetamos tu derecho a la privacidad. Puedes solicitar la eliminación completa de tus datos personales en cualquier momento. Aquí te mostramos cómo."
              : "We respect your privacy rights. You can request complete deletion of your personal data at any time. Here's how."}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {lang === "es" ? "¿Cómo Solicitar la Eliminación?" : "How to Request Deletion?"}
          </h2>
          <p className="text-gray-600 text-center mb-12">
            {lang === "es"
              ? "Elige el método que prefieras para contactarnos:"
              : "Choose your preferred method to contact us:"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {methods.map((method, idx) => (
              <Card key={idx} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                  <p className="text-blue-600 font-medium mb-3 break-words">{method.contact}</p>
                  <p className="text-xs text-gray-500">{method.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {lang === "es" ? "Proceso de Eliminación" : "Deletion Process"}
          </h2>

          <div className="space-y-6">
            {steps.map((step, idx) => {
              const IconComponent = step.icon
              return (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {lang === "es" ? step.titleEs : step.titleEn}
                    </h3>
                    <p className="text-gray-600">
                      {lang === "es" ? step.descEs : step.descEn}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Data Retention Details */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {lang === "es" ? "¿Qué Sucede con mis Datos?" : "What Happens to My Data?"}
          </h2>
          <p className="text-gray-600 text-center mb-12">
            {lang === "es"
              ? "Aquí detallamos cómo manejamos cada tipo de dato durante y después de la eliminación:"
              : "Here's how we handle each type of data during and after deletion:"}
          </p>

          <div className="space-y-3">
            {dataRetention.map((item, idx) => (
              <Card key={idx} className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">{item.type}</span>
                    <span className="text-sm text-gray-600">{item.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {lang === "es" ? "Cumplimiento Legal" : "Legal Compliance"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🇨🇴</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {lang === "es" ? "Ley 1581" : "Law 1581"}
                </h3>
                <p className="text-sm text-gray-600">
                  {lang === "es"
                    ? "10 días hábiles para responder. Art. 12-15"
                    : "10 business days response. Art. 12-15"}
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🇪🇺</div>
                <h3 className="font-semibold text-gray-900 mb-2">GDPR</h3>
                <p className="text-sm text-gray-600">
                  {lang === "es"
                    ? "45 días para procesar. Art. 17"
                    : "45 days to process. Art. 17"}
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🇺🇸</div>
                <h3 className="font-semibold text-gray-900 mb-2">CCPA</h3>
                <p className="text-sm text-gray-600">
                  {lang === "es"
                    ? "45 días para procesar. Sección 1798.105"
                    : "45 days to process. Section 1798.105"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {lang === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h2>

          <div className="space-y-4">
            {(lang === "es"
              ? [
                  {
                    q: "¿Puedo recuperar mis datos después de solicitarla eliminación?",
                    a: "No. Una vez iniciado el proceso de eliminación, los datos se borran permanentemente. No podrán ser recuperados.",
                  },
                  {
                    q: "¿Se eliminarán mis datos de facturación?",
                    a: "Los datos de facturación se conservan por 7 años conforme a requisitos legales tributarios colombianos. El resto de datos se elimina completamente.",
                  },
                  {
                    q: "¿Cuánto tiempo tarda la eliminación?",
                    a: "En Colombia: 10 días hábiles. En EU/US (GDPR/CCPA): 45 días. Recibirás confirmación cuando se complete.",
                  },
                  {
                    q: "¿Se eliminarán mis datos de todos los backups?",
                    a: "Sí. Los datos serán eliminados de los backups en el siguiente ciclo de respaldo (máximo 90 días).",
                  },
                ]
              : [
                  {
                    q: "Can I recover my data after requesting deletion?",
                    a: "No. Once the deletion process is initiated, data is permanently deleted. It cannot be recovered.",
                  },
                  {
                    q: "Will my billing data be deleted?",
                    a: "Billing data is retained for 7 years per Colombian tax requirements. All other data is completely deleted.",
                  },
                  {
                    q: "How long does deletion take?",
                    a: "Colombia: 10 business days. EU/US (GDPR/CCPA): 45 days. You will receive confirmation when complete.",
                  },
                  {
                    q: "Will my data be deleted from all backups?",
                    a: "Yes. Data will be deleted from backups in the next backup cycle (maximum 90 days).",
                  },
                ]
            ).map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {lang === "es"
              ? "¿Listo para Solicitar la Eliminación?"
              : "Ready to Request Deletion?"}
          </h2>
          <p className="text-blue-100 mb-8">
            {lang === "es"
              ? "Nuestro equipo de privacidad está listo para ayudarte. Contacta a través de cualquiera de nuestros canales:"
              : "Our privacy team is ready to help you. Contact us through any of our channels:"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:Servicio@goadmin.io">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <Mail className="h-4 w-4 mr-2" />
                {lang === "es" ? "Enviar Email" : "Send Email"}
              </Button>
            </a>
            <a href="tel:+573113195711">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <Phone className="h-4 w-4 mr-2" />
                {lang === "es" ? "Llamar Ahora" : "Call Now"}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl text-center text-sm text-gray-600">
          <p>
            {lang === "es"
              ? "Esta página cumple con los requisitos de Google Play Store, GDPR, Ley 1581 de Colombia y CCPA de California para proporcionar transparencia en la eliminación de datos de usuario."
              : "This page complies with Google Play Store, GDPR, Colombian Law 1581, and California CCPA requirements for providing transparency in user data deletion."}
          </p>
        </div>
      </section>
    </div>
  )
}
