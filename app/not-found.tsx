import './globals.css'

/** 404 fuera de cualquier mercado (rutas que el middleware no reconoce). */
export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, sans-serif', display: 'grid', placeItems: 'center', minHeight: '100vh', margin: 0 }}>
        <main style={{ textAlign: 'center' }}>
          <p>404</p>
          <a href="/">GO Admin</a>
        </main>
      </body>
    </html>
  )
}
