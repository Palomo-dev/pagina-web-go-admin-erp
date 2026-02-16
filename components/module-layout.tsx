"use client"

import type React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/lib/i18n"

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
  const { t } = useLanguage()

  const handleSignupClick = () => {
    window.open("https://app.goadmin.io/auth/signup", "_blank")
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
      <Navbar currentPage="/modulos" />

      {/* Module Hero */}
      <section className={`py-16 px-4 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]}`}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{icon}</div>
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{t("module.badge")}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleSignupClick}>
                {t("module.try")} {title}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                {t("module.liveDemo")}
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
                <span>{t("module.prev")} {prevModule.name}</span>
              </Link>
            ) : (
              <div></div>
            )}
            {nextModule ? (
              <Link href={nextModule.href} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <span>{t("module.next")} {nextModule.name}</span>
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
          <h2 className="text-3xl font-bold text-white mb-4">{t("module.readyTitle")} {title}?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("module.readyDesc1")} {title} {t("module.readyDesc2")}
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={handleSignupClick}>
            {t("module.startTrial")}
          </Button>
        </div>
      </section>
    </div>
  )
}
