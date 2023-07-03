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
    nameProduct: "Détox’",
    summary: {
      title: "Nettoyer son corps en profondeur ! ",
      paragraph: [
        {
          text: "Votre alimentation et vos habitudes de vie entraînent une accumulation de toxines dans votre corps. Cela a un impact important sur votre santé et crée des désagréments quotidiens tels que la fatigue, le manque de concentration, des problèmes de peau, des troubles digestifs, des douleurs articulaires et musculaires, ainsi qu'une difficulté à perdre du poids…",
        },
        {
          text: "Il est donc indispensable de détoxifier votre corps pour relancer votre métabolisme afin qu'il retrouve ses fonctions optimales.",
        },
        {
          text: "Prenez le contrôle de votre bien-être quotidien en soutenant l’équilibre interne de votre corps.",
        },
        {
          text: "Prenez le contrôle de votre bien-être quotidien en soutenant l'équilibre interne de votre corps. Notre détox est un produit unique en son genre si vous souhaitez vous sentir au mieux de votre forme.",
        },
      ],
    },
    firstCategory: [getCategoryById("0GestionDuPoids").name],
    secondCategory: [getSecondCategoryById("0GestionDuPoids0CureMinceur").text],
    picture: "./img/png/product/Détox’.png",
  },
  {
    nameProduct: "BB",
    summary: {
      title: "Le secret d’un éclat intérieur et extérieur",
      paragraph: [
        {
          text: "Ce complément offre une combinaison unique d'ingrédients pour favoriser la santé optimale de vos cheveux, de vos ongles, de votre peau et de votre bien-être global.",
        },
        {
          text: "Sa formule exclusive renferme un mélange d'ingrédients qui apportent de nombreux bienfaits pour la santé, en particulier si vous souhaitez compléter votre apport quotidien en vitamines. Conçu spécifiquement pour répondre aux besoins nutritionnels des cheveux, des ongles et de la peau, le BB ne se limite pas à l'aspect externe.",
        },
        {
          text: "Votre bien-être interne bénéficiera également des vitamines, minéraux et bioflavonoïdes contenus dans ce complément, tous issus d'extraits naturels de plantes.",
        },
        {
          text: "Que vous souhaitiez améliorer votre santé globale ou simplement dynamiser votre routine beauté, ce puissant complément vous procurera une sensation de renouveau et de vitalité.",
        },
      ],
    },
    firstCategory: [getCategoryById("2Beaute").name],
    secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
    picture: "./img/png/product/BB.png",
  },
  {
    nameProduct: "Mère de Tous",
    summary: {
      title: "Un produit breveté et unique",
      paragraph: [
        {
          text: "Ce produit est breveté et donc disponible uniquement dans notre boutique. Il est unique car a été formulé avec 36 des ingrédients naturels les plus puissants du monde. Chaque gourde contient une purée de fruits entiers, de champignons, d’huiles essentielles et d’herbes aromatiques du monde entier. ",
        },
        {
          text: "Ces 36 superaliments ont été soigneusement sélectionnés pour leurs propriétés énergisantes, antioxydantes, leurs propriétés anti-inflammatoires et leurs bienfaits sur l’organisme.",
        },
        {
          text: "De plus, ce produit a l’avantage d’accélérer le bronzage et de donner un teint hâlé.",
        },
        {
          text: "Prenez le contrôle de vos maux pour vivre dans un état de bien-être total.",
        },
      ],
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre3Humeur").text],
    picture: "./img/png/product/Mère de Tous.png",
  },
  {
    nameProduct: "Booster d’énergie",
    summary: {
      title: "Un mélange vivifiant pour booster votre journée !",
      paragraph: [
        {
          text: "Ce produit incroyable regorge de bienfaits sur votre santé physique et mentale. Avec ses précieux nutriments, il apporte une énergie revitalisante, combat la fatigue, améliore l’attention et la vigilance mentale, et renforce le système immunitaire et cardiovasculaire.",
        },
        {
          text: "Il favorise une meilleure qualité de sommeil et favorise une humeur positive en éliminant le stress, les angoisses et le surmenage. Une sensation de sérénité, de calme et de relaxation se fait ressentir.",
        },
        {
          text: "Les ingrédients sélectionnés de ce produit ont également des effets antioxydants et anti-inflammatoires qui contribuent à atténuer les douleurs, les allergies et les troubles digestifs.",
        },
        {
          text: "Faites le choix d’un bien-être optimal et votre corps vous remerciera pour cette décision qui va changer votre quotidien !",
        },
      ],
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre3Humeur").text],
    picture: "./img/png/product/Booster d’énergie.png",
  },
  {
    nameProduct: "Collagène",
    summary: {
      title: "Un produit de santé globale qui fait rajeunir.",
      paragraph: [
        {
          text: "Le collagène est une protéine essentielle qui compose la structure de la peau mais également des cheveux, des ongles, des cartilages, des muscles, des tendons, des os, des articulations et des vaisseaux sanguins.",
        },
        {
          text: "A partir de l’âge de 25 ans, nous perdons environ 1% de collagène chaque année. Cette protéine n’est pas renouvelée naturellement. C’est ce que l’on appelle le vieillissement cutané. C'est à ce stade que l'on peut commencer à remarquer l'apparition de ridules, de rides et une perte de fermeté de la peau. Nous pouvons également ressentir des douleurs musculaires, articulaires et osseuses.",
        },
        {
          text: "Pour remédier à cela, notre Collagène offre une solution en combinant 10 000 mg de collagène marin hydrolysé d'origine durable avec du fruit de Noni provenant de Tahiti. Cette combinaison stimule la production de collagène, favorisant ainsi une peau visiblement plus ferme et plus jeune et un mieux-être intérieur incomparable.",
        },
        {
          text: "Optez pour ce produit, c’est retrouver une peau plus ferme, une apparence rajeunie et un bien-être total.",
        },
      ],
    },
    firstCategory: [getCategoryById("2Beaute").name],
    secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
    picture: "./img/png/product/Collagène.png",
  },
  {
    nameProduct: "Régénérateur cellulaire",
    summary: {
      title: "Un support quotidien !",
      paragraph: [
        {
          text: "C’est notre best-seller, notre chouchou ! Son efficacité est incontestable !",
        },
        {
          text: "C’est un antioxydant offre un mieux-être certain à votre corps. Il joue un rôle essentiel sur la qualité de la peau, la santé globale et l’énergie.",
        },
        {
          text: "Ce produit complet résoudra plusieurs de vos préoccupations telles que la cellulite, les vergetures, les cicatrices, l’acné, la rétention d’eau, la circulation sanguine… tout en stimulant votre système immunitaire et votre énergie de façon naturelle.",
        },
        {
          text: "Un produit unique pour des résultats multiples.",
        },
      ],
    },
    firstCategory: [getCategoryById("1Sante").name],
    secondCategory: [getSecondCategoryById("1Sante0ProblemesCutanes").text],
    picture: "./img/png/product/Régénérateur cellulaire.png",
  },
  {
    nameProduct: "Bien-être intérieur",
    summary: {
      title: "Équilibrez votre corps, équilibrez votre vie.",
      paragraph: [
        {
          text: "Le moment est venu de prendre votre santé en main et d'atteindre enfin un état de bien-être total pour votre corps en régulant votre microbiote. Dites adieu aux problèmes gastriques, intestinaux et digestifs !",
        },
        {
          text: "Rétablissez l'équilibre naturel de votre corps grâce à une formulation avancée contenant 15 souches différentes de cultures vivantes à large spectre.",
        },
        {
          text: "Expérimentez un bien-être intérieur inégalé !",
        },
      ],
    },
    firstCategory: [getCategoryById("1Sante").name],
    secondCategory: [
      getSecondCategoryById("1Sante1TroublesDigestifsIntestinauxRespiratoires")
        .text,
    ],
    picture: "./img/png/product/Bien-être-intérieur.png",
  },
  {
    nameProduct: "Equilibre corps et esprit",
    summary: {
      title: "Harmonisez votre corps pour un équilibre complet !",
      paragraph: [
        {
          text: "Tout au long de votre vie, votre corps subit d'importants changements significatifs, tant à l’intérieur qu’à l’extérieur.",
        },
        {
          text: "Notre produit joue un rôle essentiel en soutenant la division cellulaire, en préservant les fonctions psychologiques normales et en favorisant un métabolisme énergétique optimal. Il fournit à votre corps les outils nécessaires pour maintenir une santé optimale. En le prenant avant de vous coucher, vous vous réveillerez chaque jour en vous sentant régénéré. ",
        },
        {
          text: "Restez actif et plein d’énergie à chaque étape de votre vie !",
        },
      ],
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre1Energie").text],
    picture: "./img/png/product/Equilibre corps et esprit.png",
  },
  {
    nameProduct: "Gouttes minceur",
    summary: {
      title: "Laissez les éléments naturels agir en votre faveur !",
      paragraph: [
        {
          text: "Avec ses deux fioles uniques sous forme de gouttes, ce produit offre un avantage de pointe en soutenant votre apport nutritionnel quotidien.",
        },
        {
          text: "Ces gouttes sont spécialement conçues pour réguler l’appétit, favoriser la combustion des graisses sous-cutanées et viscérales, ainsi que d’améliorer la digestion et le sommeil afin d’éviter le stockage de nouvelles graisses pendant la nuit.",
        },
        {
          text: "Elles s’intègrent facilement dans votre mode de vie et ont des résultats prouvés !",
        },
        {
          text: "Prenez le contrôle de votre corps en utilisant des produits uniques.",
        },
      ],
    },
    firstCategory: [getCategoryById("0GestionDuPoids").name],
    secondCategory: [getSecondCategoryById("0GestionDuPoids0CureMinceur").text],
    picture: "./img/png/product/Gouttes minceur.png",
  },
  {
    nameProduct: "Harmonie",
    summary: {
      title: "Soutenez votre corps et votre beauté !",
      paragraph: [
        {
          text: "La beauté prend son essence de l’intérieur : n’est-il pas temps de libérer la version la plus rayonnante de vous-même ?",
        },
        {
          text: "Détoxifiant, antidépresseur, anti-âge, gestion des douleurs, problèmes cutanés… Un seul produit pour de nombreux bienfaits.",
        },
        {
          text: "Faites ressortir le meilleur de votre corps grâce à ce puissant mélange de plantes et de nutriments que vous trouverez dans ce produit.",
        },
        {
          text: "Soyez en forme la journée et dormez paisiblement la nuit.",
        },
      ],
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre2FatigueSommeil").text],
    picture: "./img/png/product/Harmonie.png",
  },
  {
    nameProduct: "Os et Muscles",
    summary: {
      title:
        "Soutenez votre santé musculaire et osseuse avec notre produit essentiel !",
      paragraph: [
        {
          text: "Ce mélange unique de vitamines et de minéraux, incluant du calcium, de la vitamine D et du magnésium, est spécialement conçu pour favoriser la santé des muscles et des os.",
        },
        {
          text: "Sa formule pratique et simple vous offre une source fiable de nutriments essentiels. De plus, notre ajout d’un mélange de curcuma et de gingembre apporte des bienfaits supplémentaires.",
        },
        {
          text: "Un produit efficace pour soutenir la santé musculaire et osseuse !",
        },
      ],
    },
    firstCategory: [getCategoryById("1Sante").name],
    secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
    picture: "./img/png/product/Os et Muscles.png",
  },
];
