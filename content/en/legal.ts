/**
 * Legal texts in English (reference translation). The Spanish version in
 * lib/content/legal.ts is the one that governs.
 */
import type * as Es from '@/lib/content/legal'
import { CONTACT } from '@/lib/site'

export const PRIVACY: typeof Es.PRIVACY = {
  title: 'Privacy policy',
  updated: 'September 27, 2026',
  intro:
    'At GO Admin, we protect your personal information with the highest standards of security and transparency. Learn how we collect, use and protect your data.',
  principles: [
    { title: 'Full transparency', text: 'We clearly explain what data we collect and why.' },
    { title: 'Security', text: 'We protect your information with high standards.' },
    { title: 'User control', text: 'You decide what information to share and how to use it.' },
    { title: 'Data minimization', text: 'We only collect the information needed for the service.' },
  ],
  sections: [
    {
      title: 'Data controller',
      items: [
        `GO Admin S.A.S., tax ID (NIT) ${CONTACT.nit}, domiciled in ${CONTACT.city}.`,
        `Email: ${CONTACT.email} · Phone: ${CONTACT.phoneDisplay}.`,
      ],
    },
    {
      title: '1. Information We Collect',
      items: [
        'Account information: name, email, phone and billing details (Art. 5 Ley 1581)',
        'Usage data: how you interact with our platform and services',
        'Technical information: IP address, browser type, operating system',
        'Business data: information entered in the ERP modules (processed according to consent)',
        'Cookies and similar technologies to improve the experience (GDPR Art. 7, CCPA Section 1798.100)',
        'Contact information and communications (with prior consent)',
      ],
    },
    {
      title: '2. How We Use Your Information',
      items: [
        'Provide and maintain our services (Art. 6 GDPR - Performance of a contract)',
        'Process transactions and manage your account (Ley 1581 - Contractual purpose)',
        'Communicate with you about updates and support (with prior consent)',
        'Improve our products and develop new features (GDPR Art. 6.1.f)',
        'Comply with Colombian legal, fiscal and tax obligations',
        'Prevent fraud, ensure security and protect rights (GDPR Art. 6.1.f - Legitimate interest)',
      ],
    },
    {
      title: '3. Sharing Information',
      items: [
        'We do not sell your personal information to third parties (CCPA Section 1798.100(d))',
        'We share data only when necessary for the service (Art. 7 Ley 1581)',
        'Service providers under strict confidentiality agreements and DPAs',
        'Authorities when required by Colombian law or international regulations',
        'In the event of a merger or acquisition (with prior notice and an opt-out option)',
        'Compliance with judicial or governmental requirements',
      ],
    },
    {
      title: '4. Data Security',
      items: [
        'Encrypted connections (HTTPS/TLS) between your browser and GO Admin.',
        'Role-based access: each user sees only what their role allows.',
        'Automatic backups of the information.',
        'Access to data restricted to authorized staff.',
      ],
    },
    {
      title: '5. Your Rights',
      items: [
        'Right of access: obtain confirmation of whether we process your data (Art. 15 GDPR, Art. 12 Ley 1581)',
        'Right to rectification: correct inaccurate or incomplete data (Art. 16 GDPR)',
        'Right to be forgotten: request deletion of your information (Art. 17 GDPR)',
        'Right to data portability: obtain your data in a structured format (Art. 20 GDPR)',
        'Right to object: object to processing in certain cases (CCPA Section 1798.120)',
        'Right to withdraw consent: at any time without penalty',
        'CCPA rights: access, delete and know the source of shared data',
      ],
    },
    {
      title: '6. Data Retention',
      items: [
        'Account information: kept while your account is active (Art. 5 Ley 1581)',
        'Billing data: kept for 7 years in accordance with Colombian tax regulations',
        'Security logs: kept for 2 years for auditing and compliance',
        'Browsing data: stored for a maximum of 90 days (GDPR Art. 5.1.e)',
        'Secure deletion: data permanently erased using certified methods',
        'Right to request deletion: you can request erasure when you close your account',
      ],
    },
    {
      title: '7. International Data Transfers',
      items: [
        'Your data may be processed in different countries depending on infrastructure (GDPR Ch. V)',
        'We use standard contractual clauses (SCCs) approved by the EU',
        'We guarantee the same level of protection in every location',
        'We comply with internationally recognized transfer frameworks',
        'For users in the EU: full GDPR compliance, including secure transfers',
        'Location information: available on request (right of access)',
      ],
    },
    {
      title: '8. Jurisdiction-Specific Rights',
      items: [
        'Colombia (Ley 1581): Supervisory Authority: Superintendencia de Industria y Comercio',
        'EU (GDPR): Expanded rights, including prior consent and impact assessment',
        'California (CCPA): Right not to be discriminated against for exercising privacy rights',
        'Data access: You can request access within 30 business days (Ley 1581 Art. 12)',
        'Complaints: contact our DPO to resolve concerns before going to the authorities',
        'Protection of minors: we do not collect data from children under 13 (COPPA)',
      ],
    },
    {
      title: '9. Cookies and Tracking Technologies',
      items: [
        'Essential cookies: necessary for the service to work',
        'Analytics cookies: optional, they improve the experience (consent through a banner)',
        'Preference management: you can control cookies in your browser',
        'We do not use: third-party advertising cookies or invasive tracking',
        'Transparency: full list of cookies and third parties available on request',
        'Withdrawal of consent: available at any time',
      ],
    },
    {
      title: '10. Changes to this Policy',
      items: [
        'We reserve the right to update this policy (with 30 days’ notice)',
        'Significant changes will be communicated by email',
        'Continued use implies acceptance of the changes',
        'Previous version available on request',
      ],
    },
  ],
  contacts: [
    { title: 'Data protection officer', text: 'Specific privacy inquiries.', email: CONTACT.email },
    { title: 'Exercise your rights', text: 'Request access to, correction or deletion of your personal data.', email: CONTACT.email },
  ],
}

