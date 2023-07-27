import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const apportMineraux = {
  nameProduct: "Apport Minéraux",
  summary: {
    title: "Un apport de minéraux sans pareille",
    paragraph: [
      {
        id: "0apportMineraux",
        subTitle: "Apportez des minéraux à votre organisme",
        text: "Ce n’est pas moins de 32 minéraux, oligo-éléments, enzymes et super-aliments contenus dans ce produit révolutionnaire. Cette composition unique vous promet un soulagement efficace et une amélioration globale de votre bien-être."
      },
      {
        id: "1apportMineraux",
        subTitle: "Soulagez efficacement votre corps",
        text: [
          "Notre formule avancée agit en harmonie avec votre corps pour apaiser le système nerveux, vous procurant une sensation de calme et de bien-être. De plus, elle est spécialement conçue pour soulager les douleurs osseuses, musculaires et articulaires. Que ce soit en cas de douleurs chroniques ou de malaises occasionnels, notre produit offre un soulagement durable pour vous permettre de profiter pleinement de vos activités quotidiennes.",
          "L'inflammation est souvent à l'origine de diverses gênes et troubles. Notre formule avancée possède des propriétés anti-inflammatoires naturelles qui aident à réduire les inflammations dans votre corps. Cela contribue à diminuer les douleurs articulaires et les raideurs musculaires, vous offrant ainsi un confort optimal au quotidien.",
          "Notre formule avancée a démontré son efficacité pour améliorer la qualité de vie de personnes souffrant de pathologies telles que l'endométriose, la fibromyalgie et l'arthrose. Grâce à ses propriétés apaisantes et régénératrices, elle offre un soutien précieux pour atténuer les symptômes et améliorer la vie quotidienne de ceux qui en souffrent."
        ],
        picture450: "./img/jpg/product/ApportMinerauxIllusText450.jpg",
        picture675: "./img/jpg/product/ApportMinerauxIllusText675.jpg",
        picture900: "./img/jpg/product/ApportMinerauxIllusText900.jpg"
      },
      {
        id: "2apportMineraux",
        subTitle: "Régénérez vos tissus",
        text: "En plus de soulager les douleurs, notre formule avancée stimule la régénération des tissus endommagés. Elle contribue ainsi à accélérer le processus de guérison, vous permettant de récupérer plus rapidement après des blessures ou des tensions musculaires. Cela vous aide à maintenir une mobilité optimale et à retrouver votre vitalité."
      },
      {
        id: "3apportMineraux",
        subTitle: "Maintenez des ongles et des cheveux en bonne santé",
        text: "En prenant régulièrement notre formule avancée, vous bénéficiez d'un apport en nutriments essentiels qui soutiennent la santé de vos ongles et de vos cheveux. Des cheveux forts et des ongles sains sont des indicateurs d'une bonne santé globale, et notre produit vous aide à maintenir ces aspects essentiels de votre bien-être."
      },
      {
        id: "4apportMineraux",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5apportMineraux",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "amapportVitamines0",
        pictureLove: "./img/jpg/product/apportVitamines.jpg",
        textLove:
          "Dans le cas de nombreuses pathologies, ce concentré de minéraux est associé à notre produit vitaminé qui est un véritable allié pour vos os, vos muscles et vos nerfs grâce à ses propriétés anti-inflammatoires naturelles."
      },
      {
        id: "ammereDeTous1",
        pictureLove: "./img/jpg/product/mereDeTous.jpg",
        textLove:
          "Dans le cas de nombreuses pathologies, ce concentré de minéraux est associé à notre produit vitaminé qui est un véritable allié pour vos os, vos muscles et vos nerfs grâce à ses propriétés anti-inflammatoires naturelles."
      },
      {
        id: "amequilibreCorpsEsprit2",
        pictureLove: "./img/jpg/product/equilibreCorpsEsprit.jpg",
        textLove:
          "Une formule tout-en-un pour améliorer votre bien-être global. Grâce à ses propriétés, notre produit lutte efficacement contre la fatigue et agit en profondeur pour améliorer la qualité de votre sommeil, vous permettant de vous réveiller chaque matin frais et revitalisé. Notre formule est également votre alliée pour faire face au stress, à l'anxiété et au surmenage. Ses ingrédients naturels procurent un soulagement apaisant."
      },
      {
        id: "amregenerateurCellulaire3",
        pictureLove: "./img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Notre régénérateur cellulaire, une solution exceptionnelle pour améliorer la qualité de la peau, soulage également les allergies et l'asthme. Retrouvez une peau éclatante et une respiration apaisée grâce à notre produit bienfaisant."
      },
      {
        id: "amcollagene4",
        pictureLove: "./img/jpg/product/collagene.jpg",
        textLove:
          "Le collagène n’agit pas seulement sur la peau, il est avant tout un allié essentiel pour soutenir votre corps de manière globale. En fortifiant vos os, il vous offre une base solide pour une mobilité harmonieuse. De plus, il renforce vos dents pour une santé bucco-dentaire optimale, et préserve l'intégrité de vos ligaments et articulations pour une flexibilité durable. Notre collagène est un atout précieux pour une santé optimale et épanouissante."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "./img/jpg/product/apportMineraux.jpg",
  colors: {
    textColor: "#0246a4"
  },
  inSummary: [
    {
      id: "amis0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "AMiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "AMiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "AMiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "AMiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
