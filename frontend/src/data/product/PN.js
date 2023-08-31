import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const pn = {
  nameProduct: "PN",
  id: "pn",

  summary: {
    title: "Un substitut de repas complet",
    paragraph: [
      {
        id: "0PN",
        subTitle: "Augmentez vos performances sportives",
        text: "Que vous soyez un athlète chevronné, un adepte du fitness ou une personne dynamique, cette formule est l'ajout idéal à votre routine quotidienne. Elle a été spécifiquement conçue pour augmenter votre endurance, tout en accélérant le rétablissement de vos muscles après un effort physique. L'effet ? Vous pouvez vous adonner à des entraînements plus intensifs et plus fréquents, franchissant ainsi de nouvelles barrières de performances. Expérimentez la satisfaction de dépasser vos limites et d'atteindre de nouveaux sommets, avec le soutien de cette formule révolutionnaire."
      },
      {
        id: "1PN",
        subTitle: "Transformez votre silhouette naturellement",
        text: [
          "Si la maîtrise de votre poids fait partie de vos préoccupations, cette composition est là pour vous aider. Dotée d'une capacité unique à agir comme un puissant coupe-faim, elle aide à contrôler vos envies tout en réduisant l'apport calorique. En prime, elle stimule la combustion des graisses, vous permettant de remodeler votre silhouette de manière naturelle et efficace. Son autre atout ? Elle contient un sucre naturel à faible indice glycémique, fournissant une énergie constante sans les indésirables pics de glycémie. Imaginez atteindre et maintenir votre poids idéal avec moins d'efforts et une plus grande satisfaction.",
          "Dites adieu aux fringales salées qui sont omniprésentes ! Notre produit innovant est spécialement formulé pour réduire ces envies irrésistibles. En le choisissant, vous vous donnez toutes les chances de réussir votre gestion du poids de manière saine et durable.",
          "Cette formule ne se limite pas à améliorer votre bien-être physique. Elle a été conçue pour stimuler également votre bien-être émotionnel, vous offrant une énergie revitalisante qui rayonne de l'intérieur. Imaginez démarrer chaque journée avec un regain d'énergie, un esprit plus alerte et un sentiment de sérénité intérieure.",
          "Explorez tous les avantages extraordinaires de cette composition innovante et réveillez votre plein potentiel. Offrez à votre corps et à votre esprit le soutien dont ils ont besoin pour prospérer. Faites le choix de l'optimisation, optez pour cette formule spéciale."
        ],
        picture450: "/img/jpg/product/pnIllusText450.jpg",
        picture225: "/img/jpg/product/pnIllusText225.jpg",
        picture675: "/img/jpg/product/pnIllusText675.jpg",
        picture900: "/img/jpg/product/pnIllusText900.jpg"
      },
      {
        id: "2PN",
        subTitle: "Régénérez vos tissus",
        text: "L'élaboration de cette composition a été faite avec soin, dans le but précis de favoriser la régénération et la réparation des tissus. Que vous soyez en phase de convalescence ou simplement désireux de renforcer votre corps, elle peut vous accompagner dans cet objectif. De plus, elle soutient une digestion optimale en atténuant les irritations intestinales et en favorisant une digestion saine. Et ce n'est pas tout : elle contribue également à la santé cardiovasculaire, se traduisant par un bien-être général renforcé."
      },
      {
        id: "3PN",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4PN",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "PN0",
        link: "pb",
        pictureLove: "/img/jpg/product/PB.jpg",
        pictureLove264: "/img/jpg/product/PB264.jpg",
        pictureLove400: "/img/jpg/product/PB400.jpg",
        textLove:
          "Dans les journées chargées, le PB et le PN forment votre allié ultime. Le PB vous donne un boost d'énergie instantané, tandis que le PN offre une libération stable et durable. Ensemble, ils assurent vigilance et productivité, même sans repas complet. Découvrez-en plus sur cette alliance parfaite pour une journée pleine d'énergie et de vitalité."
      },
      {
        id: "PN1",
        link: "regenerateurCellulaire",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        pictureLove264: "/img/jpg/product/regenerateurCellulaire264.jpg",
        pictureLove400: "/img/jpg/product/regenerateurCellulaire400.jpg",
        textLove:
          "Notre produit stimule la régénération cellulaire, améliorant l'élasticité et la fermeté de la peau pour un teint éclatant et rajeuni. En plus de ces bienfaits pour la peau, il renforce votre santé globale en améliorant le système cardiovasculaire et immunitaire, favorisant la formation du collagène et la réparation osseuse. De plus, en boostant votre énergie naturelle, il soulage les problèmes de rétention d'eau, les jambes lourdes et les allergies, offrant un bien-être quotidien revitalisé."
      },
      {
        id: "PN2",
        link: "detox",
        pictureLove: "/img/jpg/product/detox.jpg",
        pictureLove264: "/img/jpg/product/detox264.jpg",
        pictureLove400: "/img/jpg/product/detox400.jpg",
        textLove:
          "Notre produit indispensable pour une cure minceur réussie. Il agit comme un puissant détoxifiant, éliminant les toxines pour favoriser la gestion du poids et améliorer la santé globale. En rééquilibrant le système digestif, il réduit les ballonnements et la cellulite, vous offrant ainsi une silhouette harmonieuse."
      },
      {
        id: "PN3",
        link: "goutteMinceur",
        pictureLove: "/img/jpg/product/goutteMinceur.jpg",
        pictureLove264: "/img/jpg/product/goutteMinceur264.jpg",
        pictureLove400: "/img/jpg/product/goutteMinceur400.jpg",
        textLove:
          "Nos gouttes super puissantes sont spécialement conçues pour vous aider à perdre du poids de manière efficace et durable. Grâce à notre formule unique, vous pourrez atteindre vos objectifs sans vous soucier des effets yoyo souvent associés aux régimes restrictifs."
      },
      {
        id: "PN4",
        link: "santeMax",
        pictureLove: "/img/jpg/product/santeMax.jpg",
        pictureLove264: "/img/jpg/product/santeMax264.jpg",
        pictureLove400: "/img/jpg/product/santeMax400.jpg",
        textLove:
          "Notre produit est conçu pour améliorer votre bien-être et renforcer votre santé globale. Il vous offre une énergie durable tout au long de la journée, vous permettant de rester dynamique et productif. En harmonie avec votre corps, il apaise les tensions, réduit le stress et favorise un état d'esprit positif. Transformez votre vie avec ce nectar fruité pour embrasser une santé éclatante et une vitalité incomparable."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [
    getSecondCategoryById("1Sante1TroublesDigestifsIntestinauxRespiratoires")
      .text
  ],
  picture: "/img/jpg/product/PN.jpg",
  picture264: "/img/jpg/product/PN264.jpg",
  picture400: "/img/jpg/product/PN400.jpg",
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
      id: "PNiSGP0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Aide à la perte de poids</li>
          <li>Est utilisé en substitut de repas complet</li>
        </ul>
      )
    },
    {
      id: "PNiSS2",
      title: "Santé",
      text: (
        <ul>
          <li>Soutient la pression artérielle</li>
          <li>
            A des effets positifs sur les reins, le foie et le système
            cardiovasculaire
          </li>
          <li>Offre une bonne santé intestinale en améliorant la digestion</li>
        </ul>
      )
    }
  ]
};
