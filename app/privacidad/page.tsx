'use client'

import { Mail, Phone, Globe, Shield, Lock, Users, Eye, FileText, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/i18n'

export default function PrivacidadPage() {
  const { lang } = useLanguage()

  const content = {
    es: {
      badge: 'Política de Privacidad',
      title: 'Tu privacidad es',
      titleHighlight: 'nuestra prioridad',
      subtitle: 'En GO Admin, protegemos tu información personal con los más altos estándares de seguridad y transparencia. Conoce cómo recopilamos, usamos y protegemos tus datos.',
      updated: 'Última actualización: 27 de junio de 2026',
      
      // Principios
      principlesTitle: 'Nuestros Principios de Privacidad',
      principlesSubtitle: 'Estos principios guían todas nuestras decisiones sobre el manejo de datos',
      principles: [
        {
          icon: Shield,
          title: 'Seguridad Máxima',
          description: 'Protegemos tu información con los más altos estándares de encriptación y seguridad'
        },
        {
          icon: Eye,
          title: 'Transparencia Total',
          description: 'Te explicamos claramente qué datos recopilamos y por qué'
        },
        {
          icon: Users,
          title: 'Control del Usuario',
          description: 'Tú decides qué información compartir y cómo usarla'
        },
        {
          icon: FileText,
          title: 'Minimización de Datos',
          description: 'Solo recopilamos la información necesaria para el servicio'
        }
      ],

      // Cumplimiento Normativo
      complianceTitle: 'Cumplimiento Normativo',
      complianceSubtitle: 'Cumplimos con las principales regulaciones de privacidad a nivel mundial',
      compliance: [
        {
          region: 'EU',
          law: 'GDPR',
          description: 'Reglamento General de Protección de Datos de la Unión Europea'
        },
        {
          region: 'US',
          law: 'CCPA',
          description: 'Ley de Privacidad del Consumidor de California'
        },
        {
          region: 'CO',
          law: 'Ley 1581',
          description: 'Ley de Protección de Datos Personales de Colombia'
        }
      ],

      // Secciones de contenido
      sections: [
        {
          title: '1. Información que Recopilamos',
          items: [
            'Información de Registro: nombre, correo electrónico, teléfono, empresa, cargo',
            'Datos de Perfil: foto, preferencias de idioma, zona horaria, configuración de cuenta',
            'Datos de Uso: registros de acceso, módulos utilizados, informes generados',
            'Información Técnica: dirección IP, navegador, sistema operativo, dispositivo',
            'Datos Empresariales: información ingresada en los módulos del sistema',
            'Comunicaciones: mensajes de soporte, retroalimentación, preferencias de contacto'
          ]
        },
        {
          title: '2. Cómo Usamos tu Información',
          items: [
            'Proporcionar y mejorar nuestros servicios',
            'Personalizar tu experiencia en la plataforma',
            'Enviar notificaciones y actualizaciones importantes',
            'Procesar pagos y facturación',
            'Cumplir con obligaciones legales y regulatorias',
            'Prevenir fraude y garantizar seguridad',
            'Realizar análisis para mejorar el producto'
          ]
        },
        {
          title: '3. Base Legal para el Procesamiento',
          items: [
            'Consentimiento: recopilamos datos con tu consentimiento expreso',
            'Contrato: procesamos datos necesarios para ejecutar nuestro acuerdo de servicios',
            'Obligación Legal: cumplimos con leyes aplicables como LSIPA, CCPA y GDPR',
            'Interés Legítimo: protegemos la seguridad de la plataforma y tus datos',
            'Relación Comercial: mejoramos servicios basándonos en tu comportamiento'
          ]
        },
        {
          title: '4. Compartición de Datos',
          items: [
            'Proveedores de Servicios: servidores en la nube, análisis, seguridad',
            'Cumplimiento Legal: autoridades cuando así lo requiera la ley',
            'Transferencias Internacionales: con protecciones bajo Cláusulas Contractuales Estándar (SCC)',
            'No vendemos tu información a terceros sin consentimiento',
            'Podemos compartir datos agregados no identificables para investigación'
          ]
        },
        {
          title: '5. Tus Derechos como Titular de Datos',
          items: [
            'Derecho de Acceso: solicitar y recibir copia de tus datos personales',
            'Derecho de Rectificación: corregir información inexacta o incompleta',
            'Derecho de Eliminación: solicitar la supresión de tus datos (Art. 17 GDPR)',
            'Derecho de Portabilidad: obtener tus datos en formato estructurado',
            'Derecho a Oponertes: limitar o rechazar ciertos tipos de procesamiento',
            'Derecho a no ser Perfilado: no ser sometido a perfilado automated'
          ]
        },
        {
          title: '6. Retención de Datos',
          items: [
            'Datos Activos: conservados mientras uses la plataforma',
            'Datos Inactivos: retenidos 12 meses después de cancelación',
            'Datos de Cumplimiento: conservados según requisitos legales (hasta 7 años)',
            'Logs Técnicos: retenidos por 90 días para seguridad',
            'Puedes solicitar eliminación inmediata sujeto a obligaciones legales'
          ]
        },
        {
          title: '7. Seguridad de Datos',
          items: [
            'Encriptación SSL/TLS para datos en tránsito',
            'Encriptación AES-256 para datos en reposo',
            'Certificación ISO 27001:2022 en nuestros servidores',
            'Auditorías de seguridad regulares y penetration testing',
            'Control de acceso basado en roles (RBAC)',
            'Monitoreo 24/7 de actividades sospechosas'
          ]
        },
        {
          title: '8. Cookies y Tecnologías de Rastreo',
          items: [
            'Cookies Esenciales: necesarias para el funcionamiento de la plataforma',
            'Cookies de Análisis: para entender cómo usas GO Admin',
            'Cookies de Marketing: para mejorar nuestras campañas publicitarias',
            'Puedes controlar cookies desde la configuración de tu navegador',
            'No usamos cookies de terceros sin tu consentimiento'
          ]
        }
      ],

      // Sección de contacto
      questionsTitle: '¿Tienes preguntas sobre privacidad?',
      questionsSubtitle: 'Nuestro equipo de privacidad está disponible para resolver cualquier duda sobre el manejo de tus datos.',
      
      dpo: {
        title: 'Oficial de Protección de Datos',
        description: 'Contacta directamente con nuestro DPO para consultas específicas sobre privacidad',
        email: 'dpo@goadmin.io'
      },
      
      exerciseRights: {
        title: 'Ejercer tus Derechos',
        description: 'Solicita acceso, corrección o eliminación de tus datos personales',
        email: 'privacidad@goadmin.io'
      },

      contactButton: 'Contactar Equipo de Privacidad',
      contactInfo: 'Juan Camilo Gallego | Servicio@goadmin.io | +57 311 3195711 | app.goadmin.io',

      // Marco regulatorio
      legalFrameworkTitle: 'Marco Legal y Regulatorio',
      frameworks: [
        {
          title: 'Ley 1581 de 2012 (Colombia)',
          items: [
            'Ley Estatutaria de Protección de Datos Personales',
            'Derecho fundamental del habeas data',
            'Responsabilidad del responsable del tratamiento',
            'Plazo de respuesta: 10 días hábiles'
          ]
        },
        {
          title: 'Decreto 1377 de 2013 (Colombia)',
          items: [
            'Reglamentación de la Ley 1581 de 2012',
            'Requisitos para consentimiento válido',
            'Deberes de los encargados del tratamiento',
            'Transferencia internacional de datos'
          ]
        },
        {
          title: 'RGPD (Unión Europea)',
          items: [
            'Reglamento General de Protección de Datos',
            'Derechos mejorados del interesado',
            'Evaluación de Impacto (DPIA)',
            'Derecho al olvido (Art. 17)'
          ]
        },
        {
          title: 'CCPA (California, USA)',
          items: [
            'Ley de Privacidad del Consumidor',
            'Derechos de acceso, eliminación y opt-out',
            'Transparencia en la venta de datos',
            'Protección para residentes de California'
          ]
        }
      ]
    },
    en: {
      badge: 'Privacy Policy',
      title: 'Your privacy is',
      titleHighlight: 'our priority',
      subtitle: 'At GO Admin, we protect your personal information with the highest standards of security and transparency. Learn how we collect, use and protect your data.',
      updated: 'Last updated: June 27, 2026',
      
      // Principles
      principlesTitle: 'Our Privacy Principles',
      principlesSubtitle: 'These principles guide all our decisions regarding data handling',
      principles: [
        {
          icon: Shield,
          title: 'Maximum Security',
          description: 'We protect your information with the highest encryption and security standards'
        },
        {
          icon: Eye,
          title: 'Total Transparency',
          description: 'We clearly explain what data we collect and why'
        },
        {
          icon: Users,
          title: 'User Control',
          description: 'You decide what information to share and how it&apos;s used'
        },
        {
          icon: FileText,
          title: 'Data Minimization',
          description: 'We only collect information necessary for the service'
        }
      ],

      // Compliance
      complianceTitle: 'Regulatory Compliance',
      complianceSubtitle: 'We comply with major privacy regulations worldwide',
      compliance: [
        {
          region: 'EU',
          law: 'GDPR',
          description: 'General Data Protection Regulation of the European Union'
        },
        {
          region: 'US',
          law: 'CCPA',
          description: 'California Consumer Privacy Act'
        },
        {
          region: 'CO',
          law: 'Law 1581',
          description: 'Personal Data Protection Law of Colombia'
        }
      ],

      // Content sections
      sections: [
        {
          title: '1. Information We Collect',
          items: [
            'Registration Information: name, email, phone, company, position',
            'Profile Data: photo, language preferences, timezone, account settings',
            'Usage Data: access logs, modules used, reports generated',
            'Technical Information: IP address, browser, operating system, device',
            'Business Data: information entered in system modules',
            'Communications: support messages, feedback, contact preferences'
          ]
        },
        {
          title: '2. How We Use Your Information',
          items: [
            'Provide and improve our services',
            'Personalize your platform experience',
            'Send notifications and important updates',
            'Process payments and billing',
            'Comply with legal and regulatory obligations',
            'Prevent fraud and ensure security',
            'Perform analysis to improve the product'
          ]
        },
        {
          title: '3. Legal Basis for Processing',
          items: [
            'Consent: we collect data with your express consent',
            'Contract: we process data necessary to execute our service agreement',
            'Legal Obligation: we comply with applicable laws like LSIPA, CCPA and GDPR',
            'Legitimate Interest: we protect the platform security and your data',
            'Business Relationship: we improve services based on your behavior'
          ]
        },
        {
          title: '4. Data Sharing',
          items: [
            'Service Providers: cloud servers, analytics, security',
            'Legal Compliance: authorities when required by law',
            'International Transfers: with protections under Standard Contractual Clauses (SCC)',
            'We do not sell your information to third parties without consent',
            'We may share aggregated non-identifiable data for research'
          ]
        },
        {
          title: '5. Your Rights as a Data Subject',
          items: [
            'Right of Access: request and receive a copy of your personal data',
            'Right of Rectification: correct inaccurate or incomplete information',
            'Right of Deletion: request erasure of your data (GDPR Art. 17)',
            'Right of Data Portability: obtain your data in structured format',
            'Right to Object: restrict or reject certain types of processing',
            'Right not to be Profiled: not be subject to automated profiling'
          ]
        },
        {
          title: '6. Data Retention',
          items: [
            'Active Data: retained while you use the platform',
            'Inactive Data: retained 12 months after cancellation',
            'Compliance Data: retained as required by law (up to 7 years)',
            'Technical Logs: retained for 90 days for security',
            'You can request immediate deletion subject to legal obligations'
          ]
        },
        {
          title: '7. Data Security',
          items: [
            'SSL/TLS encryption for data in transit',
            'AES-256 encryption for data at rest',
            'ISO 27001:2022 certification on our servers',
            'Regular security audits and penetration testing',
            'Role-based access control (RBAC)',
            '24/7 monitoring of suspicious activity'
          ]
        },
        {
          title: '8. Cookies and Tracking Technologies',
          items: [
            'Essential Cookies: necessary for platform functionality',
            'Analytics Cookies: to understand how you use GO Admin',
            'Marketing Cookies: to improve our advertising campaigns',
            'You can control cookies from your browser settings',
            'We do not use third-party cookies without your consent'
          ]
        }
      ],

      // Contact section
      questionsTitle: 'Do you have questions about privacy?',
      questionsSubtitle: 'Our privacy team is available to resolve any questions about how we handle your data.',
      
      dpo: {
        title: 'Data Protection Officer',
        description: 'Contact our DPO directly for specific privacy inquiries',
        email: 'dpo@goadmin.io'
      },
      
      exerciseRights: {
        title: 'Exercise Your Rights',
        description: 'Request access, correction or deletion of your personal data',
        email: 'privacidad@goadmin.io'
      },

      contactButton: 'Contact Privacy Team',
      contactInfo: 'Juan Camilo Gallego | Servicio@goadmin.io | +57 311 3195711 | app.goadmin.io',

      // Legal framework
      legalFrameworkTitle: 'Legal and Regulatory Framework',
      frameworks: [
        {
          title: 'Law 1581 of 2012 (Colombia)',
          items: [
            'Constitutional Law of Personal Data Protection',
            'Fundamental right of habeas data',
            'Responsibility of the data controller',
            'Response deadline: 10 business days'
          ]
        },
        {
          title: 'Decree 1377 of 2013 (Colombia)',
          items: [
            'Regulation of Law 1581 of 2012',
            'Requirements for valid consent',
            'Duties of data processors',
            'International data transfer'
          ]
        },
        {
          title: 'GDPR (European Union)',
          items: [
            'General Data Protection Regulation',
            'Enhanced data subject rights',
            'Impact Assessment (DPIA)',
            'Right to be forgotten (Art. 17)'
          ]
        },
        {
          title: 'CCPA (California, USA)',
          items: [
            'California Consumer Privacy Act',
            'Rights to access, delete and opt-out',
            'Transparency in data sales',
            'Protection for California residents'
          ]
        }
      ]
    }
  }

  const currentContent = content[lang as keyof typeof content] || content.es

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">{currentContent.badge}</Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              {currentContent.title} <span className="text-blue-600">{currentContent.titleHighlight}</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {currentContent.subtitle}
            </p>
            
            <p className="text-sm text-gray-500">{currentContent.updated}</p>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{currentContent.principlesTitle}</h2>
              <p className="text-lg text-gray-600">{currentContent.principlesSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {currentContent.principles.map((principle, idx) => {
                const IconComponent = principle.icon
                return (
                  <Card key={idx} className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="mb-4 p-3 bg-blue-50 w-fit rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{principle.title}</h3>
                      <p className="text-sm text-gray-600">{principle.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <div className="mb-4 flex justify-center">
                <Globe className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{currentContent.complianceTitle}</h2>
              <p className="text-lg text-gray-600">{currentContent.complianceSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {currentContent.compliance.map((item, idx) => (
                <Card key={idx} className={`border ${idx === 0 ? 'border-green-200 bg-green-50' : idx === 1 ? 'border-blue-200 bg-blue-50' : 'border-pink-200 bg-pink-50'}`}>
                  <CardContent className="pt-6 text-center">
                    <div className="text-2xl font-bold mb-2">{item.region}</div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">{item.law}</div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {currentContent.sections.map((section, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 md:py-20 bg-blue-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{currentContent.questionsTitle}</h2>
              <p className="text-lg text-gray-600">{currentContent.questionsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* DPO Card */}
              <Card className="border-2 border-blue-200 bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{currentContent.dpo.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{currentContent.dpo.description}</p>
                  <a href={`mailto:${currentContent.dpo.email}`} className="text-blue-600 font-semibold hover:text-blue-700">
                    {currentContent.dpo.email}
                  </a>
                </CardContent>
              </Card>

              {/* Exercise Rights Card */}
              <Card className="border-2 border-green-200 bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{currentContent.exerciseRights.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{currentContent.exerciseRights.description}</p>
                  <a href={`mailto:${currentContent.exerciseRights.email}`} className="text-green-600 font-semibold hover:text-green-700">
                    {currentContent.exerciseRights.email}
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
                {currentContent.contactButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>{currentContent.contactInfo}</p>
            </div>
          </div>
        </section>

        {/* Legal Framework */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">{currentContent.legalFrameworkTitle}</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {currentContent.frameworks.map((framework, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{framework.title}</h3>
                  <ul className="space-y-3">
                    {framework.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
