import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const santePlus = {
  nameProduct: "Sante +",
  id: "santePlus",
  summary: {
    title: "Révélez votre vitalité avec le pouvoir enchanteur du Noni",
    paragraph: [
      {
        id: "0santePlus",
        subTitle: "Gérez votre poids",
        text: "Le Noni est un allié précieux pour la gestion du poids. Il aide efficacement à la perte de poids, vous permettant de vous sentir léger et en harmonie avec votre corps. Intégrez cette pépite naturelle à votre routine pour un soutien optimal dans votre quête d'une silhouette équilibrée."
      },

      {
        id: "1santePlus",
        subTitle: "Protégez-vous",
        text: [
          "Le Noni, cette pépite naturelle, se révèle être un véritable bienfaiteur pour votre système digestif. Grâce à sa fonction régulatrice, il agit comme un précieux allié pour lutter contre les troubles digestifs tels que la constipation et la diarrhée. Vous pouvez désormais dire adieu aux soucis intestinaux et savourer une digestion apaisée et harmonieuse.",
          "Cette pépite naturelle est également un soutien essentiel pour la solidité de vos os. En contribuant au maintien d'une ossature normale, le Noni vous offre une base solide pour votre santé osseuse. De plus, il stimule la formation des tissus conjonctifs, ce qui a un impact positif sur la santé de vos yeux. Vous pourrez ainsi profiter d'une vision éclatante et claire, vous permettant de voir le monde avec un nouveau regard.",
          "Mais les bienfaits du Noni ne s'arrêtent pas là. Il agit également comme un bouclier protecteur contre les maladies saisonnières en renforçant votre système immunitaire. Grâce à ses propriétés antioxydantes, il protège vos cellules du stress oxydatif, vous permettant ainsi de faire face aux agressions extérieures en toute sérénité. En adoptant le Noni dans votre routine, vous pouvez accueillir une santé renforcée, vous aidant à briller de l'intérieur."
        ]
      },
      {
        id: "2santePlus",
        subTitle: "Boostez votre santé globale",
        text: "Le Noni vous réserve une agréable surprise en boostant naturellement votre énergie métabolique. Grâce à ses propriétés énergisantes, vous vous sentirez dynamique et revitalisé au quotidien. Libérez le potentiel de votre métabolisme grâce à cette pépite bienfaisante, et profitez d'une vitalité débordante pour accomplir vos activités avec aisance."
      },
      {
        id: "3santePlus",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4santePlus",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "santePlus0",
        link: "santeMax",
        pictureLove: "/img/jpg/product/santeMax.jpg",
        textLove:
          "Découvrez la formule encore plus puissante du Noni Original dans ce produit minutieusement conçu pour promouvoir votre santé globale en renforçant votre système immunitaire et en protégeant votre corps des agressions extérieures. Vous bénéficierez d'une énergie durable et naturelle pour vous accompagner tout au long de la journée, vous permettant d'accomplir vos tâches avec dynamisme. En harmonie avec votre corps, notre nectar apaise les tensions, réduit le stress et favorise un état d'esprit positif, améliorant ainsi votre bien-être général et votre bonheur personnel."
      },

      {
        id: "santePlus1",
        link: "bienEtreInterieur",
        pictureLove: "/img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Ce produit agit en régulant votre microbiote, favorisant un équilibre optimal pour votre bien-être global. Les prébiotiques et probiotiques améliorent la santé digestive, renforcent votre système immunitaire et préviennent les maladies chroniques associées. Son pouvoir antioxydant neutralise les toxines et améliore la flore intestinale. De plus, en boostant l'énergie naturelle de votre corps, il réduit le stress, améliore le sommeil et stimule votre humeur. Pour les femmes, il offre des bienfaits spécifiques en améliorant la santé intime de manière naturelle."
      },

      {
        id: "santePlus2",
        link: "collagenoni",
        pictureLove: "/img/jpg/product/collagenoni.jpg",
        textLove:
          "Le collagène est une protéine essentielle qui constitue la structure de la peau, des cheveux, des ongles, des muscles, des os et des articulations. À partir de l'âge de 25 ans, nous perdons environ 1% de collagène chaque année, entraînant le vieillissement cutané avec l'apparition de rides et de perte de fermeté. Notre produit stimule le renouvellement cellulaire pour une peau plus éclatante et hydratée, réduisant les signes de sécheresse et les tâches pigmentaires. Il combat efficacement les rides, ridules et cernes, tout en renforçant les ongles et les cheveux."
      },

      {
        id: "santePlus3",
        link: "heDesinfectante",
        pictureLove: "/img/jpg/product/heDesinfectante.jpg",
        textLove:
          "L'huile essentielle désinfectante est un puissant remède naturel pour lutter contre les infections et maintenir un environnement sain. Elle aide à soigner les maladies saisonnières telles que les rhumes, les toux et la grippe, tout en renforçant le système immunitaire pour une meilleure résistance aux maladies saisonnières. Son parfum agréable et ses propriétés apaisantes en font un allié pour améliorer l'humeur et favoriser la relaxation."
      },

      {
        id: "santePlus4",
        link: "goutteMinceur",
        pictureLove: "/img/jpg/product/goutteMinceur.jpg",
        textLove:
          "Notre produit, avec ses deux fioles de gouttes uniques, offre une solution avancée pour votre cure minceur. En plus de la gestion du poids, ces gouttes améliorent le métabolisme, augmentent l'énergie et réduit l'apparence de la cellulite. Une approche complète pour une cure minceur réussie et un bien-être général amélioré."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "/img/jpg/product/santePlus.jpg",
  colors: {
    textColor: "#3483a7",
    titleColorInSummary: "#3483a7",
    linkTextColor: "#3483a7",
    bgColorInSummary0: "#71a8c1",
    bgColorInSummary1: "#e7f0f4",
    linearGradient0: "linear-gradient(105deg ,#71a8c1, #b2deff)",
    linearGradient1: "linear-gradient(to right, #9ac1d3, 	#e7f0f4)",
    shadowColor: "#e7f0f4"
  },
  inSummary: [
    {
      id: "SPiS0",
      title: "Santé",
      text: (
        <ul>
          <li>...</li>
        </ul>
      )
    },

    {
      id: "SPiS1",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>...</li>
        </ul>
      )
    }
  ]
};
