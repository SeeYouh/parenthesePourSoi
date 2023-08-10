import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const santeMax = {
  nameProduct: "SanteMax",
  id: "santeMax",
  summary: {
    title: "Le compagnon idéal pour booster votre quotidien",
    paragraph: [
      {
        id: "0santeMax",
        subTitle: "Gérez votre poids",
        text: "Le Noni se révèle être un allié de choix pour une gestion du poids optimale. Ses propriétés détoxifiantes et drainantes contribuent à faciliter la perte de poids en éliminant les toxines accumulées dans votre corps. Laissez-vous guider vers une silhouette équilibrée et resplendissante avec cette pépite naturelle."
      },

      {
        id: "1santeMax",
        subTitle: "Equilibrez votre intérieur",
        text: [
          "Le Noni, grâce à ses propriétés régulatrices, se positionne comme un véritable soutien pour votre système digestif. Il agit en douceur pour favoriser une digestion harmonieuse en aidant à équilibrer les sécrétions gastriques et en facilitant le processus de digestion. En régulant l'activité du foie, le Noni permet également une meilleure décomposition des graisses et des substances toxiques, contribuant ainsi à améliorer le fonctionnement global du système digestif.",
          "En boostant votre système immunitaire, le Noni vous offre une protection naturelle contre les maladies saisonnières. Ses propriétés antioxydantes agissent comme un bouclier protecteur pour vos cellules, réduisant le stress oxydatif et renforçant ainsi vos défenses naturelles. Grâce à cette action préventive, vous serez mieux armé pour faire face aux agressions extérieures et aux infections.",
          <div>
            <p>
              L'un des atouts majeurs du Noni réside dans sa capacité à
              favoriser la régulation du cholestérol. En diminuant le taux de
              <span>
                <style>
                  {`a:visited { 
                    color: "#367898"; 
                  }`}
                </style>

                <a
                  className="btn btn-extLink"
                  href="https://fr.wikipedia.org/wiki/Particule_ultrafine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cholestérol LDL
                </a>
              </span>
              (le mauvais cholestérol) dans le sang tout en préservant le taux
              de
              <span>
                <style>
                  {`a:visited { 
                    color: "#367898"; 
                  }`}
                </style>

                <a
                  className="btn btn-extLink"
                  href="https://fr.wikipedia.org/wiki/Particule_ultrafine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cholestérol HDL
                </a>
              </span>
              (le bon cholestérol), le Noni contribue à maintenir un équilibre
              lipidique sain. Cela réduit les risques de maladies
              cardiovasculaires et favorise une santé équilibrée pour votre
              système cardiovasculaire.
            </p>
          </div>
        ]
      },

      {
        id: "2santeMax",
        subTitle: "",
        text: ""
      },
      {
        id: "3santeMax",
        subTitle: "Vous aimerez aussi…"
      },
      {
        id: "4santeMax",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "santeMax0",
        link: "",
        pictureLove: "/img/jpg/product/.jpg",
        textLove: ""
      },

      {
        id: "santeMax1",
        link: "",
        pictureLove: "/img/jpg/product/.jpg",
        textLove: ""
      },

      {
        id: "santeMax2",
        link: "",
        pictureLove: "/img/jpg/product/.jpg",
        textLove: ""
      },

      {
        id: "santeMax3",
        link: "",
        pictureLove: "/img/jpg/product/.jpg",
        textLove: ""
      },

      {
        id: "santeMax4",
        link: "",
        pictureLove: "/img/jpg/product/.jpg",
        textLove: ""
      }
    ]
  },
  firstCategory: [getCategoryById("0GestionDuPoids").name],
  secondCategory: [
    getSecondCategoryById("0GestionDuPoids0Detoxification").text
  ],
  picture: "/img/jpg/product/santeMax.jpg",
  colors: {
    textColor: "#7e1450",
    titleColorInSummary: "#7e1450",
    linkTextColor: "#7e1450",
    bgColorInSummary0: "#a55b85",
    bgColorInSummary1: "#f0e3ea",
    linearGradient0: "linear-gradient(105deg ,#a55b85, #ff82b3)",
    linearGradient1: "linear-gradient(to right, #bf8aa8, 	#f0e3ea)",
    shadowColor: "#f0e3ea"
  },
  inSummary: [
    {
      id: "SMiS0",
      title: "Santé",
      text: (
        <ul>
          <li>...</li>
        </ul>
      )
    },

    {
      id: "SMiS1",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>...</li>
        </ul>
      )
    }
  ]
};
