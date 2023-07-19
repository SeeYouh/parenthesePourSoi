import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const equilibreCorpsEsprit = {
  nameProduct: "Equilibre corps et esprit",
  summary: {
    title: "Harmonisez votre corps pour un équilibre complet.",
    paragraph: [
      {
        subTitle: "Naviguer à travers les changements de la vie",
        text: "Au cours de notre existence, notre corps traverse une série de transformations, à la fois visibles et invisibles. Ces changements peuvent être le résultat de facteurs tels que l'âge, le style de vie, l'environnement et même notre état d'esprit. Ils peuvent affecter notre apparence physique, notre santé globale, notre niveau d'énergie et notre bien-être émotionnel."
      },
      {
        subTitle: "Soutien psychologique",
        text: "Notre produit est un allié précieux pour votre bien-être mental. Il joue un rôle crucial dans le maintien de fonctions psychologiques normales, vous aidant à naviguer à travers les défis de chaque journée avec un sentiment de calme et d'équilibre. Que vous soyez confronté à un stress professionnel, à des défis personnels ou simplement à la pression du quotidien, notre produit est conçu pour vous aider à maintenir votre équilibre mental.",
        picture675: "./img/jpg/product/equilibreCorpsEspritIllusText675.jpg",
        picture450: "./img/jpg/product/equilibreCorpsEspritIllusText450.jpg",
        picture900: "./img/jpg/product/equilibreCorpsEspritIllusText900.jpg"
      },
      {
        subTitle: "Boost d'énergie",
        text: "Que vous ayez besoin d'un coup de pouce pour votre entraînement matinal, pour rester concentré lors d'une longue journée de travail ou simplement pour profiter pleinement de vos activités quotidiennes, notre produit est là pour vous soutenir. Il vous aide à surmonter la fatigue, à améliorer votre endurance et à augmenter votre capacité à faire face aux défis physiques et mentaux."
      },
      {
        subTitle: "Sommeil récupérateur",
        text: "De plus, il favorise un sommeil récupérateur, vous permettant de vous réveiller chaque matin frais et revitalisé, ce qui encourage un bien-être quotidien, en vous aidant à vous sentir bien dans votre corps et dans votre esprit."
      },
      {
        subTitle: "Optimisation de l'absorption des nutriments",
        text: "Notre solution de bien-être offre une multitude de bienfaits pour votre santé. Elle optimise l'absorption de la vitamine A, des acides gras et des protéines. Cela signifie que votre corps est en mesure d'assimiler et d'utiliser efficacement ces nutriments essentiels, vous permettant de bénéficier pleinement de leurs avantages pour la santé."
      },
      {
        subTitle: "Maintien d'un équilibre glycémique sain",
        text: "En outre, notre produit joue un rôle clé dans le maintien d'une glycémie normale. Il contribue à un équilibre sain de votre taux de sucre dans le sang, ce qui est essentiel pour votre énergie et votre bien-être général."
      },
      {
        subTitle: "Pour une peau radieuse et en bonne santé",
        text: "La vitamine B3, également présente dans notre formule, favorise la fonction normale de votre organisme et soutient le processus de division cellulaire. Cela contribue à maintenir une peau normale, en bonne santé et éclatante. Grâce à notre produit, vous pouvez profiter d'une peau radieuse et d'une sensation de bien-être général."
      },
      {
        subTitle: "Un soutien précieux pour les femmes",
        text: "Notre produit est particulièrement bénéfique pour les femmes. Il agit comme un véritable soutien pendant les périodes de transition hormonale, comme la préménopause et la ménopause. Il aide à atténuer les désagréments souvent associés à ces phases, tels que les bouffées de chaleur, les sautes d'humeur et les troubles du sommeil. En offrant un soulagement naturel et efficace, notre produit vous aide à traverser ces périodes avec plus de sérénité et de confort."
      },
      {
        subTitle: "Promotion de la fertilité et de la reproduction",
        text: "En plus de ses bienfaits pour les femmes, notre produit joue un rôle clé dans la promotion d'une fertilité et d'une reproduction normales. Il contient des nutriments essentiels qui soutiennent la santé reproductive, tant chez les femmes que chez les hommes. Chez ces derniers, notre produit soutient la spermatogenèse, le processus de production de spermatozoïdes. Ainsi, que vous cherchiez à concevoir ou simplement à maintenir une santé reproductive optimale, notre produit peut être un précieux allié."
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
        pictureLove: "./img/jpg/product/detox.jpg",
        textLove:
          "Pour une perte de poids, ce produit se combine totalement avec notre produit de détoxification et nos gouttes super puissantes."
      },
      {
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Si vous souffrez de problèmes digestifs, ce produit s’associera parfaitement avec les pré-probiotiques qui sont ultra efficaces."
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre1Energie").text],
  picture: "./img/jpg/product/equilibreCorpsEsprit.jpg",
  colors: {
    textColor: "#e2b100"
  }
};
