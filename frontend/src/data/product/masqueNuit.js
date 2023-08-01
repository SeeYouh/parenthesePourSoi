import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const masqueNuit = {
  nameProduct: "Masque de nuit",
  id: "masqueNuit",

  summary: {
    title:
      "Découvrez ce masque de nuit utilisant la technologie Breathable Barrier®",
    paragraph: [
      {
        id: "0masqueNuit",
        subTitle: "Faites nous confiance",
        text: "Plongez dans une expérience de soin inédite avec notre masque de nuit utilisant la technologie Breathable Barrier®. Conçu par des experts biomédicaux et soutenu par des études de recherche dermatologique, ce produit innovant est qualifié de plus efficace que ses concurrents en vente libre. Laissez-vous séduire par ses bienfaits exceptionnels pour votre peau et préparez-vous à révéler une beauté éclatante."
      },
      {
        id: "1masqueNuit",
        subTitle: "Améliorez l’apparence de votre peau",
        text: [
          "Notre masque de nuit est bien plus qu'un simple soin. Grâce à ses propriétés antioxydantes et régénératrices, il devient votre allié précieux dans la lutte contre les signes du vieillissement. Au fil des utilisations, vous constaterez une réduction visible de l'apparence des rides et des ridules, laissant place à une peau plus jeune, plus lisse et plus ferme. Votre teint retrouve son éclat naturel, vous offrant une confiance renouvelée.",
          "Notre formule avancée travaille en profondeur pour améliorer les imperfections de la peau, vous offrant ainsi une peau plus saine et éclatante. Ce masque agit sur les zones du visage, des mains, du cou et de la poitrine pour resserrer les pores et améliorer la texture cutanée. Il est particulièrement efficace pour lutter contre les problèmes cutanés tels que l'acné, vous laissant avec une peau lisse, uniforme et rayonnante."
        ],
        picture450: "/img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "/img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "/img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        id: "2masqueNuit",
        subTitle: "Hydratez votre peau",
        text: "Laissez ce masque de nuit prendre soin de votre peau pendant que vous dormez. Sa formule avancée offre une hydratation intense et une sensation de douceur incomparable. Fini les tiraillements et les peaux sèches, bonjour à une peau parfaitement hydratée et soyeuse. Au réveil, vous serez enchanté par l'effet resplendissant sur votre peau."
      },
      {
        id: "3masqueNuit",
        subTitle: "Laissez-vous choyer",
        text: "Préparez-vous à découvrir une révolution nocturne pour votre peau avec notre masque Breathable Barrier®. Cliniquement prouvé pour améliorer visiblement la santé de votre peau, ce masque est un véritable joyau de bienfaits. Laissez ses propriétés antioxydantes et régénératrices combattre les signes du vieillissement, tandis qu'il améliore l'apparence de votre peau pour la rendre plus saine et éclatante. Nourrissez votre peau en profondeur et réveillez-vous chaque matin avec une peau revitalisée et resplendissante. Ne tardez plus, offrez-vous une beauté épanouie et éclatante dès ce soir !"
      },
      {
        id: "4masqueNuit",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5masqueNuit",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "masqueNuit0",
        pictureLove: "/img/jpg/product/decontaminant.jpg",
        textLove:
          "Notre produit doux et efficace révèle une peau resplendissante de beauté en éliminant les peaux mortes et les impuretés pour un teint frais et radieux. Spécialement conçu pour resserrer les pores et affiner la texture de la peau, il offre une apparence plus lisse et uniforme. Notre décontaminant cible les points noirs, réduit les imperfections et les tâches pigmentaires pour un teint éclatant. De plus, notre formule apaise les yeux fatigués, offrant un regard reposé et éclatant. Testé sous contrôle dermatologique, il convient à tous les types de peau."
      },
      {
        id: "masqueNuit1",
        pictureLove: "/img/jpg/product/cremeDay.jpg",
        textLove:
          "Découvrez notre crème hydratante aux nombreux avantages : apaisante, elle laisse la peau souple et éclatante. Sa formule riche combat la sécheresse en maintenant une hydratation optimale et renforce la barrière cutanée pour une meilleure protection contre les agressions extérieures. En ciblant les tâches sombres, elle éclaircit et unifie le teint."
      },
      {
        id: "masqueNuit2",
        pictureLove: "/img/jpg/product/cremeNight.jpg",
        textLove:
          "Découvrez notre crème de nuit qui stimule et régénère complètement votre peau pendant le sommeil. Grâce à sa technologie liposomale avancée, elle hydrate en profondeur, lissant les ridules et le relâchement cutané. En ciblant les tâches et les décolorations, elle réduit progressivement les imperfections pour un teint uniforme et éclatant. Avec ses actifs antioxydants, elle lutte efficacement contre les signes visibles de l'âge, vous offrant une peau jeune et éclatante."
      },
      {
        id: "masqueNuit3",
        pictureLove: "/img/jpg/product/volumateurCils.jpg",
        textLove:
          "Obtenez des cils de biche naturels grâce à notre sérum enrichi d'agents hydratants essentiels. En renforçant leur structure, il protège vos cils des dommages et de la casse. Stimulant leur croissance, il vous offre des cils plus épais, forts et longs pour un regard irrésistible. Notre formule sécurisée, testée sous contrôle dermatologique et ophtalmologique, prend soin de vos cils en profondeur, les nourrissant et les protégeant des agressions environnementales. Découvrez des cils magnifiés et un regard captivant qui ne passera pas inaperçu !"
      },
      {
        id: "masqueNuit4",
        pictureLove: "/img/jpg/product/baumesLevres.jpg",
        textLove:
          "Plongez dans une véritable oasis de douceur et de protection avec notre baume à lèvres enrichi d'ingrédients naturels. Dès la première application, vos lèvres ressentiront un soulagement immédiat et seront enveloppées d'un voile doux et soyeux, offrant une hydratation durable pour un sourire éclatant de santé. Sa formule avancée forme une barrière protectrice contre les éléments extérieurs, préservant vos lèvres impeccablement. Prévenant l'apparition des lèvres sèches et des gerçures, notre baume répare et renforce vos lèvres, pour un confort retrouvé jour après jour. Nourrissez vos lèvres avec le pouvoir de la nature."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/heRafraichissant.jpg",
  colors: {
    textColor: "#30d1d9",
    titleColorInSummary: "",
    bgColorInSummary: ""
  },
  inSummary: [
    {
      id: "MNiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "MNiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "MNiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "MNiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "MNiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
