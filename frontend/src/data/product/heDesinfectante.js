import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";
export const heDesinfectante = {
  nameProduct: "HE Desinfectante",
  id: "heDesinfectante",

  summary: {
    title: "Un allié puissant pour votre santé",
    paragraph: [
      {
        id: "0heDesinfectante",
        subTitle: "Parfumez votre intérieur pour vous relaxer",
        text: "Au-delà de ses effets sur la santé physique, l'huile essentielle Désinfectante a également des bienfaits pour le bien-être mental. Son parfum agréable et ses propriétés calmantes aident à réduire le stress, favorisent la relaxation et améliorent l'humeur, procurant ainsi une sensation de bien-être et de sérénité."
      },
      {
        id: "1heDesinfectante",
        subTitle: "Protégez-vous et protégez votre santé",
        text: [
          "L'huile essentielle Désinfectante est une véritable arme naturelle pour lutter contre les infections et maintenir un environnement sain. Grâce à ses propriétés antivirales et antibactériennes, elle est efficace pour soigner les maladies saisonnières telles que les rhinites, les rhumes, les otites, les toux, les gorges irritées et la grippe. En renforçant le système immunitaire, elle offre une protection contre les infections et favorise une meilleure résistance aux maladies. De plus, elle se révèle être un remède efficace pour apaiser les douleurs dentaires telles que les abcès et les aphtes, ainsi que pour soulager les maux d'estomac et favoriser une meilleure digestion. Son utilisation permet également de soulager les infections de l'oreille et les douleurs dentaires.",
          "En tant que désinfectant naturel, cette huile essentielle peut être utilisée pour nettoyer et désinfecter diverses surfaces dans la maison, le bureau, la voiture, etc. Son action antimicrobienne aide ainsi à prévenir la propagation des germes et des bactéries, contribuant à maintenir un environnement sain et protégé."
        ],
        picture450: "/img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "/img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "/img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        id: "2heDesinfectante",
        subTitle: "Soulagez votre peau",
        text: "L'huile essentielle Désinfectante peut être un allié précieux pour la gestion du poids. En effet, elle contribue à détoxifier le corps en éliminant les toxines accumulées et en favorisant un système digestif sain. Cette action peut jouer un rôle bénéfique dans la perte de poids et contribuer à une meilleure santé globale."
      },
      {
        id: "3heDesinfectante",
        subTitle: "Optez pour un désinfectant naturel",
        text: "Grâce à ses propriétés antivirales et antibactériennes, elle vous offre une protection contre les maladies saisonnières et les infections. Elle soutient également la gestion du poids en contribuant à détoxifier le corps et en favorisant un système digestif sain. Profitez de ses bienfaits pour apaiser la peau, soulager les piqûres d'insectes et améliorer votre bien-être global. De plus, elle offre une désinfection naturelle pour un environnement sain, vous permettant de prévenir la propagation des germes. Intégrez cette huile essentielle à votre routine quotidienne et ressentez les bienfaits pour une vie équilibrée et harmonieuse."
      },
      {
        id: "4heDesinfectante",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5heDesinfectante",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "heDesinfectante0",
        link: "cocoOil",
  pictureLove: "/img/jpg/product/cocoOil.jpg",
        textLove:
          "En raison de la concentration élevée de notre produit, nous recommandons de le mélanger avec notre huile hydratante, particulièrement pendant les premiers jours d'utilisation. Cette combinaison permet de bénéficier pleinement des bienfaits de notre produit tout en assurant une application douce et hydratante pour votre peau."
      },
      {
        id: "heDesinfectante1",
        link: "HERafraichissant",
  pictureLove: "/img/jpg/product/HERafraichissant.jpg",
        textLove:
          "Notre huile essentielle stimule la concentration et la vivacité mentale. Elle combat les nausées, le mal des transports et les maux de tête pour un soulagement rapide et naturel. Elle améliore le confort respiratoire en apaisant la toux et en dégageant les voies respiratoires. De plus, elle apaise les démangeaisons, réduit les rougeurs et calme les piqûres d'insectes, offrant une peau apaisée. Grâce à ses propriétés apaisantes, elle détend les tensions musculaires et favorise une sensation de calme. Elle est aussi bénéfique pour soulager les douleurs articulaires et aide à réduire les bouffées de chaleur pendant la ménopause. Pour les sportifs, elle soulage les foulures, les entorses et les douleurs musculaires, favorisant une récupération plus rapide."
      },
      {
        id: "heDesinfectante2",
        link: "heSoulageante",
  pictureLove: "/img/jpg/product/heSoulageante.jpg",
        textLove:
          "Cette huile essentielle possède de nombreuses propriétés curatives, soulageant les maux de tête et les symptômes des maladies saisonnières. Elle a des effets positifs sur le bien-être en diminuant l'anxiété, en augmentant la vivacité mentale et en améliorant l'humeur. Elle aide à soulager les tensions corporelles et les irritations cutanées, ainsi que les douleurs associées au grincement de dents. De plus, elle repousse les poux et les moustiques, offrant une protection naturelle contre ces nuisibles."
      },
      {
        id: "heDesinfectante3",
        link: "heRelaxante",
  pictureLove: "/img/jpg/product/heRelaxante.jpg",
        textLove:
          "L'huile essentielle Relaxante présente de nombreux bienfaits pour la santé mentale en apaisant la dépression, réduisant l'anxiété et le stress, et favorisant une sensation de bien-être. Son parfum relaxant aide à calmer l'esprit et procure une sensation de tranquillité intérieure. Elle s'avère également efficace pour favoriser l'endormissement, améliorer la qualité du sommeil, et apaiser les irritations cutanées, offrant un soulagement rapide et apaisant. Une utilisation régulière permet de détendre les muscles de la mâchoire et de réduire le grincement de dents."
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
    titleColorInSummary: "",
    linkTextColor: "",
    bgColorInSummary0: "",
    bgColorInSummary1: "",
    linearGradient0: "linear-gradient(105deg, #7e1450, #7e1450)",
    linearGradient1: "linear-gradient(to right, #7e1450, #7e1450)",
    shadowColor: "",
    
  },
  inSummary: [
    {
      id: "HEDeiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "HEDeiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "HEDeiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "HEDeiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "HEDeiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
