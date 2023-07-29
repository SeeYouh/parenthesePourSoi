import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const decontaminant = {
  nameProduct: "Le décontaminant",
  id: "decontaminant",

  summary: {
    title: "Une peau resplendissante de beauté",
    paragraph: [
      {
        id: "0Decontaminant",
        subTitle:
          "Révélation d'une peau radieuse : Un gommage délicat et efficace",
        text: "Offrez à votre peau un soin digne d'un spa avec notre produit innovant. Agissant comme une douce caresse, il exfolie délicatement pour éliminer les peaux mortes et les cellules ternes. Laissez-vous surprendre par la transformation de votre teint, qui passe de terne à frais et radieux. Au-delà de cette exfoliation, notre produit a été spécialement conçu pour resserrer et affiner les pores. Vous direz adieu aux pores dilatés et découvrirez une peau au grain plus lisse et uniforme. Découvrez une peau visiblement plus belle, équilibrée et lumineuse."
      },
      {
        id: "1Decontaminant",
        subTitle:
          "Combattez les imperfections : Un allié puissant pour une peau nette",
        text: "Notre décontaminant est votre arme secrète contre les points noirs. Grâce à une formule ciblée et précise, il désobstrue les pores, laissant votre peau nette et débarrassée des impuretés. Ses actifs puissants vont encore plus loin, aidant à réduire les imperfections cutanées, les tâches pigmentaires et le masque de grossesse. Vous n'êtes qu'à un pas d'un teint plus uniforme et éclatant. Mettez en valeur votre peau, radieuse et sublimée, et vivez l'expérience d'un teint sans défaut.",
        picture450: "./img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "./img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "./img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        id: "2Decontaminant",
        subTitle: "Soin délicat pour les yeux : Un regard reposé et revitalisé",
        text: "N'oublions pas le soin délicat que vos yeux méritent. Notre produit contient une formule douce spécialement conçue pour calmer et apaiser vos yeux fatigués. Ressentez le confort et l'apaisement à chaque utilisation et offrez-vous un regard reposé, éclatant de vitalité."
      },
      {
        id: "3Decontaminant",
        subTitle:
          "Sécurité et efficacité : Un produit testé pour votre tranquillité d'esprit",
        text: "Nous nous engageons à vous offrir un produit à la fois efficace et sécurisé. C'est pourquoi il a été rigoureusement testé sous contrôle dermatologique, garantissant une tolérance optimale pour tous les types de peau. Vous pouvez donc utiliser notre produit en toute sérénité, sachant qu'il a été conçu pour respecter votre peau."
      },
      {
        id: "4Decontaminant",
        subTitle: "Dévoilez une peau radieuse et épanouie",
        text: "N'attendez plus pour découvrir le secret d'une peau radieuse et épanouie. Avec notre produit, vous pouvez non seulement sublimer votre peau, mais également vivre une expérience de soin agréable et luxueuse. Donnez à votre peau le soin qu'elle mérite et savourez le plaisir de voir votre peau s'épanouir jour après jour."
      },
      {
        id: "5Decontaminant",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "6Decontaminant",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "Decontaminant0",
        pictureLove: "./img/jpg/product/PB.jpg",
        textLove:
          "Pour renforcer davantage votre bien-être centré sur le soin du visage, je vous suggère d'explorer notre gamme beauté exhaustive, notamment notre décontaminant. Cet élément de notre collection peut compléter parfaitement l'expérience d'hydratation que procure notre baume à lèvres."
      },
      {
        id: "Decontaminant1",
        pictureLove: "./img/jpg/product/mereDeTous.jpg",
        textLove:
          "Pour assurer une protection quotidienne optimale et nourrir votre peau avec délicatesse, notre Crème Day est un choix idéal. Sa formule enrichissante offre une hydratation constante, préservant votre peau des effets desséchants de l'environnement tout en agissant comme une barrière contre les agressions extérieures. Chaque application vous offre une peau éclatante de santé, revitalisée et intensément hydratée tout au long de la journée."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "./img/jpg/product/heRafraichissant.jpg",
  colors: {
    textColor: "#30d1d9",
    titleColorInSummary: "#003459",
    bgColorInSummary: "#68a6d0"
  },
  inSummary: [
    {
      id: "DeciS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "DeciS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "DeciS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "DeciS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "DeciS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
