import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const heRelaxante = {
  nameProduct: "HE Relaxante",
  id: "heRelaxante",

  summary: {
    title: "Découvrez le pouvoir de l'huile essentielle sur le bien-être",
    paragraph: [
      {
        id: "1heRelaxante",
        subTitle: "Evacuez le stress",
        text: "Dans notre monde moderne, le stress et l'anxiété sont devenus des compagnons quotidiens pour beaucoup d'entre nous. Heureusement, la nature nous offre des outils pour combattre ces maux. L'un d'eux est l'huile essentielle. Connue pour ses effets bénéfiques sur la santé mentale, l'huile essentielle est un véritable allié pour apaiser la dépression et les symptômes qui y sont liés. Son parfum doux et relaxant a le pouvoir de calmer l'esprit, de réduire les tensions et de favoriser un sentiment de tranquillité intérieure. En plus de cela, elle peut aider à éliminer la pression accumulée tout au long de la journée, vous permettant de vous détendre et de vous ressourcer. C'est une expérience qui peut transformer votre quotidien."
      },
      {
        id: "2heRelaxante",
        subTitle: "Favorisez un sommeil récupérateur",
        text: "Le sommeil est un élément essentiel de notre santé et de notre bien-être. Malheureusement, de nombreux facteurs peuvent perturber notre sommeil, comme le stress, l'anxiété ou les préoccupations quotidiennes. L'huile essentielle peut être une solution naturelle pour améliorer la qualité de notre sommeil. En créant une atmosphère propice au repos, elle peut aider à réduire les troubles du sommeil et favoriser un sommeil profond et réparateur. Imaginez-vous préparant votre chambre pour la nuit, diffusant quelques gouttes d'huile essentielle, et laissant son parfum vous envelopper alors que vous vous glissez dans vos draps. C'est une routine qui peut transformer votre nuit et vous aider à vous réveiller frais et dispos le matin.",
        picture450: "/img/jpg/product/heRelaxantIllusText450.jpg",
        picture675: "/img/jpg/product/heRelaxantIllusText675.jpg",
        picture900: "/img/jpg/product/heRelaxantIllusText900.jpg"
      },
      {
        id: "3heRelaxante",
        subTitle: "Apaisez votre peau",
        text: "La peau est notre plus grand organe et elle est souvent le reflet de notre santé intérieure. Les irritations cutanées peuvent être le signe de déséquilibres internes, mais elles peuvent aussi être causées par des facteurs externes comme le climat, les produits chimiques ou les allergènes. L'huile essentielle peut apporter un soulagement aux irritations cutanées. Elle peut calmer les démangeaisons, les rougeurs et les inflammations, offrant un soulagement rapide et apaisant."
      },
      {
        id: "4heRelaxante",
        subTitle: "Soulagez vos douleurs et inconforts",
        text: "La douleur et l'inconfort peuvent être des obstacles majeurs à notre bien-être. Qu'il s'agisse de douleurs musculaires, de maux de tête ou de grincements de dents, ces sensations désagréables peuvent nous empêcher de profiter pleinement de notre vie. L'huile essentielle peut être une solution naturelle pour soulager ces maux. Par exemple, elle peut aider à détendre les muscles de la mâchoire, réduire le grincement des dents et atténuer les sensations désagréables associées à cette condition. Imaginez-vous massant doucement votre mâchoire avec quelques gouttes d'huile essentielle, et ressentant une détente immédiate. C'est un geste qui peut améliorer votre confort et votre qualité de vie."
      },
      {
        id: "5heRelaxante",
        subTitle: "Améliorez votre quotidien",
        text: "L'huile essentielle est un outil polyvalent qui peut améliorer votre bien-être de plusieurs façons. Que vous cherchiez à réduire le stress, améliorer votre sommeil, soulager les irritations cutanées ou atténuer la douleur, elle peut vous aider à atteindre votre objectif. Alors pourquoi ne pas essayer ?"
      },
      {
        id: "6heRelaxante",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "7heRelaxante",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "HERelaxante4",
        link: "cocoOil",
        pictureLove: "/img/jpg/product/cocoOil.jpg",
        textLove:
          "En raison de la concentration élevée de notre produit, nous recommandons de le mélanger avec notre huile hydratante, particulièrement pendant les premiers jours d'utilisation. Cette combinaison permet de bénéficier pleinement des bienfaits de notre produit tout en assurant une application douce et hydratante pour votre peau."
      },
      {
        id: "HERelaxante2",
        link: "boosterEnergie",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Si vous traversez une période de baisse de moral ou de mal-être, cette huile essentielle peut apporter une aide précieuse. Elle peut être utilisée conjointement avec notre produit d'augmentation d'énergie pour améliorer votre humeur et votre bien-être général. Optimisez votre santé émotionnelle avec notre huile essentielle et notre booster d'énergie."
      },
      {
        id: "HERelaxante3",
        link: "pn",
        pictureLove: "/img/jpg/product/PN.jpg",
        textLove:
          "Cette huile essentielle est un outil puissant pour aider à surmonter la dépendance au tabac. En la combinant avec notre booster d'énergie et notre produit spécialement conçu pour remplacer les repas, vous pouvez éviter les grignotages et la prise de poids souvent associés à l'arrêt du tabac. Optimisez votre parcours de sevrage tabagique avec notre huile essentielle, notre booster d'énergie et notre substitut de repas."
      },
      {
        id: "HERelaxante3",
        link: "herafraichissant",
        pictureLove: "/img/jpg/product/heRafraichissant.jpg",
        textLove:
          "Cette huile essentielle est un outil puissant pour aider à surmonter la dépendance au tabac. En la combinant avec notre booster d'énergie et notre produit spécialement conçu pour remplacer les repas, vous pouvez éviter les grignotages et la prise de poids souvent associés à l'arrêt du tabac. Optimisez votre parcours de sevrage tabagique avec notre huile essentielle, notre booster d'énergie et notre substitut de repas."
      },
      {
        id: "HERelaxante3",
        link: "hesoulageante",
        pictureLove: "/img/jpg/product/heSoulageante.jpg",
        textLove:
          "Cette huile essentielle est un outil puissant pour aider à surmonter la dépendance au tabac. En la combinant avec notre booster d'énergie et notre produit spécialement conçu pour remplacer les repas, vous pouvez éviter les grignotages et la prise de poids souvent associés à l'arrêt du tabac. Optimisez votre parcours de sevrage tabagique avec notre huile essentielle, notre booster d'énergie et notre substitut de repas."
      },
      {
        id: "HERelaxante3",
        link: "hedesinfectante",
        pictureLove: "/img/jpg/product/heDesinfectante.jpg",
        textLove:
          "Cette huile essentielle est un outil puissant pour aider à surmonter la dépendance au tabac. En la combinant avec notre booster d'énergie et notre produit spécialement conçu pour remplacer les repas, vous pouvez éviter les grignotages et la prise de poids souvent associés à l'arrêt du tabac. Optimisez votre parcours de sevrage tabagique avec notre huile essentielle, notre booster d'énergie et notre substitut de repas."
      }
    ]
  },
  firstCategory: [getCategoryById("4HuilesEssentielles").name],
  secondCategory: [getSecondCategoryById("4HuilesEssentielles0MieuxEtre").text],
  picture: "/img/jpg/product/heRelaxante.jpg",
  colors: {
    textColor: "#9f348b",
    titleColorInSummary: "#0017a5",
    linkTextColor: "#9f348b",
    bgColorInSummary0: "#bc71ae",
    bgColorInSummary1: "#f3e7f1",
    linearGradient0: "linear-gradient(105deg, #bc71ae, #ffa9e8)",
    linearGradient1: "linear-gradient(to right, #cf9ac5, #f3e7f1)",
    shadowColor: "#f3e7f1"
  },
  inSummary: [
    {
      id: "HEReiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "HEReiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "HEReiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "HEReiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "HEReiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
