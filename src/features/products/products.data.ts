import type { Product } from "./products.types";

export const products: Product[] = [
  {
    slug: "tickets",
    index: "01",
    name: "FEETI TICKETS",
    eyebrow: "Billetterie digitalisée & tracking",
    title: "Vendez en ligne. Éliminez la fraude.",
    description:
      "La billetterie tout-en-un pensée pour le marché africain : billets digitaux, encaissements Mobile Money et carte bancaire, suivi en temps réel et QR codes sécurisés.",
    accent: "#16bda0",
    soft: "#f2fad5",
    image:
      "https://images.unsplash.com/photo-1662383729882-e03ce8e00887?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Participant présentant son billet numérique sur un smartphone",
    stat: "Jusqu’à +35% de chiffre d’affaires récupéré",
    outcome:
      "100% des ventes traçables, aucun billet dupliqué et vos recettes protégées dès la première minute.",
    features: [
      {
        title: "Zéro fraude",
        description:
          "Chaque billet possède un QR code dynamique, unique et sécurisé qui rend toute duplication impossible à l’entrée.",
      },
      {
        title: "Trésorerie en direct",
        description:
          "Suivez vos ventes à la seconde, analysez vos acheteurs et demandez vos reversements depuis votre smartphone.",
      },
      {
        title: "Achat sans friction",
        description:
          "Vos participants paient en trois clics par Mobile Money ou carte et reçoivent leur billet par e-mail ou SMS.",
      },
    ],
    steps: [
      {
        title: "Inscrivez-vous",
        description: "Créez gratuitement votre compte organisateur en seulement deux minutes.",
      },
      {
        title: "Configurez l’événement",
        description: "Ajoutez votre visuel, les dates et vos tarifs en moins de cinq minutes.",
      },
      {
        title: "Ouvrez les ventes",
        description: "Après validation sous 24 h, publiez votre page et encaissez immédiatement.",
      },
    ],
    quote:
      "Nous avons arrêté d’imprimer des carnets coûteux et suivons désormais le remplissage en direct depuis notre téléphone.",
    quoteAttribution: "Organisateur partenaire · Féeti Tickets",
    cta: "Passez au guichet fermé dès votre prochain événement",
  },
  {
    slug: "play",
    index: "02",
    name: "FEETI PLAY",
    eyebrow: "Streaming live & replay PPV",
    title: "Votre scène, sans aucune frontière.",
    description:
      "Diffusez vos spectacles en direct HD, vendez des accès Pay-Per-View à la diaspora et continuez à générer des revenus grâce au replay.",
    accent: "#ff6f4a",
    soft: "#ffe3da",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Foule devant une scène de concert illuminée",
    stat: "+30 à +50% de revenus complémentaires",
    outcome:
      "Chaque siège vide devient un billet virtuel à vendre, en direct comme en replay, partout dans le monde.",
    features: [
      {
        title: "Billetterie illimitée",
        description:
          "Vendez des accès streaming à la diaspora et dépassez définitivement la jauge physique de votre salle.",
      },
      {
        title: "Flux HD sécurisé",
        description:
          "Chaque spectateur reçoit un accès unique à un lecteur protégé, conçu pour empêcher le partage et le piratage.",
      },
      {
        title: "Revenus après le live",
        description:
          "Transformez votre direct en catalogue VOD et monétisez votre spectacle bien après le jour J.",
      },
    ],
    steps: [
      {
        title: "Activez le streaming",
        description: "Ajoutez l’option Féeti Play directement à votre événement Féeti Tickets.",
      },
      {
        title: "Testez votre flux",
        description: "Recevez vos accès encodeur OBS ou Streamlabs et réalisez un test accompagné.",
      },
      {
        title: "Diffusez et encaissez",
        description:
          "Lancez le direct HD pendant que la vente des accès est gérée automatiquement.",
      },
    ],
    quote:
      "Nos fans à Paris, Montréal et Douala ont suivi le concert en direct HD comme s’ils étaient au premier rang.",
    quoteAttribution: "Producteur de spectacle · Féeti Play",
    cta: "Transformez votre prochain événement en show mondial",
  },
  {
    slug: "acces",
    index: "03",
    name: "FEETI ACCES",
    eyebrow: "Contrôle d’accès & badges",
    title: "Un scan. Une seconde. Zéro bouchon.",
    description:
      "Sécurisez billets et badges depuis un simple smartphone, même hors connexion, et pilotez jusqu’à dix zones d’accès en temps réel.",
    accent: "#70d9ff",
    soft: "#dff6ff",
    image:
      "https://images.unsplash.com/photo-1569908420024-c8f709b75700?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Contrôle d’un accès à l’aide d’un smartphone",
    stat: "1 billet contrôlé par seconde",
    outcome:
      "100% des entrées horodatées, aucune réutilisation frauduleuse et des flux maîtrisés à chaque porte.",
    features: [
      {
        title: "Accès instantané",
        description:
          "Validez billets et badges en moins d’une seconde avec l’application mobile Féeti Scan.",
      },
      {
        title: "Mode hors connexion",
        description:
          "Continuez à scanner sans réseau : toutes les données se synchronisent automatiquement au retour d’Internet.",
      },
      {
        title: "Sécurité multi-zones",
        description:
          "Configurez jusqu’à dix zones VIP, Presse, Staff ou Artistes et envoyez les badges sécurisés par e-mail ou SMS.",
      },
    ],
    steps: [
      {
        title: "Configurez vos zones",
        description:
          "Définissez les catégories et les droits d’accès depuis votre tableau de bord.",
      },
      {
        title: "Équipez les contrôleurs",
        description: "Générez leurs accès sécurisés et installez Féeti Scan sur leurs smartphones.",
      },
      {
        title: "Contrôlez les portes",
        description:
          "Scannez en ligne ou hors connexion et suivez les jauges de chaque zone en direct.",
      },
    ],
    quote:
      "Nous avons fait entrer plus de 2 000 personnes en une heure sans le moindre ralentissement.",
    quoteAttribution: "Responsable des accès · Féeti Accès",
    cta: "Blindez le contrôle d’accès de votre prochain événement",
  },
  {
    slug: "na-feeti",
    index: "04",
    name: "FEETI NA FEETI",
    eyebrow: "Packs Boost & visibilité",
    title: "Passez en tête d’affiche.",
    description:
      "FEETI NA FEETI combine les emplacements premium de la plateforme et nos canaux directs pour rendre votre événement incontournable.",
    accent: "#b89cff",
    soft: "#ece4ff",
    image:
      "https://images.unsplash.com/photo-1655720357872-ce227e4164ba?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Équipe créative africaine préparant une campagne de promotion",
    stat: "Jusqu’à 100 000 spectateurs qualifiés",
    outcome:
      "Une visibilité immédiate là où le public choisit ses sorties, avec jusqu’à +40% de ventes de billets.",
    features: [
      {
        title: "Emplacement n°1",
        description:
          "Installez votre affiche dans le Hero ou les carrousels premium de Féeti pour devenir impossible à manquer.",
      },
      {
        title: "Diffusion à 360°",
        description:
          "Touchez les passionnés par notifications push, SMS, newsletter et relais dédiés sur les réseaux sociaux.",
      },
      {
        title: "Budget flexible",
        description:
          "Réglez votre pack immédiatement ou déduisez son montant directement de vos recettes de billetterie.",
      },
    ],
    steps: [
      {
        title: "Choisissez votre pack",
        description: "Sélectionnez LITE, BRONZE, ARGENT ou OR depuis votre espace organisateur.",
      },
      {
        title: "Sélectionnez le paiement",
        description: "Payez par Mobile Money ou choisissez une déduction directe sur vos ventes.",
      },
      {
        title: "Passez à la une",
        description: "Après validation de vos visuels sous 48 h, votre campagne est mise en ligne.",
      },
    ],
    quote:
      "Avec le Pack OR, nous avons vendu les 300 dernières places de notre spectacle en seulement quatre jours.",
    quoteAttribution: "Promoteur de spectacle · FEETI NA FEETI",
    cta: "Boostez votre événement dès aujourd’hui",
  },
];
