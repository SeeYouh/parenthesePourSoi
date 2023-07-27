import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const heRafraichissant = {
  nameProduct: "HE Rafraîchissante",
  summary: {
    title: "Une huile essentielle polyvalente pour un bien-être intégral.",
    paragraph: [
      {
        subTitle: "Un stimulant pour votre esprit et un remède naturel",
        text: "Dans notre monde moderne, nous sommes constamment sollicités par des informations et des distractions. Cela peut rendre difficile le maintien d'une concentration optimale, que ce soit pour le travail, l'apprentissage ou même les tâches quotidiennes. C'est là que notre huile essentielle entre en jeu. Grâce à ses arômes délicats, elle stimule votre esprit, favorisant une meilleure concentration et une clarté mentale accrue. Quelques gouttes dans un diffuseur ou sur un mouchoir peuvent suffire à vous aider à rester concentré et alerte. De plus, notre huile essentielle offre un remède naturel contre les nausées et les maux de tête. Que vous soyez en voyage et que vous souffriez du mal des transports, ou que vous ayez simplement un mal de tête après une longue journée, quelques gouttes de notre huile essentielle peuvent vous offrir un soulagement rapide et efficace."
      },
      {
        subTitle: "Un confort respiratoire et cutané",
        text: "La respiration est essentielle à la vie, mais elle peut être entravée par des problèmes tels que la congestion ou les allergies. Notre huile essentielle rafraîchissante est là pour vous aider. Elle apaise les toux, dégage les voies respiratoires et procure une sensation de fraîcheur, vous permettant de respirer librement et facilement. Quelques gouttes dans un diffuseur peuvent aider à purifier l'air et à faciliter la respiration. De plus, notre huile essentielle peut aider à apaiser les démangeaisons, réduire les rougeurs et calmer les piqûres d'insectes. Elle peut être appliquée directement sur la peau ou diluée dans une huile de support pour un soulagement rapide et efficace. De plus, ses propriétés régulatrices aident à contrôler la transpiration excessive, vous permettant de vous sentir plus frais et plus confiant.",
        picture450: "./img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "./img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "./img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        subTitle: "Un soulagement pour les douleurs et les tensions",
        text: "Le stress et la tension peuvent s'accumuler dans notre corps, causant des douleurs et des malaises. Notre huile essentielle peut aider à soulager ces symptômes. Qu'il s'agisse de douleurs articulaires, de tensions musculaires ou de maux de tête, quelques gouttes de notre huile essentielle peuvent aider à soulager la douleur et à favoriser la relaxation. Elle peut être massée directement sur les zones douloureuses ou utilisée dans un bain chaud pour un effet apaisant global."
      },
      {
        subTitle: "Un soutien pour les femmes ménopausées et les sportifs",
        text: "La ménopause est une étape naturelle de la vie d'une femme, mais elle peut s'accompagner de symptômes inconfortables tels que les bouffées de chaleur. Notre huile essentielle peut aider à réduire ces symptômes, procurant un soulagement naturel et un confort pendant cette étape de la vie. Quelques gouttes sur un mouchoir ou dans un diffuseur peuvent aider à apaiser les bouffées de chaleur et à favoriser un sentiment de bien-être. De plus, que vous soyez un athlète professionnel ou que vous aimiez simplement faire de l'exercice pour rester en forme, notre huile essentielle peut aider à soulager les douleurs musculaires et à favoriser une récupération plus rapide. Elle peut être appliquée directement sur les muscles endoloris ou utilisée dans un bain chaud après l'exercice pour un effet apaisant."
      },
      {
        subTitle: "Revitalisez votre quotidien avec notre huile essentielle",
        text: "Notre huile essentielle offre une multitude de bienfaits pour votre bien-être. Que vous cherchiez à améliorer votre concentration, à soulager des douleurs, à respirer plus facilement ou à apaiser votre peau, elle peut vous aider à atteindre vos objectifs. Profitez des bienfaits variés de cette huile essentielle pour revitaliser votre quotidien et embrasser une vie plus épanouissante. Quelques gouttes peuvent faire une grande différence dans votre journée, vous aidant à vous sentir plus équilibré, plus concentré et plus en paix."
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
        id: "HErafraichissant0",
        pictureLove: "./img/jpg/product/PB.jpg",
        textLove:
          "Je conseille vivement aux sportifs d'explorer notre produit destiné à la récupération musculaire et à l'amélioration des performances, qui offre une énergie stimulante à base de cacao."
      },
      {
        id: "HErafraichissant1",
        pictureLove: "./img/jpg/product/mereDeTous.jpg",
        textLove:
          "En ce qui concerne les tendinites et les douleurs associées à l'exercice physique, cette huile se révèle être un allié précieux."
      },
      {
        id: "HErafraichissant2",
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Elle s'associe parfaitement à notre anti-inflammatoire naturel, offrant ainsi une solution complète pour gérer les douleurs liées à l'activité physique."
      },
      {
        id: "HErafraichissant3",
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "En complément, nos produits spécifiques en minéraux et en vitamines, soigneusement sélectionnés pour leurs vertus, peuvent renforcer l'efficacité de cette combinaison."
      }
    ]
  },
  firstCategory: [getCategoryById("4HuilesEssentielles").name],
  secondCategory: [getSecondCategoryById("4HuilesEssentielles0MieuxEtre").text],
  picture: "./img/jpg/product/heRafraichissant.jpg",
  colors: {
    textColor: "#30d1d9"
  }
};
