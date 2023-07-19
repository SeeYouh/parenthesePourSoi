import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const osMuscle = {
  nameProduct: "Os et Muscles",
  summary: {
    title:
      "Soutenez votre santé musculaire et osseuse avec notre produit essentiel.",
    paragraph: [
      {
        text: "Notre produit contient des ingrédients aux propriétés anti-inflammatoires qui agissent en synergie pour soulager vos articulations douloureuses, vous permettant de retrouver votre mobilité et votre confort. Grâce à sa capacité à stimuler la production de collagène, il favorise des gencives saines et des os solides. Vous retrouverez un sourire éclatant et une confiance en vous renouvelée. De plus, le collagène est la base de la minéralisation osseuse, ce qui contribue à renforcer vos os pour une meilleure santé globale. Avec notre produit, votre beauté rayonne à travers votre sourire éblouissant et votre démarche assurée."
      },
      {
        text: "Notre formule spéciale est également conçue pour répondre à vos besoins en période de stress. L’apport en magnésium est essentiel pour contrer les effets néfastes du stress sur votre corps."
      },
      {
        text: "En plus des bienfaits cités ci-dessus, notre produit offre une multitude d'avantages pour votre santé globale. Vous serez agréablement surpris(e) de constater que notre formule aide à réduire la cellulite, pour une peau plus lisse et tonique. Il favorise un transit intestinal régulier en luttant efficacement contre la constipation et soutient votre système immunitaire, renforçant ainsi vos défenses naturelles."
      },
      {
        text: "Il joue également un rôle essentiel dans la régulation du taux de sucre et de cholestérol dans le sang, vous aidant ainsi à maintenir une bonne santé à long terme."
      },
      {
        text: "Dites adieu aux fringales salées qui sont omniprésentes ! Notre produit innovant est spécialement formulé pour réduire ces envies irrésistibles. En le choisissant, vous vous donnez toutes les chances de réussir votre gestion du poids de manière saine et durable."
      },
      {
        text: "Mesdames, notre produit a été spécialement formulé pour répondre à vos besoins spécifiques. Il favorise l'équilibre hormonal, vous permettant ainsi de mieux gérer les fluctuations de votre cycle et de retrouver un bien-être intérieur."
      },
      {
        text: "Un produit efficace pour soutenir la santé musculaire et osseuse !"
      }
    ],
    youLikeIt: [
      {
        pictureLove: "./img/jpg/product/goutteMinceur.jpg",
        textLove:
          "La détox’ étant la base de toute cure minceur, nos gouttes super puissantes devraient également vous intéresser pour perdre du poids sans effet yoyo."
      },
      {
        pictureLove: "./img/jpg/product/bienEtreInterieur.jpg",
        textLove:
          "Si votre système digestif et intestinal sont déséquilibrés, les pré-probiotiques devraient réguler tout ceci."
      },
      {
        pictureLove: "./img/jpg/product/GG.jpg",
        textLove:
          "Une autre approche consiste à rétablir l'équilibre de votre système digestif et intestinal en fournissant des légumes et des vitamines essentiels par le biais d'une détoxification végétale."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
  picture: "./img/jpg/product/osMuscle.jpg",
  colors: {
    textColor: "#a81616"
  }
};
