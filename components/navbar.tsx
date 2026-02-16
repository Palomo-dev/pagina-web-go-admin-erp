"use client"

import { useState } from "react"
import { Menu, X, ChevronRight, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

interface NavbarProps {
  currentPage?: string
}

export function Navbar({ currentPage }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleSignupClick = () => {
    window.open("https://app.goadmin.io/auth/signup", "_blank")
  }

  const navItems = [
    { name: t("nav.modules"), href: "/modulos" },
    { name: t("nav.industries"), href: "/industrias" },
    { name: t("nav.features"), href: "/caracteristicas" },
    { name: t("nav.pricing"), href: "/precios" },
    { name: t("nav.helpCenter"), href: "/centro-ayuda" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.about"), href: "/acerca-de" },
    { name: t("nav.careers"), href: "/carreras" },
    { name: t("nav.contact"), href: "/contacto" },
  ]

  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es")
  }

  return (
    <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">GO</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              GO Admin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  currentPage === item.href ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons + Language */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-200"
              aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Globe className="h-4 w-4" />
              <span>{lang === "es" ? "EN" : "ES"}</span>
            </button>

            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent font-medium"
              onClick={() => window.open("https://app.goadmin.io/auth/login", "_blank")}
            >
              {t("nav.login")}
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg font-medium"
              onClick={handleSignupClick}
            >
              {t("nav.signup")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
            aria-label={t("nav.openMenu")}
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
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <div className="absolute top-full left-0 right-0 bg-white border-b border-blue-100 shadow-lg z-50 lg:hidden">
              <nav className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                      currentPage === item.href
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ))}

                {/* Mobile Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-between w-full py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <span className="flex items-center space-x-2 font-medium">
                    <Globe className="h-5 w-5" />
                    <span>{lang === "es" ? "English" : "Español"}</span>
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>

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
                    {t("nav.login")}
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    onClick={() => {
                      handleSignupClick()
                      closeMobileMenu()
                    }}
                  >
                    {t("nav.signup")}
                  </Button>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
