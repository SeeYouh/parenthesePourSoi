import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const goutteMinceur = {
  nameProduct: "Gouttes minceur",
  summary: {
    title: "Laissez les éléments naturels agir en votre faveur.",
    paragraph: [
      {
        text: "Avec ses deux fioles uniques sous forme de gouttes, ce produit offre un avantage de pointe dans votre cure minceur."
      },
      {
        text: "Les gouttes jour vous offre une solution complète pour une gestion efficace du poids. En régulant votre appétit et en vous procurant un effet de satiété durable, il vous aide à contrôler vos portions alimentaires et à éviter les fringales incontrôlées. De plus, notre formule puissante cible les graisses sous-cutanées et viscérales, celles qui sont difficiles à éliminer même avec un exercice physique intense. Vous serez surpris(e) par la capacité de notre produit à brûler ces graisses tenaces, vous permettant ainsi d'atteindre vos objectifs de perte de poids de manière efficace. De plus, il agit également en tant que régulateur de sucre, vous aidant à réduire l'excès de sucre dans votre corps. Il ralentit l'absorption des glucides, ce qui vous aide à éviter les pics glycémiques et à maintenir un niveau de sucre sanguin stable.."
      },
      {
        text: "Notre produit va au-delà de la simple gestion du poids. Il améliore également votre bien-être général en stimulant le métabolisme et en vous offrant un regain d'énergie essentiel au corps pour brûler les calories efficacement, sans ressentir de fatigue physique. Vous remarquerez une amélioration de votre humeur, vous permettant d'aborder chaque journée avec une énergie positive et une motivation accrue. De plus, notre formule contribue à améliorer la cellulite, en aidant à réduire son apparence et à améliorer la texture de la peau."
      },
      {
        text: "Les gouttes nuit empêchent l'accumulation de nouvelles graisses durant votre sommeil Grâce à sa formule unique, les gouttes diminuent le cortisol, l'hormone du stress, vous offrant ainsi un soulagement naturel et une relaxation de votre corps et de votre esprit. Ce bien-être aide à réguler le fonctionnement de votre système digestif, favorisant ainsi une digestion harmonieuse et confortable. De plus, notre formule contribue à combattre le mauvais cholestérol, vous permettant de maintenir un équilibre lipidique sain dans votre corps."
      },
      {
        text: "Vous êtes détendue, vous digérez mieux, votre sommeil est de meilleure qualité et le corps n’a pas besoin de stocker de nouvelles graisses. Notre produit favorise ainsi une récupération optimale pendant la nuit."
      },
      {
        text: "Prenez le contrôle de votre corps jour et nuit en utilisant nos gouttes uniques."
      }
    ]
  },
  firstCategory: [getCategoryById("0GestionDuPoids").name],
  secondCategory: [
    getSecondCategoryById("0GestionDuPoids1AidePertePoids").text
  ],
  picture: "./img/jpg/product/goutteMinceur.jpg"
};
