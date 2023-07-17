import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const dentifrice = {
  nameProduct: "Dentifrice",
  summary: {
    title: "Une expérience de soin bucco-dentaire exceptionnelle.",
    paragraph: [
      {
        text: "Notre dentifrice est formulé à partir d'ingrédients naturels de haute qualité. Vous n'y trouverez aucun produit chimique agressif. Il offre un blanchiment naturel en éliminant les tâches en douceur et vous aide à obtenir des dents plus éclatantes qui illumine votre sourire. Il est enrichi en extraits de plantes apaisants et antibactériens pour vous aider à maintenir des gencives saines et revitalisées."
      },
      {
        text: "Avec l'huile essentielle de menthe poivrée, notre produit laisse une agréable sensation de fraîcheur dans votre bouche. Dites adieu à la mauvaise haleine et profitez d'une bouffée de fraîcheur durable après chaque brossage."
      },
      {
        text: "Notre dentifrice est sans fluorure pour ceux qui préfèrent éviter cet élément, sans triclosan qui peut être nocif, sans paraben pour une tranquillité d'esprit, sans édulcorants artificiels pour une saveur pure, et sans colorants pour une expérience naturelle authentique."
      },
      {
        text: "Découvrez une nouvelle façon de prendre soin de votre sourire, naturellement."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
  picture: "./img/jpg/product/dentifrice.jpg"
};
