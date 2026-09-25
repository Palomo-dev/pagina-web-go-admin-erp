/**
 * Contenu d’entreprise en français (même forme que lib/content/company.ts).
 */
import type * as Es from '@/lib/content/company'
import type { IconName } from '@/lib/site'

export const ABOUT: typeof Es.ABOUT = {
  mission: 'Réunir les outils pour organiser les activités des petites et moyennes entreprises, afin que comprendre ce qui se passe dans l’entreprise et pouvoir agir fasse partie du quotidien.',
  audience: 'Nous nous adressons au propriétaire ou au gestionnaire qui jongle entre le service à la clientèle, les décisions et les tâches opérationnelles. Il a besoin de clarté, d’information utile et d’outils qui accompagnent son travail.',
  values: [
    { title: 'Directs', text: 'Nous nommons le problème et disons ce qui peut être fait.', icon: 'zap' as IconName },
    { title: 'Compétents', text: 'Nous expliquons avec précision et démontrons ce que nous affirmons.', icon: 'shield' as IconName },
    { title: 'Proches', text: 'Nous comprenons votre journée de travail et respectons votre temps.', icon: 'heart-handshake' as IconName },
    { title: 'Avec du caractère', text: 'Une question, une image ou une idée marquante, sans perdre en clarté.', icon: 'sparkles' as IconName },
  ],
}

export const POSITIONS: Es.Position[] = []

export const WORK_PRINCIPLES: typeof Es.WORK_PRINCIPLES = [
  { title: 'Un travail qui se voit', text: 'Ce que nous bâtissons, une vraie entreprise l’utilise dès le lendemain.', icon: 'rocket' as IconName },
  { title: 'Depuis la Colombie', text: 'Une équipe à Medellín, avec du télétravail selon le poste.', icon: 'map-pin' as IconName },
  { title: 'Apprendre pour vrai', text: 'Du temps et de l’accompagnement pour progresser dans votre métier.', icon: 'graduation' as IconName },
  { title: 'Clarté', text: 'Objectifs, responsables et décisions par écrit.', icon: 'book' as IconName },
]

export const HIRING_STEPS: typeof Es.HIRING_STEPS = [
  { title: 'Postulez', text: 'Envoyez votre CV et dites-nous ce que vous aimeriez bâtir.' },
  { title: 'Discutons', text: 'Un appel pour faire connaissance.' },
  { title: 'Court défi', text: 'Un exercice ciblé, lié au poste.' },
  { title: 'Proposition', text: 'Une réponse claire, quelle qu’elle soit.' },
]

export const TRAINING_FORMATS: typeof Es.TRAINING_FORMATS = [
  { title: 'Mise en place individuelle', text: 'Une personne configure avec vous l’entreprise, les succursales, les produits et la facturation.', meta: 'Au démarrage', icon: 'heart-handshake' as IconName },
  { title: 'Séances en direct', text: 'Petits groupes par thème, avec période de questions à la fin.', meta: 'Chaque semaine', icon: 'users' as IconName },
  { title: 'Parcours par rôle', text: 'Caisse, entrepôt, comptabilité et administration : ce dont chacun a besoin.', meta: 'À votre rythme', icon: 'graduation' as IconName },
  { title: 'Guides étape par étape', text: 'Des articles avec captures d’écran et de courtes vidéos dans le centre d’aide.', meta: 'Toujours', icon: 'book' as IconName },
]

export const LEARNING_PATHS: typeof Es.LEARNING_PATHS = [
  { role: 'Caisse et ventes', icon: 'cart', lessons: ['Ouvrir et fermer la caisse', 'Vendre et encaisser', 'Retours', 'Facturer depuis le PDV'] },
  { role: 'Entrepôt', icon: 'package', lessons: ['Créer des produits', 'Recevoir les achats', 'Transferts', 'Dénombrements et ajustements'] },
  { role: 'Comptabilité', icon: 'calculator', lessons: ['Plan comptable', 'Comptes clients et paiements', 'Rapprochement', 'Fermeture de mois'] },
  { role: 'Administration', icon: 'building', lessons: ['Succursales et utilisateurs', 'Rôles et permissions', 'Rapports', 'Site Web et boutique'] },
]

