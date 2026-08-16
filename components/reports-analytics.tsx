"use client"

import { TrendingUp, TrendingDown, Percent, Receipt, Target, BarChart3, AlertTriangle, Trophy, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const kpis = [
  {
    label: "Ingresos totales",
    value: "$158.2M COP",
    delta: "+26.2% vs periodo anterior",
    icon: TrendingUp,
    positive: true,
  },
  {
    label: "Margen bruto",
    value: "43.7%",
    delta: "+6.1pp",
    icon: Percent,
    positive: true,
  },
  {
    label: "Ticket promedio",
    value: "$42.800",
    delta: "+8.3%",
    icon: Receipt,
    positive: true,
  },
  {
    label: "Conversión",
    value: "68.5%",
    delta: "+4.2pp",
    icon: Target,
    positive: true,
  },
]

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"]
const currentYear = [32, 38, 35, 42, 45, 52]
const previousYear = [28, 30, 29, 33, 36, 38]
const maxBar = 52

const topProducts = [
  { name: "Combo Familiar", sales: "$28.5M", growth: 47, margin: "52%" },
  { name: "Almuerzo Ejecutivo", sales: "$22.1M", growth: 23, margin: "48%" },
  { name: "Bebidas", sales: "$15.8M", growth: 12, margin: "65%" },
  { name: "Postres", sales: "$8.9M", growth: 8, margin: "58%" },
  { name: "Desayunos", sales: "$6.2M", growth: -3, margin: "45%" },
]

const insights = [
  { icon: Calendar, text: "Mejor día: Viernes (+35% vs promedio)", tone: "text-blue-600" },
  { icon: Trophy, text: "Sucursal líder: Centro (+18% vs otras)", tone: "text-amber-600" },
  { icon: AlertTriangle, text: "Alerta: Stock bajo en 3 productos", tone: "text-red-600" },
]

export function ReportsAnalytics() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100">
            <BarChart3 className="h-4.5 w-4.5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-900">Reportes &amp; Analítica</h2>
            <p className="text-[10px] md:text-xs text-gray-500">Tu Empresa · Últimos 6 meses</p>
          </div>
        </div>
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 text-[10px] md:text-xs">
          <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          En tiempo real
        </Badge>
      </div>

      <div className="px-3 md:px-6 py-3 md:py-4 space-y-3 md:space-y-5">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {kpis.map((kpi) => {
            const Icon = kpi.icon
            return (
              <div
                key={kpi.label}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-2.5 md:p-4 border border-blue-100"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{kpi.label}</span>
                  <Icon className="h-4 w-4 text-green-600" />
                </div>
                <div className="mt-2 text-xl font-bold text-gray-900">{kpi.value}</div>
                <div className="mt-1 flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  {kpi.delta}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bar chart */}
        <div className="rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900">Ingresos mensuales comparativo</h3>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500" />
                Año actual 2026
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-300" />
                Año anterior 2025
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-3 h-48">
            {months.map((month, i) => (
              <div key={month} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full items-end justify-center gap-1 h-40">
                  <div
                    className="w-1/2 max-w-[24px] bg-gray-200 rounded-t-sm transition-all"
                    style={{ height: `${(previousYear[i] / maxBar) * 100}%` }}
                    title={`2025: ${previousYear[i]}M`}
                  />
                  <div
                    className="w-1/2 max-w-[24px] bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm transition-all"
                    style={{ height: `${(currentYear[i] / maxBar) * 100}%` }}
                    title={`2026: ${currentYear[i]}M`}
                  />
                </div>
                <span className="text-xs text-gray-500">{month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top products table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-left text-xs text-gray-500">
                <th className="px-4 py-2.5 font-medium">Producto</th>
                <th className="px-4 py-2.5 font-medium text-right">Ventas</th>
                <th className="px-4 py-2.5 font-medium text-right">% Crecimiento</th>
                <th className="px-4 py-2.5 font-medium text-right">Margen</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, i) => (
                <tr
                  key={product.name}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                >
                  <td className="px-4 py-2.5 font-medium text-gray-900">{product.name}</td>
                  <td className="px-4 py-2.5 text-right text-gray-900">{product.sales}</td>
                  <td className="px-4 py-2.5 text-right">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium ${
                        product.growth >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {product.growth >= 0 ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {product.growth >= 0 ? "+" : ""}
                      {product.growth}%
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right text-gray-500">{product.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Insights pills */}
        <div className="flex flex-wrap gap-2">
          {insights.map((insight) => {
            const Icon = insight.icon
            return (
              <div
                key={insight.text}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-700"
              >
                <Icon className={`h-3.5 w-3.5 ${insight.tone}`} />
                {insight.text}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
