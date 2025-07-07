"use client"

import type React from "react"

import { ArrowLeft, ArrowRight, CheckCircle, Star, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ModuleLayoutProps {
  title: string
  description: string
  icon: React.ReactNode
  children: React.ReactNode
  prevModule?: { name: string; href: string }
  nextModule?: { name: string; href: string }
}

export function ModuleLayout({ title, description, icon, children, prevModule, nextModule }: ModuleLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Volver al inicio</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Módulo ERP
              </Badge>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon and Badge */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                  {icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">{description}</p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-600">Empresas activas</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">99.9%</span>
                </div>
                <p className="text-sm text-gray-600">Tiempo de actividad</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">Satisfacción cliente</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Probar Gratis 30 Días
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                Ver Demo en Vivo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 md:p-12">{children}</div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Por qué elegir este módulo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Implementación Rápida</h3>
                <p className="text-blue-100 text-sm">Configuración en menos de 24 horas</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Soporte 24/7</h3>
                <p className="text-blue-100 text-sm">Asistencia técnica especializada</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">ROI Garantizado</h3>
                <p className="text-blue-100 text-sm">Retorno de inversión en 3 meses</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 px-4 bg-white border-t border-blue-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {prevModule ? (
              <Link
                href={prevModule.href}
                className="group flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Anterior</p>
                  <p className="font-semibold">{prevModule.name}</p>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            <div className="text-center">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Ver Todos los Módulos
              </Button>
            </div>

            {nextModule ? (
              <Link
                href={nextModule.href}
                className="group flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <div>
                  <p className="text-sm text-gray-500 text-right">Siguiente</p>
                  <p className="font-semibold">{nextModule.name}</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
