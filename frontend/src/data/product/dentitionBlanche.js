import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const dentitionBlanche = {
  nameProduct: "Dentition blanche",
  summary: {
    title: "Une poudre révolutionnaire en matière de soins dentaires naturels.",
    paragraph: [
      {
        id: "0dentitionBlanche",
        subTitle: "Respectez votre santé",
        text: "Votre bien-être est au cœur de nos préoccupations, c'est pourquoi nous avons formulé notre dentifrice sans compromis pour votre santé. Notre poudre révolutionnaire est exempte de fluorure, de triclosan, de parabènes, d'édulcorants et de colorants controversés. Vous pouvez ainsi vous engager en toute confiance dans une routine de soins bucco-dentaires sûre et bienveillante. Notre engagement envers votre santé garantit que notre formule respecte l'équilibre naturel de votre bouche, vous offrant des soins bucco-dentaires de qualité supérieure sans aucun ingrédient potentiellement nocif. Privilégiez une approche naturelle et bienveillante pour votre bien-être général avec notre dentifrice, et souriez en toute confiance, sachant que vous prenez soin de vous et de votre santé avec chaque utilisation."
      },
      {
        id: "1dentitionBlanche",
        subTitle: "Eliminez les impuretés, les tâches et protégez vos gencives",
        text: [
          "Notre poudre révolutionnaire pour des soins dentaires naturels est spécialement conçue pour vous offrir un sourire éblouissant. Son action en douceur agit efficacement pour éliminer les impuretés et les taches indésirables présentes sur vos dents, révélant ainsi leur brillance éclatante. Contrairement aux dentifrices abrasifs qui pourraient altérer l'émail délicat de vos dents, notre blanchisseur naturel respecte l'intégrité de vos dents tout en leur offrant un éclat resplendissant. Vous pouvez désormais dire adieu aux préoccupations concernant la coloration inesthétique de vos dents, et accueillir un sourire radieux avec confiance.",
          "La santé de vos gencives est primordiale dans un soin bucco-dentaire complet, c'est pourquoi notre poudre prend soin d'elles avec une délicatesse inégalée. Grâce à une formule douce mais efficace, notre poudre nettoie vos gencives tout en les protégeant des irritations et des inflammations. Vous pouvez vous attendre à une santé bucco-dentaire optimale, car notre formule est spécialement conçue pour respecter la sensibilité de vos gencives. En prenant soin de vos gencives, notre produit vous permet de profiter d'une sensation de confort et de bien-être dans votre bouche, pour des sourires éclatants sans compromis sur la santé de vos gencives."
        ],
        picture450: "./img/jpg/product/ApportMinerauxIllusText450.jpg",
        picture675: "./img/jpg/product/ApportMinerauxIllusText675.jpg",
        picture900: "./img/jpg/product/ApportMinerauxIllusText900.jpg"
      },
      {
        id: "2dentitionBlanche",
        subTitle: "Appréciez une haleine fraîche",
        text: "Avec notre formule unique, offrez-vous une haleine fraîche qui perdure tout au long de la journée. Notre poudre agit en profondeur pour éliminer les mauvaises odeurs et les bactéries responsables de la mauvaise haleine, vous offrant ainsi une confiance totale dans vos interactions sociales et professionnelles. Vous apprécierez également une sensation de pureté et de propreté dans votre bouche, car notre poudre laisse une agréable sensation de fraîcheur après chaque utilisation. Profitez d'une bouche saine et d'une haleine agréable, grâce à notre poudre révolutionnaire pour des soins dentaires naturels."
      },
      {
        id: "3dentitionBlanche",
        subTitle: "Maintenez des ongles et des cheveux en bonne santé",
        text: "En prenant régulièrement notre formule avancée, vous bénéficiez d'un apport en nutriments essentiels qui soutiennent la santé de vos ongles et de vos cheveux. Des cheveux forts et des ongles sains sont des indicateurs d'une bonne santé globale, et notre produit vous aide à maintenir ces aspects essentiels de votre bien-être."
      },
      {
        id: "4dentitionBlanche",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5dentitionBlanche",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "dentitionBlanche0",
        pictureLove: "./img/jpg/product/dentifrice.jpg",
        textLove:
          "Un dentifrice naturel de haute qualité, sans produits chimiques agressifs, pour un blanchiment doux et des dents éclatantes. Enrichi en extraits de plantes apaisantes et anti bactériennes, il favorise des gencives saines. L'huile essentielle de menthe poivrée laisse une agréable sensation de fraîcheur, éliminant la mauvaise haleine. Une expérience de soin bucco-dentaire exceptionnelle, naturellement."
      },
      {
        id: "dentitionBlanche1",
        pictureLove: "./img/jpg/product/beaumeLevre.jpg",
        textLove:
          "Si vous souhaitez prendre soin de votre sourire, notre baume à lèvres naturel, nourrissant et hydratant fera votre bonheur. Sa formule avancée offre une protection contre les agressions extérieures et prévient les lèvres sèches et gercées. Grâce à sa composition naturelle, vos lèvres sont réparées et plus résistantes. Une véritable oasis de douceur et de protection pour un sourire éclatant de santé."
      },
      {
        id: "dentitionBlanche2",
        pictureLove: "./img/jpg/product/glossRepulpant.jpg",
        textLove:
          "Si vous souhaitez prendre soin de vos lèvres en particulier, notre gloss repulpant saura vous satisfaire pour des lèvres hydratées et volumineuses. Il efface les rides et ridules pour une apparence plus jeune et lisse. Il offre une sensation de fraîcheur délicieuse et est rigoureusement testé pour une tolérance optimale. Une cure de jouvence pour vos lèvres."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "./img/jpg/product/apportMineraux.jpg",
  colors: {
    textColor: "#0246a4",
    titleColorInSummary: "#003459",
    bgColorInSummary: "#68a6d0"
  },
  inSummary: [
    {
      id: "DBiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "DBiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "DBiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "DBiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "DBiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
