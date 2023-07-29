import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const detox = {
  nameProduct: "Détox’",
  id: "detox",

  summary: {
    title: "Nettoyer son corps en profondeur",
    paragraph: [
      {
        id: "0detox",
        subTitle: "Préparez-vous à mincir avec notre détox’",
        text: "La base essentielle de toute cure minceur est le nettoyage du corps afin de le préparer à une perte de poids saine et durable."
      },
      {
        id: "1detox",
        subTitle: "Laissez notre détox’ faire le grand nettoyage",
        text: [
          "Notre produit agit comme un véritable agent de détoxification, absorbant les toxines présentes dans votre corps et les transportant hors de celui-ci. Ces toxines, issues de votre métabolisme et de votre environnement (polluants aériens, alimentation…), s'accumulent dans tout votre corps et sont transportées vers les cinq organes émonctoires:",
          "- la peau",
          "- le foie",
          "- les reins",
          "- les poumons",
          "- les intestins",
          " Lorsque votre organisme est surchargé de toxines, des problèmes de santé peuvent survenir. En optant pour notre produit, vous permettez à votre corps de se débarrasser de ces toxines, favorisant ainsi une gestion du poids plus efficace et une meilleure santé globale."
        ],
        picture450: "./img/jpg/product/DetoxIllusText450.jpg",
        picture675: "./img/jpg/product/DetoxIllusText675.jpg",
        picture900: "./img/jpg/product/DetoxIllusText900.jpg"
      },
      {
        id: "2detox",
        subTitle: "Boostez vos défenses, c'est bon pour la balance !",
        text: "Les ingrédients de notre détox' protègent vos cellules contre le stress oxydatif grâce à la vitamine E présente dans certains d'entre eux. Ils renforcent également votre système immunitaire, maintiennent la santé de vos muqueuses et favorisent un fonctionnement normal de la thyroïde, jouant ainsi un rôle clé dans la gestion du poids. "
      },
      {
        id: "3detox",
        subTitle: "Dites adieu aux ballonnements avec notre détox’",
        text: "En rééquilibrant votre système digestif, notre produit diminue les ballonnements, les gaz, la constipation et la diarrhée."
      },
      {
        id: "4detox",
        subTitle: "Agissez pour votre peau",
        text: "L’élimination des toxines contribue à réduire la cellulite, vous offrant ainsi une silhouette plus harmonieuse."
      },
      {
        id: "5detox",
        subTitle: "Ressourcez-vous et faites le plein d'énergie",
        text: "Notre détox’ booste l'énergie naturelle de votre corps, vous permettant ainsi de retrouver une vitalité et un bien-être général. Vous vous sentirez revitalisé(e), prêt(e) à faire face aux défis quotidiens avec une énergie renouvelée."
      },
      {
        id: "6detox",
        subTitle: "Préparez-vous à atteindre votre objectif minceur",
        text: "Optez pour notre détox’, c’est choisir un produit naturel, efficace et révolutionnaire conçu pour vous aider à atteindre vos objectifs de perte de poids tout en favorisant un bien-être optimal."
      },
      {
        id: "7detox",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "8detox",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "DeGoutteMinceur0",
        pictureLove: "./img/jpg/product/goutteMinceur.jpg",
        textLove:
          "La détox’ permet de préparer le corps à une perte de poids saine et durable. Vous ne souhaitez pas vous priver de nourriture ? Vous ne pouvez pas faire de sport ? Vous en avez marre des effets yoyo ? Nos gouttes super puissantes vont vous intéresser pour perdre du poids sans frustration et sans effort !"
      },
      {
        id: "DeBienEtreInterieur1",
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Le microbiote est considéré comme le deuxième cerveau humain. Une bonne digestion est importante pour se sentir bien. Si votre système digestif et intestinal sont déséquilibrés, les pré-probiotiques devraient réguler tout ceci."
      },
      {
        id: "DeGG2",
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Une autre approche consiste à rétablir l'équilibre de votre organisme en fournissant des légumes et des vitamines essentiels par le biais d'une détoxification végétale. Ce produit est un concentré de nutriments essentiels pour notre corps."
      }
    ]
  },
  firstCategory: [getCategoryById("0GestionDuPoids").name],
  secondCategory: [
    getSecondCategoryById("0GestionDuPoids0Detoxification").text
  ],
  picture: "./img/jpg/product/detox.jpg",
  colors: {
    textColor: "#7e1450",
    titleColorInSummary: "#4f0d32",
    bgColorInSummary: "#c37ea5"
  },
  inSummary: [
    {
      id: "DeiS0",
      title: "Aide à la perte de poids",
      text: "Nettoie et détoxifie le corps"
    },
    {
      id: "DeiS1",
      title: "Problèmes cutanés",
      text: "Améliore l’acné, les vergetures, la cellulite, les varices, l’eczéma et le psoriasis."
    },
    {
      id: "DeiS2",
      title: "Santé",
      text: "Booste le système immunitaire de par son action de rééquilibrage de l’organisme."
    },
    {
      id: "DeiS3",
      title: "Troubles  ",
      text: "Réduit les soucis de digestion, de constipation, de diarrhée, de ballonnements, de gaz"
    },
    {
      id: "DeiS4",
      title: "Bien-être",
      text: (
        <ul>
          <li>Redonne une énergie physique</li>
          <li>Améliore l’humeur</li>
          <li>Lutte contre la fatigue</li>
          <li>Favorise un sommeil de qualité</li>
        </ul>
      )
    }
  ]
};
