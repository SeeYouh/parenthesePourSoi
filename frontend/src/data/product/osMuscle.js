import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const osMuscle = {
  nameProduct: "Os et Muscles",
  summary: {
    title:
      "Soutenez votre santé musculaire et osseuse avec notre produit essentiel.",
    paragraph: [
      {
        subTitle: "Gestion du stress : Retrouvez votre sérénité",
        text: "Le stress est une réalité de la vie moderne que la plupart d'entre nous connaissent. Cependant, avec notre produit, vous avez un allié de taille. Enrichi en magnésium, il vous aide à faire face aux effets néfastes du stress, favorisant une récupération optimale et une relaxation profonde. Chaque dose est comme une bouffée d'air frais qui vous éloigne de l'agitation et vous rapproche de la tranquillité."
      },
      {
        subTitle: "Soutenez votre santé",
        text: [
          "Qui n'a pas eu à affronter des douleurs articulaires qui gênent les mouvements quotidiens et ralentissent le rythme de vie ? Notre formule spéciale, enrichie en ingrédients naturels aux puissantes propriétés anti-inflammatoires, est prête à vous apporter le soulagement tant recherché. Imaginez retrouver la légèreté des mouvements et un confort physique accru, tout cela grâce à un produit créé dans le respect de votre corps. Notre solution promet une action profonde, atténuant non seulement les symptômes douloureux mais agissant également sur les causes sous-jacentes de l'inflammation.",
          "La santé bucco-dentaire est un indicateur important du bien-être global, et c'est là que notre produit entre en jeu. En stimulant la production de collagène, élément essentiel pour maintenir la santé de vos gencives et la robustesse de vos os, notre formule offre une solution holistique pour la santé buccale. Au-delà de ses effets bénéfiques internes, elle contribue à améliorer votre apparence extérieure. Un sourire rayonnant est un signe de confiance en soi et de santé intérieure, et avec notre produit, vous aurez toutes les raisons de sourire."
        ],
        picture450: "./img/jpg/product/osMuscleIllusText450.jpg",
        picture675: "./img/jpg/product/osMuscleIllusText675.jpg",
        picture900: "./img/jpg/product/osMuscleIllusText900.jpg"
      },
      {
        subTitle: "Dites adieu à la cellulite",
        text: "Notre produit va au-delà des bienfaits internes et offre des avantages esthétiques significatifs. Grâce à sa formule innovante, il contribue à réduire la cellulite, laissant votre peau lisse et tonique. Il vous aidera à embrasser votre beauté naturelle et à vous sentir à l'aise dans votre peau, augmentant ainsi votre confiance en vous."
      },
      {
        subTitle: "Réduisez vos fringales salées",
        text: "Nous savons tous à quel point les fringales salées peuvent être un obstacle à la gestion du poids. Notre produit est là pour vous aider. Il a été spécialement conçu pour contrer ces envies irrésistibles qui peuvent saboter vos efforts pour maintenir un poids sain."
      },
      {
        subTitle: "Pour vous, Mesdames",
        text: "Mesdames, nous comprenons que les fluctuations hormonales peuvent causer des désagréments dans votre vie quotidienne. Notre produit a été spécialement conçu pour favoriser un équilibre hormonal sain, ce qui peut grandement améliorer votre confort et votre bien-être. Il peut aider à atténuer les symptômes courants liés aux déséquilibres hormonaux, tels que l'irritabilité, la fatigue et les troubles du sommeil, ce qui peut avoir un impact significatif sur votre qualité de vie."
      },
      {
        subTitle: "Découvrez un partenaire de confiance",
        text: "Que ce soit pour réguler votre taux de sucre et de cholestérol, soutenir votre système immunitaire ou promouvoir une bonne santé intestinale, notre produit offre une solution complète pour votre bien-être. Il est votre partenaire de confiance, vous aidant à maintenir une bonne santé à long terme et à mener une vie plus épanouie."
      },
      {
        text: " Alors, qu'attendez-vous ? Il est temps de donner à votre corps le soutien dont il a besoin avec notre produit essentiel. Faites le choix du bien-être."
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
        id: "osMuscle0",
        pictureLove: "./img/jpg/product/equilibreCorpsEsprit.jpg",
        textLove:
          "Pour un rééquilibrage total de votre organisme, découvrez notre produit qui agit sur l'ensemble du corps pour favoriser un bien-être général. Combiné à notre huile essentielle, il offre une synergie parfaite pour maximiser les bienfaits sur votre santé. Pour en savoir plus sur ce produit révolutionnaire pour le bien-être et le rééquilibrage total de votre organisme, n'hésitez pas à me contacter."
      },
      {
        id: "osMuscle1",
        pictureLove: "./img/jpg/product/apportMineraux.jpg",
        textLove:
          "Les minéraux ne sont pas assez présents dans notre alimentation. C’est pourquoi, nous proposons un produit exceptionnel composé de 32 minéraux, oligo-éléments, enzymes et super aliments bénéfiques pour votre système nerveux, vos os et vos muscles. Offrez à votre corps les nutriments essentiels dont il a besoin pour une santé globale épanouissante."
      },
      {
        id: "osMuscle2",
        pictureLove: "./img/jpg/product/apportVitamines.jpg",
        textLove:
          "Nous manquons tous de vitamines. Notre produit riche de 17 vitamines et nutriments essentiels pour prendre soin de vos yeux, votre cœur, votre peau et vos poumons pourrait donc vous satisfaire. Grâce à ses propriétés anti-inflammatoires, il permet de plonger dans une nouvelle dimension de vitalité et de santé en choisissant notre formule complète."
      },
      {
        id: "osMuscle3",
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Le magnésium est efficace contre le stress. Si vous êtes de nature anxieuse ou si vous vous sentez surmenée, je vous conseille de consulter les bienfaits de notre booster naturel. Une combinaison parfaite pour retrouver l'équilibre intérieur, une sérénité épanouissante et un bien-être psychologique."
      },
      {
        id: "osMuscle4",
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Vos fringales sont plutôt sucrées ou grasses ? Cliquez sur ce produit pour découvrir nos pré-probiotiques qui, en plus de réguler les grignotages, offrent un bien-être intérieur sans égal."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "./img/jpg/product/osMuscle.jpg",
  colors: {
    textColor: "#799198"
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
