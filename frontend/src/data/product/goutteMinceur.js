import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const goutteMinceur = {
  nameProduct: "Gouttes minceur",
  summary: {
    title: "Laissez les éléments naturels agir en votre faveur.",
    paragraph: [
      {
        subTitle: "La Double Force Minceur : Jour et Nuit",
        text: "Avec ses deux fioles uniques sous forme de gouttes, ce produit offre un avantage de pointe dans votre cure minceur."
      },
      {
        subTitle: "Gestion du Poids Efficace avec les Gouttes Jour",
        text: "Avec ses deux fioles uniques sous forme de gouttes, ce produit offre un avantage de pointe dans votre cure minceur. Les gouttes jour vous offrent une solution complète pour une gestion efficace du poids. Elles régulent votre appétit et vous procurent un effet de satiété durable, vous aidant à contrôler vos portions alimentaires et à éviter les fringales incontrôlées. De plus, notre formule puissante cible les graisses sous-cutanées et viscérales, celles qui sont difficiles à éliminer même avec un exercice physique intense. Vous serez surpris(e) par la capacité de notre produit à brûler ces graisses tenaces, vous permettant ainsi d'atteindre vos objectifs de perte de poids de manière efficace.",
        picture450: "./img/jpg/product/gouttesIllusText450.jpg",
        picture675: "./img/jpg/product/gouttesIllusText675.jpg",
        picture900: "./img/jpg/product/gouttesIllusText900.jpg"
      },
      {
        subTitle: "Régulation du Sucre et Boost d'Énergie",
        text: "Au-delà de la simple gestion du poids, notre produit améliore également votre bien-être général. Il agit en tant que régulateur de sucre, vous aidant à réduire l'excès de sucre dans votre corps et à maintenir un niveau de sucre sanguin stable. De plus, il stimule le métabolisme et vous offre un regain d'énergie essentiel pour brûler les calories efficacement, sans ressentir de fatigue physique."
      },
      {
        subTitle: "Amélioration de l'Humeur et de la Peau",
        text: "Vous remarquerez une amélioration de votre humeur, vous permettant d'aborder chaque journée avec une énergie positive et une motivation accrue. De plus, notre formule contribue à améliorer la cellulite, en aidant à réduire son apparence et à améliorer la texture de la peau."
      },
      {
        subTitle: "Gouttes Nuit pour une Récupération Optimale",
        text: "Les gouttes nuit empêchent l'accumulation de nouvelles graisses durant votre sommeil. Elles diminuent le cortisol, l'hormone du stress, vous offrant ainsi un soulagement naturel et une relaxation de votre corps et de votre esprit. Ce bien-être aide à réguler le fonctionnement de votre système digestif, favorisant ainsi une digestion harmonieuse et confortable. De plus, notre formule contribue à combattre le mauvais cholestérol, vous permettant de maintenir un équilibre lipidique sain dans votre corps. Vous êtes détendue, vous digérez mieux, votre sommeil est de meilleure qualité et le corps n’a pas besoin de stocker de nouvelles graisses. Notre produit favorise ainsi une récupération optimale pendant la nuit."
      },
      {
        subTitle: "Prenez le Contrôle de Votre Corps Jour et Nuit",
        text: "Avec nos gouttes uniques, prenez le contrôle de votre corps jour et nuit. Profitez d'une gestion du poids efficace, d'un regain d'énergie, d'une amélioration de l'humeur et de la peau, et d'une récupération optimale pendant la nuit."
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
        id: "gMdetox0",
        pictureLove: "./img/jpg/product/detox.jpg",
        textLove:
          "Pour une cure minceur efficace, nous recommandons de faire une détoxification du corps afin de le préparer à une perte de poids saine et durable."
      },
      {
        id: "gMboosterEnergie1",
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Pour brûler encore plus de graisses et avoir une énergie boostée, notre booster d’énergie sera idéal car il permet la combustion des graisses de +17% tout en apportant bonne humeur et énergie. "
      },
      {
        id: "gMbienEtreInterieur2",
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Si votre système digestif et intestinal sont déséquilibrés, les pré-probiotiques devraient réguler tout ceci."
      },
      {
        id: "gMGG3",
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Si vous cherchez un apport supplémentaire de légumes et de vitamines, optez pour notre détox végétale. C'est une solution naturelle pour enrichir votre alimentation et soutenir votre bien-être général."
      },
      {
        id: "gMregenerateurCellulaire4",
        pictureLove: "./img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Une perte de poids peut entraîner des changements au niveau de la peau. Afin de remédier à ça, le chouchou sera idéal."
      }
    ]
  },
  firstCategory: [getCategoryById("0GestionDuPoids").name],
  secondCategory: [
    getSecondCategoryById("0GestionDuPoids1AidePertePoids").text
  ],
  picture: "./img/jpg/product/goutteMinceur.jpg",
  colors: {
    textColor: "#e58000"
  },
  inSummary: [
    {
      id: "amis0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "AMiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "AMiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "AMiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "AMiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