export const DATA_DELETION: typeof Es.DATA_DELETION = {
  title: 'Data deletion',
  intro:
    'We respect your right to privacy. You can request the complete deletion of your personal data at any time. Here’s how.',
  methods: [
    { title: 'Email', text: 'Send your request to', contact: CONTACT.email, href: `mailto:${CONTACT.email}`, details: 'Include: full name, account email and reason for the request.' },
    { title: 'Phone', text: 'Call our team', contact: CONTACT.phoneDisplay, href: CONTACT.phoneHref, details: 'Monday to Friday, 8:00 AM – 6:00 PM (Colombia time).' },
    { title: 'In your account', text: 'From your profile at', contact: 'app.goadmin.io/perfil', href: 'https://app.goadmin.io/perfil', details: 'Select “Request data deletion” in settings.' },
  ],
  steps: [
    { title: 'Request deletion', text: 'Contact our privacy team by email or phone with your data deletion request.' },
    { title: 'Identity verification', text: 'We will verify your identity and that you are the account owner to protect your security.' },
    { title: 'Processing', text: 'Your request is processed within 10 business days (Ley 1581) or 45 days (GDPR/CCPA).' },
    { title: 'Confirmation', text: 'You will receive confirmation that your data has been permanently deleted from our systems.' },
  ],
  retention: [
    { type: 'Account data', period: 'Securely deleted (30-day soft deletion)' },
    { type: 'Billing data', period: 'Kept for 7 years (tax requirement)' },
    { type: 'Business data', period: 'Completely deleted' },
    { type: 'Security logs', period: 'Purged after 30 days (audit completed)' },
    { type: 'Backup copies', period: 'Deleted in the next backup cycle (max. 90 days)' },
  ],
  frameworks: [
    { title: 'Ley 1581 (Colombia)', text: '10 business days to respond. Art. 12-15.' },
    { title: 'GDPR', text: '45 days to process. Art. 17.' },
    { title: 'CCPA', text: '45 days to process. Section 1798.105.' },
  ],
  faq: [
    { q: 'Can I recover my data after requesting deletion?', a: 'No. Once the deletion process has started, the data is permanently erased. It cannot be recovered.' },
    { q: 'Will my billing data be deleted?', a: 'Billing data is kept for 7 years in accordance with Colombian tax law requirements. All other data is completely deleted.' },
    { q: 'How long does deletion take?', a: 'In Colombia: 10 business days. In the EU/US (GDPR/CCPA): 45 days. You will receive confirmation when it is complete.' },
  ],
}

