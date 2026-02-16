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

export default function ContactoPage() {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Chat en Vivo",
      description: "Habla con nuestro equipo de soporte",
      detail: "Disponible 24/7",
      action: "Iniciar Chat",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Envíanos un mensaje detallado",
      detail: "hola@goadmin.io",
      action: "Enviar Email",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Phone,
      title: "Teléfono",
      description: "Llámanos directamente",
      detail: "+57 (1) 234-5678",
      action: "Llamar Ahora",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  const offices = [
    {
      city: "Bogotá",
      address: "Carrera 11 #93-07, Oficina 501",
      phone: "+57 (1) 234-5678",
      email: "bogota@goadmin.io",
    },
    {
      city: "Medellín",
      address: "Carrera 43A #1-50, Torre 1, Piso 15",
      phone: "+57 (4) 234-5678",
      email: "medellin@goadmin.io",
    },
    {
      city: "Cali",
      address: "Avenida 6N #28N-102, Edificio Siglo XXI",
      phone: "+57 (2) 234-5678",
      email: "cali@goadmin.io",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar currentPage="/contacto" />

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Estamos Aquí para Ayudarte</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hablemos sobre tu <span className="text-blue-600">proyecto</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la mejor solución para tu negocio.
            Contáctanos y descubre cómo GO Admin puede transformar tu empresa.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
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

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input type="email" placeholder="tu@empresa.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                    <Input placeholder="Nombre de tu empresa" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <Input placeholder="+57 300 123 4567" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de negocio</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu industria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurante">Restaurante</SelectItem>
                      <SelectItem value="hotel">Hotel</SelectItem>
                      <SelectItem value="tienda">Tienda/Retail</SelectItem>
                      <SelectItem value="gimnasio">Gimnasio</SelectItem>
                      <SelectItem value="saas">SaaS/Tecnología</SelectItem>
                      <SelectItem value="transporte">Transporte</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">¿En qué podemos ayudarte? *</label>
                  <Textarea
                    placeholder="Cuéntanos sobre tu proyecto, necesidades específicas o cualquier pregunta que tengas..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Company Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de contacto</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Horarios de atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Soporte 24/7 disponible</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email general</h3>
                    <p className="text-gray-600">hola@goadmin.io</p>
                    <p className="text-gray-600">soporte@goadmin.io</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Línea principal</h3>
                    <p className="text-gray-600">+57 (1) 234-5678</p>
                    <p className="text-gray-600">WhatsApp: +57 300 123 4567</p>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestras oficinas</h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{office.city}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{office.address}</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>{office.phone}</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>{office.email}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Prefieres una demo personalizada?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Agenda una llamada con nuestro equipo y te mostraremos cómo GO Admin puede adaptarse específicamente a tu
            negocio.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Agendar Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
