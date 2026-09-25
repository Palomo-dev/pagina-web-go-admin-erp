/**
 * Contenido de un idioma construido desde el español. Sirve como punto de partida para una
 * traducción nueva (la forma es exactamente la que espera content/types.ts).
 */
import { CATEGORIES, PRODUCTS } from '@/lib/catalog/products'
import { SOLUTIONS } from '@/lib/catalog/solutions'
import { DEVELOPER_TOOLS, INTEGRATION_GROUPS } from '@/lib/catalog/integrations'
import * as company from '@/lib/content/company'
import * as legal from '@/lib/content/legal'
import type { LanguageContent } from './types'

export function fromSpanish(): LanguageContent {
  return {
    catalog: {
      categories: Object.fromEntries(CATEGORIES.map((c) => [c.id, { name: c.name, text: c.text }])) as LanguageContent['catalog']['categories'],
      products: Object.fromEntries(
        PRODUCTS.map((p) => [
          p.slug,
          {
            name: p.name,
            short: p.short,
            eyebrow: p.eyebrow,
            headline: p.headline,
            lead: p.lead,
            pains: p.pains,
            features: p.features.map(({ title, text }) => ({ title, text })),
            steps: p.steps,
            highlights: p.highlights,
            faq: p.faq,
            variants: p.variants,
          },
        ]),
      ),
      solutions: Object.fromEntries(
        SOLUTIONS.map((s) => [
          s.slug,
          {
            name: s.name,
            short: s.short,
            types: s.types,
            headline: s.headline,
            lead: s.lead,
            pains: s.pains,
            day: s.day,
            channel: { title: s.channel.title, text: s.channel.text },
            features: s.features.map(({ title, text }) => ({ title, text })),
            faq: s.faq,
          },
        ]),
      ),
      integrations: {
        groups: Object.fromEntries(INTEGRATION_GROUPS.map((g) => [g.id, { name: g.name, text: g.text, items: Object.fromEntries(g.items.map((i) => [i.name, i.text])) }])),
        developer: DEVELOPER_TOOLS.map(({ title, text }) => ({ title, text })),
      },
    },
    company: {
      ABOUT: company.ABOUT,
      POSITIONS: company.POSITIONS,
      WORK_PRINCIPLES: company.WORK_PRINCIPLES,
      HIRING_STEPS: company.HIRING_STEPS,
      TRAINING_FORMATS: company.TRAINING_FORMATS,
      LEARNING_PATHS: company.LEARNING_PATHS,
      POSTS: company.POSTS,
      CHANGELOG: company.CHANGELOG,
    },
    legal: { PRIVACY: legal.PRIVACY, DATA_DELETION: legal.DATA_DELETION, TERMS: legal.TERMS, COOKIES: legal.COOKIES },
  }
}
