"use client"

import { CheckCircle } from "lucide-react"

export function InvoicePreview() {
  const items = [
    { descripcion: "Combo Familiar", cantidad: 2, subtotal: 85600 },
    { descripcion: "Almuerzo Ejecutivo", cantidad: 5, subtotal: 107500 },
    { descripcion: "Bebidas Varias", cantidad: 10, subtotal: 32000 },
  ]

  const subtotal = 225100
  const iva = 42769
  const total = 267869

  const formatCurrency = (value: number) =>
    `$${value.toLocaleString("es-CO")}`

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-w-md mx-auto">
      {/* Header de la factura */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                <span className="text-blue-700 text-[10px] font-bold">GO</span>
              </div>
              <span className="text-xs font-semibold">GO Admin</span>
            </div>
            <span className="text-xs font-bold tracking-wide">
              FACTURA ELECTRÓNICA
            </span>
          </div>
          <span className="text-[10px] font-mono opacity-90">
            FE-2026-001234
          </span>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-green-400" />
          <span className="bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            ACEPTADA DIAN
          </span>
        </div>
      </div>

      {/* Info del emisor */}
      <div className="px-3 py-2 border-b border-gray-100">
        <p className="text-xs font-bold text-gray-800">
          Tu Empresa S.A.S
        </p>
        <p className="text-[10px] text-gray-500">NIT: 901.234.567-8</p>
        <p className="text-[10px] text-gray-500">
          Cra 45 #23-56, Cali
        </p>
      </div>

      {/* Info del cliente */}
      <div className="px-3 py-2 border-b border-gray-100 bg-gray-50/50">
        <div className="flex justify-between">
          <div>
            <p className="text-[10px] text-gray-500">Cliente</p>
            <p className="text-xs font-semibold text-gray-800">
              Distribuidora Andina Ltda
            </p>
            <p className="text-[10px] text-gray-500">NIT/CC: 800.123.456-7</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500">Fecha</p>
            <p className="text-xs font-semibold text-gray-800">14/08/2026</p>
          </div>
        </div>
      </div>

      {/* Tabla de items */}
      <div className="px-3 py-2">
        <table className="w-full text-[10px]">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th className="text-left font-medium pb-1">Descripción</th>
              <th className="text-center font-medium pb-1">Cant</th>
              <th className="text-right font-medium pb-1">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-1.5 text-left text-gray-700">
                  {item.descripcion}
                </td>
                <td className="py-1.5 text-center text-gray-700">
                  {item.cantidad}
                </td>
                <td className="py-1.5 text-right text-gray-700 font-medium">
                  {formatCurrency(item.subtotal)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totales */}
      <div className="px-3 py-2 border-t border-gray-200">
        <div className="flex justify-between text-[10px] text-gray-600">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-[10px] text-gray-600 mt-0.5">
          <span>IVA (19%)</span>
          <span>{formatCurrency(iva)}</span>
        </div>
        <div className="flex justify-between items-center mt-1 pt-1 border-t border-gray-100">
          <span className="text-xs font-semibold text-gray-700">Total</span>
          <span className="text-blue-700 text-lg font-bold">
            {formatCurrency(total)}
          </span>
        </div>
      </div>

      {/* Footer de la factura */}
      <div className="px-3 py-2 border-t border-gray-100 bg-gray-50/50">
        <div className="flex justify-between text-[10px] text-gray-600 mb-0.5">
          <span>Forma de pago: Crédito 30 días</span>
        </div>
        <div className="flex justify-between text-[10px] text-gray-600 mb-2">
          <span>Vencimiento: 13/09/2026</span>
        </div>

        <div className="flex items-start gap-2">
          {/* QR simulado */}
          <div className="w-15 h-15 bg-white border border-gray-300 p-1 grid grid-cols-5 gap-px shrink-0">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                className={
                  i % 3 === 0 || i % 7 === 0 ? "bg-black" : "bg-white"
                }
              />
            ))}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[9px] text-gray-500 mb-0.5">CUFE</p>
            <p className="text-[9px] font-mono text-gray-700 truncate">
              abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
            </p>
          </div>
        </div>

        <p className="text-[9px] text-gray-400 mt-2 text-center leading-tight">
          Esta factura electrónica fue generada por GO Admin ERP y validada por
          la DIAN
        </p>
      </div>
    </div>
  )
}
