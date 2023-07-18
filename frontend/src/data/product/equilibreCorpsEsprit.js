import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const equilibreCorpsEsprit = {
  nameProduct: "Equilibre corps et esprit",
  summary: {
    title: "Harmonisez votre corps pour un équilibre complet.",
    paragraph: [
      {
        text: "Tout au long de votre vie, votre corps subit d'importants changements significatifs, tant à l’intérieur qu’à l’extérieur."
      },
      {
        text: "Notre produit joue un rôle essentiel en soutenant la division cellulaire, en préservant les fonctions psychologiques normales et en favorisant un métabolisme énergétique optimal. Il fournit à votre corps les outils nécessaires pour maintenir une santé optimale. En le prenant avant de vous coucher, vous vous réveillerez chaque jour en vous sentant régénéré. "
      },
      {
        text: "Restez actif et plein d’énergie à chaque étape de votre vie !"
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
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre1Energie").text],
  picture: "./img/jpg/product/equilibreCorpsEsprit.jpg",
  colors: {
    textColor: "#a81616"
  }
};
