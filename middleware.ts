import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'
import { MARKETS, marketForCountry, type Language } from './i18n/markets'

const intl = createMiddleware(routing)

/**
 * 1. Primera visita sin mercado elegido: si el país del visitante (encabezado de Vercel) es uno de
 *    los 10 países de GO Admin, lo lleva a su mercado (p. ej. México → /es-mx).
 * 2. En todo lo demás decide next-intl (cookie, prefijo en la URL, idioma del navegador).
 */
export default function middleware(req: NextRequest) {
  const hasChoice = req.cookies.has('GOADMIN_MARKET')
  const unprefixed = !Object.values(MARKETS).some((m) => m.prefix && (req.nextUrl.pathname === m.prefix || req.nextUrl.pathname.startsWith(`${m.prefix}/`)))
  if (!hasChoice && unprefixed) {
    const browser = req.headers.get('accept-language')?.slice(0, 2) as Language | undefined
    const target = marketForCountry(req.headers.get('x-vercel-ip-country'), browser)
    if (target && MARKETS[target].prefix) {
      const url = req.nextUrl.clone()
      url.pathname = `${MARKETS[target].prefix}${req.nextUrl.pathname === '/' ? '' : req.nextUrl.pathname}`
      return NextResponse.redirect(url)
    }
    if (target) {
      // Visitante en Colombia: se queda en es-CO aunque su navegador esté en otro idioma.
      const headers = new Headers(req.headers)
      headers.set('accept-language', target)
      return intl(new NextRequest(req.url, { headers }))
    }
  }
  return intl(req)
}

export const config = {
  // Todo menos archivos internos de Next y archivos estáticos (/api es la página de documentación).
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
}
