"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ModuleLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  icon: string
  color: string
  prevModule?: { name: string; href: string }
  nextModule?: { name: string; href: string }
}

export function ModuleLayout({ children, title, description, icon, color, prevModule, nextModule }: ModuleLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const colorClasses = {
    blue: "from-blue-50 to-blue-100",
    green: "from-green-50 to-green-100",
    purple: "from-purple-50 to-purple-100",
    orange: "from-orange-50 to-orange-100",
    red: "from-red-50 to-red-100",
    yellow: "from-yellow-50 to-yellow-100",
    pink: "from-pink-50 to-pink-100",
    indigo: "from-indigo-50 to-indigo-100",
    teal: "from-teal-50 to-teal-100",
    cyan: "from-cyan-50 to-cyan-100",
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/modulos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Todos los Módulos
              </Link>
              <Link href="/industrias" className="text-gray-600 hover:text-blue-600 transition-colors">
                Industrias
              </Link>
              <Link href="/caracteristicas" className="text-gray-600 hover:text-blue-600 transition-colors">
                Características
              </Link>
              <Link href="/precios" className="text-gray-600 hover:text-blue-600 transition-colors">
                Precios
              </Link>
              <Link href="/centro-ayuda" className="text-gray-600 hover:text-blue-600 transition-colors">
                Ayuda
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                onClick={() => window.open("https://app.goadmin.io/auth/login", "_blank")}
              >
                Iniciar Sesión
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Prueba Gratis</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
              aria-label="Abrir menú de navegación"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                onClick={closeMobileMenu}
                aria-hidden="true"
              />

              {/* Mobile Menu Panel */}
              <div className="absolute top-full left-0 right-0 bg-white border-b border-blue-100 shadow-lg z-50 md:hidden">
                <nav className="px-4 py-6 space-y-4">
                  <Link
                    href="/modulos"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Todos los Módulos
                  </Link>
                  <Link
                    href="/industrias"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Industrias
                  </Link>
                  <Link
                    href="/caracteristicas"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Características
                  </Link>
                  <Link
                    href="/precios"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Precios
                  </Link>
                  <Link
                    href="/centro-ayuda"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Centro de Ayuda
                  </Link>
                  <Link
                    href="/blog"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/acerca-de"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Acerca de
                  </Link>
                  <Link
                    href="/carreras"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Carreras
                  </Link>
                  <Link
                    href="/contacto"
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Contacto
                  </Link>

                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                      onClick={() => {
                        window.open("https://app.goadmin.io/auth/login", "_blank")
                        closeMobileMenu()
                      }}
                    >
                      Iniciar Sesión
                    </Button>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={closeMobileMenu}>
                      Prueba Gratis
                    </Button>
                  </div>
                </nav>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Module Hero */}
      <section className={`py-16 px-4 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]}`}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Módulo Especializado</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Probar {title}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Ver Demo en Vivo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Module Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">{children}</div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center">
            {prevModule ? (
              <Link href={prevModule.href} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-4 w-4" />
                <span>Anterior: {prevModule.name}</span>
              </Link>
            ) : (
              <div></div>
            )}
            {nextModule ? (
              <Link href={nextModule.href} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <span>Siguiente: {nextModule.name}</span>
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
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para implementar {title}?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de empresas que ya utilizan {title} para optimizar sus operaciones diarias.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Comenzar Prueba Gratuita
          </Button>
        </div>
      </section>
    </div>
  )
}
