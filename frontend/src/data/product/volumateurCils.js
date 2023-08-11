import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const volumateurCils = {
  nameProduct: "Volumateur de Cils",
  id: "volumateurCils",

  summary: {
    title: "Des yeux de biche naturels !",
    paragraph: [
      {
        id: "0volumateurCils",
        subTitle: "Protégez et renforcez vos cils",
        text: "Notre sérum est le secret pour des cils de biche naturels et en bonne santé. Enrichi d'agents hydratants essentiels, il agit comme un bouclier protecteur pour vos cils, les préservant des dommages et de la casse. En renforçant la structure de vos cils, il les rend plus résistants aux agressions extérieures, leur permettant de rester abondants et bien enracinés. Vous pourrez ainsi dire adieu aux cils fragiles et fragilisés et accueillir des cils en pleine forme."
      },
      {
        id: "1volumateurCils",
        subTitle: "Soignez vos cils en profondeur",
        text: [
          "Vous rêvez de cils épais, forts et longs ?",
          "Notre sérum est le coup de pouce dont vos cils ont besoin pour briller de mille feux. En stimulant la croissance des cils, il vous offre des cils plus fournis, plus résistants et plus longs. Avec notre sérum, vos cils paraîtront plus épais et plus denses, pour un regard irrésistible qui attirera tous les regards.",
          "Doté d'ingrédients bénéfiques, notre sérum prend soin de vos cils en profondeur. Il leur apporte les nutriments essentiels pour les nourrir et les renforcer, leur redonnant force et vitalité. De plus, il forme une barrière protectrice contre les agressions environnementales qui pourraient les affaiblir. Vous pouvez compter sur notre sérum pour chouchouter vos cils et les rendre plus éclatants que jamais."
        ],
        picture450: "/img/jpg/product/volumateurCilsIllusText450.jpg",
        picture675: "/img/jpg/product/volumateurCilsIllusText675.jpg",
        picture900: "/img/jpg/product/volumateurCilsIllusText900.jpg"
      },
      {
        id: "2volumateurCils",
        subTitle: "Faites-nous confiance",
        text: "Avec notre sérum pour cils, découvrez le secret pour des cils sublimes et résistants. En protégeant et renforçant vos cils, il leur offre une nouvelle vitalité et les aide à pousser plus longtemps et plus épais. Nourris en profondeur, vos cils seront en pleine santé, prêts à sublimer votre regard et à vous offrir des yeux de biche naturels qui captiveront tous ceux qui croisent votre regard. N'attendez plus pour révéler la beauté de vos cils avec notre sérum d'exception."
      },
      {
        id: "3volumateurCils",
        subTitle: "Sublimez votre regard",
        text: "Sublimez vos lèvres avec notre Gloss Repulpant, votre allié pour des lèvres pulpeuses, irrésistibles et d'une douceur absolue. Dites adieu aux rides et ridules, et retrouvez un sourire éclatant de jeunesse. Profitez de la sensation délicieusement fraîche dès l'application et offrez à vos lèvres la qualité et l'efficacité d'un produit approuvé par le « Good Face Project ». Ne tardez plus, offrez à vos lèvres le soin qu'elles méritent avec notre Gloss Repulpant de qualité supérieure."
      },
      {
        id: "4volumateurCils",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5volumateurCils",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "volumateur0",
        link: "huileDemaquillante",
        pictureLove: "/img/jpg/product/huileDemaquillante.jpg",
        textLove:
          "Découvrez notre huile tout-en-un pour un nettoyage profond et complet de votre peau. Elle élimine en douceur saletés, impuretés et polluants, laissant votre peau fraîche et revitalisée. Enrichie en huiles de plantes et de fruits, elle hydrate délicatement, redonnant souplesse et éclat naturel à votre peau. Notre formule agit efficacement comme démaquillant, même sur le maquillage tenace, tout en évitant les huiles minérales obstruant les pores. Testée dermatologiquement, notre huile offre une expérience de soin optimale et sûre."
      },
      {
        id: "volumateur1",
        link: "masqueNuit",
        pictureLove: "/img/jpg/product/masqueNuit.jpg",
        textLove:
          "Découvrez notre masque de nuit révolutionnaire, intégrant la technologie Breathable Barrier® qui a été cliniquement prouvée pour améliorer visiblement la santé de votre peau. Testé sous contrôle dermatologique, il surpasse ses concurrents en vente libre en termes d'efficacité. Grâce à ses propriétés antioxydantes et régénératrices, il combat les signes du vieillissement en réduisant les rides et ridules, vous offrant une peau plus jeune et plus ferme. Sa formule avancée corrige les imperfections, resserre les pores et améliore la texture, vous offrant une peau plus saine et éclatante, particulièrement pour les problèmes d'acné. Avec une hydratation intense, votre peau deviendra douce, saine et éclatante."
      },
      {
        id: "volumateur2",
        link: "cremeNight",
        pictureLove: "/img/jpg/product/cremeNight.jpg",
        textLove:
          "Découvrez notre crème de nuit qui offre une régénération cellulaire complète en stimulant et restaurant le processus cellulaire de votre peau pendant la nuit. Grâce à sa technologie liposomale avancée, elle hydrate en profondeur, lissant les ridules et les signes de relâchement cutané. Ciblant les tâches et les décolorations, elle estompe progressivement les imperfections pour un teint uniforme et éclatant. Enrichie d'actifs antioxydants, elle lutte efficacement contre les signes visibles de l'âge, vous offrant une peau jeune et éclatante."
      },
      {
        id: "volumateur3",
        link: "gelNettoyant",
        pictureLove: "/img/jpg/product/gelNettoyant.jpg",
        textLove:
          "Choisissez notre produit de soin polyvalent pour chouchouter votre peau après une journée bien remplie. Il élimine en douceur les saletés, le maquillage et les impuretés accumulées, laissant votre peau fraîche et prête à se régénérer pendant la nuit. Grâce à sa formule hydratante, votre peau sera douce et veloutée, sans tiraillement. Sa douceur respecte l'équilibre cutané, préservant la barrière naturelle pour une peau saine et protégée. Doté d'actifs ciblés, il combat les imperfections et prévient les éruptions cutanées, vous offrant une peau nette et purifiée. Testé sous contrôle dermatologique, notre produit est sûr et efficace pour tous les types de peau."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/volumateurCils.jpg",
  colors: {
    textColor: "#30d1d9",
    titleColorInSummary: "#30d1d9",
    linkTextColor: "#30d1d9",
    bgColorInSummary0: "#6edfe4",
    bgColorInSummary1: "#e6f9fa",
    linearGradient0: "linear-gradient(105deg ,#6edfe4, #f1feff)",
    linearGradient1: "linear-gradient(to right, #98e8ec, 	#e6f9fa)",
    shadowColor: "#e6f9fa"
  },
  inSummary: [
    {
      id: "VCiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "VCiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "VCiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "VCiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "VCiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
