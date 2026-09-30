/**
 * Legal texts in English (reference translation). The Spanish version in
 * lib/content/legal.ts is the one that governs.
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
