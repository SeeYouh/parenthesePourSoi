import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const baumeLevres = {
  nameProduct: "Baume à lèvres",
  id: "baumeLevres",

  summary: {
    title: "Un véritable oasis de douceur et de protection",
    paragraph: [
      {
        id: "0baumeLevres",
        subTitle: "Hydratez vos lèvres",
        text: "Redécouvrez le plaisir d'avoir des lèvres douces et bien hydratées grâce à notre baume à lèvres naturel. Enrichi d'ingrédients naturels aux propriétés exceptionnelles, ce baume offre un soulagement immédiat aux lèvres desséchées. La texture riche et fondante du baume enveloppe vos lèvres d'un voile doux et soyeux, leur offrant une hydratation profonde et durable. Grâce à sa formule enrichie en vitamines et en nutriments essentiels, ce baume transforme la texture de vos lèvres dès la première application."
      },
      {
        id: "1baumeLevres",
        subTitle: "Protégez-les",
        text: "Une des forces majeures de notre baume à lèvres réside dans sa capacité exceptionnelle à protéger vos lèvres. Conçu pour faire face à tous les types de conditions météorologiques, il offre une défense efficace contre les éléments nuisibles. Sa formule avancée crée une barrière protectrice robuste qui isole vos lèvres des effets néfastes du soleil, du vent et du froid. Affronter les conditions météorologiques les plus rudes devient ainsi une expérience sans souci. Vos lèvres restent non seulement belles et douces, mais aussi saines et bien protégées, quel que soit le temps à l'extérieur. Avec notre baume à lèvres, chaque jour est un bon jour pour vos lèvres.",
        picture450: "/img/jpg/product/baumeLevresIllusText450.jpg",
        picture225: "/img/jpg/product/baumeLevresIllusText225.jpg",
        picture675: "/img/jpg/product/baumeLevresIllusText675.jpg",
        picture900: "/img/jpg/product/baumeLevresIllusText900.jpg",
        picturefb: "/img/jpg/product/baumeLevresIllusText1524.jpg"
      },
      {
        id: "2baumeLevres",
        subTitle: "Réparez-les",
        text: "Notre baume à lèvres va au-delà du soin classique. Il offre une action préventive et réparatrice pour vos lèvres. Grâce à sa composition naturelle, il agit en profondeur pour réparer les cellules abîmées, renforcer la barrière cutanée de vos lèvres et les rendre plus résistantes aux agressions quotidiennes. En intégrant notre baume à votre routine quotidienne, vous prévenez l'apparition des gerçures et conservez des lèvres douces et confortables en toutes circonstances."
      },
      {
        id: "3baumeLevres",
        subTitle: "Obtenez des lèvres éclatantes",
        text: "La nature regorge de trésors pour prendre soin de notre peau. Notre baume à lèvres est la preuve que ces ingrédients naturels peuvent fournir des résultats exceptionnels. Enrichi en extraits végétaux sélectionnés pour leurs propriétés nourrissantes et protectrices, notre baume à lèvres offre un soin complet pour des lèvres éclatantes de santé et de beauté. Découvrez le plaisir d'avoir des lèvres douces, saines et hydratées au quotidien grâce au pouvoir de la nature."
      },
      {
        id: "4baumeLevres",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5baumeLevres",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "baumeLevres0",
        link: "glossRepulpant",
        pictureLove: "/img/jpg/product/glossRepulpant.jpg",
        pictureLove264: "/img/jpg/product/glossRepulpant264.jpg",
        pictureLove400: "/img/jpg/product/glossRepulpant400.jpg",
        textLove:
          "Vos lèvres peuvent être sublimées avec notre gloss. Grâce à ses actifs nourrissants, il repulpe instantanément vos lèvres, les rendant pulpeuses et volumineuses. Il lisse les ridules, vous offrant des lèvres plus jeunes et douces. Avec sa sensation rafraîchissante et son label d'approbation « Good Face Project », notre produit assure une qualité irréprochable pour sublimer votre sourire éblouissant."
      },
      {
        id: "baumeLevres1",
        link: "dentifrice",
        pictureLove: "/img/jpg/product/dentifrice.jpg",
        pictureLove264: "/img/jpg/product/dentifrice264.jpg",
        pictureLove400: "/img/jpg/product/dentifrice400.jpg",
        textLove:
          "Pour un sourire éclatant, optez pour notre dentifrice formulé avec des ingrédients naturels de première qualité, exempts de produits chimiques agressifs. Il offre un blanchiment naturel en éliminant délicatement les tâches pour des dents éclatantes. Enrichi d'extraits apaisants et antibactériens de plantes, il préserve la santé et la vitalité de vos gencives. Grâce à l'huile essentielle de menthe poivrée, profitez d'une  gréable sensation de fraîcheur et d'une haleine rafraîchie, tout en éliminant la mauvaise haleine."
      },
      {
        id: "baumeLevres2",
        link: "dentitionBlanche",
        pictureLove: "/img/jpg/product/dentitionBlanche.jpg",
        pictureLove264: "/img/jpg/product/dentitionBlanche264.jpg",
        pictureLove400: "/img/jpg/product/dentitionBlanche400.jpg",
        textLove:
          "Pour une dentition blanche et brillante, découvrez notre poudre blanchissante révolutionnaire pour un sourire éclatant ! Notre blanchisseur élimine en douceur les impuretés et les taches, vous offrant des dents éblouissantes. Il préserve la santé de vos gencives et assure une haleine fraîche durable. Sans ingrédients controversés, notre formule respecte votre santé pour une confiance totale tout au long de la journée. Profitez d'un sourire éclatant et de soins bucco-dentaires complets grâce à notre produit innovant."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/baumeLevres.jpg",
  picture264: "/img/jpg/product/baumeLevres264.jpg",
  picture400: "/img/jpg/product/baumeLevres400.jpg",
  colors: {
    textColor: "#779db0",
    linkTextColor: "#779db0",
    titleColorInSummary: "#779db0",
    bgColorInSummary0: "#bbced8",
    bgColorInSummary1: "#eff3f6",
    linearGradient0: "linear-gradient(105deg ,#a0bac8, #e2f4ff)",
    linearGradient1: "linear-gradient(to right, #bbced8, 	#eff3f6)",
    shadowColor: "#eff3f6"
  },
  inSummary: [
    {
      id: "BLiS0",
      title: "Beauté",
      text: (
        <ul>
          <li>
            Hydrate les lèvres et les protègent des agressions extérieures
          </li>
          <li>Disponibles en deux parfums : Grenade et Vanille</li>
        </ul>
      )
    }
  ]
};
