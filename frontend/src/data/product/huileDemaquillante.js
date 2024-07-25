import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const huileDemaquillante = {
  nameProduct: "Huile Démaquillante",
  id: "huileDemaquillante",

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
        picture450: "/img/jpg/product/huileDemaquillanteIllusText450.jpg",
        picture225: "/img/jpg/product/huileDemaquillanteIllusText225.jpg",
        picture675: "/img/jpg/product/huileDemaquillanteIllusText675.jpg",
        picture900: "/img/jpg/product/huileDemaquillanteIllusText900.jpg",
        picturefb: "/img/jpg/product/huileDemaquillanteIllusText1524.jpg"
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
        pictureLove: "/img/jpg/product/decontaminant.jpg",
        pictureLove264: "/img/jpg/product/decontaminant264.jpg",
        pictureLove400: "/img/jpg/product/decontaminant400.jpg",
        textLove:
          "Notre produit doux et efficace élimine les peaux mortes et les impuretés pour révéler un teint frais et radieux. Sa formule spécialement conçue resserre les pores, affine la texture et offre une peau plus lisse et uniforme. Notre décontaminant cible les points noirs, réduit les imperfections et les tâches pigmentaires pour un teint éclatant. De plus, il apaise les yeux fatigués, offrant un regard reposé et éclatant. Testé sous contrôle dermatologique, notre produit convient à tous les types de peau."
      },
      {
        id: "huileDemaquillante1",
        pictureLove: "/img/jpg/product/masqueNuit.jpg",
        pictureLove264: "/img/jpg/product/masqueNuit264.jpg",
        pictureLove400: "/img/jpg/product/masqueNuit400.jpg",
        textLove:
          "Notre masque de nuit est révolutionnaire car il utilise la technologie Breathable Barrier®, cliniquement prouvée pour améliorer visiblement la santé de votre peau. Testé sous contrôle dermatologique, il est qualifié de plus efficace que ses concurrents en vente libre. Grâce à ses propriétés antioxydantes et régénératrices, il lutte contre les signes du vieillissement, réduisant rides et ridules pour une peau plus jeune et ferme. Sa formule avancée améliore les imperfections, resserre les pores et améliore la texture pour une peau saine et éclatante, notamment pour les problèmes d'acné."
      },
      {
        id: "huileDemaquillante2",
        pictureLove: "/img/jpg/product/cremeNight.jpg",
        pictureLove264: "/img/jpg/product/cremeNight264.jpg",
        pictureLove400: "/img/jpg/product/cremeNight400.jpg",
        textLove:
          "Notre crème de nuit offre une régénération cellulaire complète en stimulant et restaurant le processus cellulaire de votre peau pendant la nuit. Grâce à sa technologie liposomale avancée, elle hydrate en profondeur, lissant les ridules et les signes de relâchement cutané. Ciblant les tâches et les décolorations, elle estompe progressivement les imperfections pour un teint uniforme et éclatant. Enrichie d'actifs antioxydants, elle lutte contre les signes visibles de l'âge, vous offrant une peau jeune et éclatante."
      },
      {
        id: "huileDemaquillante3",
        pictureLove: "/img/jpg/product/volumateurCils.jpg",
        pictureLove264: "/img/jpg/product/volumateurCils264.jpg",
        pictureLove400: "/img/jpg/product/volumateurCils400.jpg",
        textLove:
          "Notre sérum enrichi d'agents hydratants est essentiel pour obtenir des cils de biche naturels. En renforçant leur structure, il protège vos cils des dommages et de la casse, tout en stimulant leur croissance pour des cils plus épais, forts et longs. Notre formule sécurisée, testée sous contrôle dermatologique et ophtalmologique, prend soin de vos cils en profondeur, les nourrissant et les protégeant des agressions environnementales."
      },
      {
        id: "huileDemaquillante4",
        pictureLove: "/img/jpg/product/gelNettoyant.jpg",
        pictureLove264: "/img/jpg/product/gelNettoyant264.jpg",
        pictureLove400: "/img/jpg/product/gelNettoyant400.jpg",
        textLove:
          "Notre produit de soin polyvalent chouchoute votre peau après une journée bien remplie. Il élimine en douceur les saletés, le maquillage et les impuretés accumulées, laissant votre peau fraîche et prête à se régénérer pendant la nuit. Sa formule hydratante offre une peau douce et veloutée, sans tiraillement, en respectant l'équilibre cutané et préservant la barrière naturelle pour une peau saine et protégée. Avec ses actifs ciblés, il combat les imperfections et prévient les éruptions cutanées, vous offrant une peau nette et purifiée. Testé sous contrôle dermatologique, notre produit est sûr et efficace pour tous les types de peau."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "/img/jpg/product/huileDemaquillante.jpg",
  picture264: "/img/jpg/product/huileDemaquillante264.jpg",
  picture400: "/img/jpg/product/huileDemaquillante400.jpg",
  colors: {
    textColor: "#42848e",
    titleColorInSummary: "#42848e",
    linkTextColor: "#42848e",
    bgColorInSummary0: "#87b6bd",
    bgColorInSummary1: "#eaf3f4",
    linearGradient0: "linear-gradient(105deg, #87b6bd, #b8f4ff)",
    linearGradient1: "linear-gradient(to right, #a9cbd0, #eaf3f4)",
    shadowColor: "#eaf3f4"
  },
  inSummary: [
    {
      id: "HDiS0",
      title: "Beauté",
      text: (
        <ul>
          <li>
            Nettoie les saletés, les impuretés, les contaminants de la journée
          </li>
          <li>Démaquille</li>
          <li>Hydrate et adoucit la peau tout en la décontaminant</li>
        </ul>
      )
    }
  ]
};
