import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const boosterEnergie = {
  nameProduct: "Booster d’énergie",
  summary: {
    title: "Un mélange vivifiant pour booster votre journée.",
    paragraph: [
      {
        subTitle: "Catalyseur de bien-être",
        text: "Notre booster d’énergie est le véritable catalyseur de votre bien-être. Il dynamise votre corps en stimulant votre énergie naturelle, combat efficacement la fatigue et vous aide à retrouver un sommeil réparateur. En favorisant la bonne humeur et la gaieté, il contribue à une vision positive de la vie. De plus, il est votre allié pour diminuer le stress et l'anxiété, vous permettant de vous sentir léger(e) et détendu(e) au quotidien."
      },
      {
        subTitle: "Gestion du poids",
        text: "Notre produit est également une solution efficace pour vous aider à atteindre vos objectifs de gestion du poids. Grâce à ses propriétés détoxifiantes, il élimine les toxines accumulées dans votre corps, favorisant ainsi une meilleure combustion des graisses, augmentée de 17%. ",
        picture450: "./img/jpg/product/BEIllusText450.jpg",
        picture675: "./img/jpg/product/BEIllusText675.jpg",
        picture900: "./img/jpg/product/BEIllusText900.jpg"
      },
      {
        subTitle: "Santé optimale",
        text: "Votre santé est notre priorité. Notre booster d’énergie stimule votre système immunitaire et cardiovasculaire, renforçant ainsi votre résistance aux maladies et protégeant votre cœur. Les oméga 6 et 9 présents dans notre formule améliorent l'attention et la vigilance mentale, vous permettant de rester concentré(e) et productif(ve) tout au long de la journée. De plus, il combat les manifestations allergiques et favorise une digestion saine, améliorant le transit intestinal et optimisant le fonctionnement de vos organes."
      },
      {
        subTitle: "Beauté naturelle",
        text: "Grâce à ses propriétés antioxydantes exceptionnelles, notre produit réduit visiblement les signes de l'âge, vous offrant une peau éclatante et rajeunie. En nourrissant votre peau de manière profonde, il révèle votre beauté naturelle, vous permettant de vous sentir confiant(e) et épanoui(e) dans votre propre peau."
      },
      {
        subTitle: "Confort féminin",
        text: "Mesdames, notre booster d’énergie a aussi des effets sur les désagréments féminins car il diminue efficacement les douleurs menstruelles, soulageant ainsi les gênes liées à votre cycle. De plus, il prévient les infections urinaires, vous offrant une protection essentielle pour votre santé intime."
      },
      {
        subTitle: "Choix de vie",
        text: "Faites le choix d’un bien-être optimal et votre corps vous remerciera pour cette décision qui va changer votre quotidien !"
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
          "Pour une cure minceur, il est en parfait accord avec nos gouttes super puissantes pour brûler les graisses et notre chouchou pour que la peau reste de qualité."
      },
      {
        pictureLove: "./img/jpg/product/harmonie.jpg",
        textLove:
          "Pour un bien-être psychologique et la prévention du burn-out, ce produit s'associe idéalement à un autre de nos produits, créant une harmonie parfaite entre le corps et l'esprit."
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre3Humeur").text],
  picture: "./img/jpg/product/boosterEnergie.jpg",
  colors: {
    textColor: "#a81616"
  }
};
