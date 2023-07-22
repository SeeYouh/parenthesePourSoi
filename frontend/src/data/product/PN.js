import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const PN = {
  nameProduct: "PN",
  summary: {
    title: "Un substitut de repas complet.",
    paragraph: [
      {
        subTitle:
          "Un booster de performances sportives : Votre complice dans la vie active",
        text: "Que vous soyez un athlète chevronné, un adepte du fitness ou une personne dynamique, cette formule est l'ajout idéal à votre routine quotidienne. Elle a été spécifiquement conçue pour augmenter votre endurance, tout en accélérant le rétablissement de vos muscles après un effort physique. L'effet ? Vous pouvez vous adonner à des entraînements plus intensifs et plus fréquents, franchissant ainsi de nouvelles barrières de performances. Expérimentez la satisfaction de dépasser vos limites et d'atteindre de nouveaux sommets, avec le soutien de cette formule révolutionnaire."
      },
      {
        subTitle:
          "Un allié dans la gestion du poids : Transformez votre silhouette naturellement",
        text: "Si la maîtrise de votre poids fait partie de vos préoccupations, cette composition est là pour vous aider. Dotée d'une capacité unique à agir comme un puissant coupe-faim, elle aide à contrôler vos envies tout en réduisant l'apport calorique. En prime, elle stimule la combustion des graisses, vous permettant de remodeler votre silhouette de manière naturelle et efficace. Son autre atout ? Elle contient un sucre naturel à faible indice glycémique, fournissant une énergie constante sans les indésirables pics de glycémie. Imaginez atteindre et maintenir votre poids idéal avec moins d'efforts et une plus grande satisfaction."
      },
      {
        subTitle: "Régénération des tissus : Un corps sain et résilient",
        text: "L'élaboration de cette composition a été faite avec soin, dans le but précis de favoriser la régénération et la réparation des tissus. Que vous soyez en phase de convalescence ou simplement désireux de renforcer votre corps, elle peut vous accompagner dans cet objectif. De plus, elle soutient une digestion optimale en atténuant les irritations intestinales et en favorisant une digestion saine. Et ce n'est pas tout : elle contribue également à la santé cardiovasculaire, se traduisant par un bien-être général renforcé."
      },
      {
        subTitle: "",
        text: "Explorez tous les bienfaits de ce produits et ne laissez pas les obstacles entraver vos objectifs de bien-être."
      },
      {
        subTitle: "Énergie et bien-être émotionnel : Un soutien global",
        text: "Dites adieu aux fringales salées qui sont omniprésentes ! Notre produit innovant est spécialement formulé pour réduire ces envies irrésistibles. En le choisissant, vous vous donnez toutes les chances de réussir votre gestion du poids de manière saine et durable."
      },
      {
        subTitle: "",
        text: "Cette formule ne se limite pas à améliorer votre bien-être physique. Elle a été conçue pour stimuler également votre bien-être émotionnel, vous offrant une énergie revitalisante qui rayonne de l'intérieur. Imaginez démarrer chaque journée avec un regain d'énergie, un esprit plus alerte et un sentiment de sérénité intérieure."
      },
      {
        text: "Explorez tous les avantages extraordinaires de cette composition innovante et réveillez votre plein potentiel. Offrez à votre corps et à votre esprit le soutien dont ils ont besoin pour prospérer. Faites le choix de l'optimisation, optez pour cette formule spéciale."
      },
      {
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        pictureLove: "./img/jpg/product/PB.jpg",
        textLove:
          "Pour les journées chargées où chaque minute compte, la combinaison du PB et du PN est votre allié ultime. Le PB vous offre un regain d'énergie instantané, tandis que le PN assure une libération énergétique stable et durable. Ensemble, ils garantissent une vigilance et une productivité maximales, même lorsqu'un repas complet n'est pas à l'ordre du jour. Intrigué ? Découvrez-en plus sur le PN et son alliance parfaite avec le PB."
      },
      {
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Pour ceux dont l'alimentation est pauvre en légumes, la solution est à portée de main. La détox végétale est l'alliée idéale du PB, vous apportant les nutriments précieux que seuls les légumes peuvent offrir. C'est une combinaison harmonieuse qui veille à ce que votre corps reçoive toute la nutrition dont il a besoin. Envie d'en savoir plus ? Découvrez les merveilles de la détox végétale et comment elle complète parfaitement le PB."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
  picture: "./img/jpg/product/PN.jpg",
  colors: {
    textColor: "#e58000"
  }
};
