import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const bienEtreInterieur = {
  nameProduct: "Bien-être intérieur",
  id: "bienEtreInterieur",

  summary: {
    title: "Neutralisez vos toxines",
    paragraph: [
      {
        id: "0BienEtreInterieur",
        subTitle: "Neutralisez vos toxines",
        text: "Le pouvoir antioxydant de notre produit aide à neutraliser les toxines présentes dans votre organisme. Il contribue également à diminuer les troubles digestifs en maintenant l'équilibre des bonnes bactéries et en améliorant la flore intestinale."
      },
      {
        id: "1BienEtreInterieur",
        subTitle: "Équilibrez votre microbiote",
        text: [
          "Le microbiote, également connu sous le nom de flore microbienne ou microbiome, fait référence à l'ensemble des micro-organismes qui vivent à l'intérieur et sur la surface de divers organismes. Chez les humains, le microbiote est principalement présent dans le tube digestif, mais il existe également dans d'autres parties du corps, telles que la peau, la bouche, le nez et les voies génito-urinaires. Des recherches scientifiques approfondies ont mis en évidence l'importance du microbiote dans de nombreux aspects de la santé. Par conséquent, il est crucial de maintenir un équilibre sain du microbiote pour favoriser une bonne santé globale.",
          "En rétablissant l'équilibre de votre microbiote, les prébiotiques et probiotiques contribuent à améliorer votre santé globale et à prévenir divers troubles digestifs et maladies chroniques associées. Recommandé pour les maladies chroniques telles que le côlon irritable et la maladie de Crohn (avec avis médical), il améliore également votre santé globale."
        ],
        picture450: "/img/jpg/product/bienEtreInterieurIllusText450.jpg",
        picture675: "/img/jpg/product/bienEtreInterieurIllusText675.jpg",
        picture900: "/img/jpg/product/bienEtreInterieurIllusText900.jpg"
      },
      {
        id: "2BienEtreInterieur",
        subTitle: "Gérez votre poids",
        text: "Notre produit de bien-être intérieur joue un rôle clé dans la gestion du poids en contrôlant la satiété et en réduisant les envies de sucre et de gras. En favorisant un microbiote équilibré, il permet de vous aider à atteindre et maintenir un poids santé. De plus, il booste votre système immunitaire, facilite l'absorption des nutriments et régule le taux de cholestérol."
      },
      {
        id: "3BienEtreInterieur",
        subTitle: "Restez en forme",
        text: "Nos pré-probiotiques vous offrent un bien-être complet en boostant l'énergie naturelle de votre corps grâce à la synthèse des vitamines B et K. Il contribue également à réduire le stress et l'anxiété, à combattre la fatigue, à améliorer la qualité du sommeil et à stimuler votre humeur, vous permettant ainsi de profiter pleinement de chaque journée."
      },
      {
        id: "4BienEtreInterieur",
        subTitle: "Pour vous, Mesdames",
        text: "Le bien-être intérieur n’est pas seulement digestif pour vous Mesdames, car ce produit offre des bienfaits spécifiques pour les femmes en diminuant les troubles vaginaux et en améliorant le tractus génital. Il vous permet de prendre soin de votre santé intime de manière naturelle et équilibrée."
      },
      {
        id: "5BienEtreInterieur",
        subTitle: "Réinventez votre bien-être",
        text: "Expérimentez ces pré-probiotiques, c’est côtoyez un bien-être intérieur inégalé !"
      },
      {
        id: "6BienEtreInterieur",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "7BienEtreInterieur",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "BEIGoutteMinceur0",
        pictureLove: "/img/jpg/product/goutteMinceur.jpg",
        textLove:
          "Dans le cadre d’une cure minceur, nos gouttes super puissantes seront la solution idéale pour perdre du poids sainement et durablement, sans vous soumettre à un régime contraignant. Laissez-vous séduire par cette méthode naturelle pour atteindre vos objectifs de bien-être en toute efficacité."
      },
      {
        id: "BEIDetox1",
        pictureLove: "/img/jpg/product/detox.jpg",
        textLove:
          "Notre détox naturelle est conçue pour éliminer les toxines de votre organisme, vous offrant ainsi une sensation de pureté et de bien-être. Plongez dans une expérience revitalisante et laissez votre corps retrouver son équilibre naturel grâce à cette solution bienfaisante."
      },
      {
        id: "BEIEquilibreCorpsEsprit2",
        pictureLove: "/img/jpg/product/equilibreCorpsEsprit.jpg",
        textLove:
          "Les pré-probiotiques ont une action sur la qualité du sommeil. Si c’est ce que vous recherchez, je vous conseille de découvrir notre produit naturel pour un sommeil récupérateur optimal, offrant une nuit paisible et régénérante. Plongez dans un sommeil profond et réparateur, pour des journées remplies d'énergie et de vitalité."
      },
      {
        id: "BEIGG3",
        pictureLove: "/img/jpg/product/GG.jpg",
        textLove:
          "Pour aller encore plus loin dans votre bien-être intestinal et le stimuler naturellement, découvrez notre produit innovant qui vous apporte 900 grammes de légumes en une seule dose journalière. Profitez d'une dose concentrée de nutriments essentiels pour une santé digestive optimale."
      },
      {
        id: "BEIMereDeTous4",
        pictureLove: "/img/jpg/product/mereDeTous.jpg",
        textLove:
          "Pour les maladies chroniques ou les douleurs corporelles (articulaires, osseuses, musculaires), notre produit naturel aux propriétés anti-inflammatoires est là pour vous"
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [
    getSecondCategoryById("1Sante1TroublesDigestifsIntestinauxRespiratoires")
      .text
  ],
  picture: "/img/jpg/product/bienEtreInterieur.jpg",
  colors: {
    textColor: "#8a7540",
    titleColorInSummary: "#4e4224",
    bgColorInSummary: "#e5d1a0"
  },
  inSummary: [
    {
      id: "BEIiS0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Neutralise les toxines</li>
          <li>Contrôle la satiété</li>
          <li>Réduit les grignotages sucrés et gras</li>
        </ul>
      )
    },
    {
      id: "BEIiS1",
      title: "Santé",
      text: (
        <ul>
          <li>Combat le mauvais cholestérol </li>
          <li>
            Efficace sur les maladies chroniques telles que la maladie de Crohn
          </li>
          <li>Améliore la santé globale</li>
          <li>Booste le système immunitaire</li>
          <li>
            Agit sur la digestion, la constipation, la diarrhée et les brûlures
            d’estomac
          </li>
          <li>Diminue les troubles intestinaux et vaginaux</li>
        </ul>
      )
    },
    {
      id: "BEIiS2",
      title: "Bien-être",
      text: (
        <ul>
          <li>Booste l’énergie</li>
          <li>Diminue le stress et l’anxiété</li>
          <li>Stimule l’humeur</li>
          <li>Lutte contre la fatigue</li>
          <li>Améliore le sommeil</li>
        </ul>
      )
    }
  ]
};
