import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const goutteMinceur = {
  nameProduct: "Gouttes minceur",
  id: "goutteMinceur",

  summary: {
    title: "Laissez les éléments naturels agir en votre faveur",
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
        picture225: "/img/jpg/product/gouttesIllusText225.jpg",
        picture675: "/img/jpg/product/gouttesIllusText675.jpg",
        picture900: "/img/jpg/product/gouttesIllusText900.jpg",
        picturefb: "/img/jpg/product/gouttesIllusText1524.jpg"
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
        pictureLove264: "/img/jpg/product/detox264.jpg",
        pictureLove400: "/img/jpg/product/detox400.jpg",
        textLove:
          "Notre produit est une base essentielle pour une cure minceur réussie. Il agit comme un puissant agent de détoxification, éliminant les toxines pour une meilleure gestion du poids et une santé globale améliorée. En rééquilibrant votre système digestif, il diminue les ballonnements et la cellulite, vous offrant une silhouette harmonieuse."
      },
      {
        id: "goutteMinceur1",
        link: "boosterEnergie",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        pictureLove264: "/img/jpg/product/boosterEnergie264.jpg",
        pictureLove400: "/img/jpg/product/boosterEnergie400.jpg",
        textLove:
          "Notre booster d'énergie stimule votre énergie naturelle et combat efficacement la fatigue pour un sommeil réparateur. Il favorise la bonne humeur, réduit le stress, renforce le système immunitaire et cardiovasculaire, améliore la concentration mentale, réduit les signes de l'âge pour une peau éclatante...."
      },
      {
        id: "goutteMinceur2",
        link: "bienEtreInterieur",
        pictureLove: "/img/jpg/product/bienEtreInterieur.jpg",
        pictureLove264: "/img/jpg/product/bienEtreInterieur264.jpg",
        pictureLove400: "/img/jpg/product/bienEtreInterieur400.jpg",
        textLove:
          "Notre produit régule votre microbiote pour un bien-être global, améliorant la digestion, renforçant le système immunitaire et prévenant les maladies chroniques. Avec ses propriétés antioxydantes, il neutralise les toxines et améliore la flore intestinale. Il joue un rôle essentiel dans la gestion du poids en contrôlant la satiété et en boostant l'énergie. De plus, il réduit le stress, améliore le sommeil et favorise une humeur positive."
      },
      {
        id: "goutteMinceur3",
        link: "gg",
        pictureLove: "/img/jpg/product/GG.jpg",
        pictureLove264: "/img/jpg/product/GG264.jpg",
        pictureLove400: "/img/jpg/product/GG400.jpg",
        textLove:
          "Notre élixir végétal est un trésor de bienfaits pour votre santé globale. Il favorise un cœur en bonne santé, des os solides et un cerveau vif. En intégrant notre potion magique à base de légumes soigneusement sélectionnés, vous bénéficierez d'une vitalité éclatante et d'une harmonie intérieure incomparable. Libérez-vous des soucis de carences en vitamines et minéraux grâce à notre source naturelle d'énergie et de nutriments essentiels."
      },
      {
        id: "goutteMinceur4",
        link: "regenerateurCellulaire",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        pictureLove264: "/img/jpg/product/regenerateurCellulaire264.jpg",
        pictureLove400: "/img/jpg/product/regenerateurCellulaire400.jpg",
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
  picture264: "/img/jpg/product/goutteMinceur264.jpg",
  picture400: "/img/jpg/product/goutteMinceur400.jpg",
  colors: {
    textColor: "#e58000",
    titleColorInSummary: "#e58000",
    linkTextColor: "#e58000",
    bgColorInSummary0: "#eda64d",
    bgColorInSummary1: "#fcf0e0",
    linearGradient0: "linear-gradient(105deg, #eda64d, #fffcfb)",
    linearGradient1: "linear-gradient(to right, #f2c080, #fcf0e0)",
    shadowColor: "#fcf0e0"
  },
  inSummary: [
    {
      id: "GMiGP0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Régulent l’appétit en donnant un effet de satiété</li>
          <li>Diminuent les grignotages</li>
          <li>Brûlent les graisses viscérales et sous cutanées</li>
          <li>Évitent le stockage de nouvelles graisses durant la nuit</li>
        </ul>
      )
    },
    {
      id: "GMiS1",
      title: "Santé",
      text: (
        <ul>
          <li>Ralentissent l’absorption des glucides</li>
          <li>Brûlent les excès de sucre pour éviter les pics glycémiques</li>
          <li>Facilitent la digestion</li>
        </ul>
      )
    },
    {
      id: "GMiB2",
      title: "Bien-être ",
      text: (
        <ul>
          <li>Augmentent la bonne humeur</li>
          <li>Stimulent le métabolisme en boostant l’énergie naturelle</li>
          <li>Relaxent le corps en diminuant stress</li>
          <li>Améliorent la qualité du sommeil de meilleure qualité</li>
        </ul>
      )
    },
    {
      id: "GMiBE3",
      title: "Beauté",
      text: (
        <ul>
          <li>Agissent sur la cellulite</li>
        </ul>
      )
    }
  ]
};
