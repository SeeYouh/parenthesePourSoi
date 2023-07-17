import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const bb = {
  nameProduct: "BB",
  summary: {
    title: "Le secret d’un éclat intérieur et extérieur.",
    paragraph: [
      {
        text: "Notre produit a une capacité exceptionnelle à régénérer les cellules. "
      },
      {
        text: "Sa formule accélère la pousse des ongles et des cheveux, vous permettant ainsi de profiter d'une chevelure plus abondante et d'ongles forts et sains. En augmentant la production de kératine, notre produit revitalise en profondeur vos cheveux, les rendant plus résistants à la casse et leur redonnant brillance et vitalité. De plus, il réduit considérablement la chute des cheveux, vous offrant ainsi une chevelure dense et volumineuse qui fera des envieux."
      },
      {
        text: "Notre produit booste votre énergie naturelle. Il agit comme un véritable stimulant, vous offrant une énergie durable tout au long de la journée. De plus, il augmente les fonctions mentales, vous aidant à rester concentré(e) et alerte, même dans les moments les plus intenses. Vous vous sentirez prêt(e) à relever tous les défis qui se présentent à vous."
      },
      {
        text: "Grâce à son pouvoir régénérateur cellulaire exceptionnel, notre produit réduit efficacement les problèmes cutanés : rougeurs, démangeaisons et psoriasis qui perturbent votre vie quotidienne, vous permettant ainsi de retrouver une peau saine et apaisée. De plus, il diminue l'acné et régule l'excès de sébum, offrant une solution naturelle pour les peaux grasses. Notre formule restreint également les pellicules, vous offrant un cuir chevelu sain et sans démangeaisons. Enfin, notre produit contribue à améliorer le bon fonctionnement du système nerveux, favorisant ainsi votre bien-être global."
      },
      {
        text: "Que vous souhaitiez améliorer votre santé globale ou simplement dynamiser votre routine beauté, ce puissant complément vous procurera une sensation de renouveau et de vitalité."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
  picture: "./img/jpg/product/bb.jpg"
};
