import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const serumFlash = {
  nameProduct: "Sérum Flash",
  id: "serumFlash",

  summary: {
    title: "Fini le visage fatigué et endormi",
    paragraph: [
      {
        id: "0serumFlash",
        subTitle: "Sublimez votre visage en 90 secondes",
        text: "Découvrez notre sérum flash, une solution rapide et efficace pour réduire visiblement les poches sous les yeux, lissez vos rides et réhaussez vos paupières. Grâce à notre formule innovante, notre sérum puissant vous offre une peau jeune et plus ferme."
      },
      {
        id: "1serumFlash",
        subTitle: "Gommez les signes",
        text: [
          "Notre sérum agit rapidement pour vous offrir une régénération immédiate et un regard frais. Les poches sous les yeux sont visiblement atténuées grâce à l'action ciblée de notre formule. Vous retrouverez une zone des yeux revitalisée, débarrassée des signes de fatigue.",
          "Notre sérum cible spécifiquement les cernes violacés ou marrons, leur redonnant une apparence plus lumineuse et uniforme. Les cernes disgracieux ne seront plus qu'un lointain souvenir, vous offrant un teint éclatant et une apparence rajeunie.",
          "L'action puissante de notre sérum aide à lifter et raffermir la peau vous offrant une peau plus jeune. Il agit sur les rides et les ridules pour les lisser et les estomper. Les signes du vieillissement sont estompés, vous laissant avec une peau ferme et éclatante."
        ],
        picture450: "/img/jpg/product/serumFlashIllusText450.jpg",
        picture675: "/img/jpg/product/serumFlashIllusText675.jpg",
        picture900: "/img/jpg/product/serumFlashIllusText900.jpg"
      },
      {
        id: "2serumFlash",
        subTitle: "Améliorez votre peau",
        text: "Vous constaterez des résultats immédiats après l'application du sérum 8 heures. Mais les bienfaits ne s'arrêtent pas là. Avec une utilisation régulière sur 28 jours, les résultats seront encore plus remarquables, vous offrant une transformation durable sur les zones concernées."
      },
      {
        id: "3serumFlash",
        subTitle: "Embellissez votre visage",
        text: "Découvrez notre formule avancée, le Sérum flash, conçu pour sublimer votre regard et réduire les imperfections du visage. Réduisez visiblement les poches sous les yeux et corrigez les cernes pour un teint lumineux. Lissez les rides et ridules pour une peau jeune et ferme. Profitez de résultats immédiats et durables, et offrez-vous un regard revitalisé et éblouissant. N'attendez plus pour révéler votre beauté éclatante avec notre Sérum Regard Instant Lift !"
      },
      {
        id: "4serumFlash",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5serumFlash",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "serumFlash0",
        link: "cremeDay",
        pictureLove: "/img/jpg/product/cremeDay.jpg",
        textLove:
          "Notre crème hydratante aux multiples bienfaits apaise instantanément la peau, lui offrant souplesse et éclat. Sa formule riche lutte contre la sécheresse en maintenant une hydratation optimale et renforce la barrière cutanée pour la protéger des agressions extérieures. Ciblant les tâches sombres, elle éclaircit et unifie le teint. Pour une peau nette, débarrassée de l'acné, choisissez notre crème exceptionnelle pour un éclat radieux et une texture uniforme."
      },
      {
        id: "serumFlash1",
        link: "gelNettoyant",
        pictureLove: "/img/jpg/product/gelNettoyant.jpg",
        textLove:
          "La formule du gel nettoyant élimine en douceur les saletés, le maquillage et les impuretés accumulées, laissant votre peau fraîche et prête à se régénérer pendant la nuit. Vous apprécierez une peau douce et veloutée, sans tiraillement, car notre formule hydratante respecte l'équilibre cutané et préserve la barrière naturelle pour une peau saine et protégée. Grâce à ses actifs ciblés, il combat efficacement les imperfections et prévient les éruptions cutanées, vous offrant une peau nette et purifiée. Testé sous contrôle dermatologique, notre produit garantit une efficacité et une sécurité optimales pour tous les types de peau. Profitez d'une peau éclatante de beauté et en pleine santé en choisissant notre formule de confiance."
      },
      {
        id: "serumFlash2",
        link: "volumateurCils",
        pictureLove: "/img/jpg/product/volumateurCils.jpg",
        textLove:
          "Des cils naturellement longs et épais sont possibles grâce à notre sérum enrichi d'agents hydratants essentiels. Sa formule renforce leur structure, protégeant vos cils des dommages et de la casse. En stimulant leur croissance, il vous offre des cils plus forts, plus longs et plus épais pour un regard irrésistible. Testée sous contrôle dermatologique et ophtalmologique, notre formule sécurisée prend soin de vos cils en profondeur, les nourrissant et les protégeant des agressions environnementales. Découvrez des cils magnifiés et un regard captivant qui ne passera pas inaperçu !"
      },
      {
        id: "serumFlash3",
        link: "glossRepulpant",
        pictureLove: "/img/jpg/product/glossRepulpant.jpg",
        textLove:
          "Vos lèvres seront sublimées grâce à notre gloss concentré de soin. Enrichi d'actifs nourrissants, il repulpe instantanément vos lèvres, les rendant pulpeuses et volumineuses. Sa formule lisse les ridules, vous offrant des lèvres plus jeunes et douces. Approuvé par le label « Good Face Project » et offrant une sensation rafraîchissante, notre produit assure une qualité irréprochable pour sublimer votre sourire éblouissant."
      },
      {
        id: "serumFlash4",
        link: "eauTonique",
        pictureLove: "/img/jpg/product/eauTonique.jpg",
        textLove:
          "Notre soin cutané nourri d'agents hydratants et apaisants d'origine naturelle régène votre peau en profondeur. Résultat ? Une peau intensément hydratée, adoucie et apaisée, vous procurant confort et bien-être tout au long de la journée. Notre eau tonique resserre les pores, minimise les imperfections et apaise les irritations, laissant votre peau visiblement plus uniforme et affinée. Sans paraben, alcool ni parfum artificiel, notre formule respecte votre peau et l'environnement pour une expérience de soin pure et sûre. Optez pour ce produit tout-en-un et profitez d'une peau épanouie, sans compromis sur la qualité et le respect de votre bien-être."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/serumFlash.jpg",
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
      id: "SFiS0",
      title: "Beauté",
      text: (
        <ul>
          <li>
            Régénère immédiatement les poches sous les yeux, les rides, les
            ridules, les cernes
          </li>
          <li>Lifte et raffermit la peau pour un teint plus éclatant</li>
          <li>Son effet dure jusqu’à 8h après la pose.</li>
          <li>
            Des résultats supplémentaires sont visibles après 28 jours
            d’utilisation régulière.
          </li>
        </ul>
      )
    }
  ]
};
