import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const apresShampooing = {
  nameProduct: "Après shampooing",
  id: "apresShampooing",

  summary: {
    title: "Protégez vos cheveux et prenez en soin.",
    paragraph: [
      {
        id: "0apresShampooing",
        subTitle: "Purification douce",
        text: "Notre après-shampooing offre une purification douce mais efficace pour vos cheveux. Il élimine en douceur les impuretés sans en introduire de nouvelles, laissant vos cheveux frais et légers. Grâce à sa formule unique, il facilite le brossage, réduisant ainsi la casse et les nœuds. Vous serez émerveillé(e) par l'élasticité, la brillance et la douceur retrouvées de vos cheveux, révélant toute leur beauté naturelle. C'est le soin idéal pour ceux qui cherchent à maintenir la santé et la vitalité de leurs cheveux."
      },
      {
        id: "1apresShampooing",
        subTitle: "Soulagement cutané",
        text: "Tout comme le shampooing, notre après-shampooing cible les problèmes cutanés tels que les pellicules, l’eczéma, les rougeurs et les démangeaisons. Il apporte un soulagement instantané en réduisant l'inflammation et favorisant la guérison de la peau. C'est une solution naturelle pour ceux qui cherchent à apaiser leur cuir chevelu et à améliorer la santé de leur peau.",
        picture450: "./img/jpg/product/ApresShampooingIllusText450.jpg",
        picture675: "./img/jpg/product/ApresShampooingIllusText675.jpg",
        picture900: "./img/jpg/product/ApresShampooingIllusText900.jpg"
      },
      {
        id: "2apresShampooing",
        subTitle: "Protection UV",
        text: "En plus de prendre soin de votre cuir chevelu, notre après-shampooing agit comme un bouclier protecteur contre les rayons UV nocifs. Grâce à sa formulation avancée, il vous offre une protection solaire naturelle, préservant vos cheveux tout en vous permettant de profiter du soleil en toute tranquillité. C'est votre allié pour une protection capillaire optimale contre les dommages causés par le soleil."
      },
      {
        id: "3apresShampooing",
        subTitle: "Soins capillaires de qualité",
        text: "Offrez à vos cheveux une attention particulière avec notre après-shampooing. Il offre des soins doux, facilite le brossage et protège contre les rayons UV. C'est une solution complète pour ceux qui cherchent à améliorer la santé et la beauté de leurs cheveux tout en les protégeant des éléments."
      },
      {
        id: "4apresShampooing",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5apresShampooing",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "ASshampooing0",
        pictureLove: "./img/jpg/product/shampooing.jpg",
        textLove:
          "Pour une expérience de bien-être complète, découvrez notre shampooing d’exception qui se marie parfaitement avec notre après-shampooing. Ensemble, ils vous offrent une approche globale pour des cheveux soyeux et sains."
      },
      {
        id: "ASbb1",
        pictureLove: "./img/jpg/product/bb.jpg",
        textLove:
          "Le BB est également excellent pour une pousse des ongles et cheveux."
      },
      {
        id: "ASregenerateurCellulaire2",
        pictureLove: "./img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Pour encore plus d’amélioration au niveau de la peau, notre chouchou est conseillé par tous "
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute0SoinsCheveux").text],
  picture: "./img/jpg/product/aprèsShampooing.jpg",
  colors: {
    textColor: "#a5a5a5",
    titleColorInSummary: "#4b4b4b",
    bgColorInSummary: "#cacaca"
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
