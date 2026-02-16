"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Globe } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Footer() {
  const { lang, setLang, t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">GO</span>
              </div>
              <span className="text-2xl font-bold">GO Admin</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">{t("footer.newsletter")}</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">{t("footer.subscribe")}</Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Producto */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">{t("footer.product")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/caracteristicas" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.features")}
                </Link>
              </li>
              <li>
                <Link href="/modulos" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.modules")}
                </Link>
              </li>
              <li>
                <Link href="/industrias" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.industries")}
                </Link>
              </li>
              <li>
                <Link href="/integraciones" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.integrations")}
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.api")}
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.pricing")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">{t("footer.support")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/centro-ayuda" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.helpCenter")}
                </Link>
              </li>
              <li>
                <Link href="/centro-ayuda" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.documentation")}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.systemStatus")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.community")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">{t("footer.company")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/acerca-de" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/carreras" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.careers")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.press")}
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">{"© 2025 GO Admin. "}{t("footer.rights")}</div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t("footer.uptime")}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{t("footer.ssl")}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{t("footer.gdpr")}</span>
              </div>
            </div>

            {/* Language Selector */}
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="flex items-center space-x-2 text-gray-400 text-sm hover:text-white transition-colors cursor-pointer"
              aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Globe className="h-4 w-4" />
              <span>{lang === "es" ? "English" : "Español"}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
