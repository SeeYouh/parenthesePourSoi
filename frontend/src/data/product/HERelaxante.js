import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const heRelaxante = {
  nameProduct: "HE Relaxante",
  summary: {
    title: "Quand le stress laisse la place à la paix intérieure.",
    paragraph: [
      {
        text: "Cette huile essentielle a des effets bénéfiques sur la santé mentale. Elle est connue pour apaiser la dépression et les symptômes qui y sont liés. Son parfum doux et relaxant peut aider à améliorer l'humeur, à réduire les sentiments de tristesse et à favoriser un sentiment général de bien-être. Elle est particulièrement efficace pour diminuer l'anxiété et le stress. Son parfum naturellement apaisant peut aider à calmer l'esprit, à réduire les tensions et à favoriser une sensation de tranquillité intérieure. Elle peut également aider à évacuer la pression accumulée au cours de la journée, vous permettant de vous détendre et de vous ressourcer."
      },
      {
        text: "De plus, l'huile essentielle Relaxante peut être utilisée pour favoriser l'endormissement, diminuer les terreurs nocturnes et les insomnies. Son utilisation avant le coucher peut aider à créer une atmosphère propice au sommeil, favorisant ainsi un repos de qualité et réduisant les troubles du sommeil."
      },
      {
        text: "Ce produit possède des propriétés apaisantes qui peuvent soulager les irritations cutanées. Il peut être utilisé pour calmer les démangeaisons, les rougeurs et les inflammations, offrant un soulagement rapide et apaisant. Il peut également apaiser la douleur et l'inconfort associés au grincement de dents. Son application régulière peut aider à détendre les muscles de la mâchoire, à réduire le grincement et à atténuer les sensations désagréables."
      },
      {
        text: "Bénéficiez d’un précieux outil pour améliorer votre qualité de vie et favoriser votre équilibre intérieur."
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
  firstCategory: [getCategoryById("4HuilesEssentielles").name],
  secondCategory: [getSecondCategoryById("4HuilesEssentielles0MieuxEtre").text],
  picture: "./img/jpg/product/heRelaxante.jpg",
  colors: {
    textColor: "#a81616"
  }
};
