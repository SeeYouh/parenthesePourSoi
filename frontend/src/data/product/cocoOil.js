import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const cocoOil = {
  nameProduct: "Coco’oil",
  summary: {
    title:
      "Un précieux élixir polyvalent, un véritable trésor pour votre santé et votre beauté.",
    paragraph: [
      {
        text: "Notre huile coco est riche en propriétés antioxydantes, ce qui en fait une alliée précieuse pour votre santé. Vous pouvez même l'ingérer pour bénéficier de ses bienfaits internes. De plus, il possède des vertus cicatrisantes, idéales pour favoriser la guérison des blessures cutanées. Les coups de soleil, les brûlures, les rougeurs ou les irritations liées au rasage sont apaisés efficacement. Vous serez également surpris de constater que notre élixir peut enlever les croûtes de lait chez les tout-petits, offrant ainsi un soulagement aux parents soucieux du bien-être de leur enfant. Les démangeaisons dues au psoriasis ou à l'eczéma sont également atténuées, offrant un soulagement bienvenu à ceux qui souffrent de ces affections cutanées."
      },
      {
        text: "Grâce à sa propriété hydratante exceptionnelle, ce produit nourrit votre peau en profondeur, la laissant douce, souple et éclatante. De plus, il peut être utilisé comme un masque capillaire revitalisant, offrant une nutrition intense à vos cheveux et les laissant brillants et soyeux. Pour celles et ceux qui cherchent une solution démaquillante douce mais efficace, notre élixir est là pour répondre à vos besoins. Il élimine en douceur le maquillage sans agresser votre peau délicate."
      },
      {
        text: "Et ce n'est pas tout ! Notre élixir peut même être utilisé en cuisine, sans être cuit. Il ajoute une touche subtile à vos plats et vous permet de bénéficier de ses bienfaits internes. Son état liquide et son odeur légère et subtile en font un plaisir à utiliser au quotidien."
      },
      {
        text: "N'hésitez plus, laissez-vous séduire par notre huile coco aux multiples vertus."
      },
      {
        text: "Dites adieu aux fringales salées qui sont omniprésentes ! Notre produit innovant est spécialement formulé pour réduire ces envies irrésistibles. En le choisissant, vous vous donnez toutes les chances de réussir votre gestion du poids de manière saine et durable."
      },
      {
        text: "Mesdames, notre produit a été spécialement formulé pour répondre à vos besoins spécifiques. Il favorise l'équilibre hormonal, vous permettant ainsi de mieux gérer les fluctuations de votre cycle et de retrouver un bien-être intérieur."
      },
      {
        text: "Un produit efficace pour soutenir la santé musculaire et osseuse !"
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante0ProblemesCutanes").text],
  picture: "./img/jpg/product/cocoOil.jpg"
};
