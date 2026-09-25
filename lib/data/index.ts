/**
 * Capa de acceso a datos del sitio.
 *
 * Las páginas SOLO leen a través de estas funciones, que devuelven el contenido del repositorio
 * (lib/catalog, lib/content, lib/site).
 *
 * Decisión: el sitio NO se conecta a la base de datos del ERP (Supabase) ni a otra base.
 * Ver docs/arquitectura-plataforma-web.md, sección 3.
 *
 * Son async para poder cambiar la fuente (p. ej. MDX para el blog) sin tocar las páginas.
 */
import { CHANNELS, PRODUCTS, getProduct, productsByCategory } from '@/lib/catalog/products'
import { SOLUTIONS, getSolution } from '@/lib/catalog/solutions'
import { DEVELOPER_TOOLS, INTEGRATION_GROUPS } from '@/lib/catalog/integrations'
import { POSITIONS, POSTS, getPost } from '@/lib/content/company'
import { PLANS } from '@/lib/site'

export async function listProducts() {
  return PRODUCTS
}
export async function findProduct(slug: string) {
  return getProduct(slug) ?? null
}
export async function listProductsByCategory() {
  return productsByCategory()
}
export async function listChannels() {
  return CHANNELS
}

export async function listSolutions() {
  return SOLUTIONS
}
export async function findSolution(slug: string) {
  return getSolution(slug) ?? null
}

export async function listIntegrationGroups() {
  return { groups: INTEGRATION_GROUPS, developer: DEVELOPER_TOOLS }
}

/** Se actualizan a mano en lib/site.ts cuando cambian los planes del ERP. */
export async function listPlans() {
  return PLANS
}

export async function listOpenPositions() {
  return POSITIONS
}

/** Futuro: MDX en el repositorio o CMS. */
export async function listPosts() {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date))
}
export async function findPost(slug: string) {
  return getPost(slug) ?? null
}
