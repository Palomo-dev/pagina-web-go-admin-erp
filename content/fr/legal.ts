/**
 * Textes juridiques en français. Traduction de référence de lib/content/legal.ts ;
 * la version espagnole fait foi.
 */
import type * as Es from '@/lib/content/legal'
import { CONTACT } from '@/lib/site'


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

export const TERMS: typeof Es.TERMS = {
  title: 'Conditions d’utilisation',
  updated: '25 septembre 2026',
  draft: true,
  intro:
    'Ces conditions encadrent l’utilisation de GO Admin, le logiciel de gestion d’entreprise de GO Admin S.A.S. Prenez le temps de les lire : en créant un compte ou en utilisant le service, vous les acceptez.',
  sections: [
    {
      title: '1. Qui nous sommes et acceptation',
      items: [
        `GO Admin est un service de ${CONTACT.legalName}, identifiée par le NIT ${CONTACT.nit}, dont le siège est situé à ${CONTACT.city}.`,
        'En vous inscrivant, en commençant un essai ou en utilisant un module, vous acceptez les présentes conditions, la Politique de confidentialité et la Politique relative aux témoins.',
        'Si vous utilisez GO Admin au nom d’une entreprise, vous déclarez être autorisé à accepter les présentes conditions en son nom.',
      ],
    },
    {
      title: '2. Le service',
      items: [
        'GO Admin est un logiciel infonuagique (SaaS) qui comprend notamment des modules de ventes et de PDV, d’inventaire, de facturation, de comptabilité, de clients, de paie, de rapports, de canaux numériques et d’intelligence artificielle.',
        'Les modules offerts dépendent du forfait souscrit et du pays. L’information sur chaque forfait se trouve sur la page des tarifs.',
        'Nous pouvons améliorer, modifier ou retirer des fonctions. Si un changement réduit de façon importante ce que vous avez souscrit, nous vous en aviserons à l’avance.',
      ],
    },
    {
      title: '3. Votre compte',
      items: [
        'Vous devez fournir des renseignements exacts et les tenir à jour.',
        'Vous êtes responsable des identifiants de votre compte et des utilisateurs que vous invitez. Attribuez à chaque personne le rôle et les autorisations dont elle a besoin.',
        'Avisez-nous immédiatement si vous soupçonnez un accès non autorisé.',
      ],
    },
    {
      title: '4. Forfaits, essais et paiements',
      items: [
        'Les forfaits sont facturés au mois ou à l’année, à l’avance. En Colombie, le prix est exprimé en pesos colombiens (COP); dans les autres pays, en dollars américains (USD).',
        'Certains forfaits comprennent une période d’essai gratuite. À la fin de l’essai, le forfait n’est facturé que si vous décidez de continuer.',
        'L’abonnement se renouvelle automatiquement à la fin de chaque période jusqu’à ce que vous l’annuliez.',
        'Les utilisateurs, succursales, crédits d’IA et documents supplémentaires sont facturés selon les tarifs en vigueur.',
        'Nous pouvons modifier les prix. Les changements s’appliquent à partir de la période suivante et nous vous en aviserons au préalable.',
      ],
    },
    {
      title: '5. Annulation',
      items: [
        'Vous pouvez annuler votre abonnement en tout temps depuis votre compte. Le service reste actif jusqu’à la fin de la période payée.',
        'Les paiements des périodes déjà commencées ne sont pas remboursés, sauf si la loi applicable en dispose autrement.',
        'Avant d’annuler, vous pouvez exporter vos renseignements. Après la fermeture, nous conservons les données conformément à la Politique de confidentialité et aux obligations légales.',
        'Nous pouvons suspendre ou fermer un compte qui enfreint les présentes conditions ou dont les paiements sont en retard, en vous avisant au préalable lorsque c’est possible.',
      ],
    },
    {
      title: '6. Vos données',
      items: [
        'Les renseignements que vous enregistrez dans GO Admin vous appartiennent. Nous les traitons pour vous fournir le service, conformément à la Politique de confidentialité.',
        'Vous décidez quelles données de vos clients, employés et fournisseurs vous enregistrez, et vous êtes responsable d’avoir l’autorisation de les traiter.',
        'Nous appliquons des mesures de sécurité comme le chiffrement, les copies de sauvegarde et le contrôle d’accès par rôles.',
      ],
    },
    {
      title: '7. Utilisation acceptable',
      items: [
        'N’utilisez pas GO Admin pour des activités illégales, de la fraude, l’envoi de messages non sollicités ou pour porter atteinte aux droits de tiers.',
        'N’essayez pas d’accéder aux comptes d’autrui, d’interrompre le service ni d’extraire des renseignements de façon automatisée sans autorisation.',
        'Les limites de chaque forfait (utilisateurs, succursales, documents, crédits d’IA) s’appliquent à chaque compte.',
      ],
    },
    {
      title: '8. Facturation électronique et obligations fiscales',
      items: [
        'En Colombie, GO Admin émet et valide les documents électroniques auprès de la DIAN par l’intermédiaire d’un fournisseur technologique. Dans les autres pays, l’émission électronique auprès de l’autorité peut ne pas être offerte; la page de chaque pays en indique l’état.',
        'Vous êtes responsable des renseignements fiscaux que vous enregistrez (résolutions, taxes, données des clients) et du respect de vos obligations fiscales.',
        'GO Admin est un outil : il ne remplace pas les conseils de votre comptable.',
      ],
    },
    {
      title: '9. Canaux numériques et contenu',
      items: [
        'Si vous utilisez le site Web, la boutique en ligne, le moteur de réservation ou le clavardage, vous êtes responsable du contenu, des prix, des produits et des conditions que vous publiez.',
        'Vous nous autorisez à héberger et à afficher ce contenu dans le seul but de vous fournir le service.',
        'Les noms de domaine que vous achetez par l’intermédiaire de GO Admin sont également soumis aux règles du registraire.',
      ],
    },
    {
      title: '10. Intelligence artificielle',
      items: [
        'Les fonctions d’IA génèrent des suggestions, des textes et des analyses à partir de vos renseignements. Vérifiez-les avant de les utiliser : ils peuvent contenir des erreurs.',
        'L’utilisation de l’IA consomme des crédits selon votre forfait.',
        'Les renseignements utilisés par les fonctions d’IA sont traités conformément à la Politique de confidentialité.',
      ],
    },
    {
      title: '11. Services de tiers',
      items: [
        'GO Admin s’intègre à des services de tiers (passerelles de paiement, messagerie, canaux de vente, fournisseurs technologiques).',
        'L’utilisation de ces services est également régie par leurs propres conditions. Nous ne sommes pas responsables des pannes ou des changements de ces services.',
      ],
    },
    {
      title: '12. Disponibilité et soutien',
      items: [
        'Nous travaillons pour que GO Admin soit disponible en continu, mais des interruptions peuvent survenir pour de l’entretien ou pour des causes indépendantes de notre volonté.',
        'Nous annoncerons à l’avance les entretiens planifiés lorsque c’est possible.',
        'Le soutien est offert par les canaux publiés sur la page de soutien, selon les horaires indiqués.',
      ],
    },
    {
      title: '13. Propriété intellectuelle',
      items: [
        'Le logiciel, la marque GO Admin, les designs et la documentation appartiennent à GO Admin S.A.S.',
        'Nous vous accordons une licence d’utilisation non exclusive et non transférable tant que votre abonnement est actif.',
        'Vous ne pouvez pas copier, modifier, revendre ni faire de l’ingénierie inverse du logiciel.',
      ],
    },
    {
      title: '14. Responsabilité',
      items: [
        'Nous fournissons le service avec une diligence professionnelle. Dans la mesure permise par la loi, nous ne sommes pas responsables des dommages indirects, du manque à gagner ni de la perte d’occasions.',
        'Notre responsabilité totale envers vous est limitée au montant que vous avez payé pour le service au cours des douze mois précédant le fait qui l’engage.',
        'Rien dans les présentes conditions ne limite les droits que vous reconnaît la loi sur la protection du consommateur.',
      ],
    },
    {
      title: '15. Modifications des présentes conditions',
      items: [
        'Nous pouvons mettre à jour les présentes conditions. Nous publierons la nouvelle version avec sa date et vous aviserons par courriel si le changement est important.',
        'Si vous n’êtes pas d’accord avec un changement, vous pouvez annuler avant son entrée en vigueur.',
      ],
    },
    {
      title: '16. Loi applicable',
      items: [
        'Les présentes conditions sont régies par les lois de la République de Colombie.',
        'Nous chercherons à régler tout différend directement. Si ce n’est pas possible, il sera tranché par les tribunaux de Medellín, en Colombie, sauf si la loi applicable en dispose autrement.',
      ],
    },
  ],
  contact: { title: 'Vous avez des questions sur ces conditions ?', text: 'Écrivez-nous et nous vous répondrons.', email: CONTACT.email },
}

