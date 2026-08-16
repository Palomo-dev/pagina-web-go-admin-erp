"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Fila superior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-black text-white">
              GO
            </div>
            <div>
              <div className="font-bold text-lg">GO Admin</div>
              <div className="text-sm text-gray-400">ERP empresarial todo en uno</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              onClick={() => window.open("https://app.goadmin.io/auth/login", "_blank")}
            >
              Iniciar Sesión
            </Button>
            <Button onClick={() => window.open("https://app.goadmin.io/auth/signup", "_blank")}>
              Prueba Gratis
            </Button>
          </div>
        </div>

        {/* Fila inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-gray-500">
          <div>© 2026 GO Admin. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="/contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
