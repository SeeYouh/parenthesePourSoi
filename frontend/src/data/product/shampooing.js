import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const shampooing = {
  nameProduct: "Shampooing",
  summary: {
    title: "Sublimez vos cheveux avec ce shampooing d’exception.",
    paragraph: [
      {
        text: "Notre shampooing offre à vos cheveux le traitement qu'ils méritent avec notre produit révolutionnaire. Il nettoie en profondeur, éliminant les impuretés et les résidus de produits capillaires, pour des cheveux propres et sains. De plus, sa formule spéciale revitalise et hydrate intensément chaque mèche, rendant vos cheveux doux, brillants et pleins de vitalité."
      },
      {
        text: "Notre produit ne se limite pas à cela, il est également votre allié pour un cuir chevelu sain et protégé. Sa formule contribue à apaiser les problèmes cutanés tels que les irritations et les rougeurs. De plus, il combat efficacement les pellicules, réduit les démangeaisons et  l'eczéma capillaire restaurant l'équilibre du cuir chevelu. "
      },
      {
        text: "Notre shampooing convient aux cheveux colorés."
      },
      {
        text: "Offrez-vous une expérience luxueuse en découvrant ce shampooing qui prend soin de vos cheveux, ravive votre peau et élimine les problèmes courants du cuir chevelu."
      },
      {
        text: "Pour compléter votre expérience de bien-être, je vous recommande vivement de jeter un coup d'œil à notre après-shampooing, qui se marie parfaitement avec notre shampooing."
      }
    ],
    youLikeIt: [
      {
        pictureLove: "./img/jpg/product/goutteMinceur.jpg",
        textLove:
          "La détox’ étant la base de toute cure minceur, nos gouttes super puissantes devraient également vous intéresser pour perdre du poids sans effet yoyo."
      },
      {
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Si votre système digestif et intestinal sont déséquilibrés, les pré-probiotiques devraient réguler tout ceci."
      },
      {
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Une autre approche consiste à rétablir l'équilibre de votre système digestif et intestinal en fournissant des légumes et des vitamines essentiels par le biais d'une détoxification végétale."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute0SoinsCheveux").text],
  picture: "./img/jpg/product/shampooing.jpg",
  colors: {
    textColor: "#808080"
  }
};
