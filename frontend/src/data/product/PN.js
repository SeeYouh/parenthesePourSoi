import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const PN = {
  nameProduct: "PN",
  summary: {
    title: "Un substitut de repas complet.",
    paragraph: [
      {
        text: "Notre produit a été conçu pour faciliter la gestion de votre poids. Vous pouvez le substituer à votre petit-déjeuner, à votre goûter ou à votre dîner pour maintenir un équilibre nutritionnel optimal. Il contient des protéines végétales de haute qualité qui favorisent une digestion améliorée et une meilleure absorption des nutriments essentiels. Chaque dose de PN vous fournit l'apport nécessaire pour une perte de poids saine et durable."
      },
      {
        text: "Au-delà de la gestion du poids, le PN soutient une pression artérielle saine, ce qui contribue à maintenir un système cardiovasculaire en bonne santé. De plus, il favorise une meilleure santé des reins et du foie en les aidant à fonctionner de manière optimale. Vous serez ravi(e) de constater que notre produit a également des effets positifs sur la digestion, en favorisant une bonne santé intestinale et en améliorant votre confort digestif."
      },
      {
        text: "En l'incorporant dans votre quotidien, vous ressentirez un véritable boost d'énergie qui vous accompagnera tout au long de la journée. Vous pourrez ainsi aborder vos activités quotidiennes avec vitalité et enthousiasme, vous permettant de vous sentir pleinement épanoui(e)."
      },
      {
        text: "Explorez tous les bienfaits de ce produits et ne laissez pas les obstacles entraver vos objectifs de bien-être."
      },
      {
        text: "Dites adieu aux fringales salées qui sont omniprésentes ! Notre produit innovant est spécialement formulé pour réduire ces envies irrésistibles. En le choisissant, vous vous donnez toutes les chances de réussir votre gestion du poids de manière saine et durable."
      },
      {
        text: "Mesdames, notre produit a été spécialement formulé pour répondre à vos besoins spécifiques. Il favorise l'équilibre hormonal, vous permettant ainsi de mieux gérer les fluctuations de votre cycle et de retrouver un bien-être intérieur."
      },
      {
        text: "Un produit efficace pour soutenir la santé musculaire et osseuse !"
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
  picture: "./img/jpg/product/PN.jpg"
};
