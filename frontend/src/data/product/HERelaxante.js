import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const heRelaxante = {
  nameProduct: "HE Relaxante",
  summary: {
    title:
      "De l'agitation à la sérénité : Découvrez le pouvoir des huiles essentielles sur le bien-être",
    paragraph: [
      {
        subTitle: "L'huile essentielle, un remède naturel contre le stress",
        text: "Dans notre monde moderne, le stress et l'anxiété sont devenus des compagnons quotidiens pour beaucoup d'entre nous. Heureusement, la nature nous offre des outils pour combattre ces maux. L'un d'eux est l'huile essentielle. Connue pour ses effets bénéfiques sur la santé mentale, l'huile essentielle est un véritable allié pour apaiser la dépression et les symptômes qui y sont liés. Son parfum doux et relaxant a le pouvoir de calmer l'esprit, de réduire les tensions et de favoriser un sentiment de tranquillité intérieure. En plus de cela, elle peut aider à éliminer la pression accumulée tout au long de la journée, vous permettant de vous détendre et de vous ressourcer. Imaginez-vous rentrant chez vous après une longue journée de travail, allumant votre diffuseur d'huiles essentielles, et laissant les arômes naturels vous envelopper et vous apaiser. C'est une expérience qui peut transformer votre quotidien."
      },
      {
        subTitle: "Un sommeil de qualité grâce aux huiles essentielles",
        text: "Le sommeil est un élément essentiel de notre santé et de notre bien-être. Malheureusement, de nombreux facteurs peuvent perturber notre sommeil, comme le stress, l'anxiété ou les préoccupations quotidiennes. L'huile essentielle peut être une solution naturelle pour améliorer la qualité de notre sommeil. En créant une atmosphère propice au repos, elle peut aider à réduire les troubles du sommeil et favoriser un sommeil profond et réparateur. Imaginez-vous préparant votre chambre pour la nuit, diffusant quelques gouttes d'huile essentielle, et laissant son parfum vous envelopper alors que vous vous glissez dans vos draps. C'est une routine qui peut transformer votre nuit et vous aider à vous réveiller frais et dispos le matin."
      },
      {
        subTitle: "Les huiles essentielles pour une peau apaisée",
        text: "La peau est notre plus grand organe et elle est souvent le reflet de notre santé intérieure. Les irritations cutanées peuvent être le signe de déséquilibres internes, mais elles peuvent aussi être causées par des facteurs externes comme le climat, les produits chimiques ou les allergènes. L'huile essentielle peut apporter un soulagement aux irritations cutanées. Elle peut calmer les démangeaisons, les rougeurs et les inflammations, offrant un soulagement rapide et apaisant. Imaginez-vous appliquant quelques gouttes d'huile essentielle sur une peau irritée, et ressentant immédiatement son effet apaisant. C'est un geste simple qui peut faire une grande différence dans votre confort quotidien."
      },
      {
        subTitle:
          "Soulager les douleurs et l'inconfort avec les huiles essentielles",
        text: "La douleur et l'inconfort peuvent être des obstacles majeurs à notre bien-être. Qu'il s'agisse de douleurs musculaires, de maux de tête ou de grincements de dents, ces sensations désagréables peuvent nous empêcher de profiter pleinement de notre vie. L'huile essentielle peut être une solution naturelle pour soulager ces maux. Par exemple, elle peut aider à détendre les muscles de la mâchoire, réduire le grincement des dents et atténuer les sensations désagréables associées à cette condition. Imaginez-vous massant doucement votre mâchoire avec quelques gouttes d'huile essentielle, et ressentant une détente immédiate. C'est un geste qui peut améliorer votre confort et votre qualité de vie."
      },
      {
        subTitle: "En conclusion",
        text: " l'huile essentielle est un outil polyvalent qui peut améliorer votre bien-être de plusieurs façons. Que vous cherchiez à réduire le stress, améliorer votre sommeil, soulager les irritations cutanées ou atténuer la douleur, elle peut vous aider à atteindre votre objectif. Alors pourquoi ne pas essayer ? Vous pourriez être surpris par les effets positifs de ce cadeau de la nature."
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
        pictureLove: "./img/jpg/product/detox.jpg",
        textLove:
          "L'huile essentielle peut être un excellent complément à notre produit de détoxification. En aidant à apaiser l'esprit et le corps, elle peut favoriser un environnement plus propice à la détoxification. Imaginez-vous combinant les bienfaits de l'huile essentielle avec ceux de notre produit de détoxification, créant ainsi une routine de bien-être complète qui favorise la perte de poids et la santé globale. C'est une approche holistique qui peut transformer votre parcours de perte de poids et vous aider à atteindre vos objectifs de santé."
      },
      {
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Nos gouttes super puissantes.Une cure complète que je vous recommande."
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
