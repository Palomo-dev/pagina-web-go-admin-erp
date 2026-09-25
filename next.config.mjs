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
      { source: '/caracteristicas', destination: '/modulos', permanent: true },
    ]
  },
}

export default nextConfig
