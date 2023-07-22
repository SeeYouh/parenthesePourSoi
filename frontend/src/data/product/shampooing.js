import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const shampooing = {
  nameProduct: "Shampooing",
  summary: {
    title: "Sublimez vos cheveux avec ce shampooing d’exception.",
    paragraph: [
      {
        subTitle:
          "Offrez une nouvelle vie à vos cheveux avec notre shampooing révolutionnaire",
        text: "Votre chevelure est précieuse et mérite le plus grand soin. Notre shampooing révolutionnaire est la solution que vous attendiez. Il nettoie vos cheveux en profondeur, en éliminant efficacement toutes les impuretés et les résidus indésirables de produits capillaires. Imaginez une chevelure parfaitement propre et incroyablement saine. Ce rêve peut devenir réalité grâce à notre formule innovante."
      },
      {
        subTitle:
          "Hydratation et revitalisation intense : une transformation visible",
        text: "Notre shampooing fait bien plus que nettoyer vos cheveux. Il leur offre une cure de jouvence grâce à sa formule riche en ingrédients naturels hydratants. Chaque mèche de vos cheveux bénéficie d'un bain d'hydratation, revitalisant en profondeur les fibres capillaires.Cette hydratation intense a le pouvoir de redonner vie aux cheveux secs et abîmés. Les cheveux sont nourris de l'intérieur, devenant plus souples, plus résistants et pleins de vitalité. ",
        picture450: "./img/jpg/product/shampooingIllusText450.jpg",
        picture675: "./img/jpg/product/shampooingIllusText675.jpg",
        picture900: "./img/jpg/product/shampooingIllusText900.jpg"
      },
      {
        subTitle: "Une peau apaisée et protégée pour un confort inégalé",
        text: "Notre shampooing est également un allié puissant pour votre cuir chevelu. Sa composition douce, débarrassée de tout produit chimique agressif, respecte votre peau, l'apaise et la protège. Les problèmes de cuir chevelu tels que les irritations, les rougeurs, les démangeaisons et même l'eczéma sont atténués, vous offrant un confort quotidien inégalé. De plus, sa capacité à lutter contre les pellicules contribue à rétablir l'équilibre naturel de votre cuir chevelu, pour une sensation de fraîcheur et de propreté tout au long de la journée."
      },
      {
        subTitle: "Préservez la beauté de vos cheveux colorés",
        text: "Ce shampooing n'est pas seulement un nettoyant efficace, il respecte également la beauté de vos cheveux colorés. Sa formule délicate nettoie en douceur tout en préservant l'éclat et l'intensité de votre coloration. Ainsi, vos cheveux colorés gardent leur beauté et leur luminosité plus longtemps."
      },
      {
        subTitle: "Plongez dans l'expérience luxueuse de notre shampooing",
        text: "Prenez soin de vos cheveux comme jamais auparavant et offrez-vous une expérience capillaire digne d'un salon de coiffure à domicile. Notre shampooing transforme chaque lavage de cheveux en un moment de plaisir pur, nourrissant, protégeant et sublimant votre chevelure. Laissez-vous tenter et ressentez la différence : des cheveux plus sains, une couleur préservée, un cuir chevelu apaisé et une sensation de bien-être incroyable. Essayez-le dès aujourd'hui et découvrez le secret d'une chevelure sublime et éclatante de santé."
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
        pictureLove: "./img/jpg/product/goutteMinceur.jpg",
        textLove:
          "La détox’ étant la base de toute cure minceur, nos gouttes super puissantes devraient également vous intéresser pour perdre du poids sans effet yoyo."
      },
      {
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Si votre système digestif et intestinal sont déséquilibrés, les pré-probiotiques devraient réguler tout ceci."
      },
      {
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Une autre approche consiste à rétablir l'équilibre de votre système digestif et intestinal en fournissant des légumes et des vitamines essentiels par le biais d'une détoxification végétale."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute0SoinsCheveux").text],
  picture: "./img/jpg/product/shampooing.jpg",
  colors: {
    textColor: "#808080"
  }
};
