import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n'
import './globals.css'

// Inter (Manual v2.0 › 06). Archivo local para no depender de servicios externos al compilar.
const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
})

const title = 'GO Admin · Tu negocio, en un solo lugar'
const description =
  'Inventario, ventas, facturación electrónica DIAN, nómina y clientes conectados en un solo lugar. Software para negocios en Colombia: restaurantes, hoteles, tiendas, gimnasios, parqueaderos y más.'

export const metadata: Metadata = {
  metadataBase: new URL('https://goadmin.io'),
  title: { default: title, template: '%s · GO Admin' },
  description,
  applicationName: 'GO Admin',
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'es_CO',
    siteName: 'GO Admin',
  },
  twitter: { card: 'summary_large_image', title, description },
}

export const viewport: Viewport = {
  themeColor: '#4361EE',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO" className={inter.variable}>
      <body className="font-sans">
        <a href="#contenido" className="fixed left-4 top-[-80px] z-[100] rounded-lg bg-white px-4 py-3 text-sm font-semibold text-go-deep shadow-lg focus:top-4">
          Ir al contenido
        </a>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
