import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const bb = {
  nameProduct: "BB",
  summary: {
    title: "Le secret d’un éclat intérieur et extérieur.",
    paragraph: [
      {
        subTitle: "Régénération cellulaire",
        text: "Notre produit a une capacité exceptionnelle à régénérer les cellules. Sa formule accélère la pousse des ongles et des cheveux, vous permettant ainsi de profiter d'une chevelure plus abondante et d'ongles forts et sains. En augmentant la production de kératine, notre produit revitalise en profondeur vos cheveux, les rendant plus résistants à la casse et leur redonnant brillance et vitalité. De plus, il réduit considérablement la chute des cheveux, vous offrant ainsi une chevelure dense et volumineuse qui fera des envieux."
      },
      {
        subTitle: "Boost d'énergie",
        text: "Notre BB booste votre énergie naturelle. Il agit comme un véritable stimulant, vous offrant une énergie durable tout au long de la journée. De plus, il augmente les fonctions mentales, vous aidant à rester concentré(e) et alerte, même dans les moments les plus intenses. Vous vous sentirez prêt(e) à relever tous les défis qui se présentent à vous.",
        picture675: "./img/jpg/product/BBIllusText675.jpg",
        picture450: "./img/jpg/product/BBIllusText450.jpg",
        picture900: "./img/jpg/product/BBIllusText900.jpg"
      },
      {
        subTitle: "Soin cutané",
        text: "Grâce à son pouvoir régénérateur cellulaire exceptionnel, notre produit réduit efficacement les problèmes cutanés : rougeurs, démangeaisons et psoriasis qui perturbent votre vie quotidienne. Il vous permet de retrouver une peau saine et apaisée. De plus, il diminue l'acné et régule l'excès de sébum, offrant une solution naturelle pour les peaux grasses. Notre formule restreint également les pellicules, vous offrant un cuir chevelu sain et sans démangeaisons."
      },
      {
        subTitle: "Soin cutané",
        text: "Grâce à son pouvoir régénérateur cellulaire exceptionnel, notre produit réduit efficacement les problèmes cutanés : rougeurs, démangeaisons et psoriasis qui perturbent votre vie quotidienne, vous permettant ainsi de retrouver une peau saine et apaisée. De plus, il diminue l'acné et régule l'excès de sébum, offrant une solution naturelle pour les peaux grasses. Notre formule restreint également les pellicules, vous offrant un cuir chevelu sain et sans démangeaisons. Enfin, notre produit contribue à améliorer le bon fonctionnement du système nerveux, favorisant ainsi votre bien-être global."
      },
      {
        subTitle: "Bien-être global",
        text: "Que vous souhaitiez améliorer votre santé globale ou simplement dynamiser votre routine beauté, ce puissant complément vous procurera une sensation de renouveau et de vitalité."
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
        pictureLove: "./img/jpg/product/PB.jpg",
        textLove: "Le BB peut s’associer avec notre produit d’énergie cacaotée."
      },
      {
        pictureLove: "./img/jpg/product/PN.jpg",
        textLove:
          "Notre PN pour le saut de repas pour faire de délicieux smoothies."
      },
      {
        pictureLove: "./img/jpg/product/shampooing.jpg",
        textLove:
          "Pour des cheveux brillants, le BB se combine parfaitement bien avec notre shampooing d’exception."
      },
      {
        pictureLove: "./img/jpg/product/aprèsShampooing.jpg",
        textLove:
          "Pour des cheveux éclatants, notre BB s'associe merveilleusement bien avec notre après-shampooing nourissant."
      },
      {
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
    textColor: "#e58000"
  }
};
