"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    alert("¡Gracias por suscribirte al newsletter!")
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">GO</span>
              </div>
              <span className="text-2xl font-bold">GO Admin</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              El ERP más completo del mercado para gestionar tu negocio de manera eficiente y profesional.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Producto</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/caracteristicas" className="text-gray-400 hover:text-white transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/modulos" className="text-gray-400 hover:text-white transition-colors">
                  Módulos
                </Link>
              </li>
              <li>
                <Link href="/industrias" className="text-gray-400 hover:text-white transition-colors">
                  Industrias
                </Link>
              </li>
              <li>
                <Link href="/integraciones" className="text-gray-400 hover:text-white transition-colors">
                  Integraciones
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-gray-400 hover:text-white transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Soporte</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/centro-ayuda" className="text-gray-400 hover:text-white transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="/centro-ayuda" className="text-gray-400 hover:text-white transition-colors">
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Estado del Sistema
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Reportar un Bug
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Comunidad
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/acerca-de" className="text-gray-400 hover:text-white transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/carreras" className="text-gray-400 hover:text-white transition-colors">
                  Carreras
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Prensa
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Recibe las últimas actualizaciones, consejos y noticias directamente en tu bandeja de entrada.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="tu@email.com"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Suscribirse
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Al suscribirte, aceptas nuestra Política de Privacidad y Términos de Servicio.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 GO Admin. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-400">Todos los sistemas operando</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>🔒</span>
                <span>Conexión Segura SSL</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>✓</span>
                <span>Cumplimiento GDPR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
