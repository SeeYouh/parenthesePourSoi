import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const apresShampooing = {
  nameProduct: "Après shampooing",
  id: "apresShampooing",

  summary: {
    title: "Protégez vos cheveux et prenez en soin",
    paragraph: [
      {
        id: "0apresShampooing",
        subTitle: "Purifiez vos cheveux",
        text: "Notre après-shampooing offre une purification douce mais efficace pour vos cheveux. Il élimine en douceur les impuretés sans en introduire de nouvelles, laissant vos cheveux frais et légers. Grâce à sa formule unique, il facilite le brossage, rédeuisant ainsi la casse et les nœuds. Vous serez émerveillé(e) par l'élasticité, la brillance et la douceur retrouvées de vos cheveux, révélant toute leur beauté naturelle. C'est le soin idéal pour ceux qui cherchent à maintenir la santé et la vitalité de leurs cheveux."
      },
      {
        id: "1apresShampooing",
        subTitle: "Protégez et soulagez votre cuir chevelu",
        text: [
          "Notre après-shampooing est spécialement formulé pour offrir une action apaisante et réparatrice sur le cuir chevelu et la peau. Il cible les problèmes cutanés courants tels que les pellicules, l'eczéma, les rougeurs et les démangeaisons, qui peuvent souvent être gênants et inconfortables. Grâce à ses ingrédients naturels et doux, il calme instantanément les irritations et réduit l'inflammation, permettant ainsi à votre peau de retrouver son équilibre naturel.",
          "En plus de son action sur la peau, notre après-shampooing agit également comme un bouclier protecteur pour vos cheveux. Les rayons UV du soleil peuvent être dommageables pour vos cheveux, en les rendant secs, cassants et ternes. Notre formule avancée comprend des ingrédients qui offrent une protection solaire naturelle pour préserver la santé de vos cheveux, même lors d'une exposition prolongée au soleil. Vous pouvez ainsi profiter du plein air en toute tranquillité, sachant que vos cheveux sont protégés.",
          "Grâce à son action apaisante et protectrice, notre après-shampooing complète parfaitement les bienfaits de notre shampooing, créant ainsi un duo de soin complet pour vos cheveux et votre peau. Ensemble, ils offrent une approche globale pour des cheveux sains, brillants et une peau apaisée et équilibrée."
        ],
        picture450: "/img/jpg/product/ApresShampooingIllusText450.jpg",
        picture675: "/img/jpg/product/ApresShampooingIllusText675.jpg",
        picture900: "/img/jpg/product/ApresShampooingIllusText900.jpg"
      },
      {
        id: "2apresShampooing",
        subTitle: "Optez pour la qualité naturelle",
        text: "Offrez à vos cheveux une attention particulière avec notre après-shampooing. Il offre des soins doux, facilite le brossage et protège contre les rayons UV. C'est une solution complète pour ceux qui cherchent à améliorer la santé et la beauté de leurs cheveux tout en les protégeant des éléments."
      },
      {
        id: "3apresShampooing",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4apresShampooing",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "apresShampooing0",
        link: "shampooing",
        pictureLove: "/img/jpg/product/shampooing.jpg",
        textLove:
          "Optez pour notre shampooing d'exception, associé à notre après-shampooing, pour une expérience de bien-être complète et des cheveux soyeux et sains. Cette combinaison offre une approche globale pour prendre soin de vos cheveux."
      },
      {
        id: "apresShampooing1",
        link: "gelDouche",
        pictureLove: "/img/jpg/product/gelDouche.jpg",
        textLove:
          "Pour une expérience de bien-être enrichissante, associez notre shampooing à notre gel douche naturel de la même gamme. Ces deux produits complémentaires transformeront votre routine quotidienne en une expérience de soin remarquable pour la peau et les cheveux."
      },
      {
        id: "apresShampooing2",
        link: "collagenoni",
        pictureLove: "/img/jpg/product/collagenoni.jpg",
        textLove:
          "Notre collagène agit de manière bénéfique sur la peau, les cheveux, les ongles et les articulations. En favorisant le renouvellement cellulaire, il procure un teint frais, lumineux et éclatant tout en diminuant les rides et les ridules. Grâce à la synergie avec le Noni, il soulage les douleurs corporelles et renforce les ongles ainsi que les cheveux."
      },
      {
        id: "apresShampooing3",
        link: "bb",
        pictureLove: "/img/jpg/product/bb.jpg",
        textLove:
          "Notre produit est doté d'une capacité exceptionnelle à régénérer les cellules, accélérant ainsi la pousse des ongles et des cheveux pour une chevelure abondante et des ongles forts. Sa formule revitalise en profondeur les cheveux en augmentant la production de kératine, réduisant la casse et apportant brillance et vitalité. De plus, il combat la chute des cheveux, offrant une chevelure dense et volumineuse. En boostant votre énergie naturelle, notre produit agit comme un stimulant, augmentant les fonctions mentales et favorisant votre concentration."
      },
      {
        id: "apresShampooing4",
        link: "regenerateurCellulaire",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Pour compléter votre rituel beauté et maximiser les bienfaits de notre shampooing, découvrez notre produit phare qui s'associe parfaitement avec ce dernier. Il agit en faveur de la qualité de votre peau, stimule la régénération cellulaire et soutient votre santé globale, y compris votre énergie naturelle. Un duo idéal pour une expérience de soin optimale !"
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute0SoinsCheveux").text],
  picture: "/img/jpg/product/aprèsShampooing.jpg",
  colors: {
    textColor: "#a5a5a5",
    titleColorInSummary: "#4b4b4b",
    linkTextColor: "#4b4b4b",
    bgColorInSummary0: "#c0c0c0",
    bgColorInSummary1: "#ffffff",
    linearGradient0: "linear-gradient(105deg, #c0c0c0, #f4f4f4)",
    linearGradient1: "linear-gradient(to right, #d2d2d2, #ffffff)",
    shadowColor: "#ffffff"
  },
  inSummary: [
    {
      id: "ASiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "ASiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "ASiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "ASiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "ASiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
