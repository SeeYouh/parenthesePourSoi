import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const equilibreCorpsEsprit = {
  nameProduct: "Equilibre corps et esprit",
  summary: {
    title: "Harmonisez votre corps pour un équilibre complet.",
    paragraph: [
      {
        text: "Tout au long de votre vie, votre corps subit d'importants changements significatifs, tant à l’intérieur qu’à l’extérieur."
      },
      {
        text: "Notre produit joue un rôle essentiel en soutenant la division cellulaire, en préservant les fonctions psychologiques normales et en favorisant un métabolisme énergétique optimal. Il fournit à votre corps les outils nécessaires pour maintenir une santé optimale. En le prenant avant de vous coucher, vous vous réveillerez chaque jour en vous sentant régénéré. "
      },
      {
        text: "Restez actif et plein d’énergie à chaque étape de votre vie !"
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre1Energie").text],
  picture: "./img/jpg/product/equilibreCorpsEsprit.jpg"
};
