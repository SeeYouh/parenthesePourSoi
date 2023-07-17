import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const mereDeTous = {
  nameProduct: "Mère de Tous",
  summary: {
    title: "Un produit breveté et unique.",
    paragraph: [
      {
        subTitle:
          "Exclusivité garantie : Un produit unique pour votre bien-être",
        text: "Disponible uniquement dans notre boutique en ligne, cette composition brevetée est un trésor de bien-être. Avec 36 ingrédients naturels parmi les plus puissants du monde, elle se distingue par son efficacité et sa qualité supérieure. Chaque élément a été soigneusement choisi pour ses propriétés bénéfiques, créant une synergie qui maximise les bienfaits pour votre santé."
      },
      {
        subTitle: "Boostez votre énergie : Dites adieu à la fatigue",
        text: "Fatigué de vous sentir fatigué ? Cette solution énergisante est là pour vous aider. Elle booste naturellement votre énergie, combat la fatigue et améliore votre humeur. Elle vous donne l'énergie nécessaire pour affronter votre journée, que ce soit pour le travail, le sport ou les activités de loisirs.",
        picture450: "./img/jpg/product/MereDeTousIllusText450.jpg",
        picture675: "./img/jpg/product/MereDeTousIllusText675.jpg",
        picture900: "./img/jpg/product/MereDeTousIllusText900.jpg"
      },
      {
        subTitle: "Soulagement naturel : Combattez douleurs et inflammations",
        text: "Imaginez un monde sans douleur. C'est ce que cette formule unique offre. En agissant comme un puissant anti-inflammatoire, elle soulage efficacement les douleurs musculaires, articulaires et les affections chroniques. Elle offre une alternative naturelle aux médicaments traditionnels, sans les effets secondaires indésirables."
      },
      {
        subTitle: "Clarté mentale : Affrontez le quotidien avec sérénité",
        text: "Dans notre monde moderne, la clarté mentale est plus importante que jamais. Ce mélange soutient un équilibre psychologique et une clarté mentale, vous aidant à rester concentré et serein face aux défis quotidiens. Elle est idéale pour ceux qui cherchent à améliorer leur performance mentale de manière naturelle."
      },
      {
        subTitle: "Défense immunitaire : Votre allié contre les maladies",
        text: "Dans un monde où les maladies sont omniprésentes, une défense immunitaire solide est essentielle. Ce produit renforce votre système immunitaire et protège vos cellules, favorisant une santé optimale. Il est particulièrement utile pour une récupération rapide lors de rhumes ou de périodes de pandémie."
      },
      {
        subTitle: "Soulagement des allergies : Une solution pour votre confort",
        text: "Les allergies peuvent être un véritable fardeau. Heureusement, cette formule est là pour vous aider. En soulageant les allergies, en combattant l'acné, en favorisant la digestion et en soulageant les brûlures d'estomac, elle améliore votre confort quotidien et vous aide à vivre une vie plus saine."
      },
      {
        subTitle: "Régulation du cholestérol : Un soutien pour votre santé",
        text: "Une bonne santé cardiovasculaire et digestive est essentielle pour une vie saine. Ce mélange aide à réguler le taux de cholestérol, à stabiliser le diabète et à lutter contre la constipation. Il est une solution naturelle pour ceux qui cherchent à améliorer leur santé de manière holistique."
      },
      {
        subTitle:
          "Pour les femmes : Un soulagement pour les règles douloureuses",
        text: "Mesdames, nous comprenons les défis uniques que vous rencontrez. C'est pourquoi ce produit offre un soulagement appréciable pour les règles douloureuses, vous permettant de vivre cette période de manière plus confortable. Il est conçu pour vous aider à gérer les symptômes menstruels de manière naturelle."
      },
      {
        subTitle: "Bronzage accéléré : Une peau hâlée en un temps record",
        text: "Qui n'aime pas avoir une belle peau bronzée ? Avec cette formule, vous pouvez accélérer le processus de bronzage et obtenir une peau rayonnante et un teint hâlé en seulement 30 minutes d'exposition. C'est votre secret pour un bronzage rapide et naturel."
      },
      {
        subTitle: "Retrouvez votre bien-être : Prenez le contrôle de vos maux",
        text: "La vie est trop courte pour souffrir. Avec cette composition, vous pouvez prendre le contrôle de vos maux et retrouver un état de bien-être et une vie plus confortable. Elle est une solution naturelle pour ceux qui cherchent à améliorer leur qualité de vie et leur bien-être général."
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
        pictureLove: "./img/jpg/product/HERafraichissant800.jpg",
        textLove:
          "Ce produit peut être parfaitement combiné à l’huile essentielle bleue qui agit sur les douleurs musculaires en un temps record."
      },
      {
        pictureLove: "./img/jpg/product/ApportMinéraux.jpg",
        textLove:
          "Il peut également être associé à notre produit contenant des minéraux spécifiques pour une action ciblée sur les muscles, les os et les nerfs."
      },
      {
        pictureLove: "./img/jpg/product/ApportVitamines.jpg",
        textLove:
          "Il peut aussi s'associer à notre produit contenant des vitamines sélectionnées pour agir sur les douleurs musculaires et nerveuses."
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre3Humeur").text],
  picture: "./img/jpg/product/mereDeTous.jpg",
  colors: {
    textColor: "#e21e1e",
    borderColor: "1px solid #e21e1e"
  }
};
