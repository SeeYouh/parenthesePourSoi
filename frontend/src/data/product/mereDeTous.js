import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const mereDeTous = {
  nameProduct: "Mère de Tous",
  id: "mereDeTous",

  summary: {
    title: "Un produit breveté et unique",
    paragraph: [
      {
        id: "0mereDeTous",
        subTitle:
          "Découvrez un produit breveté que vous ne trouverez nulle part ailleurs",
        text: "Disponible uniquement dans notre boutique en ligne, cette composition brevetée est un trésor de bien-être. Avec 36 ingrédients naturels parmi les plus puissants du monde, elle se distingue par son efficacité et sa qualité supérieure. Chaque élément a été soigneusement choisi pour ses propriétés bénéfiques, créant une synergie qui maximise les bienfaits pour votre santé."
      },
      {
        id: "1mereDeTous",
        subTitle: "Combattez douleurs et inflammations",
        text: [
          "Imaginez un monde sans douleur. C'est ce que cette formule unique offre. Composée de superaliments aux propriétés anti-inflammatoires, elle soulage efficacement les douleurs musculaires, osseuses, articulaires et les affections chroniques. Elle offre une alternative naturelle aux médicaments traditionnels, sans les effets secondaires indésirables.",
          "Mais ce n'est pas tout ! Dans un monde où les maladies sont omniprésentes, avoir une défense immunitaire solide est essentiel. Notre produit renforce votre système immunitaire en protégeant vos cellules, favorisant ainsi une santé globale optimale. Il se révèle particulièrement utile pour une récupération rapide lors de rhumes ou de périodes de pandémie, vous offrant la tranquillité d'esprit face aux défis de la santé.",
          "Imaginez-vous libéré(e) de la douleur et doté(e) d'un système immunitaire robuste pour affronter tous les jours avec énergie et bien-être. Notre formule unique vous offre cette possibilité, car nous croyons en un monde où la santé et le bien-être sont accessibles à tous. Rejoignez-nous dans cette quête d'une vie sans douleur, d'une santé florissante et d'une énergie débordante. Avec notre produit, découvrez la force de la nature pour votre bien-être et votre épanouissement."
        ],
        picture450: "/img/jpg/product/MereDeTousIllusText450.jpg",
        picture225: "/img/jpg/product/MereDeTousIllusText225.jpg",
        picture675: "/img/jpg/product/MereDeTousIllusText675.jpg",
        picture900: "/img/jpg/product/MereDeTousIllusText900.jpg"
      },
      {
        id: "2mereDeTous",
        subTitle: "Soulagez vos maux",
        text: "Une bonne santé est essentielle pour une vie saine. Heureusement, cette formule est là pour vous aider. En soulageant les allergies, en combattant l'acné, en favorisant la digestion, en luttant contre la constipation et en soulageant les brûlures d'estomac, elle améliore votre confort quotidien. Ce mélange aide également à réguler le taux de cholestérol, à stabiliser le diabète et améliore le système cardiovasculaire. C' est une solution naturelle pour ceux qui cherchent à améliorer leur santé de manière holistique."
      },
      {
        id: "3mereDeTous",
        subTitle: "Boostez votre énergie et votre clarté mentale",
        text: [
          "Fatigué de vous sentir fatigué ? Cette solution énergisante est là pour vous aider. Elle booste naturellement votre énergie, combat la fatigue et améliore votre humeur. Elle vous donne l'énergie nécessaire pour affronter votre journée, que ce soit pour le travail, le sport ou les activités de loisirs.",
          "Ce mélange unique soutient un équilibre psychologique et une clarté mentale, vous aidant à rester concentré et serein face aux défis quotidiens. Elle est idéale pour ceux qui cherchent à améliorer leur performance mentale de manière naturelle."
        ]
      },
      {
        id: "4mereDeTous",
        subTitle: "Optez pour un teint hâlé",
        text: "Qui n'aime pas avoir une belle peau bronzée ? Avec cette formule, vous pouvez accélérer le processus de bronzage et obtenir une peau rayonnante et un teint hâlé en seulement 30 minutes d'exposition. C'est votre secret pour un bronzage rapide et naturel."
      },
      {
        id: "5mereDeTous",
        subTitle: "Pour vous, Mesdames…",
        text: "Mesdames, nous comprenons les défis uniques que vous rencontrez. C'est pourquoi ce produit offre un soulagement appréciable pour les règles douloureuses, vous permettant de vivre cette période de manière plus confortable. Il est conçu pour vous aider à gérer les symptômes menstruels de manière naturelle."
      },
      {
        id: "6mereDeTous",
        subTitle:
          "Retrouvez votre bien-être en prenant le contrôle de vos maux",
        text: "La vie est trop courte pour souffrir. Avec cette composition, vous pouvez prendre le contrôle de vos maux et retrouver un état de bien-être et une vie plus confortable. Elle est une solution naturelle pour ceux qui cherchent à améliorer leur qualité de vie et leur bien-être général."
      },
      {
        id: "7mereDeTous",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "8mereDeTous",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "mereDeTous0",
        link: "heRafraichissant",
        pictureLove: "/img/jpg/product/heRafraichissant.jpg",
        pictureLove264: "/img/jpg/product/heRafraichissant264.jpg",
        pictureLove400: "/img/jpg/product/heRafraichissant400.jpg",
        textLove:
          "Pour soulager rapidement les douleurs musculaires, notre huile essentielle sera idéale. Elle apporte un réconfort immédiat aux muscles endoloris, favorisant une récupération rapide et vous permettant de reprendre vos activités avec une nouvelle énergie. Essayez-la dès maintenant pour un soulagement rapide et efficace."
      },
      {
        id: "mereDeTous1",
        link: "apportMineraux",
        pictureLove: "/img/jpg/product/ApportMineraux.jpg",
        pictureLove264: "/img/jpg/product/ApportMineraux264.jpg",
        pictureLove400: "/img/jpg/product/ApportMineraux400.jpg",
        textLove:
          "Notre produit avec notre complément spécialement formulé à base de minéraux essentiels vous permettra de d’améliorer votre vision et votre peau et soutiendra votre coeur. Cette formule composée d’ingrédients aux propriétés anti-inflammatoires vous offre une approche complète pour un bien-être optimal."
      },
      {
        id: "mereDeTous2",
        link: "apportVitamines",
        pictureLove: "/img/jpg/product/ApportVitamines.jpg",
        pictureLove264: "/img/jpg/product/ApportVitamines264.jpg",
        pictureLove400: "/img/jpg/product/ApportVitamines400.jpg",
        textLove:
          "Pour une prise en charge globale des douleurs musculaires, osseuses et nerveuses, notre complément enrichi en vitamines saura vous combler. Cette formule offre une approche naturelle pour soulager et prévenir les inconforts, tout en soutenant le bien-être de votre système neuromusculaire."
      },
      {
        id: "mereDeTous3",
        link: "osMuscle",
        pictureLove: "/img/jpg/product/osMuscle.jpg",
        pictureLove264: "/img/jpg/product/osMuscle264.jpg",
        pictureLove400: "/img/jpg/product/osMuscle400.jpg",
        textLove:
          "Ce produit est spécialement conçu pour soulager vos douleurs grâce à ses ingrédients aux propriétés anti-inflammatoires agissant en synergie. Retrouvez votre mobilité et votre confort au quotidien. De plus, notre formule stimule la production de collagène pour favoriser des gencives saines et des os solides. Une solution naturelle pour prendre soin de votre bien-être musculaire et osseux, tout en améliorant votre santé bucco-dentaire."
      },
      {
        id: "mereDeTous4",
        link: "equilibreCorpsEsprit",
        pictureLove: "/img/jpg/product/equilibreCorpsEsprit.jpg",
        pictureLove264: "/img/jpg/product/equilibreCorpsEsprit264.jpg",
        pictureLove400: "/img/jpg/product/equilibreCorpsEsprit400.jpg",
        textLove:
          "Un sommeil réparateur et revitalisant est essentiel pour votre corps et votre moral. Les douleurs peuvent perturber votre sommeil et impacter votre humeur au réveil. Notre solution vous offre une expérience relaxante, vous permettant de vous réveiller plein d'énergie et de bien-être pour affronter la journée avec vitalité"
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "/img/jpg/product/mereDeTous.jpg",
  picture264: "/img/jpg/product/mereDeTous264.jpg",
  picture400: "/img/jpg/product/mereDeTous400.jpg",
  colors: {
    textColor: "#e21e1e",
    titleColorInSummary: "#cf0a0a",
    bgColorInSummary0: "#eb6262",
    bgColorInSummary1: "#f0e3ea",
    linearGradient0: "linear-gradient(105deg ,#eb6262, #fff9f9)",
    linearGradient1: "linear-gradient(to right, #bf8aa8, 	#f0e3ea)",
    shadowColor: "#f0e3ea"
  },
  inSummary: [
    {
      id: "MdTiS0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Diminue les envies salées</li>
        </ul>
      )
    },
    {
      id: "MdTiS1",
      title: "Santé",
      text: (
        <ul>
          <li>A des propriétés antioxydantes</li>
          <li>Aide à soulager la constipation</li>
          <li>Augmente la formation de collagène</li>
          <li>
            Efficace sur l’ostéoporose, les crampes, l’arthrose, la
            tendinopathie calcifiante
          </li>
          <li>Favorise l’équilibre des hormones</li>
          <li>
            Aide à la régulation du taux de sucre et taux de cholestérol dans le
            sang
          </li>
          <li>Favorise l’absorption du calcium</li>
        </ul>
      )
    },
    {
      id: "MdTiS2",
      title: "Beauté ",
      text: (
        <ul>
          <li>A des propriétés antidépressives</li>
          <li>Agit sur la cellulite aqueuse</li>
          <li>Lutte contre le stress</li>
        </ul>
      )
    }
  ]
};