export const POSTS: Es.Post[] = [
  {
    slug: 'vendiste-mas-o-ganaste-mas',
    title: 'Avez-vous vendu plus ou gagné plus ?',
    excerpt: 'Vendre plus ne veut pas toujours dire gagner plus. Trois chiffres à surveiller chaque semaine.',
    category: 'Finances',
    date: '2026-09-15',
    readingMinutes: 4,
    body: [
      { paragraphs: ['Un mois avec plus de ventes peut se terminer avec moins d’argent en caisse. C’est le cas quand les coûts augmentent, quand on vend davantage ce qui rapporte peu de marge ou quand les comptes clients grossissent.'] },
      { heading: '1. Marge par produit', paragraphs: ['Regardez combien rapporte chaque produit après son coût. Les plus vendus ne sont pas toujours ceux qui contribuent le plus.'] },
      { heading: '2. Coût réel des ventes', paragraphs: ['Avec un inventaire à jour et un coût moyen, le coût des marchandises vendues cesse d’être une estimation.'] },
      { heading: '3. Ce qu’on vous doit', paragraphs: ['Une vente à crédit est un revenu dans le rapport, mais pas à la banque. Révisez vos comptes clients par ancienneté.'] },
      { heading: 'À faire cette semaine', paragraphs: [], list: ['Repérez vos cinq produits avec la meilleure marge.', 'Vérifiez si l’un d’eux se vend avec des rabais qui le rendent déficitaire.', 'Appelez les trois clients dont les comptes sont les plus anciens.'] },
    ],
  },
  {
    slug: 'antes-de-cerrar-caja',
    title: 'Avant de fermer la caisse',
    excerpt: 'Une courte liste pour que la fermeture balance et que les écarts aient une explication.',
    category: 'Opérations',
    date: '2026-09-08',
    readingMinutes: 3,
    body: [
      { paragraphs: ['La fermeture de caisse, c’est le moment où la journée devient des chiffres. Ces vérifications évitent la plupart des écarts.'] },
      { heading: 'Liste de fermeture', paragraphs: [], list: ['Comptez l’argent comptant par coupure.', 'Comparez les paiements par carte avec le rapport du terminal de paiement.', 'Vérifiez les virements et les paiements par QR reçus.', 'Enregistrez les dépenses payées à même la caisse avec leur pièce justificative.', 'Notez la raison de tout écart.'] },
      { heading: 'Quand quelque chose ne balance pas', paragraphs: ['Un petit écart qui se répète vient souvent de la monnaie rendue ou de paiements mixtes mal enregistrés. Un système qui sépare les modes de paiement dans chaque vente permet de trouver l’écart en quelques minutes.'] },
    ],
  },
  {
    slug: 'tu-negocio-en-internet',
    title: 'Votre entreprise en ligne sans engager une agence',
    excerpt: 'Site Web, boutique en ligne et réservations reliés à ce que vous avez déjà dans le système.',
    category: 'Canaux numériques',
    date: '2026-09-01',
    readingMinutes: 5,
    body: [
      { paragraphs: ['Beaucoup d’entreprises sont présentes sur les réseaux sociaux, mais n’ont pas d’espace à elles où leurs clients voient les produits, les prix et les horaires, et peuvent acheter ou réserver.'] },
      { heading: 'Ce qu’il faut à un site qui vend', paragraphs: [], list: ['Une information à jour : prix et disponibilité réels.', 'Une action claire : acheter, réserver ou écrire.', 'Une adresse facile à retenir.', 'Un chargement rapide sur cellulaire.'] },
      { heading: 'Relié ou périmé', paragraphs: ['Un site séparé de l’inventaire devient périmé en quelques semaines. Quand le site est alimenté par le même catalogue que le système, changer un prix à la caisse le change aussi en ligne.'] },
    ],
  },
  {
    slug: 'facturacion-electronica-que-necesitas',
    title: 'Facturation électronique : ce qu’il vous faut pour commencer',
    excerpt: 'Les éléments de base pour émettre votre première facture électronique en Colombie.',
    category: 'Guides',
    date: '2026-08-25',
    readingMinutes: 4,
    countries: ['COL'],
    body: [
      { paragraphs: ['Émettre des factures électroniques exige quelques démarches préalables auprès de la DIAN et un système qui génère et envoie les documents. Cette liste est indicative ; validez les exigences en vigueur avec votre comptable.'] },
      { heading: 'L’essentiel', paragraphs: [], list: ['RUT à jour avec la responsabilité correspondante.', 'Habilitation comme émetteur de factures électroniques.', 'Résolution de numérotation.', 'Certificat de signature numérique.'] },
      { heading: 'Au quotidien', paragraphs: ['L’important, c’est que la facture sorte du même endroit où vous vendez, avec les bonnes données du client et l’état de validation bien visible.'] },
    ],
  },
]
