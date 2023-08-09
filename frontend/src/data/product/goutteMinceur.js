import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const goutteMinceur = {
  nameProduct: "Gouttes minceur",
  id: "goutteMinceur",

  summary: {
    title: "Laissez les éléments naturels agir en votre faveur.",
    paragraph: [
      {
        id: "0goutteMinceur",
        subTitle: "Prenez les choses en main",
        text: "Avec ses deux fioles uniques sous forme de gouttes, ce produit offre un avantage de pointe dans votre cure minceur."
      },
      {
        id: "1goutteMinceur",
        subTitle: "Gérez plus efficacement votre cure minceur",
        text: [
          "Les gouttes jour sont votre allié parfait pour une gestion efficace du poids. Elles sont conçues pour offrir une solution complète en régulant votre appétit et en vous procurant un effet de satiété durable. Finies les fringales incontrôlées qui peuvent compromettre vos efforts ! En contrôlant vos portions alimentaires, vous pourrez dire adieu aux grignotages compulsifs et maintenir une alimentation équilibrée. Mais ce n'est pas tout ! Notre formule puissante agit spécifiquement sur les graisses sous-cutanées et viscérales, celles qui sont notoirement difficiles à éliminer, même avec un exercice physique intense. Vous constaterez rapidement que notre produit cible efficacement ces graisses tenaces, les brûlant de manière ciblée pour vous aider à atteindre vos objectifs de perte de poids de manière efficace.",
          "Les gouttes nuit agissent spécifiquement pendant votre sommeil pour prévenir l'accumulation de nouvelles graisses. L'un des principaux avantages des gouttes nuit réside dans leur capacité à diminuer le cortisol, l'hormone du stress. Le cortisol élevé peut être un facteur qui contribue à la prise de poids, car il peut favoriser le stockage des graisses, en particulier autour de la zone abdominale. En réduisant le cortisol, notre produit vous offre un soulagement naturel et une relaxation profonde, tant pour votre corps que pour votre esprit."
        ],
        picture450: "/img/jpg/product/gouttesIllusText450.jpg",
        picture675: "/img/jpg/product/gouttesIllusText675.jpg",
        picture900: "/img/jpg/product/gouttesIllusText900.jpg"
      },
      {
        id: "2goutteMinceur",
        subTitle: "Régulez votre glycémie et boostez votre énergie",
        text: "Au-delà de la simple gestion du poids, notre produit améliore également votre bien-être général. Il agit en tant que régulateur de sucre, vous aidant à réduire l'excès de sucre dans votre corps et à maintenir un niveau de sucre sanguin stable. De plus, il stimule le métabolisme et vous offre un regain d'énergie essentiel pour brûler les calories efficacement, sans ressentir de fatigue physique."
      },
      {
        id: "3goutteMinceur",
        subTitle: "Améliorez votre humeur et votre peau",
        text: "Vous remarquerez une amélioration de votre humeur, vous permettant d'aborder chaque journée avec une énergie positive et une motivation accrue. De plus, notre formule contribue à améliorer la cellulite, en aidant à réduire son apparence et à améliorer la texture de la peau."
      },
      {
        id: "4goutteMinceur",
        subTitle: "Prenez le Contrôle de Votre Corps Jour et Nuit",
        text: "Avec nos gouttes uniques, prenez le contrôle de votre corps jour et nuit. Profitez d'une gestion du poids efficace, d'un regain d'énergie, d'une amélioration de l'humeur et de la peau, et d'une récupération optimale pendant la nuit."
      },
      {
        id: "5goutteMinceur",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "6goutteMinceur",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "goutteMinceur0",
        link: "detox",
        pictureLove: "/img/jpg/product/detox.jpg",
        textLove:
          "Notre produit est une base essentielle pour une cure minceur réussie. Il agit comme un puissant agent de détoxification, éliminant les toxines pour une meilleure gestion du poids et une santé globale améliorée. En rééquilibrant votre système digestif, il diminue les ballonnements et la cellulite, vous offrant une silhouette harmonieuse."
      },
      {
        id: "goutteMinceur1",
        link: "boosterEnergie",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Notre booster d'énergie stimule votre énergie naturelle et combat efficacement la fatigue pour un sommeil réparateur. Il favorise la bonne humeur, réduit le stress, renforce le système immunitaire et cardiovasculaire, améliore la concentration mentale, réduit les signes de l'âge pour une peau éclatante...."
      },
      {
        id: "goutteMinceur2",
        link: "bienEtreInterieur",
        pictureLove: "/img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Notre produit régule votre microbiote pour un bien-être global, améliorant la digestion, renforçant le système immunitaire et prévenant les maladies chroniques. Avec ses propriétés antioxydantes, il neutralise les toxines et améliore la flore intestinale. Il joue un rôle essentiel dans la gestion du poids en contrôlant la satiété et en boostant l'énergie. De plus, il réduit le stress, améliore le sommeil et favorise une humeur positive."
      },
      {
        id: "goutteMinceur3",
        link: "gg",
        pictureLove: "/img/jpg/product/GG.jpg",
        textLove:
          "Notre élixir végétal est un trésor de bienfaits pour votre santé globale. Il favorise un cœur en bonne santé, des os solides et un cerveau vif. En intégrant notre potion magique à base de légumes soigneusement sélectionnés, vous bénéficierez d'une vitalité éclatante et d'une harmonie intérieure incomparable. Libérez-vous des soucis de carences en vitamines et minéraux grâce à notre source naturelle d'énergie et de nutriments essentiels."
      },
      {
        id: "goutteMinceur4",
        link: "regenerateurCellulaire",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Notre produit favorise la régénération cellulaire, améliorant l'élasticité et la fermeté pour un teint éclatant et plus jeune. En plus de ses bienfaits pour la peau, il soutient votre santé globale en renforçant le système cardiovasculaire et immunitaire, favorisant la formation du collagène et aidant à la réparation osseuse. En stimulant votre énergie naturelle, il vous offre vitalité, soulage les problèmes de rétention d'eau, de jambes lourdes et d'allergies, apportant un bien-être quotidien renouvelé."
      }
    ]
  },
  firstCategory: [getCategoryById("0GestionDuPoids").name],
  secondCategory: [
    getSecondCategoryById("0GestionDuPoids1AidePertePoids").text
  ],
  picture: "/img/jpg/product/goutteMinceur.jpg",
  colors: {
    textColor: "#e58000",
    titleColorInSummary: "#4f2000",
    bgColorInSummary: "#fde1b5"
  },
  inSummary: [
    {
      id: "GMiGP0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "GMiPC1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "GMiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "GMiB3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "GMiBE4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
