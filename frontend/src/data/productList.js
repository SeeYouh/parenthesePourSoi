import { firstCategoryList } from "./firstCategoryList";

// Récupère le nom des catégories par leur id
let getCategoryById = (id) => {
  return firstCategoryList.find((cat) => cat.id === id);
};

let getSecondCategoryById = (id) => {
  for (let category of firstCategoryList) {
    let subcategory = category.secondCategory.find(
      (subCat) => subCat.id === id
    );
    if (subcategory) {
      return subcategory;
    }
  }
  return null; // retourne null si l'ID de la sous-catégorie n'est pas trouvé
};

export const productCard = [
  {
    id: "1ld",
    nameProduct: "La détox",
    summary: {
      id: "1lds0",
      title: "Un équilibre à toute épreuve !",
      paragraph: [
        {
          id: "1ldpt0",
          text: "Nettoyer votre corps pour relancer votre métabolisme et faire en sorte que votre corps retrouve ses fonctions optimales en éliminant les toxines et les radicaux libres.",
        },
        {
          id: "1ldpt1",
          text: "Prenez le contrôle de votre bien-être quotidien en soutenant l’équilibre interne de votre corps.",
        },
        {
          id: "1ldpt2",
          text: "Un complément unique en son genre pour ceux qui veulent se sentir au mieux de leur forme.",
        },
      ],
    },
    firstCategory: [
      getCategoryById("0gp").name,
      getCategoryById("1s").name,
      getCategoryById("2b").name,
      getCategoryById("3be").name,
    ],
    secondCategory: [
      getSecondCategoryById("0gpsCt0").text,
      getSecondCategoryById("1ssCt0").text,
      getSecondCategoryById("1ssCt1").text,
      getSecondCategoryById("1ssCt2").text,
      getSecondCategoryById("2bsCt2").text,
      getSecondCategoryById("3besCt1").text,
    ],
    picture: "./img/jpg/product/produit1.jpg",
    altPicture: "Photo du produit La Détox",
  },
  {
    id: "1ld",
    nameProduct: "La détox",
    summary: {
      id: "1lds0",
      title: "Un équilibre à toute épreuve !",
      paragraph: [
        {
          id: "1ldpt0",
          text: "Nettoyer votre corps pour relancer votre métabolisme et faire en sorte que votre corps retrouve ses fonctions optimales en éliminant les toxines et les radicaux libres.",
        },
        {
          id: "1ldpt1",
          text: "Prenez le contrôle de votre bien-être quotidien en soutenant l’équilibre interne de votre corps.",
        },
        {
          id: "1ldpt2",
          text: "Un complément unique en son genre pour ceux qui veulent se sentir au mieux de leur forme.",
        },
      ],
    },
    firstCategory: [
      getCategoryById("0gp").name,
      getCategoryById("1s").name,
      getCategoryById("2b").name,
      getCategoryById("3be").name,
    ],
    secondCategory: [
      getSecondCategoryById("0gpsCt0").text,
      getSecondCategoryById("1ssCt0").text,
      getSecondCategoryById("1ssCt1").text,
      getSecondCategoryById("1ssCt2").text,
      getSecondCategoryById("2bsCt2").text,
      getSecondCategoryById("3besCt1").text,
    ],
    picture: "./img/jpg/product/produit1.jpg",
    altPicture: "Photo du produit La Détox",
  },
];
