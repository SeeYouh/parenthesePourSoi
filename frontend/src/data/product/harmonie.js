import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const harmonie = {
  nameProduct: "Harmonie",
  summary: {
    title: "Soutenez votre corps et votre beauté.",
    paragraph: [
      {
        id: "0harmonie",
        subTitle: "Boostez votre moral avec notre antidépresseur naturel",
        text: "Notre produit, riche en ingrédients aux propriétés antidépressives naturelles, est votre allié pour améliorer significativement votre humeur et votre moral. Il agit comme un bouclier contre la fatigue physique et mentale, vous aidant à retrouver votre énergie vitale et à aborder chaque journée avec enthousiasme. Vous constaterez également une amélioration de votre sommeil, favorisant un repos réparateur et une détente profonde. Enfin, notre formule unique stimule vos capacités cognitives, vous permettant ainsi d'optimiser votre concentration et votre clarté mentale."
      },
      {
        id: "1harmonie",
        subTitle:
          "Retrouvez votre mobilité avec notre anti-inflammatoire efficace",
        text: [
          "Il est spécialement conçu pour offrir une efficacité anti-inflammatoire exceptionnelle, soulageant ainsi les douleurs liées à l'arthrite, l'arthrose, l'ostéoporose, les rhumatismes et bien d'autres affections. Retrouvez votre mobilité et votre liberté grâce à notre solution naturelle et puissante. Il améliore également la santé oculaire en préservant la santé de vos yeux. De plus, il renforce votre système immunitaire, vous aidant à vous remettre plus rapidement des maladies et à prévenir les infections.",
          "Les ingrédients minutieusement sélectionnés de notre produit favorisent une digestion saine et équilibrée, vous évitant ainsi les troubles digestifs courants. Grâce à ses propriétés détoxifiantes, il vous aide à éliminer les toxines accumulées dans votre corps, favorisant ainsi ainsi un mieux-être intérieur."
        ],
        picture450: "./img/jpg/product/eliteIllusText450.jpg",
        picture675: "./img/jpg/product/eliteIllusText675.jpg",
        picture900: "./img/jpg/product/eliteIllusText900.jpg"
      },
      {
        id: "2harmonie",
        subTitle:
          "Retrouvez une peau saine avec notre accélérateur de cicatrisation",
        text: "Notre solution naturelle accélère la cicatrisation des verrues, des boutons de fièvre et des aphtes, vous permettant de retrouver une peau saine et apaisée. Enfin, il aide à réduire l'eczéma grâce à sa teneur en oméga-6, offrant un soulagement bienvenu aux problèmes de peau."
      },
      {
        id: "3harmonie",
        subTitle: "Rajeunissez avec notre stimulateur de DHEA",
        text: "Et le plus de ce produit, c’est son action sur la production de DHEA, l'hormone anti-vieillissement. Vous retrouverez une peau éclatante, plus lisse et plus hydratée, grâce à une diminution notable de la sécheresse cutanée et à une stimulation de la production de collagène. De plus, notre formule aide à réduire la chute des cheveux, vous offrant ainsi une chevelure volumineuse et luxuriante."
      },
      {
        id: "4harmonie",
        subTitle: "Pour vous, Mesdames",
        text: "Mesdames, notre produit est spécialement conçu pour vous aider à atténuer les douleurs menstruelles grâce à sa teneur en oméga-6, vous offrant ainsi un soulagement bien mérité. De plus, il diminue les désagréments de la ménopause en stimulant la production d'œstrogènes, vous permettant de traverser cette période de transition avec sérénité et confort."
      },
      {
        id: "5harmonie",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "6harmonie",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "HBoosterEnergie0",
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Pour une santé mentale optimale et la prévention du burn-out, ce produit se marie idéalement avec un autre qui offre un regain d'énergie, vous permettant de traverser la journée avec un sourire éclatant."
      },
      {
        id: "HGelNettoyant1",
        pictureLove: "./img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Pour une peau hydratée et adoucie tout en éliminant les impuretés de la journée, découvrez notre gel nettoyant naturel. Plongez dans une expérience de pureté et explorez notre gamme de produits pour une routine de soins naturels complète."
      },
      {
        id: "HserumFlash2",
        pictureLove: "./img/jpg/product/serumFlash.jpg",
        textLove:
          "Vos yeux sont gonflés au réveil ? Alors, regardez notre sérum instantané, une véritable révolution pour faire disparaitre les rides, ridules et poches sous les yeux en seulement 90 secondes. Plongez dans une expérience de rajeunissement et offrez à votre peau une cure de jeunesse en un temps record."
      },
      {
        id: "HcremeNuit3",
        pictureLove: "./img/jpg/product/cremeNuit.jpg",
        textLove:
          "Pour une peau rayonnante et lisse, découvrez notre crème de nuit spécialement formulée pour lutter contre les signes visibles de l'âge et restaurer le processus cellulaire du visage. Réveillez-vous chaque matin avec une peau revitalisée et rajeunie grâce à ses multiples bienfaits."
      },
      {
        id: "HRegenerateurCellulaire4",
        pictureLove: "./img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Si vous souhaitez gommer les imperfections de votre peau, ne passez pas à côté de notre produit best seller : un régénérateur cellulaire qui opère des miracles sur la peau. Offrez à votre peau une transformation positive et retrouvez une apparence éblouissante."
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre2FatigueSommeil").text],
  picture: "./img/jpg/product/harmonie.jpg",
  colors: {
    textColor: "#30d1d9",
    textColor2: "#c433bc"
  },
  inSummary: [
    {
      id: "HiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "HiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "HiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "HiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "HiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
