import { firstCategoryList } from "./firstCategoryList";

// Récupère le nom des catégories par leur id
let getCategoryById = (id) => {
  return firstCategoryList.find((cat) => cat.id === id);
};

// Récupère le nom des sous-catégories par leur id
let getSecondCategoryById = (id) => {
  for (let category of firstCategoryList) {
    let subcategory = category.secondCategory.find(
      (subCat) => subCat.id === id
    );
    if (subcategory) {
      return subcategory;
    }
  }
  return null;
};

export const productList = [
  {
    nameProduct: "Détox’",
    summary: {
      title: "Nettoyer son corps en profondeur.",
      paragraph: [
        {
          subTitle: "Préparez-vous à mincir avec notre détox’",
          text: "La base essentielle de toute cure minceur est le nettoyage du corps afin de le préparer à une perte de poids saine et durable."
        },
        {
          subTitle: "Laissez notre détox’ faire le grand nettoyage !",
          text: "Notre produit agit comme un véritable agent de détoxification, absorbant les toxines présentes dans votre corps et les transportant hors de celui-ci. Ces toxines, issues de votre métabolisme et de votre environnement, peuvent s'accumuler dans vos organes émonctoires, tels que le foie, les reins, les poumons, les intestins et la peau. Lorsque ces organes sont surchargés de toxines, des problèmes de santé peuvent survenir. En optant pour notre produit, vous permettez à votre corps de se débarrasser de ces toxines, favorisant ainsi une gestion du poids plus efficace et une meilleure santé globale.",
          picture450: "./img/jpg/product/DetoxIllusText450.jpg",
          picture675: "./img/jpg/product/DetoxIllusText675.jpg",
          picture900: "./img/jpg/product/DetoxIllusText900.jpg"
        },
        {
          subTitle: "Boostez vos défenses, c'est bon pour la balance !",
          text: "Les ingrédients de notre détox' protègent vos cellules contre le stress oxydatif grâce à la vitamine E présente dans certains d'entre eux. Ils renforcent également votre système immunitaire, maintiennent la santé de vos muqueuses et favorisent un fonctionnement normal de la thyroïde, jouant ainsi un rôle clé dans la gestion du poids. "
        },
        {
          subTitle: "Dites adieu aux ballonnements avec notre détox’",
          text: "En rééquilibrant votre système digestif, notre produit diminue les ballonnements, les gaz, la constipation et la diarrhée. De plus, il contribue à réduire la cellulite, vous offrant ainsi une silhouette plus harmonieuse."
        },
        {
          subTitle: "Ressourcez-vous et faites le plein d'énergie !",
          text: "Notre détox’ booste l'énergie naturelle de votre corps, vous permettant ainsi de retrouver une vitalité et un bien-être général. Vous vous sentirez revitalisé(e), prêt(e) à faire face aux défis quotidiens avec une énergie renouvelée."
        },
        {
          subTitle:
            "Atteignez vos objectifs minceur grâce à notre révolution détox’",
          text: "Optez pour notre détox’, c’est choisir un produit révolutionnaire conçu pour vous aider à atteindre vos objectifs de perte de poids tout en favorisant un bien-être optimal."
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
    firstCategory: [getCategoryById("0GestionDuPoids").name],
    secondCategory: [
      getSecondCategoryById("0GestionDuPoids0Detoxification").text
    ],
    picture: "./img/jpg/product/detox.jpg",
    colors: {
      textColor: "#7e1450",
      borderColor: "1px solid #7e1450"
    }
  },
  {
    nameProduct: "BB",
    summary: {
      title: "Le secret d’un éclat intérieur et extérieur.",
      paragraph: [
        {
          text: "Notre produit a une capacité exceptionnelle à régénérer les cellules. "
        },
        {
          text: "Sa formule accélère la pousse des ongles et des cheveux, vous permettant ainsi de profiter d'une chevelure plus abondante et d'ongles forts et sains. En augmentant la production de kératine, notre produit revitalise en profondeur vos cheveux, les rendant plus résistants à la casse et leur redonnant brillance et vitalité. De plus, il réduit considérablement la chute des cheveux, vous offrant ainsi une chevelure dense et volumineuse qui fera des envieux."
        },
        {
          text: "Notre produit booste votre énergie naturelle. Il agit comme un véritable stimulant, vous offrant une énergie durable tout au long de la journée. De plus, il augmente les fonctions mentales, vous aidant à rester concentré(e) et alerte, même dans les moments les plus intenses. Vous vous sentirez prêt(e) à relever tous les défis qui se présentent à vous."
        },
        {
          text: "Grâce à son pouvoir régénérateur cellulaire exceptionnel, notre produit réduit efficacement les problèmes cutanés : rougeurs, démangeaisons et psoriasis qui perturbent votre vie quotidienne, vous permettant ainsi de retrouver une peau saine et apaisée. De plus, il diminue l'acné et régule l'excès de sébum, offrant une solution naturelle pour les peaux grasses. Notre formule restreint également les pellicules, vous offrant un cuir chevelu sain et sans démangeaisons. Enfin, notre produit contribue à améliorer le bon fonctionnement du système nerveux, favorisant ainsi votre bien-être global."
        },
        {
          text: "Que vous souhaitiez améliorer votre santé globale ou simplement dynamiser votre routine beauté, ce puissant complément vous procurera une sensation de renouveau et de vitalité."
        }
      ]
    },
    firstCategory: [getCategoryById("2Beaute").name],
    secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
    picture: "./img/jpg/product/bb.jpg"
  },
  {
    nameProduct: "Mère de Tous",
    summary: {
      title: "Un produit breveté et unique.",
      paragraph: [
        {
          subTitle:
            "Exclusivité garantie : Un produit unique pour votre bien-être",
          text: "Disponible uniquement dans notre boutique en ligne, cette composition brevetée est un trésor de bien-être. Avec 36 ingrédients naturels parmi les plus puissants du monde, elle se distingue par son efficacité et sa qualité supérieure. Chaque élément a été soigneusement choisi pour ses propriétés bénéfiques, créant une synergie qui maximise les bienfaits pour votre santé."
        },
        {
          subTitle: "Boostez votre énergie : Dites adieu à la fatigue",
          text: "Fatigué de vous sentir fatigué ? Cette solution énergisante est là pour vous aider. Elle booste naturellement votre énergie, combat la fatigue et améliore votre humeur. Elle vous donne l'énergie nécessaire pour affronter votre journée, que ce soit pour le travail, le sport ou les activités de loisirs.",
          picture450: "./img/jpg/product/MereDeTousIllusText450.jpg",
          picture675: "./img/jpg/product/MereDeTousIllusText675.jpg",
          picture900: "./img/jpg/product/MereDeTousIllusText900.jpg"
        },
        {
          subTitle: "Soulagement naturel : Combattez douleurs et inflammations",
          text: "Imaginez un monde sans douleur. C'est ce que cette formule unique offre. En agissant comme un puissant anti-inflammatoire, elle soulage efficacement les douleurs musculaires, articulaires et les affections chroniques. Elle offre une alternative naturelle aux médicaments traditionnels, sans les effets secondaires indésirables."
        },
        {
          subTitle: "Clarté mentale : Affrontez le quotidien avec sérénité",
          text: "Dans notre monde moderne, la clarté mentale est plus importante que jamais. Ce mélange soutient un équilibre psychologique et une clarté mentale, vous aidant à rester concentré et serein face aux défis quotidiens. Elle est idéale pour ceux qui cherchent à améliorer leur performance mentale de manière naturelle."
        },
        {
          subTitle: "Défense immunitaire : Votre allié contre les maladies",
          text: "Dans un monde où les maladies sont omniprésentes, une défense immunitaire solide est essentielle. Ce produit renforce votre système immunitaire et protège vos cellules, favorisant une santé optimale. Il est particulièrement utile pour une récupération rapide lors de rhumes ou de périodes de pandémie."
        },
        {
          subTitle:
            "Soulagement des allergies : Une solution pour votre confort",
          text: "Les allergies peuvent être un véritable fardeau. Heureusement, cette formule est là pour vous aider. En soulageant les allergies, en combattant l'acné, en favorisant la digestion et en soulageant les brûlures d'estomac, elle améliore votre confort quotidien et vous aide à vivre une vie plus saine."
        },
        {
          subTitle: "Régulation du cholestérol : Un soutien pour votre santé",
          text: "Une bonne santé cardiovasculaire et digestive est essentielle pour une vie saine. Ce mélange aide à réguler le taux de cholestérol, à stabiliser le diabète et à lutter contre la constipation. Il est une solution naturelle pour ceux qui cherchent à améliorer leur santé de manière holistique."
        },
        {
          subTitle:
            "Pour les femmes : Un soulagement pour les règles douloureuses",
          text: "Mesdames, nous comprenons les défis uniques que vous rencontrez. C'est pourquoi ce produit offre un soulagement appréciable pour les règles douloureuses, vous permettant de vivre cette période de manière plus confortable. Il est conçu pour vous aider à gérer les symptômes menstruels de manière naturelle."
        },
        {
          subTitle: "Bronzage accéléré : Une peau hâlée en un temps record",
          text: "Qui n'aime pas avoir une belle peau bronzée ? Avec cette formule, vous pouvez accélérer le processus de bronzage et obtenir une peau rayonnante et un teint hâlé en seulement 30 minutes d'exposition. C'est votre secret pour un bronzage rapide et naturel."
        },
        {
          subTitle:
            "Retrouvez votre bien-être : Prenez le contrôle de vos maux",
          text: "La vie est trop courte pour souffrir. Avec cette composition, vous pouvez prendre le contrôle de vos maux et retrouver un état de bien-être et une vie plus confortable. Elle est une solution naturelle pour ceux qui cherchent à améliorer leur qualité de vie et leur bien-être général."
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
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre3Humeur").text],
    picture: "./img/jpg/product/mereDeTous.jpg",
    colors: {
      textColor: "#e21e1e",
      borderColor: "1px solid #e21e1e"
    }
  },
  {
    nameProduct: "Booster d’énergie",
    summary: {
      title: "Un mélange vivifiant pour booster votre journée.",
      paragraph: [
        {
          text: "Notre booster d’énergie est le véritable catalyseur de votre bien-être. Il dynamise votre corps en stimulant votre énergie naturelle, combat efficacement la fatigue et vous aide à retrouver un sommeil réparateur. En favorisant la bonne humeur et la gaieté, il contribue à une vision positive de la vie. De plus, il est votre allié pour diminuer le stress et l'anxiété, vous permettant de vous sentir léger(e) et détendu(e) au quotidien."
        },
        {
          text: "Notre produit est également une solution efficace pour vous aider à atteindre vos objectifs de gestion du poids. Grâce à ses propriétés détoxifiantes, il élimine les toxines accumulées dans votre corps, favorisant ainsi une meilleure combustion des graisses, augmentée de 17%. "
        },
        {
          text: "Votre santé est notre priorité. Notre booster d’énergie stimule votre système immunitaire et cardiovasculaire, renforçant ainsi votre résistance aux maladies et protégeant votre cœur. Les oméga 6 et 9 présents dans notre formule améliorent l'attention et la vigilance mentale, vous permettant de rester concentré(e) et productif(ve) tout au long de la journée. De plus, il combat les manifestations allergiques et favorise une digestion saine, améliorant le transit intestinal et optimisant le fonctionnement de vos organes."
        },
        {
          text: "Grâce à ses propriétés antioxydantes exceptionnelles, notre produit réduit visiblement les signes de l'âge, vous offrant une peau éclatante et rajeunie. En nourrissant votre peau de manière profonde, il révèle votre beauté naturelle, vous permettant de vous sentir confiant(e) et épanoui(e) dans votre propre peau."
        },
        {
          text: "Mesdames, notre booster d’énergie a aussi des effets sur les désagréments féminins car il diminue efficacement les douleurs menstruelles, soulageant ainsi les gênes liées à votre cycle. De plus, il prévient les infections urinaires, vous offrant une protection essentielle pour votre santé intime."
        },
        {
          text: "Faites le choix d’un bien-être optimal et votre corps vous remerciera pour cette décision qui va changer votre quotidien !"
        }
      ]
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre3Humeur").text],
    picture: "./img/jpg/product/boosterEnergie.jpg"
  },
  {
    nameProduct: "Collagènoni",
    summary: {
      title: "Un produit de santé globale qui fait rajeunir.",
      paragraph: [
        {
          text: "Le collagène est une protéine essentielle qui compose la structure de la peau mais également des cheveux, des ongles, des cartilages, des muscles, des tendons, des os, des articulations et des vaisseaux sanguins."
        },
        {
          text: "A partir de l’âge de 25 ans, nous perdons environ 1% de collagène chaque année. Cette protéine n’est pas renouvelée naturellement. C’est ce que l’on appelle le vieillissement cutané. C'est à ce stade que l'on peut commencer à remarquer l'apparition de ridules, de rides et une perte de fermeté de la peau. Nous pouvons également ressentir des douleurs musculaires, articulaires et osseuses."
        },
        {
          text: "Notre produit favorise le renouvellement cellulaire. En stimulant ce processus naturel, il aide à éliminer les cellules mortes et à régénérer la peau, vous offrant ainsi un teint plus frais, plus lumineux et plus éclatant. En augmentant l'élasticité de la peau, il lui procure une hydratation en profondeur, réduisant ainsi les signes de sécheresse et de déshydratation. Il lutte efficacement contre les rides, ridules et cernes, vous permettant de retrouver une peau lisse, ferme et éclatante. Notre formule aide également à diminuer l'apparence des tâches pigmentaires, vous offrant un teint plus uniforme et éclatant."
        },
        {
          text: "Enfin, notre produit renforce les ongles fragiles et les cheveux ternes, en leur apportant les nutriments essentiels pour leur santé et leur vitalité."
        },
        {
          text: "La synergie du collagène marin avec le Noni, un fruit de Tahiti aux vertus multiples, permet de diminuer les douleurs corporelles, vous offrant un soulagement naturel pour les tensions musculaires et les inconforts articulaires."
        },
        {
          text: "Optez pour ce produit, c’est retrouver une peau plus ferme, une apparence rajeunie et un bien-être intérieur total."
        }
      ]
    },
    firstCategory: [getCategoryById("2Beaute").name],
    secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
    picture: "./img/jpg/product/collagene.jpg"
  },
  {
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
  },
  {
    nameProduct: "Bien-être intérieur",
    summary: {
      title: "Équilibrez votre corps, équilibrez votre vie.",
      paragraph: [
        {
          text: "Notre produit agit en régulant votre microbiote, favorisant ainsi un équilibre optimal. Le microbiote est essentiel pour votre bien-être, car il participe à de nombreuses fonctions, de la digestion à l'absorption des nutriments, en passant par le renforcement de votre système immunitaire. "
        },
        {
          text: "En rétablissant l'équilibre de votre microbiote, notre produit contribue à améliorer votre santé globale et à prévenir divers troubles digestifs et maladies chroniques associées. Le pouvoir antioxydant de notre produit aide à neutraliser les toxines présentes dans votre organisme. Il contribue également à diminuer les troubles digestifs en maintenant l'équilibre des bonnes bactéries et en améliorant la flore intestinale. Recommandé pour les maladies chroniques telles que le côlon irritable et la maladie de Crohn (avec avis médical), il améliore également votre santé globale."
        },
        {
          text: "Notre produit de bien-être intérieur joue un rôle clé dans la gestion du poids en contrôlant la satiété et en réduisant les envies de sucre et de gras. En favorisant un microbiote équilibré, il permet de vous aider à atteindre et maintenir un poids santé. De plus, il booste votre système immunitaire, facilite l'absorption des nutriments et régule le taux de cholestérol."
        },
        {
          text: "Notre produit vous offre un bien-être complet en boostant l'énergie naturelle de votre corps grâce à la synthèse des vitamines B et K. Il contribue également à réduire le stress et l'anxiété, à combattre la fatigue, à améliorer la qualité du sommeil et à stimuler votre humeur, vous permettant ainsi de profiter pleinement de chaque journée."
        },
        {
          text: "Notre produit offre des bienfaits spécifiques pour les femmes en diminuant les troubles vaginaux et en améliorant le tractus génital. Il vous permet de prendre soin de votre santé intime de manière naturelle et équilibrée."
        },
        {
          text: "Expérimentez ce produit, c’est côtoyez un bien-être intérieur inégalé !"
        }
      ]
    },
    firstCategory: [getCategoryById("1Sante").name],
    secondCategory: [
      getSecondCategoryById("1Sante1TroublesDigestifsIntestinauxRespiratoires")
        .text
    ],
    picture: "./img/jpg/product/bienEtreInterieur.jpg"
  },
  {
    nameProduct: "Equilibre corps et esprit",
    summary: {
      title: "Harmonisez votre corps pour un équilibre complet.",
      paragraph: [
        {
          text: "Tout au long de votre vie, votre corps subit d'importants changements significatifs, tant à l’intérieur qu’à l’extérieur."
        },
        {
          text: "Notre produit joue un rôle essentiel en soutenant la division cellulaire, en préservant les fonctions psychologiques normales et en favorisant un métabolisme énergétique optimal. Il fournit à votre corps les outils nécessaires pour maintenir une santé optimale. En le prenant avant de vous coucher, vous vous réveillerez chaque jour en vous sentant régénéré. "
        },
        {
          text: "Restez actif et plein d’énergie à chaque étape de votre vie !"
        }
      ]
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre1Energie").text],
    picture: "./img/jpg/product/equilibreCorpsEsprit.jpg"
  },
  {
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
  },
  {
    nameProduct: "Harmonie",
    summary: {
      title: "Soutenez votre corps et votre beauté.",
      paragraph: [
        {
          text: "Notre produit est composé d’ingrédients aux propriétés antidépressives naturelles vous permettant de ressentir une amélioration significative de votre humeur et de votre moral. Il agit en tant que rempart contre la fatigue physique et mentale, vous aidant à retrouver votre énergie vitale et à aborder chaque journée avec enthousiasme. Vous constaterez également une amélioration de votre sommeil, favorisant un repos réparateur et une détente profonde. Enfin, notre formule unique stimule vos capacités cognitives, vous permettant ainsi d'optimiser votre concentration et votre clarté mentale."
        },
        {
          text: "“Harmonie” est spécialement conçue pour offrir une efficacité anti-inflammatoire exceptionnelle, soulageant ainsi les douleurs liées à l'arthrite, l'arthrose, l'ostéoporose, les rhumatismes et bien d'autres affections. Retrouvez votre mobilité et votre liberté grâce à notre solution naturelle et puissante. Il améliore également la santé oculaire en préservant la santé de vos yeux. De plus, il renforce votre système immunitaire, vous aidant à vous remettre plus rapidement des maladies et à prévenir les infections."
        },
        {
          text: "Ses ingrédients minutieusement sélectionnés favorisent une digestion saine et équilibrée vous évitant ainsi les troubles digestifs courants. Grâce à ses propriétés détoxifiantes, il vous aide à éliminer les toxines accumulées dans votre corps, favorisant ainsi la perte de poids naturelle et durable."
        },
        {
          text: "Notre solution naturelle accélère la cicatrisation des verrues, des boutons de fièvre et des aphtes, vous permettant de retrouver une peau saine et apaisée. Enfin, il aide à réduire l'eczéma grâce à sa teneur en oméga-6, offrant un soulagement bienvenu aux problèmes de peau."
        },
        {
          text: "Et le plus de ce produit, c’est son action sur la production de DHEA, l'hormone anti-vieillissement. Vous retrouverez une peau éclatante, plus lisse et plus hydratée, grâce à une diminution notable de la sécheresse cutanée et à une stimulation de la production de collagène. De plus, notre formule aide à réduire la chute des cheveux, vous offrant ainsi une chevelure volumineuse et luxuriante."
        },
        {
          text: "Mesdames, notre produit est spécialement conçu pour vous aider à atténuer les douleurs menstruelles grâce à sa teneur en oméga-6, vous offrant ainsi un soulagement bien mérité. De plus, il diminue les désagréments de la ménopause en stimulant la production d'œstrogènes, vous permettant de traverser cette période de transition avec sérénité et confort."
        },
        {
          text: "Sentez-vous belle et en forme la journée et dormez paisiblement la nuit avec ce produit exceptionnel."
        }
      ]
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre2FatigueSommeil").text],
    picture: "./img/jpg/product/harmonie.jpg"
  },
  {
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
      ]
    },
    firstCategory: [getCategoryById("1Sante").name],
    secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
    picture: "./img/jpg/product/osMuscle.jpg"
  },
  {
    nameProduct: "Shampooing",
    summary: {
      title: "Sublimez vos cheveux avec ce shampooing d’exception.",
      paragraph: [
        {
          text: "Notre shampooing offre à vos cheveux le traitement qu'ils méritent avec notre produit révolutionnaire. Il nettoie en profondeur, éliminant les impuretés et les résidus de produits capillaires, pour des cheveux propres et sains. De plus, sa formule spéciale revitalise et hydrate intensément chaque mèche, rendant vos cheveux doux, brillants et pleins de vitalité."
        },
        {
          text: "Notre produit ne se limite pas à cela, il est également votre allié pour un cuir chevelu sain et protégé. Sa formule contribue à apaiser les problèmes cutanés tels que les irritations et les rougeurs. De plus, il combat efficacement les pellicules, réduit les démangeaisons et  l'eczéma capillaire restaurant l'équilibre du cuir chevelu. "
        },
        {
          text: "Notre shampooing convient aux cheveux colorés."
        },
        {
          text: "Offrez-vous une expérience luxueuse en découvrant ce shampooing qui prend soin de vos cheveux, ravive votre peau et élimine les problèmes courants du cuir chevelu."
        },
        {
          text: "Pour compléter votre expérience de bien-être, je vous recommande vivement de jeter un coup d'œil à notre après-shampooing, qui se marie parfaitement avec notre shampooing."
        }
      ]
    },
    firstCategory: [getCategoryById("2Beaute").name],
    secondCategory: [getSecondCategoryById("2Beaute0SoinsCheveux").text],
    picture: "./img/jpg/product/shampooing.jpg"
  },
  {
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
  },
  {
    nameProduct: "HE Relaxante",
    summary: {
      title: "Quand le stress laisse la place à la paix intérieure.",
      paragraph: [
        {
          text: "Cette huile essentielle a des effets bénéfiques sur la santé mentale. Elle est connue pour apaiser la dépression et les symptômes qui y sont liés. Son parfum doux et relaxant peut aider à améliorer l'humeur, à réduire les sentiments de tristesse et à favoriser un sentiment général de bien-être. Elle est particulièrement efficace pour diminuer l'anxiété et le stress. Son parfum naturellement apaisant peut aider à calmer l'esprit, à réduire les tensions et à favoriser une sensation de tranquillité intérieure. Elle peut également aider à évacuer la pression accumulée au cours de la journée, vous permettant de vous détendre et de vous ressourcer."
        },
        {
          text: "De plus, l'huile essentielle Relaxante peut être utilisée pour favoriser l'endormissement, diminuer les terreurs nocturnes et les insomnies. Son utilisation avant le coucher peut aider à créer une atmosphère propice au sommeil, favorisant ainsi un repos de qualité et réduisant les troubles du sommeil."
        },
        {
          text: "Ce produit possède des propriétés apaisantes qui peuvent soulager les irritations cutanées. Il peut être utilisé pour calmer les démangeaisons, les rougeurs et les inflammations, offrant un soulagement rapide et apaisant. Il peut également apaiser la douleur et l'inconfort associés au grincement de dents. Son application régulière peut aider à détendre les muscles de la mâchoire, à réduire le grincement et à atténuer les sensations désagréables."
        },
        {
          text: "Bénéficiez d’un précieux outil pour améliorer votre qualité de vie et favoriser votre équilibre intérieur."
        }
      ]
    },
    firstCategory: [getCategoryById("4HuilesEssentielles").name],
    secondCategory: [
      getSecondCategoryById("4HuilesEssentielles0MieuxEtre").text
    ],
    picture: "./img/jpg/product/heRelaxante.jpg"
  },
  {
    nameProduct: "Coco’oil",
    summary: {
      title:
        "Un précieux élixir polyvalent, un véritable trésor pour votre santé et votre beauté.",
      paragraph: [
        {
          text: "Notre huile coco est riche en propriétés antioxydantes, ce qui en fait une alliée précieuse pour votre santé. Vous pouvez même l'ingérer pour bénéficier de ses bienfaits internes. De plus, il possède des vertus cicatrisantes, idéales pour favoriser la guérison des blessures cutanées. Les coups de soleil, les brûlures, les rougeurs ou les irritations liées au rasage sont apaisés efficacement. Vous serez également surpris de constater que notre élixir peut enlever les croûtes de lait chez les tout-petits, offrant ainsi un soulagement aux parents soucieux du bien-être de leur enfant. Les démangeaisons dues au psoriasis ou à l'eczéma sont également atténuées, offrant un soulagement bienvenu à ceux qui souffrent de ces affections cutanées."
        },
        {
          text: "Grâce à sa propriété hydratante exceptionnelle, ce produit nourrit votre peau en profondeur, la laissant douce, souple et éclatante. De plus, il peut être utilisé comme un masque capillaire revitalisant, offrant une nutrition intense à vos cheveux et les laissant brillants et soyeux. Pour celles et ceux qui cherchent une solution démaquillante douce mais efficace, notre élixir est là pour répondre à vos besoins. Il élimine en douceur le maquillage sans agresser votre peau délicate."
        },
        {
          text: "Et ce n'est pas tout ! Notre élixir peut même être utilisé en cuisine, sans être cuit. Il ajoute une touche subtile à vos plats et vous permet de bénéficier de ses bienfaits internes. Son état liquide et son odeur légère et subtile en font un plaisir à utiliser au quotidien."
        },
        {
          text: "N'hésitez plus, laissez-vous séduire par notre huile coco aux multiples vertus."
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
      ]
    },
    firstCategory: [getCategoryById("1Sante").name],
    secondCategory: [getSecondCategoryById("1Sante0ProblemesCutanes").text],
    picture: "./img/jpg/product/cocoOil.jpg"
  },
  {
    nameProduct: "Gel douche",
    summary: {
      title: "Une expérience de soin incomparable pour votre peau.",
      paragraph: [
        {
          text: "Doté d'une formule délicate, notre gel douche nettoie votre peau en profondeur, éliminant efficacement les impuretés sans en introduire de nouvelles. Fini les résidus chimiques indésirables ! Votre peau retrouve toute sa fraîcheur et sa pureté. De plus, notre gel douche agit comme un véritable purificateur, éliminant les toxines superficielles qui peuvent ternir l'éclat de votre teint. Avec chaque utilisation, vous ressentez une sensation de propreté et de légèreté, pour une peau éclatante de beauté naturelle."
        },
        {
          text: "Grâce à sa composition douce et naturelle, il réduit les rougeurs et démangeaisons, apportant un soulagement bienvenu aux peaux sensibles et réactives. De plus, il diminue les irritations, offrant un confort optimal à votre épiderme. Les personnes souffrant d'eczéma et de psoriasis seront ravies de constater les propriétés apaisantes de notre gel douche, qui contribue à apaiser ces affections cutanées."
        },
        {
          text: "Plongez dans un rituel de bien-être, où la santé et la beauté se rejoignent harmonieusement."
        }
      ]
    },
    firstCategory: [getCategoryById("1Sante").name],
    secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
    picture: "./img/jpg/product/gelDouche.jpg"
  },
  {
    nameProduct: "PN",
    summary: {
      title: "Un substitut de repas complet.",
      paragraph: [
        {
          text: "Notre produit a été conçu pour faciliter la gestion de votre poids. Vous pouvez le substituer à votre petit-déjeuner, à votre goûter ou à votre dîner pour maintenir un équilibre nutritionnel optimal. Il contient des protéines végétales de haute qualité qui favorisent une digestion améliorée et une meilleure absorption des nutriments essentiels. Chaque dose de PN vous fournit l'apport nécessaire pour une perte de poids saine et durable."
        },
        {
          text: "Au-delà de la gestion du poids, le PN soutient une pression artérielle saine, ce qui contribue à maintenir un système cardiovasculaire en bonne santé. De plus, il favorise une meilleure santé des reins et du foie en les aidant à fonctionner de manière optimale. Vous serez ravi(e) de constater que notre produit a également des effets positifs sur la digestion, en favorisant une bonne santé intestinale et en améliorant votre confort digestif."
        },
        {
          text: "En l'incorporant dans votre quotidien, vous ressentirez un véritable boost d'énergie qui vous accompagnera tout au long de la journée. Vous pourrez ainsi aborder vos activités quotidiennes avec vitalité et enthousiasme, vous permettant de vous sentir pleinement épanoui(e)."
        },
        {
          text: "Explorez tous les bienfaits de ce produits et ne laissez pas les obstacles entraver vos objectifs de bien-être."
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
      ]
    },
    firstCategory: [getCategoryById("2Beaute").name],
    secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
    picture: "./img/jpg/product/PN.jpg"
  },
  {
    nameProduct: "Dentifrice",
    summary: {
      title: "Une expérience de soin bucco-dentaire exceptionnelle.",
      paragraph: [
        {
          text: "Notre dentifrice est formulé à partir d'ingrédients naturels de haute qualité. Vous n'y trouverez aucun produit chimique agressif. Il offre un blanchiment naturel en éliminant les tâches en douceur et vous aide à obtenir des dents plus éclatantes qui illumine votre sourire. Il est enrichi en extraits de plantes apaisants et antibactériens pour vous aider à maintenir des gencives saines et revitalisées."
        },
        {
          text: "Avec l'huile essentielle de menthe poivrée, notre produit laisse une agréable sensation de fraîcheur dans votre bouche. Dites adieu à la mauvaise haleine et profitez d'une bouffée de fraîcheur durable après chaque brossage."
        },
        {
          text: "Notre dentifrice est sans fluorure pour ceux qui préfèrent éviter cet élément, sans triclosan qui peut être nocif, sans paraben pour une tranquillité d'esprit, sans édulcorants artificiels pour une saveur pure, et sans colorants pour une expérience naturelle authentique."
        },
        {
          text: "Découvrez une nouvelle façon de prendre soin de votre sourire, naturellement."
        }
      ]
    },
    firstCategory: [getCategoryById("2Beaute").name],
    secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
    picture: "./img/jpg/product/dentifrice.jpg"
  }
];
