"use client"

import { Shield, Eye, Lock, FileText, Users, Globe } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacidadPage() {
  const sections = [
    {
      title: "1. Información que Recopilamos",
      content: [
        "Información de cuenta: nombre, email, teléfono y datos de facturación",
        "Datos de uso: cómo interactúas con nuestra plataforma y servicios",
        "Información técnica: dirección IP, tipo de navegador, sistema operativo",
        "Datos de negocio: información ingresada en los módulos del ERP",
        "Cookies y tecnologías similares para mejorar la experiencia",
      ],
    },
    {
      title: "2. Cómo Usamos tu Información",
      content: [
        "Proporcionar y mantener nuestros servicios",
        "Procesar transacciones y gestionar tu cuenta",
        "Comunicarnos contigo sobre actualizaciones y soporte",
        "Mejorar nuestros productos y desarrollar nuevas funcionalidades",
        "Cumplir con obligaciones legales y regulatorias",
        "Prevenir fraude y garantizar la seguridad",
      ],
    },
    {
      title: "3. Compartir Información",
      content: [
        "No vendemos tu información personal a terceros",
        "Compartimos datos solo cuando es necesario para el servicio",
        "Proveedores de servicios bajo estrictos acuerdos de confidencialidad",
        "Autoridades cuando lo requiera la ley",
        "En caso de fusión o adquisición (con previo aviso)",
      ],
    },
    {
      title: "4. Seguridad de Datos",
      content: [
        "Cifrado end-to-end de todos los datos sensibles",
        "Servidores seguros con certificaciones SOC 2 y ISO 27001",
        "Acceso restringido solo a personal autorizado",
        "Monitoreo continuo de seguridad 24/7",
        "Backups automáticos y planes de recuperación",
        "Auditorías de seguridad regulares",
      ],
    },
    {
      title: "5. Tus Derechos",
      content: [
        "Acceder a tu información personal",
        "Corregir datos inexactos o incompletos",
        "Solicitar la eliminación de tu información",
        "Portabilidad de datos en formatos estándar",
        "Oponerte al procesamiento en ciertos casos",
        "Retirar el consentimiento en cualquier momento",
      ],
    },
    {
      title: "6. Retención de Datos",
      content: [
        "Mantenemos tu información mientras tu cuenta esté activa",
        "Datos de facturación se conservan según requisitos legales",
        "Logs de seguridad se mantienen por 2 años",
        "Puedes solicitar eliminación completa al cerrar tu cuenta",
        "Algunos datos pueden conservarse para cumplir obligaciones legales",
      ],
    },
    {
      title: "7. Transferencias Internacionales",
      content: [
        "Tus datos pueden procesarse en diferentes países",
        "Utilizamos cláusulas contractuales estándar de la UE",
        "Garantizamos el mismo nivel de protección en todas las ubicaciones",
        "Cumplimos con marcos de transferencia internacional reconocidos",
      ],
    },
    {
      title: "8. Cookies y Tecnologías de Seguimiento",
      content: [
        "Usamos cookies esenciales para el funcionamiento del servicio",
        "Cookies de análisis para mejorar la experiencia (opcional)",
        "Puedes gestionar preferencias de cookies en tu navegador",
        "No utilizamos cookies de publicidad de terceros",
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
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GO</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GO Admin</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/caracteristicas" className="text-gray-600 hover:text-blue-600 transition-colors">
                Características
              </Link>
              <Link href="/integraciones" className="text-gray-600 hover:text-blue-600 transition-colors">
                Integraciones
              </Link>
              <Link href="/precios" className="text-gray-600 hover:text-blue-600 transition-colors">
                Precios
              </Link>
              <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contacto
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.open("https://app.goadmin.io/auth/login", "_blank")}
              >
                Iniciar Sesión
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Prueba Gratis</Button>
            </div>
          </div>
        </div>
      </header>

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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cumplimiento Normativo</h2>
            <p className="text-gray-600">Cumplimos con las principales regulaciones de privacidad a nivel mundial</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🇪🇺</div>
                <h3 className="font-semibold text-gray-900 mb-2">GDPR</h3>
                <p className="text-sm text-gray-600">Reglamento General de Protección de Datos de la Unión Europea</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🇺🇸</div>
                <h3 className="font-semibold text-gray-900 mb-2">CCPA</h3>
                <p className="text-sm text-gray-600">Ley de Privacidad del Consumidor de California</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🇨🇴</div>
                <h3 className="font-semibold text-gray-900 mb-2">Ley 1581</h3>
                <p className="text-sm text-gray-600">Ley de Protección de Datos Personales de Colombia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <FileText className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Tienes preguntas sobre privacidad?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de privacidad está disponible para resolver cualquier duda sobre el manejo de tus datos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Oficial de Protección de Datos</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Contacta directamente con nuestro DPO para consultas específicas sobre privacidad
                </p>
                <p className="text-blue-600 font-medium">dpo@goadmin.io</p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Ejercer tus Derechos</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Solicita acceso, corrección o eliminación de tus datos personales
                </p>
                <p className="text-green-600 font-medium">privacidad@goadmin.io</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contactar Equipo de Privacidad
          </Button>
        </div>
      </section>
    </div>
  )
}
