/**
 * Legal texts in English (reference translation). The Spanish version in
 * lib/content/legal.ts is the one that governs.
 */
import type * as Es from '@/lib/content/legal'
import { CONTACT } from '@/lib/site'

export const PRIVACY: typeof Es.PRIVACY = {
  title: 'Privacy policy',
  updated: 'January 15, 2024',
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
        'End-to-end encryption of all sensitive data (AES-256, TLS 1.3)',
        'Secure servers with SOC 2 and ISO 27001:2022 certifications',
        'Access restricted to authorized personnel only, with multi-factor authentication',
        'Continuous 24/7 security monitoring with advanced IDS/IPS',
        'Automatic backups and disaster recovery plans',
        'Regular, independent security audits (GDPR Art. 32 compliance)',
        'Physical access controls in certified data centers',
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
    { title: 'Exercise your rights', text: 'Request access to, correction or deletion of your personal data.', email: 'privacidad@goadmin.io' },
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
