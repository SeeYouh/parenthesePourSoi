import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const regenerateurCellulaire = {
  nameProduct: "Régénérateur cellulaire",
  summary: {
    title: "Un support quotidien.",
    paragraph: [
      {
        subTitle:
          "Un allié incomparable pour une peau radieuse : Dites bonjour à votre nouveau vous",
        text: "Découvrez notre best-seller, le joyau de notre boutique, spécifiquement formulé pour la régénération cellulaire, rehausse l'élasticité et la fermeté de votre peau. Luttez efficacement contre la cellulite, minimisez les vergetures, traitez les problèmes d'acné ou apaisez les symptômes d'eczéma et de psoriasis. Votre peau vous remerciera !"
      },
      {
        subTitle:
          "Une santé globale revitalisée : Plus qu'une simple beauté de peau",
        text: "Laissez-vous surprendre par les bienfaits de notre produit au-delà de votre peau. Ce formidable allié pour votre santé globale renforce votre système nerveux et immunitaire, contribuant à un cœur en pleine forme. Grâce à sa richesse en vitamine C, il encourage la formation et le maintien du collagène, garantissant la santé de vos tissus, cartilages, ligaments et os."
      },
      {
        subTitle:
          "Une cicatrisation boostée et une confiance en soi retrouvée : Vers une peau lisse et uniforme",
        text: "Nous croyons en la beauté naturelle de chaque individu, et ce produit est là pour la révéler. Accélérez la cicatrisation des plaies et améliorez l'aspect des cicatrices, que ce soit pour des marques post-chirurgicales ou des cicatrices d'acné. Retrouvez une peau lisse et uniforme, et surtout, retrouvez votre confiance en vous."
      },
      {
        subTitle:
          "Énergie stimulée et soulagement corporel : Reboostez votre quotidien",
        text: "Offrez-vous le regain d'énergie que vous méritez. Notre produit réduit la rétention d'eau, soulageant ainsi les sensations de gonflement aux mains et aux pieds. Il améliore également la circulation sanguine, apportant un soulagement bienvenu aux jambes lourdes et douloureuses."
      },
      {
        subTitle: "Respiration facilitée : Respirez la vie à pleins poumons",
        text: "Son pouvoir antioxydant stimule les fonctions respiratoires, apaisant ainsi les allergies et les symptômes de l'asthme. Un produit unique pour des bienfaits multiples : laissez notre formule vous transformer et améliorer votre quotidien."
      },
      {
        text: "N'attendez plus, contactez-nous dès aujourd'hui pour découvrir comment notre produit peut changer votre vie. Nous avons hâte de vous aider à faire ressortir le meilleur de vous-même !"
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
        pictureLove: "./img/jpg/product/equilibreCorpsEsprit.jpg",
        textLove:
          "Pour une action renforcée et des résultats encore plus impressionnants, notre produit phare peut être associé à notre formule riche en ubiquinol, qui constitue une version très puissante de la CoQ10. Ce mélange stimule la régénération cellulaire pour un effet particulièrement marqué sur les vergetures profondes et les varices importantes. Ces deux produits, utilisés ensemble, vous offrent un traitement intensif pour une peau saine et revitalisée, ainsi qu'une amélioration visible de votre circulation sanguine."
      },
      {
        pictureLove: "./img/jpg/product/equilibreCorpsEsprit.jpg",
        textLove:
          "Face à une cellulite récalcitrante, augmentez l'efficacité de votre traitement en l'associant à notre produit aux multiples bienfaits, le Guérisseur des maux. Cette association renforcée fournit des enzymes CoQ10 supplémentaires, boostant ainsi l'action anti-cellulite de notre best-seller. Ce duo agit en synergie pour cibler efficacement la cellulite tenace, tout en apportant une panoplie d'autres bienfaits pour votre santé et votre bien-être général."
      },
      {
        pictureLove: "./img/jpg/product/equilibreCorpsEsprit.jpg",
        textLove:
          "Si vous cherchez à revitaliser votre quotidien, je vous recommande vivement notre dynamiseur d'énergie. Ce puissant catalyseur de bien-être saura insuffler à votre quotidien la vitalité et la vigueur que vous méritez."
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
