/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Rutas reemplazadas por la nueva arquitectura (Figma › Arquitectura de información)
  async redirects() {
    return [
      { source: '/centro-ayuda', destination: '/soporte', permanent: true },
      { source: '/caracteristicas', destination: '/producto', permanent: true },
      { source: '/modulos', destination: '/producto', permanent: true },
      { source: '/modulos/pos', destination: '/producto/ventas-pos', permanent: true },
      { source: '/modulos/inventario', destination: '/producto/inventario', permanent: true },
      { source: '/modulos/finanzas', destination: '/producto/facturacion-electronica', permanent: true },
      { source: '/modulos/crm', destination: '/producto/clientes-crm', permanent: true },
      { source: '/modulos/hrm', destination: '/producto/nomina', permanent: true },
      { source: '/modulos/reportes', destination: '/producto/reportes', permanent: true },
      { source: '/modulos/pms', destination: '/producto/hoteleria', permanent: true },
      { source: '/modulos/integraciones', destination: '/integraciones', permanent: true },
      { source: '/modulos/notificaciones', destination: '/producto/chat-omnicanal', permanent: true },
      { source: '/modulos/transport', destination: '/soluciones/movilidad', permanent: true },
      { source: '/modulos/:slug(multi-tenant|autenticacion|roles-permisos)', destination: '/seguridad', permanent: true },
      { source: '/modulos/:slug*', destination: '/producto', permanent: true },
      { source: '/industrias', destination: '/soluciones', permanent: true },
      { source: '/soluciones/restaurantes', destination: '/soluciones/gastronomia', permanent: true },
      { source: '/soluciones/hoteles', destination: '/soluciones/hospedaje', permanent: true },
      { source: '/soluciones/tiendas', destination: '/soluciones/comercio', permanent: true },
      { source: '/soluciones/gimnasios', destination: '/soluciones/gimnasios-y-academias', permanent: true },
      { source: '/soluciones/parqueaderos', destination: '/soluciones/movilidad', permanent: true },
      { source: '/soluciones/transporte', destination: '/soluciones/movilidad', permanent: true },
      { source: '/soluciones/bares', destination: '/soluciones/gastronomia', permanent: true },
      { source: '/soluciones/cafeterias', destination: '/soluciones/gastronomia', permanent: true },
      { source: '/industrias/restaurante', destination: '/soluciones/gastronomia', permanent: true },
      { source: '/industrias/hotel', destination: '/soluciones/hospedaje', permanent: true },
      { source: '/industrias/tienda', destination: '/soluciones/comercio', permanent: true },
      { source: '/industrias/gimnasio', destination: '/soluciones/gimnasios-y-academias', permanent: true },
      { source: '/industrias/parqueadero', destination: '/soluciones/movilidad', permanent: true },
      { source: '/industrias/transporte', destination: '/soluciones/movilidad', permanent: true },
      { source: '/industrias/saas', destination: '/soluciones/servicios', permanent: true },
    ]
  },
}

export default nextConfig
