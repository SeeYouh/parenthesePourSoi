import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const collagenoni = {
  nameProduct: "Collagènoni",
  id: "collagenoni",

  summary: {
    title: "Un produit de santé globale qui fait rajeunir",
    paragraph: [
      {
        id: "0Collagènoni",
        subTitle: "Découvrez un protéine essentielle",
        text: "Le collagène est une protéine essentielle qui compose la structure de la peau mais également des cheveux, des ongles, des cartilages, des muscles, des tendons, des os, des articulations et des vaisseaux sanguins. A partir de l’âge de 25 ans, nous perdons environ 1% de collagène chaque année. Cette protéine n’est pas renouvelée naturellement. C’est ce que l’on appelle le vieillissement cutané."
      },
      {
        id: "1Collagènoni",
        subTitle: "Améliorez l’aspect de votre peau",
        text: [
          "Notre produit favorise le renouvellement cellulaire. En stimulant ce processus naturel, il aide à éliminer les cellules mortes et à régénérer la peau, vous offrant ainsi un teint plus frais, plus lumineux et plus éclatant. Notre collagène marin aide également à diminuer l'apparence des tâches pigmentaires, vous offrant un teint plus uniforme et éclatant.",
          "En augmentant l'élasticité de la peau, il lui procure une hydratation en profondeur, réduisant ainsi les signes de sécheresse et de déshydratation. Il lutte efficacement contre les rides, ridules et cernes, vous permettant de retrouver une peau lisse, ferme et éclatante."
        ],
        picture675: "/img/jpg/product/CollagenoniIllusText675.jpg",
        picture450: "/img/jpg/product/CollagenoniIllusText450.jpg",
        picture900: "/img/jpg/product/CollagenoniIllusText900.jpg"
      },
      {
        id: "2Collagènoni",
        subTitle: "Renforcez vos ongles et cheveux",
        text: "Notre collagène renforce les ongles fragiles et les cheveux ternes, en leur apportant les nutriments essentiels pour leur santé et leur vitalité."
      },
      {
        id: "3Collagènoni",
        subTitle: "Soulagement des douleurs corporelles",
        text: "La synergie du collagène marin avec le Noni, un fruit de Tahiti aux vertus multiples, permet de diminuer les douleurs corporelles, vous offrant un soulagement naturel pour les tensions musculaires et les inconforts articulaires."
      },
      {
        id: "4Collagènoni",
        subTitle: "Retrouvez une seconde jeunesse",
        text: "Optez pour ce produit, c’est retrouver une peau plus ferme, une apparence rajeunie et un bien-être intérieur total."
      },
      {
        id: "5Collagènoni",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "6Collagènoni",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "collagenoni0",
        link: "regenerateurCellulaire",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Notre produit est un best-seller pour une peau éclatante et jeune. Grâce à sa régénération cellulaire, il améliore l'élasticité et la fermeté. Il traite divers problèmes cutanés comme la cellulite, les vergetures, l'acné et l'eczéma. En plus, il soutient la santé globale en renforçant le système immunitaire et en favorisant la formation du collagène. Il stimule également l'énergie naturelle, réduit la rétention d'eau et soulage les symptômes d'allergies et d'asthme. Un allié complet pour une peau épanouie et une vitalité renouvelée."
      },
      {
        id: "collagenoni1",
        link: "apportQ10",
        pictureLove: "/img/jpg/product/apportQ10.jpg",
        textLove:
          "Ce produit possède de puissantes propriétés antioxydantes pour protéger les cellules des radicaux libres, traiter les varices et la cellulite, et accélérer la guérison des plaies. Le CoQ10 soutient la santé cardiovasculaire, renforce le système immunitaire, et améliore la mémoire et la fonction cognitive. Il agit également sur la peau en favorisant la régénération et en luttant contre les signes du vieillissement, offrant une apparence plus jeune et éclatante. De plus, il augmente la production d'énergie cellulaire, réduisant ainsi la fatigue et augmentant votre vitalité pour les activités quotidiennes."
      },
      {
        id: "collagenoni2",
        link: "gelNettoyant",
        pictureLove: "/img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Après une journée bien remplie, notre produit élimine en douceur les saletés, le maquillage et les impuretés accumulées, laissant votre peau fraîche et propre. Sa formule hydratante assure une peau douce et veloutée, sans sensation de tiraillement. Grâce à ses actifs ciblés, il combat les imperfections, réduit les inflammations et prévient l'apparition de nouvelles éruptions cutanées. Testé dermatologiquement, notre produit convient à tous les types de peau, préservant ainsi votre barrière cutanée naturelle pour une peau saine et protégée."
      },
      {
        id: "collagenoni3",
        link: "serumFlash",
        pictureLove: "/img/jpg/product/serumFlash.jpg",
        textLove:
          "Notre sérum agit en 90 secondes pour réduire visiblement les poches sous les yeux, éliminant les cernes violacés ou marrons pour un regard frais et revitalisé. Il atténue également les signes du vieillissement en lissant les rides et ridules pour une peau plus jeune et ferme. Grâce à sa formule puissante, il lifte et raffermit la peau délicate autour des yeux, offrant un teint éclatant et une apparence rajeunie. Vous constaterez des résultats immédiats jusqu'à 8 heures après l'application et une transformation durable de la zone des yeux après 28 jours d'utilisation régulière."
      },
      {
        id: "collagenoni4",
        link: "serumComplet",
        pictureLove: "/img/jpg/product/serumComplet.jpg",
        textLove:
          "Avec 9 brevets exclusifs, notre sérum est une révolution dans les soins de la peau. Il utilise la technologie liposomale pour hydrater et nourrir votre peau en profondeur. Sa formule spécifique préserve l'élasticité et la fermeté de la peau en stimulant la production de collagène, pour un teint plus tonique et rebondi, donnant ainsi une apparence plus jeune et revitalisée. Les décolorations et les imperfections du teint sont corrigées grâce à son action innovante qui redonne éclat et uniformité à la peau, tandis que les rides et ridules sont atténuées pour une apparence plus lisse et jeune."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/collagenoni.jpg",
  picture264: "/img/jpg/product/collagenoni264.jpg",
  picture400: "/img/jpg/product/collagenoni400.jpg",
  colors: {
    textColor: "#9f348b",
    titleColorInSummary: "#9f348b",
    linkTextColor: "#9f348b",
    bgColorInSummary0: "#bc71ae",
    bgColorInSummary1: "#f3e7f1",
    linearGradient0: "linear-gradient(105deg, #bc71ae, #ffa9e8)",
    linearGradient1: "linear-gradient(to right, #cf9ac5, #f3e7f1)",
    shadowColor: "#f3e7f1"
  },
  inSummary: [
    {
      id: "CniS0",
      title: "Santé",
      text: (
        <ul>
          <li>Diminue les douleurs articulaires, musculaires et osseuses</li>
          <li>Permet le renouvellement de la peau</li>
        </ul>
      )
    },
    {
      id: "CniS1",
      title: "Beauté",
      text: (
        <ul>
          <li>Hydrate la peau et la lifte</li>
          <li>Améliore les vergetures, la cellulite et les varices</li>
          <li>Combat les peaux à tendance grasse ou sèche au contraire</li>
          <li>
            Lutte contre les rides, les ridules et cernes violacées et marrons
          </li>
          <li>Estompe les cicatrices</li>
          <li>Diminue les tâches</li>
          <li>Rend le teint lumineux et éclatant</li>
          <li>Renforce les ongles et les cheveux</li>
        </ul>
      )
    }
  ]
};
