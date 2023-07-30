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
        text: [
          "Notre produit agit comme un véritable agent de détoxification, absorbant les toxines présentes dans votre corps et les transportant hors de celui-ci. Ces toxines, issues de votre métabolisme et de votre environnement (polluants aériens, alimentation…), s'accumulent dans tout votre corps et sont transportées vers les cinq organes émonctoires:",
          "- la peau",
          "- le foie",
          "- les reins",
          "- les poumons",
          "- les intestins",
          " Lorsque votre organisme est surchargé de toxines, des problèmes de santé peuvent survenir. En optant pour notre produit, vous permettez à votre corps de se débarrasser de ces toxines, favorisant ainsi une gestion du poids plus efficace et une meilleure santé globale."
        ],
        picture450: "./img/jpg/product/DetoxIllusText450.jpg",
        picture675: "./img/jpg/product/DetoxIllusText675.jpg",
        picture900: "./img/jpg/product/DetoxIllusText900.jpg"
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
        id: "DeGoutteMinceur0",
        pictureLove: "./img/jpg/product/goutteMinceur.jpg",
        textLove:
          "Grâce à nos gouttes super puissantes, vous allez enfin dire adieu aux effets yoyo et accueillir une silhouette épanouie. Préparez-vous à atteindre vos objectifs de poids et à vous sentir incroyable dans votre corps ! Faites partie de notre communauté de succès et embarquez pour un voyage vers une nouvelle version de vous-même ! Fini les privations alimentaires et les exercices intenses, notre solution vous garantit une expérience sans frustration ni effort."
      },
      {
        id: "DeBienEtreInterieur1",
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Le microbiote, souvent appelé le deuxième cerveau humain, joue un rôle crucial dans notre bien-être. Une bonne digestion est essentielle pour se sentir bien. Si vous rencontrez des déséquilibres dans votre système digestif et intestinal, nos pré-probiotiques sont conçus pour réguler efficacement ces problèmes afin de retrouver confort et bien-être au quotidien."
      },
      {
        id: "DeGG2",
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Notre produit est un concentré de légumes et de vitamines essentiels, spécialement conçu pour fournir à votre corps les nutriments dont il a besoin. En optant pour notre détox végétale, vous donnez à votre corps une véritable bouffée d'énergie et de vitalité. Nourrissez votre corps en profondeur avec les bienfaits naturels des légumes et des vitamines, pour une expérience de détoxification incomparable."
      },
      {
        id: "DeGG2",
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Notre produit est conçu pour faciliter la gestion du poids en substituant vos repas tout en maintenant un équilibre nutritionnel optimal. Il contient des protéines végétales de haute qualité pour une digestion améliorée et une meilleure absorption des nutriments essentiels, favorisant ainsi une perte de poids saine et durable. En ajoutant notre produit à votre routine quotidienne, vous bénéficierez d'un véritable boost d'énergie qui vous accompagnera tout au long de la journée, vous permettant d'aborder vos activités avec vitalité et enthousiasme pour vous sentir pleinement épanoui(e)."
      },
      {
        id: "DeGG2",
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Le Noni est un puissant allié pour la gestion du poids grâce à son effet sur la combustion des graisses. Il agit également comme un régulateur pour le système digestif, favorisant une digestion harmonieuse. Ses propriétés antioxydantes renforcent le système immunitaire et protègent les cellules contre le stress oxydatif, améliorant ainsi la santé globale. En augmentant l'énergie métabolique, le Noni offre une vitalité renouvelée au quotidien, en faisant un super aliment aux bienfaits étendus même sur les maladies chroniques."
      },
      {
        id: "DeGG2",
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Notre produit est un concentré de légumes et de vitamines essentiels, spécialement conçu pour fournir à votre corps les nutriments dont il a besoin. En optant pour notre détox végétale, vous donnez à votre corps une véritable bouffée d'énergie et de vitalité. Nourrissez votre corps en profondeur avec les bienfaits naturels des légumes et des vitamines, pour une expérience de détoxification incomparable."
      }
    ]
  },
  firstCategory: [getCategoryById("0GestionDuPoids").name],
  secondCategory: [
    getSecondCategoryById("0GestionDuPoids0Detoxification").text
  ],
  picture: "./img/jpg/product/detox.jpg",
  colors: {
    textColor: "#7e1450",
    titleColorInSummary: "#4f0d32",
    bgColorInSummary: "#c37ea5"
  },
  inSummary: [
    {
      id: "DeiS0",
      title: "Aide à la perte de poids",
      text: "Nettoie et détoxifie le corps"
    },
    {
      id: "DeiS1",
      title: "Problèmes cutanés",
      text: "Améliore l’acné, les vergetures, la cellulite, les varices, l’eczéma et le psoriasis."
    },
    {
      id: "DeiS2",
      title: "Santé",
      text: "Booste le système immunitaire de par son action de rééquilibrage de l’organisme."
    },
    {
      id: "DeiS3",
      title: "Troubles  ",
      text: "Réduit les soucis de digestion, de constipation, de diarrhée, de ballonnements, de gaz"
    },
    {
      id: "DeiS4",
      title: "Bien-être",
      text: (
        <ul>
          <li>Redonne une énergie physique</li>
          <li>Améliore l’humeur</li>
          <li>Lutte contre la fatigue</li>
          <li>Favorise un sommeil de qualité</li>
        </ul>
      )
    }
  ]
};
