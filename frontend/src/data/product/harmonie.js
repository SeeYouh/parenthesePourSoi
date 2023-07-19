import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const harmonie = {
  nameProduct: "Harmonie",
  summary: {
    title: "Soutenez votre corps et votre beauté.",
    paragraph: [
      {
        text: "Notre produit est composé d’ingrédients aux propriétés antidépressives naturelles vous permettant de ressentir une amélioration significative de votre humeur et de votre moral. Il agit en tant que rempart contre la fatigue physique et mentale, vous aidant à retrouver votre énergie vitale et à aborder chaque journée avec enthousiasme. Vous constaterez également une amélioration de votre sommeil, favorisant un repos réparateur et une détente profonde. Enfin, notre formule unique stimule vos capacités cognitives, vous permettant ainsi d'optimiser votre concentration et votre clarté mentale."
      },
      {
        text: "“Harmonie” est spécialement conçue pour offrir une efficacité anti-inflammatoire exceptionnelle, soulageant ainsi les douleurs liées à l'arthrite, l'arthrose, l'ostéoporose, les rhumatismes et bien d'autres affections. Retrouvez votre mobilité et votre liberté grâce à notre solution naturelle et puissante. Il améliore également la santé oculaire en préservant la santé de vos yeux. De plus, il renforce votre système immunitaire, vous aidant à vous remettre plus rapidement des maladies et à prévenir les infections."
      },
      {
        text: "Ses ingrédients minutieusement sélectionnés favorisent une digestion saine et équilibrée vous évitant ainsi les troubles digestifs courants. Grâce à ses propriétés détoxifiantes, il vous aide à éliminer les toxines accumulées dans votre corps, favorisant ainsi la perte de poids naturelle et durable."
      },
      {
        text: "Notre solution naturelle accélère la cicatrisation des verrues, des boutons de fièvre et des aphtes, vous permettant de retrouver une peau saine et apaisée. Enfin, il aide à réduire l'eczéma grâce à sa teneur en oméga-6, offrant un soulagement bienvenu aux problèmes de peau."
      },
      {
        text: "Et le plus de ce produit, c’est son action sur la production de DHEA, l'hormone anti-vieillissement. Vous retrouverez une peau éclatante, plus lisse et plus hydratée, grâce à une diminution notable de la sécheresse cutanée et à une stimulation de la production de collagène. De plus, notre formule aide à réduire la chute des cheveux, vous offrant ainsi une chevelure volumineuse et luxuriante."
      },
      {
        text: "Mesdames, notre produit est spécialement conçu pour vous aider à atténuer les douleurs menstruelles grâce à sa teneur en oméga-6, vous offrant ainsi un soulagement bien mérité. De plus, il diminue les désagréments de la ménopause en stimulant la production d'œstrogènes, vous permettant de traverser cette période de transition avec sérénité et confort."
      },
      {
        text: "Sentez-vous belle et en forme la journée et dormez paisiblement la nuit avec ce produit exceptionnel."
      }
    ],
    youLikeIt: [
      {
        pictureLove: "./img/jpg/product/goutteMinceur.jpg",
        textLove:
          "La détox’ étant la base de toute cure minceur, nos gouttes super puissantes devraient également vous intéresser pour perdre du poids sans effet yoyo."
      },
      {
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Si votre système digestif et intestinal sont déséquilibrés, les pré-probiotiques devraient réguler tout ceci."
      },
      {
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Une autre approche consiste à rétablir l'équilibre de votre système digestif et intestinal en fournissant des légumes et des vitamines essentiels par le biais d'une détoxification végétale."
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre2FatigueSommeil").text],
  picture: "./img/jpg/product/harmonie.jpg",
  colors: {
    textColor: "#7e1450"
  }
};
