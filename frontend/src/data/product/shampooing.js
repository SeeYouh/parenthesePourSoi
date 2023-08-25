import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const shampooing = {
  nameProduct: "Shampooing",
  id: "shampooing",

  summary: {
    title: "Sublimez vos cheveux avec ce shampooing d’exception",
    paragraph: [
      {
        id: "0shampooing",
        subTitle:
          "Offrez une nouvelle vie à vos cheveux avec notre shampooing révolutionnaire",
        text: "Votre chevelure est précieuse et mérite le plus grand soin. Notre shampooing révolutionnaire est la solution que vous attendiez. Il nettoie vos cheveux en profondeur, en éliminant efficacement toutes les impuretés et les résidus indésirables de produits capillaires. Imaginez une chevelure parfaitement propre et incroyablement saine. Ce rêve peut devenir réalité grâce à notre formule innovante."
      },
      {
        id: "1shampooing",
        subTitle: "Hydratez, protégez et apaisez votre cuir chevelu",
        text: [
          "Notre shampooing fait bien plus que nettoyer vos cheveux. Il leur offre une cure de jouvence grâce à sa formule riche en ingrédients naturels hydratants. Chaque mèche de vos cheveux bénéficie d'un bain d'hydratation, revitalisant en profondeur les fibres capillaires. Cette hydratation intense a le pouvoir de redonner vie aux cheveux secs et abîmés. Les cheveux sont nourris de l'intérieur, devenant plus souples, plus résistants, plus volumineux et pleins de vitalité.",
          "Notre shampooing est également un allié puissant pour votre cuir chevelu. Sa composition douce et naturelle, débarrassée de tout produit chimique agressif, respecte votre peau, l'apaise et la protège. Les problèmes de cuir chevelu tels que les irritations, les rougeurs, les démangeaisons et même l'eczéma sont atténués, vous offrant un confort quotidien inégalé. De plus, sa capacité à lutter contre les pellicules contribue à rétablir l'équilibre naturel de votre cuir chevelu, pour une sensation de fraîcheur et de propreté tout au long de la journée."
        ],
        picture450: "/img/jpg/product/shampooingIllusText450.jpg",
        picture675: "/img/jpg/product/shampooingIllusText675.jpg",
        picture900: "/img/jpg/product/shampooingIllusText900.jpg"
      },
      {
        id: "2shampooing",
        subTitle: "Une peau apaisée et protégée pour un confort inégalé",
        text: "Notre shampooing est également un allié puissant pour votre cuir chevelu. Sa composition douce, débarrassée de tout produit chimique agressif, respecte votre peau, l'apaise et la protège. Les problèmes de cuir chevelu tels que les irritations, les rougeurs, les démangeaisons et même l'eczéma sont atténués, vous offrant un confort quotidien inégalé. De plus, sa capacité à lutter contre les pellicules contribue à rétablir l'équilibre naturel de votre cuir chevelu, pour une sensation de fraîcheur et de propreté tout au long de la journée."
      },
      {
        id: "3shampooing",
        subTitle: "Préservez la beauté de vos cheveux colorés",
        text: "Ce shampooing n'est pas seulement un nettoyant efficace, il respecte également la beauté de vos cheveux colorés. Sa formule délicate nettoie en douceur tout en préservant l'éclat et l'intensité de votre coloration. Ainsi, vos cheveux colorés gardent leur beauté et leur luminosité plus longtemps."
      },
      {
        id: "4shampooing",
        subTitle: "Plongez dans l'expérience luxueuse de notre shampooing",
        text: "Prenez soin de vos cheveux comme jamais auparavant et offrez-vous une expérience capillaire digne d'un salon de coiffure à domicile. Notre shampooing transforme chaque lavage de cheveux en un moment de plaisir pur, nourrissant, protégeant et sublimant votre chevelure. Laissez-vous tenter et ressentez la différence : des cheveux plus sains, une couleur préservée, un cuir chevelu apaisé et une sensation de bien-être incroyable. Essayez-le dès aujourd'hui et découvrez le secret d'une chevelure sublime et éclatante de santé."
      },
      {
        id: "5shampooing",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "6shampooing",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "shampooing0",
        link: "apresShampooing",
        pictureLove: "/img/jpg/product/aprèsShampooing.jpg",
        textLove:
          "Pour enrichir davantage votre routine de soins capillaires et renforcer les bénéfices obtenus avec notre shampooing, je vous encourage vivement à explorer notre après-shampooing. Conçu pour nourrir vos cheveux de la racine à la pointe, il promet non seulement de faciliter le brossage, mais également de protéger votre chevelure des rayons UV. Ainsi, vous bénéficierez d'une expérience complète de bien-être pour vos cheveux."
      },
      {
        id: "shampooing1",
        link: "regenerateurCellulaire",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Pour parfaire votre rituel beauté et maximiser les bienfaits de notre shampooing, nous vous proposons notre produit phare qui se marie idéalement avec ce dernier. Ce complément de choix intervient en faveur de la qualité de votre peau, stimule la régénération cellulaire et soutient votre santé globale, y compris votre énergie naturelle. Un binôme parfait pour une expérience de soin optimale !"
      },
      {
        id: "shampooing2",
        link: "gelDouche",
        pictureLove: "/img/jpg/product/gelDouche.jpg",
        textLove:
          "Pour amplifier votre rituel de bien-être, nous vous suggérons d'associer notre shampooing à notre gel douche naturel de la même gamme, reconnu pour ses effets remarquables sur la peau. Ces deux produits complémentaires transformeront votre routine quotidienne en une expérience de soin enrichissante et bienfaisante."
      },
      {
        id: "shampooing3",
        link: "collagenoni",
        pictureLove: "/img/jpg/product/collagenoni.jpg",
        textLove:
          "Notre collagène a des effets très positifs sur la peau, les cheveux, les ongles et les articulations. En stimulant le renouvellement cellulaire, il offre un teint frais, lumineux et éclatant tout en réduisant les rides et ridules. Grâce à la synergie du collagène marin avec le Noni, il soulage les douleurs corporelles et renforce les ongles et les cheveux."
      },
      {
        id: "shampooing4",
        link: "cocoOil",
        pictureLove: "/img/jpg/product/cocoOil.jpg",
        textLove:
          "Rien de tel qu’un soin avec notre huile coco pour redonner hydratation et vitalité à vos cheveux.. L'huile pénètre dans les cuticules des cheveux, scellant l'humidité et prévenant la perte d'eau, ce qui contribue à maintenir l'hydratation et à prévenir la casse. De plus, les propriétés nourrissantes de l'huile aident à renforcer les cheveux de la racine aux pointes, favorisant ainsi leur croissance et leur éclat naturel."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute0SoinsCheveux").text],
  picture: "/img/jpg/product/shampooing.jpg",
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
      id: "SiSS0",
      title: "Santé",
      text: (
        <ul>
          <li>Combat les pellicules</li>
          <li>Diminue les rougeurs, les irritations et démangeaisons</li>
          <li>Atténue l’eczéma du cuir chevelu</li>
        </ul>
      )
    },
    {
      id: "SiSB1",
      title: "Beauté ",
      text: (
        <ul>
          <li>Nettoie, hydrate et revitalise les cheveux</li>
        </ul>
      )
    }
  ]
};
