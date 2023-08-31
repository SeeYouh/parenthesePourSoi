import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const santeMax = {
  nameProduct: "Sante Max",
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
        ],
        picture675: "/img/jpg/product/santeMaxIllusText675.jpg",
        picture450: "/img/jpg/product/santeMaxIllusText450.jpg",
  picture225: "/img/jpg/product/santeMaxIllusText225.jpg",
        picture900: "/img/jpg/product/santeMaxIllusText900.jpg"
      },

      {
        id: "2santeMax",
        subTitle: "Boostez votre santé",
        text: "Au-delà de ses bienfaits spécifiques, le Noni est un véritable boosteur global pour votre santé. En agissant sur les maladies chroniques, il vous offre une amélioration globale de votre bien-être. Profitez de cette pépite naturelle pour atteindre un équilibre optimal dans tous les aspects de votre santé."
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
        link: "equilibreCorpsEsprit",
        pictureLove: "/img/jpg/product/equilibreCorpsEsprit.jpg",
  pictureLove264: "/img/jpg/product/equilibreCorpsEsprit264.jpg",
  pictureLove400: "/img/jpg/product/equilibreCorpsEsprit400.jpg",
        textLove:
          "Problème de sommeil ? Ce produit joue un rôle essentiel en soutenant les fonctions psychologiques normales, augmentant le métabolisme énergétique et favorisant un sommeil récupérateur. Il offre de nombreux bienfaits pour la santé, améliorant l'absorption de nutriments essentiels tels que la vitamine A, les acides gras et les protéines."
      },

      {
        id: "santeMax1",
        link: "harmonie",
        pictureLove: "/img/jpg/product/harmonie.jpg",
  pictureLove264: "/img/jpg/product/harmonie264.jpg",
  pictureLove400: "/img/jpg/product/harmonie400.jpg",
        textLove:
          "Notre produit est formulé avec des ingrédients aux propriétés antidépressives, améliorant l'humeur et l'énergie vitale. Il favorise un sommeil réparateur et stimule les capacités cognitives. De plus, il offre une efficacité anti-inflammatoire exceptionnelle pour soulager les douleurs liées à diverses affections, tout en renforçant le système immunitaire pour prévenir les infections. La formule aide également à une digestion saine, à l'élimination des toxines pour une perte de poids naturelle et à la cicatrisation de la peau. Il agit sur la production de DHEA, l'hormone anti-vieillissement, offrant une peau éclatante, une chevelure luxuriante, et un soulagement des douleurs menstruelles et des désagréments de la ménopause pour les femmes."
      },

      {
        id: "santeMax2",
        link: "heRelaxante",
        pictureLove: "/img/jpg/product/heRelaxante.jpg",
  pictureLove264: "/img/jpg/product/heRelaxante264.jpg",
  pictureLove400: "/img/jpg/product/heRelaxante400.jpg",
        textLove:
          "L'huile essentielle Relaxante a des effets bénéfiques sur la santé mentale en apaisant la dépression, réduisant l'anxiété et le stress, et favorisant un sentiment de bien-être. Son parfum relaxant aide à calmer l'esprit et favorise la tranquillité intérieure. Elle est également efficace pour favoriser l'endormissement, réduire les troubles du sommeil, et soulager les irritations cutanées, offrant un soulagement rapide et apaisant. Son utilisation régulière peut détendre les muscles de la mâchoire et atténuer le grincement de dents."
      },

      {
        id: "santeMax3",
        link: "detox",
        pictureLove: "/img/jpg/product/detox.jpg",
  pictureLove264: "/img/jpg/product/detox264.jpg",
  pictureLove400: "/img/jpg/product/detox400.jpg",
        textLove:
          "Une détoxification du corps peut entraîner un mieux-être immédiat. Agissant comme un agent de détox, notre produit élimine les toxines accumulées dans les organes, favorisant ainsi une meilleure santé globale. Les ingrédients présents protègent les cellules contre le stress oxydatif, renforcent le système immunitaire et rééquilibrent le système digestif, réduisant les ballonnements et la cellulite. Vous retrouverez une vitalité et un bien-être général grâce à cette cure."
      },

      {
        id: "santeMax4",
        link: "pb",
        pictureLove: "/img/jpg/product/PB.jpg",
  pictureLove264: "/img/jpg/product/PB264.jpg",
  pictureLove400: "/img/jpg/product/PB400.jpg",
        textLove:
          "Notre produit est idéal pour les sportifs et les personnes actives, car il optimise la performance sportive en améliorant l'endurance et la récupération musculaire. Il agit également comme un coupe-faim puissant pour aider à contrôler l'appétit et favoriser la perte de poids naturelle. En plus de ses bienfaits physiques, il soutient la régénération des tissus, favorise une digestion harmonieuse, et améliore la santé cardiovasculaire pour un bien-être général. Enfin, il apporte une énergie revitalisante et contribue à améliorer le bien-être émotionnel."
      }
    ]
  },
  firstCategory: [getCategoryById("0GestionDuPoids").name],
  secondCategory: [
    getSecondCategoryById("0GestionDuPoids0Detoxification").text
  ],
  picture: "/img/jpg/product/santeMax.jpg",
  picture264: "/img/jpg/product/santeMax264.jpg",
  picture400: "/img/jpg/product/santeMax400.jpg",
  colors: {
    textColor: "#990000",
    titleColorInSummary: "#990000",
    linkTextColor: "#990000",
    bgColorInSummary0: "#b84d4d",
    bgColorInSummary1: "#f3e0e0",
    linearGradient0: "linear-gradient(105deg ,#b84d4d, #ff9a9a)",
    linearGradient1: "linear-gradient(to right, #cc8080, 	#f3e0e0)",
    shadowColor: "#f3e0e0"
  },
  inSummary: [
    {
      id: "SMiS0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Aide à la perte de poids</li>
          <li>A des propriétés détoxifiantes et drainantes</li>
        </ul>
      )
    },

    {
      id: "SMiS1",
      title: "Santé",
      text: (
        <ul>
          <li>Protège les cellules contre le stress oxydatif</li>
          <li>Booste le système immunitaire</li>
          <li>Lutte contre les maladies saisonnières</li>
          <li>
            Régule le système digestif et rend au foie sa fonction optimale
          </li>
          <li>Régule du cholestérol</li>
          <li>Booste la santé dans sa globalité</li>
        </ul>
      )
    }
  ]
};