/**
 * Politique relative aux témoins (cookies). Traduction de lib/content/legal.ts ; la version espagnole fait foi.
 */
export const COOKIES: typeof Es.COOKIES = {
  title: 'Politique relative aux témoins',
  updated: '25 septembre 2026',
  intro:
    'Nous utilisons très peu de témoins (cookies) sur goadmin.io. Voici lesquels, à quoi ils servent et comment modifier votre choix.',
  what: 'Un témoin est un petit fichier que le site enregistre dans votre navigateur pour se souvenir de quelque chose, comme votre pays ou votre langue. Les technologies semblables, comme le stockage local du navigateur, sont traitées de la même façon dans la présente politique.',
  categories: [
    {
      id: 'necessary',
      title: 'Nécessaires',
      text: 'Ils permettent au site de fonctionner et mémorisent vos choix. Ils ne peuvent pas être désactivés.',
      always: true,
    },
    {
      id: 'analytics',
      title: 'Analytique',
      text: 'Ils nous aident à savoir quelles pages sont visitées afin d’améliorer le site. Les données sont agrégées et ne vous identifient pas. Ils ne sont activés que si vous les acceptez.',
      always: false,
    },
  ],
  table: [
    { name: 'GOADMIN_MARKET', category: 'Nécessaires', purpose: 'Mémorise le pays et la langue que vous avez choisis.', duration: '1 an', provider: 'GO Admin' },
    { name: 'goadmin_consent', category: 'Nécessaires', purpose: 'Enregistre votre choix concernant les témoins pour ne plus vous le demander.', duration: '1 an', provider: 'GO Admin' },
    { name: 'Vercel Web Analytics', category: 'Analytique', purpose: 'Mesure les visites des pages de façon agrégée, sans témoins de suivi ni identifiants personnels.', duration: 'N’enregistre aucun témoin', provider: 'Vercel Inc.' },
  ],
  notUsed: 'Nous n’utilisons pas de témoins publicitaires et ne partageons pas de données de navigation avec des réseaux publicitaires.',
  app: 'L’application GO Admin (app.goadmin.io) utilise ses propres témoins de session, nécessaires pour vous garder connecté et protéger votre compte.',
  manage: [
    'Vous pouvez modifier votre choix en tout temps avec le bouton « Paramètres des témoins » de cette page ou du pied de page.',
    'Vous pouvez aussi supprimer ou bloquer les témoins depuis les paramètres de votre navigateur. Si vous bloquez les témoins nécessaires, le site pourrait ne pas se souvenir de votre pays et de votre langue.',
  ],
  contact: { title: 'Vous avez des questions sur les témoins ?', text: 'Écrivez-nous et nous vous répondrons.', email: CONTACT.email },
}

