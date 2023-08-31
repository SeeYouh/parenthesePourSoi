import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const regenerateurCellulaire = {
  nameProduct: "Régénérateur cellulaire",
  id: "regenerateurCellulaire",

  summary: {
    title: "Un support quotidien",
    paragraph: [
      {
        id: "0regenerateurCellulaire",
        subTitle: "Dites bonjour à votre nouveau vous",
        text: "Notre best-seller est le joyau de notre boutique, spécifiquement formulé pour la régénération cellulaire, il rehausse l'élasticité et la fermeté de votre peau."
      },
      {
        id: "1regenerateurCellulaire",
        subTitle: "Effacez vos imperfections et soulagez vos maux",
        text: [
          "Nous croyons en la beauté naturelle de chaque individu, et ce produit est là pour la révéler. Notre régénérateur cellulaire lutte efficacement contre la cellulite, diminue les vergetures, traite les problèmes d'acné ou apaise les symptômes d'eczéma et de psoriasis. Finies les démangeaisons et les irritations. Votre peau vous remerciera !",
          "Il permet également d'accélérer la cicatrisation des plaies et d'améliorer l'aspect des cicatrices, que ce soit pour des marques post-chirurgicales ou des cicatrices d'acné. Il régénère vos cellules et les estompe considérablement. Retrouvez une peau lisse et uniforme, et surtout, retrouvez votre confiance en vous.",
          "Notre produit améliore la rétention d'eau, soulageant ainsi les sensations de gonflement aux mains et aux pieds et les douleurs qui y sont parfois associées. Il améliore également la circulation sanguine, apportant un soulagement quasi immédiat dans votre corps."
        ],
        picture675: "/img/jpg/product/REIllusText675.jpg",
        picture450: "/img/jpg/product/REIllusText450.jpg",
  picture225: "/img/jpg/product/REIllusText225.jpg",
        picture900: "/img/jpg/product/REIllusText900.jpg"
      },
      {
        id: "2regenerateurCellulaire",
        subTitle: "Revitalisez votre santé",
        text: "Ce formidable allié pour votre santé globale renforce votre système nerveux et immunitaire, contribuant à un cœur en pleine forme. Grâce à sa richesse en vitamine C, il encourage la formation et le maintien du collagène, garantissant la santé de vos tissus, cartilages, ligaments et os."
      },
      {
        id: "3regenerateurCellulaire",
        subTitle: "Boostez votre quotidien",
        text: "En stimulant l’énergie naturellement présente dans votre organisme, il vous offre une vitalité renouvelée. Vous vous sentez plus dynamique et épanoui(e) au quotidien"
      },
      {
        id: "4regenerateurCellulaire",
        subTitle: "Respirez à pleins poumons",
        text: "Son pouvoir antioxydant stimule les fonctions respiratoires, apaisant ainsi les allergies et les symptômes de l'asthme. Un produit unique pour des bienfaits multiples : laissez notre formule vous transformer, apaiser vos maux et améliorer votre quotidien."
      },
      {
        id: "5regenerateurCellulaire",
        subTitle: "Optez pour ce produit unique",
        text: "Procurez-vous ce joyau naturel et découvrez comment un seul produit peut changer votre vie."
      },
      {
        id: "6regenerateurCellulaire",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "7regenerateurCellulaire",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "regenerateurCellulaire0",
        link: "apportQ10",
        pictureLove: "/img/jpg/product/apportQ10.jpg",
        textLove:
          "Notre produit phare s’associe parfaitement à notre formule riche en ubiquinol, une version ultra-puissante de la CoQ10, pour une action renforcée et des effets encore plus impressionnants. Grâce à ce puissant mélange, la régénération cellulaire est stimulée de manière exceptionnelle, offrant des résultats particulièrement marqués sur les vergetures profondes et les varices importantes. Préparez-vous à dire adieu aux imperfections qui vous gênent et à retrouver une peau visiblement plus lisse, plus ferme et plus éclatante. Ce duo de choc est la clé d'une peau transformée et épanouie."
      },
      {
        id: "regenerateurCellulaire1",
        link: "guerisseurMaux",
        pictureLove: "/img/jpg/product/guerisseurMaux.jpg",
        textLove:
          "Notre concentré d’omégaQ a des bienfaits étendus sur notre produit pour une amélioration globale de votre bien-être. En agissant en profondeur, il améliore la peau en réduisant la cellulite pour une texture plus lisse. De plus, il soutient la santé cardiovasculaire en améliorant la circulation sanguine et en réduisant les risques de maladies cardiaques. Ses acides gras essentiels favorisent aussi la santé cognitive en améliorant la mémoire et la concentration. Il régule la pression artérielle et protège le système cardiovasculaire. Il contrôle l'appétit en stoppant les fringales et réduit le stress en favorisant un sommeil réparateur. Enfin, spécialement conçu pour les femmes, il soulage les douleurs menstruelles et atténue les symptômes de la ménopause. Notre produit offre ainsi une solution holistique pour une meilleure qualité de vie."
      },
      {
        id: "regenerateurCellulaire2",
        link: "gelNettoyant",
        pictureLove: "/img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Pour une peau adoucie et débarrassée des impuretés accumulées tout au long de la journée, notre gel nettoyant sera votre allié idéal. Pour offrir à votre peau une expérience de soin complète et efficace, faites confiance à notre gel nettoyant en lui offrant une hydratation optimale et une sensation de fraîcheur incomparable."
      },
      {
        id: "regenerateurCellulaire3",
        link: "cocoOil",
        pictureLove: "/img/jpg/product/cocoOil.jpg",
        textLove:
          "Pour prendre soin votre peau et éviter qu'elle ne s'assèche grâce à notre huile de coco d'origine tahitienne, pleine de bienfaits. Contrairement à d'autres produits, notre huile reste sous forme liquide, car elle n'a subi aucune transformation. Cela garantit que vous bénéficiez de toutes ses propriétés naturelles intactes pour hydrater, nourrir et protéger votre peau en profondeur. Offrez-vous une expérience de soin authentique et découvrez les vertus revitalisantes de notre huile de coco de Tahiti pour une peau douce, radieuse et resplendissante."
      },
      {
        id: "regenerateurCellulaire4",
        link: "bb",
        pictureLove: "/img/jpg/product/bb.jpg",
        textLove:
          "Pour régénérer vos cheveux et ongles, les rendant plus forts et brillants, je vous conseille de consulter cette pépite.. Sa formule puissante accélère la pousse des ongles et des cheveux, vous permettant ainsi de profiter d'une chevelure plus abondante et d'ongles forts et sains. En augmentant la production de kératine, il revitalise en profondeur vos cheveux, les rendant plus résistants à la casse et leur redonnant brillance et vitalité. Il permet également de stimuler votre énergie naturelle tout au long de la journée."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante0ProblemesCutanes").text],
  picture: "/img/jpg/product/regenerateurCellulaire.jpg",
  picture264: "/img/jpg/product/regenerateurCellulaire264.jpg",
  picture400: "/img/jpg/product/regenerateurCellulaire400.jpg",
  colors: {
    textColor: "#83218f",
    titleColorInSummary: "#83218f",
    bgColorInSummary0: "#a864b1",
    bgColorInSummary1: "#f0e4f2",
    linearGradient0: "linear-gradient(105deg ,#a864b1, #ed94ff)",
    linearGradient1: "linear-gradient(to right, #c190c7, 	#f0e4f2)",
    shadowColor: "#f0e4f2"
  },
  inSummary: [
    {
      id: "RCiSGP0",
      title: "Santé",
      text: (
        <ul>
          <li>Stimule le système immunitaire</li>
          <li>Améliore les fonctions respiratoires (asthme, allergies)</li>
          <li>
            Soutient la santé cardiovasculaire, le système nerveux et le système
            immunitaire
          </li>
          <li>Bénéfique pour la circulation sanguine et la rétention d’eau </li>
          <li>
            Aide à la production du collagène, essentiel pour les tissus, les
            os, les dents, les ligaments, les vertèbres, le cartilage et les
            articulations
          </li>
        </ul>
      )
    },
    {
      id: "RCiSB1",
      title: "Beauté ",
      text: (
        <ul>
          <li>
            Améliore la qualité de la peau (acné, vergetures, cellulite, eczéma,
            cicatrices)
          </li>
          <li>Diminue les signes visibles de l’âge</li>
          <li>Permet une cicatrisation plus rapide des plaies</li>
        </ul>
      )
    },
    {
      id: "RCiSBE2",
      title: "Bien-être",
      text: (
        <ul>
          <li>Apporte une énergie physique quotidienne</li>
        </ul>
      )
    }
  ]
};
