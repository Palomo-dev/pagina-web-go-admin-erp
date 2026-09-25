/**
 * Textes juridiques en français. Traduction de référence de lib/content/legal.ts ;
 * la version espagnole fait foi.
 */
import type * as Es from '@/lib/content/legal'
import { CONTACT } from '@/lib/site'

export const PRIVACY: typeof Es.PRIVACY = {
  title: 'Politique de confidentialité',
  updated: '15 janvier 2024',
  intro:
    'Chez GO Admin, nous protégeons vos renseignements personnels selon les normes les plus élevées de sécurité et de transparence. Découvrez comment nous recueillons, utilisons et protégeons vos données.',
  principles: [
    { title: 'Transparence totale', text: 'Nous vous expliquons clairement quelles données nous recueillons et pourquoi.' },
    { title: 'Sécurité', text: 'Nous protégeons vos renseignements selon des normes élevées.' },
    { title: 'Contrôle de l’utilisateur', text: 'Vous décidez quels renseignements partager et comment les utiliser.' },
    { title: 'Minimisation des données', text: 'Nous recueillons uniquement les renseignements nécessaires au service.' },
  ],
  sections: [
    {
      title: '1. Renseignements que nous recueillons',
      items: [
        'Renseignements de compte : nom, courriel, téléphone et données de facturation (art. 5 de la Loi 1581)',
        'Données d’utilisation : la manière dont vous interagissez avec notre plateforme et nos services',
        'Renseignements techniques : adresse IP, type de navigateur, système d’exploitation',
        'Données d’entreprise : renseignements saisis dans les modules de l’ERP (traitement selon le consentement)',
        'Témoins (cookies) et technologies similaires pour améliorer l’expérience (RGPD art. 7, CCPA section 1798.100)',
        'Coordonnées et communications (avec consentement préalable)',
      ],
    },
    {
      title: '2. Comment nous utilisons vos renseignements',
      items: [
        'Fournir et maintenir nos services (art. 6 du RGPD – exécution du contrat)',
        'Traiter les transactions et gérer votre compte (Loi 1581 – finalité contractuelle)',
        'Communiquer avec vous au sujet des mises à jour et de l’assistance (avec consentement préalable)',
        'Améliorer nos produits et développer de nouvelles fonctionnalités (RGPD art. 6.1.f)',
        'Respecter les obligations légales, fiscales et tributaires colombiennes',
        'Prévenir la fraude, assurer la sécurité et protéger les droits (RGPD art. 6.1.f – intérêt légitime)',
      ],
    },
    {
      title: '3. Communication des renseignements',
      items: [
        'Nous ne vendons pas vos renseignements personnels à des tiers (CCPA section 1798.100(d))',
        'Nous communiquons des données uniquement lorsque c’est nécessaire au service (art. 7 de la Loi 1581)',
        'Fournisseurs de services liés par des ententes strictes de confidentialité et des DPA',
        'Autorités, lorsque la loi colombienne ou les normes internationales l’exigent',
        'En cas de fusion ou d’acquisition (avec préavis et possibilité de refus [opt-out])',
        'Respect des exigences judiciaires ou gouvernementales',
      ],
    },
    {
      title: '4. Sécurité des données',
      items: [
        'Chiffrement de bout en bout de toutes les données sensibles (AES-256, TLS 1.3)',
        'Serveurs sécurisés certifiés SOC 2 et ISO 27001:2022',
        'Accès restreint au seul personnel autorisé, avec authentification multifacteur',
        'Surveillance continue de la sécurité 24 h sur 24, 7 jours sur 7, avec IDS/IPS avancés',
        'Sauvegardes automatiques et plans de reprise après sinistre',
        'Audits de sécurité réguliers et indépendants (conformité au RGPD, art. 32)',
        'Contrôles d’accès physique dans des centres de données certifiés',
      ],
    },
    {
      title: '5. Vos droits',
      items: [
        'Droit d’accès : obtenir la confirmation que nous traitons vos données (art. 15 du RGPD, art. 12 de la Loi 1581)',
        'Droit de rectification : corriger des données inexactes ou incomplètes (art. 16 du RGPD)',
        'Droit à l’oubli : demander la suppression de vos renseignements (art. 17 du RGPD)',
        'Droit à la portabilité : obtenir vos données dans un format structuré (art. 20 du RGPD)',
        'Droit d’opposition : vous opposer au traitement dans certains cas (CCPA section 1798.120)',
        'Droit de retirer votre consentement : à tout moment, sans pénalité',
        'Droits CCPA : accéder, supprimer, connaître l’origine des données communiquées',
      ],
    },
    {
      title: '6. Conservation des données',
      items: [
        'Renseignements de compte : conservés tant que votre compte est actif (art. 5 de la Loi 1581)',
        'Données de facturation : conservées pendant 7 ans selon la réglementation fiscale colombienne',
        'Journaux de sécurité : conservés pendant 2 ans à des fins d’audit et de conformité',
        'Données de navigation : stockées pendant 90 jours au maximum (RGPD art. 5.1.e)',
        'Suppression sécurisée : données effacées définitivement au moyen de méthodes certifiées',
        'Droit de demander la suppression : vous pouvez demander l’effacement à la fermeture de votre compte',
      ],
    },
    {
      title: '7. Transferts internationaux de données',
      items: [
        'Vos données peuvent être traitées dans différents pays selon l’infrastructure (RGPD chap. V)',
        'Nous utilisons des clauses contractuelles types (CCT) approuvées par l’UE',
        'Nous garantissons le même niveau de protection dans tous les emplacements',
        'Nous respectons des cadres de transfert reconnus à l’échelle internationale',
        'Pour les utilisateurs dans l’UE : conformité totale au RGPD, y compris des transferts sécurisés',
        'Renseignements sur l’emplacement : disponibles sur demande (droit d’accès)',
      ],
    },
    {
      title: '8. Droits propres à chaque territoire',
      items: [
        'Colombie (Loi 1581) : autorité de contrôle : Superintendencia de Industria y Comercio',
        'UE (RGPD) : droits élargis, notamment le consentement préalable et l’analyse d’impact',
        'Californie (CCPA) : droit de ne pas faire l’objet de discrimination pour avoir exercé ses droits en matière de confidentialité',
        'Accès aux données : vous pouvez demander l’accès dans un délai de 30 jours ouvrables (Loi 1581, art. 12)',
        'Plaintes : communiquez avec notre DPO pour régler vos préoccupations avant de vous adresser aux autorités',
        'Protection des mineurs : nous ne recueillons pas de données sur les enfants de moins de 13 ans (COPPA)',
      ],
    },
    {
      title: '9. Témoins et technologies de suivi',
      items: [
        'Témoins essentiels : nécessaires au fonctionnement du service',
        'Témoins d’analyse : facultatifs, ils améliorent l’expérience (consentement au moyen d’une bannière)',
        'Gestion des préférences : vous pouvez contrôler les témoins dans votre navigateur',
        'Nous n’utilisons pas : de témoins publicitaires de tiers ni de suivi intrusif',
        'Transparence : liste complète des témoins et des tiers disponible sur demande',
        'Retrait du consentement : possible à tout moment',
      ],
    },
    {
      title: '10. Modifications de la présente politique',
      items: [
        'Nous nous réservons le droit de mettre à jour la présente politique (avec un préavis de 30 jours)',
        'Les changements importants seront communiqués par courriel',
        'La poursuite de l’utilisation vaut acceptation des changements',
        'Version précédente disponible sur demande',
      ],
    },
  ],
  contacts: [
    { title: 'Responsable de la protection des données', text: 'Questions précises sur la confidentialité.', email: CONTACT.email },
    { title: 'Exercer vos droits', text: 'Demandez l’accès à vos renseignements personnels, leur correction ou leur suppression.', email: 'privacidad@goadmin.io' },
  ],
}

