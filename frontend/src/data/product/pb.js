import {
  getCategoryById,
  getSecondCategoryById,
} from '../firstCategoryHelper';

export const pb = {
  nameProduct: "PB",
  id: "pb",

  summary: {
    title: "Révélez votre meilleur Vous",
    paragraph: [
      {
        id: "0PB",
        subTitle: "Gérez votre poids",
        text: "Notre produit de bien-être 100% naturel est un allié précieux pour la gestion du poids. Grâce à ses propriétés, il diminue l’appétit et favorise la combustion des graisses. De plus, il contient du sucre naturel à faible indice glycémique, contribuant ainsi à maintenir un équilibre glycémique optimal. Laissez-vous guider vers une silhouette équilibrée avec notre potion magique."
      },
      {
        id: "1PB",
        subTitle: "Ressourcez-vous",
        text: [
          "Notre produit est spécialement conçu pour être l'allié idéal des sportifs. En améliorant l'endurance, il vous permet de prolonger vos efforts et de repousser vos limites lors de vos entraînements et compétitions. Grâce à ses propriétés favorisant la réparation musculaire, il accélère la récupération après l'effort, réduisant ainsi les courbatures et les tensions musculaires. Vous serez ainsi prêt à vous entraîner à nouveau à plein régime, sans compromettre vos performances. Optez pour notre produit et découvrez comment il peut vous aider à atteindre de nouvelles performances exceptionnelles tout en prenant soin de votre corps de sportif.",
          "Notre produit offre une régénération et une réparation des tissus exceptionnelles. Il favorise un système digestif sain en diminuant l’irritation des intestins, vous procurant ainsi une sensation de bien-être intérieur. De plus, il améliore la santé cardiovasculaire, renforçant votre cœur pour une vitalité éclatante."
        ],
        picture450: "/img/jpg/product/pbIllusText450.jpg",
        picture225: "/img/jpg/product/pbIllusText225.jpg",
        picture675: "/img/jpg/product/pbIllusText675.jpg",
        picture900: "/img/jpg/product/pbIllusText900.jpg",
        picturefb: "/img/jpg/product/pbIllusText1524.jpg"
      },
      {
        id: "2PB",
        subTitle: "Boostez votre énergie",
        text: "Savourez l'énergie et le bien-être que notre produit apporte à votre quotidien. Vous ressentirez une vigueur incomparable grâce à cette potion magique de bien-être. Prenez soin de vous et laissez la vitalité vous envelopper."
      },
      {
        id: "3PB",
        subTitle: "Maintenez des ongles et des cheveux en bonne santé",
        text: "En prenant régulièrement notre formule avancée, vous bénéficiez d'un apport en nutriments essentiels qui soutiennent la santé de vos ongles et de vos cheveux. Des cheveux forts et des ongles sains sont des indicateurs d'une bonne santé globale, et notre produit vous aide à maintenir ces aspects essentiels de votre bien-être."
      },
      {
        id: "4PB",
        text: "Optez pour l'éveil d'une meilleure version de vous-même avec notre produit de bien-être 100% naturel. Que ce soit pour gérer votre poids, ressourcer votre corps après l'effort, régénérer vos tissus ou simplement pour booster votre énergie au quotidien, ce cadeau précieux de la nature est là pour vous soutenir."
      },
      {
        id: "5PB",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "6PB",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "PB0",
        link: "pn",
        pictureLove: "/img/jpg/product/PN.jpg",
        pictureLove264: "/img/jpg/product/PN264.jpg",
        pictureLove400: "/img/jpg/product/PN400.jpg",
        textLove:
          "Dans les journées chargées, le PB et le PN forment votre allié ultime. Le PB vous donne un boost d'énergie instantané, tandis que le PN offre une libération stable et durable. Ensemble, ils assurent vigilance et productivité, même sans repas complet. Découvrez-en plus sur cette alliance parfaite pour une journée pleine d'énergie et de vitalité."
      },
      {
        id: "PB1",
        link: "boosterEnergie",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        pictureLove264: "/img/jpg/product/boosterEnergie264.jpg",
        pictureLove400: "/img/jpg/product/boosterEnergie400.jpg",
        textLove:
          "Notre booster d'énergie est un mélange vivifiant qui dynamise votre corps et stimule votre énergie naturelle. Il combat la fatigue, favorise la bonne humeur et diminue le stress pour vous offrir une sensation de légèreté au quotidien. En plus d'aider à la gestion du poids grâce à ses propriétés détoxifiantes, il renforce votre système immunitaire et cardiovasculaire, protège votre peau et apaise les désagréments féminins."
      },
      {
        id: "PB2",
        link: "santeMax",
        pictureLove: "/img/jpg/product/santeMax.jpg",
        pictureLove264: "/img/jpg/product/santeMax264.jpg",
        pictureLove400: "/img/jpg/product/santeMax400.jpg",
        textLove:
          "Notre produit est conçu pour améliorer votre bien-être et renforcer votre santé globale. Il vous offre une énergie durable tout au long de la journée, vous permettant de rester dynamique et productif. En harmonie avec votre corps, il apaise les tensions, réduit le stress et favorise un état d'esprit positif."
      },
      {
        id: "PB3",
        link: "gourdEau",
        pictureLove: "/img/jpg/product/gourdEau.jpg",
        pictureLove264: "/img/jpg/product/gourdEau264.jpg",
        pictureLove400: "/img/jpg/product/gourdEau400.jpg",
        textLove: (
          <span>
            {"Le Système de Filtration d'Eau est une bouteille en plastique"}
            <style>
              {`a:visited { 
                    color: "#0246a4"; 
                  }`}
            </style>
            <a
              className="btn btn-extLink"
              href="https://fr.wikipedia.org/wiki/Tritan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tritan
            </a>
            {
              "de 740 ml qui vous permet de profiter d'eau potable propre partout où vous allez. Il élimine jusqu'à 99,99 % des microbes, contaminants et produits chimiques, offrant une eau fraîche et propre sans le coût ni les déchets des bouteilles en plastique. Les filtres Puritii sont écologiques, ayant déjà empêché des millions de bouteilles en plastique de finir dans les décharges et les océans. Cette technologie révolutionnaire cible les contaminants biologiques, chimiques et émergents en une seule gorgée grâce à un processus de filtration en deux parties."
            }
          </span>
        )
      },
      {
        id: "PB4",
        link: "collagenoni",
        pictureLove: "/img/jpg/product/collagenoni.jpg",
        pictureLove264: "/img/jpg/product/collagenoni264.jpg",
        pictureLove400: "/img/jpg/product/collagenoni400.jpg",
        textLove:
          "Le collagène n’agit pas seulement sur la peau, il est avant tout un allié essentiel pour soutenir votre corps de manière globale. En fortifiant vos os, il vous offre une base solide pour une mobilité harmonieuse. De plus, il renforce vos dents pour une santé bucco-dentaire optimale, et préserve l'intégrité de vos ligaments et articulations pour une flexibilité durable. Notre collagène est un atout précieux pour une santé optimale et épanouissante."
      }
    ]
  },
  firstCategory: [getCategoryById("0GestionDuPoids").name],
  secondCategory: [
    getSecondCategoryById("0GestionDuPoids1AidePertePoids").text
  ],
  picture: "/img/jpg/product/PB.jpg",
  picture264: "/img/jpg/product/PB264.jpg",
  picture400: "/img/jpg/product/PB400.jpg",
  colors: {
    textColor: "#cd9f00",
    linkTextColor: "#cd9f00",
    titleColorInSummary: "#cd9f00",
    bgColorInSummary0: "#dcbc4d",
    bgColorInSummary1: "#f9f3e0",
    linearGradient0: "linear-gradient(105deg, #dcbc4d, #ffefd8)",
    linearGradient1: "linear-gradient(to right, #e6cf80, #f9f3e0)",
    shadowColor: "#f9f3e0"
  },
  inSummary: [
    {
      id: "PBiS0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Diminue l’appétit </li>
          <li>Brûle les graisses</li>
        </ul>
      )
    },
    {
      id: "PBiS1",
      title: "Santé",
      text: (
        <ul>
          <li>Améliore la santé cardiovasculaire </li>
          <li>Régénère les tissus et améliore la réparation musculaire</li>
          <li>Permet un système digestif sain</li>
          <li>Diminue les irritations de l’intestin</li>
        </ul>
      )
    },
    {
      id: "PBiS2",
      title: "Bien-être",
      text: (
        <ul>
          <li>Apporte une énergie physique</li>
          <li>Soulager des douleurs de type courbatures</li>
          <li>Améliore l’endurance et la récupération</li>
        </ul>
      )
    }
  ]
};
