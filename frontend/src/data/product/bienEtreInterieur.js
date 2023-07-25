import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const bienEtreInterieur = {
  nameProduct: "Bien-être intérieur",
  summary: {
    title: "Neutralisez vos toxines",
    paragraph: [
      {
        subTitle: "Neutralisez vos toxines",
        text: "Le pouvoir antioxydant de notre produit aide à neutraliser les toxines présentes dans votre organisme. Il contribue également à diminuer les troubles digestifs en maintenant l'équilibre des bonnes bactéries et en améliorant la flore intestinale."
      },
      {
        subTitle: "Équilibrez votre microbiote",
        text: [
          "Le microbiote, également connu sous le nom de flore microbienne ou microbiome, fait référence à l'ensemble des micro-organismes qui vivent à l'intérieur et sur la surface de divers organismes. Chez les humains, le microbiote est principalement présent dans le tube digestif, mais il existe également dans d'autres parties du corps, telles que la peau, la bouche, le nez et les voies génito-urinaires. Des recherches scientifiques approfondies ont mis en évidence l'importance du microbiote dans de nombreux aspects de la santé. Par conséquent, il est crucial de maintenir un équilibre sain du microbiote pour favoriser une bonne santé globale.",
          "En rétablissant l'équilibre de votre microbiote, les prébiotiques et probiotiques contribuent à améliorer votre santé globale et à prévenir divers troubles digestifs et maladies chroniques associées. Recommandé pour les maladies chroniques telles que le côlon irritable et la maladie de Crohn (avec avis médical), il améliore également votre santé globale."
        ],
        picture450: "./img/jpg/product/bienEtreInterieurIllusText450.jpg",
        picture675: "./img/jpg/product/bienEtreInterieurIllusText675.jpg",
        picture900: "./img/jpg/product/bienEtreInterieurIllusText900.jpg"
      },
      {
        subTitle: "Gérez votre poids",
        text: "Notre produit de bien-être intérieur joue un rôle clé dans la gestion du poids en contrôlant la satiété et en réduisant les envies de sucre et de gras. En favorisant un microbiote équilibré, il permet de vous aider à atteindre et maintenir un poids santé. De plus, il booste votre système immunitaire, facilite l'absorption des nutriments et régule le taux de cholestérol."
      },
      {
        subTitle: "Restez en forme",
        text: "Nos pré-probiotiques vous offrent un bien-être complet en boostant l'énergie naturelle de votre corps grâce à la synthèse des vitamines B et K. Il contribue également à réduire le stress et l'anxiété, à combattre la fatigue, à améliorer la qualité du sommeil et à stimuler votre humeur, vous permettant ainsi de profiter pleinement de chaque journée."
      },
      {
        subTitle: "Pour vous, Mesdames",
        text: "Le bien-être intérieur n’est pas seulement digestif pour vous Mesdames, car ce produit offre des bienfaits spécifiques pour les femmes en diminuant les troubles vaginaux et en améliorant le tractus génital. Il vous permet de prendre soin de votre santé intime de manière naturelle et équilibrée."
      },
      {
        subTitle: "Réinventez votre bien-être",
        text: "Expérimentez ces pré-probiotiques, c’est côtoyez un bien-être intérieur inégalé !"
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
        pictureLove: "./img/jpg/product/goutteMinceur.jpg",
        textLove:
          "Dans le cadre d’une cure minceur, nos gouttes super puissantes seront la solution idéale pour perdre du poids sainement et durablement, sans vous soumettre à un régime contraignant. Laissez-vous séduire par cette méthode naturelle pour atteindre vos objectifs de bien-être en toute efficacité."
      },
      {
        pictureLove: "./img/jpg/product/detox.jpg",
        textLove:
          "Notre détox naturelle est conçue pour éliminer les toxines de votre organisme, vous offrant ainsi une sensation de pureté et de bien-être. Plongez dans une expérience revitalisante et laissez votre corps retrouver son équilibre naturel grâce à cette solution bienfaisante."
      },
      {
        pictureLove: "./img/jpg/product/equilibreCorpsEsprit.jpg",
        textLove:
          "Les pré-probiotiques ont une action sur la qualité du sommeil. Si c’est ce que vous recherchez, je vous conseille de découvrir notre produit naturel pour un sommeil récupérateur optimal, offrant une nuit paisible et régénérante. Plongez dans un sommeil profond et réparateur, pour des journées remplies d'énergie et de vitalité."
      },
      {
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Pour aller encore plus loin dans votre bien-être intestinal et le stimuler naturellement, découvrez notre produit innovant qui vous apporte 900 grammes de légumes en une seule dose journalière. Profitez d'une dose concentrée de nutriments essentiels pour une santé digestive optimale."
      },
      {
        pictureLove: "./img/jpg/product/mereDeTous.jpg",
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
  picture: "./img/jpg/product/bienEtreInterieur.jpg",
  colors: {
    textColor: "#8a7540"
  }
};
