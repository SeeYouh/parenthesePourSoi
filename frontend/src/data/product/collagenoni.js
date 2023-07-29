import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const collagenoni = {
  nameProduct: "Collagènoni",
  id: "collagenoni",

  summary: {
    title: "Un produit de santé globale qui fait rajeunir.",
    paragraph: [
      {
        id: "0Collagènoni",
        subTitle: "Protéine essentielle",
        text: "Le collagène est une protéine essentielle qui compose la structure de la peau mais également des cheveux, des ongles, des cartilages, des muscles, des tendons, des os, des articulations et des vaisseaux sanguins."
      },
      {
        id: "1Collagènoni",
        subTitle: "Vieillissement cutané",
        text: "A partir de l’âge de 25 ans, nous perdons environ 1% de collagène chaque année. Cette protéine n’est pas renouvelée naturellement. C’est ce que l’on appelle le vieillissement cutané. C'est à ce stade que l'on peut commencer à remarquer l'apparition de ridules, de rides et une perte de fermeté de la peau. Nous pouvons également ressentir des douleurs musculaires, articulaires et osseuses.",
        picture675: "./img/jpg/product/CollagenoniIllusText675.jpg",
        picture450: "./img/jpg/product/CollagenoniIllusText450.jpg",
        picture900: "./img/jpg/product/CollagenoniIllusText900.jpg"
      },
      {
        id: "2Collagènoni",
        subTitle: "Renouvellement cellulaire",
        text: "Notre produit favorise le renouvellement cellulaire. En stimulant ce processus naturel, il aide à éliminer les cellules mortes et à régénérer la peau, vous offrant ainsi un teint plus frais, plus lumineux et plus éclatant."
      },
      {
        id: "3Collagènoni",
        subTitle: "Hydratation et élasticité",
        text: "En augmentant l'élasticité de la peau, il lui procure une hydratation en profondeur, réduisant ainsi les signes de sécheresse et de déshydratation. Il lutte efficacement contre les rides, ridules et cernes, vous permettant de retrouver une peau lisse, ferme et éclatante."
      },
      {
        id: "4Collagènoni",
        subTitle: "Teint uniforme",
        text: "Notre formule aide également à diminuer l'apparence des tâches pigmentaires, vous offrant un teint plus uniforme et éclatant."
      },
      {
        id: "5Collagènoni",
        subTitle: "Renforcement des ongles et cheveux",
        text: "Enfin, notre collagènoni renforce les ongles fragiles et les cheveux ternes, en leur apportant les nutriments essentiels pour leur santé et leur vitalité."
      },
      {
        id: "6Collagènoni",
        subTitle: "Soulagement des douleurs corporelles",
        text: "La synergie du collagène marin avec le Noni, un fruit de Tahiti aux vertus multiples, permet de diminuer les douleurs corporelles, vous offrant un soulagement naturel pour les tensions musculaires et les inconforts articulaires."
      },
      {
        id: "7Collagènoni",
        subTitle: "Choix de la jeunesse",
        text: "Optez pour ce produit, c’est retrouver une peau plus ferme, une apparence rajeunie et un bien-être intérieur total."
      },
      {
        id: "8Collagènoni",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "9Collagènoni",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "CnApportQ100",
        pictureLove: "./img/jpg/product/apportQ10.jpg",
        textLove:
          "La détox’ étant la base de toute cure minceur, nos gouttes super puissantes devraient également vous intéresser pour perdre du poids sans effet yoyo."
      },
      {
        id: "CnGelNettoyant1",
        pictureLove: "./img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Si votre système digestif et intestinal sont déséquilibrés, les pré-probiotiques devraient réguler tout ceci."
      },
      {
        id: "CnSerumFlash2",
        pictureLove: "./img/jpg/product/serumFlash.jpg",
        textLove:
          "Une autre approche consiste à rétablir l'équilibre de votre système digestif et intestinal en fournissant des légumes et des vitamines essentiels par le biais d'une détoxification végétale."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "./img/jpg/product/collagene.jpg",
  colors: {
    textColor: "#9f348b",
    titleColorInSummary: "#45173c",
    bgColorInSummary: "#dfa6d4"
  },
  inSummary: [
    {
      id: "CniS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "CniS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "CniS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "CniS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "CniS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
