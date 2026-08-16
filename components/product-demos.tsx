"use client"

import {
  TrendingUp,
  FileText,
  Users,
  Package,
  LayoutDashboard,
  ShoppingCart,
  BarChart3,
  Bell,
} from "lucide-react"

/**
 * HeroDashboard
 * Mockup compacto de un dashboard ERP real, diseñado para flotar
 * sobre la escena animada del hero. El efecto 3D / perspectiva lo
 * aplica el componente padre (page.tsx) con framer-motion; este
 * componente solo renderiza el contenido limpio del dashboard.
 *
 * Altura total máxima ~400px. Todo en un solo card, sin tabs.
 */
export function HeroDashboard() {
  // Datos simulados para el gráfico de barras (Ene - Jun 2026) en millones COP
  const ventasMensuales = [
    { mes: "Ene", valor: 32 },
    { mes: "Feb", valor: 38 },
    { mes: "Mar", valor: 35 },
    { mes: "Abr", valor: 42 },
    { mes: "May", valor: 45 },
    { mes: "Jun", valor: 52 },
  ]
  const maxVenta = Math.max(...ventasMensuales.map((v) => v.valor))

  // Actividad reciente simulada
  const actividad = [
    { icon: FileText, texto: "Factura FE-2026-001234 pagada", color: "text-green-600", bg: "bg-green-50" },
    { icon: Users, texto: "Nuevo cliente: Distribuidora Andina", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Package, texto: "Inventario actualizado", color: "text-amber-600", bg: "bg-amber-50" },
  ]

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* ===================== Barra superior estilo app ===================== */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2">
          {/* Tres dots estilo macOS */}
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        {/* URL fake */}
        <div className="flex-1 mx-4">
          <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 text-center font-mono">
            app.goadmin.io/dashboard
          </div>
        </div>
        {/* Avatar */}
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
          DC
        </div>
      </div>

      {/* ===================== Cuerpo: sidebar + contenido ===================== */}
      <div className="flex" style={{ maxHeight: "380px" }}>
        {/* ---------- Sidebar mini ---------- */}
        <div className="w-12 flex flex-col items-center gap-4 py-4 bg-gray-50 border-r border-gray-200">
          <LayoutDashboard className="w-5 h-5 text-blue-600" />
          <ShoppingCart className="w-5 h-5 text-blue-600" />
          <Package className="w-5 h-5 text-blue-600" />
          <Users className="w-5 h-5 text-blue-600" />
          <BarChart3 className="w-5 h-5 text-blue-600" />
        </div>

        {/* ---------- Contenido principal ---------- */}
        <div className="flex-1 p-4 overflow-hidden">
          {/* Header del dashboard */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Dashboard</h3>
              <p className="text-xs text-gray-400">Jueves, 14 de agosto 2026</p>
            </div>
            <Bell className="w-4 h-4 text-gray-400" />
          </div>

          {/* 3 cards de métricas compactas */}
          <div className="grid grid-cols-3 gap-2.5 mb-3">
            {/* Ventas */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-100">
              <div className="text-xs text-gray-500">Ventas del mes</div>
              <div className="text-xl font-bold text-gray-900">$45.2M</div>
              <div className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12%
              </div>
            </div>
            {/* Facturas */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-100">
              <div className="text-xs text-gray-500">Facturas</div>
              <div className="text-xl font-bold text-gray-900">1,247</div>
              <div className="text-xs text-blue-600 flex items-center gap-1">
                <FileText className="w-3 h-3" /> Este mes
              </div>
            </div>
            {/* Clientes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-100">
              <div className="text-xs text-gray-500">Clientes</div>
              <div className="text-xl font-bold text-gray-900">389</div>
              <div className="text-xs text-blue-600 flex items-center gap-1">
                <Users className="w-3 h-3" /> Activos
              </div>
            </div>
          </div>

          {/* Gráfico de barras CSS */}
          <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-700">Ventas mensuales</span>
              <span className="text-[10px] text-gray-400">Millones COP</span>
            </div>
            <div className="flex items-end justify-between gap-2 h-24">
              {ventasMensuales.map((item) => {
                const alturaPct = (item.valor / maxVenta) * 100
                return (
                  <div key={item.mes} className="flex flex-1 flex-col items-center gap-1">
                    <div className="w-full flex items-end h-16">
                      <div
                        className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm"
                        style={{ height: `${alturaPct}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-500">{item.mes}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Actividad reciente */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-gray-700">Actividad reciente</span>
            {actividad.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-gray-50">
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full ${item.bg}`}>
                    <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                  </div>
                  <span className="text-xs text-gray-600 truncate">{item.texto}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
