import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const apportMineraux = {
  nameProduct: "Apport Minéraux",
  id: "apportMineraux",

  summary: {
    title: "Un apport de minéraux sans pareille",
    paragraph: [
      {
        id: "0apportMineraux",
        subTitle: "Apportez des minéraux à votre organisme",
        text: "Ce n’est pas moins de 32 minéraux, oligo-éléments, enzymes et super-aliments contenus dans ce produit révolutionnaire. Cette composition unique vous promet un soulagement efficace et une amélioration globale de votre bien-être."
      },
      {
        id: "1apportMineraux",
        subTitle: "Soulagez efficacement votre corps",
        text: [
          "Notre formule avancée agit en harmonie avec votre corps pour apaiser le système nerveux, vous procurant une sensation de calme et de bien-être. De plus, elle est spécialement conçue pour soulager les douleurs osseuses, musculaires et articulaires. Que ce soit en cas de douleurs chroniques ou de malaises occasionnels, notre produit offre un soulagement durable pour vous permettre de profiter pleinement de vos activités quotidiennes.",
          "L'inflammation est souvent à l'origine de diverses gênes et troubles. Notre formule avancée possède des propriétés anti-inflammatoires naturelles qui aident à réduire les inflammations dans votre corps. Cela contribue à diminuer les douleurs articulaires et les raideurs musculaires, vous offrant ainsi un confort optimal au quotidien.",
          "Notre formule avancée a démontré son efficacité pour améliorer la qualité de vie de personnes souffrant de pathologies telles que l'endométriose, la fibromyalgie et l'arthrose. Grâce à ses propriétés apaisantes et régénératrices, elle offre un soutien précieux pour atténuer les symptômes et améliorer la vie quotidienne de ceux qui en souffrent."
        ],
        picture450: "/img/jpg/product/ApportMinerauxIllusText450.jpg",
        picture675: "/img/jpg/product/ApportMinerauxIllusText675.jpg",
        picture900: "/img/jpg/product/ApportMinerauxIllusText900.jpg"
      },
      {
        id: "2apportMineraux",
        subTitle: "Régénérez vos tissus",
        text: "En plus de soulager les douleurs, notre formule avancée stimule la régénération des tissus endommagés. Elle contribue ainsi à accélérer le processus de guérison, vous permettant de récupérer plus rapidement après des blessures ou des tensions musculaires. Cela vous aide à maintenir une mobilité optimale et à retrouver votre vitalité."
      },
      {
        id: "3apportMineraux",
        subTitle: "Maintenez des ongles et des cheveux en bonne santé",
        text: "En prenant régulièrement notre formule avancée, vous bénéficiez d'un apport en nutriments essentiels qui soutiennent la santé de vos ongles et de vos cheveux. Des cheveux forts et des ongles sains sont des indicateurs d'une bonne santé globale, et notre produit vous aide à maintenir ces aspects essentiels de votre bien-être."
      },
      {
        id: "4apportMineraux",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5apportMineraux",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "apportMineraux0",
        link: "apportVitamines",
        pictureLove: "/img/jpg/product/apportVitamines.jpg",
        textLove:
          "Notre formule spéciale composée de 17 vitamines et nutriments renforce votre système immunitaire, vous protégeant ainsi des infections saisonnières telles que le rhume et la grippe. Elle prend également soin de vos yeux en préservant leur santé et en améliorant votre acuité visuelle. De plus, elle soutient la santé de vos vaisseaux sanguins en réduisant l'inflammation et en favorisant une circulation sanguine optimale. Notre produit renforce également votre cœur et vos poumons, assurant une santé cardiovasculaire optimale. Enfin, il préserve la santé de votre peau, lui redonnant élasticité et éclat pour une apparence radieuse."
      },
      {
        id: "apportMineraux1",
        link: "mereDeTous",
        pictureLove: "/img/jpg/product/mereDeTous.jpg",
        textLove:
          "Notre produit breveté, exclusif à notre boutique, est formulé avec 36 ingrédients naturels puissants. Il agit comme un anti-inflammatoire, soulageant les douleurs musculaires, articulaires et les maladies chroniques. En plus de stimuler l'énergie et d'améliorer l'humeur, il protège les cellules et renforce le système immunitaire. Il soulage les allergies, régule le cholestérol et stabilise le diabète, tout en offrant un soulagement pour les règles douloureuses. Un avantage supplémentaire est qu'il accélère le bronzage, offrant une peau rayonnante en peu de temps."
      },
      {
        id: "apportMineraux2",
        link: "boosterEnergie",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Notre formule tout-en-un est conçue pour améliorer votre bien-être global de manière efficace. Elle combat efficacement la fatigue et favorise un sommeil de qualité, vous permettant de vous réveiller frais et revitalisé chaque matin. En outre, notre produit agit comme un puissant allié pour faire face au stress, à l'anxiété et au surmenage, en offrant un soulagement apaisant grâce à ses ingrédients naturels soigneusement sélectionnés."
      },
      {
        id: "apportMineraux3",
        link: "regenerateurCellulaire",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Notre régénérateur cellulaire est une solution exceptionnelle qui offre de multiples bienfaits pour la peau, tout en apaisant les allergies et l'asthme. Profitez d'une peau éclatante et revitalisée, ainsi que d'une respiration plus apaisée grâce à notre produit bienfaisant."
      },
      {
        id: "apportMineraux4",
        link: "collagenoni",
        pictureLove: "/img/jpg/product/collagenoni.jpg",
        textLove:
          "Le collagène est bien plus qu'un allié pour la peau, il joue un rôle essentiel dans le soutien global de votre corps. En fortifiant vos os, il vous offre une base solide pour une mobilité harmonieuse. De plus, il renforce vos dents pour une santé bucco-dentaire optimale, et préserve l'intégrité de vos ligaments et articulations pour une flexibilité durable. Notre collagène est un atout précieux pour une santé optimale et épanouissante, vous permettant de vivre pleinement et en pleine santé."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "/img/jpg/product/apportMineraux.jpg",
  colors: {
    textColor: "#00528a",
    titleColorInSummary: "#00528a",
    bgColorInSummary0: "#4d86ad",
    bgColorInSummary1: "#e0eaf1",
    linearGradient0: "linear-gradient(105deg ,#4d86ad, #8bb4ff)",
    linearGradient1: "linear-gradient(to right, #80a9c5, 	#e0eaf1)",
    shadowColor: "#e0eaf1"
  },
  inSummary: [
    {
      id: "AMiS2",
      title: "Santé",
      text: (
        <ul>
          <li>Contient des ingrédients aux propriétés anti inflammatoires</li>
          <li>
            Composé de minéraux bons pour les os, les muscles et les nerfs
          </li>
          <li>Conseillé pour les crampes, les engourdissements</li>
          <li>Et dans le cadre de pathologies telles que la fibromyalgie</li>
        </ul>
      )
    }
  ]
};
