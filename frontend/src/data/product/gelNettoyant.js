import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const gelNettoyant = {
  nameProduct: "Gel nettoyant",
  id: "gelNettoyant",

  summary: {
    title: "Un produit de soin polyvalent",
    paragraph: [
      {
        id: "gelNettoyant0",
        subTitle: "Nettoyez en douceur et en profondeur",
        text: "Après une journée active, votre peau se retrouve souvent asphyxiée par les saletés, le maquillage et diverses impuretés. Notre gel nettoyant est spécifiquement formulé pour offrir à votre peau un nettoyage doux, mais efficace. Il élimine les particules de pollution, les traces de maquillage et les impuretés, sans déshydrater votre peau. Ce processus de nettoyage prépare idéalement votre peau à se régénérer pendant le sommeil, laissant votre visage avec une sensation de fraîcheur et de propreté incomparable."
      },
      {
        id: "gelNettoyant1",
        subTitle: "Combattez les imperfections et hydratez votre peau",
        text: [
          "Notre gel est plus qu'un simple nettoyant. Il est aussi conçu pour fournir à votre peau une hydratation optimale. Imaginez une vague de douceur qui enveloppe votre peau, la laissant douce, lisse et veloutée. Oubliez les sensations de tiraillement ou de sécheresse souvent provoquées par les nettoyants classiques. Notre formule douce et respectueuse de l'équilibre cutané maintient l'hydratation de votre peau, préserve la barrière cutanée naturelle, et assure une protection efficace contre les agressions extérieures.",
          "Mais l'efficacité de notre gel ne s'arrête pas là. Il contient des actifs ciblés qui agissent efficacement contre les imperfections cutanées. Que vous ayez des inflammations, des éruptions cutanées ou de l'acné, notre produit est là pour vous aider. Il travaille en profondeur pour réduire les inflammations, combattre l'acné et prévenir l'apparition de nouvelles imperfections. Votre peau retrouve alors sa pureté, sa netteté, et son éclat naturel."
        ],
        picture450: "/img/jpg/product/gelNettoyantIllusText450.jpg",
        picture675: "/img/jpg/product/gelNettoyantIllusText675.jpg",
        picture900: "/img/jpg/product/gelNettoyantIllusText900.jpg"
      },
      {
        id: "gelNettoyant2",
        subTitle: "Soyez rassuré(e)",
        text: "Parce que nous comprenons que votre peau mérite le meilleur, nous nous assurons de la sécurité de nos produits. Notre gel a été rigoureusement testé sous contrôle dermatologique pour garantir sa compatibilité avec tous les types de peau. Nous nous assurons ainsi qu'il n'agresse pas votre peau, mais la respecte et la préserve. Vous pouvez donc utiliser notre produit en toute sérénité, sachant qu'il convient à votre peau et respecte son équilibre naturel."
      },
      {
        id: "gelNettoyant3",
        subTitle: "Révélez une peau en pleine santé",
        text: "Au final, notre objectif est de vous aider à profiter d'une peau éclatante de beauté et en pleine santé. La formule de notre produit, testée sous contrôle dermatologique, est conçue pour être aussi douce qu'efficace. Chaque utilisation vous apporte un moment de soin précieux, et vous rapproche de votre objectif d'une peau belle et saine. Avec notre produit, la beauté n'est pas seulement un rêve, mais une réalité à votre portée chaque jour."
      },
      {
        id: "gelNettoyant4",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "gelNettoyant5",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "0gelNettoyant",
        link: "huileDemaquillante",
        pictureLove: "/img/jpg/product/huileDemaquillante.jpg",
        textLove:
          "Notre huile tout-en-un est faite pour nettoyer, démaquiller et décontaminer votre peau en profondeur. En éliminant saletés, impuretés et polluants, elle laisse votre peau fraîche et revitalisée. Grâce à des huiles de plantes et de fruits, elle hydrate en douceur, redonnant à votre peau souplesse et éclat naturel. Testée dermatologiquement, notre formule vous offre une expérience de soin optimale et sûre. Prenez soin de votre peau avec le meilleur en optant pour notre huile polyvalente !"
      },
      {
        id: "1gelNettoyant",
        link: "decontaminant",
        pictureLove: "/img/jpg/product/decontaminant.jpg",
        textLove:
          "Le secret d'une peau resplendissante de beauté réside dans ce produit doux et efficace. En éliminant les peaux mortes et les impuretés, il révèle un teint frais et radieux. Spécialement conçu pour resserrer les pores et affiner la texture de votre peau, il offre une peau plus lisse et uniforme. Notre décontaminant cible les points noirs en désobstruant les pores, réduisant les imperfections et les tâches pigmentaires pour un teint éclatant et uniforme. De plus, notre formule apaise les yeux fatigués, offrant un regard reposé et éclatant. Testé sous contrôle dermatologique, notre produit garantit une tolérance optimale pour tous les types de peau."
      },
      {
        id: "2gelNettoyant",
        link: "cremeDay",
        pictureLove: "/img/jpg/product/cremeDay.jpg",
        textLove:
          "Notre crème hydratante apaise instantanément la peau, la laissant souple et éclatante. Sa formule riche combat la sécheresse en maintenant une hydratation optimale et renforce la barrière cutanée pour protéger des agressions extérieures. En ciblant les tâches sombres, elle éclaircit et unifie le teint. Pour une peau nette, débarrassée de l'acné, choisissez notre crème d'exception pour un éclat radieux et uniforme."
      },
      {
        id: "3gelNettoyant",
        link: "masqueNuit",
        pictureLove: "/img/jpg/product/masqueNuit.jpg",
        textLove:
          "Notre masque de nuit est révolutionnaire car il utilise la technologie Breathable Barrier®, qui a été cliniquement prouvée pour améliorer visiblement la santé de votre peau. Testé sous contrôle dermatologique, il est qualifié de plus efficace que ses concurrents en vente libre. Grâce à ses propriétés antioxydantes et régénératrices, il lutte contre les signes du vieillissement en réduisant l'apparence des rides et des ridules, vous offrant une peau plus jeune et plus ferme. Sa formule avancée améliore les imperfections de la peau, resserre les pores et améliore la texture, vous offrant une peau plus saine et éclatante, notamment pour les problèmes d'acné. Avec une hydratation intense, votre peau deviendra plus douce, plus saine et plus éclatante."
      },
      {
        id: "4gelNettoyant",
        link: "cremeNight",
        pictureLove: "/img/jpg/product/cremeNight.jpg",
        textLove:
          "Notre crème de nuit offre une régénération cellulaire complète, stimulant et restaurant le processus cellulaire de votre peau pendant la nuit. Grâce à sa technologie liposomale avancée, elle hydrate en profondeur, lissant les ridules et les signes de relâchement cutané. En ciblant les tâches et les décolorations, elle estompe progressivement les imperfections pour un teint uniforme et éclatant. Avec ses actifs antioxydants, elle lutte contre les signes visibles de l'âge, vous offrant une peau jeune et éclatante."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/gelNettoyant.jpg",
  picture264: "/img/jpg/product/gelNettoyant264.jpg",
  picture400: "/img/jpg/product/gelNettoyant400.jpg",
  colors: {
    textColor: "#42848e",
    titleColorInSummary: "#42848e",
    linkTextColor: "#42848e",
    bgColorInSummary0: "#87b6bd",
    bgColorInSummary1: "#eaf3f4",
    linearGradient0: "linear-gradient(105deg, #87b6bd, #b8f4ff)",
    linearGradient1: "linear-gradient(to right, #a9cbd0, #eaf3f4)",
    shadowColor: "#eaf3f4"
  },
  inSummary: [
    {
      id: "GNiS0",
      title: "Santé",
      text: (
        <ul>
          <li>Lutte contre l'acné</li>
        </ul>
      )
    },
    {
      id: "GNiS1",
      title: "Beauté ",
      text: (
        <ul>
          <li>Elimine les saletés et les impuretés de la journée</li>
          <li>Hydrate et adoucit la peau</li>
        </ul>
      )
    }
  ]
};
