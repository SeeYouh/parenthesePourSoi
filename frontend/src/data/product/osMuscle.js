import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const osMuscle = {
  nameProduct: "Os et Muscles",
  id: "osMuscle",

  summary: {
    title:
      "Soutenez votre santé musculaire et osseuse avec notre produit essentiel.",
    paragraph: [
      {
        id: "0osMuscle",
        subTitle: "Gestion du stress : Retrouvez votre sérénité",
        text: "Le stress est une réalité de la vie moderne que la plupart d'entre nous connaissent. Cependant, avec notre produit, vous avez un allié de taille. Enrichi en magnésium, il vous aide à faire face aux effets néfastes du stress, favorisant une récupération optimale et une relaxation profonde. Chaque dose est comme une bouffée d'air frais qui vous éloigne de l'agitation et vous rapproche de la tranquillité."
      },
      {
        id: "1osMuscle",
        subTitle: "Soutenez votre santé",
        text: [
          "Qui n'a pas eu à affronter des douleurs articulaires qui gênent les mouvements quotidiens et ralentissent le rythme de vie ? Notre formule spéciale, enrichie en ingrédients naturels aux puissantes propriétés anti-inflammatoires, est prête à vous apporter le soulagement tant recherché. Imaginez retrouver la légèreté des mouvements et un confort physique accru, tout cela grâce à un produit créé dans le respect de votre corps. Notre solution promet une action profonde, atténuant non seulement les symptômes douloureux mais agissant également sur les causes sous-jacentes de l'inflammation.",
          "La santé bucco-dentaire est un indicateur important du bien-être global, et c'est là que notre produit entre en jeu. En stimulant la production de collagène, élément essentiel pour maintenir la santé de vos gencives et la robustesse de vos os, notre formule offre une solution holistique pour la santé buccale. Au-delà de ses effets bénéfiques internes, elle contribue à améliorer votre apparence extérieure. Un sourire rayonnant est un signe de confiance en soi et de santé intérieure, et avec notre produit, vous aurez toutes les raisons de sourire."
        ],
        picture450: "/img/jpg/product/osMuscleIllusText450.jpg",
        picture225: "/img/jpg/product/osMuscleIllusText225.jpg",
        picture675: "/img/jpg/product/osMuscleIllusText675.jpg",
        picture900: "/img/jpg/product/osMuscleIllusText900.jpg",
        picturefb: "/img/jpg/product/osMuscleIllusText1524.jpg"
      },
      {
        id: "2osMuscle",
        subTitle: "Dites adieu à la cellulite",
        text: "Notre produit va au-delà des bienfaits internes et offre des avantages esthétiques significatifs. Grâce à sa formule innovante, il contribue à réduire la cellulite, laissant votre peau lisse et tonique. Il vous aidera à embrasser votre beauté naturelle et à vous sentir à l'aise dans votre peau, augmentant ainsi votre confiance en vous."
      },
      {
        id: "3osMuscle",
        subTitle: "Réduisez vos fringales salées",
        text: "Nous savons tous à quel point les fringales salées peuvent être un obstacle à la gestion du poids. Notre produit est là pour vous aider. Il a été spécialement conçu pour contrer ces envies irrésistibles qui peuvent saboter vos efforts pour maintenir un poids sain."
      },
      {
        id: "4osMuscle",
        subTitle: "Pour vous, Mesdames",
        text: "Mesdames, nous comprenons que les fluctuations hormonales peuvent causer des désagréments dans votre vie quotidienne. Notre produit a été spécialement conçu pour favoriser un équilibre hormonal sain, ce qui peut grandement améliorer votre confort et votre bien-être. Il peut aider à atténuer les symptômes courants liés aux déséquilibres hormonaux, tels que l'irritabilité, la fatigue et les troubles du sommeil, ce qui peut avoir un impact significatif sur votre qualité de vie."
      },
      {
        id: "5osMuscle",
        subTitle: "Découvrez un partenaire de confiance",
        text: "Que ce soit pour réguler votre taux de sucre et de cholestérol, soutenir votre système immunitaire ou promouvoir une bonne santé intestinale, notre produit offre une solution complète pour votre bien-être. Il est votre partenaire de confiance, vous aidant à maintenir une bonne santé à long terme et à mener une vie plus épanouie."
      },
      {
        id: "6osMuscle",
        text: " Alors, qu'attendez-vous ? Il est temps de donner à votre corps le soutien dont il a besoin avec notre produit essentiel. Faites le choix du bien-être."
      },
      {
        id: "7osMuscle",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "8osMuscle",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "osMuscle0",
        link: "equilibreCorpsEsprit",
        pictureLove: "/img/jpg/product/equilibreCorpsEsprit.jpg",
        pictureLove264: "/img/jpg/product/equilibreCorpsEsprit264.jpg",
        pictureLove400: "/img/jpg/product/equilibreCorpsEsprit400.jpg",
        textLove:
          "Notre produit est conçu pour soutenir votre bien-être tout au long de votre vie. Il favorise des fonctions psychologiques normales, augmente votre métabolisme énergétique et améliore votre sommeil pour vous réveiller frais et revitalisé chaque matin. En augmentant l'absorption de vitamines et nutriments essentiels, il contribue à votre santé globale, maintient une glycémie normale et soutient une peau saine. Pour les femmes, il apporte un soulagement pendant les périodes de préménopause et de ménopause, tout en soutenant la fertilité et la reproduction normale."
      },
      {
        id: "osMuscle1",
        link: "apportMineraux",
        pictureLove: "/img/jpg/product/ApportMineraux.jpg",
        pictureLove264: "/img/jpg/product/ApportMineraux264.jpg",
        pictureLove400: "/img/jpg/product/ApportMineraux400.jpg",
        textLove:
          "Les minéraux ne sont pas assez présents dans notre alimentation. C’est pourquoi, nous proposons un produit exceptionnel composé de 32 minéraux, oligo-éléments, enzymes et super aliments bénéfiques pour votre système nerveux, vos os et vos muscles. Offrez à votre corps les nutriments essentiels dont il a besoin pour une santé globale épanouissante."
      },
      {
        id: "osMuscle2",
        link: "apportVitamines",
        pictureLove: "/img/jpg/product/ApportVitamines.jpg",
        pictureLove264: "/img/jpg/product/ApportVitamines264.jpg",
        pictureLove400: "/img/jpg/product/ApportVitamines400.jpg",
        textLove:
          "Notre produit riche en 17 vitamines et nutriments essentiels est idéal pour prendre soin de vos yeux, votre cœur, votre peau et vos poumons. Sa formule aux propriétés anti-inflammatoires vous ouvre les portes d'une nouvelle dimension de vitalité et de santé. Comblez vos carences en vitamines et offrez à votre corps les éléments nécessaires pour une santé optimale."
      },
      {
        id: "osMuscle3",
        link: "boosterEnergie",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        pictureLove264: "/img/jpg/product/boosterEnergie264.jpg",
        pictureLove400: "/img/jpg/product/boosterEnergie400.jpg",
        textLove:
          "Le magnésium est efficace contre le stress. Si vous êtes de nature anxieuse ou si vous vous sentez surmenée, je vous conseille de consulter les bienfaits de notre booster naturel. Une combinaison parfaite pour retrouver l'équilibre intérieur, une sérénité épanouissante et un bien-être psychologique."
      },
      {
        id: "osMuscle4",
        link: "bienEtreInterieur",
        pictureLove: "/img/jpg/product/bienEtreInterieur.jpg",
        pictureLove264: "/img/jpg/product/bienEtreInterieur264.jpg",
        pictureLove400: "/img/jpg/product/bienEtreInterieur400.jpg",
        textLove:
          "Dites adieu à vos fringales avec nos pré-probiotiques ! Régulez vos grignotages tout en profitant d'un bien-être intérieur incomparable. Optez pour notre produit pour retrouver une harmonie digestive et apaiser vos envies compulsives. Réguler votre microbiote, c’est apaiser des douleurs digestives et intestinales de manière efficace et durable. Notre solution naturelle vous fera découvrir une sensation de bien-être intérieur comme vous ne l'avez jamais connu."
      },
      {
        id: "osMuscle5",
        link: "purificatAir",
        pictureLove: "/img/jpg/product/purificatAir.jpg",
        pictureLove264: "/img/jpg/product/purificatAir264.jpg",
        pictureLove400: "/img/jpg/product/purificatAir400.jpg",
        textLove:
          "Le Purificateur d’Air Multi-Effets est la solution ultime pour purifier vos espaces, en éliminant jusqu'à 99,99 % des microbes et des particules ultrafines en suspension dans l'air. Doté d'une technologie avancée à 360 degrés, il combat efficacement les polluants atmosphériques, les allergènes, les COV et autres contaminants. Grâce à sa technologie intelligente, il ajuste automatiquement le niveau de filtration en temps réel pour assurer un environnement de respiration optimal."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "/img/jpg/product/osMuscle.jpg",
  picture264: "/img/jpg/product/osMuscle264.jpg",
  picture400: "/img/jpg/product/osMuscle400.jpg",
  colors: {
    textColor: "#799198",
    linkTextColor: "#799198",
    titleColorInSummary: "#799198",
    bgColorInSummary: "",
    bgColorInSummary0: "#89d7ab",
    bgColorInSummary1: "#d7dee0",
    linearGradient0: "linear-gradient(105deg ,#a1b2b7, #c9f2ff)",
    linearGradient1: "linear-gradient(to right, #a1b2b7, 	#d7dee0)",
    shadowColor: "#d7dee0"
  },
  inSummary: [
    {
      id: "OSiS0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Lutte contre les grignotages salés</li>
        </ul>
      )
    },
    {
      id: "OSiS1",
      title: "Santé",
      text: (
        <ul>
          <li>C'est un antioxydant</li>
          <li>Soutient le système immunitaire et cardiovasculaire</li>
          <li>Lutte contre la constipation</li>
          <li>
            Soutient la formation de collagène et la croissance osseuse
            (gencives et dents saines)
          </li>
          <div className="marginLeft15px">
            <h5>Soulage les douleurs liées à :</h5>
            <ul>
              <li>l’arthrose</li>
              <li>l’ostéoporose</li>
              <li>
                la tendinopathie calcifiante (propriétés anti inflammatoires)
              </li>
            </ul>
          </div>
          <li>Atténue les symptômes de la dépression </li>
          <li>
            Aide à la régulation du taux de sucre et du taux de cholestérol dans
            le sang{" "}
          </li>
          <li>Favorise l’absorption du calcium </li>
        </ul>
      )
    },
    {
      id: "OSiS2",
      title: "Beauté ",
      text: (
        <ul>
          <li>Diminue la cellulite aqueuse</li>
        </ul>
      )
    },
    {
      id: "OSiS3",
      title: "Bien-être",
      text: (
        <ul>
          <li>Contient des ingrédients aux propriétés anti inflammatoires</li>
          <li>
            Composé de minéraux bons pour les os, les muscles et les nerfs
          </li>
          <li>Conseillé pour les crampes, les engourdissements</li>
          <li>Et dans le cadre de pathologies telles que la fibromyalgie</li>
        </ul>
      )
    }
  ]
};
