import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const mereDeTous = {
  nameProduct: "Mère de Tous",
  summary: {
    title: "Un produit breveté et unique.",
    paragraph: [
      {
        subTitle:
          "Découvrez un produit breveté que vous ne trouverez nulle part ailleurs",
        text: "Disponible uniquement dans notre boutique en ligne, cette composition brevetée est un trésor de bien-être. Avec 36 ingrédients naturels parmi les plus puissants du monde, elle se distingue par son efficacité et sa qualité supérieure. Chaque élément a été soigneusement choisi pour ses propriétés bénéfiques, créant une synergie qui maximise les bienfaits pour votre santé."
      },
      {
        subTitle: "Combattez douleurs et inflammations",
        text: [
          "Imaginez un monde sans douleur. C'est ce que cette formule unique offre. Composée de superaliments aux propriétés anti-inflammatoires, elle soulage efficacement les douleurs musculaires, osseuses, articulaires et les affections chroniques. Elle offre une alternative naturelle aux médicaments traditionnels, sans les effets secondaires indésirables.",
          "De plus, dans un monde où les maladies sont omniprésentes, une défense immunitaire solide est essentielle. Ce produit renforce votre système immunitaire et protège vos cellules, favorisant une santé optimale. Il est particulièrement utile pour une récupération rapide lors de rhumes ou de périodes de pandémie."
        ],
        picture450: "./img/jpg/product/MereDeTousIllusText450.jpg",
        picture675: "./img/jpg/product/MereDeTousIllusText675.jpg",
        picture900: "./img/jpg/product/MereDeTousIllusText900.jpg"
      },
      {
        subTitle: "Soulagez vos maux",
        text: "Une bonne santé est essentielle pour une vie saine. Heureusement, cette formule est là pour vous aider. En soulageant les allergies, en combattant l'acné, en favorisant la digestion, en luttant contre la constipation et en soulageant les brûlures d'estomac, elle améliore votre confort quotidien. Ce mélange aide également à réguler le taux de cholestérol, à stabiliser le diabète et améliore le système cardiovasculaire. C' est une solution naturelle pour ceux qui cherchent à améliorer leur santé de manière holistique."
      },
      {
        subTitle: "Boostez votre énergie et votre clarté mentale",
        text: [
          "Fatigué de vous sentir fatigué ? Cette solution énergisante est là pour vous aider. Elle booste naturellement votre énergie, combat la fatigue et améliore votre humeur. Elle vous donne l'énergie nécessaire pour affronter votre journée, que ce soit pour le travail, le sport ou les activités de loisirs.",
          "Ce mélange unique soutient un équilibre psychologique et une clarté mentale, vous aidant à rester concentré et serein face aux défis quotidiens. Elle est idéale pour ceux qui cherchent à améliorer leur performance mentale de manière naturelle."
        ]
      },
      {
        subTitle: "Optez pour un teint hâlé",
        text: "Qui n'aime pas avoir une belle peau bronzée ? Avec cette formule, vous pouvez accélérer le processus de bronzage et obtenir une peau rayonnante et un teint hâlé en seulement 30 minutes d'exposition. C'est votre secret pour un bronzage rapide et naturel."
      },
      {
        subTitle: "Pour vous, Mesdames…",
        text: "Mesdames, nous comprenons les défis uniques que vous rencontrez. C'est pourquoi ce produit offre un soulagement appréciable pour les règles douloureuses, vous permettant de vivre cette période de manière plus confortable. Il est conçu pour vous aider à gérer les symptômes menstruels de manière naturelle."
      },
      {
        subTitle:
          "Retrouvez votre bien-être en prenant le contrôle de vos maux",
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
        id: "mereDeTous0",
        pictureLove: "./img/jpg/product/HERafraichissant.jpg",
        textLove:
          "Réputée pour son action rapide sur les douleurs musculaires, notre essentielle bleue fait une parfaite alliance naturelle. Elle offre un réconfort immédiat pour vos muscles endoloris, favorisant une récupération rapide et vous permettant de reprendre vos activités avec une nouvelle énergie."
      },
      {
        id: "mereDeTous1",
        pictureLove: "./img/jpg/product/ApportMineraux.jpg",
        textLove:
          "Pour un soutien accru à votre système musculosquelettique et nerveux, n'hésitez pas à associer notre produit avec notre complément spécialement formulé à base de minéraux spécifiques. Cette combinaison renforce l'action sur les muscles, les os et les nerfs, fournissant ainsi une approche complète pour un bien-être optimal."
      },
      {
        id: "mereDeTous2",
        pictureLove: "./img/jpg/product/ApportVitamines.jpg",
        textLove:
          "Pour une prise en charge globale des douleurs musculaires et nerveuses, associer notre produit avec notre complément spécialement enrichi en vitamines soigneusement sélectionnées. Cette synergie vous offre une approche naturelle pour soulager et prévenir les inconforts tout en soutenant le bien-être de votre système neuromusculaire."
      },
      {
        id: "mereDeTous3",
        pictureLove: "./img/jpg/product/osMuscle.jpg",
        textLove:
          "Un autre de nos produits contient des ingrédients aux propriétés anti-inflammatoires qui agissent en synergie pour soulager vos articulations douloureuses, vous permettant de retrouver votre mobilité et votre confort. Grâce à sa capacité à stimuler la production de collagène, il favorise des gencives saines et des os solides."
      },
      {
        id: "mereDeTous4",
        pictureLove: "./img/jpg/product/equilibreCorpsEsprit.jpg",
        textLove:
          "Les douleurs peuvent avoir des répercussions sur le sommeil. Une nuit saccadée peut avoir des effets néfastes sur votre humeur. Consultez notre produit naturel conçu pour favoriser un sommeil récupérateur afin de vous offrir des nuits paisibles et revitalisantes, propices à une journée pleine d'énergie et de bien-être."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "./img/jpg/product/mereDeTous.jpg",
  colors: {
    textColor: "#e21e1e",
    borderColor: "1px solid #e21e1e"
  },
  inSummary: [
    {
      id: "amis0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "AMiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "AMiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "AMiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "AMiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
