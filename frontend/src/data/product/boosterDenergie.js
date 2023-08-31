import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const boosterEnergie = {
  id: "boosterEnergie",
  nameProduct: "Booster d’énergie",

  summary: {
    title: "Un mélange vivifiant pour booster votre journée.",
    paragraph: [
      {
        id: "0boosterEnergie",
        subTitle: "Boostez votre énergie",
        text: "Votre santé est notre priorité. Notre booster d’énergie stimule votre système immunitaire et cardiovasculaire, renforçant ainsi votre résistance aux maladies et protégeant votre cœur. Les oméga 6 et 9 présents dans notre formule améliorent l'attention et la vigilance mentale, vous permettant de rester concentré(e) et productif(ve) tout au long de la journée."
      },
      {
        id: "1boosterEnergie",
        subTitle: "Retrouvez votre bien-être",
        text: [
          "Notre booster d'énergie est bien plus qu'un simple complément, c'est le véritable catalyseur de votre bien-être. Il dynamise votre corps en stimulant votre énergie naturelle, vous offrant une vitalité renouvelée tout au long de la journée. Grâce à sa formule unique, il combat efficacement la fatigue et vous aide à retrouver un sommeil réparateur, vous permettant de vous réveiller frais et revitalisé chaque matin.",
          "En favorisant la bonne humeur et la gaieté, notre booster d'énergie contribue à une vision positive de la vie, vous aidant à aborder les défis quotidiens avec un état d'esprit positif. De plus, il est votre allié de confiance pour diminuer le stress, l'anxiété et le surmenage, vous permettant de vous sentir léger(e) et détendu(e) au quotidien.",
          "En parallèle, ce produit exceptionnel combat les manifestations allergiques, vous offrant un soulagement bienvenu face aux irritations et inconforts. Il favorise également une digestion saine en optimisant le fonctionnement de vos organes et améliorant le transit intestinal, vous permettant de vous sentir bien dans votre corps et dans votre esprit."
        ],
        picture450: "/img/jpg/product/BEIllusText450.jpg",
  picture225: "/img/jpg/product/BEIllusText225.jpg",
        picture675: "/img/jpg/product/BEIllusText675.jpg",
        picture900: "/img/jpg/product/BEIllusText900.jpg"
      },
      {
        id: "2boosterEnergie",
        subTitle: "Gérez votre poids",
        text: "Notre produit est également une solution efficace pour vous aider à atteindre vos objectifs de gestion du poids car il augmente de 17% la combustion des graisses."
      },
      {
        id: "3boosterEnergie",
        subTitle: "Nourrissez votre peau",
        text: "Grâce à ses propriétés antioxydantes exceptionnelles, notre produit réduit visiblement les signes de l'âge, vous offrant une peau éclatante et rajeunie. En nourrissant votre peau de manière profonde, il révèle votre beauté naturelle, vous permettant de vous sentir confiant(e) et épanoui(e) dans votre propre peau."
      },
      {
        id: "4boosterEnergie",
        subTitle: "Pour vous, Mesdames",
        text: "Mesdames, notre booster d’énergie a aussi des effets sur les désagréments féminins car il diminue efficacement les douleurs menstruelles, soulageant ainsi les gênes liées à votre cycle. De plus, il prévient les infections urinaires, vous offrant une protection essentielle pour votre santé intime."
      },
      {
        id: "5boosterEnergie",
        subTitle: "Choisissez-le pour tout ces bienfaits",
        text: "Faites le choix d’un bien-être optimal et votre corps vous remerciera pour cette décision qui va changer votre quotidien !"
      },
      {
        id: "6boosterEnergie",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "7boosterEnergie",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "boostEnergie0",
        link: "goutteMinceur",
        pictureLove: "/img/jpg/product/goutteMinceur.jpg",
        textLove:
          "En associant notre booster d'énergie à nos gouttes minceur naturelles, brûlez efficacement les graisses sous-cutanées et viscérales, tout en bloquant le stockage des graisses indésirables. Obtenez des résultats impressionnants tout en bénéficiant d'un regain d'énergie pour une transformation harmonieuse de votre silhouette."
      },
      {
        id: "boostEnergie1",
        link: "harmonie",
        pictureLove: "/img/jpg/product/harmonie.jpg",
        textLove:
          "Voici une combinaison parfaite pour le bien-être psychologique et la prévention du burn-out. En associant notre produit phare à ce produit, vous retrouverez un équilibre émotionnel, un moral positif et une sérénité épanouissante tout en obtenant une énergie physique et mentale sans pareil."
      },
      {
        id: "boostEnergie2",
        link: "osMuscle",
        pictureLove: "/img/jpg/product/osMuscle.jpg",
        textLove:
          "Le magnésium permet de nourrir votre corps et d'apaiser votre esprit. Avec notre produit riche en magnésium, combattez le stress et l'anxiété en prenant soin de vous de l'intérieur pour retrouver équilibre et bien-être.  C’est une approche naturelle pour vous sentir revitalisé et serein au quotidien."
      },
      {
        id: "boostEnergie3",
        link: "equilibreCorpsEsprit",
        pictureLove: "/img/jpg/product/equilibreCorpsEsprit.jpg",
        textLove:
          "Un sommeil profond et réparateur est essentiel pour favoriser la gaieté et la bonne humeur. Des nuits paisibles et revitalisantes contribuent à une journée épanouissante. Dites adieu à la fatigue et profitez d'un repos récupérateur pour une vitalité renouvelée chaque matin. Donnez à votre corps le repos dont il a besoin et ressentez le bien-être que vous méritez."
      },
      {
        id: "boostEnergie4",
        link: "bb",
        pictureLove: "/img/jpg/product/bb.jpg",
        textLove:
          "Avec notre produit, bénéficiez d’une régénération cellulaire exceptionnelle qui accélère la pousse des ongles et des cheveux. Les résultats sont impressionnants : une chevelure abondante, résistante à la casse, et des ongles forts et sains. Grâce à une augmentation de la production de kératine, vos cheveux retrouvent brillance et vitalité. Notre formule diminue également la chute des cheveux et permet d’obtenir une chevelure dense et volumineuse comme vous en rêvez."
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre3Humeur").text],
  picture: "/img/jpg/product/boosterEnergie.jpg",
  picture264: "/img/jpg/product/boosterEnergie264.jpg",
  picture400: "/img/jpg/product/boosterEnergie400.jpg",
  colors: {
    textColor: "#a81616",
    titleColorInSummary: "#a81616",
    bgColorInSummary0: "#c25c5c",
    bgColorInSummary1: "#f5e3e3",
    linearGradient0: "linear-gradient(105deg ,#c25c5c, #ffabab)",
    linearGradient1: "linear-gradient(to right, #d48b8b, 	#f5e3e3)",
    shadowColor: "#f5e3e3"
  },
  inSummary: [
    {
      id: "BdEiS0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Augmente de +17% la combustion des graisses</li>
          <li>Contient des ingrédients aux propriétés antioxydantes</li>
          <li>Aide à éliminer les toxines par le foie </li>
        </ul>
      )
    },
    {
      id: "BdEiS1",
      title: "Santé",
      text: (
        <ul>
          <li>
            Soutient le système immunitaire et le système cardiovasculaire
          </li>
          <li>Stimule le transit intestinal</li>
          <li>Combat les manifestations allergiques </li>
          <li>Diminue les douleurs de menstruations</li>
        </ul>
      )
    },
    {
      id: "BdEiS2",
      title: "Bien-être",
      text: (
        <ul>
          <li>Donne de l’énergie mentale et physique</li>
          <li>Augmente la concentration et la vigilance mentale</li>
          <li>Diminue le stress, le surmenage et l’anxiété</li>
          <li>Favorise la gaieté, la relaxation et la bonne humeur</li>
          <li>Améliore le sommeil</li>
        </ul>
      )
    },
    {
      id: "BdEiS3",
      title: "Beauté",
      text: (
        <ul>
          <li>Diminue le vieillissement cutané</li>
        </ul>
      )
    }
  ]
};
