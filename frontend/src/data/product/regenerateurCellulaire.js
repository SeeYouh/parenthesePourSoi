import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const regenerateurCellulaire = {
  nameProduct: "Régénérateur cellulaire",
  summary: {
    title: "Un support quotidien.",
    paragraph: [
      {
        subTitle: "Dites bonjour à votre nouveau vous",
        text: "Notre best-seller est le joyau de notre boutique, spécifiquement formulé pour la régénération cellulaire, il rehausse l'élasticité et la fermeté de votre peau."
      },
      {
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
        subTitle: "Revitalisez votre santé",
        text: "Ce formidable allié pour votre santé globale renforce votre système nerveux et immunitaire, contribuant à un cœur en pleine forme. Grâce à sa richesse en vitamine C, il encourage la formation et le maintien du collagène, garantissant la santé de vos tissus, cartilages, ligaments et os."
      },
      {
        subTitle: "Boostez votre quotidien",
        text: "En stimulant l’énergie naturellement présente dans votre organisme, il vous offre une vitalité renouvelée. Vous vous sentez plus dynamique et épanoui(e) au quotidien"
      },
      {
        subTitle: "Respirez à pleins poumons",
        text: "Son pouvoir antioxydant stimule les fonctions respiratoires, apaisant ainsi les allergies et les symptômes de l'asthme. Un produit unique pour des bienfaits multiples : laissez notre formule vous transformer, apaiser vos maux et améliorer votre quotidien."
      },
      {
        subTitle: "Optez pour ce produit unique",
        text: "Procurez-vous ce joyau naturel et découvrez comment un seul produit peut changer votre vie."
      },
      {
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        pictureLove: "./img/jpg/product/apportQ10.jpg",
        textLove:
          "Pour une action renforcée et des résultats encore plus impressionnants, notre produit phare peut être associé à notre formule riche en ubiquinol, qui constitue une version très puissante de la CoQ10. Ce mélange stimule la régénération cellulaire pour un effet particulièrement marqué sur les vergetures profondes et les varices importantes."
      },
      {
        pictureLove: "./img/jpg/product/guerisseurDeMaux.jpg",
        textLove:
          "Face à une cellulite récalcitrante, augmentez l'efficacité de votre traitement en l'associant à notre produit aux multiples bienfaits, le Guérisseur des maux. Cette association renforcée fournit des enzymes CoQ10 supplémentaires, boostant ainsi l'action anti-cellulite de notre best-seller."
      },
      {
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Si vous cherchez à revitaliser votre quotidien, je vous recommande vivement notre booster d'énergie. Ce puissant catalyseur de bien-être saura insuffler à votre quotidien la vitalité et la vigueur que vous méritez tout à long de la journée. Finis les coups de fatigue, vivez pleinement votre journée !"
      },
      {
        pictureLove: "./img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Pour des problèmes cutanés, notre chouchou se combine parfaitement avec nos produits de la gamme beauté. Pour retrouver une peau adoucie et éliminer les impuretés de la journée, le gel nettoyant sera satisfaire ces objectifs."
      },
      {
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
  }
};
