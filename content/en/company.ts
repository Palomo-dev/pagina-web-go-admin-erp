/**
 * Company content in English: about, careers, training and blog.
 * Same shape as lib/content/company.ts (Spanish source).
 */
import type * as Es from '@/lib/content/company'
import type { IconName } from '@/lib/site'

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const ABOUT: typeof Es.ABOUT = {
  mission: 'Bring together the tools to organize how small and midsize businesses operate, so that understanding what is happening in the business and being able to act becomes part of everyday work.',
  audience: 'We talk to the owner or manager who juggles customer service, decisions and operational tasks. They need clarity, useful information and tools that support their work.',
  values: [
    { title: 'Direct', text: 'We name the problem and say what can be done.', icon: 'zap' as IconName },
    { title: 'Competent', text: 'We explain with precision and prove what we claim.', icon: 'shield' as IconName },
    { title: 'Approachable', text: 'We understand the workday and respect your time.', icon: 'heart-handshake' as IconName },
    { title: 'With character', text: 'A question, an image or a memorable idea, without losing clarity.', icon: 'sparkles' as IconName },
  ],
}

// ---------------------------------------------------------------------------
// Careers
// ---------------------------------------------------------------------------
/** Open positions. Empty = the invitation to send a résumé is shown. */
export const POSITIONS: Es.Position[] = []

export const WORK_PRINCIPLES: typeof Es.WORK_PRINCIPLES = [
  { title: 'Work you can see', text: 'What we build is used by a real business the next day.', icon: 'rocket' as IconName },
  { title: 'From Colombia', text: 'A team in Medellín, with remote work depending on the role.', icon: 'map-pin' as IconName },
  { title: 'Serious learning', text: 'Time and mentoring to grow in your craft.', icon: 'graduation' as IconName },
  { title: 'Clarity', text: 'Goals, owners and decisions in writing.', icon: 'book' as IconName },
]

export const HIRING_STEPS: typeof Es.HIRING_STEPS = [
  { title: 'Apply', text: 'Send your résumé and tell us what you would like to build.' },
  { title: 'Let’s talk', text: 'A call to get to know each other.' },
  { title: 'Short challenge', text: 'A focused exercise related to the role.' },
  { title: 'Offer', text: 'A clear answer, whatever it is.' },
]

// ---------------------------------------------------------------------------
// Training
// ---------------------------------------------------------------------------
export const TRAINING_FORMATS: typeof Es.TRAINING_FORMATS = [
  { title: '1:1 setup', text: 'A person sets up your company, locations, products and invoicing with you.', meta: 'When you start', icon: 'heart-handshake' as IconName },
  { title: 'Live sessions', text: 'Small groups by topic, with questions at the end.', meta: 'Every week', icon: 'users' as IconName },
  { title: 'Role-based paths', text: 'Register, warehouse, accounting and management: what each person needs.', meta: 'At your own pace', icon: 'graduation' as IconName },
  { title: 'Step-by-step guides', text: 'Articles with screenshots and short videos in the help center.', meta: 'Always', icon: 'book' as IconName },
]

export const LEARNING_PATHS: typeof Es.LEARNING_PATHS = [
  { role: 'Register and sales', icon: 'cart', lessons: ['Open and close the register', 'Sell and take payment', 'Returns', 'Invoice from the POS'] },
  { role: 'Warehouse', icon: 'package', lessons: ['Create products', 'Receive purchases', 'Transfers', 'Counts and adjustments'] },
  { role: 'Accounting', icon: 'calculator', lessons: ['Chart of accounts', 'Receivables and payments', 'Reconciliation', 'Month-end close'] },
  { role: 'Management', icon: 'building', lessons: ['Locations and users', 'Roles and permissions', 'Reports', 'Website and store'] },
]

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------
export const POSTS: Es.Post[] = [
  {
    slug: 'vendiste-mas-o-ganaste-mas',
    title: 'Did you sell more or earn more?',
    excerpt: 'Selling more doesn’t always mean earning more. Three numbers worth checking every week.',
    category: 'Finance',
    date: '2026-09-15',
    readingMinutes: 4,
    body: [
      { paragraphs: ['A month with more sales can end with less cash in the register. It happens when costs go up, when you sell more of what leaves little margin, or when receivables grow.'] },
      { heading: '1. Margin by product', paragraphs: ['Look at how much each product leaves after its cost. The best sellers aren’t always the ones that contribute the most.'] },
      { heading: '2. Real cost of what you sold', paragraphs: ['With up-to-date inventory and average cost, the cost of goods sold stops being an estimate.'] },
      { heading: '3. What you’re owed', paragraphs: ['A sale on credit is revenue in the report, but not in the bank. Review receivables by age.'] },
      { heading: 'What to do this week', paragraphs: [], list: ['Identify your five highest-margin products.', 'Check whether any of them sell with discounts that put them at a loss.', 'Call the three customers with the oldest balances.'] },
    ],
  },
  {
    slug: 'antes-de-cerrar-caja',
    title: 'Before you close the register',
    excerpt: 'A short checklist so the close balances and any differences have an explanation.',
    category: 'Operations',
    date: '2026-09-08',
    readingMinutes: 3,
    body: [
      { paragraphs: ['Closing the register is when the day turns into numbers. These checks prevent most discrepancies.'] },
      { heading: 'Closing checklist', paragraphs: [], list: ['Count the cash by denomination.', 'Compare card payments with the card terminal report.', 'Review transfers and QR payments received.', 'Record expenses paid from the register with their receipts.', 'Note the reason for any discrepancy.'] },
      { heading: 'When something doesn’t balance', paragraphs: ['A small, repeated difference usually comes from change given or from mixed payments recorded incorrectly. A system that separates payment methods on every sale lets you find the difference in minutes.'] },
    ],
  },
  {
    slug: 'tu-negocio-en-internet',
    title: 'Your business online without hiring an agency',
    excerpt: 'Website, online store and bookings connected to what you already have in the system.',
    category: 'Digital channels',
    date: '2026-09-01',
    readingMinutes: 5,
    body: [
      { paragraphs: ['Many businesses have social media, but not a place of their own where customers can see products, prices and hours, and buy or book.'] },
      { heading: 'What a website that sells needs', paragraphs: [], list: ['Up-to-date information: real prices and availability.', 'One clear action: buy, book or send a message.', 'An address that’s easy to remember.', 'Fast loading on phones.'] },
      { heading: 'Connected or out of date', paragraphs: ['A website separate from your inventory goes out of date in weeks. When the website comes from the same catalog as the system, changing a price at the register changes it online too.'] },
    ],
  },
  {
    slug: 'facturacion-electronica-que-necesitas',
    title: 'E-invoicing: what you need to get started',
    excerpt: 'The basics for issuing your first electronic invoice in Colombia.',
    category: 'Guides',
    date: '2026-08-25',
    readingMinutes: 4,
    countries: ['COL'],
    body: [
      { paragraphs: ['Issuing electronic invoices requires a few prior steps with the DIAN and a system that generates and sends the documents. This is a general checklist; confirm the current requirements with your accountant.'] },
      { heading: 'The basics', paragraphs: [], list: ['Up-to-date RUT with the corresponding responsibility.', 'Authorization as an electronic invoicer.', 'Numbering resolution.', 'Digital signature certificate.'] },
      { heading: 'Day to day', paragraphs: ['What matters is that the invoice comes from the same place where you sell, with the correct customer details and the validation status in plain sight.'] },
    ],
  },
]
