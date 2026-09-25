/**
 * Forma de las traducciones. Cada idioma (en, pt, fr) entrega exactamente lo mismo que el texto
 * base en español de lib/catalog y lib/content; TypeScript avisa si falta algo.
 */
import type { ProductCategory, ProductText, ProductTextPatch, ProductVariant } from '@/lib/catalog/products'
import type { SolutionText } from '@/lib/catalog/solutions'
import type * as Company from '@/lib/content/company'
import type * as Legal from '@/lib/content/legal'

export type CatalogText = {
  categories: Record<ProductCategory, { name: string; text: string }>
  /** Por slug de producto. Mismo orden y cantidad de pains/features/steps/faq que el español. */
  products: Record<string, ProductText & { variants?: Partial<Record<ProductVariant, ProductTextPatch>> }>
  /** Por slug de solución. */
  solutions: Record<string, SolutionText>
  integrations: {
    /** Por id de grupo; `items` traduce la descripción de cada proveedor por su nombre. */
    groups: Record<string, { name: string; text: string; items: Record<string, string> }>
    developer: { title: string; text: string }[]
  }
}

export type CompanyContent = {
  ABOUT: typeof Company.ABOUT
  POSITIONS: Company.Position[]
  WORK_PRINCIPLES: typeof Company.WORK_PRINCIPLES
  HIRING_STEPS: typeof Company.HIRING_STEPS
  TRAINING_FORMATS: typeof Company.TRAINING_FORMATS
  LEARNING_PATHS: typeof Company.LEARNING_PATHS
  POSTS: Company.Post[]
  /** Mismo orden de meses y novedades que el español */
  CHANGELOG: Company.Release[]
}

export type LegalContent = {
  PRIVACY: typeof Legal.PRIVACY
  DATA_DELETION: typeof Legal.DATA_DELETION
  TERMS: typeof Legal.TERMS
  COOKIES: typeof Legal.COOKIES
}

export type LanguageContent = { catalog: CatalogText; company: CompanyContent; legal: LegalContent }
