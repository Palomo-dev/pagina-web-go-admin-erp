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

export const CHANGELOG: typeof Es.CHANGELOG = [
  {
    month: '2026-09',
    items: [
      { title: 'GO Assistant', text: 'Un assistant intégré à GO Admin qui répond à vos questions sur votre entreprise et vous amène à l’écran dont vous avez besoin.', area: 'IA', icon: 'bot' },
      { title: 'Écran client au PDV', text: 'Votre client voit sur un deuxième écran ce que vous encaissez, le total et la monnaie à rendre.', area: 'Ventes et PDV', icon: 'cart' },
      { title: 'PDV de bureau hors ligne', text: 'L’application de bureau continue de vendre si Internet tombe et se synchronise au retour de la connexion.', area: 'Ventes et PDV', icon: 'zap' },
      { title: 'Numéros de série et fermeture de caisse à l’aveugle', text: 'Suivez vos produits par numéro de série. À la fermeture, le caissier compte l’argent comptant sans voir le montant attendu.', area: 'Inventaire', icon: 'boxes' },
      { title: 'Tableaux de bord par rôle', text: 'Chaque personne arrive sur un accueil avec les indicateurs de son travail : caisse, ventes, inventaire ou administration.', area: 'Rapports', icon: 'chart' },
      { title: 'Appels depuis GO Admin', text: 'Faites et recevez des appels depuis le navigateur et gardez-en la trace dans la fiche du client.', area: 'Clients (CRM)', icon: 'message' },
      { title: 'Succursales séparées dans tous les modules', text: 'Chaque succursale voit son propre inventaire, ses ventes et sa caisse. L’administration voit le consolidé.', area: 'Organisation', icon: 'building' },
      { title: 'Plusieurs points de vente et un domaine par succursale', text: 'Ouvrez plus d’un point de vente par succursale et achetez un nom de domaine propre pour la page de chacune.', area: 'Canaux numériques', icon: 'globe' },
      { title: 'Tableau de bord en quatre langues', text: 'GO Admin est offert en espagnol, en anglais, en portugais et en français.', area: 'Plateforme', icon: 'globe' },
    ],
  },
  {
    month: '2026-08',
    items: [
      { title: 'Paiements internationaux', text: 'Vos clients paient depuis d’autres pays dans votre boutique et dans le moteur de réservation.', area: 'Canaux numériques', icon: 'credit-card' },
      { title: 'Catalogue pour Facebook et Instagram', text: 'Publiez vos produits dans le catalogue de Meta avec des prix en plusieurs devises.', area: 'Canaux numériques', icon: 'store' },
      { title: 'Éditeur de site Web', text: 'Montez la page publique de votre entreprise avec des blocs et publiez-la sur votre domaine.', area: 'Canaux numériques', icon: 'layout' },
      { title: 'Notifications poussées', text: 'Recevez des avis de ventes, de commandes et de réservations sur votre cellulaire, même si GO Admin n’est pas ouvert.', area: 'Plateforme', icon: 'bell' },
      { title: 'Commandes Web payées confirmées automatiquement', text: 'Quand le paiement en ligne est approuvé, la commande passe en préparation sans que vous ayez à la confirmer.', area: 'Boutique en ligne', icon: 'truck' },
      { title: 'Paiements avec Bold et codes QR', text: 'Encaissez avec le terminal Bold et avec les codes QR de Bancolombia, Bre-B et Redeban depuis le PDV.', area: 'Paiements', icon: 'qr', countries: ['COL'] },
      { title: 'Connexion avec vos banques', text: 'Synchronisez vos mouvements bancaires et faites vos rapprochements avec l’aide de l’IA.', area: 'Finances', icon: 'landmark', countries: ['COL'] },
      { title: 'Application mobile avec impression Bluetooth', text: 'Vendez depuis votre cellulaire et imprimez sur des imprimantes thermiques par Bluetooth.', area: 'Ventes et PDV', icon: 'cart' },
      { title: 'Consultation des données auprès de {theAuthority}', text: 'En créant un client, récupérez son nom et ses données fiscales à partir du {taxId}.', area: '{invoicing}', icon: 'search', countries: ['COL'] },
      { title: 'Rapports avec IA et fermetures en PDF', text: 'Demandez un rapport dans vos mots et téléchargez les fermetures de caisse en PDF.', area: 'Rapports', icon: 'sparkles' },
      { title: 'Folios en hôtellerie et tiroir-caisse', text: 'Frais regroupés par client à l’hôtel et ouverture automatique du tiroir à l’encaissement.', area: 'Hôtellerie', icon: 'bed' },
    ],
  },
  {
    month: '2026-07',
    items: [
      { title: 'Facturation électronique auprès de {theAuthority}', text: 'Émettez des factures électroniques validées depuis le PDV et depuis les ventes.', area: '{invoicing}', icon: 'receipt', countries: ['COL'] },
      { title: 'Bons de commande en cuisine', text: 'Envoyez les commandes en cuisine, imprimées ou à l’écran, avec des notes par produit.', area: 'Restaurants', icon: 'utensils' },
      { title: 'Impression depuis le bureau', text: 'Un agent d’impression détecte vos imprimantes et réessaie sur une autre si l’une d’elles échoue.', area: 'Ventes et PDV', icon: 'file-text' },
      { title: 'Recettes et production', text: 'Définissez des recettes, enregistrez la production et déduisez les intrants de l’inventaire.', area: 'Inventaire', icon: 'package' },
      { title: 'Stock par succursale et variantes', text: 'Suivez les stocks par succursale, et aussi par taille, couleur ou autre variante.', area: 'Inventaire', icon: 'boxes' },
      { title: 'Livraisons et bordereaux', text: 'Assignez des livreurs, imprimez des bordereaux et conservez des photos comme preuve de livraison.', area: 'Transport', icon: 'truck' },
      { title: 'Mode clair et sombre', text: 'Tout GO Admin s’adapte au thème de votre appareil et s’affiche bien sur le cellulaire.', area: 'Plateforme', icon: 'palette' },
    ],
  },
]
