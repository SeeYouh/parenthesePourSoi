import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const apportVitamines = {
  nameProduct: "Apport Vitamines",
  id: "apportVitamines",

  summary: {
    title: "Un soutien essentiel pour rester en bonne santé",
    paragraph: [
      {
        id: "0apportVitamines",
        subTitle:
          "Renforcez votre système immunitaire pour une meilleure résistance",
        text: "Grâce à notre formule spéciale composée de 17 vitamines et nutriments, vous pouvez compter sur un renforcement significatif de votre système immunitaire. Les vitamines et les nutriments essentiels présents dans notre produit vous aident à mieux résister aux infections et aux agents pathogènes, tels que le rhume et la grippe. Prévenez ces maladies saisonnières et atténuez leurs symptômes grâce à un système immunitaire renforcé."
      },
      {
        id: "1apportVitamines",
        subTitle: "Maintenez-vous en bonne santé",
        text: [
          "Notre formule offre un soutien essentiel pour la santé de vos yeux. Elle contribue à protéger vos yeux des dommages liés à l'âge et à maintenir une vision claire et nette. Grâce à ses nutriments spécifiques, elle améliore également votre acuité visuelle, vous permettant de profiter pleinement de la beauté du monde qui vous entoure.",
          "Les nutriments contenus dans notre formule aident à maintenir la santé de vos vaisseaux sanguins. Ils réduisent l'inflammation et favorisent une circulation sanguine optimale, garantissant ainsi un approvisionnement adéquat en nutriments essentiels dans tout votre corps.",
          "En plus de prendre soin de votre peau, notre produit contribue également à renforcer votre cœur et vos poumons. Il favorise une meilleure fonction cardiaque et pulmonaire, vous permettant ainsi de bénéficier d'une santé cardiovasculaire optimale."
        ],
        picture450: "/img/jpg/product/apportVitaminesIllusText450.jpg",
        picture675: "/img/jpg/product/apportVitaminesIllusText675.jpg",
        picture900: "/img/jpg/product/apportVitaminesIllusText900.jpg"
      },
      {
        id: "2apportVitamines",
        subTitle: "Préservez votre peau",
        text: "Notre formule agit en profondeur pour préserver la santé de votre peau. Elle maintient son élasticité naturelle et lui redonne son éclat, vous offrant ainsi une peau radieuse et resplendissante."
      },
      {
        id: "3apportVitamines",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4apportVitamines",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "apportVitamines0",
        link: "apportMineraux",
        pictureLove: "/img/jpg/product/apportMineraux.jpg",
        textLove:
          "Ce produit révolutionnaire contient 32 minéraux, oligo-éléments, enzymes et super-aliments pour un soulagement efficace et une amélioration globale du bien-être. Sa formule avancée apaise le système nerveux et soulage les douleurs osseuses, musculaires et articulaires. Grâce à ses propriétés anti-inflammatoires naturelles, il réduit les inflammations pour plus de confort au quotidien. Cette formule a démontré son efficacité pour améliorer la qualité de vie des personnes souffrant de pathologies telles que l'endométriose, la fibromyalgie et l'arthrose. Elle stimule également la régénération des tissus et soutient la santé des ongles et des cheveux"
      },
      {
        id: "apportVitamines1",
        link: "mereDeTous",
        pictureLove: "/img/jpg/product/mereDeTous.jpg",
        textLove:
          "Notre produit exclusif, formulé avec 36 ingrédients naturels puissants, agit comme un anti-inflammatoire, soulageant les douleurs musculaires, articulaires et les maladies chroniques. En plus de stimuler l'énergie et d'améliorer l'humeur, il protège les cellules et renforce le système immunitaire. Il soulage les allergies, régule le cholestérol et stabilise le diabète, tout en offrant un soulagement pour les règles douloureuses. De plus, il accélère le bronzage, offrant une peau rayonnante en peu de temps. Notre produit breveté est une solution globale pour améliorer votre bien-être."
      },
      {
        id: "apportVitamines2",
        link: "boosterEnergie",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Notre booster est conçu pour améliorer votre bien-être global de manière efficace. Il combat efficacement la fatigue et favorise un sommeil de qualité, vous permettant de vous réveiller frais et revitalisé chaque matin. En outre, notre produit agit comme un puissant allié pour faire face au stress, à l'anxiété et au surmenage, en offrant un soulagement apaisant grâce à ses ingrédients naturels soigneusement sélectionnés."
      },
      {
        id: "apportVitamines3",

        link: "regenerateurCellulaire",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Notre régénérateur cellulaire est une solution exceptionnelle offrant de multiples bienfaits pour la peau et apaisant les allergies et l'asthme. Obtenez une peau éclatante et revitalisée tout en respirant plus facilement grâce à notre produit bienfaisant. Offrez-vous le confort et la beauté que vous méritez avec notre régénérateur cellulaire."
      },
      {
        id: "apportVitamines4",
        link: "collagenoni",
        pictureLove: "/img/jpg/product/collagenoni.jpg",
        textLove:
          "Le collagène est bien plus qu'un allié pour la peau, il joue un rôle essentiel dans le soutien global de votre corps. En fortifiant vos os, il vous offre une base solide pour une mobilité harmonieuse. De plus, il renforce vos dents pour une santé bucco-dentaire optimale, et préserve l'intégrité de vos ligaments et articulations pour une flexibilité durable. Notre collagène est un atout précieux pour une santé optimale et épanouissante, vous permettant de vivre pleinement et en pleine santé."
      },
      {
        id: "apportVitamines5",
        link: "purifAir",
        pictureLove: "/img/jpg/product/purificatAir.jpg",
        textLove:
          "Le Purificateur d’Air Multi-Effets est la solution ultime pour purifier vos espaces, en éliminant jusqu'à 99,99 % des microbes et des particules ultra fines en suspension dans l'air. Doté d'une technologie avancée à 360 degrés, il combat efficacement les polluants atmosphériques, les allergènes, les COV et autres contaminants. Grâce à sa technologie intelligente, il ajuste automatiquement le niveau de filtration en temps réel pour assurer un environnement de respiration optimal. Avec son filtre à plusieurs étapes, il offre un flux d'air frais et purifié à 360 degrés. Protégez votre santé et respirez sereinement en investissant dans ce purificateur d’air haut de gamme."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "/img/jpg/product/apportVitamines.jpg",
  colors: {
    textColor: "#13af56",
    titleColorInSummary: "#13af56",
    bgColorInSummary0: "#89d7ab",
    bgColorInSummary1: "#e3f5eb",
    linearGradient0: "linear-gradient(105deg ,#89d7ab, #b3ffc5)",
    linearGradient1: "linear-gradient(to right, #b8e7cc, 	#e3f5eb)",
    shadowColor: "#e3f5eb"
  },
  inSummary: [
    {
      id: "AViSGP0",
      title: "Santé",
      text: (
        <ul>
          <li>Contient des ingrédients aux propriétés anti inflammatoires</li>
          <li>
            Composé de vitamines bonnes pour les yeux, le coeur, la peau et les
            poumons
          </li>
          <li>Efficace sur les maladies saisonnières</li>
          <li>
            Conseillé pour l’arthrose, les douleurs nerveuses, les douleurs
            musculaires
          </li>
          <li>
            et dans le cadre de pathologies telles que la fibromyalgie et
            l’endométriose
          </li>
        </ul>
      )
    }
  ]
};
