import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const guerisseurMaux = {
  nameProduct: "Guérisseur de maux",
  id: "guerisseurMaux",

  summary: {
    title: "Un produit aux multiples bienfaits",
    paragraph: [
      {
        id: "0GuerisseurMaux",
        subTitle: "Améliorez l’apparence de votre peau",
        text: "Les ingrédients présents dans notre produit agissent en profondeur pour améliorer l'apparence de la peau, en particulier sur les problèmes de cellulite adipeuse et aqueuse. Il aide à réduire l'apparence de la cellulite, vous offrant ainsi une peau plus lisse et plus ferme."
      },
      {
        id: "1GuerisseurMaux",
        subTitle: "Soutenez votre santé",
        text: [
          "L'une des vertus les plus notables de ce joyau réside dans son soutien à la santé cardiovasculaire. En consommant régulièrement ce super nutriment, vous contribuez à améliorer la santé de votre cœur. Son action protectrice aide à réduire le risque de maladies cardiaques, telles que l'hypertension et les maladies coronariennes, tout en favorisant une circulation sanguine plus fluide et efficace.",
          "De plus, notre produit exerce des effets positifs sur le cerveau, contribuant ainsi à une meilleure santé cognitive. Ses acides gras essentiels, tels que les acides gras oméga-3, jouent un rôle crucial dans le développement et le bon fonctionnement du cerveau. Ils soutiennent les fonctions cognitives telles que la mémoire, la concentration et la clarté mentale.",
          "Un autre avantage significatif est sa capacité à réguler la pression artérielle. En aidant à maintenir une pression artérielle équilibrée, il contribue à la relaxation des vaisseaux sanguins et à la prévention de l'inflammation, il offre une protection supplémentaire pour le système cardiovasculaire."
        ],
        picture450: "/img/jpg/product/apportQ10IllusText450.jpg",
        picture675: "/img/jpg/product/apportQ10IllusText675.jpg",
        picture900: "/img/jpg/product/apportQ10IllusText900.jpg"
      },
      {
        id: "2GuerisseurMaux",
        subTitle: "Contrôlez votre appétit",
        text: "Notre produit agit de manière ciblée en stoppant les fringales sucrées et les compulsions alimentaires, vous aidant ainsi à contrôler votre appétit et à atteindre vos objectifs de perte de poids de manière plus efficace, en particulier au niveau du ventre."
      },
      {
        id: "3GuerisseurMaux",
        subTitle: "Réduisez votre stress",
        text: "En améliorant votre bien-être global, notre élixir combat la fatigue, l'irritabilité et la dépression. Il favorise un sommeil réparateur et réduit le stress néfaste pour le corps et la fonction mentale, vous permettant de vous sentir plus détendu, plus calme et plus équilibré au quotidien."
      },
      {
        id: "4GuerisseurMaux",
        subTitle: "Pour vous, Mesdames",
        text: "Notre produit est très efficace pour soulager les douleurs menstruelles et atténuer les effets de la ménopause, tels que les bouffées de chaleur et les variations d'humeur. Il contribue à maintenir un équilibre hormonal et à gérer les symptômes associés."
      },
      {
        id: "5GuerisseurMaux",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "6GuerisseurMaux",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "guerisseurMaux0",
        pictureLove: "/img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Pour encore plus de bien-être, découvrez notre produit qui régule le microbiote. Les prébiotiques et probiotiques améliorent la santé globale en prévenant les troubles digestifs et maladies chroniques. Cette solution de bien-être intérieur aide à gérer le poids, renforce le système immunitaire et offre une énergie naturelle grâce à la synthèse des vitamines B et K."
      },
      {
        id: "guerisseurMaux1",
        pictureLove: "/img/jpg/product/goutteMinceur.jpg",
        textLove:
          "Avec ces deux fioles uniques en gouttes, ce produit révolutionne votre cure minceur en ciblant les graisses tenaces sous-cutanées et viscérales. Il régule l'appétit, brûle les graisses efficacement et améliore votre bien-être général en stimulant le métabolisme, apportant une énergie positive et aidant à réduire la cellulite. Les gouttes nuit empêchent l'accumulation de nouvelles graisses, soulagent le stress et favorisent une digestion harmonieuse pour une récupération optimale pendant le sommeil."
      },
      {
        id: "guerisseurMaux2",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Notre booster d'énergie dynamise votre corps en stimulant votre énergie naturelle, favorisant un sommeil réparateur et diminuant le stress et l'anxiété. Grâce à ses propriétés détoxifiantes, il augmente la combustion des graisses de 17%, aidant dans la gestion du poids. En renforçant le système immunitaire et cardiovasculaire, il protège votre santé et améliore la concentration mentale."
      },
      {
        id: "guerisseurMaux3",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Notre best seller est l'allié ultime pour une peau de qualité, favorisant élasticité et fermeté pour un teint éclatant et jeune. En plus de ses bienfaits pour la peau, il soutient la santé globale en renforçant le système cardiovasculaire et immunitaire, favorisant la formation et le maintien du collagène. Il accélère la cicatrisation des plaies, améliore les cicatrices et stimule votre énergie naturelle, vous offrant vitalité et dynamisme au quotidien. Grâce à son pouvoir antioxydant, il apaise les allergies et les symptômes de l'asthme."
      },
      {
        id: "guerisseurMaux4",
        pictureLove: "/img/jpg/product/heRelaxante.jpg",
        textLove:
          "Une huile essentielle qui apaise la dépression et l'anxiété, favorisant la paix intérieure. Son parfum relaxant améliore l'humeur et aide à calmer l'esprit, réduisant le stress. Utilisée avant le coucher, elle favorise le sommeil et soulage les irritations cutanées, offrant un soulagement apaisant. Bénéficiez de ses bienfaits pour améliorer votre qualité de vie et équilibre intérieur."
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre0GestionStress").text],
  picture: "/img/jpg/product/guerisseurMaux.jpg",
  colors: {
    textColor: "#da7a2a",
    titleColorInSummary: "#da7a2a",
    bgColorInSummary0: "#e5a26a",
    bgColorInSummary1: "#fbefe5",
    linearGradient0: "linear-gradient(105deg ,#e5a26a, #ffd0bd)",
    linearGradient1: "linear-gradient(to right, #edbd95, 	#fbefe5)",
    shadowColor: "#fbefe5"
  },
  inSummary: [
    {
      id: "GMaiS0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Cible la perte de graisses au niveau du ventre</li>
          <li>
            Diminue les compulsions alimentaires et les fringales sucrées{" "}
          </li>
        </ul>
      )
    },
    {
      id: "GMaiS1",
      title: "Santé",
      text: (
        <ul>
          <li>Diminue les symptômes de la dépression</li>
          <li>Atténue les migraines </li>
          <li>Est bénéfique pour la tension, le coeur et le cerveau</li>
          <li>
            Amoindrit les douleurs de menstruations et les symptômes liés à la
            ménopause (humeur, bouffées de chaleur…)
          </li>
        </ul>
      )
    },
    {
      id: "GMaiS2",
      title: "Beauté ",
      text: (
        <ul>
          <li>Réduit les problèmes de peau</li>
          <li>Lutte contre la cellulite adipeuse </li>
        </ul>
      )
    },
    {
      id: "GMaiS3",
      title: "Bien-être",
      text: (
        <ul>
          <li>Lutte contre la fatigue</li>
          <li>Diminue l’irritabilité et le stress </li>
          <li>Combat les insomnies</li>
        </ul>
      )
    }
  ]
};
