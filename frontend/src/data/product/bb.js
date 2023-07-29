import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const bb = {
  nameProduct: "BB",  id: "bb",

  summary: {
    title: "Le secret d’un éclat intérieur et extérieur.",
    paragraph: [
      {
        id: "0BB",
        subTitle: "Régénération cellulaire",
        text: "Notre produit a une capacité exceptionnelle à régénérer les cellules. Sa formule accélère la pousse des ongles et des cheveux, vous permettant ainsi de profiter d'une chevelure plus abondante et d'ongles forts et sains. En augmentant la production de kératine, notre produit revitalise en profondeur vos cheveux, les rendant plus résistants à la casse et leur redonnant brillance et vitalité. De plus, il réduit considérablement la chute des cheveux, vous offrant ainsi une chevelure dense et volumineuse qui fera des envieux."
      },
      {
        id: "1BB",
        subTitle: "Boost d'énergie",
        text: "Notre BB booste votre énergie naturelle. Il agit comme un véritable stimulant, vous offrant une énergie durable tout au long de la journée. De plus, il augmente les fonctions mentales, vous aidant à rester concentré(e) et alerte, même dans les moments les plus intenses. Vous vous sentirez prêt(e) à relever tous les défis qui se présentent à vous.",
        picture675: "./img/jpg/product/BBIllusText675.jpg",
        picture450: "./img/jpg/product/BBIllusText450.jpg",
        picture900: "./img/jpg/product/BBIllusText900.jpg"
      },
      {
        id: "2BB",
        subTitle: "Soin cutané",
        text: "Grâce à son pouvoir régénérateur cellulaire exceptionnel, notre produit réduit efficacement les problèmes cutanés : rougeurs, démangeaisons et psoriasis qui perturbent votre vie quotidienne. Il vous permet de retrouver une peau saine et apaisée. De plus, il diminue l'acné et régule l'excès de sébum, offrant une solution naturelle pour les peaux grasses. Notre formule restreint également les pellicules, vous offrant un cuir chevelu sain et sans démangeaisons."
      },
      {
        id: "3BB",
        subTitle: "Bien-être global",
        text: "Que vous souhaitiez améliorer votre santé globale ou simplement dynamiser votre routine beauté, ce puissant complément vous procurera une sensation de renouveau et de vitalité."
      },
      {
        id: "4BB",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5BB",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "BB0",
        pictureLove: "./img/jpg/product/PB.jpg",
        textLove: "Le BB peut s’associer avec notre produit d’énergie cacaotée."
      },
      {
        id: "BB1",
        pictureLove: "./img/jpg/product/PN.jpg",
        textLove:
          "Notre PN pour le saut de repas pour faire de délicieux smoothies."
      },
      {
        id: "BB2",
        pictureLove: "./img/jpg/product/shampooing.jpg",
        textLove:
          "Pour des cheveux brillants, le BB se combine parfaitement bien avec notre shampooing d’exception."
      },
      {
        id: "BB3",
        pictureLove: "./img/jpg/product/aprèsShampooing.jpg",
        textLove:
          "Pour des cheveux éclatants, notre BB s'associe merveilleusement bien avec notre après-shampooing nourissant."
      },
      {
        id: "BB4",
        pictureLove: "./img/jpg/product/collagene.jpg",
        textLove:
          "Pour un renfort optimal des cheveux et des ongles, le collagène marin est ultra efficace. Il permet de réparer en profondeur."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
  picture: "./img/jpg/product/bb.jpg",
  colors: {
    textColor: "#e58000",
    titleColorInSummary: "#5c3300",
    bgColorInSummary: "#eec38d"
  },
  inSummary: [
    {
      id: "BBiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "BBiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "BBiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "BBiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "BBiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
