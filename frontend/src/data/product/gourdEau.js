import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const gourdEau = {
  nameProduct: "Gourd'Eau",
  id: "gourdEau",
  summary: {
    title: "Une gourde à emporter partout !",
    paragraph: [
      {
        id: "0gourdEau",
        subTitle: "Choisissez la qualité",
        text: "Notre engagement envers votre santé et votre bien-être nous pousse à vous offrir un produit sans substances toxiques potentielles. Notre Système de Filtration d'Eau est exempt de BPA, BPS, bisphénols et d'activité œstrogénique, vous garantissant une eau pure et sans risque pour votre santé."
      },

      {
        id: "1gourdEau",
        subTitle: "Filtrez l’eau de n’importe quel endroit",
        text: (
          <div>
            <p>
              Notre Système de Filtration d'Eau est spécialement conçu pour
              offrir une purification optimale de votre eau, éliminant jusqu'à
              99,99 % des agents indésirables tels que les microbes, les
              contaminants émergents, les produits chimiques, les pesticides,
              les métaux lourds et les trihalométhanes. Vous pouvez ainsi boire
              en toute confiance, sachant que votre eau est propre et sûre.
            </p>
            <p>
              Notre Système de Filtration d'Eau est doté d'une technologie de
              pointe qui cible spécifiquement les agents nuisibles et les
              élimine efficacement. Il filtre les mauvaises choses, y compris :
            </p>
            <ul className="listStyle">
              <li>
                -
                <span>
                  <style>
                    {`a:visited { 
                    color: "#7e1450"; 
                  }`}
                  </style>

                  <a
                    className="btn btn-extLink"
                    href="https://fr.wikipedia.org/wiki/%C3%89l%C3%A9ment-trace_m%C3%A9tallique"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Les métaux lourds
                  </a>
                </span>
                tels que le plomb, le mercure et le cuivre, pour vous offrir une
                eau exempte de ces substances potentiellement nocives.
              </li>
              <li>
                -
                <span>
                  <style>
                    {`a:visited { 
                    color: "#7e1450"; 
                  }`}
                  </style>

                  <a
                    className="btn btn-extLink"
                    href="https://www.lenntech.fr/desinfection/necessite-desinfection-eau-potable.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Les microbiens
                  </a>
                </span>
                présents dans l'eau sont éliminés de manière efficace, assurant
                une eau propre et sans risque pour votre santé.
              </li>
              <li>
                -
                <span>
                  <style>
                    {`a:visited { 
                    color: "#7e1450"; 
                  }`}
                  </style>

                  <a
                    className="btn btn-extLink"
                    href="https://fr.wikipedia.org/wiki/Pesticide"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Les pesticides,
                  </a>
                </span>
                souvent présents dans l'eau potable, sont filtrés par notre
                système pour vous offrir une eau saine et dépourvue de ces
                substances chimiques.
              </li>
              <li>
                -
                <span>
                  <style>
                    {`a:visited { 
                    color: "#7e1450"; 
                  }`}
                  </style>

                  <a
                    className="btn btn-extLink"
                    href="https://www.zerowater.fr/actualites/chlore-et-trihalomethanes-dans-leau-du-robinet/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Les trihalométhanes,
                  </a>
                </span>
                des sous-produits de désinfection potentiellement dangereux,
                garantissant une eau purifiée et sûre.
              </li>
              <li>
                - Les contaminants émergents, tels que les résidus de
                médicaments et de produits chimiques, sont ciblés et éliminés
                par notre système pour une eau pure et propre.
              </li>
              <li>
                - Les produits chimiques présents dans l'eau sont filtrés
                efficacement, vous offrant une eau dépourvue de substances
                chimiques potentiellement nocives.
              </li>
            </ul>
          </div>
        ),
        picture450: "/img/jpg/product/gourdEauIllusText450.jpg",
        picture225: "/img/jpg/product/gourdEauIllusText225.jpg",
        picture675: "/img/jpg/product/gourdEauIllusText675.jpg",
        picture900: "/img/jpg/product/gourdEauIllusText900.jpg",
        picturefb: "/img/jpg/product/gourdEauIllusText1524.jpg"
      },
      {
        id: "2gourdEau",
        subTitle: "Prenez soin de votre santé",
        text: "Avec le Système de Filtration d'Eau, vous pouvez avoir l'assurance que votre eau est exempte de substances indésirables, vous permettant de profiter d'une eau potable propre et sûre à tout moment. Faites confiance à notre technologie de pointe pour filtrer les mauvaises choses, et buvez en toute sérénité."
      },
      {
        id: "3gourdEau",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4gourdEau",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "gourdEau0",
        link: "heRafraichissant",
        pictureLove: "/img/jpg/product/heRafraichissant.jpg",
        pictureLove264: "/img/jpg/product/heRafraichissant264.jpg",
        pictureLove400: "/img/jpg/product/heRafraichissant400.jpg",
        textLove:
          "Notre huile essentielle a une action apaisante améliore le confort respiratoire en soulageant la toux et en dégageant les voies respiratoires. De plus, elle est idéale pour apaiser les démangeaisons, réduire les rougeurs et calmer les piqûres d'insectes, offrant ainsi une peau apaisée. Grâce à ses propriétés relaxantes, elle détend les tensions musculaires et procure une sensation de calme. De plus, elle est bénéfique pour soulager les douleurs articulaires et atténuer les bouffées de chaleur liées à la ménopause. Enfin, pour les sportifs, elle soulage efficacement les foulures, les entorses et les douleurs musculaires, favorisant ainsi une récupération plus rapide."
      },

      {
        id: "gourdEau1",
        link: "boosterEnergie",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        pictureLove264: "/img/jpg/product/boosterEnergie264.jpg",
        pictureLove400: "/img/jpg/product/boosterEnergie400.jpg",
        textLove:
          "Si vous êtes de nature anxieuse ou que vous vous sentez surmené, notre booster naturel est le choix idéal. Sa combinaison parfaite vous aidera à retrouver l'équilibre intérieur, une sérénité épanouissante et un bien-être psychologique. N'hésitez pas à découvrir les bienfaits de notre produit pour apaiser votre esprit et vous sentir mieux au quotidien."
      },

      {
        id: "gourdEau2",
        link: "mereDeTous",
        pictureLove: "/img/jpg/product/mereDeTous.jpg",
        pictureLove264: "/img/jpg/product/mereDeTous264.jpg",
        pictureLove400: "/img/jpg/product/mereDeTous400.jpg",
        textLove:
          "Notre produit est spécialement conçu pour soulager les douleurs grâce à ses ingrédients aux propriétés anti-inflammatoires naturelles. Il offre une expérience apaisante qui vous permettra de retrouver confort et équilibre au quotidien. N'hésitez pas à essayer notre formule pour bénéficier d'un soulagement efficace et naturel contre les douleurs. Profitez d'une vie plus sereine et sans gêne grâce à notre produit bien-être."
      },

      {
        id: "gourdEau3",
        link: "osMuscle",
        pictureLove: "/img/jpg/product/osMuscle.jpg",
        pictureLove264: "/img/jpg/product/osMuscle264.jpg",
        pictureLove400: "/img/jpg/product/osMuscle400.jpg",
        textLove:
          "Notre produit est spécialement formulé avec des ingrédients aux propriétés anti-inflammatoires qui agissent de manière synergique pour soulager vos articulations douloureuses. Vous pourrez ainsi retrouver votre mobilité et votre confort au quotidien. De plus, grâce à sa capacité à stimuler la production de collagène, notre produit favorise des gencives saines et des os solides. Optez pour notre solution complète et bénéficiez des bienfaits pour vos articulations et votre santé bucco-dentaire. Profitez d'une vie plus active et en meilleure santé grâce à notre produit bien-être."
      },

      {
        id: "gourdEau4",
        link: "pb",
        pictureLove: "/img/jpg/product/PB.jpg",
        pictureLove264: "/img/jpg/product/PB264.jpg",
        pictureLove400: "/img/jpg/product/PB400.jpg",
        textLove:
          "Notre produit vous offre un boost d'énergie instantané pour rester alerte et dynamique tout au long de la journée. Grâce à cette alliance parfaite, vous pouvez maintenir votre vigilance et votre productivité, même sans prendre de repas complet. Profitez d'une journée pleine d'énergie et de vitalité en découvrant les avantages de notre produit. "
      }
    ]
  },
  firstCategory: [getCategoryById("5Purification").name],
  secondCategory: [getSecondCategoryById("5Purification1Eau").text],
  picture: "/img/jpg/product/gourdEau.jpg",
  picture264: "/img/jpg/product/gourdEau264.jpg",
  picture400: "/img/jpg/product/gourdEau400.jpg",
  colors: {
    textColor: "#367898",
    titleColorInSummary: "#367898",
    linkTextColor: "#367898",
    bgColorInSummary0: "#72a1b7",
    bgColorInSummary1: "#e7eff3",
    linearGradient0: "linear-gradient(105deg ,#72a1b7, #a2d7ff)",
    linearGradient1: "linear-gradient(to right, #9bbccc, 	#e7eff3)",
    shadowColor: "#e7eff3"
  },
  inSummary: [
    {
      id: "GEiS0",
      title: "Santé",
      text: (
        <ul>
          <li>
            Garantit une eau pure, débarrassée de jusqu'à 99,99 % des agents
            indésirables tels que microbes, métaux lourds, pesticides et
            produits chimiques
          </li>
          <li>
            Prend soin de votre santé en buvant en toute confiance une eau
            propre et sûre
          </li>
          <li>Filtre efficacement grâce à notre technologie de pointe</li>
        </ul>
      )
    }
  ]
};
