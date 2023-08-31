import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const decontaminant = {
  nameProduct: "Le décontaminant",
  id: "decontaminant",

  summary: {
    title: "Une peau resplendissante de beauté",
    paragraph: [
      {
        id: "0Decontaminant",
        subTitle: "Gommez vos imperfections",
        text: "Offrez à votre peau un soin digne d'un spa. Agissant comme une douce caresse, il exfolie délicatement pour éliminer les peaux mortes et les cellules ternes. Laissez-vous surprendre par la transformation de votre teint, qui passe de terne à frais et radieux. Au-delà de cette exfoliation, notre produit a été spécialement conçu pour resserrer et affiner les pores. Vous direz adieu aux pores dilatés et découvrirez une peau au grain plus lisse et uniforme. Découvrez une peau visiblement plus belle, équilibrée et lumineuse."
      },
      {
        id: "1Decontaminant",
        subTitle: "Décontaminez votre peau et apaisez vos yeux",
        text: [
          "Notre décontaminant est votre arme secrète contre les points noirs. Grâce à une formule ciblée et précise, il désobstrue les pores, laissant votre peau nette et débarrassée des impuretés. Ses actifs puissants vont encore plus loin, aidant à réduire les imperfections cutanées, les tâches pigmentaires et le masque de grossesse. Vous n'êtes qu'à un pas d'un teint plus uniforme et éclatant. Mettez en valeur votre peau, radieuse et sublimée, et vivez l'expérience d'un teint sans défaut.",
          "N'oublions pas le soin délicat que vos yeux méritent. Notre produit contient une formule douce spécialement conçue pour calmer et apaiser vos yeux fatigués. Ressentez le confort et l'apaisement à chaque utilisation et offrez-vous un regard reposé, éclatant de vitalité."
        ],
        picture450: "/img/jpg/product/decontaminantIllusText450.jpg",
  picture225: "/img/jpg/product/decontaminantIllusText225.jpg",
        picture675: "/img/jpg/product/decontaminantIllusText675.jpg",
        picture900: "/img/jpg/product/decontaminantIllusText900.jpg"
      },
      {
        id: "2Decontaminant",
        subTitle: "Soyez rassuré(e)",
        text: "Nous nous engageons à vous offrir un produit à la fois efficace et sécurisé. C'est pourquoi il a été rigoureusement testé sous contrôle dermatologique, garantissant une tolérance optimale pour tous les types de peau. Vous pouvez donc utiliser notre produit en toute sérénité, sachant qu'il a été conçu pour respecter votre peau."
      },
      {
        id: "3Decontaminant",
        subTitle: "Dévoilez une peau radieuse et épanouie",
        text: "N'attendez plus pour découvrir le secret d'une peau radieuse et épanouie. Avec notre produit, vous pouvez non seulement sublimer votre peau, mais également vivre une expérience de soin agréable et luxueuse. Donnez à votre peau le soin qu'elle mérite et savourez le plaisir de voir votre peau s'épanouir jour après jour."
      },
      {
        id: "4Decontaminant",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5Decontaminant",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "Decontaminant0",
        link: "gelNettoyant",
        pictureLove: "/img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Notre produit de soin polyvalent est là pour chouchouter votre peau après une journée bien remplie. Il élimine en douceur les saletés, le maquillage et les impuretés accumulés, laissant votre peau fraîche et prête à se régénérer pendant la nuit. Grâce à sa formule hydratante, votre peau sera douce et veloutée, sans tiraillement. Sa douceur respecte l'équilibre cutané, préservant la barrière naturelle pour une peau saine et protégée. Avec ses actifs ciblés, il combat les imperfections et prévient les éruptions cutanées, vous offrant une peau nette et purifiée. Testé sous contrôle dermatologique, notre produit est sûr et efficace pour tous les types de peau."
      },
      {
        id: "Decontaminant1",
        link: "eauTonique",
        pictureLove: "/img/jpg/product/eauTonique.jpg",
        textLove:
          "Notre soin cutané parfaitement équilibré, enrichi d'agents hydratants et apaisants d'origine naturelle nourrit et restaure votre peau en profondeur.  Résultat ? Une peau intensément hydratée, adoucie et apaisée, vous offrant confort et bien-être toute la journée. Notre eau tonique resserre les pores, minimise les imperfections et apaise les irritations, laissant votre peau visiblement plus uniforme et raffinée. Sans paraben, alcool ni parfum artificiel, notre formule respecte votre peau et l'environnement pour une expérience de soin pure et sûre."
      },
      {
        id: "Decontaminant2",
        link: "serumComplet",
        pictureLove: "/img/jpg/product/serumComplet.jpg",
        textLove:
          "Notre sérum complet, doté de 9 brevets exclusifs, est une véritable révolution dans les soins de la peau. Grâce à la technologie liposomale, il hydrate en profondeur pour une peau confortable et revitalisée. Les actifs spécifiques préservent l'élasticité et la fermeté, stimulant la production de collagène pour un teint plus jeune et tonique. Les décolorations et les rides sont atténuées, redonnant éclat et uniformité à votre teint. Renforçant la barrière cutanée, votre peau est mieux protégée des agressions extérieures. Offrez à votre peau une expérience de soin incomparable avec notre sérum exclusif pour des résultats qui parlent d'eux-mêmes."
      },
      {
        id: "Decontaminant3",
        link: "masqueNuit",
        pictureLove: "/img/jpg/product/masqueNuit.jpg",
        textLove:
          "Notre masque de nuit révolutionnaire utilise la technologie Breathable Barrier®, cliniquement prouvée pour améliorer visiblement la santé de votre peau. Grâce à ses propriétés antioxydantes et régénératrices, il combat efficacement les signes du vieillissement en réduisant les rides et les ridules pour une peau plus ferme et jeune. Sa formule avancée améliore la texture de la peau, resserre les pores et combat les problèmes d'acné, vous offrant une peau saine et éclatante. Hydratée en profondeur, votre peau devient douce et rayonnante. Testé sous contrôle dermatologique, il surpasse les concurrents en vente libre."
      },
      {
        id: "Decontaminant4",
        link: "cremeDay",
        pictureLove: "/img/jpg/product/cremeDay.jpg",
        textLove:
          "Explorez les nombreux bienfaits de notre crème hydratante. Elle procure une sensation immédiate d'apaisement à votre peau, la rendant souple et rayonnante. Sa formule nourrissante lutte efficacement contre la sécheresse en maintenant une hydratation optimale et renforce la barrière cutanée pour la protéger des agressions extérieures. En ciblant les tâches sombres, elle éclaircit et égalise le teint, offrant une peau nette et libérée de l'acné, pour un éclat radieux et uniforme."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/decontaminant.jpg",
  picture264: "/img/jpg/product/decontaminant264.jpg",
  picture400: "/img/jpg/product/decontaminant400.jpg",
  colors: {
    textColor: "#42848e",
    titleColorInSummary: "#42848e",
    linkTextColor: "#42848e",
    bgColorInSummary0: "#87b6bd",
    bgColorInSummary1: "#eaf3f4",
    linearGradient0: "linear-gradient(105deg, #87b6bd, #b8f4ff)",
    linearGradient1: "linear-gradient(to right, #a9cbd0, #eaf3f4)",
    shadowColor: "#eaf3f4"
  },
  inSummary: [
    {
      id: "DeciS0",
      title: "Beauté",
      text: (
        <ul>
          <li>Elimine les peaux et cellules mortes</li>
          <li>Améliore l’aspect des pores</li>
          <li>Réduit les points noirs et les imperfections</li>
          <li>Diminue les tâches du visage et le masque de grossesse</li>
          <li>Apaise les yeux</li>
        </ul>
      )
    }
  ]
};
