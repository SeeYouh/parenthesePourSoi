import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const gelDouche = {
  nameProduct: "Gel douche",
  summary: {
    title: "Une expérience de soin incomparable pour votre peau.",
    paragraph: [
      {
        text: "Doté d'une formule délicate, notre gel douche nettoie votre peau en profondeur, éliminant efficacement les impuretés sans en introduire de nouvelles. Fini les résidus chimiques indésirables ! Votre peau retrouve toute sa fraîcheur et sa pureté. De plus, notre gel douche agit comme un véritable purificateur, éliminant les toxines superficielles qui peuvent ternir l'éclat de votre teint. Avec chaque utilisation, vous ressentez une sensation de propreté et de légèreté, pour une peau éclatante de beauté naturelle."
      },
      {
        text: "Grâce à sa composition douce et naturelle, il réduit les rougeurs et démangeaisons, apportant un soulagement bienvenu aux peaux sensibles et réactives. De plus, il diminue les irritations, offrant un confort optimal à votre épiderme. Les personnes souffrant d'eczéma et de psoriasis seront ravies de constater les propriétés apaisantes de notre gel douche, qui contribue à apaiser ces affections cutanées."
      },
      {
        text: "Plongez dans un rituel de bien-être, où la santé et la beauté se rejoignent harmonieusement."
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
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "./img/jpg/product/gelDouche.jpg",
  colors: {
    textColor: "#808080"
  }
};
