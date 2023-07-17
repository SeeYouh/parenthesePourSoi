import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const bienEtreInterieur = {
  nameProduct: "Bien-être intérieur",
  summary: {
    title: "Équilibrez votre corps, équilibrez votre vie.",
    paragraph: [
      {
        text: "Notre produit agit en régulant votre microbiote, favorisant ainsi un équilibre optimal. Le microbiote est essentiel pour votre bien-être, car il participe à de nombreuses fonctions, de la digestion à l'absorption des nutriments, en passant par le renforcement de votre système immunitaire. "
      },
      {
        text: "En rétablissant l'équilibre de votre microbiote, notre produit contribue à améliorer votre santé globale et à prévenir divers troubles digestifs et maladies chroniques associées. Le pouvoir antioxydant de notre produit aide à neutraliser les toxines présentes dans votre organisme. Il contribue également à diminuer les troubles digestifs en maintenant l'équilibre des bonnes bactéries et en améliorant la flore intestinale. Recommandé pour les maladies chroniques telles que le côlon irritable et la maladie de Crohn (avec avis médical), il améliore également votre santé globale."
      },
      {
        text: "Notre produit de bien-être intérieur joue un rôle clé dans la gestion du poids en contrôlant la satiété et en réduisant les envies de sucre et de gras. En favorisant un microbiote équilibré, il permet de vous aider à atteindre et maintenir un poids santé. De plus, il booste votre système immunitaire, facilite l'absorption des nutriments et régule le taux de cholestérol."
      },
      {
        text: "Notre produit vous offre un bien-être complet en boostant l'énergie naturelle de votre corps grâce à la synthèse des vitamines B et K. Il contribue également à réduire le stress et l'anxiété, à combattre la fatigue, à améliorer la qualité du sommeil et à stimuler votre humeur, vous permettant ainsi de profiter pleinement de chaque journée."
      },
      {
        text: "Notre produit offre des bienfaits spécifiques pour les femmes en diminuant les troubles vaginaux et en améliorant le tractus génital. Il vous permet de prendre soin de votre santé intime de manière naturelle et équilibrée."
      },
      {
        text: "Expérimentez ce produit, c’est côtoyez un bien-être intérieur inégalé !"
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [
    getSecondCategoryById("1Sante1TroublesDigestifsIntestinauxRespiratoires")
      .text
  ],
  picture: "./img/jpg/product/bienEtreInterieur.jpg"
};
