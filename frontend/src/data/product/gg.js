import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const gg = {
  nameProduct: "GG",  id: "gg",

  summary: {
    title: "Une abondance de bien-être avec notre concentré de légumes",
    paragraph: [
      {
        id: "0GG",
        subTitle: "Révélez votre vitalité avec notre secret végétal",
        text: "Voici une véritable potion magique composée de légumes soigneusement sélectionnés pour vous offrir une santé éclatante et une harmonie intérieure incomparable. Découvrez comment 2 cuillères de notre élixir correspondent à 900 grammes de légumes, révélant ainsi la puissance de notre secret végétal pour votre vitalité."
      },
      {
        id: "1GG",
        subTitle: "Prenez soin de vos organes",
        text: [
          "Intégrez notre joyau végétal dans votre quotidien pour préserver la santé de votre cœur. Les légumes regorgent de bienfaits qui favorisent un taux de cholestérol équilibré, vous permettant de vous sentir léger comme une plume. Notre élixir végétal est une protection complète pour votre cœur, vos os et votre cerveau, vous accompagnant vers une santé globale éclatante et rayonnante.",
          "Notre produit constitue un combo de légumes aux bienfaits multiples pour votre santé. Il est un allié puissant en apportant les vitamines et minéraux essentiels au corps de manière efficace. Finies les carences en fer et en vitamines grâce à notre trésor naturel de nutriments. En plus, nos légumes sélectionnés ont un effet détoxifiant qui nettoie les déchets de l’organisme, favorisant ainsi un système digestif sain, un transit intestinal facilité et stoppant les remontées acides. Profitez d'une santé optimale avec notre élixir qui prend soin de vous et de votre organisme."
        ],
        picture450: "./img/jpg/product/ApportMinerauxIllusText450.jpg",
        picture675: "./img/jpg/product/ApportMinerauxIllusText675.jpg",
        picture900: "./img/jpg/product/ApportMinerauxIllusText900.jpg"
      },
      {
        id: "2GG",
        subTitle: "Obtenez une cure minceur optimale",
        text: "Vous rêvez d'une silhouette éblouissante ? Dites adieu aux toxines qui vous encombrent et accueillez la pureté en vous. Grâce à la richesse en antioxydants et en fibres de nos légumes, votre corps se libère des déchets accumulés, vous laissant sentir revitalisé et régénéré. Nos légumes sont vos alliés minceur par excellence ! Faibles en calories mais riches en fibres, ils sont les parfaits compagnons pour une perte de poids saine et durable. Faites fondre les kilos superflus et révélez la meilleure version de vous-même !"
      },
      {
        id: "3GG",
        subTitle: "Combattez les soucis cutanés",
        text: " Notre prodigieux concentré de légumes offre une solution naturelle pour les problèmes cutanés, agissant spécifiquement sur la cellulite. Grâce à la richesse en antioxydants et en nutriments de nos légumes sélectionnés, il favorise la cicatrisation des tissus pour une guérison plus rapide et efficace. De plus, il réduit l'apparence de la cellulite, offrant ainsi une peau plus lisse et plus ferme. Dites adieu aux soucis cutanés et révélez une peau éclatante de beauté avec notre élixir magique."
      },
      {
        id: "4GG",
        text: "Offrez à votre corps et à votre esprit le privilège de s'épanouir grâce aux trésors 100% naturels que la terre nous offre. Ressentez le vibrato de la santé et du bien-être à chaque instant ! Et si vous avez des questions, n'hésitez pas à contacter notre experte en bien-être. Elle est là pour vous guider dans votre quête d'un style de vie plus naturel et sain."
      },
      {
        id: "4GG",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5GG",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "GG0",
        pictureLove: "./img/jpg/product/detox.jpg",
        textLove:
          "Si vous souhaitez entamer une cure minceur, notre produit agit comme un agent de détoxification puissant, éliminant les toxines pour une meilleure gestion du poids et une santé globale améliorée. C’est la base pour une perte de poids saine et durable."
      },
      {
        id: "GG1",
        pictureLove: "./img/jpg/product/goutteMinceur.jpg",
        textLove:
          "Des gouttes jour et nuit pour une cure minceur efficace et complète. Régule l'appétit, brûle les graisses tenaces et régule le sucre. Stimule le métabolisme, améliore l'humeur et réduit l'apparence de la cellulite. Les gouttes nuit empêchent l'accumulation de nouvelles graisses et favorisent une récupération optimale pendant le sommeil. Que demander de plus ?"
      },
      {
        id: "GG2",
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Notre produit régule votre microbiote pour un bien-être global. Il améliore la digestion, renforce le système immunitaire et prévient les maladies chroniques. Grâce à ses propriétés antioxydantes, il neutralise les toxines et améliore la flore intestinale. Il joue un rôle essentiel dans la gestion du poids, contrôlant la satiété et boostant l'énergie. Il réduit le stress, améliore le sommeil et favorise une humeur positive."
      },
      {
        id: "GG3",
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Notre booster d'énergie dynamise votre corps en stimulant votre énergie naturelle et combat efficacement la fatigue pour un sommeil réparateur. Il favorise la bonne humeur et réduit le stress, vous offrant une sensation de légèreté au quotidien. Mais pas seulement …"
      },
      {
        id: "GG4",
        pictureLove: "./img/jpg/product/PN.jpg",
        textLove:
          "Pour un délicieux smoothie, ce produit est parfait ! Il facilite la gestion du poids en offrant un équilibre nutritionnel optimal. Il contient des protéines végétales de qualité pour une digestion améliorée et une absorption de nutriments essentiels."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "./img/jpg/product/GG.jpg",
  colors: {
    textColor: "#028824",
    titleColorInSummary: "#014312",
    bgColorInSummary: "#cffddb"
  },
  inSummary: [
    {
      id: "GGiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "GGiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "GGiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "GGiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "GGiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
