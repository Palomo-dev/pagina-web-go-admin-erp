/**
 * Capa de acceso a datos del sitio.
 *
 * Las páginas SOLO leen a través de estas funciones. Hoy devuelven contenido estático;
 * cuando se active la integración con el ERP (ver docs/arquitectura-plataforma-web.md),
 * se cambia la implementación aquí —por ejemplo, leyendo las vistas `web.plans_public`,
 * `web.job_openings` o `web.trainings` en Supabase— sin tocar componentes ni páginas.
 *
 * Todas son async para que el cambio a una fuente remota no requiera modificar a quien las usa.
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

/** Futuro: vista `web.plans_public` (tabla `plans` del ERP, columnas price_cop_*). */
export async function listPlans() {
  return PLANS
}

/** Futuro: vista `web.job_openings`. */
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
