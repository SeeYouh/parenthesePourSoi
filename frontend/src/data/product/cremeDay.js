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
        picture450: "/img/jpg/product/cremeDayIllusText450.jpg",
  picture225: "/img/jpg/product/cremeDayIllusText225.jpg",
        picture675: "/img/jpg/product/cremeDayIllusText675.jpg",
        picture900: "/img/jpg/product/cremeDayIllusText900.jpg"
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
        link: "decontaminant",
        pictureLove: "/img/jpg/product/decontaminant.jpg",
  pictureLove264: "/img/jpg/product/decontaminant264.jpg",
  pictureLove400: "/img/jpg/product/decontaminant400.jpg",
        textLove:
          "Le secret d'une peau resplendissante de beauté passe par notre produit doux et efficace. En éliminant délicatement les peaux mortes et les impuretés, il révèle un teint frais et radieux. Spécialement conçu pour resserrer les pores et affiner la texture de votre peau, il offre une peau plus lisse et uniforme. De plus, notre formule apaise les yeux fatigués, offrant un regard reposé et éclatant de vitalité. Testé sous contrôle dermatologique, notre produit garantit une tolérance optimale pour tous les types de peau."
      },
      {
        id: "cremeDay1",
        link: "cremeNight",
        pictureLove: "/img/jpg/product/cremeNight.jpg",
  pictureLove264: "/img/jpg/product/cremeNight264.jpg",
  pictureLove400: "/img/jpg/product/cremeNight400.jpg",
        textLove:
          "Notre crème de nuit est révolutionnaire car elle assure une régénération cellulaire complète en stimulant et restaurant le processus cellulaire de votre peau pendant la nuit. Grâce à sa technologie liposomale avancée, elle hydrate en profondeur, lissant les ridules et les signes de relâchement cutané. Elle cible également les tâches et les décolorations, atténuant progressivement les imperfections pour un teint uniforme et éclatant. Enrichie en actifs antioxydants, elle lutte efficacement contre les signes visibles de l'âge, vous offrant une peau jeune et radieuse."
      },
      {
        id: "cremeDay2",
        link: "serumComplet",
        pictureLove: "/img/jpg/product/serumComplet.jpg",
  pictureLove264: "/img/jpg/product/serumComplet264.jpg",
  pictureLove400: "/img/jpg/product/serumComplet400.jpg",
        textLove:
          "Notre sérum complet est une révolution dans les soins de la peau avec 9 brevets exclusifs. Grâce à la technologie liposomale, il hydrate en profondeur pour une peau confortable et revitalisée. Ses actifs spécifiques préservent l'élasticité et la fermeté, stimulant la production de collagène pour un teint plus jeune et tonique. Les décolorations et les rides sont atténuées, redonnant éclat et uniformité à votre teint. En renforçant la barrière cutanée, votre peau est mieux protégée des agressions extérieures."
      },
      {
        id: "cremeDay3",
        link: "serumFlash",
        pictureLove: "/img/jpg/product/serumFlash.jpg",
  pictureLove264: "/img/jpg/product/serumFlash264.jpg",
  pictureLove400: "/img/jpg/product/serumFlash400.jpg",
        textLove:
          "Visage fatigué et endormi ? Voici un sérum révolutionnaire. Sa formule agit rapidement pour réduire visiblement les poches sous les yeux, corriger les cernes et atténuer les poches. En lissant les rides et ridules, il vous offre une peau plus jeune et ferme. Notre sérum puissant lifte et raffermit la peau délicate autour des yeux, vous offrant un regard éclatant et rajeuni. Les résultats sont visibles jusqu'à 8 heures après l'application, et avec une utilisation régulière sur 28 jours, les résultats seront encore plus remarquables pour une transformation durable de la zone des yeux."
      },
      {
        id: "cremeDay4",
        link: "eauTonique",
        pictureLove: "/img/jpg/product/eauTonique.jpg",
  pictureLove264: "/img/jpg/product/eauTonique264.jpg",
  pictureLove400: "/img/jpg/product/eauTonique400.jpg",
        textLove:
          "Une peau intensément hydratée, adoucie et apaisée, vous offrant confort et bien-être tout au long de la journée. Notre eau tonique agit efficacement pour resserrer les pores, minimiser les imperfections et apaiser les irritations, laissant votre peau visiblement plus uniforme et raffinée. Sans paraben, alcool ni parfums artificiels, notre formule respecte votre peau et l'environnement pour une expérience de soin pure et sûre. Optez pour ce produit tout-en-un et profitez d'une peau épanouie, sans compromis sur la qualité et le respect de votre bien-être. "
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/cremeDay.jpg",
  picture264: "/img/jpg/product/cremeDay264.jpg",
  picture400: "/img/jpg/product/cremeDay400.jpg",
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
      id: "CDiS0",
      title: "Santé",
      text: (
        <ul>
          <li>
            Diminuer les irritations, les tiraillements, les rougeurs et
            démangeaisons de la peau du visage.
          </li>
        </ul>
      )
    },
    {
      id: "CDiS1",
      title: "Beauté",
      text: (
        <ul>
          <li>Hydrate en profondeur</li>
          <li>Évite la sécheresse de la peau</li>
          <li>Estompe les tâches sombres</li>
          <li>Diminue l’acné</li>
          <li>Donne un teint de peau plus régulier</li>
          <li>Améliore la barrière cutanée</li>
          <li>Protège des radicaux libres et des UV du soleil</li>
        </ul>
      )
    }
  ]
};
