import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const detox = {
  nameProduct: "Détox’",
  summary: {
    title: "Nettoyer son corps en profondeur.",
    paragraph: [
      {
        subTitle: "Préparez-vous à mincir avec notre détox’",
        text: "La base essentielle de toute cure minceur est le nettoyage du corps afin de le préparer à une perte de poids saine et durable."
      },
      {
        subTitle: "Laissez notre détox’ faire le grand nettoyage !",
        text: "Notre produit agit comme un véritable agent de détoxification, absorbant les toxines présentes dans votre corps et les transportant hors de celui-ci. Ces toxines, issues de votre métabolisme et de votre environnement, peuvent s'accumuler dans vos organes émonctoires, tels que le foie, les reins, les poumons, les intestins et la peau. Lorsque ces organes sont surchargés de toxines, des problèmes de santé peuvent survenir. En optant pour notre produit, vous permettez à votre corps de se débarrasser de ces toxines, favorisant ainsi une gestion du poids plus efficace et une meilleure santé globale.",
        picture450: "./img/jpg/product/DetoxIllusText450.jpg",
        picture675: "./img/jpg/product/DetoxIllusText675.jpg",
        picture900: "./img/jpg/product/DetoxIllusText900.jpg"
      },
      {
        subTitle: "Boostez vos défenses, c'est bon pour la balance !",
        text: "Les ingrédients de notre détox' protègent vos cellules contre le stress oxydatif grâce à la vitamine E présente dans certains d'entre eux. Ils renforcent également votre système immunitaire, maintiennent la santé de vos muqueuses et favorisent un fonctionnement normal de la thyroïde, jouant ainsi un rôle clé dans la gestion du poids. "
      },
      {
        subTitle: "Dites adieu aux ballonnements avec notre détox’",
        text: "En rééquilibrant votre système digestif, notre produit diminue les ballonnements, les gaz, la constipation et la diarrhée. De plus, il contribue à réduire la cellulite, vous offrant ainsi une silhouette plus harmonieuse."
      },
      {
        subTitle: "Ressourcez-vous et faites le plein d'énergie !",
        text: "Notre détox’ booste l'énergie naturelle de votre corps, vous permettant ainsi de retrouver une vitalité et un bien-être général. Vous vous sentirez revitalisé(e), prêt(e) à faire face aux défis quotidiens avec une énergie renouvelée."
      },
      {
        subTitle:
          "Atteignez vos objectifs minceur grâce à notre révolution détox’",
        text: "Optez pour notre détox’, c’est choisir un produit révolutionnaire conçu pour vous aider à atteindre vos objectifs de perte de poids tout en favorisant un bien-être optimal."
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
          "La détox’ étant la base de toute cure minceur, nos gouttes super puissantes devraient également vous intéresser pour perdre du poids sans effet yoyo."
      },
      {
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Si votre système digestif et intestinal sont déséquilibrés, les pré-probiotiques devraient réguler tout ceci."
      },
      {
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Une autre approche consiste à rétablir l'équilibre de votre système digestif et intestinal en fournissant des légumes et des vitamines essentiels par le biais d'une détoxification végétale."
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
    borderColor: "1px solid #7e1450"
  }
};
