/**
 * Textes juridiques en français. Traduction de référence de lib/content/legal.ts ;
 * la version espagnole fait foi.
 */
import type * as Es from '@/lib/content/legal'
import { CONTACT } from '@/lib/site'

export const TERMS: typeof Es.TERMS = {
  title: 'Terms and conditions',
  updated: 'September 25, 2026',
  draft: true,
  intro: 'These terms govern the use of GO Admin.',
  sections: [],
  contact: { title: 'Questions?', text: 'Write to us.', email: CONTACT.email },
}
