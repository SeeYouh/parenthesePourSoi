import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

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
        picture450: "./img/jpg/product/ApportMinerauxIllusText450.jpg",
        picture675: "./img/jpg/product/ApportMinerauxIllusText675.jpg",
        picture900: "./img/jpg/product/ApportMinerauxIllusText900.jpg"
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
        text: "Optez pour l'éveil d'une meilleure version de vous-même avec notre produit de bien-être 100% naturel. Que ce soit pour gérer votre poids, ressourcer votre corps après l'effort, régénérer vos tissus ou simplement pour booster votre énergie au quotidien, ce cadeau précieux de la nature est là pour vous soutenir. Et rappelez-vous, notre conseillère bien-être est toujours disponible pour vous accompagner sur ce chemin. N'hésitez pas à la contacter pour découvrir encore plus comment notre produit peut transformer votre vie."
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
        pictureLove: "./img/jpg/product/PN.jpg",
        textLove:
          "Dans les journées chargées, le PB et le PN forment votre allié ultime. Le PB vous donne un boost d'énergie instantané, tandis que le PN offre une libération stable et durable. Ensemble, ils assurent vigilance et productivité, même sans repas complet. Découvrez-en plus sur cette alliance parfaite pour une journée pleine d'énergie et de vitalité."
      },
      {
        id: "PB1",
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Notre booster d'énergie est un mélange vivifiant qui dynamise votre corps et stimule votre énergie naturelle. Il combat la fatigue, favorise la bonne humeur et diminue le stress pour vous offrir une sensation de légèreté au quotidien. En plus d'aider à la gestion du poids grâce à ses propriétés détoxifiantes, il renforce votre système immunitaire et cardiovasculaire, protège votre peau et apaise les désagréments féminins."
      },
      {
        id: "PB2",
        pictureLove: "./img/jpg/product/santeMax.jpg",
        textLove:
          "Notre produit est conçu pour améliorer votre bien-être et renforcer votre santé globale. Il vous offre une énergie durable tout au long de la journée, vous permettant de rester dynamique et productif. En harmonie avec votre corps, il apaise les tensions, réduit le stress et favorise un état d'esprit positif."
      },
      {
        id: "PB3",
        pictureLove: "./img/jpg/product/gourdEau.jpg",
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
        pictureLove: "./img/jpg/product/collagene.jpg",
        textLove:
          "Le collagène n’agit pas seulement sur la peau, il est avant tout un allié essentiel pour soutenir votre corps de manière globale. En fortifiant vos os, il vous offre une base solide pour une mobilité harmonieuse. De plus, il renforce vos dents pour une santé bucco-dentaire optimale, et préserve l'intégrité de vos ligaments et articulations pour une flexibilité durable. Notre collagène est un atout précieux pour une santé optimale et épanouissante."
      }
    ]
  },
  firstCategory: [getCategoryById("0GestionDuPoids").name],
  secondCategory: [
    getSecondCategoryById("0GestionDuPoids1AidePertePoids").text
  ],
  picture: "./img/jpg/product/apportMineraux.jpg",
  colors: {
    textColor: "#0246a4",
    titleColorInSummary: "",
    bgColorInSummary: "",
    linkTextColor: "#0246a4"
  },
  inSummary: [
    {
      id: "PBiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "PBiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "PBiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "PBiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "PBiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
