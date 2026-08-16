"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, Globe, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

interface NavbarProps {
  currentPage?: string
  scrollContainerId?: string
  onNavigate?: (sectionId: string) => void
}

export function Navbar({ currentPage, scrollContainerId, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const { lang, setLang, t } = useLanguage()

  // Scroll behavior: navbar se vuelve más sólido al hacer scroll > 50px
  // Escucha el scroll del contenedor (scroll-snap) o de window como fallback
  useEffect(() => {
    const container = scrollContainerId ? document.getElementById(scrollContainerId) : null
    const target = container || window
    const handleScroll = () => {
      const scrollTop = container ? container.scrollTop : window.scrollY
      setIsScrolled(scrollTop > 50)
    }
    target.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => target.removeEventListener("scroll", handleScroll)
  }, [scrollContainerId])

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

  // Click en ancla: navega usando onNavigate (fullPage) o scroll suave como fallback
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(href.replace("#", ""))
    } else {
      const target = document.querySelector(href) as HTMLElement | null
      if (target) {
        const container = scrollContainerId ? document.getElementById(scrollContainerId) : null
        if (container) {
          container.scrollTo({ top: target.offsetTop, behavior: "smooth" })
        } else {
          target.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
    closeMobileMenu()
  }

  const navItems = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.product"), href: "#producto" },
    { name: t("nav.ai"), href: "#ia" },
    { name: t("nav.integrations"), href: "#integraciones" },
    { name: t("nav.pricing"), href: "#precios" },
  ]

  // Clases dinámicas según scroll para efecto glassmorphism
  const pillClasses = isScrolled
    ? "bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl"
    : "bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl"

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      {/* Navbar pill flotante */}
      <nav
        className={`flex items-center justify-between gap-3 rounded-full px-4 py-2.5 transition-all duration-300 ${pillClasses}`}
      >
        {/* Logo GO Admin */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault()
            if (onNavigate) {
              onNavigate("hero")
            } else {
              const container = scrollContainerId ? document.getElementById(scrollContainerId) : null
              if (container) {
                container.scrollTo({ top: 0, behavior: "smooth" })
              } else {
                document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" })
              }
            }
            closeMobileMenu()
          }}
          className="flex items-center space-x-2.5 flex-shrink-0"
        >
          <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">GO</span>
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            GO Admin
          </span>
        </Link>

        {/* Desktop Navigation - items horizontales dentro de la pill */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA: Globe + Login + Prueba Gratis */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Selector de idioma compacto */}
          <div className="relative" ref={languageDropdownRef}>
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 transition-colors"
              aria-label="Select language"
              aria-expanded={isLanguageDropdownOpen}
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold">{lang === "es" ? "ES" : "EN"}</span>
            </button>

            {/* Language Dropdown Menu */}
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl py-2 z-50">
                <button
                  onClick={() => handleLanguageChange("es")}
                  className={`w-full px-4 py-2.5 flex items-center justify-between text-left text-sm font-medium transition-colors ${
                    lang === "es" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
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
                  className={`w-full px-4 py-2.5 flex items-center justify-between text-left text-sm font-medium transition-colors ${
                    lang === "en" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-gray-500">EN</span>
                    <span>English</span>
                  </span>
                  {lang === "en" && <Check className="h-4 w-4" />}
                </button>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            className="text-gray-700 hover:bg-blue-50/80 font-medium text-sm rounded-full"
            onClick={() => window.open("https://app.goadmin.io/auth/login", "_blank")}
          >
            {t("nav.login")}
          </Button>
          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg font-medium text-sm rounded-full"
            onClick={handleSignupClick}
          >
            {t("nav.signup")}
          </Button>
        </div>

        {/* Mobile: logo ya está a la izquierda, aquí solo hamburger + globe */}
        <div className="md:hidden flex items-center space-x-1.5">
          {/* Selector de idioma compacto mobile */}
          <div className="relative" ref={languageDropdownRef}>
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-1 px-2 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 transition-colors"
              aria-label="Select language"
              aria-expanded={isLanguageDropdownOpen}
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold">{lang === "es" ? "ES" : "EN"}</span>
            </button>

            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl py-2 z-50">
                <button
                  onClick={() => handleLanguageChange("es")}
                  className={`w-full px-4 py-2.5 flex items-center justify-between text-left text-xs font-medium transition-colors ${
                    lang === "es" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center space-x-1.5">
                    <span className="font-bold">ES</span>
                    <span>Español</span>
                  </span>
                  {lang === "es" && <Check className="h-3 w-3" />}
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`w-full px-4 py-2.5 flex items-center justify-between text-left text-xs font-medium transition-colors ${
                    lang === "en" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center space-x-1.5">
                    <span className="font-bold">EN</span>
                    <span>English</span>
                  </span>
                  {lang === "en" && <Check className="h-3 w-3" />}
                </button>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-blue-50/80 transition-colors flex-shrink-0"
            aria-label={t("nav.openMenu")}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel - pill flotante tipo glassmorphism debajo del navbar */}
      {isMobileMenuOpen && (
          <div
            className={`mt-2 mx-auto rounded-3xl px-4 py-4 z-50 md:hidden transition-all duration-300 ${pillClasses}`}
          >
            <nav className="flex flex-col space-y-1">
              {/* Navigation Items verticales */}
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-2xl text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-colors"
                >
                  <span>{item.name}</span>
                </a>
              ))}

              {/* Divider */}
              <div className="border-t border-gray-200/60 my-2" />

              {/* CTA Buttons */}
              <div className="flex flex-col space-y-2 pt-1">
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent text-sm font-medium rounded-full"
                  onClick={() => {
                    window.open("https://app.goadmin.io/auth/login", "_blank")
                    closeMobileMenu()
                  }}
                >
                  {t("nav.login")}
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-sm font-medium shadow-md rounded-full"
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
      )}
    </header>
  )
}
