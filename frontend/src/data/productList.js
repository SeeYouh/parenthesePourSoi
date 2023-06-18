import { firstCategoryList } from "./firstCategoryList";

// Récupère le nom des catégories par leur id
let getCategoryById = (id) => {
  return firstCategoryList.find((category) => category.id === id);
};

export const productCard = [
  {
    id: "1ld",
    nameProduct: "La détox",
    summary: {
      id: "1lds0",
      title: "Un équilibre à toute épreuve !",
      paragraph: {
        text0:
          "Nettoyer votre corps pour relancer votre métabolisme et faire en sorte que votre corps retrouve ses fonctions optimales en éliminant les toxines et les radicaux libres. ",
        text1:
          "Prenez le contrôle de votre bien-être quotidien en soutenant l’équilibre interne de votre corps",
        text2:
          "Un complément unique en son genre pour ceux qui veulent se sentir au mieux de leur forme.",
      },
    },
    firstCategory: [getCategoryById("0gp").name, getCategoryById("1s").name],
    secondCategory: [getCategoryById("0gp").secondCategory[0]],
    secondCategory: [getCategoryById("0gp").secondCategory[1]],
    secondCategory: [getCategoryById("0gp").secondCategory[2]],
  },
];