export const DATA_DELETION: typeof Es.DATA_DELETION = {
  title: 'Suppression des données',
  intro:
    'Nous respectons votre droit à la vie privée. Vous pouvez demander la suppression complète de vos renseignements personnels à tout moment. Voici comment faire.',
  methods: [
    { title: 'Courriel', text: 'Envoyez votre demande à', contact: CONTACT.email, href: `mailto:${CONTACT.email}`, details: 'Indiquez : nom complet, courriel du compte et motif de la demande.' },
    { title: 'Téléphone', text: 'Appelez notre équipe', contact: CONTACT.phoneDisplay, href: CONTACT.phoneHref, details: 'Du lundi au vendredi, 8 h – 18 h (heure de la Colombie).' },
    { title: 'Dans votre compte', text: 'Depuis votre profil sur', contact: 'app.goadmin.io/perfil', href: 'https://app.goadmin.io/perfil', details: 'Sélectionnez « Demander la suppression des données » dans la configuration.' },
  ],
  steps: [
    { title: 'Demander la suppression', text: 'Communiquez avec notre équipe responsable de la confidentialité par courriel ou par téléphone pour présenter votre demande de suppression des données.' },
    { title: 'Vérification de l’identité', text: 'Nous vérifierons votre identité et que vous êtes bien le titulaire du compte, afin de protéger votre sécurité.' },
    { title: 'Traitement', text: 'Votre demande est traitée dans un délai de 10 jours ouvrables (Loi 1581) ou de 45 jours (RGPD/CCPA).' },
    { title: 'Confirmation', text: 'Vous recevrez la confirmation que vos données ont été supprimées définitivement de nos systèmes.' },
  ],
  retention: [
    { type: 'Données de compte', period: 'Supprimées de façon sécurisée (30 jours de suppression logique)' },
    { type: 'Données de facturation', period: 'Conservées pendant 7 ans (exigence fiscale)' },
    { type: 'Données d’entreprise', period: 'Entièrement supprimées' },
    { type: 'Journaux de sécurité', period: 'Purgés après 30 jours (audit terminé)' },
    { type: 'Copies de sauvegarde', period: 'Supprimées au cycle de sauvegarde suivant (90 jours au maximum)' },
  ],
  frameworks: [
    { title: 'Loi 1581 (Colombie)', text: '10 jours ouvrables pour répondre. Art. 12 à 15.' },
    { title: 'RGPD', text: '45 jours pour traiter la demande. Art. 17.' },
    { title: 'CCPA', text: '45 jours pour traiter la demande. Section 1798.105.' },
  ],
  faq: [
    { q: 'Puis-je récupérer mes données après avoir demandé leur suppression ?', a: 'Non. Une fois le processus de suppression lancé, les données sont effacées définitivement. Elles ne pourront pas être récupérées.' },
    { q: 'Mes données de facturation seront-elles supprimées ?', a: 'Les données de facturation sont conservées pendant 7 ans conformément aux exigences fiscales colombiennes. Les autres données sont entièrement supprimées.' },
    { q: 'Combien de temps prend la suppression ?', a: 'En Colombie : 10 jours ouvrables. Dans l’UE et aux États-Unis (RGPD/CCPA) : 45 jours. Vous recevrez une confirmation une fois la suppression terminée.' },
  ],
}
