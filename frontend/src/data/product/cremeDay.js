import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const cremeDay = {
  nameProduct: "Crème day",
  id: "cremeDay",

  summary: {
    title: "Une crème hydratante avec une panoplie d'avantages",
    paragraph: [
      {
        id: "0cremeDay",
        subTitle: "Hydratez-vous intensément",
        text: "Plongez votre peau dans un véritable bain d'hydratation avec notre Crème Hydratante d'Exception. Sa formule unique pénètre en profondeur pour apaiser instantanément les sensations de tiraillement, redonnant ainsi à votre épiderme toute sa souplesse et son éclat. Grâce à cette crème, votre peau est intensément nourrie et vous ressentirez une sensation de confort tout au long de la journée, lui rendant vitalité et éclat."
      },
      {
        id: "1cremeDay",
        subTitle: "Luttez contre vos imperfections",
        text: [
          "Vous rêvez d'un teint uniforme et éclatant ? Notre Crème Hydratante d'Exception est là pour exaucer votre souhait ! Spécialement conçue pour cibler les imperfections liées à l'hyperpigmentation, cette crème agit en douceur pour éclaircir progressivement les tâches sombres, révélant ainsi un teint plus homogène et lumineux. Fini les soucis d'irrégularités du teint et les rougeurs, cette formule aux propriétés unifiantes les atténue avec délicatesse, laissant place à une peau sublimée d'un éclat radieux et uniforme.",
          "En plus de ses bienfaits sur l'hyperpigmentation, cette crème douce et efficace s'attaque aux problèmes de peau liés à l'acné. Elle agit en profondeur pour réduire les inflammations et apaiser les rougeurs, offrant ainsi un répit bienvenu aux peaux sujettes à l'acné. Mieux encore, elle prévient l'apparition de nouvelles éruptions cutanées, laissant votre peau nette, purifiée et rayonnante de fraîcheur.",
          "Votre visage mérite le meilleur, et notre Crème Hydratante d'Exception est là pour vous offrir un teint éclatant et une peau en pleine santé. Sa formule soigneusement élaborée agit en harmonie avec votre peau pour révéler sa beauté naturelle. Avec notre Crème Hydratante d'Exception, c'est l'assurance d'une peau sublimée et choyée, pour un éclat qui fera tourner toutes les têtes."
        ],
        picture450: "./img/jpg/product/ApportMinerauxIllusText450.jpg",
        picture675: "./img/jpg/product/ApportMinerauxIllusText675.jpg",
        picture900: "./img/jpg/product/ApportMinerauxIllusText900.jpg"
      },
      {
        id: "2cremeDay",
        subTitle: "Protégez votre peau",
        text: "Notre crème combat efficacement la sécheresse cutanée en maintenant un niveau optimal d'hydratation. Elle prévient ainsi la déshydratation, laissant votre peau douce et veloutée jour après jour. En renforçant la barrière cutanée naturelle, elle offre une protection contre les agressions extérieures, tels que les radicaux libres responsables du vieillissement prématuré, ainsi que les rayons UV nocifs du soleil."
      },
      {
        id: "3cremeDay",
        subTitle: "Offrez-vous une crème aux mille vertus",
        text: "Notre Crème Hydratante d'Exception est bien plus qu'un simple soin pour la peau. En plus de son action hydratante intense, elle protège votre épiderme des agressions extérieures et lui offre une barrière naturelle contre le vieillissement prématuré. Grâce à sa formule ciblée, elle réduit les tâches sombres, lisse les irrégularités du teint et atténue les imperfections liées à l'acné, laissant votre peau éclatante, uniforme et purifiée. Offrez-vous le luxe de cette crème aux mille vertus pour une peau resplendissante de santé et de beauté, jour après jour."
      },
      {
        id: "4cremeDay",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5cremeDay",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "cremeDay0",
        pictureLove: "./img/jpg/product/decontaminant.jpg",
        textLove:
          "Découvrez le secret d'une peau resplendissante de beauté avec notre produit doux et efficace. En éliminant délicatement les peaux mortes et les impuretés, il révèle un teint frais et radieux. Spécialement conçu pour resserrer les pores et affiner la texture de votre peau, il offre une peau plus lisse et uniforme. De plus, notre formule apaise les yeux fatigués, offrant un regard reposé et éclatant de vitalité. Testé sous contrôle dermatologique, notre produit garantit une tolérance optimale pour tous les types de peau."
      },
      {
        id: "cremeDay1",
        pictureLove: "./img/jpg/product/cremeNight.jpg",
        textLove:
          "Découvrez notre crème de nuit révolutionnaire qui assure une régénération cellulaire complète en stimulant et restaurant le processus cellulaire de votre peau pendant la nuit. Grâce à sa technologie liposomale avancée, elle hydrate en profondeur, lissant les ridules et les signes de relâchement cutané. Elle cible également les tâches et les décolorations, atténuant progressivement les imperfections pour un teint uniforme et éclatant. Enrichie en actifs antioxydants, elle lutte efficacement contre les signes visibles de l'âge, vous offrant une peau jeune et radieuse."
      },
      {
        id: "cremeDay2",
        pictureLove: "./img/jpg/product/serumComplet.jpg",
        textLove:
          "Découvrez notre sérum complet, une révolution dans les soins de la peau avec 9 brevets exclusifs. Grâce à la technologie liposomale, il hydrate en profondeur pour une peau confortable et revitalisée. Ses actifs spécifiques préservent l'élasticité et la fermeté, stimulant la production de collagène pour un teint plus jeune et tonique. Les décolorations et les rides sont atténuées, redonnant éclat et uniformité à votre teint. En renforçant la barrière cutanée, votre peau est mieux protégée des agressions extérieures."
      },
      {
        id: "cremeDay3",
        pictureLove: "./img/jpg/product/serumFlash.jpg",
        textLove:
          "Dites adieu au visage fatigué et endormi grâce à notre sérum révolutionnaire. Sa formule agit rapidement pour réduire visiblement les poches sous les yeux, corriger les cernes et atténuer les poches. En lissant les rides et ridules, il vous offre une peau plus jeune et ferme. Notre sérum puissant lifte et raffermit la peau délicate autour des yeux, vous offrant un regard éclatant et rajeuni. Les résultats sont visibles jusqu'à 8 heures après l'application, et avec une utilisation régulière sur 28 jours, les résultats seront encore plus remarquables pour une transformation durable de la zone des yeux."
      },
      {
        id: "cremeDay4",
        pictureLove: "./img/jpg/product/eauTonique.jpg",
        textLove:
          "Une peau intensément hydratée, adoucie et apaisée, vous offrant confort et bien-être tout au long de la journée. Notre eau tonique agit efficacement pour resserrer les pores, minimiser les imperfections et apaiser les irritations, laissant votre peau visiblement plus uniforme et raffinée. Sans paraben, alcool ni parfums artificiels, notre formule respecte votre peau et l'environnement pour une expérience de soin pure et sûre. Optez pour ce produit tout-en-un et profitez d'une peau épanouie, sans compromis sur la qualité et le respect de votre bien-être. "
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "./img/jpg/product/apportMineraux.jpg",
  colors: {
    textColor: "#0246a4",
    titleColorInSummary: "#003459",
    bgColorInSummary: "#68a6d0"
  },
  inSummary: [
    {
      id: "CDiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "CDiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "CDiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "CDiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "CDiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
