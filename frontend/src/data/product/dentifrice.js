import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const dentifrice = {
  nameProduct: "Dentifrice",
  id: "dentifrice",

  summary: {
    title: "Une expérience de soin bucco-dentaire exceptionnelle.",
    paragraph: [
      {
        id: "0Dentifrice",
        subTitle: "Choisissez votre santé",
        text: "Notre dentifrice est formulé à partir d'ingrédients naturels de haute qualité. Vous n'y trouverez aucun produit chimique agressif. Il offre un blanchiment naturel en éliminant les tâches en douceur et vous aide à obtenir des dents plus éclatantes qui illumine votre sourire."
      },
      {
        id: "1Dentifrice",
        subTitle: "Adoptez ses bienfaits",
        text: [
          "Il est enrichi en extraits de plantes sélectionnés pour leurs propriétés apaisantes et antibactériennes. Ces ingrédients naturels travaillent en synergie pour aider à maintenir vos gencives en bonne santé et revitalisées. Ils combattent les bactéries qui peuvent causer des problèmes de gencives et apaisent les inflammations, favorisant ainsi une bouche saine et un sourire éclatant. Que vous cherchiez à prévenir les problèmes de gencives ou à soutenir une santé buccale déjà optimale, notre produit offre une solution naturelle et efficace.",
          "Avec l'huile essentielle de menthe poivrée, notre produit laisse une agréable sensation de fraîcheur dans votre bouche. Dites adieu à la mauvaise haleine et profitez d'une bouffée de fraîcheur durable après chaque brossage.",
          "Notre dentifrice est sans fluorure pour ceux qui préfèrent éviter cet élément, sans triclosan qui peut être nocif, sans paraben pour une tranquillité d'esprit, sans édulcorants artificiels pour une saveur pure, et sans colorants pour une expérience naturelle authentique."
        ],
        picture675: "/img/jpg/product/dentifriceIllusText675.jpg",
        picture450: "/img/jpg/product/dentifriceIllusText450.jpg",
        picture900: "/img/jpg/product/dentifriceIllusText900.jpg"
      },
      {
        id: "2Dentifrice",
        subTitle: "Souriez naturellement",
        text: "Découvrez une nouvelle façon de prendre soin de votre sourire, naturellement."
      },
      {
        id: "3Dentifrice",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4Dentifrice",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "Dentifrice0",
        link: "dentitionBlanche",
        pictureLove: "/img/jpg/product/dentitionBlanche.jpg",
        textLove:
          "Pour aller encore plus loin dans le blanchiment de vos dents, découvrez notre poudre révolutionnaire. Notre blanchisseur élimine en douceur les impuretés et les tâches, vous offrant un sourire éblouissant. Il protège vos gencives et assure une haleine fraîche durable. Sans ingrédients controversés, notre formule respecte votre santé pour une confiance totale toute la journée. Profitez d'un sourire éclatant et de soins bucco-dentaires complets."
      },
      {
        id: "Dentifrice1",
        link: "shampooing",
        pictureLove: "/img/jpg/product/shampooing.jpg",
        textLove:
          "Pour rester dans la gamme des soins naturels, choisissez notre shampooing d'exception en association pour une expérience de cheveux doux et sains. Ce shampooing améliore les soucis du cuir chevelu tout en protégeant le cheveu mèche par mèche."
      },
      {
        id: "Dentifrice2",
        link: "gelDouche",
        pictureLove: "/img/jpg/product/gelDouche.jpg",
        textLove:
          "Pour une expérience de bien-être enrichissante, choisissez notre gel douche naturel de la même gamme. Ces deux produits complémentaires transformeront votre routine quotidienne en une expérience de soin remarquable pour vos dents et votre peau. "
      },
      {
        id: "Dentifrice3",
        link: "apportMineraux",
        pictureLove: "/img/jpg/product/apportMineraux.jpg",
        textLove:
          "Notre concentré de minéraux et oligo-éléments est un puissant allié pour vos os et vos dents. Il a de nombreux avantages et bénéfices pour votre corps et votre santé."
      },
      {
        id: "Dentifrice4",
        link: "baumeLevres",
        pictureLove: "/img/jpg/product/baumeLevres.jpg",
        textLove:
          "Pour un sourire encore plus éclatant, regardez notre baume à lèvres naturel. Sa formule avancée protège vos lèvres des agressions extérieures et prévient les gerçures et la sécheresse. Enrichi d'ingrédients naturels, il répare et renforce vos lèvres, les laissant douces et résistantes. Offrez à votre sourire une oasis de douceur et de protection pour une apparence saine et éclatante."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
  picture: "/img/jpg/product/dentifrice.jpg",
  colors: {
    textColor: "#a5a5a5",
    titleColorInSummary: "#4b4b4b",
    linkTextColor: "#4b4b4b",
    bgColorInSummary0: "#c0c0c0",
    bgColorInSummary1: "#ffffff",
    linearGradient0: "linear-gradient(105deg, #c0c0c0, #f4f4f4)",
    linearGradient1: "linear-gradient(to right, #d2d2d2, #ffffff)",
    shadowColor: "#ffffff"
  },
  inSummary: [
    {
      id: "DiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "DiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "DiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "DiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "DiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
