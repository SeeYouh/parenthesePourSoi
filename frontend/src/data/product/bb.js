import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const bb = {
  nameProduct: "BB",
  id: "bb",

  summary: {
    title: "Le secret d’un éclat intérieur et extérieur",
    paragraph: [
      {
        id: "0BB",
        subTitle: "Gagnez en énergie",
        text: "Notre BB est conçu pour dynamiser votre corps en stimulant votre énergie naturelle de manière soutenue tout au long de la journée. Grâce à sa formule puissante, il agit comme un véritable stimulant, vous permettant de rester énergique et alerte, même lors des moments les plus exigeants. En améliorant les fonctions mentales, il vous aide à rester concentré(e) et focalisé(e), vous préparant ainsi à relever tous les défis qui se présentent à vous. Avec notre BB, vous ressentirez une vitalité renouvelée, prêt(e) à faire face à toutes les opportunités et aventures qui se présentent à vous."
      },
      {
        id: "1BB",
        subTitle: "Régénérez vos cellules et soignez votre peau",
        text: [
          "Notre produit a une capacité exceptionnelle à régénérer les cellules. Sa formule accélère la pousse des ongles et des cheveux, vous permettant ainsi de profiter d'une chevelure plus abondante et d'ongles forts et sains. En augmentant la production de kératine, notre produit revitalise en profondeur vos cheveux, les rendant plus résistants à la casse et leur redonnant brillance et vitalité. De plus, il réduit considérablement la chute des cheveux, vous offrant ainsi une chevelure dense et volumineuse qui fera des envieux.",
          "Grâce à son pouvoir régénérateur cellulaire exceptionnel, notre produit réduit efficacement les problèmes cutanés : rougeurs, démangeaisons et psoriasis qui perturbent votre vie quotidienne. Il vous permet de retrouver une peau saine et apaisée. De plus, il diminue l'acné et régule l'excès de sébum, offrant une solution naturelle pour les peaux grasses. Notre formule restreint également les pellicules, vous offrant un cuir chevelu sain et sans démangeaisons."
        ],
        picture675: "/img/jpg/product/BBIllusText675.jpg",
        picture450: "/img/jpg/product/BBIllusText450.jpg",
  picture225: "/img/jpg/product/BBIllusText225.jpg",
        picture900: "/img/jpg/product/BBIllusText900.jpg"
      },
      {
        id: "2BB",
        subTitle: "Essayez-le, adoptez-le",
        text: [
          "Notre produit contribue à améliorer le bon fonctionnement du système nerveux, favorisant ainsi votre bien-être global.",
          "Que vous ayez pour objectif d'améliorer votre santé globale ou de revitaliser votre routine beauté, ce puissant complément sera votre allié pour ressentir un véritable renouveau et une sensation de vitalité. Grâce à ses ingrédients soigneusement sélectionnés, il agit en synergie pour soutenir votre bien-être général et améliorer votre beauté naturelle de l'intérieur. Vous ressentirez une énergie renouvelée, une peau éclatante et une sensation de dynamisme tout au long de la journée. Que ce soit pour affronter les défis quotidiens ou pour vous sentir confiant(e) dans votre apparence, ce complément vous offre une expérience de revitalisation complète pour vous aider à vous sentir au mieux de votre forme."
        ]
      },
      {
        id: "3BB",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4BB",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "BB0",
        link: "collagenoni",
        pictureLove: "/img/jpg/product/collagenoni.jpg",
  pictureLove264: "/img/jpg/product/collagenoni264.jpg",
  pictureLove400: "/img/jpg/product/collagenoni400.jpg",
        textLove:
          "Pour un renfort optimal des cheveux et des ongles, notre collagène marin saura vous séduire. Il favorise le renouvellement cellulaire et stimule l'élasticité de la peau. Il réduit les rides, ridules et cernes, offrant un teint frais et éclatant. De plus, il apporte un soulagement naturel aux douleurs corporelles grâce à la synergie du collagène marin et du Noni. Optez pour ce produit pour une apparence rajeunie et un bien-être total."
      },
      {
        id: "BB1",
        link: "pn",
        pictureLove: "/img/jpg/product/PN.jpg",
  pictureLove264: "/img/jpg/product/PN264.jpg",
  pictureLove400: "/img/jpg/product/PN400.jpg",
        textLove:
          "Notre produit facilite un équilibre nutritionnel optimal. Les protéines végétales de haute qualité favorisent une meilleure digestion et absorption des nutriments. En plus de la perte de poids, il soutient une pression artérielle saine, améliore la santé des reins et du foie, et favorise une bonne digestion. Vous ressentirez un boost d'énergie qui vous accompagnera toute la journée, vous permettant de vous sentir épanoui(e)."
      },
      {
        id: "BB2",
        link: "pb",
        pictureLove: "/img/jpg/product/pb.jpg",
  pictureLove264: "/img/jpg/product/pb264.jpg",
  pictureLove400: "/img/jpg/product/pb400.jpg",
        textLove:
          "Pour les journées chargées où le temps est précieux, l'alliance du BB et du PB est votre meilleur allié. Cette combinaison vous procure une énergie instantanée et le BB assure une libération d'énergie stable et durable. Ensemble, ils vous garantissent une vigilance et une productivité maximales, même lorsque vous n'avez pas le temps pour un repas complet. Intrigué(e) ?"
      },
      {
        id: "BB3",
        link: "shampooing",
        pictureLove: "/img/jpg/product/shampooing.jpg",
  pictureLove264: "/img/jpg/product/shampooing264.jpg",
  pictureLove400: "/img/jpg/product/shampooing400.jpg",
        textLove:
          "Pour des cheveux brillants, notre shampooing révolutionnaire nettoie en profondeur pour des cheveux propres et doux. Il revitalise et hydrate intensément chaque mèche. De plus, il apaise les problèmes du cuir chevelu, réduisant les pellicules et les démangeaisons."
      },
      {
        id: "BB4",
        link: "santeMax",
        pictureLove: "/img/jpg/product/santeMax.jpg",
  pictureLove264: "/img/jpg/product/santeMax264.jpg",
  pictureLove400: "/img/jpg/product/santeMax400.jpg",
        textLove:
          "Le Noni est un précieux allié pour votre bien-être, agissant sur le système digestif et stimulant le métabolisme. Il protège contre le stress oxydatif, renforce le système immunitaire et prévient les maux saisonniers. Ce fruit est une véritable fontaine de jouvence, nourrissant votre organisme en profondeur pour une vitalité éclatante. Faites confiance au Noni pour améliorer votre santé globale et votre bien-être au quotidien."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
  picture: "/img/jpg/product/bb.jpg",
  picture264: "/img/jpg/product/bb264.jpg",
  picture400: "/img/jpg/product/bb400.jpg",
  colors: {
    textColor: "#e58000",
    titleColorInSummary: "#e58000",
    linkTextColor: "#e58000",
    bgColorInSummary0: "#eda64d",
    bgColorInSummary1: "#fffcfb",
    linearGradient0: "linear-gradient(105deg, #eda64d, #fcf0e0)",
    linearGradient1: "linear-gradient(to right, #f2c080, #fffcfb)",
    shadowColor: "#fffcfb"
  },
  inSummary: [
    {
      id: "BBiS0",
      title: "Santé",
      text: (
        <ul>
          <li>
            Améliore le bon fonctionnement du système nerveux et les fonctions
            mentales
          </li>
          <li>
            Apaise les rougeurs, les irritations et les démangeaisons du cuir
            chevelu
          </li>
          <li>Apaise l’acné, le psoriasis et l’eczéma</li>
          <li>Détruit les pellicules</li>
        </ul>
      )
    },
    {
      id: "BBiS1",
      title: "Bien-être",
      text: (
        <ul>
          <li>Augmente l’énergie physique grâce à son apport en vitamine C</li>
        </ul>
      )
    },
    {
      id: "BBiS2",
      title: "Beauté",
      text: (
        <ul>
          <li>Renouvelle les cellules de la peau, des ongles et des cheveux</li>
          <li>
            Accélère la pousse des ongles et des cheveux et les renforcent
          </li>
          <li>Diminue la perte des cheveux</li>
          <li>Assèche la peau grasse et hydrate la peau sèche</li>
          <li>Détruit les pellicules</li>
        </ul>
      )
    }
  ]
};
