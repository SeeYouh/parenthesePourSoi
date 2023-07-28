import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const glossRepulpant = {
  nameProduct: "Gloss repulpant",
  summary: {
    title: "Sublimez vos lèvres et offrez un sourire éblouissant",
    paragraph: [
      {
        id: "0glossRepulpant",
        subTitle: "Valorisez vos lèvres",
        text: "Découvrez notre Gloss Repulpant, un véritable concentré de soin spécialement conçu pour sublimer vos lèvres. Grâce à sa formule enrichie en actifs nourrissants et hydratants, vos lèvres seront instantanément repulpées, plus volumineuses et d'une douceur absolue. Offrez à vos lèvres l'attention qu'elles méritent et retrouvez une apparence plus jeune et lisse grâce à notre gloss magique."
      },
      {
        id: "1glossRepulpant",
        subTitle: "Prenez en soin",
        text: [
          "Grâce à sa formule enrichie en actifs nourrissants et hydratants, notre gloss agit instantanément pour repulper vos lèvres, leur offrant une apparence pulpeuse et plus volumineuse. Dites adieu aux lèvres fines et sans vie, car vous retrouverez des lèvres irrésistibles et pleines de charme qui attireront tous les regards.",
          "Nous croyons que nos lèvres méritent une attention particulière, c'est pourquoi notre gloss est spécialement conçu pour effacer les rides et les ridules autour de la bouche. En l'appliquant régulièrement, vous retrouverez des lèvres d'apparence plus jeune et lisse, pour un sourire éclatant de jeunesse qui illuminera votre visage.",
          "En plus de ses propriétés repulpantes et anti-âge, notre gloss est enrichi d'ingrédients rafraîchissants qui procurent une sensation délicieusement fraîche dès l'application. Vous apprécierez la sensation revigorante sur vos lèvres, créant une empreinte de bien-être à chaque sourire que vous partagez avec le monde.",
          "Avec notre gloss, vos lèvres seront non seulement sublimées mais également chouchoutées, vous permettant de vous sentir confiante et radieuse à chaque instant. Offrez à vos lèvres le soin qu'elles méritent et découvrez le pouvoir d'un sourire éclatant et épanoui."
        ],
        picture450: "./img/jpg/product/HErafraichssantIllusText450.jpg",
        picture675: "./img/jpg/product/HErafraichssantIllusText675.jpg",
        picture900: "./img/jpg/product/HErafraichssantIllusText900.jpg"
      },
      {
        id: "2glossRepulpant",
        subTitle: "Découvrez un produit labellisé",
        text: (
          <span>
            {
              "La qualité et l'efficacité de notre gloss sont irréprochables. Il a été rigoureusement testé sous contrôle dermatologique pour assurer une tolérance optimale sur vos lèvres délicates. Notre gloss a reçu le prestigieux label d'approbation "
            }
            <a
              className="btn btn-extLink"
              href="https://www.thegoodfaceproject.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              « Good Face Project »
            </a>
            {
              ", attestant de son engagement envers votre beauté et votre bien-être. Avec notre produit, vous pouvez être sûr de vous offrir une cure de jouvence pour vos lèvres en toute confiance."
            }
          </span>
        )
      },
      {
        id: "3glossRepulpant",
        subTitle: "Optez pour la qualité",
        text: "Sublimez vos lèvres avec notre Gloss Repulpant, votre allié pour des lèvres pulpeuses, irrésistibles et d'une douceur absolue. Dites adieu aux rides et ridules, et retrouvez un sourire éclatant de jeunesse. Profitez de la sensation délicieusement fraîche dès l'application et offrez à vos lèvres la qualité et l'efficacité d'un produit approuvé par le « Good Face Project ». Ne tardez plus, offrez à vos lèvres le soin qu'elles méritent avec notre Gloss Repulpant de qualité supérieure."
      },
      {
        id: "4glossRepulpant",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "5glossRepulpant",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "glossRepulpant0",
        pictureLove: "./img/jpg/product/baumesLevres.jpg",
        textLove:
          "Plongez dans une véritable oasis de douceur et de protection avec notre baume à lèvres enrichi d'ingrédients naturels. Dès la première application, vos lèvres ressentiront un soulagement immédiat et seront enveloppées d'un voile doux et soyeux, offrant une hydratation durable pour un sourire éclatant de santé. Sa formule avancée forme une barrière protectrice contre les éléments extérieurs, préservant vos lèvres impeccablement. Prévenant l'apparition des lèvres sèches et des gerçures, notre baume répare et renforce vos lèvres, pour un confort retrouvé jour après jour."
      },
      {
        id: "glossRepulpant1",
        pictureLove: "./img/jpg/product/dentifrice.jpg",
        textLove:
          "Pour un sourire éclatant, optez pour notre dentifrice formulé avec des ingrédients naturels de première qualité, exempts de produits chimiques agressifs. Il offre un blanchiment naturel en éliminant délicatement les tâches pour des dents éclatantes. Enrichi d'extraits apaisants et antibactériens de plantes, il préserve la santé et la vitalité de vos gencives. Grâce à l'huile essentielle de menthe poivrée, profitez d'une agréable sensation de fraîcheur et d'une haleine rafraîchie, tout en éliminant la mauvaise haleine."
      },
      {
        id: "glossRepulpant2",
        pictureLove: "./img/jpg/product/dentitionBlanche.jpg",
        textLove:
          "Pour une dentition blanche et brillante, découvrez notre poudre blanchissante révolutionnaire pour un sourire éclatant ! Notre blanchisseur élimine en douceur les impuretés et les taches, vous offrant des dents éblouissantes. Il préserve la santé de vos gencives et assure une haleine fraîche durable. Sans ingrédients controversés, notre formule respecte votre santé pour une confiance totale tout au long de la journée. Profitez d'un sourire éclatant et de soins bucco-dentaires complets grâce à notre produit innovant."
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
  picture: "./img/jpg/product/heRafraichissant.jpg",
  colors: {
    textColor: "#30d1d9",
    linkTextColor: "#30d1d9"
  },
  inSummary: [
    {
      id: "GRiS0",
      title: "Gestion du poids",
      text: "Détoxifiant"
    },
    {
      id: "GRiS1",
      title: "Problèmes cutanés",
      text: "Il élimine les aphtes, les boutons de fièvre, les verrues et l’eczéma."
    },
    {
      id: "GRiS2",
      title: "Santé",
      text: "Il soutient le système immunitaire et agit contre les douleurs musculaires, articulaires, osseuses, douleurs de menstruation et symptômes de la ménopause. Il aide à diminuer le cholestérol et la glycémie. Il est recommandé sur les pathologies telles que la dépression, l’arthrite, l’ostéoporose, les rhumatismes…"
    },
    {
      id: "GRiS3",
      title: "Beauté ",
      text: "Il augmente la production de l’hormone anti-âge et contient des ingrédients qui luttent contre le vieillissement cutané et la chute des cheveux ."
    },
    {
      id: "GRiS4",
      title: "Bien-être",
      text: "Il apaise en agissant directement sur l’hormone du stress. Il diminue la fatigue et améliore le sommeil pour une sensation de détente assurée."
    }
  ]
};
