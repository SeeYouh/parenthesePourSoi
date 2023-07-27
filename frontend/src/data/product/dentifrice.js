import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const dentifrice = {
  nameProduct: "Dentifrice",
  summary: {
    title: "Une expérience de soin bucco-dentaire exceptionnelle.",
    paragraph: [
      {
        subTitle: "Ingrédients naturels",
        text: "Notre dentifrice est formulé à partir d'ingrédients naturels de haute qualité. Vous n'y trouverez aucun produit chimique agressif. Il offre un blanchiment naturel en éliminant les tâches en douceur et vous aide à obtenir des dents plus éclatantes qui illumine votre sourire. "
      },
      {
        subTitle: "Gencives saines",
        text: "Il est enrichi en extraits de plantes sélectionnés pour leurs propriétés apaisantes et antibactériennes. Ces ingrédients naturels travaillent en synergie pour aider à maintenir vos gencives en bonne santé et revitalisées. Ils combattent les bactéries qui peuvent causer des problèmes de gencives et apaisent les inflammations, favorisant ainsi une bouche saine et un sourire éclatant. Que vous cherchiez à prévenir les problèmes de gencives ou à soutenir une santé buccale déjà optimale, notre produit offre une solution naturelle et efficace.",
        picture675: "./img/jpg/product/dentifriceIllusText675.jpg",
        picture450: "./img/jpg/product/dentifriceIllusText450.jpg",
        picture900: "./img/jpg/product/dentifriceIllusText900.jpg"
      },
      {
        subTitle: "Fraîcheur durable",
        text: "Avec l'huile essentielle de menthe poivrée, notre produit laisse une agréable sensation de fraîcheur dans votre bouche. Dites adieu à la mauvaise haleine et profitez d'une bouffée de fraîcheur durable après chaque brossage."
      },
      {
        subTitle: "Sans produits nocifs",
        text: "Notre dentifrice est sans fluorure pour ceux qui préfèrent éviter cet élément, sans triclosan qui peut être nocif, sans paraben pour une tranquillité d'esprit, sans édulcorants artificiels pour une saveur pure, et sans colorants pour une expérience naturelle authentique."
      },
      {
        subTitle: "Sourire naturel",
        text: "Découvrez une nouvelle façon de prendre soin de votre sourire, naturellement."
      },
      {
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "deDetox0",
        pictureLove: "./img/jpg/product/detox.jpg",
        textLove:
          "La détox’ étant la base de toute cure minceur, nos gouttes super puissantes devraient également vous intéresser pour perdre du poids sans effet yoyo."
      },
      {
        id: "deBienEtreInterieux1",
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Si votre système digestif et intestinal sont déséquilibrés, les pré-probiotiques devraient réguler tout ceci."
      },
      {
        id: "deGG2",
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Une autre approche consiste à rétablir l'équilibre de votre système digestif et intestinal en fournissant des légumes et des vitamines essentiels par le biais d'une détoxification végétale."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
  picture: "./img/jpg/product/dentifrice.jpg",
  colors: {
    textColor: "#929f95"
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
