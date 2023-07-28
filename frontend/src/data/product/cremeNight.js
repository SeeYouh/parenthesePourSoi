import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const cremeNight = {
  nameProduct: "Crème night",
  summary: {
    title: "Une régénération cellulaire complète qui vous émerveillera",
    paragraph: [
      {
        id: "0cremeNight",
        subTitle: "Réveillez votre beauté",
        text: "Découvrez notre crème de nuit, un véritable secret de beauté pour stimuler et restaurer le processus cellulaire de votre peau pendant la nuit. Pendant cette période de repos, votre peau est naturellement plus réceptive aux soins, et notre crème agit en profondeur pour favoriser la régénération des cellules. Le résultat ? Une peau renouvelée, radieuse et éclatante de jeunesse."
      },
      {
        id: "1cremeNight",
        subTitle: "Repulpez votre peau",
        text: [
          "Grâce à sa technologie liposomale avancée, notre crème pénètre au cœur même de l'épiderme, apportant une hydratation exceptionnelle à votre peau. Elle nourrit en profondeur, offrant une humidité revitalisante de l'intérieur. En agissant comme un puissant soin raffermissant, elle lisse visiblement les ridules et les signes de relâchement cutané. Au réveil, vous ressentirez une peau repulpée, souple et pleine de vie.",
          "Notre crème de nuit cible efficacement les tâches et les décolorations visibles de la peau. En estompant progressivement ces imperfections disgracieuses, elle révèle un teint plus uniforme et éclatant. Spécialement formulée pour être efficace sur le masque de grossesse, elle agit en douceur pour réduire les taches pigmentaires liées à la grossesse. Vous retrouverez une peau éclatante, même après la période de grossesse."
        ],
        picture450: "./img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "./img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "./img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        id: "2cremeNight",
        subTitle: "Luttez contre les signes de l’âge",
        text: "Dotée de puissants actifs antioxydants, notre crème de nuit lutte activement contre les signes visibles de l'âge tels que les rides et les ridules. En prévenant le vieillissement prématuré de la peau, elle vous offre un teint jeune et éclatant durablement. En intégrant notre crème de nuit à votre routine de soin, vous protégez votre peau des agressions extérieures et préserver sa jeunesse."
      },
      {
        id: "3cremeNight",
        subTitle: "Offrez un soin de nuit d’exception à votre peau",
        text: "Révélez votre beauté épanouie avec notre crème de nuit régénérante. Profitez d'une hydratation exceptionnelle, d'un teint uniforme et lumineux, ainsi que d'une protection puissante contre les signes de l'âge. N'attendez plus pour offrir à votre peau un soin de nuit d'exception. Réveillez-vous chaque matin avec une peau resplendissante de santé et d'éclat."
      },
      {
        id: "4cremeNight",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5cremeNight",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "cremeNight0",
        pictureLove: "./img/jpg/product/huildeDemaquillante.jpg",
        textLove:
          "Explorez notre huile polyvalente qui prend soin de votre peau en profondeur. Elle agit comme un nettoyant, un démaquillant et un décontaminant tout-en-un, éliminant efficacement saletés, impuretés et polluants pour laisser votre peau fraîche et revitalisée. En plus d'être un démaquillant efficace, elle se distingue par l'absence d'huiles minérales qui pourraient obstruer vos pores. Cette formule a été testée dermatologiquement pour vous offrir une expérience de soin optimale et sécuritaire."
      },
      {
        id: "cremeNight1",
        pictureLove: "./img/jpg/product/cremeDay.jpg",
        textLove:
          "Découvrez notre crème hydratante aux nombreux avantages. Elle apaise instantanément la peau, la laissant souple et éclatante. Sa formule riche combat la sécheresse en maintenant une hydratation optimale et renforce la barrière cutanée pour protéger des agressions extérieures. En ciblant les tâches sombres, elle éclaircit et unifie le teint. Pour une peau nette, débarrassée de l'acné, choisissez notre crème d'exception pour un éclat radieux et uniforme."
      },
      {
        id: "cremeNight2",
        pictureLove: "./img/jpg/product/masqueNuit.jpg",
        textLove:
          "Découvrez notre masque de nuit révolutionnaire utilisant la technologie Breathable Barrier® qui a été scientifiquement éprouvée pour améliorer visiblement la santé de votre peau. Testé sous contrôle dermatologique, il est considéré comme étant plus efficace que ses concurrents en vente libre. Grâce à ses propriétés antioxydantes et régénératrices, il combat les signes du vieillissement en réduisant l'apparence des rides et des ridules, améliore les imperfections de la peau, resserre les pores et rehausse la texture, pour vous offrir une peau plus saine et éclatante."
      },
      {
        id: "cremeNight3",
        pictureLove: "./img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Choisissez notre gel nettoyant pour sa formule douce et efficace qui élimine en douceur les saletés, le maquillage et les impuretés accumulées, laissant votre peau fraîche et prête à se régénérer pendant la nuit. Grâce à ses actifs ciblés, il combat efficacement les imperfections et prévient l'apparition de nouvelles éruptions cutanées, vous offrant ainsi une peau nette et purifiée. Nous avons soumis notre produit à des tests rigoureux sous contrôle dermatologique pour garantir sa sécurité et son efficacité, le rendant adapté à tous les types de peau."
      },
      {
        id: "cremeNight4",
        pictureLove: "./img/jpg/product/serumComplet.jpg",
        textLove:
          "Découvrez notre sérum complet qui marque une véritable révolution dans le domaine des soins de la peau, avec ses 9 brevets exclusifs. Grâce à la technologie liposomale avancée, notre sérum offre une hydratation en profondeur, procurant une sensation de confort et de revitalisation à votre peau. Les actifs spécifiques de notre sérum agissent en harmonie pour préserver l'élasticité et la fermeté de votre peau. Ils stimulent également la production de collagène, contribuant ainsi à un teint plus jeune et tonique. Voyez les décolorations et les rides s'atténuer progressivement. En renforçant la barrière cutanée, notre sérum protège votre peau des agressions extérieures, offrant une meilleure défense face aux facteurs environnementaux."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "./img/jpg/product/heRafraichissant.jpg",
  colors: {
    textColor: "#30d1d9"
  },
  inSummary: [
    {
      id: "CNiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "CNiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "CNiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "CNiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "CNiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
