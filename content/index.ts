/**
 * Traducciones del contenido largo (catálogos, empresa, blog y textos legales).
 * El español es la fuente (lib/catalog y lib/content); cada idioma entrega la misma forma
 * (content/types.ts). Los textos cortos de la interfaz están en messages/*.json.
 */
import type { Language } from '@/i18n/markets'
import type { LanguageContent } from './types'
import en from './en'
import fr from './fr'
import pt from './pt'

export type { CatalogText, CompanyContent, LanguageContent, LegalContent } from './types'

export const CONTENT: Record<Exclude<Language, 'es'>, LanguageContent> = { en, pt, fr }
