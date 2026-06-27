"use client"

import { Shield, Eye, Lock, FileText, Users, Globe } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function PrivacidadPage() {
  const sections = [
    {
      title: "1. Información que Recopilamos",
      content: [
        "Información de cuenta: nombre, email, teléfono y datos de facturación (Art. 5 Ley 1581)",
        "Datos de uso: cómo interactúas con nuestra plataforma y servicios",
        "Información técnica: dirección IP, tipo de navegador, sistema operativo",
        "Datos de negocio: información ingresada en los módulos del ERP (tratamiento según consentimiento)",
        "Cookies y tecnologías similares para mejorar la experiencia (GDPR Art. 7, CCPA Sección 1798.100)",
        "Información de contacto y comunicaciones (con consentimiento previo)",
      ],
    },
    {
      title: "2. Cómo Usamos tu Información",
      content: [
        "Proporcionar y mantener nuestros servicios (Art. 6 GDPR - Ejecución del contrato)",
        "Procesar transacciones y gestionar tu cuenta (Ley 1581 - Finalidad contractual)",
        "Comunicarnos contigo sobre actualizaciones y soporte (con consentimiento previo)",
        "Mejorar nuestros productos y desarrollar nuevas funcionalidades (GDPR Art. 6.1.f)",
        "Cumplir con obligaciones legales, fiscales y tributarias colombianas",
        "Prevenir fraude, seguridad y protección de derechos (GDPR Art. 6.1.f - Interés legítimo)",
      ],
    },
    {
      title: "3. Compartir Información",
      content: [
        "No vendemos tu información personal a terceros (CCPA Sección 1798.100(d))",
        "Compartimos datos solo cuando es necesario para el servicio (Art. 7 Ley 1581)",
        "Proveedores de servicios bajo estrictos acuerdos de confidencialidad y DPA",
        "Autoridades cuando lo requiera la ley colombiana o normas internacionales",
        "En caso de fusión o adquisición (con previo aviso y opción de opt-out)",
        "Cumplimiento de requerimientos judiciales o gubernamentales",
      ],
    },
    {
      title: "4. Seguridad de Datos",
      content: [
        "Cifrado end-to-end de todos los datos sensibles (AES-256, TLS 1.3)",
        "Servidores seguros con certificaciones SOC 2, ISO 27001:2022",
        "Acceso restringido solo a personal autorizado con autenticación multi-factor",
        "Monitoreo continuo de seguridad 24/7 con IDS/IPS avanzados",
        "Backups automáticos y planes de recuperación ante desastres",
        "Auditorías de seguridad regulares e independientes (cumplimiento GDPR Art. 32)",
        "Controles de acceso físico en centros de datos certificados",
      ],
    },
    {
      title: "5. Tus Derechos",
      content: [
        "Derecho de acceso: obtener confirmación si procesamos tus datos (Art. 15 GDPR, Art. 12 Ley 1581)",
        "Derecho de rectificación: corregir datos inexactos o incompletos (Art. 16 GDPR)",
        "Derecho al olvido: solicitar la eliminación de tu información (Art. 17 GDPR)",
        "Derecho a la portabilidad: obtener datos en formato estructurado (Art. 20 GDPR)",
        "Derecho de oposición: objetar procesamiento en ciertos casos (CCPA Sección 1798.120)",
        "Derecho a retirar consentimiento: en cualquier momento sin penalización",
        "Derechos CCPA: acceder, eliminar, conocer el origen de datos compartidos",
      ],
    },
    {
      title: "6. Retención de Datos",
      content: [
        "Información de cuenta: mantenida mientras tu cuenta esté activa (Art. 5 Ley 1581)",
        "Datos de facturación: conservados por 7 años según normativa tributaria colombiana",
        "Logs de seguridad: mantenidos por 2 años para auditoría y cumplimiento",
        "Datos de navegación: almacenados por máximo 90 días (GDPR Art. 5.1.e)",
        "Eliminación segura: datos borrados permanentemente mediante métodos certificados",
        "Derecho a solicitar eliminación: puedes solicitar borrado al cerrar tu cuenta",
      ],
    },
    {
      title: "7. Transferencias Internacionales de Datos",
      content: [
        "Tus datos pueden procesarse en diferentes países según infraestructura (GDPR Cap. V)",
        "Utilizamos cláusulas contractuales estándar (SCCs) aprobadas por la UE",
        "Garantizamos el mismo nivel de protección en todas las ubicaciones",
        "Cumplimos con marcos de transferencia reconocidos internacionalmente",
        "Para usuarios en EU: cumplimiento total GDPR, incluyendo transferencias seguras",
        "Información de ubicación: disponible bajo solicitud (derecho de acceso)",
      ],
    },
    {
      title: "8. Derechos Específicos por Jurisdicción",
      content: [
        "Colombia (Ley 1581): Autoridad de Supervisión: Superintendencia de Industria y Comercio",
        "EU (GDPR): Derechos ampliados incluyendo consentimiento previo y evaluación de impacto",
        "California (CCPA): Derecho a no ser discriminado por ejercer derechos de privacidad",
        "Acceso a datos: Puedes solicitar acceso dentro de 30 días hábiles (Ley 1581 Art. 12)",
        "Reclamos: contacta nuestro DPO para resolver inquietudes antes de autoridades",
        "Protección de menores: no recopilamos datos de menores de 13 años (COPPA)",
      ],
    },
    {
      title: "9. Cookies y Tecnologías de Seguimiento",
      content: [
        "Cookies esenciales: necesarias para funcionamiento del servicio",
        "Cookies de análisis: opcional, mejoran experiencia (consentimiento mediante banner)",
        "Gestión de preferencias: puedes controlar cookies en tu navegador",
        "No utilizamos: cookies de publicidad de terceros o tracking invasivo",
        "Transparencia: listado completo de cookies y terceros disponible bajo solicitud",
        "Retirada de consentimiento: disponible en cualquier momento",
      ],
    },
    {
      title: "10. Cambios a esta Política",
      content: [
        "Nos reservamos el derecho de actualizar esta política (con 30 días de aviso)",
        "Cambios significativos serán comunicados por email",
        "Continuación del uso implica aceptación de cambios",
        "Versión anterior disponible bajo solicitud",
      ],
    },
  ]

  const principles = [
    {
      icon: Shield,
      title: "Transparencia Total",
      description: "Te explicamos claramente qué datos recopilamos y por qué",
    },
    {
      icon: Lock,
      title: "Seguridad Máxima",
      description: "Protegemos tu información con los más altos estándares",
    },
    {
      icon: Users,
      title: "Control del Usuario",
      description: "Tú decides qué información compartir y cómo usarla",
    },
    {
      icon: Eye,
      title: "Minimización de Datos",
      description: "Solo recopilamos la información necesaria para el servicio",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar currentPage="/privacidad" />

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800">Política de Privacidad</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tu privacidad es <span className="text-blue-600">nuestra prioridad</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            En GO Admin, protegemos tu información personal con los más altos estándares de seguridad y transparencia.
            Conoce cómo recopilamos, usamos y protegemos tus datos.
          </p>
          <div className="text-sm text-gray-500">Última actualización: 15 de enero de 2024</div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Principios de Privacidad</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estos principios guían todas nuestras decisiones sobre el manejo de datos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Compliance */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Globe className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cumplimiento Normativo Internacional</h2>
            <p className="text-gray-600">Cumplimos con las principales regulaciones de privacidad a nivel mundial</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-200 bg-green-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">🇪🇺</div>
                <h3 className="font-semibold text-gray-900 mb-2">GDPR (RGPD)</h3>
                <p className="text-sm text-gray-600 mb-3">Reglamento General de Protección de Datos</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Cláusulas Contractuales Estándar (SCCs)</li>
                  <li>✓ Derechos de acceso y portabilidad</li>
                  <li>✓ Evaluación de Impacto (DPIA)</li>
                  <li>✓ Encargados de Tratamiento certificados</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">🇺🇸</div>
                <h3 className="font-semibold text-gray-900 mb-2">CCPA/CPRA</h3>
                <p className="text-sm text-gray-600 mb-3">Ley de Privacidad del Consumidor de California</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Derecho a conocer (Sección 1798.100)</li>
                  <li>✓ Derecho a eliminar (Sección 1798.105)</li>
                  <li>✓ Derecho a opt-out de venta</li>
                  <li>✓ No discriminación por ejercer derechos</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">🇨🇴</div>
                <h3 className="font-semibold text-gray-900 mb-2">Ley 1581</h3>
                <p className="text-sm text-gray-600 mb-3">Protección de Datos Personales en Colombia</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Consentimiento informado previo</li>
                  <li>✓ Respuesta en 10 días hábiles</li>
                  <li>✓ Decreto 1377 de 2013</li>
                  <li>✓ Supervisión: Superintendencia de Industria y Comercio</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <FileText className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Tienes preguntas sobre privacidad?</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Nuestro equipo de privacidad está disponible para resolver cualquier duda sobre el manejo de tus datos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-l-4 border-l-blue-600 border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Oficial de Protección de Datos</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Contacta directamente con nuestro DPO para consultas específicas sobre privacidad
                </p>
                <p className="text-blue-600 font-semibold text-center">Servicio@goadmin.io</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-600 border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Ejercer tus Derechos</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Solicita acceso, corrección o eliminación de tus datos personales
                </p>
                <p className="text-green-600 font-semibold text-center">privacidad@goadmin.io</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
            Contactar Equipo de Privacidad
          </Button>
        </div>
      </section>
    </div>
  )
}
