import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const apresShampooing = {
  nameProduct: "Après shampooing",
  summary: {
    title: "Protégez vos cheveux et prenez en soin.",
    paragraph: [
      {
        subTitle: "Purification douce",
        text: "Notre après-shampooing offre une purification douce mais efficace pour vos cheveux. Il élimine en douceur les impuretés sans en introduire de nouvelles, laissant vos cheveux frais et légers. Grâce à sa formule unique, il facilite le brossage, réduisant ainsi la casse et les nœuds. Vous serez émerveillé(e) par l'élasticité, la brillance et la douceur retrouvées de vos cheveux, révélant toute leur beauté naturelle. C'est le soin idéal pour ceux qui cherchent à maintenir la santé et la vitalité de leurs cheveux."
      },
      {
        subTitle: "Soulagement cutané",
        text: "Tout comme le shampooing, notre après-shampooing cible les problèmes cutanés tels que les pellicules, l’eczéma, les rougeurs et les démangeaisons. Il apporte un soulagement instantané en réduisant l'inflammation et favorisant la guérison de la peau. C'est une solution naturelle pour ceux qui cherchent à apaiser leur cuir chevelu et à améliorer la santé de leur peau.",
        picture450: "./img/jpg/product/ApresShampooingIllusText450.jpg",
        picture675: "./img/jpg/product/ApresShampooingIllusText675.jpg",
        picture900: "./img/jpg/product/ApresShampooingIllusText900.jpg"
      },
      {
        subTitle: "Protection UV",
        text: "En plus de prendre soin de votre cuir chevelu, notre après-shampooing agit comme un bouclier protecteur contre les rayons UV nocifs. Grâce à sa formulation avancée, il vous offre une protection solaire naturelle, préservant vos cheveux tout en vous permettant de profiter du soleil en toute tranquillité. C'est votre allié pour une protection capillaire optimale contre les dommages causés par le soleil."
      },
      {
        subTitle: "Soins capillaires de qualité",
        text: "Offrez à vos cheveux une attention particulière avec notre après-shampooing. Il offre des soins doux, facilite le brossage et protège contre les rayons UV. C'est une solution complète pour ceux qui cherchent à améliorer la santé et la beauté de leurs cheveux tout en les protégeant des éléments."
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
        pictureLove: "./img/jpg/product/shampooing.jpg",
        textLove:
          "Pour une expérience de bien-être complète, découvrez notre shampooing d’exception qui se marie parfaitement avec notre après-shampooing. Ensemble, ils vous offrent une approche globale pour des cheveux soyeux et sains."
      },
      {
        pictureLove: "./img/jpg/product/bb.jpg",
        textLove:
          "Le BB est également excellent pour une pousse des ongles et cheveux."
      },
      {
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
    textColor: "#a5a5a5"
  }
};
