import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n'
import './globals.css'

export const metadata: Metadata = {
  title: 'GO Admin - ERP Empresarial Completo',
  description: 'La plataforma ERP más completa del mercado. Gestiona ventas, inventario, finanzas, recursos humanos y más desde una sola solución empresarial. Prueba gratis por 15 días.',
  generator: 'goadmin.io',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'GO Admin - ERP Empresarial Completo',
    description: 'Plataforma ERP todo en uno para tu negocio. 15 módulos integrados, soporte 24/7.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GO Admin - ERP Empresarial Completo',
    description: 'Plataforma ERP todo en uno para tu negocio. 15 módulos integrados, soporte 24/7.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
