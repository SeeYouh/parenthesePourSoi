import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const eauTonique = {
  nameProduct: "Eau Tonique",  id: "eauTonique",

  summary: {
    title: "Un soin cutané parfaitement équilibré",
    paragraph: [
      {
        id: "0eauTonique",
        subTitle: "Apaisez votre peau",
        text: "Notre produit est un véritable élixir de bien-être pour votre peau. Enrichi d'agents hydratants et apaisants d'origine naturelle, il pénètre en profondeur pour nourrir et restaurer votre peau en profondeur. Grâce à cette action bienfaisante, votre peau est intensément hydratée, adoucie et apaisée, vous offrant une sensation de confort et de bien-être qui dure tout au long de la journée."
      },
      {
        id: "1eauTonique",
        subTitle: "Embellissez votre peau",
        text: [
          "L'eau tonique est un véritable allié pour sublimer votre peau et lui donner un éclat radieux. Sa principale action consiste à resserrer les pores de la peau, ce qui permet de minimiser l'apparence des imperfections et d'obtenir un teint plus uniforme et raffiné. En resserrant les pores, l'eau tonique aide également à réguler la production de sébum, ce qui est particulièrement bénéfique pour les personnes ayant une peau sujette aux brillances et aux excès de sébum.",
          "Cependant, ses bienfaits ne s'arrêtent pas là. La formule douce et apaisante de l'eau tonique a été spécialement élaborée pour calmer les irritations cutanées, réduire les rougeurs et apaiser les éruptions cutanées. Cela en fait un produit idéal pour les personnes ayant une peau sensible ou sujette aux rougeurs et aux inflammations. En apaisant la peau, l'eau tonique favorise la régénération cellulaire et contribue à restaurer l'équilibre naturel de la peau.",
          "En utilisant régulièrement l'eau tonique dans votre routine de soins de la peau, vous pourrez constater une nette amélioration de l'apparence de votre peau. Elle retrouve son éclat, sa douceur et son harmonie, vous offrant ainsi un teint plus apaisé et équilibré. En outre, l'eau tonique peut être utilisée avant l'application du maquillage pour préparer la peau et créer une base lisse, ce qui permet à votre maquillage de tenir plus longtemps et de mieux se fondre avec votre peau."
        ],
        picture450: "./img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "./img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "./img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        id: "2eauTonique",
        subTitle: "Appréciez la qualité de ce produit",
        text: "Nous sommes fiers de vous proposer un produit qui respecte votre peau et l'environnement. Notre formule est exempte de paraben, d'alcool et de parfums artificiels, assurant une tolérance optimale et une expérience de soin pure et sûre. Vous pourrez ainsi profiter de tous les bienfaits de notre eau tonique en toute tranquillité, en sachant qu'elle est conçue avec le plus grand soin pour votre bien-être."
      },
      {
        id: "3eauTonique",
        subTitle: "Nourrissez votre peau",
        text: "Avec notre eau tonique enrichie d'agents hydratants et apaisants d'origine naturelle, découvrez le secret pour une peau intensément nourrie, adoucie et apaisée. Elle agit en profondeur pour resserrer les pores et réduire les imperfections, tout en apaisant les irritations et les rougeurs. Vous retrouvez ainsi une peau plus harmonieuse et éclatante, avec une sensation de confort et de bien-être qui vous accompagne tout au long de la journée. Profitez d'un soin de qualité, respectueux de votre peau et de l'environnement, pour une peau épanouie sans compromis."
      },
      {
        id: "4eauTonique",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5eauTonique",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "eauTonique0",
        pictureLove: "./img/jpg/product/decontaminant.jpg",
        textLove:
          "Découvrez notre secret pour une peau resplendissante de beauté grâce à notre produit doux et efficace. Il élimine en douceur les peaux mortes et les impuretés, révélant un teint frais et radieux. Spécialement conçu pour resserrer les pores et affiner la texture de la peau, il offre un teint plus lisse et uniforme. Notre décontaminant cible les points noirs en désobstruant les pores, réduisant les imperfections et les tâches pigmentaires pour un teint éclatant et uniforme. De plus, notre formule apaise les yeux fatigués, offrant un regard reposé et éclatant. Testé sous contrôle dermatologique, notre produit est adapté à tous les types de peau. N'attendez plus pour sublimer votre peau avec notre formule de soin."
      },
      {
        id: "eauTonique1",
        pictureLove: "./img/jpg/product/cremeDay.jpg",
        textLove:
          "Découvrez notre crème hydratante aux multiples avantages. Elle procure un apaisement instantané à la peau, la laissant souple et éclatante. Grâce à sa formule riche, elle combat efficacement la sécheresse en maintenant une hydratation optimale et renforce la barrière cutanée pour protéger contre les agressions extérieures. En ciblant les tâches sombres, elle éclaircit et uniformise le teint, vous offrant une peau nette et débarrassée de l'acné. Choisissez notre crème d'exception pour un éclat radieux et une peau uniforme."
      },
      {
        id: "eauTonique2",
        pictureLove: "./img/jpg/product/baumesLevres.jpg",
        textLove:
          "Optez pour notre sérum révolutionnaire et dites adieu au visage fatigué et endormi. Il agit rapidement pour réduire visiblement les poches sous les yeux, corriger les cernes et atténuer les poches. En lissant les rides et ridules, il vous offre une peau plus jeune et ferme. Notre formule puissante lifte et raffermit la peau délicate autour des yeux, vous offrant un regard éclatant et rajeuni. Les résultats sont visibles jusqu'à 8 heures après l'application, et avec une utilisation régulière sur 28 jours, les effets seront encore plus remarquables pour une transformation durable de la zone des yeux. Découvrez cette formule avancée pour sublimer votre regard et retrouver une apparence resplendissante"
      },
      {
        id: "eauTonique3",
        pictureLove: "./img/jpg/product/serumComplet.jpg",
        textLove:
          "Découvrez notre sérum complet révolutionnaire, doté de 9 brevets exclusifs, pour une peau éclatante et revitalisée. Grâce à la technologie liposomale, il hydrate en profondeur, préservant l'élasticité et la fermeté tout en stimulant la production de collagène pour un teint plus jeune et tonique. Les décolorations et les rides sont atténuées, redonnant éclat et uniformité à votre peau. Renforçant la barrière cutanée, il offre une meilleure protection contre les agressions extérieures. Offrez à votre peau une expérience de soin incomparable avec notre sérum exclusif pour des résultats qui parlent d'eux-mêmes. Découvrez la révolution des soins de la peau dès maintenant !"
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "./img/jpg/product/heRafraichissant.jpg",
  colors: {
    textColor: "#30d1d9",
    linkTextColor: "#30d1d9",
    titleColorInSummary: "#003459",
    bgColorInSummary: "#68a6d0"
  },
  inSummary: [
    {
      id: "ETiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "ETiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "ETiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "ETiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "ETiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
