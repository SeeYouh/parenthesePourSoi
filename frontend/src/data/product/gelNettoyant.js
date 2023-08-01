import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const gelNettoyant = {
  nameProduct: "Gel nettoyant",
  id: "gelNettoyant",

  summary: {
    title: "Un produit de soin polyvalent !",
    paragraph: [
      {
        id: "gelNettoyant0",
        subTitle:
          "Nettoyage doux et profond : Révélez une peau fraîche et pure",
        text: "Après une journée active, votre peau se retrouve souvent asphyxiée par les saletés, le maquillage et diverses impuretés. Notre gel nettoyant est spécifiquement formulé pour offrir à votre peau un nettoyage doux, mais efficace. Il élimine les particules de pollution, les traces de maquillage et les impuretés, sans déshydrater votre peau. Ce processus de nettoyage prépare idéalement votre peau à se régénérer pendant le sommeil, laissant votre visage avec une sensation de fraîcheur et de propreté incomparable."
      },
      {
        id: "gelNettoyant1",
        subTitle: "Hydratation optimale : Un confort cutané au rendez-vous",
        text: "Notre gel est plus qu'un simple nettoyant. Il est aussi conçu pour fournir à votre peau une hydratation optimale. Imaginez une vague de douceur qui enveloppe votre peau, la laissant douce, lisse et veloutée. Oubliez les sensations de tiraillement ou de sécheresse souvent provoquées par les nettoyants classiques. Notre formule douce et respectueuse de l'équilibre cutané maintient l'hydratation de votre peau, préserve la barrière cutanée naturelle, et assure une protection efficace contre les agressions extérieures.",
        picture450: "/img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "/img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "/img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        id: "gelNettoyant2",
        subTitle:
          "Lutte contre les imperfections : Retrouvez une peau nette et éclatante",
        text: "Mais l'efficacité de notre gel ne s'arrête pas là. Il contient des actifs ciblés qui agissent efficacement contre les imperfections cutanées. Que vous ayez des inflammations, des éruptions cutanées ou de l'acné, notre produit est là pour vous aider. Il travaille en profondeur pour réduire les inflammations, combattre l'acné et prévenir l'apparition de nouvelles imperfections. Votre peau retrouve alors sa pureté, sa netteté, et son éclat naturel."
      },
      {
        id: "gelNettoyant3",
        subTitle:
          "Testé sous contrôle dermatologique : Un gage de sécurité pour votre peau",
        text: "Parce que nous comprenons que votre peau mérite le meilleur, nous nous assurons de la sécurité de nos produits. Notre gel a été rigoureusement testé sous contrôle dermatologique pour garantir sa compatibilité avec tous les types de peau. Nous nous assurons ainsi qu'il n'agresse pas votre peau, mais la respecte et la préserve. Vous pouvez donc utiliser notre produit en toute sérénité, sachant qu'il convient à votre peau et respecte son équilibre naturel."
      },
      {
        id: "gelNettoyant4",
        subTitle:
          "Révélez une peau en pleine santé : Une formule dédiée à votre beauté",
        text: "Au final, notre objectif est de vous aider à profiter d'une peau éclatante de beauté et en pleine santé. La formule de notre produit, testée sous contrôle dermatologique, est conçue pour être aussi douce qu'efficace. Chaque utilisation vous apporte un moment de soin précieux, et vous rapproche de votre objectif d'une peau belle et saine. Avec notre produit, la beauté n'est pas seulement un rêve, mais une réalité à votre portée chaque jour."
      },
      {
        id: "gelNettoyant5",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "gelNettoyant6",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "GNPB0",
        pictureLove: "/img/jpg/product/PB.jpg",
        textLove:
          "JPour renforcer davantage votre bien-être centré sur le soin du visage, je vous suggère d'explorer notre gamme beauté exhaustive, notamment notre décontaminant. Cet élément de notre collection peut compléter parfaitement l'expérience d'hydratation que procure notre baume à lèvres."
      },
      {
        id: "GNmereDeTous1",
        pictureLove: "/img/jpg/product/mereDeTous.jpg",
        textLove:
          "Pour assurer une protection quotidienne optimale et nourrir votre peau avec délicatesse, notre Crème Day est un choix idéal. Sa formule enrichissante offre une hydratation constante, préservant votre peau des effets desséchants de l'environnement tout en agissant comme une barrière contre les agressions extérieures. Chaque application vous offre une peau éclatante de santé, revitalisée et intensément hydratée tout au long de la journée."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/heRafraichissant.jpg",
  colors: {
    textColor: "#30d1d9",
    titleColorInSummary: "#003459",
    bgColorInSummary: "#68a6d0"
  },
  inSummary: [
    {
      id: "GNiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "GNiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "GNiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "GNiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "GNiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
