import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const cremeNight = {
  nameProduct: "Crème night",
  id: "cremeNight",

  summary: {
    title: "Une régénération cellulaire complète qui vous émerveillera",
    paragraph: [
      {
        id: "0cremeNight",
        subTitle: "Réveillez votre beauté",
        text: "Découvrez notre crème de nuit, un véritable secret de beauté pour stimuler et restaurer le processus cellulaire de votre peau pendant la nuit. Pendant cette période de repos, votre peau est naturellement plus réceptive aux soins, et notre crème agit en profondeur pour favoriser la régénération des cellules. Le résultat ? Une peau renouvelée, radieuse et éclatante de jeunesse."
      },
      {
        id: "1cremeNight",
        subTitle: "Repulpez votre peau",
        text: [
          "Grâce à sa technologie liposomale avancée, notre crème pénètre au cœur même de l'épiderme, apportant une hydratation exceptionnelle à votre peau. Elle nourrit en profondeur, offrant une humidité revitalisante de l'intérieur. En agissant comme un puissant soin raffermissant, elle lisse visiblement les ridules et les signes de relâchement cutané. Au réveil, vous ressentirez une peau repulpée, souple et pleine de vie.",
          "Notre crème de nuit cible efficacement les tâches et les décolorations visibles de la peau. En estompant progressivement ces imperfections disgracieuses, elle révèle un teint plus uniforme et éclatant. Spécialement formulée pour être efficace sur le masque de grossesse, elle agit en douceur pour réduire les taches pigmentaires liées à la grossesse. Vous retrouverez une peau éclatante, même après la période de grossesse."
        ],
        picture450: "/img/jpg/product/cremeNightIllusText450.jpg",
  picture225: "/img/jpg/product/cremeNightIllusText225.jpg",
        picture675: "/img/jpg/product/cremeNightIllusText675.jpg",
        picture900: "/img/jpg/product/cremeNightIllusText900.jpg"
      },
      {
        id: "2cremeNight",
        subTitle: "Luttez contre les signes de l’âge",
        text: "Dotée de puissants actifs antioxydants, notre crème de nuit lutte activement contre les signes visibles de l'âge tels que les rides et les ridules. En prévenant le vieillissement prématuré de la peau, elle vous offre un teint jeune et éclatant durablement. En intégrant notre crème de nuit à votre routine de soin, vous protégez votre peau des agressions extérieures et préserver sa jeunesse."
      },
      {
        id: "3cremeNight",
        subTitle: "Offrez un soin de nuit d’exception à votre peau",
        text: "Révélez votre beauté épanouie avec notre crème de nuit régénérante. Profitez d'une hydratation exceptionnelle, d'un teint uniforme et lumineux, ainsi que d'une protection puissante contre les signes de l'âge. N'attendez plus pour offrir à votre peau un soin de nuit d'exception. Réveillez-vous chaque matin avec une peau resplendissante de santé et d'éclat."
      },
      {
        id: "4cremeNight",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5cremeNight",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "cremeNight0",
        link: "huileDemaquillante",
        pictureLove: "/img/jpg/product/huileDemaquillante.jpg",
  pictureLove264: "/img/jpg/product/huileDemaquillante264.jpg",
  pictureLove400: "/img/jpg/product/huileDemaquillante400.jpg",
        textLove:
          "Explorez notre huile polyvalente qui prend soin de votre peau en profondeur. Elle agit comme un nettoyant, un démaquillant et un décontaminant tout-en-un, éliminant efficacement saletés, impuretés et polluants pour laisser votre peau fraîche et revitalisée. En plus d'être un démaquillant efficace, elle se distingue par l'absence d'huiles minérales qui pourraient obstruer vos pores. Cette formule a été testée dermatologiquement pour vous offrir une expérience de soin optimale et sécuritaire."
      },
      {
        id: "cremeNight1",
        link: "cremeDay",
        pictureLove: "/img/jpg/product/cremeDay.jpg",
  pictureLove264: "/img/jpg/product/cremeDay264.jpg",
  pictureLove400: "/img/jpg/product/cremeDay400.jpg",
        textLove:
          "Notre crème hydratante apaise instantanément la peau, la laissant souple et éclatante. Sa formule riche combat la sécheresse en maintenant une hydratation optimale et renforce la barrière cutanée pour protéger des agressions extérieures. En ciblant les tâches sombres, elle éclaircit et unifie le teint. Pour une peau nette, débarrassée de l'acné, choisissez notre crème d'exception pour un éclat radieux et uniforme."
      },
      {
        id: "cremeNight2",
        link: "masqueNuit",
        pictureLove: "/img/jpg/product/masqueNuit.jpg",
  pictureLove264: "/img/jpg/product/masqueNuit264.jpg",
  pictureLove400: "/img/jpg/product/masqueNuit400.jpg",
        textLove:
          "Notre masque de nuit révolutionnaire utilisant la technologie Breathable Barrier® a été scientifiquement éprouvé pour améliorer visiblement la santé de votre peau. Testé sous contrôle dermatologique, il est considéré comme étant plus efficace que ses concurrents en vente libre. Grâce à ses propriétés antioxydantes et régénératrices, il combat les signes du vieillissement en réduisant l'apparence des rides et des ridules, améliore les imperfections de la peau, resserre les pores et rehausse la texture, pour vous offrir une peau plus saine et éclatante."
      },
      {
        id: "cremeNight3",
        link: "gelNettoyant",
        pictureLove: "/img/jpg/product/gelNettoyant.jpg",
  pictureLove264: "/img/jpg/product/gelNettoyant264.jpg",
  pictureLove400: "/img/jpg/product/gelNettoyant400.jpg",
        textLove:
          "Notre gel nettoyant, avec sa formule douce et efficace, élimine en douceur les saletés, le maquillage et les impuretés accumulées, laissant votre peau fraîche et prête à se régénérer pendant la nuit. Grâce à ses actifs ciblés, il combat efficacement les imperfections et prévient l'apparition de nouvelles éruptions cutanées, vous offrant ainsi une peau nette et purifiée. Nous avons soumis notre produit à des tests rigoureux sous contrôle dermatologique pour garantir sa sécurité et son efficacité, le rendant adapté à tous les types de peau."
      },
      {
        id: "cremeNight4",
        link: "serumComplet",
        pictureLove: "/img/jpg/product/serumComplet.jpg",
  pictureLove264: "/img/jpg/product/serumComplet264.jpg",
  pictureLove400: "/img/jpg/product/serumComplet400.jpg",
        textLove:
          "Notre sérum complet marque une véritable révolution dans le domaine des soins de la peau, avec ses 9 brevets exclusifs. Grâce à la technologie liposomale avancée, notre sérum offre une hydratation en profondeur, procurant une sensation de confort et de revitalisation à votre peau. Les actifs spécifiques de notre sérum agissent en harmonie pour préserver l'élasticité et la fermeté de votre peau. Ils stimulent également la production de collagène, contribuant ainsi à un teint plus jeune et tonique. Voyez les décolorations et les rides s'atténuer progressivement. En renforçant la barrière cutanée, notre sérum protège votre peau des agressions extérieures, offrant une meilleure défense face aux facteurs environnementaux."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/cremeNight.jpg",
  picture264: "/img/jpg/product/cremeNight264.jpg",
  picture400: "/img/jpg/product/cremeNight400.jpg",
  colors: {
    textColor: "#015c77",
    titleColorInSummary: "#015c77",
    linkTextColor: "#015c77",
    bgColorInSummary0: "#4d8da0",
    bgColorInSummary1: "#e1ebef",
    linearGradient0: "linear-gradient(105deg ,#4d8da0 , #7bcaff)",
    linearGradient1: "linear-gradient(to right, #80aebb ,#e1ebef)",
    shadowColor: "#e1ebef"
  },
  inSummary: [
    {
      id: "CNiS0",
      title: "Santé",
      text: (
        <ul>
          <li>
            Diminue les irritations, les tiraillements, les rougeurs et
            démangeaisons de la peau du visage
          </li>
        </ul>
      )
    },
    {
      id: "CNiS1",
      title: "Beauté",
      text: (
        <ul>
          <li>Restaure le processus cellulaire du visage</li>
          <li>
            Hydrate et apporte de l’humidité de l’intérieur (
            <span>
              <style>
                {`a:visited { 
                    color: "#015c77"; 
                  }`}
              </style>
              <a
                className="btn btn-extLink"
                href="https://sante.journaldesfemmes.fr/fiches-medicaments/2862067-liposomale-definition-vitamine-c-quel-interet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                technologie liposomale
              </a>
            </span>
            )
          </li>
          <li>Augmente l’élasticité et la fermeté de la peau</li>
          <li>Lisse et raffermit</li>
          <li>
            Diminue les tâches, les décolorations visibles de la peau et est
            très efficace sur le masque de grossesse
          </li>
          <li>Améliore le teint </li>
          <li>Lutte contre les signes visibles de l’âge</li>
        </ul>
      )
    }
  ]
};
