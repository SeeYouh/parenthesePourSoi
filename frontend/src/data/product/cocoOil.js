import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const cocoOil = {
  nameProduct: "Coco’oil",
  id: "cocoOil",

  summary: {
    title:
      "Un précieux élixir polyvalent, un véritable trésor pour votre santé et votre beauté.",
    paragraph: [
      {
        id: "0cocoOil",
        subTitle: "Choisissez un antioxydant naturel",
        text: "Notre huile de coco est riche en propriétés antioxydantes, ce qui en fait une alliée précieuse pour votre santé. Vous pouvez même l'ingérer pour bénéficier de ses bienfaits internes."
      },
      {
        id: "1cocoOil",
        subTitle: "Bénéficiez des bienfaits de l’huile",
        text: [
          "Découvrez l'huile de coco aux propriétés exceptionnelles qui transformera votre routine beauté et soins personnels. Grâce à sa richesse en nutriments, cette huile nourrit votre peau en profondeur, lui offrant une hydratation incomparable. Appliquée régulièrement, elle laissera votre peau douce, souple et éclatante, lui redonnant toute sa vitalité et sa jeunesse.",
          "Outre ses qualités nourrissantes, notre huile de coco possède des vertus cicatrisantes qui en font un allié précieux pour la santé de votre peau. Si vous avez des blessures cutanées telles que des coups de soleil, des brûlures, des rougeurs ou des irritations liées au rasage, l'huile de coco apaise efficacement et favorise la guérison rapide. En outre, si vous êtes confronté(e) à des problèmes de peau tels que le psoriasis ou l'eczéma, l'huile de coco peut offrir un soulagement bienvenu. En atténuant les démangeaisons et en apaisant les inflammations, elle vous aide à mieux vivre avec ces affections cutanées parfois contraignantes.",
          "Mais les bienfaits de notre huile de coco ne s'arrêtent pas là. Elle se révèle être un masque capillaire revitalisant d'exception. En l'appliquant sur vos cheveux, vous offrez à votre crinière une nutrition intense. Les cheveux secs et abîmés retrouvent leur éclat naturel, deviennent plus faciles à coiffer et retrouvent une texture soyeuse. Et pour les tout-petits qui souffrent de croûtes de lait, l'huile de coco se révèle être une solution douce et apaisante."
        ],
        picture450: "/img/jpg/product/CocoIllusText450.jpg",
        picture675: "/img/jpg/product/CocoIllusText675.jpg",
        picture900: "/img/jpg/product/CocoIllusText900.jpg"
      },
      {
        id: "2cocoOil",
        subTitle: "Démaquillez-vous en douceur",
        text: "Pour celles et ceux qui cherchent une solution démaquillante douce mais efficace, notre élixir est là pour répondre à vos besoins. Il élimine en douceur le maquillage sans agresser votre peau délicate."
      },
      {
        id: "3cocoOil",
        subTitle: "Cuisinez sainement",
        text: "Et ce n'est pas tout ! Notre élixir peut même être utilisé en cuisine, sans être cuit. Il ajoute une touche subtile à vos plats et vous permet de bénéficier de ses bienfaits internes. Son état liquide et son odeur légère et subtile en font un plaisir à utiliser au quotidien."
      },
      {
        id: "4cocoOil",
        subTitle: "Découvrez",
        text: "N'hésitez plus, laissez-vous séduire par notre huile de coco aux multiples vertus."
      },
      {
        id: "5cocoOil",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "6cocoOil",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "COGelNettoyant0",
        link: "heRelaxante",
        pictureLove: "/img/jpg/product/heRelaxante.jpg",
        textLove:
          "L’huile coco peut être combinée à l'huile essentielle Relaxante qui est bénéficque pour la santé mentale en apaisant la dépression, réduisant l'anxiété et le stress, et favorisant une sensation de bien-être. Son parfum relaxant aide à calmer l'esprit et procure une sensation de tranquillité intérieure. Elle s'avère également efficace pour favoriser l'endormissement, améliorer la qualité du sommeil, et apaiser les irritations cutanées, offrant un soulagement rapide et apaisant."
      },
      {
        id: "CORegenerateurCellulaire1",
        link: "regenerateurCellulaire",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Grâce à ses bienfaits pour la peau, c'est notre produit phare. Il améliore la régénération cellulaire, favorisant l'élasticité et la fermeté de la peau pour un teint éclatant et une apparence jeune. Il traite la cellulite, les vergetures, l'acné, l'eczéma et le psoriasis. En plus, il soutient la santé globale en renforçant le système nerveux et immunitaire, favorisant la santé cardiovasculaire et la réparation osseuse. En stimulant votre énergie naturelle, il offre une vitalité renouvelée, diminue la rétention d'eau et améliore la circulation sanguine, soulageant les jambes lourdes et douloureuses. Il a également un pouvoir antioxydant bénéfique pour les fonctions respiratoires"
      },
      {
        id: "COALLHE2",
        link: "heSoulageante",
        pictureLove: "/img/jpg/product/heSoulageante.jpg",
        textLove:
          "L’huile coco peut être combinée à l'huile essentielle Rafraîchissante qui stimule la concentration et la vivacité mentale. Elle combat les nausées, le mal des transports et les maux de tête pour un soulagement rapide et naturel. Elle améliore le confort respiratoire en apaisant la toux et en dégageant les voies respiratoires. De plus, elle apaise les démangeaisons, réduit les rougeurs et calme les piqûres d'insectes, offrant une peau apaisée. Grâce à ses propriétés apaisantes, elle détend les tensions musculaires et favorise une sensation de calme. Elle est aussi bénéfique pour soulager les douleurs articulaires et aide à réduire les bouffées de chaleur pendant la ménopause. Pour les sportifs, elle soulage les foulures, les entorses et les douleurs musculaires, favorisant une récupération plus rapide."
      },
      {
        id: "COALLHE2",
        link: "heRafraichissant",
        pictureLove: "/img/jpg/product/heRafraichissant.jpg",
        textLove:
          "L’huile coco peut être combinée à l'huile essentielle Soulageante qui possède de nombreuses propriétés curatives, diminuant les maux de tête et les symptômes des maladies saisonnières. Elle a des effets positifs sur le bien-être en diminuant l'anxiété, en augmentant la vivacité mentale et en améliorant l'humeur. Elle aide à soulager les tensions corporelles et les irritations cutanées, ainsi que les douleurs associées au grincement de dents. De plus, elle repousse les poux et les moustiques, offrant une protection naturelle contre ces nuisibles."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante0ProblemesCutanes").text],
  picture: "/img/jpg/product/cocoOil.jpg",
  colors: {
    textColor: "#2c368b",
    titleColorInSummary: "#2c368b",
    linkTextColor: "#2c368b",
    bgColorInSummary0: "#6b72ae",
    bgColorInSummary1: "#e6e7f1",
    linearGradient0: "linear-gradient(105deg, #6b72ae, #9299ff)",
    linearGradient1: "linear-gradient(to right, #969bc5, #e6e7f1)",
    shadowColor: "#e6e7f1"
  },
  inSummary: [
    {
      id: "COiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "COiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "COiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "COiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "COiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
