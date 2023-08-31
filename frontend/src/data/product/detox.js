import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const detox = {
  nameProduct: "Détox’",
  id: "detox",

  summary: {
    title: "Nettoyer son corps en profondeur",
    paragraph: [
      {
        id: "0detox",
        subTitle: "Préparez-vous à mincir avec notre détox’",
        text: "La base essentielle de toute cure minceur est le nettoyage du corps afin de le préparer à une perte de poids saine et durable."
      },
      {
        id: "1detox",
        subTitle: "Laissez notre détox’ faire le grand nettoyage",
        text: (
          <div>
            <p>
              Notre produit agit comme un véritable agent de détoxification,
              absorbant les toxines présentes dans votre corps et les
              transportant hors de celui-ci. Ces toxines, issues de votre
              métabolisme et de votre environnement (polluants aériens,
              alimentation…), s'accumulent dans tout votre corps et sont
              transportées vers les cinq organes
              <span>
                <style>
                  {`a:visited { 
                    color: "#7e1450"; 
                  }`}
                </style>

                <a
                  className="btn btn-extLink"
                  href="https://fr.wikipedia.org/wiki/%C3%89monctoire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  émonctoires
                </a>
              </span>
              :
            </p>
            <ul className="listStyle">
              <li>- la peau</li>
              <li>- le foie</li>
              <li>- les reins</li>
              <li>- les poumons</li>
              <li>- les intestins</li>
            </ul>
            <p>
              Lorsque votre organisme est surchargé de toxines, des problèmes de
              santé peuvent survenir. En optant pour notre produit, vous
              permettez à votre corps de se débarrasser de ces toxines,
              favorisant ainsi une gestion du poids plus efficace et une
              meilleure santé globale.
            </p>
          </div>
        ),
        picture450: "/img/jpg/product/DetoxIllusText450.jpg",
  picture225: "/img/jpg/product/DetoxIllusText225.jpg",
        picture675: "/img/jpg/product/DetoxIllusText675.jpg",
        picture900: "/img/jpg/product/DetoxIllusText900.jpg"
      },
      {
        id: "2detox",
        subTitle: "Boostez vos défenses, c'est bon pour la balance !",
        text: "Les ingrédients de notre détox' protègent vos cellules contre le stress oxydatif grâce à la vitamine E présente dans certains d'entre eux. Ils renforcent également votre système immunitaire, maintiennent la santé de vos muqueuses et favorisent un fonctionnement normal de la thyroïde, jouant ainsi un rôle clé dans la gestion du poids. "
      },
      {
        id: "3detox",
        subTitle: "Dites adieu aux ballonnements avec notre détox’",
        text: "En rééquilibrant votre système digestif, notre produit diminue les ballonnements, les gaz, la constipation et la diarrhée."
      },
      {
        id: "4detox",
        subTitle: "Agissez pour votre peau",
        text: "L’élimination des toxines contribue à réduire la cellulite, vous offrant ainsi une silhouette plus harmonieuse."
      },
      {
        id: "5detox",
        subTitle: "Ressourcez-vous et faites le plein d'énergie",
        text: "Notre détox’ booste l'énergie naturelle de votre corps, vous permettant ainsi de retrouver une vitalité et un bien-être général. Vous vous sentirez revitalisé(e), prêt(e) à faire face aux défis quotidiens avec une énergie renouvelée."
      },
      {
        id: "6detox",
        subTitle: "Préparez-vous à atteindre votre objectif minceur",
        text: "Optez pour notre détox’, c’est choisir un produit naturel, efficace et révolutionnaire conçu pour vous aider à atteindre vos objectifs de perte de poids tout en favorisant un bien-être optimal."
      },
      {
        id: "7detox",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "8detox",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "detox0",
        link: "goutteMinceur",
        pictureLove: "/img/jpg/product/goutteMinceur.jpg",
        textLove:
          "Grâce à nos gouttes super puissantes, vous allez enfin dire adieu aux effets yoyo et accueillir une silhouette épanouie. Préparez-vous à atteindre vos objectifs de poids et à vous sentir incroyable dans votre corps ! Faites partie de notre communauté de succès et embarquez pour un voyage vers une nouvelle version de vous-même ! Fini les privations alimentaires et les exercices intenses, notre solution vous garantit une expérience sans frustration ni effort."
      },
      {
        id: "detox1",
        link: "bienEtreInterieur",
        pictureLove: "/img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Le microbiote, souvent appelé le deuxième cerveau humain, joue un rôle crucial dans notre bien-être. Une bonne digestion est essentielle pour se sentir bien. Si vous rencontrez des déséquilibres dans votre système digestif et intestinal, nos pré-probiotiques sont conçus pour réguler efficacement ces problèmes afin de retrouver confort et bien-être au quotidien."
      },
      {
        id: "detox2",
        link: "gg",
        pictureLove: "/img/jpg/product/GG.jpg",
        textLove:
          "Notre produit est un concentré de légumes et de vitamines essentiels, spécialement conçu pour fournir à votre corps les nutriments dont il a besoin. En optant pour notre détox végétale, vous donnez à votre corps une véritable bouffée d'énergie et de vitalité. Nourrissez votre corps en profondeur avec les bienfaits naturels des légumes et des vitamines, pour une expérience de détoxification incomparable."
      },
      {
        id: "detox3",
        link: "boosterEnergie",
        pictureLove: "/img/jpg/product/boosterEnergie.jpg",
        textLove:
          "Notre booster d'énergie est bien plus qu'un simple complément, il dynamise votre corps en stimulant votre énergie naturelle pour une vitalité renouvelée tout au long de la journée. Sa formule unique combat efficacement la fatigue et favorise un sommeil réparateur, vous permettant de vous réveiller frais et revitalisé chaque matin. En favorisant la bonne humeur et en réduisant le stress, il vous aide à aborder les défis quotidiens avec un état d'esprit positif et détendu. De plus, il est efficace pour vous aider à atteindre vos objectifs de gestion du poids en augmentant la combustion des graisses de 17%."
      },
      {
        id: "detox4",
        link: "pn",
        pictureLove: "/img/jpg/product/PN.jpg",
        textLove:
          "Notre produit est conçu pour faciliter la gestion du poids en substituant vos repas tout en maintenant un équilibre nutritionnel optimal. Il contient des protéines végétales de haute qualité pour une digestion améliorée et une meilleure absorption des nutriments essentiels, favorisant ainsi une perte de poids saine et durable. En ajoutant notre produit à votre routine quotidienne, vous bénéficierez d'un véritable boost d'énergie qui vous accompagnera tout au long de la journée, vous permettant d'aborder vos activités avec vitalité et enthousiasme pour vous sentir pleinement épanoui(e)."
      },
      {
        id: "detox5",
        link: "collagenoni",
        pictureLove: "/img/jpg/product/collagenoni.jpg",
        textLove:
          "Le Noni est un puissant allié pour la gestion du poids grâce à son effet sur la combustion des graisses. Il agit également comme un régulateur pour le système digestif, favorisant une digestion harmonieuse. Ses propriétés antioxydantes renforcent le système immunitaire et protègent les cellules contre le stress oxydatif, améliorant ainsi la santé globale. En augmentant l'énergie métabolique, le Noni offre une vitalité renouvelée au quotidien, en faisant un super aliment aux bienfaits étendus même sur les maladies chroniques."
      }
    ]
  },
  firstCategory: [getCategoryById("0GestionDuPoids").name],
  secondCategory: [
    getSecondCategoryById("0GestionDuPoids0Detoxification").text
  ],
  picture: "/img/jpg/product/detox.jpg",
  picture264: "/img/jpg/product/detox264.jpg",
  picture400: "/img/jpg/product/detox400.jpg",
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
      id: "DeiS0",
      title: "Gestion du poids",
      text: (
        <ul>
          <li>Nettoie et détoxifie le corps</li>
        </ul>
      )
    },
    {
      id: "DeiS1",
      title: "Santé",
      text: (
        <ul>
          <li>Protège les cellules contre le stress oxydatif</li>
          <li>Permet un fonctionnement normal de la thyroïde</li>
          <li>Maintient les muqueuses normales</li>
          <li>Renforce le système immunitaire</li>
          <li>
            Réduit les soucis de digestion, de constipation, de diarrhée, de
            ballonnements, de gaz
          </li>
        </ul>
      )
    },
    {
      id: "DeiS2",
      title: "Bien-être",
      text: (
        <ul>
          <li>Atténue la cellulite, qu'elle soit adipeuse ou aqueuse</li>
          <li>
            Aide à lutter contre l'acné,les vergetures, la cellulite, les
            varices, l'eczéma, le psoriasis
          </li>
          <li>Stimule l'énergie physique</li>
          <li>Favorise un sommeil réparateur de qualité</li>
        </ul>
      )
    }
  ]
};
