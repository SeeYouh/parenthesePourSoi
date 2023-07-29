import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const apportVitamines = {
  nameProduct: "Apport Vitamines",
  id: "apportVitamines",

  summary: {
    title: "Un soutien essentiel pour rester en bonne santé",
    paragraph: [
      {
        id: "0apportVitamines",
        subTitle:
          "Renforcez votre système immunitaire pour une meilleure résistance",
        text: "Grâce à notre formule spéciale composée de 17 vitamines et nutriments, vous pouvez compter sur un renforcement significatif de votre système immunitaire. Les vitamines et les nutriments essentiels présents dans notre produit vous aident à mieux résister aux infections et aux agents pathogènes, tels que le rhume et la grippe. Prévenez ces maladies saisonnières et atténuez leurs symptômes grâce à un système immunitaire renforcé."
      },
      {
        id: "1apportVitamines",
        subTitle: "Maintenez-vous en bonne santé",
        text: [
          "Notre formule offre un soutien essentiel pour la santé de vos yeux. Elle contribue à protéger vos yeux des dommages liés à l'âge et à maintenir une vision claire et nette. Grâce à ses nutriments spécifiques, elle améliore également votre acuité visuelle, vous permettant de profiter pleinement de la beauté du monde qui vous entoure.",
          "Les nutriments contenus dans notre formule aident à maintenir la santé de vos vaisseaux sanguins. Ils réduisent l'inflammation et favorisent une circulation sanguine optimale, garantissant ainsi un approvisionnement adéquat en nutriments essentiels dans tout votre corps.",
          "En plus de prendre soin de votre peau, notre produit contribue également à renforcer votre cœur et vos poumons. Il favorise une meilleure fonction cardiaque et pulmonaire, vous permettant ainsi de bénéficier d'une santé cardiovasculaire optimale."
        ],
        picture450: "./img/jpg/product/apportVitaminesIllusText450.jpg",
        picture675: "./img/jpg/product/apportVitaminesIllusText675.jpg",
        picture900: "./img/jpg/product/apportVitaminesIllusText900.jpg"
      },
      {
        id: "2apportVitamines",
        subTitle: "Préservez votre peau",
        text: "Notre formule agit en profondeur pour préserver la santé de votre peau. Elle maintient son élasticité naturelle et lui redonne son éclat, vous offrant ainsi une peau radieuse et resplendissante."
      },
      {
        id: "3apportVitamines",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4apportVitamines",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "avapportMineraux0",
        pictureLove: "./img/jpg/product/apportMineraux.jpg",
        textLove:
          "Dans le cas de nombreuses pathologies, ce concentré de vitamines est associé à notre produit contenant des minéraux et des oligo-éléments qui est un véritable allié pour vos yeux, votre cœur, vos poumons et votre peau grâce à ses propriétés anti-inflammatoires naturelles."
      },
      {
        id: "avmereDeTous1",
        pictureLove: "./img/jpg/product/mereDeTous.jpg",
        textLove:
          "Un autre produit idéal pour soulager les douleurs. Il est composé d'ingrédients aux propriétés anti-inflammatoires naturelles pour une expérience apaisante. Il vous permet de trouver le confort et l'équilibre dont vous avez besoin au quotidien."
      },
      {
        id: "avboosterEnergie2",
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Une formule tout-en-un pour un bien-être amélioré. Ce booster d’énergie combat efficacement la fatigue et améliore la qualité de votre sommeil pour vous réveiller en pleine forme. C’est un allié pour soulager le stress, l'anxiété et le surmenage grâce à ses ingrédients naturels apaisants."
      },
      {
        id: "avregenerateurCellulaire3",
        pictureLove: "./img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Notre régénérateur cellulaire, une solution exceptionnelle pour améliorer la qualité de la peau, soulage également les allergies et l'asthme. Retrouvez une peau éclatante et une respiration apaisée grâce à notre produit bienfaisant."
      },
      {
        id: "avcollagene4",
        pictureLove: "./img/jpg/product/collagene.jpg",
        textLove:
          "Bien plus qu'un atout pour la peau, le collagène soutient votre corps de manière globale. Il fortifie vos os pour une mobilité harmonieuse, renforce vos dents pour une santé bucco-dentaire optimale et préserve l'intégrité de vos ligaments et articulations pour une flexibilité durable. Offrez à votre corps la vitalité qu'il mérite grâce à notre précieux collagène."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "./img/jpg/product/apportVitamines.jpg",
  colors: {
    textColor: "#13af56",
    titleColorInSummary: "#013a10",
    bgColorInSummary: "#9ee1af"
  },
  inSummary: [
    {
      id: "AViSGP0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "AViSPC1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "AViSS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "AViSB3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "AViSBE4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
