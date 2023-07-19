import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const harmonie = {
  nameProduct: "Harmonie",
  summary: {
    title: "Soutenez votre corps et votre beauté.",
    paragraph: [
      {
        subTitle: "Boostez votre moral avec notre antidépresseur naturel",
        text: "Notre produit, riche en ingrédients aux propriétés antidépressives naturelles, est votre allié pour améliorer significativement votre humeur et votre moral. Il agit comme un bouclier contre la fatigue physique et mentale, vous aidant à retrouver votre énergie vitale et à aborder chaque journée avec enthousiasme. Vous constaterez également une amélioration de votre sommeil, favorisant un repos réparateur et une détente profonde. Enfin, notre formule unique stimule vos capacités cognitives, vous permettant ainsi d'optimiser votre concentration et votre clarté mentale."
      },
      {
        subTitle:
          "Retrouvez votre mobilité avec notre anti-inflammatoire efficace",
        text: "Harmonie est spécialement conçu pour offrir une efficacité anti-inflammatoire exceptionnelle, soulageant ainsi les douleurs liées à l'arthrite, l'arthrose, l'ostéoporose, les rhumatismes et bien d'autres affections. Retrouvez votre mobilité et votre liberté grâce à notre solution naturelle et puissante. Il améliore également la santé oculaire en préservant la santé de vos yeux. De plus, il renforce votre système immunitaire, vous aidant à vous remettre plus rapidement des maladies et à prévenir les infections.",
        picture450: "./img/jpg/product/eliteIllusText450.jpg",
        picture675: "./img/jpg/product/eliteIllusText675.jpg",
        picture900: "./img/jpg/product/eliteIllusText900.jpg"
      },
      {
        subTitle:
          "Optez pour une digestion saine avec notre détoxifiant naturel",
        text: "Les ingrédients minutieusement sélectionnés de notre produit favorisent une digestion saine et équilibrée, vous évitant ainsi les troubles digestifs courants. Grâce à ses propriétés détoxifiantes, il vous aide à éliminer les toxines accumulées dans votre corps, favorisant ainsi la perte de poids naturelle et durable."
      },
      {
        subTitle:
          "Retrouvez une peau saine avec notre accélérateur de cicatrisation",
        text: "Notre solution naturelle accélère la cicatrisation des verrues, des boutons de fièvre et des aphtes, vous permettant de retrouver une peau saine et apaisée. Enfin, il aide à réduire l'eczéma grâce à sa teneur en oméga-6, offrant un soulagement bienvenu aux problèmes de peau."
      },
      {
        subTitle: "Rajeunissez avec notre stimulateur de DHEA",
        text: "Et le plus de ce produit, c’est son action sur la production de DHEA, l'hormone anti-vieillissement. Vous retrouverez une peau éclatante, plus lisse et plus hydratée, grâce à une diminution notable de la sécheresse cutanée et à une stimulation de la production de collagène. De plus, notre formule aide à réduire la chute des cheveux, vous offrant ainsi une chevelure volumineuse et luxuriante."
      },
      {
        subTitle:
          "Soulagez vos douleurs menstruelles avec notre produit naturel",
        text: "Mesdames, notre produit est spécialement conçu pour vous aider à atténuer les douleurs menstruelles grâce à sa teneur en oméga-6, vous offrant ainsi un soulagement bien mérité. De plus, il diminue les désagréments de la ménopause en stimulant la production d'œstrogènes, vous permettant de traverser cette période de transition avec sérénité et confort."
      },
      {
        subTitle:
          "Sentez-vous belle et en forme avec notre produit exceptionnel",
        text: "Sentez-vous belle et en forme la journée et dormez paisiblement la nuit avec ce produit exceptionnel. Notre formule naturelle est conçue pour améliorer votre bien-être général, en vous aidant à vous sentir plus énergique et en forme pendant la journée, tout en favorisant un sommeil réparateur la nuit. Profitez des bienfaits de notre produit pour une vie plus saine et plus équilibrée."
      }
    ],
    youLikeIt: [
      {
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Pour une santé mentale optimale et la prévention du burn-out, ce produit se marie idéalement avec un autre qui offre un regain d'énergie, vous permettant de traverser la journée avec un sourire éclatant."
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre2FatigueSommeil").text],
  picture: "./img/jpg/product/harmonie.jpg",
  colors: {
    textColor: "#30d1d9",
    textColor2: "#c433bc"
  }
};
