"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronRight, Globe, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

interface NavbarProps {
  currentPage?: string
}

export function Navbar({ currentPage }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const { lang, setLang, t } = useLanguage()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsLanguageDropdownOpen(false)
  }

  const handleLanguageChange = (newLang: "es" | "en") => {
    setLang(newLang)
    setIsLanguageDropdownOpen(false)
  }

  const handleSignupClick = () => {
    window.open("https://app.goadmin.io/auth/signup", "_blank")
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">GO</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              GO Admin
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.href ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons + Language Dropdown */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Dropdown */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-200"
                aria-label="Select language"
                aria-expanded={isLanguageDropdownOpen}
              >
                <Globe className="h-4 w-4" />
                <span>{lang === "es" ? "ES" : "EN"}</span>
              </button>

              {/* Language Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <button
                    onClick={() => handleLanguageChange("es")}
                    className={`w-full px-4 py-3 flex items-center justify-between text-left text-sm font-medium transition-colors ${
                      lang === "es"
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-gray-500">ES</span>
                      <span>Español</span>
                    </span>
                    {lang === "es" && <Check className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`w-full px-4 py-3 flex items-center justify-between text-left text-sm font-medium transition-colors ${
                      lang === "en"
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-gray-500">US</span>
                      <span>English</span>
                    </span>
                    {lang === "en" && <Check className="h-4 w-4" />}
                  </button>
                </div>
              )}
            </div>

            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent font-medium text-sm"
              onClick={() => window.open("https://app.goadmin.io/auth/login", "_blank")}
            >
              {t("nav.login")}
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg font-medium text-sm"
              onClick={handleSignupClick}
            >
              {t("nav.signup")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors flex-shrink-0"
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
              className="fixed inset-0 bg-black/10 z-40 lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50 lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto">
              <nav className="px-4 py-3 space-y-0">
                {/* Navigation Items */}
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between py-3 px-2 rounded-md transition-colors text-sm font-medium border-b border-gray-100 last:border-b-0 ${
                      currentPage === item.href
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ))}

                {/* Divider */}
                <div className="border-t border-gray-200 my-2" />

                {/* Language Selection */}
                <div className="space-y-1 py-2">
                  <div className="px-2 py-2 flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{t("nav.language") || "Idioma"}</span>
                  </div>
                  <button
                    onClick={() => handleLanguageChange("es")}
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-md transition-colors text-sm font-medium border ${
                      lang === "es"
                        ? "bg-blue-50 text-blue-600 border-blue-200"
                        : "text-gray-700 border-gray-200 hover:border-blue-200"
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-gray-600">ES</span>
                      <span>Español</span>
                    </span>
                    {lang === "es" && <Check className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-md transition-colors text-sm font-medium border ${
                      lang === "en"
                        ? "bg-blue-50 text-blue-600 border-blue-200"
                        : "text-gray-700 border-gray-200 hover:border-blue-200"
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-gray-600">US</span>
                      <span>English</span>
                    </span>
                    {lang === "en" && <Check className="h-4 w-4" />}
                  </button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-2" />

                {/* CTA Buttons */}
                <div className="space-y-2 pt-2 pb-2">
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-white text-sm font-medium"
                    onClick={() => {
                      window.open("https://app.goadmin.io/auth/login", "_blank")
                      closeMobileMenu()
                    }}
                  >
                    {t("nav.login")}
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-sm font-medium shadow-md"
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
