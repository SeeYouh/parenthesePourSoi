import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const boosterEnergie = {
  nameProduct: "Booster d’énergie",  id: "boosterDenergie",

  summary: {
    title: "Un mélange vivifiant pour booster votre journée.",
    paragraph: [
      {
        id: "0boosterEnergie",
        subTitle: "Boostez votre énergie",
        text: "Votre santé est notre priorité. Notre booster d’énergie stimule votre système immunitaire et cardiovasculaire, renforçant ainsi votre résistance aux maladies et protégeant votre cœur. Les oméga 6 et 9 présents dans notre formule améliorent l'attention et la vigilance mentale, vous permettant de rester concentré(e) et productif(ve) tout au long de la journée."
      },
      {
        id: "1boosterEnergie",
        subTitle: "Retrouvez votre bien-être",
        text: [
          "Notre booster d'énergie est bien plus qu'un simple complément, c'est le véritable catalyseur de votre bien-être. Il dynamise votre corps en stimulant votre énergie naturelle, vous offrant une vitalité renouvelée tout au long de la journée. Grâce à sa formule unique, il combat efficacement la fatigue et vous aide à retrouver un sommeil réparateur, vous permettant de vous réveiller frais et revitalisé chaque matin.",
          "En favorisant la bonne humeur et la gaieté, notre booster d'énergie contribue à une vision positive de la vie, vous aidant à aborder les défis quotidiens avec un état d'esprit positif. De plus, il est votre allié de confiance pour diminuer le stress, l'anxiété et le surmenage, vous permettant de vous sentir léger(e) et détendu(e) au quotidien.",
          "En parallèle, ce produit exceptionnel combat les manifestations allergiques, vous offrant un soulagement bienvenu face aux irritations et inconforts. Il favorise également une digestion saine en optimisant le fonctionnement de vos organes et améliorant le transit intestinal, vous permettant de vous sentir bien dans votre corps et dans votre esprit."
        ],
        picture450: "./img/jpg/product/BEIllusText450.jpg",
        picture675: "./img/jpg/product/BEIllusText675.jpg",
        picture900: "./img/jpg/product/BEIllusText900.jpg"
      },
      {
        id: "2boosterEnergie",
        subTitle: "Gérez votre poids",
        text: "Notre produit est également une solution efficace pour vous aider à atteindre vos objectifs de gestion du poids car il augmente de 17% la combustion des graisses."
      },
      {
        id: "3boosterEnergie",
        subTitle: "Nourrissez votre peau",
        text: "Grâce à ses propriétés antioxydantes exceptionnelles, notre produit réduit visiblement les signes de l'âge, vous offrant une peau éclatante et rajeunie. En nourrissant votre peau de manière profonde, il révèle votre beauté naturelle, vous permettant de vous sentir confiant(e) et épanoui(e) dans votre propre peau."
      },
      {
        id: "4boosterEnergie",
        subTitle: "Pour vous, Mesdames",
        text: "Mesdames, notre booster d’énergie a aussi des effets sur les désagréments féminins car il diminue efficacement les douleurs menstruelles, soulageant ainsi les gênes liées à votre cycle. De plus, il prévient les infections urinaires, vous offrant une protection essentielle pour votre santé intime."
      },
      {
        id: "5boosterEnergie",
        subTitle: "Choisissez-le pour tout ces bienfaits",
        text: "Faites le choix d’un bien-être optimal et votre corps vous remerciera pour cette décision qui va changer votre quotidien !"
      },
      {
        id: "6boosterEnergie",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "7boosterEnergie",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "BdEGoutteMinceur0",
        pictureLove: "./img/jpg/product/goutteMinceur.jpg",
        textLove:
          "Pour une cure minceur, ce booster d’énergie fonctionne en synergie parfaite avec nos gouttes minceur naturelles, conçues pour brûler efficacement les graisses sous-cutanées et viscérales, tout en bloquant le stockage des graisses indésirables."
      },
      {
        id: "BdEHarmonie1",
        pictureLove: "./img/jpg/product/harmonie.jpg",
        textLove:
          "Pour un bien-être psychologique et la prévention du burn-out, ce produit s'associe idéalement à un autre de nos produits. Une combinaison parfaite pour retrouver l'équilibre intérieur et une sérénité épanouissante."
      },
      {
        id: "BdERegenerateurCellulaire2",
        pictureLove: "./img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Pour les problèmes d’ordre cutané, notre produit chouchou régénérateur cellulaire est un véritable miracle pour votre peau. Une expérience naturelle et revitalisante pour une peau éclatante et rayonnante."
      },
      {
        id: "BdEOsMuscle3",
        pictureLove: "./img/jpg/product/osMuscle.jpg",
        textLove:
          "Vous vous sentez stressée ? Anxieuse ? Un apport en magnésium est essentiel pour contrer les effets néfastes du stress sur votre corps. Découvrez une expérience apaisante pour retrouver équilibre et bien-être."
      },
      {
        id: "BdEEquilibreCorpsEsprit4",
        pictureLove: "./img/jpg/product/equilibreCorpsEsprit.jpg",
        textLove:
          "Parfois, la fatigue est associée à un manque de sommeil ou un repos non récupérateur. Notre produit naturel est spécialement conçu pour vous offrir un sommeil profond et réparateur. Plongez dans des nuits paisibles et revitalisantes qui vous donneront l'énergie et le bien-être nécessaires pour une journée épanouissante."
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre3Humeur").text],
  picture: "./img/jpg/product/boosterEnergie.jpg",
  colors: {
    textColor: "#a81616",
    titleColorInSummary: "#5f0c0c",
    bgColorInSummary: "#e49c9c"
  },
  inSummary: [
    {
      id: "BdEiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "BdEiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "BdEiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "BdEiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "BdEiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
