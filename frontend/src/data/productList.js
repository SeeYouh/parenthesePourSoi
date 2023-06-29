import { firstCategoryList } from "./firstCategoryList";

// Récupère le nom des catégories par leur id
let getCategoryById = (id) => {
  return firstCategoryList.find((cat) => cat.id === id);
};

// Récupère le nom des sous-catégories par leur id
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

export const productList = [
  {
    nameProduct: "La détox",
    summary: {
      title: "Nettoyer son corps en profondeur ! ",
      paragraph: [
        {
          text: "Votre alimentation et vos habitudes de vie entraînent une accumulation de toxines dans votre corps. Cela a un impact important sur votre santé et crée des désagréments quotidiens tels que la fatigue, le manque de concentration, des petits problèmes de peau, des soucis digestifs, des douleurs articulaires et musculaires, une incapacité à perdre du poids…",
        },
        {
          text: "Il est donc indispensable de nettoyer votre corps pour relancer votre métabolisme afin que ce dernier retrouve ses fonctions optimales.",
        },
        {
          text: "Prenez le contrôle de votre bien-être quotidien en soutenant l’équilibre interne de votre corps.",
        },
        {
          text: "Notre détox’ est un produit unique en son genre si vous souhaitez vous sentir au mieux de votre forme.",
        },
      ],
    },
    firstCategory: [
      getCategoryById("0GestionDuPoids").name,
      getCategoryById("1Sante").name,
      getCategoryById("3BienEtre").name,
    ],
    secondCategory: [
      getSecondCategoryById("0GestionDuPoids0CureMinceur").text,
      getSecondCategoryById("1Sante0ProblemesCutanes").text,
      getSecondCategoryById("1Sante1TroublesDigestifsIntestinauxRespiratoires")
        .text,
      getSecondCategoryById("1Sante2SystemesCorps").text,
      getSecondCategoryById("1Sante3Pathologies").text,
    ],
    picture: "./img/png/product/0_1_white.png",
  },
  {
    nameProduct: "Le BB",
    summary: {
      title: "Le secret d’un éclat intérieur et extérieur",
      paragraph: [
        {
          text: "Révélez votre éclat intérieur et extérieur avec ce complément qui offre une combinaison unique d'ingrédients pour une santé optimale de vos cheveux, des ongles, de votre peau et de votre bien-être global.",
        },
        {
          text: "Sa formule exclusive renferme un mélange d'ingrédients qui apportent de nombreux bienfaits pour la santé, en particulier si vous souhaitez compléter votre apport quotidien en vitamines. Conçu spécifiquement pour répondre aux besoins nutritionnels des cheveux, des ongles et de la peau, le BB ne se limite pas à l'aspect externe. ",
        },
        {
          text: "Votre bien-être interne bénéficiera également des vitamines, des minéraux et des bioflavonoïdes contenus dans ce complément, tous extraits naturellement de plantes.",
        },
        {
          text: "Que vous souhaitiez renforcer votre santé globale ou simplement dynamiser votre routine beauté, ce puissant complément vous procurera une sensation de renouveau et de vitalité.",
        },
      ],
    },
    firstCategory: [
      getCategoryById("1Sante").name,
      getCategoryById("2Beaute").name,
      getCategoryById("3BienEtre").name,
      getCategoryById("6ProfilsParticuliers").name,
    ],
    secondCategory: [
      getSecondCategoryById("1Sante0ProblemesCutanes").text,
      getSecondCategoryById("1Sante2SystemesCorps").text,
      getSecondCategoryById("2Beaute0SoinsCheveux").text,
      getSecondCategoryById("2Beaute2SoinsCorps").text,
      getSecondCategoryById("3BienEtre1Energie").text,
      getSecondCategoryById("6ProfilsParticuliers1Enfants").text,
    ],
    picture: "./img/png/product/0_1_white.png",
  },
  {
    nameProduct: "La 8ème merveille du Monde",
    summary: {
      title: "Un produit breveté et unique",
      paragraph: [
        {
          text: "Ce produit est breveté et donc disponible seulement dans notre boutique. Il est unique car a été formulé avec 36 des ingrédients naturels les plus puissants du monde. Chaque gourde contient une purée de fruits entiers, de champignons, d’huiles essentielles et d’herbes aromatiques du monde entier.",
        },
        {
          text: "Ces 36 superaliments ont été sélectionnés pour leurs propriétés énergisantes, antioxydantes, leurs propriétés anti-inflammatoires et leurs bienfaits sur l’organisme.",
        },
        {
          text: "Petit plus, il accélère le bronzage en donnant un teint hâlé",
        },
      ],
    },
    firstCategory: [
      getCategoryById("1Sante").name,
      getCategoryById("3BienEtre").name,
      getCategoryById("6ProfilsParticuliers").name,
    ],
    secondCategory: [
      getSecondCategoryById("1Sante0ProblemesCutanes").text,
      getSecondCategoryById("1Sante1TroublesDigestifsIntestinauxRespiratoires")
        .text,
      getSecondCategoryById("1Sante2SystemesCorps").text,
      getSecondCategoryById("1Sante3Pathologies").text,
      getSecondCategoryById("3BienEtre1Energie").text,
      getSecondCategoryById("3BienEtre2FatigueSommeil").text,
      getSecondCategoryById("6ProfilsParticuliers0Femmes").text,
      getSecondCategoryById("6ProfilsParticuliers1Enfants").text,
    ],
    picture: "./img/png/product/0_1_white.png",
  },
  {
    nameProduct: "Le booster d’énergie",
    summary: {
      title: "Un mélange vivifiant pour booster votre journée !",
      paragraph: [
        {
          text: "Un produit incroyable qui regorge de bienfaits sur votre santé physique et mentale. ",
        },
        {
          text: "Avec ses précieux nutriments, il apporte une énergie revitalisante, combat la fatigue, améliore l’attention et la vigilance mentale et booste le système immunitaire et cardiovasculaire.",
        },
        {
          text: "Il offre une meilleure qualité de sommeil, une humeur positive en éliminant le stress, les angoisses et le surmenage. Une sensation de sérénité, de calme et de relaxation se fait ressentir. ",
        },
        {
          text: "Les ingrédients sélectionnés dans ce produit ont également des effets antioxydants et anti-inflammatoires qui permettent d’atténuer les douleurs, les allergies et les troubles digestifs.",
        },
        {
          text: "Faites le choix d’un bien-être optimal et votre corps vous remerciera pour cette décision qui va changer votre quotidien !",
        },
      ],
    },
    firstCategory: [
      getCategoryById("0GestionDuPoids").name,
      getCategoryById("1Sante").name,
      getCategoryById("2Beaute").name,
      getCategoryById("3BienEtre").name,
      getCategoryById("6ProfilsParticuliers").name,
    ],
    secondCategory: [
      getSecondCategoryById("0GestionDuPoids0CureMinceur").text,
      getSecondCategoryById("1Sante1TroublesDigestifsIntestinauxRespiratoires")
        .text,
      getSecondCategoryById("1Sante2SystemesCorps").text,
      getSecondCategoryById("1Sante3Pathologies").text,
      getSecondCategoryById("2Beaute1SoinsVisage").text,
      getSecondCategoryById("3BienEtre0GestionStress").text,
      getSecondCategoryById("3BienEtre1Energie").text,
      getSecondCategoryById("3BienEtre2FatigueSommeil").text,
      getSecondCategoryById("3BienEtre3Humeur").text,
      getSecondCategoryById("6ProfilsParticuliers0Femmes").text,
      getSecondCategoryById("6ProfilsParticuliers1Enfants").text,
    ],
    picture: "./img/png/product/0_1_white.png",
  },
  {
    nameProduct: "Le BB",
    summary: {
      title: "Le secret d’un éclat intérieur et extérieur",
      paragraph: [
        {
          text: "Révélez votre éclat intérieur et extérieur avec ce complément qui offre une combinaison unique d'ingrédients pour une santé optimale de vos cheveux, des ongles, de votre peau et de votre bien-être global.",
        },
        {
          text: "Sa formule exclusive renferme un mélange d'ingrédients qui apportent de nombreux bienfaits pour la santé, en particulier si vous souhaitez compléter votre apport quotidien en vitamines. Conçu spécifiquement pour répondre aux besoins nutritionnels des cheveux, des ongles et de la peau, le BB ne se limite pas à l'aspect externe. ",
        },
        {
          text: "Votre bien-être interne bénéficiera également des vitamines, des minéraux et des bioflavonoïdes contenus dans ce complément, tous extraits naturellement de plantes.",
        },
        {
          text: "Que vous souhaitiez renforcer votre santé globale ou simplement dynamiser votre routine beauté, ce puissant complément vous procurera une sensation de renouveau et de vitalité.",
        },
      ],
    },
    firstCategory: [
      getCategoryById("1Sante").name,
      getCategoryById("2Beaute").name,
      getCategoryById("3BienEtre").name,
      getCategoryById("6ProfilsParticuliers").name,
    ],
    secondCategory: [
      getSecondCategoryById("1Sante0ProblemesCutanes").text,
      getSecondCategoryById("1Sante2SystemesCorps").text,
      getSecondCategoryById("2Beaute0SoinsCheveux").text,
      getSecondCategoryById("2Beaute2SoinsCorps").text,
      getSecondCategoryById("3BienEtre1Energie").text,
      getSecondCategoryById("6ProfilsParticuliers1Enfants").text,
    ],
    picture: "./img/png/product/0_1_white.png",
  },
  {
    nameProduct: "Le BB",
    summary: {
      title: "Le secret d’un éclat intérieur et extérieur",
      paragraph: [
        {
          text: "Révélez votre éclat intérieur et extérieur avec ce complément qui offre une combinaison unique d'ingrédients pour une santé optimale de vos cheveux, des ongles, de votre peau et de votre bien-être global.",
        },
        {
          text: "Sa formule exclusive renferme un mélange d'ingrédients qui apportent de nombreux bienfaits pour la santé, en particulier si vous souhaitez compléter votre apport quotidien en vitamines. Conçu spécifiquement pour répondre aux besoins nutritionnels des cheveux, des ongles et de la peau, le BB ne se limite pas à l'aspect externe. ",
        },
        {
          text: "Votre bien-être interne bénéficiera également des vitamines, des minéraux et des bioflavonoïdes contenus dans ce complément, tous extraits naturellement de plantes.",
        },
        {
          text: "Que vous souhaitiez renforcer votre santé globale ou simplement dynamiser votre routine beauté, ce puissant complément vous procurera une sensation de renouveau et de vitalité.",
        },
      ],
    },
    firstCategory: [
      getCategoryById("1Sante").name,
      getCategoryById("2Beaute").name,
      getCategoryById("3BienEtre").name,
      getCategoryById("6ProfilsParticuliers").name,
    ],
    secondCategory: [
      getSecondCategoryById("1Sante0ProblemesCutanes").text,
      getSecondCategoryById("1Sante2SystemesCorps").text,
      getSecondCategoryById("2Beaute0SoinsCheveux").text,
      getSecondCategoryById("2Beaute2SoinsCorps").text,
      getSecondCategoryById("3BienEtre1Energie").text,
      getSecondCategoryById("6ProfilsParticuliers1Enfants").text,
    ],
    picture: "./img/png/product/0_1_white.png",
  },
  {
    nameProduct: "Le BB",
    summary: {
      title: "Le secret d’un éclat intérieur et extérieur",
      paragraph: [
        {
          text: "Révélez votre éclat intérieur et extérieur avec ce complément qui offre une combinaison unique d'ingrédients pour une santé optimale de vos cheveux, des ongles, de votre peau et de votre bien-être global.",
        },
        {
          text: "Sa formule exclusive renferme un mélange d'ingrédients qui apportent de nombreux bienfaits pour la santé, en particulier si vous souhaitez compléter votre apport quotidien en vitamines. Conçu spécifiquement pour répondre aux besoins nutritionnels des cheveux, des ongles et de la peau, le BB ne se limite pas à l'aspect externe. ",
        },
        {
          text: "Votre bien-être interne bénéficiera également des vitamines, des minéraux et des bioflavonoïdes contenus dans ce complément, tous extraits naturellement de plantes.",
        },
        {
          text: "Que vous souhaitiez renforcer votre santé globale ou simplement dynamiser votre routine beauté, ce puissant complément vous procurera une sensation de renouveau et de vitalité.",
        },
      ],
    },
    firstCategory: [
      getCategoryById("1Sante").name,
      getCategoryById("2Beaute").name,
      getCategoryById("3BienEtre").name,
      getCategoryById("6ProfilsParticuliers").name,
    ],
    secondCategory: [
      getSecondCategoryById("1Sante0ProblemesCutanes").text,
      getSecondCategoryById("1Sante2SystemesCorps").text,
      getSecondCategoryById("2Beaute0SoinsCheveux").text,
      getSecondCategoryById("2Beaute2SoinsCorps").text,
      getSecondCategoryById("3BienEtre1Energie").text,
      getSecondCategoryById("6ProfilsParticuliers1Enfants").text,
    ],
    picture: "./img/png/product/0_1_white.png",
  },
];
