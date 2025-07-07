"use client"

import type React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface IndustryLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  icon: string
  color: string
  prevIndustry?: { name: string; href: string }
  nextIndustry?: { name: string; href: string }
}

export function IndustryLayout({
  children,
  title,
  description,
  icon,
  color,
  prevIndustry,
  nextIndustry,
}: IndustryLayoutProps) {
  const colorClasses = {
    blue: "from-blue-50 to-blue-100",
    green: "from-green-50 to-green-100",
    purple: "from-purple-50 to-purple-100",
    orange: "from-orange-50 to-orange-100",
    red: "from-red-50 to-red-100",
    yellow: "from-yellow-50 to-yellow-100",
    pink: "from-pink-50 to-pink-100",
  }

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
              <Link href="/industrias" className="text-gray-600 hover:text-blue-600 transition-colors">
                Todas las Industrias
              </Link>
              <Link href="/#modulos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Módulos
              </Link>
              <Link href="/#precios" className="text-gray-600 hover:text-blue-600 transition-colors">
                Precios
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

      {/* Industry Hero */}
      <section className={`py-16 px-4 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]}`}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Solución Especializada</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Probar para {title}
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Ver Demo Especializada
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">{children}</div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center">
            {prevIndustry ? (
              <Link href={prevIndustry.href} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-4 w-4" />
                <span>Anterior: {prevIndustry.name}</span>
              </Link>
            ) : (
              <div></div>
            )}
            {nextIndustry ? (
              <Link href={nextIndustry.href} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <span>Siguiente: {nextIndustry.name}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para optimizar tu {title.toLowerCase()}?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a cientos de {title.toLowerCase()}s que ya confían en GO Admin para gestionar sus operaciones.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Comenzar Prueba Gratuita
          </Button>
        </div>
      </section>
    </div>
  )
}
