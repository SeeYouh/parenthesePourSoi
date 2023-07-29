import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const huileDemaquillante = {
  nameProduct: "Huile Démaquillante",  id: "huileDemaquillante",

  summary: {
    title: "Un seul produit pour nettoyer, démaquiller et décontaminer",
    paragraph: [
      {
        id: "0huileDemaquillante",
        subTitle: "Nettoyez en profondeur",
        text: "Notre huile démaquillante agit en profondeur pour débarrasser votre peau des saletés, des impuretés et des polluants accumulés tout au long de la journée. Sa formule douce mais efficace pénètre en profondeur dans les pores pour éliminer en douceur les résidus de maquillage, laissant une sensation de fraîcheur et de revitalisation. Enrichie d'agents hydratants essentiels, cette huile offre à votre peau une hydratation bienfaisante, lui redonnant toute sa souplesse et son éclat naturel. Fini les sensations de tiraillement, votre peau est parfaitement hydratée et apaisée, prête à affronter une nouvelle journée."
      },
      {
        id: "1huileDemaquillante",
        subTitle: "Décontaminez votre visage",
        text: [
          "Notre produit est le compagnon idéal pour un démaquillage doux et efficace. Sa texture soyeuse et légère glisse en douceur sur votre peau, éliminant sans effort les maquillages les plus résistants. Sans agresser votre peau délicate, il se charge de dissoudre les impuretés et le maquillage, laissant votre peau propre et rafraîchie. De plus, son action décontaminante contribue à éliminer les impuretés susceptibles de provoquer des problèmes cutanés, laissant votre peau débarrassée de toute impureté.",
          "Votre bien-être et la santé de votre peau sont notre priorité. C'est pourquoi nous avons opté pour une formulation dépourvue d'huile minérale, qui peut obstruer les pores et causer plus de mal que de bien. Au contraire, notre produit est élaboré avec des huiles de plantes et de fruits aux propriétés bénéfiques. Ces ingrédients naturels sont doux pour votre peau tout en étant incroyablement efficaces pour éliminer les impuretés et hydrater en profondeur. Votre peau appréciera ce doux soin d'origine naturelle, lui offrant une expérience démaquillante optimale sans aucun compromis sur l'efficacité."
        ],
        picture450: "./img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "./img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "./img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        id: "2huileDemaquillante",
        subTitle: "Revitalisez et apaisez votre peau",
        text: "Notre huile démaquillante est bien plus qu'un simple produit de nettoyage. C'est un soin délicat et performant qui agit en profondeur pour libérer votre peau des impuretés, tout en lui apportant une hydratation bienfaisante. Grâce à sa formule douce et efficace, votre peau est fraîche, revitalisée et apaisée, prête à révéler tout son éclat naturel. Avec des ingrédients naturels et une attention particulière à la qualité, notre produit offre une expérience de démaquillage optimale, sans aucun compromis sur le respect de votre peau. Offrez à votre peau le soin qu'elle mérite avec notre huile démaquillante de qualité."
      },
      {
        id: "3huileDemaquillante",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4huileDemaquillante",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "huileDemaquillante0",
        pictureLove: "./img/jpg/product/decontaminant.jpg",
        textLove:
          "Découvrez notre produit doux et efficace pour une peau resplendissante de beauté. En éliminant les peaux mortes et les impuretés, il révèle un teint frais et radieux. Sa formule spécialement conçue resserre les pores, affine la texture et offre une peau plus lisse et uniforme. Notre décontaminant cible les points noirs, réduit les imperfections et les tâches pigmentaires pour un teint éclatant. De plus, il apaise les yeux fatigués, offrant un regard reposé et éclatant. Testé sous contrôle dermatologique, notre produit convient à tous les types de peau."
      },
      {
        id: "huileDemaquillante1",
        pictureLove: "./img/jpg/product/masqueNuit.jpg",
        textLove:
          "Découvrez notre masque de nuit révolutionnaire utilisant la technologie Breathable Barrier®, cliniquement prouvée pour améliorer visiblement la santé de votre peau. Testé sous contrôle dermatologique, il est qualifié de plus efficace que ses concurrents en vente libre. Grâce à ses propriétés antioxydantes et régénératrices, il lutte contre les signes du vieillissement, réduisant rides et ridules pour une peau plus jeune et ferme. Sa formule avancée améliore les imperfections, resserre les pores et améliore la texture pour une peau saine et éclatante, notamment pour les problèmes d'acné."
      },
      {
        id: "huileDemaquillante2",
        pictureLove: "./img/jpg/product/cremeNight.jpg",
        textLove:
          "Découvrez notre crème de nuit révolutionnaire qui offre une régénération cellulaire complète en stimulant et restaurant le processus cellulaire de votre peau pendant la nuit. Grâce à sa technologie liposomale avancée, elle hydrate en profondeur, lissant les ridules et les signes de relâchement cutané. Ciblant les tâches et les décolorations, elle estompe progressivement les imperfections pour un teint uniforme et éclatant. Enrichie d'actifs antioxydants, elle lutte contre les signes visibles de l'âge, vous offrant une peau jeune et éclatante."
      },
      {
        id: "huileDemaquillante3",
        pictureLove: "./img/jpg/product/volumateurCils.jpg",
        textLove:
          "Optez pour notre sérum enrichi d'agents hydratants essentiels pour obtenir des cils de biche naturels. En renforçant leur structure, il protège vos cils des dommages et de la casse, tout en stimulant leur croissance pour des cils plus épais, forts et longs. Notre formule sécurisée, testée sous contrôle dermatologique et ophtalmologique, prend soin de vos cils en profondeur, les nourrissant et les protégeant des agressions environnementales."
      },
      {
        id: "huileDemaquillante4",
        pictureLove: "./img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Découvrez notre produit de soin polyvalent pour chouchouter votre peau après une journée bien remplie. Il élimine en douceur les saletés, le maquillage et les impuretés accumulées, laissant votre peau fraîche et prête à se régénérer pendant la nuit. Sa formule hydratante offre une peau douce et veloutée, sans tiraillement, en respectant l'équilibre cutané et préservant la barrière naturelle pour une peau saine et protégée. Avec ses actifs ciblés, il combat les imperfections et prévient les éruptions cutanées, vous offrant une peau nette et purifiée. Testé sous contrôle dermatologique, notre produit est sûr et efficace pour tous les types de peau."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "./img/jpg/product/heRafraichissant.jpg",
  colors: {
    textColor: "#30d1d9",titleColorInSummary: "",
  bgColorInSummary: "",
  
    linkTextColor: "#30d1d9"
  },
  inSummary: [
    {
      id: "HDiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "HDiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "HDiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "HDiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "HDiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
