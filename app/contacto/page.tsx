"use client"

import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { useContent } from "@/lib/i18n"

export default function ContactoPage() {
  const c = useContent({
    es: {
      badge: "Estamos Aqui para Ayudarte",
      heroTitle: "Hablemos sobre tu",
      heroTitleAccent: "proyecto",
      heroDesc: "Nuestro equipo de expertos esta listo para ayudarte a encontrar la mejor solucion para tu negocio. Contactanos y descubre como GO Admin puede transformar tu empresa.",
      liveChat: "Chat en Vivo", liveChatDesc: "Habla con nuestro equipo de soporte", liveChatDetail: "Disponible 24/7", startChat: "Iniciar Chat",
      email: "Email", emailDesc: "Envianos un mensaje detallado", emailAction: "Enviar Email",
      phone: "Telefono", phoneDesc: "Llamanos directamente", phoneAction: "Llamar Ahora",
      sendMessage: "Envianos un mensaje", formDesc: "Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.",
      name: "Nombre", fullName: "Tu nombre completo", emailLabel: "Email", company: "Empresa", companyName: "Nombre de tu empresa", phoneLabel: "Telefono",
      businessType: "Tipo de negocio", selectIndustry: "Selecciona tu industria",
      restaurant: "Restaurante", hotel: "Hotel", store: "Tienda/Retail", gym: "Gimnasio", saas: "SaaS/Tecnologia", transport: "Transporte", other: "Otro",
      howCanWeHelp: "En que podemos ayudarte?",
      messagePlaceholder: "Cuentanos sobre tu proyecto, necesidades especificas o cualquier pregunta que tengas...",
      sendBtn: "Enviar Mensaje",
      contactInfo: "Informacion de contacto",
      officeHours: "Horarios de atencion",
      officeHoursDetail1: "Lunes a Viernes: 8:00 AM - 6:00 PM",
      officeHoursDetail2: "Sabados: 9:00 AM - 2:00 PM",
      officeHoursDetail3: "Soporte 24/7 disponible",
      generalEmail: "Email general",
      mainLine: "Linea principal",
      ourOffices: "Nuestras oficinas",
      ctaTitle: "Prefieres una demo personalizada?",
      ctaDesc: "Agenda una llamada con nuestro equipo y te mostraremos como GO Admin puede adaptarse especificamente a tu negocio.",
      scheduleDemo: "Agendar Demo",
    },
    en: {
      badge: "We Are Here to Help",
      heroTitle: "Let's talk about your",
      heroTitleAccent: "project",
      heroDesc: "Our team of experts is ready to help you find the best solution for your business. Contact us and discover how GO Admin can transform your company.",
      liveChat: "Live Chat", liveChatDesc: "Talk to our support team", liveChatDetail: "Available 24/7", startChat: "Start Chat",
      email: "Email", emailDesc: "Send us a detailed message", emailAction: "Send Email",
      phone: "Phone", phoneDesc: "Call us directly", phoneAction: "Call Now",
      sendMessage: "Send us a message", formDesc: "Fill out the form and we'll get back to you in less than 24 hours.",
      name: "Name", fullName: "Your full name", emailLabel: "Email", company: "Company", companyName: "Your company name", phoneLabel: "Phone",
      businessType: "Business type", selectIndustry: "Select your industry",
      restaurant: "Restaurant", hotel: "Hotel", store: "Store/Retail", gym: "Gym", saas: "SaaS/Technology", transport: "Transportation", other: "Other",
      howCanWeHelp: "How can we help you?",
      messagePlaceholder: "Tell us about your project, specific needs or any questions you have...",
      sendBtn: "Send Message",
      contactInfo: "Contact information",
      officeHours: "Business hours",
      officeHoursDetail1: "Monday to Friday: 8:00 AM - 6:00 PM",
      officeHoursDetail2: "Saturdays: 9:00 AM - 2:00 PM",
      officeHoursDetail3: "24/7 support available",
      generalEmail: "General email",
      mainLine: "Main line",
      ourOffices: "Our offices",
      ctaTitle: "Prefer a personalized demo?",
      ctaDesc: "Schedule a call with our team and we'll show you how GO Admin can specifically adapt to your business.",
      scheduleDemo: "Schedule Demo",
    },
  })

  const contactMethods = [
    {
      icon: MessageSquare, title: c.liveChat, description: c.liveChatDesc,
      detail: c.liveChatDetail, action: c.startChat, color: "bg-green-100 text-green-600",
    },
    {
      icon: Mail, title: c.email, description: c.emailDesc,
      detail: "hola@goadmin.io", action: c.emailAction, color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Phone, title: c.phone, description: c.phoneDesc,
      detail: "+57 (1) 234-5678", action: c.phoneAction, color: "bg-purple-100 text-purple-600",
    },
  ]

  const offices = [
    { city: "Bogota", address: "Carrera 11 #93-07, Oficina 501", phone: "+57 (1) 234-5678", email: "bogota@goadmin.io" },
    { city: "Medellin", address: "Carrera 43A #1-50, Torre 1, Piso 15", phone: "+57 (4) 234-5678", email: "medellin@goadmin.io" },
    { city: "Cali", address: "Avenida 6N #28N-102, Edificio Siglo XXI", phone: "+57 (2) 234-5678", email: "cali@goadmin.io" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar currentPage="/contacto" />

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">{c.badge}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {c.heroTitle} <span className="text-blue-600">{c.heroTitleAccent}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{c.heroDesc}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${method.color}`}>
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-2">{method.description}</p>
                  <p className="text-sm font-medium text-blue-600 mb-4">{method.detail}</p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.sendMessage}</h2>
              <p className="text-gray-600 mb-8">{c.formDesc}</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{c.name} *</label>
                    <Input placeholder={c.fullName} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{c.emailLabel} *</label>
                    <Input type="email" placeholder="tu@empresa.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{c.company}</label>
                    <Input placeholder={c.companyName} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{c.phoneLabel}</label>
                    <Input placeholder="+57 300 123 4567" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{c.businessType}</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={c.selectIndustry} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurante">{c.restaurant}</SelectItem>
                      <SelectItem value="hotel">{c.hotel}</SelectItem>
                      <SelectItem value="tienda">{c.store}</SelectItem>
                      <SelectItem value="gimnasio">{c.gym}</SelectItem>
                      <SelectItem value="saas">{c.saas}</SelectItem>
                      <SelectItem value="transporte">{c.transport}</SelectItem>
                      <SelectItem value="otro">{c.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{c.howCanWeHelp} *</label>
                  <Textarea placeholder={c.messagePlaceholder} rows={4} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  {c.sendBtn}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.contactInfo}</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{c.officeHours}</h3>
                    <p className="text-gray-600">{c.officeHoursDetail1}</p>
                    <p className="text-gray-600">{c.officeHoursDetail2}</p>
                    <p className="text-gray-600">{c.officeHoursDetail3}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{c.generalEmail}</h3>
                    <p className="text-gray-600">hola@goadmin.io</p>
                    <p className="text-gray-600">soporte@goadmin.io</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{c.mainLine}</h3>
                    <p className="text-gray-600">+57 (1) 234-5678</p>
                    <p className="text-gray-600">WhatsApp: +57 300 123 4567</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{c.ourOffices}</h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{office.city}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>{office.address}</span></p>
                        <p className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>{office.phone}</span></p>
                        <p className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>{office.email}</span></p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">{c.ctaDesc}</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">{c.scheduleDemo}</Button>
        </div>
      </section>
    </div>
  )
}