export const TERMS: typeof Es.TERMS = {
  title: 'Terms and conditions',
  updated: 'September 25, 2026',
  draft: true,
  intro:
    'These terms govern the use of GO Admin, the business management software from GO Admin S.A.S. Take your time reading them: by creating an account or using the service, you accept them.',
  sections: [
    {
      title: '1. Who we are and acceptance',
      items: [
        `GO Admin is a service of ${CONTACT.legalName}, identified with NIT ${CONTACT.nit}, domiciled in ${CONTACT.city}.`,
        'By signing up, starting a trial or using any module, you accept these terms, the Privacy policy and the Cookie policy.',
        'If you use GO Admin on behalf of a company, you represent that you are authorized to accept these terms on its behalf.',
      ],
    },
    {
      title: '2. The service',
      items: [
        'GO Admin is cloud software (SaaS) with modules for sales and POS, inventory, invoicing, accounting, customers, payroll, reports, digital channels and artificial intelligence, among others.',
        'The available modules depend on the plan you subscribe to and on the country. Details for each plan are on the pricing page.',
        'We may improve, change or remove features. If a change significantly reduces what you subscribed to, we will notify you in advance.',
      ],
    },
    {
      title: '3. Your account',
      items: [
        'You must provide accurate information and keep it up to date.',
        'You are responsible for your account credentials and for the users you invite. Give each person the role and permissions they need.',
        'Let us know immediately if you suspect unauthorized access.',
      ],
    },
    {
      title: '4. Plans, trials and payments',
      items: [
        'Plans are billed monthly or annually, in advance. In Colombia, prices are expressed in Colombian pesos (COP); in all other countries, in US dollars (USD).',
        'Some plans include a free trial period. When the trial ends, the plan is charged only if you decide to continue.',
        'Your subscription renews automatically at the end of each period until you cancel it.',
        'Additional users, branches, AI credits and documents are charged at the current rates.',
        'We may change prices. Changes apply from the next period, and we will notify you beforehand.',
      ],
    },
    {
      title: '5. Cancellation',
      items: [
        'You can cancel your subscription at any time from your account. The service remains active until the end of the paid period.',
        'Payments for periods that have already started are not refunded, unless applicable law provides otherwise.',
        'Before canceling, you can export your information. After closure, we keep data in accordance with the Privacy policy and our legal obligations.',
        'We may suspend or close an account that breaches these terms or has overdue payments, giving notice beforehand when possible.',
      ],
    },
    {
      title: '6. Your data',
      items: [
        'The information you enter in GO Admin is yours. We process it to provide the service, in accordance with the Privacy policy.',
        'You decide what data about your customers, employees and suppliers you enter, and you are responsible for having the authorization to process it.',
        'We apply security measures such as encryption, backups and role-based access control.',
      ],
    },
    {
      title: '7. Acceptable use',
      items: [
        'Do not use GO Admin for illegal activities, fraud, sending unsolicited messages or infringing the rights of third parties.',
        'Do not attempt to access other people’s accounts, disrupt the service or extract information by automated means without authorization.',
        'The limits of each plan (users, branches, documents, AI credits) apply to each account.',
      ],
    },
    {
      title: '8. Electronic invoicing and tax obligations',
      items: [
        'In Colombia, GO Admin issues and validates electronic documents with the DIAN through a technology provider. In other countries, electronic issuance with the authority may not be available; each country page shows the status.',
        'You are responsible for the tax information you enter (resolutions, taxes, customer details) and for complying with your tax obligations.',
        'GO Admin is a tool: it does not replace advice from your accountant.',
      ],
    },
    {
      title: '9. Digital channels and content',
      items: [
        'If you use the website, online store, booking engine or chat, you are responsible for the content, prices, products and conditions you publish.',
        'You grant us permission to host and display that content for the sole purpose of providing the service.',
        'Domains you buy through GO Admin are also subject to the registrar’s rules.',
      ],
    },
    {
      title: '10. Artificial intelligence',
      items: [
        'AI features generate suggestions, text and analysis based on your information. Review them before using them: they may contain errors.',
        'Using AI consumes credits according to your plan.',
        'The information used by AI features is processed in accordance with the Privacy policy.',
      ],
    },
    {
      title: '11. Third-party services',
      items: [
        'GO Admin integrates with third-party services (payment gateways, messaging, sales channels, technology providers).',
        'Use of those services is also governed by their own terms. We are not liable for failures in or changes to those services.',
      ],
    },
    {
      title: '12. Availability and support',
      items: [
        'We work to keep GO Admin available continuously, but there may be interruptions for maintenance or for reasons beyond our control.',
        'We will announce scheduled maintenance in advance when possible.',
        'Support is provided through the channels listed on the support page, during the stated hours.',
      ],
    },
    {
      title: '13. Intellectual property',
      items: [
        'The software, the GO Admin brand, the designs and the documentation belong to GO Admin S.A.S.',
        'We grant you a non-exclusive, non-transferable license to use it while your subscription is active.',
        'You may not copy, modify, resell or reverse engineer the software.',
      ],
    },
    {
      title: '14. Liability',
      items: [
        'We provide the service with professional diligence. To the extent permitted by law, we are not liable for indirect damages, lost profits or lost opportunities.',
        'Our total liability to you is limited to the amount you paid for the service in the twelve months before the event that gives rise to it.',
        'Nothing in these terms limits the rights that consumer protection law grants you.',
      ],
    },
    {
      title: '15. Changes to these terms',
      items: [
        'We may update these terms. We will publish the new version with its date and notify you by email if the change is significant.',
        'If you do not agree with a change, you can cancel before it takes effect.',
      ],
    },
    {
      title: '16. Governing law',
      items: [
        'These terms are governed by the laws of the Republic of Colombia.',
        'We will seek to resolve any dispute directly. If that is not possible, it will be resolved by the courts of Medellín, Colombia, unless applicable law provides otherwise.',
      ],
    },
  ],
  contact: { title: 'Questions about these terms?', text: 'Write to us and we will get back to you.', email: CONTACT.email },
}

