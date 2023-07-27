import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const regenerateurCellulaire = {
  nameProduct: "Régénérateur cellulaire",
  summary: {
    title: "Un support quotidien.",
    paragraph: [
      {
        id: "0regenerateurCellulaire",
        subTitle: "Dites bonjour à votre nouveau vous",
        text: "Notre best-seller est le joyau de notre boutique, spécifiquement formulé pour la régénération cellulaire, il rehausse l'élasticité et la fermeté de votre peau."
      },
      {
        id: "1regenerateurCellulaire",
        subTitle: "Effacez vos imperfections et soulagez vos maux",
        text: [
          "Nous croyons en la beauté naturelle de chaque individu, et ce produit est là pour la révéler. Notre régénérateur cellulaire lutte efficacement contre la cellulite, diminue les vergetures, traite les problèmes d'acné ou apaise les symptômes d'eczéma et de psoriasis. Finies les démangeaisons et les irritations. Votre peau vous remerciera !",
          "Il permet également d'accélérer la cicatrisation des plaies et d'améliorer l'aspect des cicatrices, que ce soit pour des marques post-chirurgicales ou des cicatrices d'acné. Il régènère vos cellules et les estompe considérablement. Retrouvez une peau lisse et uniforme, et surtout, retrouvez votre confiance en vous.",
          "Notre produit améliore la rétention d'eau, soulageant ainsi les sensations de gonflement aux mains et aux pieds et les douleurs qui y sont parfois associées. Il améliore également la circulation sanguine, apportant un soulagement quasi immédiat dans votre corps."
        ],
        picture675: "./img/jpg/product/REIllusText675.jpg",
        picture450: "./img/jpg/product/REIllusText450.jpg",
        picture900: "./img/jpg/product/REIllusText900.jpg"
      },
      {
        id: "2regenerateurCellulaire",
        subTitle: "Revitalisez votre santé",
        text: "Ce formidable allié pour votre santé globale renforce votre système nerveux et immunitaire, contribuant à un cœur en pleine forme. Grâce à sa richesse en vitamine C, il encourage la formation et le maintien du collagène, garantissant la santé de vos tissus, cartilages, ligaments et os."
      },
      {
        id: "3regenerateurCellulaire",
        subTitle: "Boostez votre quotidien",
        text: "En stimulant l’énergie naturellement présente dans votre organisme, il vous offre une vitalité renouvelée. Vous vous sentez plus dynamique et épanoui(e) au quotidien"
      },
      {
        id: "4regenerateurCellulaire",
        subTitle: "Respirez à pleins poumons",
        text: "Son pouvoir antioxydant stimule les fonctions respiratoires, apaisant ainsi les allergies et les symptômes de l'asthme. Un produit unique pour des bienfaits multiples : laissez notre formule vous transformer, apaiser vos maux et améliorer votre quotidien."
      },
      {
        id: "5regenerateurCellulaire",
        subTitle: "Optez pour ce produit unique",
        text: "Procurez-vous ce joyau naturel et découvrez comment un seul produit peut changer votre vie."
      },
      {
        id: "6regenerateurCellulaire",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "7regenerateurCellulaire",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "regenerateurCellulaire0",
        pictureLove: "./img/jpg/product/apportQ10.jpg",
        textLove:
          "Pour une action renforcée et des résultats encore plus impressionnants, notre produit phare peut être associé à notre formule riche en ubiquinol, qui constitue une version très puissante de la CoQ10. Ce mélange stimule la régénération cellulaire pour un effet particulièrement marqué sur les vergetures profondes et les varices importantes."
      },
      {
        id: "regenerateurCellulaire1",
        pictureLove: "./img/jpg/product/guerisseurDeMaux.jpg",
        textLove:
          "Face à une cellulite récalcitrante, augmentez l'efficacité de votre traitement en l'associant à notre produit aux multiples bienfaits, le Guérisseur des maux. Cette association renforcée fournit des enzymes CoQ10 supplémentaires, boostant ainsi l'action anti-cellulite de notre best-seller."
      },
      {
        id: "regenerateurCellulaire2",
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Si vous cherchez à revitaliser votre quotidien, je vous recommande vivement notre booster d'énergie. Ce puissant catalyseur de bien-être saura insuffler à votre quotidien la vitalité et la vigueur que vous méritez tout à long de la journée. Finis les coups de fatigue, vivez pleinement votre journée !"
      },
      {
        id: "regenerateurCellulaire3",
        pictureLove: "./img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Pour des problèmes cutanés, notre chouchou se combine parfaitement avec nos produits de la gamme beauté. Pour retrouver une peau adoucie et éliminer les impuretés de la journée, le gel nettoyant sera satisfaire ces objectifs."
      },
      {
        id: "regenerateurCellulaire4",
        pictureLove: "./img/jpg/product/cocoOil.jpg",
        textLove:
          "Ne laissez pas votre peau s’assécher et dirigez-vous vers notre huile de coco qui regorge de bienfaits. Elle vient de Tahiti et est sous forme liquide car elle n’a subi aucune transformation."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante0ProblemesCutanes").text],
  picture: "./img/jpg/product/regenerateurCellulaire.jpg",
  colors: {
    textColor: "#83218f"
  },
  inSummary: [
    {
      id: "RCiSGP0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "RCiSPC1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "RCiSS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "RCiSB3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "RCiSBE4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
