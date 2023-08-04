import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const harmonie = {
  nameProduct: "Harmonie",
  id: "harmonie",

  summary: {
    title: "Soutenez votre corps et votre beauté.",
    paragraph: [
      {
        id: "0harmonie",
        subTitle: "Boostez votre moral avec notre antidépresseur naturel",
        text: "Notre produit, riche en ingrédients aux propriétés antidépressives naturelles, est votre allié pour améliorer significativement votre humeur et votre moral. Il agit comme un bouclier contre la fatigue physique et mentale, vous aidant à retrouver votre énergie vitale et à aborder chaque journée avec enthousiasme. Vous constaterez également une amélioration de votre sommeil, favorisant un repos réparateur et une détente profonde. Enfin, notre formule unique stimule vos capacités cognitives, vous permettant ainsi d'optimiser votre concentration et votre clarté mentale."
      },
      {
        id: "1harmonie",
        subTitle:
          "Retrouvez votre mobilité avec notre anti-inflammatoire efficace",
        text: [
          "Il est spécialement conçu pour offrir une efficacité anti-inflammatoire exceptionnelle, soulageant ainsi les douleurs liées à l'arthrite, l'arthrose, l'ostéoporose, les rhumatismes et bien d'autres affections. Retrouvez votre mobilité et votre liberté grâce à notre solution naturelle et puissante. Il améliore également la santé oculaire en préservant la santé de vos yeux. De plus, il renforce votre système immunitaire, vous aidant à vous remettre plus rapidement des maladies et à prévenir les infections.",
          "Les ingrédients minutieusement sélectionnés de notre produit favorisent une digestion saine et équilibrée, vous évitant ainsi les troubles digestifs courants. Grâce à ses propriétés détoxifiantes, il vous aide à éliminer les toxines accumulées dans votre corps, favorisant ainsi ainsi un mieux-être intérieur."
        ],
        picture450: "/img/jpg/product/eliteIllusText450.jpg",
        picture675: "/img/jpg/product/eliteIllusText675.jpg",
        picture900: "/img/jpg/product/eliteIllusText900.jpg"
      },
      {
        id: "2harmonie",
        subTitle:
          "Retrouvez une peau saine avec notre accélérateur de cicatrisation",
        text: "Notre solution naturelle accélère la cicatrisation des verrues, des boutons de fièvre et des aphtes, vous permettant de retrouver une peau saine et apaisée. Enfin, il aide à réduire l'eczéma grâce à sa teneur en oméga-6, offrant un soulagement bienvenu aux problèmes de peau."
      },
      {
        id: "3harmonie",
        subTitle: "Rajeunissez avec notre stimulateur de DHEA",
        text: "Et le plus de ce produit, c’est son action sur la production de DHEA, l'hormone anti-vieillissement. Vous retrouverez une peau éclatante, plus lisse et plus hydratée, grâce à une diminution notable de la sécheresse cutanée et à une stimulation de la production de collagène. De plus, notre formule aide à réduire la chute des cheveux, vous offrant ainsi une chevelure volumineuse et luxuriante."
      },
      {
        id: "4harmonie",
        subTitle: "Pour vous, Mesdames",
        text: "Mesdames, notre produit est spécialement conçu pour vous aider à atténuer les douleurs menstruelles grâce à sa teneur en oméga-6, vous offrant ainsi un soulagement bien mérité. De plus, il diminue les désagréments de la ménopause en stimulant la production d'œstrogènes, vous permettant de traverser cette période de transition avec sérénité et confort."
      },
      {
        id: "5harmonie",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "6harmonie",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "harmonie0",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Pour une santé mentale optimale et la prévention du burn-out, il est conseillé d’associer ce produit avec notre booster d'énergie pour une synergie parfaite. Grâce à cette combinaison, vous bénéficierez d'un soutien mental et émotionnel tout en profitant d'un regain d'énergie pour traverser la journée avec un sourire éclatant. Notre booster d’énergie et d’humeur vous dynamisera pour relever tous les défis avec vitalité."
      },
      {
        id: "harmonie1",
        pictureLove: "/img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Notre gel nettoyant offre un nettoyage doux et efficace, élimine les impuretés sans déshydrater la peau et prépare sa régénération pendant le sommeil. Il hydrate en laissant une peau douce et veloutée, lutte contre l'acné et les inflammations, tout en étant sûr pour tous les types de peau. Révélez une peau éclatante de beauté et en pleine santé avec notre formule dédiée à votre beauté."
      },
      {
        id: "harmonie2",
        pictureLove: "/img/jpg/product/serumFlash.jpg",
        textLove:
          "Une véritable révolution pour vos yeux ! En seulement 90 secondes, ce sérum fait disparaître les rides, ridules et poches sous les yeux, vous offrant une véritable cure de jeunesse. Réveillez-vous avec des yeux non gonflés et une peau rajeunie en un temps record. Une expérience de rajeunissement en un temps record."
      },
      {
        id: "harmonie3",
        pictureLove: "/img/jpg/product/cremeNuit.jpg",
        textLove:
          "Notre crème de nuit est spécialement formulée pour lutter contre les signes visibles de l'âge. Cette formule innovante restaure le processus cellulaire de votre visage pendant que vous dormez, offrant une régénération complète. Réveillez-vous chaque matin avec une peau rayonnante, lisse et revitalisée, prête à affronter la journée en toute confiance. Profitez des multiples bienfaits de notre crème de nuit pour une peau d'apparence plus jeune et éclatante."
      },
      {
        id: "harmonie4",
        pictureLove: "/img/jpg/product/regenerateurCellulaire.jpg",
        textLove:
          "Notre produit best-seller, le régénérateur cellulaire, opère des miracles sur votre peau. Sa formule puissante aide à gommer les imperfections et offre une transformation positive à votre peau. Vous retrouverez une apparence éblouissante grâce à ses bienfaits inégalés. Ne laissez pas les imperfections vous freiner, offrez à votre peau le soin qu'elle mérite avec notre régénérateur cellulaire et redécouvrez une peau éclatante et resplendissante. Faites confiance à notre best-seller pour obtenir des résultats remarquables et une peau transformée qui fera des envieux."
      }
    ]
  },
  firstCategory: [getCategoryById("3BienEtre").name],
  secondCategory: [getSecondCategoryById("3BienEtre2FatigueSommeil").text],
  picture: "/img/jpg/product/harmonie.jpg",
  colors: {
    textColor: "#30d1d9",
    titleColorInSummary: "#30d1d9",
    linkTextColor: "#c433bc",
    bgColorInSummary0: "#c433bc",
    bgColorInSummary1: "#e6f9fa",
    linearGradient0: "linear-gradient(105deg ,#6edfe4, #befaff)",
    linearGradient1: "linear-gradient(to right, #98e8ec, 	#e6f9fa)",
    shadowColor: "#e6f9fa"
  },
  inSummary: [
    {
      id: "HiS0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Détoxifie l’organisme</li>
          <li>Améliore la digestion </li>
        </ul>
      )
    },
    {
      id: "HiS1",
      title: "Santé",
      text: (
        <ul>
          <li>Soutient le système immunitaire</li>
          <li>Améliore la santé oculaire </li>
          <div className="marginLeft15px">
            <h5>Diminue les douleurs articulaires :</h5>
            <li>arthrite</li>
            <li>ostéoporose</li>
            <li>rhumatismes…</li>
            <li>et bien d'autre</li>
          </div>
          <li>Régule la glycémie et le cholestérol</li>
          <li>
            Atténue les douleurs de menstruations et les symptômes de la
            ménopause
          </li>
          <li>A des propriétés antidépressives</li>
        </ul>
      )
    },
    {
      id: "HiS2",
      title: "Beauté ",
      text: (
        <ul>
          <li>
            Augmente la
            <span>
              <style>
                {`a:visited { 
                    color: "#c433bc"; 
                  }`}
              </style>
              <a
                className="btn btn-extLink"
                href="https://fr.wikipedia.org/wiki/D%C3%A9hydro%C3%A9piandrost%C3%A9rone"
                target="_blank"
                rel="noopener noreferrer"
              >
                DHEA
              </a>
            </span>
            et la production de collagène pour lutter contre le vieillissement
            de la peau
          </li>
          <li>Apaise l’eczéma</li>
          <div className="marginLeft15px">
            <h5>Combat</h5>
            <li>les aphtes</li>
            <li>les verrues</li>
            <li>les boutons de fièvre</li>
          </div>
        </ul>
      )
    },
    {
      id: "HiS3",
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
