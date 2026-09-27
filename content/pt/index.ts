import type { LanguageContent } from '../types'
import { catalog } from './catalog'
import * as company from './company'
import * as legal from './legal'

const pt: LanguageContent = {
  catalog,
  company: {
    ABOUT: company.ABOUT,
    POSITIONS: company.POSITIONS,
    WORK_PRINCIPLES: company.WORK_PRINCIPLES,
    HIRING_STEPS: company.HIRING_STEPS,
    TRAINING_FORMATS: company.TRAINING_FORMATS,
    LEARNING_PATHS: company.LEARNING_PATHS,
    POSTS: company.POSTS,
    CHANGELOG: company.CHANGELOG,
    DESKTOP_NOTES: company.DESKTOP_NOTES,
  },
  legal: { PRIVACY: legal.PRIVACY, DATA_DELETION: legal.DATA_DELETION, TERMS: legal.TERMS, COOKIES: legal.COOKIES },
}

export default pt
