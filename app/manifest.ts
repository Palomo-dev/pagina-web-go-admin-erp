import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GO Admin',
    short_name: 'GO Admin',
    description: 'Tu negocio, en un solo lugar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFF',
    theme_color: '#4361EE',
    icons: [
      { src: '/brand/go-icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/brand/go-icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
