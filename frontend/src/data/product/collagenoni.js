import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const collagenoni = {
  nameProduct: "Collagènoni",
  summary: {
    title: "Un produit de santé globale qui fait rajeunir.",
    paragraph: [
      {
        text: "Le collagène est une protéine essentielle qui compose la structure de la peau mais également des cheveux, des ongles, des cartilages, des muscles, des tendons, des os, des articulations et des vaisseaux sanguins."
      },
      {
        text: "A partir de l’âge de 25 ans, nous perdons environ 1% de collagène chaque année. Cette protéine n’est pas renouvelée naturellement. C’est ce que l’on appelle le vieillissement cutané. C'est à ce stade que l'on peut commencer à remarquer l'apparition de ridules, de rides et une perte de fermeté de la peau. Nous pouvons également ressentir des douleurs musculaires, articulaires et osseuses."
      },
      {
        text: "Notre produit favorise le renouvellement cellulaire. En stimulant ce processus naturel, il aide à éliminer les cellules mortes et à régénérer la peau, vous offrant ainsi un teint plus frais, plus lumineux et plus éclatant. En augmentant l'élasticité de la peau, il lui procure une hydratation en profondeur, réduisant ainsi les signes de sécheresse et de déshydratation. Il lutte efficacement contre les rides, ridules et cernes, vous permettant de retrouver une peau lisse, ferme et éclatante. Notre formule aide également à diminuer l'apparence des tâches pigmentaires, vous offrant un teint plus uniforme et éclatant."
      },
      {
        text: "Enfin, notre produit renforce les ongles fragiles et les cheveux ternes, en leur apportant les nutriments essentiels pour leur santé et leur vitalité."
      },
      {
        text: "La synergie du collagène marin avec le Noni, un fruit de Tahiti aux vertus multiples, permet de diminuer les douleurs corporelles, vous offrant un soulagement naturel pour les tensions musculaires et les inconforts articulaires."
      },
      {
        text: "Optez pour ce produit, c’est retrouver une peau plus ferme, une apparence rajeunie et un bien-être intérieur total."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "./img/jpg/product/collagene.jpg"
};
