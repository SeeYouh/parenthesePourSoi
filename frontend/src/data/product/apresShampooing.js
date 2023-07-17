import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const apresShampooing = {
  nameProduct: "Après shampooing",
  summary: {
    title: "Protégez vos cheveux et prenez en soin.",
    paragraph: [
      {
        text: "Notre après-shampooing chouchoute vos cheveux de la racine jusqu'aux pointes. Il élimine en douceur les impuretés sans en introduire de nouvelles, laissant vos cheveux frais et légers. De plus, il facilite le brossage, réduisant ainsi la casse et les nœuds. Vous serez émerveillé(e) par l'élasticité, la brillance et la douceur retrouvées de vos cheveux, révélant toute leur beauté naturelle."
      },
      {
        text: "Tout comme le shampooing, il cible les problèmes cutanés tels que les pellicules, l’eczéma, les rougeurs et les démangeaisons, apportant un soulagement instantané en réduisant l'inflammation et favorisant la guérison de la peau."
      },
      {
        text: "En plus de prendre soin de votre cuir chevelu, notre produit agit comme un bouclier protecteur contre les rayons UV nocifs. Grâce à sa formulation avancée, il vous offre une protection solaire naturelle, préservant vos cheveux tout en vous permettant de profiter du soleil en toute tranquillité."
      },
      {
        text: "Offrez à vos cheveux une attention particulière avec des soins doux, une facilité de brossage et une protection contre les rayons UV."
      },
      {
        text: "Pour une expérience de bien-être complète, vous ne pouvez pas manquer de découvrir notre shampooing exceptionnel qui se marie parfaitement avec notre après-shampooing. Ensemble, ils vous offrent une approche globale pour des cheveux soyeux et sains. "
      }
    ]
  },
  firstCategory: [getCategoryById("2Beaute").name],
  secondCategory: [getSecondCategoryById("2Beaute0SoinsCheveux").text],
  picture: "./img/jpg/product/aprèsShampooing.jpg"
};
