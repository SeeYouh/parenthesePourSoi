import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const apportQ10 = {
  nameProduct: "Apport Q10",
  summary: {
    title: "La formule la plus puissante de CoQ10",
    paragraph: [
      {
        subTitle: "Protégez vos cellules ",
        text: "Notre formule de CoQ10 est riche en propriétés antioxydantes, offrant une puissante défense pour vos cellules contre les dommages causés par les radicaux libres. En protégeant vos cellules, elle contribue à prévenir les signes du vieillissement prématuré et favorise une peau éclatante de jeunesse."
      },
      {
        subTitle: "Traitez vos maux",
        text: [
          "La puissance de notre produit de CoQ10 le rend particulièrement efficace pour traiter les varices et la cellulite. Ses propriétés spécifiques agissent en profondeur pour améliorer la circulation sanguine, réduire les gonflements et favoriser la disparition des imperfections cutanées.",
          "En plus de cette action sur les varices et la cellulite, notre produit possède des propriétés cicatrisantes qui accélèrent le processus de guérison des plaies. Elle favorise la régénération des tissus pour une cicatrisation optimale.",
          "En renforçant le système immunitaire, notre puissante formule vous aide à mieux lutter contre les infections et les maladies. Vous vous sentirez plus résistant et mieux armé pour affronter les agressions extérieures. Connu également pour son impact bénéfique sur la santé cardiovasculaire, le CoQ10 soutient le bon fonctionnement du cœur et maintient une circulation sanguine optimale, vous offrant ainsi une santé cardiaque optimisée."
        ],
        picture450: "./img/jpg/product/apportQ10IllusText450.jpg",
        picture675: "./img/jpg/product/apportQ10IllusText675.jpg",
        picture900: "./img/jpg/product/apportQ10IllusText900.jpg"
      },
      {
        subTitle: "Préservez votre mémoire",
        text: "En plus de ses effets sur la peau et la santé, le CoQ10 joue un rôle essentiel dans la préservation de la mémoire et l'amélioration de la fonction cognitive. Vous pourrez vous concentrer davantage et rester alerte pour mieux faire face à vos défis quotidiens."
      },
      {
        subTitle: "Luttez contre le vieillissement cutané",
        text: "Notre formule de CoQ10 lutte contre les signes du vieillissement, vous offrant une apparence plus jeune et éclatante. Elle favorise la régénération de la peau et réduit l'apparition des rides et des ridules."
      },
      {
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        pictureLove: "./img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Une solution exceptionnelle qui vous offre une peau éclatante tout en améliorant la circulation sanguine et en réduisant la rétention d'eau. Ce produit soutient la fonction du collagène pour une peau plus ferme et élastique, tout en procurant un soulagement efficace pour vos articulations et votre fonction respiratoire."
      },
      {
        pictureLove: "./img/jpg/product/collagene.jpg",
        textLove:
          "Notre collagène est bien plus qu'un bienfait pour la peau ; il apporte un soutien essentiel à votre corps dans son ensemble. Il fortifie vos os pour une mobilité harmonieuse, renforce vos dents pour une santé bucco-dentaire optimale, et préserve l'intégrité de vos ligaments et articulations pour une flexibilité durable. Offrez à votre corps la vitalité qu'il mérite en adoptant notre précieux collagène."
      },
      {
        pictureLove: "./img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Une solution complète pour améliorer votre bien-être global. En luttant efficacement contre la fatigue, notre produit agit en profondeur pour vous offrir un sommeil de qualité et permet une concentration mentale comme vous avez rarement connu. De plus, notre formule est votre alliée précieuse pour faire face au stress, à l'anxiété et au surmenage, grâce à ses ingrédients naturels qui procurent un soulagement apaisant."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "./img/jpg/product/apportQ10.jpg",
  colors: {
    textColor: "#da7a2a"
  }
};
