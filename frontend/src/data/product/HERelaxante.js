import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const heRelaxante = {
  nameProduct: "HE Relaxante",
  id: "heRelaxante",

  summary: {
    title: "Découvrez le pouvoir de l'huile essentielle sur le bien-être",
    paragraph: [
      {
        id: "1heRelaxante",
        subTitle: "L'huile essentielle, un remède naturel contre le stress",
        text: "Dans notre monde moderne, le stress et l'anxiété sont devenus des compagnons quotidiens pour beaucoup d'entre nous. Heureusement, la nature nous offre des outils pour combattre ces maux. L'un d'eux est l'huile essentielle. Connue pour ses effets bénéfiques sur la santé mentale, l'huile essentielle est un véritable allié pour apaiser la dépression et les symptômes qui y sont liés. Son parfum doux et relaxant a le pouvoir de calmer l'esprit, de réduire les tensions et de favoriser un sentiment de tranquillité intérieure. En plus de cela, elle peut aider à éliminer la pression accumulée tout au long de la journée, vous permettant de vous détendre et de vous ressourcer. Imaginez-vous rentrant chez vous après une longue journée de travail, allumant votre diffuseur d'huiles essentielles, et laissant les arômes naturels vous envelopper et vous apaiser. C'est une expérience qui peut transformer votre quotidien."
      },
      {
        id: "2heRelaxante",
        subTitle: "Un sommeil de qualité grâce aux huiles essentielles",
        text: "Le sommeil est un élément essentiel de notre santé et de notre bien-être. Malheureusement, de nombreux facteurs peuvent perturber notre sommeil, comme le stress, l'anxiété ou les préoccupations quotidiennes. L'huile essentielle peut être une solution naturelle pour améliorer la qualité de notre sommeil. En créant une atmosphère propice au repos, elle peut aider à réduire les troubles du sommeil et favoriser un sommeil profond et réparateur. Imaginez-vous préparant votre chambre pour la nuit, diffusant quelques gouttes d'huile essentielle, et laissant son parfum vous envelopper alors que vous vous glissez dans vos draps. C'est une routine qui peut transformer votre nuit et vous aider à vous réveiller frais et dispos le matin.",
        picture450: "/img/jpg/product/heRelaxantIllusText450.jpg",
        picture675: "/img/jpg/product/heRelaxantIllusText675.jpg",
        picture900: "/img/jpg/product/heRelaxantIllusText900.jpg"
      },
      {
        id: "3heRelaxante",
        subTitle: "Les huiles essentielles pour une peau apaisée",
        text: "La peau est notre plus grand organe et elle est souvent le reflet de notre santé intérieure. Les irritations cutanées peuvent être le signe de déséquilibres internes, mais elles peuvent aussi être causées par des facteurs externes comme le climat, les produits chimiques ou les allergènes. L'huile essentielle peut apporter un soulagement aux irritations cutanées. Elle peut calmer les démangeaisons, les rougeurs et les inflammations, offrant un soulagement rapide et apaisant. Imaginez-vous appliquant quelques gouttes d'huile essentielle sur une peau irritée, et ressentant immédiatement son effet apaisant. C'est un geste simple qui peut faire une grande différence dans votre confort quotidien."
      },
      {
        id: "4heRelaxante",
        subTitle:
          "Soulager les douleurs et l'inconfort avec les huiles essentielles",
        text: "La douleur et l'inconfort peuvent être des obstacles majeurs à notre bien-être. Qu'il s'agisse de douleurs musculaires, de maux de tête ou de grincements de dents, ces sensations désagréables peuvent nous empêcher de profiter pleinement de notre vie. L'huile essentielle peut être une solution naturelle pour soulager ces maux. Par exemple, elle peut aider à détendre les muscles de la mâchoire, réduire le grincement des dents et atténuer les sensations désagréables associées à cette condition. Imaginez-vous massant doucement votre mâchoire avec quelques gouttes d'huile essentielle, et ressentant une détente immédiate. C'est un geste qui peut améliorer votre confort et votre qualité de vie."
      },
      {
        id: "5heRelaxante",
        subTitle: "En conclusion",
        text: " L'huile essentielle est un outil polyvalent qui peut améliorer votre bien-être de plusieurs façons. Que vous cherchiez à réduire le stress, améliorer votre sommeil, soulager les irritations cutanées ou atténuer la douleur, elle peut vous aider à atteindre votre objectif. Alors pourquoi ne pas essayer ? Vous pourriez être surpris par les effets positifs de ce cadeau de la nature."
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
        id: "HERelaxante0",
        link: "detox",
        pictureLove: "/img/jpg/product/detox.jpg",
        textLove:
          "Notre produit de détoxification, lorsqu'il est associé à cette huile, peut aider à éliminer les toxines du corps et à stimuler le métabolisme, favorisant ainsi une perte de poids efficace."
      },
      {
        id: "HERelaxante1",
        link: "goutteMinceur",
        pictureLove: "/img/jpg/product/goutteMinceur.jpg",
        textLove:
          "En complément, nos gouttes super puissantes peuvent renforcer l'efficacité de cette cure minceur. Elles agissent en synergie avec l'huile essentielle et le produit de détoxification pour offrir une solution complète de perte de poids. C'est une combinaison que je recommande vivement."
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
        id: "HERelaxante4",
        link: "cocoOil",
        pictureLove: "/img/jpg/product/cocoOil.jpg",
        textLove:
          "En raison de la concentration élevée de notre produit, nous recommandons de le mélanger avec notre huile hydratante, particulièrement pendant les premiers jours d'utilisation. Cette combinaison permet de bénéficier pleinement des bienfaits de notre produit tout en assurant une application douce et hydratante pour votre peau."
      }
    ]
  },
  firstCategory: [getCategoryById("4HuilesEssentielles").name],
  secondCategory: [getSecondCategoryById("4HuilesEssentielles0MieuxEtre").text],
  picture: "/img/jpg/product/heRelaxante.jpg",
  colors: {
    textColor: "#9f348b",
    titleColorInSummary: "",
    bgColorInSummary: ""
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
