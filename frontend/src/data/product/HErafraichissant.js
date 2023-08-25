import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const heRafraichissant = {
  nameProduct: "HE Rafraîchissante",
  id: "heRafraichissant",

  summary: {
    title: "Une huile essentielle polyvalente pour un bien-être intégral",
    paragraph: [
      {
        id: "0heRafraichissant",
        subTitle: "Stimulez votre esprit",
        text: "Dans notre monde moderne, nous sommes constamment sollicités par des informations et des distractions. Cela peut rendre difficile le maintien d'une concentration optimale, que ce soit pour le travail, l'apprentissage ou même les tâches quotidiennes. C'est là que notre huile essentielle entre en jeu. Grâce à ses arômes délicats, elle stimule votre esprit, favorisant une meilleure concentration et une clarté mentale accrue. De plus, notre huile essentielle offre un remède naturel contre les nausées et les maux de tête. Que vous soyez en voyage et que vous souffriez du mal des transports, ou que vous ayez simplement un mal de tête après une longue journée, quelques gouttes de notre huile essentielle peuvent vous offrir un soulagement rapide et efficace."
      },
      {
        id: "1heRafraichissant",
        subTitle: "Combattez vos maux",
        text: "La respiration est essentielle à la vie, mais elle peut être entravée par des problèmes tels que la congestion ou les allergies. Notre huile essentielle rafraîchissante est là pour vous aider. Elle apaise les toux, dégage les voies respiratoires et procure une sensation de fraîcheur, vous permettant de respirer librement et facilement. De plus, notre huile essentielle peut aider à apaiser les démangeaisons, réduire les rougeurs et calmer les piqûres d'insectes. Elle peut être appliquée directement sur la peau ou diluée dans une huile de support pour un soulagement rapide et efficace. De plus, ses propriétés régulatrices aident à contrôler la transpiration excessive, vous permettant de vous sentir plus frais et plus confiant.",
        picture450: "/img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "/img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "/img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        id: "2heRafraichissant",
        subTitle: "Soulagez vos douleurs et vos tensions",
        text: "Le stress et la tension peuvent s'accumuler dans notre corps, causant des douleurs et des malaises. Notre huile essentielle peut aider à soulager ces symptômes. Qu'il s'agisse de douleurs articulaires, de tensions musculaires ou de maux de tête, quelques gouttes de notre huile essentielle peuvent aider à soulager la douleur et à favoriser la relaxation. Elle peut être massée directement sur les zones douloureuses ou utilisée dans un bain chaud pour un effet apaisant global."
      },
      {
        id: "3heRafraichissant",
        subTitle: "Pour vous, Mesdames",
        text: "La ménopause est une étape naturelle de la vie d'une femme, mais elle peut s'accompagner de symptômes inconfortables tels que les bouffées de chaleur. Notre huile essentielle peut aider à réduire ces symptômes, procurant un soulagement naturel et un confort pendant cette étape de la vie. Quelques gouttes peuvent aider à apaiser les bouffées de chaleur et à favoriser un sentiment de bien-être."
      },
      {
        id: "4heRafraichissant",
        subTitle: "Pour les sportifs",
        text: "Que vous soyez un athlète professionnel ou que vous aimiez simplement faire de l'exercice pour rester en forme, notre huile essentielle peut aider à soulager les douleurs musculaires et à favoriser une récupération plus rapide. Elle peut être appliquée directement sur les muscles endoloris ou utilisée dans un bain chaud après l'exercice pour un effet apaisant."
      },
      {
        id: "5heRafraichissant",
        subTitle: "Revitalisez votre quotidien avec notre huile essentielle",
        text: "Notre huile essentielle offre une multitude de bienfaits pour votre bien-être. Que vous cherchiez à améliorer votre concentration, à soulager des douleurs, à respirer plus facilement ou à apaiser votre peau, elle peut vous aider à atteindre vos objectifs. Profitez des bienfaits variés de cette huile essentielle pour revitaliser votre quotidien et embrasser une vie plus épanouissante. Quelques gouttes peuvent faire une grande différence dans votre journée, vous aidant à vous sentir plus équilibré, plus concentré et plus en paix."
      },
      {
        id: "6heRafraichissant",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "7heRafraichissant",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "heRafraichissant0",
        link: "cocoOil",
        pictureLove: "/img/jpg/product/cocoOil.jpg",
        textLove:
          "En raison de la concentration élevée de notre produit, nous recommandons de le mélanger avec notre huile hydratante, particulièrement pendant les premiers jours d'utilisation. Cette combinaison permet de bénéficier pleinement des bienfaits de notre produit tout en assurant une application douce et hydratante pour votre peau"
      },
      {
        id: "heRafraichissant1",
        link: "pb",
        pictureLove: "/img/jpg/product/PB.jpg",
        textLove: [
          "Je conseille vivement aux sportifs d'explorer notre produit destiné à la récupération musculaire et à l'amélioration des performances, qui offre une énergie stimulante à base de cacao.",
          "Il est également un très bon booster d’énergie naturelle pour tenir toute la journée."
        ]
      },
      {
        id: "heRafraichissant2",
        link: "mereDeTous",
        pictureLove: "/img/jpg/product/mereDeTous.jpg",
        textLove:
          "Elle s'associe parfaitement à notre anti-inflammatoire naturel, offrant ainsi une solution complète pour gérer les douleurs liées à l'activité physique ou au quotidien lors de pathologies douloureuses."
      },
      {
        id: "heRafraichissant3",
        link: "heRelaxante",
        pictureLove: "/img/jpg/product/heRelaxante.jpg",
        textLove:
          "L'huile essentielle Relaxante présente de nombreux bienfaits pour la santé mentale en apaisant la dépression, réduisant l'anxiété et le stress, et favorisant une sensation de bien-être. Son parfum relaxant aide à calmer l'esprit et procure une sensation de tranquillité intérieure. Elle s'avère également efficace pour favoriser l'endormissement, améliorer la qualité du sommeil, et apaiser les irritations cutanées, offrant un soulagement rapide et apaisant. Une utilisation régulière permet de détendre les muscles de la mâchoire et de réduire le grincement de dents."
      },
      {
        id: "heRafraichissant4",
        link: "heDesinfectante",
        pictureLove: "/img/jpg/product/heDesinfectante.jpg",
        textLove:
          "L'huile essentielle Désinfectante est un remède naturel puissant pour combattre les infections et maintenir un environnement sain. Elle agit efficacement contre les maladies saisonnières telles que les rhumes, les toux et la grippe, tout en renforçant le système immunitaire pour une meilleure résistance aux maladies. Elle soulage également les douleurs dentaires, apaise les problèmes cutanés et diminue les inconforts causés par les piqûres d'insectes. En plus de ses bienfaits pour la santé, elle peut contribuer à la gestion du poids en détoxifiant le corps et en favorisant un système digestif sain. Enfin, son parfum agréable et ses propriétés apaisantes en font un allié précieux pour améliorer l'humeur et favoriser la relaxation."
      },
      {
        id: "heRafraichissant5",
        link: "heSoulageante",
        pictureLove: "/img/jpg/product/heSoulageante.jpg",
        textLove:
          "Cette huile essentielle possède de nombreuses propriétés curatives, soulageant les maux de tête et les symptômes des maladies saisonnières. Elle a des effets positifs sur le bien-être en diminuant l'anxiété, en augmentant la vivacité mentale et en améliorant l'humeur. Elle aide à soulager les tensions corporelles et les irritations cutanées, ainsi que les douleurs associées au grincement de dents. De plus, elle repousse les poux et les moustiques, offrant une protection naturelle contre ces nuisibles."
      }
    ]
  },
  firstCategory: [getCategoryById("4HuilesEssentielles").name],
  secondCategory: [
    getSecondCategoryById("4HuilesEssentielles2MauxDivers").text
  ],
  picture: "/img/jpg/product/heRafraichissant.jpg",
  colors: {
    textColor: "#30d1d9",
    titleColorInSummary: "#0017a5",
    linkTextColor: "#30d1d9",
    bgColorInSummary0: "#6edfe4",
    bgColorInSummary1: "#e6f9fa",
    linearGradient0: "linear-gradient(105deg, #6edfe4, #f1feff)",
    linearGradient1: "linear-gradient(to right, #98e8ec, #e6f9fa)",
    shadowColor: "#e6f9fa"
  },
  inSummary: [
    {
      id: "HERaiS0",
      title: "Santé",
      text: (
        <ul>
          <li>
            Efficace pour les maladies saisonnières (décongestionnant) et les
            allergies
          </li>
          <li>
            Agit rapidement sur les migraines, nausées ainsi que le mal des
            transports
          </li>
          <li>
            Diminue les douleurs et tensions musculaires et articulaires
            (foulures, entorses, douleurs de dos…)
          </li>
          <li>
            Atténue les rougeurs et démangeaisons telles que les piqûres
            d'insectes
          </li>
        </ul>
      )
    },
    {
      id: "HERaiS1",
      title: "Bien-être",
      text: (
        <ul>
          <li>Relaxe le corps et l’esprit</li>
          <li>Aide à la concentration et à la clarté mentale</li>
          <li>
            Recommandée pour les femmes en période de ménopause afin de lutter
            contre les bouffées de chaleur
          </li>
        </ul>
      )
    }
  ]
};
