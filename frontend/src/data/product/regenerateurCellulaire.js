import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const regenerateurCellulaire = {
  nameProduct: "Régénérateur cellulaire",
  summary: {
    title: "Un support quotidien.",
    paragraph: [
      {
        text: "Notre produit est le best seller de notre boutique car il est l’allié ultime pour améliorer la qualité de votre peau. Grâce à son action sur la régénération cellulaire, il favorise l'élasticité et la fermeté de votre peau, vous offrant ainsi un teint éclatant et une apparence plus jeune. Que vous souhaitiez réduire la cellulite, atténuer les vergetures, traiter l'acné ou apaiser les problèmes d'eczéma et de psoriasis, notre produit est votre solution !"
      },
      {
        text: "En plus de ses bienfaits pour la peau, notre produit soutient également votre santé globale. Il contribue à la santé cardiovasculaire en renforçant le système nerveux et immunitaire. Grâce à sa teneur en vitamine C, il favorise la formation et le maintien du collagène, essentiel pour la santé des tissus, des cartilages, des ligaments et des os. De plus, il aide à la réparation osseuse après une intervention chirurgicale et diminue les rhumes, vous offrant ainsi une meilleure résistance aux maladies."
      },
      {
        text: "Nous croyons en la beauté naturelle de chaque individu. Notre produit accélère la cicatrisation des plaies et améliore l'aspect des cicatrices, vous permettant ainsi de retrouver une peau lisse et uniforme. Que ce soit pour des cicatrices post-chirurgicales ou des marques d'acné, notre produit vous aide à retrouver une confiance éclatante."
      },
      {
        text: "En stimulant votre énergie naturelle, notre produit vous offre une vitalité renouvelée. Il vous aide à vous sentir plus dynamique et épanoui(e) au quotidien. De plus, il contribue à diminuer la rétention d'eau, soulageant ainsi les sensations de gonflement des mains et des pieds. En améliorant la circulation sanguine, il soulage les jambes lourdes et douloureuses. Son pouvoir antioxydant favorise également les fonctions respiratoires, apaisant les allergies et les symptômes de l'asthme."
      },
      {
        text: "Un produit unique pour des bienfaits multiples."
      }
    ]
  },
  firstCategory: [getCategoryById("1Sante").name],
  secondCategory: [getSecondCategoryById("1Sante0ProblemesCutanes").text],
  picture: "./img/jpg/product/regenerateurCellulaire.jpg"
};
