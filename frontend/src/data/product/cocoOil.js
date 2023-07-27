import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const cocoOil = {
  nameProduct: "Coco’oil",
  summary: {
    title:
      "Un précieux élixir polyvalent, un véritable trésor pour votre santé et votre beauté.",
    paragraph: [
      {
        subTitle: "Antioxydant puissant",
        text: "Notre huile de coco est riche en propriétés antioxydantes, ce qui en fait une alliée précieuse pour votre santé. Vous pouvez même l'ingérer pour bénéficier de ses bienfaits internes."
      },
      {
        subTitle: "Cicatrisation naturelle",
        text: "De plus, elle possède des vertus cicatrisantes, idéales pour favoriser la guérison des blessures cutanées. Les coups de soleil, les brûlures, les rougeurs ou les irritations liées au rasage sont apaisés efficacement. Vous serez également surpris de constater que notre élixir peut enlever les croûtes de lait chez les tout-petits, offrant ainsi un soulagement aux parents soucieux du bien-être de leur enfant. Les démangeaisons dues au psoriasis ou à l'eczéma sont également atténuées, offrant un soulagement bienvenu à ceux qui souffrent de ces affections cutanées.",
        picture450: "./img/jpg/product/CocoIllusText450.jpg",
        picture675: "./img/jpg/product/CocoIllusText675.jpg",
        picture900: "./img/jpg/product/CocoIllusText900.jpg"
      },
      {
        subTitle: "Hydratation intense",
        text: "Grâce à sa propriété hydratante exceptionnelle, ce produit nourrit votre peau en profondeur, la laissant douce, souple et éclatante. De plus, il peut être utilisé comme un masque capillaire revitalisant, offrant une nutrition intense à vos cheveux et les laissant brillants et soyeux."
      },
      {
        subTitle: "Démaquillant doux",
        text: "Pour celles et ceux qui cherchent une solution démaquillante douce mais efficace, notre élixir est là pour répondre à vos besoins. Il élimine en douceur le maquillage sans agresser votre peau délicate."
      },
      {
        subTitle: "Cuisine saine",
        text: "Et ce n'est pas tout ! Notre élixir peut même être utilisé en cuisine, sans être cuit. Il ajoute une touche subtile à vos plats et vous permet de bénéficier de ses bienfaits internes. Son état liquide et son odeur légère et subtile en font un plaisir à utiliser au quotidien."
      },
      {
        subTitle: "Invitation à la Découverte",
        text: "N'hésitez plus, laissez-vous séduire par notre huile de coco aux multiples vertus."
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
        id: "CoGelNettoyant0",
        pictureLove: "./img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Pour les problèmes cutanés, je vous suggère d'essayer notre gel nettoyant hydratant, reconnu pour ses résultats impressionnants."
      },
      {
        id: "CoRegenerateurCellulaire1",
        pictureLove: "./img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Je vous recommande également notre produit favori, qui est exceptionnel pour régénérer les cellules de votre peau."
      },
      {
        id: "CoALLHE2",
        pictureLove: "./img/jpg/product/AllHE.jpg",
        textLove:
          "Pour l’utilisation des huiles essentielles, il est conseillé de les diluer dans notre huile hydratante."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante0ProblemesCutanes").text],
  picture: "./img/jpg/product/cocoOil.jpg",
  colors: {
    textColor: "#2c368b"
  }
};
