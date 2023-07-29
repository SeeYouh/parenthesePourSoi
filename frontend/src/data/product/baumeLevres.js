import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const baumesLevres = {
  nameProduct: "baumes à lèvres",
  summary: {
    title: "Une véritable oasis de douceur et de protection",
    paragraph: [
      {
        id: "0baumesLevres",
        subTitle:
          "Des lèvres douces et hydratées grâce à notre baume à lèvres naturel",
        text: "Redécouvrez le plaisir d'avoir des lèvres douces et bien hydratées grâce à notre baume à lèvres naturel. Enrichi d'ingrédients naturels aux propriétés exceptionnelles, ce baume offre un soulagement immédiat aux lèvres desséchées. La texture riche et fondante du baume enveloppe vos lèvres d'un voile doux et soyeux, leur offrant une hydratation profonde et durable. Grâce à sa formule enrichie en vitamines et en nutriments essentiels, ce baume transforme la texture de vos lèvres dès la première application."
      },
      {
        id: "1baumesLevres",
        subTitle:
          "Une protection avancée pour affronter toutes les conditions météorologiques",
        text: "Une des forces majeures de notre baume à lèvres réside dans sa capacité exceptionnelle à protéger vos lèvres. Conçu pour faire face à tous les types de conditions météorologiques, il offre une défense efficace contre les éléments nuisibles. Sa formule avancée crée une barrière protectrice robuste qui isole vos lèvres des effets néfastes du soleil, du vent et du froid. Affronter les conditions météorologiques les plus rudes devient ainsi une expérience sans souci. Vos lèvres restent non seulement belles et douces, mais aussi saines et bien protégées, quel que soit le temps à l'extérieur. Avec notre baume à lèvres, chaque jour est un bon jour pour vos lèvres.",
        picture450: "./img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "./img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "./img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        id: "2baumesLevres",
        subTitle: "Prévention et réparation : le soin complet pour vos lèvres",
        text: "Notre baume à lèvres va au-delà du soin classique. Il offre une action préventive et réparatrice pour vos lèvres. Grâce à sa composition naturelle, il agit en profondeur pour réparer les cellules abîmées, renforcer la barrière cutanée de vos lèvres et les rendre plus résistantes aux agressions quotidiennes. En intégrant notre baume à votre routine quotidienne, vous prévenez l'apparition des gerçures et conservez des lèvres douces et confortables en toutes circonstances."
      },
      {
        id: "3baumesLevres",
        subTitle:
          "Redécouvrez le pouvoir de la nature pour des lèvres éclatantes",
        text: "La nature regorge de trésors pour prendre soin de notre peau. Notre baume à lèvres est la preuve que ces ingrédients naturels peuvent fournir des résultats exceptionnels. Enrichi en extraits végétaux sélectionnés pour leurs propriétés nourrissantes et protectrices, notre baume à lèvres offre un soin complet pour des lèvres éclatantes de santé et de beauté. Découvrez le plaisir d'avoir des lèvres douces, saines et hydratées au quotidien grâce au pouvoir de la nature."
      },
      {
        id: "4baumesLevres",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5baumesLevres",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "BLPB0",
        pictureLove: "./img/jpg/product/PB.jpg",
        textLove:
          "Pour renforcer davantage votre bien-être centré sur le soin du visage, je vous suggère d'explorer notre gamme beauté exhaustive, notamment notre décontaminant. Cet élément de notre collection peut compléter parfaitement l'expérience d'hydratation que procure notre baume à lèvres."
      },
      {
        id: "BLmereDeTous1",
        pictureLove: "./img/jpg/product/mereDeTous.jpg",
        textLove:
          "Pour assurer une protection quotidienne optimale et nourrir votre peau avec délicatesse, notre Crème Day est un choix idéal. Sa formule enrichissante offre une hydratation constante, préservant votre peau des effets desséchants de l'environnement tout en agissant comme une barrière contre les agressions extérieures. Chaque application vous offre une peau éclatante de santé, revitalisée et intensément hydratée tout au long de la journée."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "./img/jpg/product/heRafraichissant.jpg",
  colors: {
    textColor: "#30d1d9",
    titleColorInSummary: "#003459",
    bgColorInSummary: "#68a6d0"
  },
  inSummary: [
    {
      id: "BLiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "BLiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "BLiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "BLiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "BLiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