export const COOKIES: typeof Es.COOKIES = {
  title: 'Cookie policy',
  updated: 'September 25, 2026',
  intro:
    'We use very few cookies on goadmin.io. Here we tell you which ones, what they are for and how to change your choice.',
  what: 'A cookie is a small file that a site stores in your browser to remember something, such as your country or language. Similar technologies, such as the browser’s local storage, are treated the same way in this policy.',
  categories: [
    {
      id: 'necessary',
      title: 'Necessary',
      text: 'They make the site work and remember your choices. They cannot be turned off.',
      always: true,
    },
    {
      id: 'analytics',
      title: 'Analytics',
      text: 'They help us know which pages are visited so we can improve the site. The data is aggregated and does not identify you. They are only enabled if you accept them.',
      always: false,
    },
  ],
  table: [
    { name: 'GOADMIN_MARKET', category: 'Necessary', purpose: 'Remembers the country and language you chose.', duration: '1 year', provider: 'GO Admin' },
    { name: 'goadmin_consent', category: 'Necessary', purpose: 'Stores your cookie choice so we don’t ask you again.', duration: '1 year', provider: 'GO Admin' },
    { name: 'Vercel Web Analytics', category: 'Analytics', purpose: 'Measures page visits in aggregate, without tracking cookies or personal identifiers.', duration: 'Stores no cookies', provider: 'Vercel Inc.' },
  ],
  notUsed: 'We do not use advertising cookies or share browsing data with ad networks.',
  app: 'The GO Admin application (app.goadmin.io) uses its own session cookies, which are necessary to keep you signed in and protect your account.',
  manage: [
    'You can change your choice at any time with the “Cookie settings” button on this page or in the footer.',
    'You can also delete or block cookies in your browser settings. If you block the necessary ones, the site may not remember your country and language.',
  ],
  contact: { title: 'Questions about cookies?', text: 'Write to us and we will get back to you.', email: CONTACT.email },
}
