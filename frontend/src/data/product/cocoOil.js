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
        subTitle: "Antioxydant puissant",
        text: "Notre huile de coco est riche en propriétés antioxydantes, ce qui en fait une alliée précieuse pour votre santé. Vous pouvez même l'ingérer pour bénéficier de ses bienfaits internes."
      },
      {
        id: "1cocoOil",
        subTitle: "Cicatrisation naturelle",
        text: "De plus, elle possède des vertus cicatrisantes, idéales pour favoriser la guérison des blessures cutanées. Les coups de soleil, les brûlures, les rougeurs ou les irritations liées au rasage sont apaisés efficacement. Vous serez également surpris de constater que notre élixir peut enlever les croûtes de lait chez les tout-petits, offrant ainsi un soulagement aux parents soucieux du bien-être de leur enfant. Les démangeaisons dues au psoriasis ou à l'eczéma sont également atténuées, offrant un soulagement bienvenu à ceux qui souffrent de ces affections cutanées.",
        picture450: "/img/jpg/product/CocoIllusText450.jpg",
        picture675: "/img/jpg/product/CocoIllusText675.jpg",
        picture900: "/img/jpg/product/CocoIllusText900.jpg"
      },
      {
        id: "2cocoOil",
        subTitle: "Hydratation intense",
        text: "Grâce à sa propriété hydratante exceptionnelle, ce produit nourrit votre peau en profondeur, la laissant douce, souple et éclatante. De plus, il peut être utilisé comme un masque capillaire revitalisant, offrant une nutrition intense à vos cheveux et les laissant brillants et soyeux."
      },
      {
        id: "3cocoOil",
        subTitle: "Démaquillant doux",
        text: "Pour celles et ceux qui cherchent une solution démaquillante douce mais efficace, notre élixir est là pour répondre à vos besoins. Il élimine en douceur le maquillage sans agresser votre peau délicate."
      },
      {
        id: "4cocoOil",
        subTitle: "Cuisine saine",
        text: "Et ce n'est pas tout ! Notre élixir peut même être utilisé en cuisine, sans être cuit. Il ajoute une touche subtile à vos plats et vous permet de bénéficier de ses bienfaits internes. Son état liquide et son odeur légère et subtile en font un plaisir à utiliser au quotidien."
      },
      {
        id: "5cocoOil",
        subTitle: "Invitation à la Découverte",
        text: "N'hésitez plus, laissez-vous séduire par notre huile de coco aux multiples vertus."
      },
      {
        id: "6cocoOil",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "7cocoOil",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "COGelNettoyant0",
        pictureLove: "/img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Pour les problèmes cutanés, je vous suggère d'essayer notre gel nettoyant hydratant, reconnu pour ses résultats impressionnants."
      },
      {
        id: "CORegenerateurCellulaire1",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Je vous recommande également notre produit favori, qui est exceptionnel pour régénérer les cellules de votre peau."
      },
      {
        id: "COALLHE2",
        pictureLove: "/img/jpg/product/AllHE.jpg",
        textLove:
          "Pour l’utilisation des huiles essentielles, il est conseillé de les diluer dans notre huile hydratante."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante0ProblemesCutanes").text],
  picture: "/img/jpg/product/cocoOil.jpg",
  colors: {
    textColor: "#2c368b",
    titleColorInSummary: "#161b46",
    bgColorInSummary: "#b6bae2"
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
