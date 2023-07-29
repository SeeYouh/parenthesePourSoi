import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const gelDouche = {
  nameProduct: "Gel douche",
  summary: {
    title: "Une expérience de soin incomparable pour votre peau.",
    paragraph: [
      {
        id: "0gelDouche",
        subTitle: "Un Nettoyage Profond et Respectueux",
        text: "Doté d'une formule délicate, ce produit offre un nettoyage en profondeur sans compromettre l'intégrité de votre peau. Il élimine efficacement les impuretés, la saleté et les résidus chimiques indésirables qui peuvent s'accumuler au fil de la journée. Après chaque utilisation, votre peau retrouve toute sa fraîcheur et sa pureté, libérée de toute substance nocive. C'est un véritable soin de propreté qui respecte l'équilibre naturel de votre épiderme."
      },
      {
        id: "1gelDouche",
        subTitle: "Purification et Éclat pour une Beauté Naturelle",
        text: "En plus de son action nettoyante, cette formule agit comme un véritable purificateur. Elle élimine les toxines superficielles qui peuvent ternir l'éclat de votre teint et obstruer vos pores. Avec chaque utilisation, votre peau respire mieux, vous ressentez une sensation de propreté et de légèreté. Votre peau est naturellement belle, éclatante et pleine de vitalité.",
        picture450: "./img/jpg/product/gelDoucheIllusText450.jpg",
        picture675: "./img/jpg/product/gelDoucheIllusText675.jpg",
        picture900: "./img/jpg/product/gelDoucheIllusText900.jpg"
      },
      {
        id: "2gelDouche",
        subTitle: "Soulagement et Confort pour les Peaux Sensibles",
        text: "Grâce à sa composition douce et naturelle, ce soin est idéal pour les peaux sensibles et réactives. Il réduit les rougeurs, les démangeaisons et les irritations, apportant un soulagement bienvenu et un confort optimal à votre peau. Il respecte la sensibilité de votre peau tout en offrant un nettoyage efficace."
      },
      {
        id: "3gelDouche",
        subTitle: "Apaisement des Affections Cutanées",
        text: "Ce produit est également bénéfique pour ceux qui souffrent d'affections cutanées comme l'eczéma et le psoriasis. Grâce à ses propriétés apaisantes, il contribue à calmer ces conditions, offrant une solution de soin de la peau douce et efficace. Les personnes aux peaux sensibles et sujettes à ces affections cutanées seront ravies de constater les bienfaits de ce soin, qui apporte un apaisement notable à chaque utilisation."
      },
      {
        id: "4gelDouche",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5gelDouche",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "GDcocoOil0",
        pictureLove: "./img/jpg/product/cocoOil.jpg",
        textLove:
          "Le gel douche combiné à notre huile hydratante permet à votre peau de retrouver confort et hydratation."
      },
      {
        id: "GDregenerateurCellulaire1",
        pictureLove: "./img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Concernant les problèmes de peau, le gel douche s’associe très souvent à notre chouchou qui régénère les cellules. Ce combo est idéal pour les soucis cutanés."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
  picture: "./img/jpg/product/gelDouche.jpg",
  colors: {
    textColor: "#808080",
    titleColorInSummary: "#474747",
    bgColorInSummary: "#dcdcdc"
  },
  inSummary: [
    {
      id: "GDiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "GDiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "GDiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "GDiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "GDiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
