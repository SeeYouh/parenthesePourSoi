import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const gelDouche = {
  nameProduct: "Gel douche",
  id: "gelDouche",

  summary: {
    title: "Une expérience de soin incomparable pour votre peau",
    paragraph: [
      {
        id: "0gelDouche",
        subTitle: "Nettoyez votre peau délicatement",
        text: "Doté d'une formule délicate, ce produit offre un nettoyage en profondeur sans compromettre l'intégrité de votre peau. Il élimine efficacement les impuretés, la saleté et les résidus chimiques indésirables qui peuvent s'accumuler au fil de la journée. Après chaque utilisation, votre peau retrouve toute sa fraîcheur et sa pureté, libérée de toute substance nocive. C'est un véritable soin de propreté qui respecte l'équilibre naturel de votre épiderme."
      },
      {
        id: "1gelDouche",
        subTitle: "Retrouvez un confort",
        text: [
          "Cette formule va bien au-delà de son action nettoyante, car elle agit également comme un puissant purificateur pour votre peau. En éliminant les toxines et les impuretés qui ternissent votre teint et obstruent vos pores, elle permet à votre peau de respirer et de retrouver son éclat naturel. Chaque utilisation de ce produit laisse votre peau propre, fraîche et légère, vous offrant une sensation de bien-être incomparable.",
          "Ce soin est particulièrement adapté aux peaux sensibles et réactives grâce à sa composition douce et naturelle. Il apaise les rougeurs, les démangeaisons et les irritations, procurant un soulagement bienvenu et un confort optimal à votre peau. Vous pouvez ainsi profiter d'un nettoyage efficace tout en respectant la sensibilité de votre peau, ce qui en fait un choix idéal pour une routine de soin en douceur."
        ],
        picture450: "/img/jpg/product/gelDoucheIllusText450.jpg",
        picture675: "/img/jpg/product/gelDoucheIllusText675.jpg",
        picture900: "/img/jpg/product/gelDoucheIllusText900.jpg"
      },
      {
        id: "2gelDouche",
        subTitle: "Apaisez vos affections cutanées",
        text: "Ce produit est également bénéfique pour ceux qui souffrent d'affections cutanées comme l'eczéma et le psoriasis. Grâce à ses propriétés apaisantes, il contribue à calmer ces conditions, offrant une solution de soin de la peau douce et efficace. Les personnes aux peaux sensibles et sujettes à ces affections cutanées seront ravies de constater les bienfaits de ce soin, qui apporte un apaisement notable à chaque utilisation."
      },
      {
        id: "3gelDouche",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4gelDouche",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "gelDouche0",
        link: "cocoOil",
        pictureLove: "/img/jpg/product/cocoOil.jpg",
        textLove:
          "Pour une hydratation exceptionnelle, notre huile coco est parfaite. Elle nourrit la peau en profondeur, la laissant douce, souple et éclatante. Elle possède des vertus cicatrisantes, apaisant efficacement les blessures cutanées telles que les coups de soleil, les brûlures et les irritations. Notre huile de coco riche en propriétés antioxydantes est bénéfique pour votre santé et peut être ingérée pour des bienfaits internes."
      },
      {
        id: "gelDouche1",
        link: "regenerateurCellulaire",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Notre best-seller améliore la qualité de la peau grâce à sa régénération cellulaire, réduisant la cellulite, les vergetures, l'acné, l'eczéma et le psoriasis. Il soutient également la santé globale en renforçant le système immunitaire et nerveux, favorisant le collagène pour des tissus sains et une meilleure résistance aux maladies. En stimulant l'énergie naturelle, il offre une vitalité renouvelée, soulage les problèmes de rétention d'eau et améliore la circulation sanguine, apaisant les allergies et l'asthme."
      },
      {
        id: "gelDouche2",
        link: "collagenoni",
        pictureLove: "/img/jpg/product/collagenoni.jpg",
        textLove:
          "Notre collagène a des effets très positifs sur la peau, les cheveux, les ongles et les articulations. En stimulant le renouvellement cellulaire, il offre un teint frais, lumineux et éclatant tout en réduisant les rides et ridules. Grâce à la synergie du collagène marin avec le Noni, il soulage les douleurs corporelles et renforce les ongles et les cheveux."
      },
      {
        id: "gelDouche3",
        link: "shampooing",
        pictureLove: "/img/jpg/product/shampooing.jpg",
        textLove:
          "Dans notre gamme beauté du corps, notre shampooing est révolutionnaire ! Il nettoie en profondeur, éliminant les impuretés et les résidus, pour des cheveux propres et sains. Sa formule spéciale revitalise et hydrate intensément chaque mèche, rendant vos cheveux doux, brillants et pleins de vitalité. Il apaise les problèmes cutanés du cuir chevelu tels que les irritations, les rougeurs et combat efficacement les pellicules et les démangeaisons."
      },
      {
        id: "gelDouche4",
        link: "dentifrice",
        pictureLove: "/img/jpg/product/dentifrice.jpg",
        textLove:
          "Notre dentifrice est formulé avec des ingrédients naturels de haute qualité, sans produits chimiques agressifs. Il offre un blanchiment naturel en éliminant les tâches en douceur pour des dents éclatantes. Enrichi en extraits de plantes apaisantes et antibactériennes, il maintient des gencives saines et revitalisées. Avec l'huile essentielle de menthe poivrée, il procure une agréable sensation de fraîcheur et combat la mauvaise haleine."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
  picture: "/img/jpg/product/gelDouche.jpg",
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
      id: "GDiS0",
      title: "Santé",
      text: (
        <ul>
          <li>Diminue les rougeurs, les irritations et les démangeaisons</li>
          <li>Atténue l’eczéma et le psoriasis</li>
          <li>Régule les types de peau (grasse/sèche)</li>
        </ul>
      )
    },
    {
      id: "GDiS1",
      title: "Beauté",
      text: (
        <ul>
          <li>Elimine les impuretés sans en introduire de nouvelles</li>
          <li>Détruit les toxines superficielles</li>
          <li>Ne laisse aucun résidu chimique</li>
        </ul>
      )
    }
  ]
};
