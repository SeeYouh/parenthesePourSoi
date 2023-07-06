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
  return null; // retourne null si l'ID de la sous-catégorie n'est pas trouvé
};

export const productList = [
  {
    nameProduct: "Détox’",
    summary: {
      title: "Nettoyer son corps en profondeur.",
      paragraph: [
        {
          text: "La base essentielle de toute cure minceur est le nettoyage du corps afin de le préparer à une perte de poids saine et durable.",
        },
        {
          text: "Notre produit agit comme un véritable agent de détoxification, absorbant les toxines présentes dans votre corps et les transportant hors de celui-ci. Ces toxines, issues de votre métabolisme et de votre environnement, peuvent s'accumuler dans vos organes émonctoires, tels que le foie, les reins, les poumons, les intestins et la peau. Lorsque ces organes sont surchargés de toxines, des problèmes de santé peuvent survenir. En optant pour notre produit, vous permettez à votre corps de se débarrasser de ces toxines, favorisant ainsi une gestion du poids plus efficace et une meilleure santé globale.",
        },
        {
          text: "Les ingrédients présents dans cette détox’ protège vos cellules contre le stress oxydatif grâce à la présence de vitamine E dans certains ingrédients. De plus, ils renforcent votre système immunitaire, maintiennent la santé de vos muqueuses et permettent un fonctionnement normal de la thyroïde, jouant ainsi un rôle clé dans la gestion du poids.",
        },
        {
          text: "En rééquilibrant votre système digestif, notre produit diminue les ballonnements, les gaz, la constipation et la diarrhée. De plus, il contribue à réduire la cellulite, vous offrant ainsi une silhouette plus harmonieuse.",
        },
        {
          text: "Notre produit booste l'énergie naturelle de votre corps, vous permettant ainsi de retrouver une vitalité et un bien-être général. Vous vous sentirez revitalisé(e), prêt(e) à faire face aux défis quotidiens avec une énergie renouvelée.",
        },
        {
          text: "Optez pour notre détox, c’est choisir un produit révolutionnaire conçu pour vous aider à atteindre vos objectifs de perte de poids tout en favorisant un bien-être optimal.",
        },
      ],
    },
    firstCategory: [getCategoryById("0GestionDuPoids").name],
    secondCategory: [
      getSecondCategoryById("0GestionDuPoids0Detoxification").text,
    ],
    picture: "./img/png/product/Détox’.png",
  },
  {
    nameProduct: "BB",
    summary: {
      title: "Le secret d’un éclat intérieur et extérieur.",
      paragraph: [
        {
          text: "Notre produit a une capacité exceptionnelle à régénérer les cellules. ",
        },
        {
          text: "Sa formule accélère la pousse des ongles et des cheveux, vous permettant ainsi de profiter d'une chevelure plus abondante et d'ongles forts et sains. En augmentant la production de kératine, notre produit revitalise en profondeur vos cheveux, les rendant plus résistants à la casse et leur redonnant brillance et vitalité. De plus, il réduit considérablement la chute des cheveux, vous offrant ainsi une chevelure dense et volumineuse qui fera des envieux.",
        },
        {
          text: "Notre produit booste votre énergie naturelle. Il agit comme un véritable stimulant, vous offrant une énergie durable tout au long de la journée. De plus, il augmente les fonctions mentales, vous aidant à rester concentré(e) et alerte, même dans les moments les plus intenses. Vous vous sentirez prêt(e) à relever tous les défis qui se présentent à vous.",
        },
        {
          text: "Grâce à son pouvoir régénérateur cellulaire exceptionnel, notre produit réduit efficacement les problèmes cutanés : rougeurs, démangeaisons et psoriasis qui perturbent votre vie quotidienne, vous permettant ainsi de retrouver une peau saine et apaisée. De plus, il diminue l'acné et régule l'excès de sébum, offrant une solution naturelle pour les peaux grasses. Notre formule restreint également les pellicules, vous offrant un cuir chevelu sain et sans démangeaisons. Enfin, notre produit contribue à améliorer le bon fonctionnement du système nerveux, favorisant ainsi votre bien-être global.",
        },
        {
          text: "Que vous souhaitiez améliorer votre santé globale ou simplement dynamiser votre routine beauté, ce puissant complément vous procurera une sensation de renouveau et de vitalité.",
        },
      ],
    },
    firstCategory: [getCategoryById("2Beaute").name],
    secondCategory: [getSecondCategoryById("2Beaute2SoinsCorps").text],
    picture: "./img/png/product/BB.png",
  },
  {
    nameProduct: "Mère de Tous",
    summary: {
      title: "Un produit breveté et unique.",
      paragraph: [
        {
          text: "Ce produit est breveté et donc disponible uniquement dans notre boutique. Il est unique car a été formulé avec 36 des ingrédients naturels les plus puissants du monde.",
        },
        {
          text: "Notre produit agit comme un puissant anti-inflammatoire, soulageant les douleurs musculaires, articulaires et les maladies chroniques douloureuses. Il offre un répit bienvenu et vous permet de retrouver une mobilité et un confort que vous méritez.",
        },
        {
          text: "Il booste naturellement l'énergie de votre corps, combat la fatigue et améliore votre humeur. Il soutient également un équilibre psychologique et une clarté mentale, vous permettant de faire face aux défis quotidiens avec sérénité.",
        },
        {
          text: "Grâce à sa capacité à protéger les cellules, notre produit favorise une santé optimale. Il soutient également votre système immunitaire, ce qui est particulièrement important pour une guérison plus rapide lors de rhumes ou de périodes de pandémie. De plus, il soulage les allergies, combat l'acné, favorise la digestion et soulage les brûlures d'estomac. Notre produit contribue également à réguler le taux de cholestérol, à stabiliser le diabète et à lutter contre la constipation.",
        },
        {
          text: "Pour vous, mesdames, ce produit offre un soulagement appréciable pour les règles douloureuses, vous permettant de vivre cette période de manière plus confortable.",
        },
        {
          text: "Et ce n’est pas tout ! Ce produit est également connu pour accélérer le processus de bronzage. Vous pouvez profiter d'une peau rayonnante et d'un teint hâlé en seulement 30 minutes d'exposition, équivalant à 2 heures de bronzage.",
        },
        {
          text: "Prenez le contrôle de vos maux pour retrouver un état de bien-être et une vie plus confortable.",
        },
      ],
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre3Humeur").text],
    picture: "./img/png/product/Mère de Tous.png",
  },
  {
    nameProduct: "Booster d’énergie",
    summary: {
      title: "Un mélange vivifiant pour booster votre journée.",
      paragraph: [
        {
          text: "Notre booster d’énergie est le véritable catalyseur de votre bien-être. Il dynamise votre corps en stimulant votre énergie naturelle, combat efficacement la fatigue et vous aide à retrouver un sommeil réparateur. En favorisant la bonne humeur et la gaieté, il contribue à une vision positive de la vie. De plus, il est votre allié pour diminuer le stress et l'anxiété, vous permettant de vous sentir léger(e) et détendu(e) au quotidien.",
        },
        {
          text: "Notre produit est également une solution efficace pour vous aider à atteindre vos objectifs de gestion du poids. Grâce à ses propriétés détoxifiantes, il élimine les toxines accumulées dans votre corps, favorisant ainsi une meilleure combustion des graisses, augmentée de 17%. ",
        },
        {
          text: "Votre santé est notre priorité. Notre booster d’énergie stimule votre système immunitaire et cardiovasculaire, renforçant ainsi votre résistance aux maladies et protégeant votre cœur. Les oméga 6 et 9 présents dans notre formule améliorent l'attention et la vigilance mentale, vous permettant de rester concentré(e) et productif(ve) tout au long de la journée. De plus, il combat les manifestations allergiques et favorise une digestion saine, améliorant le transit intestinal et optimisant le fonctionnement de vos organes.",
        },
        {
          text: "Grâce à ses propriétés antioxydantes exceptionnelles, notre produit réduit visiblement les signes de l'âge, vous offrant une peau éclatante et rajeunie. En nourrissant votre peau de manière profonde, il révèle votre beauté naturelle, vous permettant de vous sentir confiant(e) et épanoui(e) dans votre propre peau.",
        },
        {
          text: "Mesdames, notre booster d’énergie a aussi des effets sur les désagréments féminins car il diminue efficacement les douleurs menstruelles, soulageant ainsi les gênes liées à votre cycle. De plus, il prévient les infections urinaires, vous offrant une protection essentielle pour votre santé intime.",
        },
        {
          text: "Faites le choix d’un bien-être optimal et votre corps vous remerciera pour cette décision qui va changer votre quotidien !",
        },
      ],
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre3Humeur").text],
    picture: "./img/png/product/Booster d’énergie.png",
  },
  {
    nameProduct: "Collagènoni",
    summary: {
      title: "Un produit de santé globale qui fait rajeunir.",
      paragraph: [
        {
          text: "Le collagène est une protéine essentielle qui compose la structure de la peau mais également des cheveux, des ongles, des cartilages, des muscles, des tendons, des os, des articulations et des vaisseaux sanguins.",
        },
        {
          text: "A partir de l’âge de 25 ans, nous perdons environ 1% de collagène chaque année. Cette protéine n’est pas renouvelée naturellement. C’est ce que l’on appelle le vieillissement cutané. C'est à ce stade que l'on peut commencer à remarquer l'apparition de ridules, de rides et une perte de fermeté de la peau. Nous pouvons également ressentir des douleurs musculaires, articulaires et osseuses.",
        },
        {
          text: "Notre produit favorise le renouvellement cellulaire. En stimulant ce processus naturel, il aide à éliminer les cellules mortes et à régénérer la peau, vous offrant ainsi un teint plus frais, plus lumineux et plus éclatant. En augmentant l'élasticité de la peau, il lui procure une hydratation en profondeur, réduisant ainsi les signes de sécheresse et de déshydratation. Il lutte efficacement contre les rides, ridules et cernes, vous permettant de retrouver une peau lisse, ferme et éclatante. Notre formule aide également à diminuer l'apparence des tâches pigmentaires, vous offrant un teint plus uniforme et éclatant.",
        },
        {
          text: "Enfin, notre produit renforce les ongles fragiles et les cheveux ternes, en leur apportant les nutriments essentiels pour leur santé et leur vitalité.",
        },
        {
          text: "La synergie du collagène marin avec le Noni, un fruit de Tahiti aux vertus multiples, permet de diminuer les douleurs corporelles, vous offrant un soulagement naturel pour les tensions musculaires et les inconforts articulaires.",
        },
        {
          text: "Optez pour ce produit, c’est retrouver une peau plus ferme, une apparence rajeunie et un bien-être intérieur total.",
        },
      ],
    },
    firstCategory: [getCategoryById("2Beaute").name],
    secondCategory: [getSecondCategoryById("2Beaute1SoinsVisage").text],
    picture: "./img/png/product/Collagène.png",
  },
  {
    nameProduct: "Régénérateur cellulaire",
    summary: {
      title: "Un support quotidien.",
      paragraph: [
        {
          text: "Notre produit est le best seller de notre boutique car il est l’allié ultime pour améliorer la qualité de votre peau. Grâce à son action sur la régénération cellulaire, il favorise l'élasticité et la fermeté de votre peau, vous offrant ainsi un teint éclatant et une apparence plus jeune. Que vous souhaitiez réduire la cellulite, atténuer les vergetures, traiter l'acné ou apaiser les problèmes d'eczéma et de psoriasis, notre produit est votre solution !",
        },
        {
          text: "En plus de ses bienfaits pour la peau, notre produit soutient également votre santé globale. Il contribue à la santé cardiovasculaire en renforçant le système nerveux et immunitaire. Grâce à sa teneur en vitamine C, il favorise la formation et le maintien du collagène, essentiel pour la santé des tissus, des cartilages, des ligaments et des os. De plus, il aide à la réparation osseuse après une intervention chirurgicale et diminue les rhumes, vous offrant ainsi une meilleure résistance aux maladies.",
        },
        {
          text: "Nous croyons en la beauté naturelle de chaque individu. Notre produit accélère la cicatrisation des plaies et améliore l'aspect des cicatrices, vous permettant ainsi de retrouver une peau lisse et uniforme. Que ce soit pour des cicatrices post-chirurgicales ou des marques d'acné, notre produit vous aide à retrouver une confiance éclatante.",
        },
        {
          text: "En stimulant votre énergie naturelle, notre produit vous offre une vitalité renouvelée. Il vous aide à vous sentir plus dynamique et épanoui(e) au quotidien. De plus, il contribue à diminuer la rétention d'eau, soulageant ainsi les sensations de gonflement des mains et des pieds. En améliorant la circulation sanguine, il soulage les jambes lourdes et douloureuses. Son pouvoir antioxydant favorise également les fonctions respiratoires, apaisant les allergies et les symptômes de l'asthme.",
        },
        {
          text: "Un produit unique pour des bienfaits multiples.",
        },
      ],
    },
    firstCategory: [getCategoryById("1Sante").name],
    secondCategory: [getSecondCategoryById("1Sante0ProblemesCutanes").text],
    picture: "./img/png/product/Régénérateur cellulaire.png",
  },
  {
    nameProduct: "Bien-être intérieur",
    summary: {
      title: "Équilibrez votre corps, équilibrez votre vie.",
      paragraph: [
        {
          text: "Notre produit agit en régulant votre microbiote, favorisant ainsi un équilibre optimal. Le microbiote est essentiel pour votre bien-être, car il participe à de nombreuses fonctions, de la digestion à l'absorption des nutriments, en passant par le renforcement de votre système immunitaire. En rétablissant l'équilibre de votre microbiote, notre produit contribue à améliorer votre santé globale et à prévenir divers troubles digestifs et maladies chroniques associées. Le pouvoir antioxydant de notre produit aide à neutraliser les toxines présentes dans votre organisme. Il contribue également à diminuer les troubles digestifs en maintenant l'équilibre des bonnes bactéries et en améliorant la flore intestinale. Recommandé pour les maladies chroniques telles que le côlon irritable et la maladie de Crohn (avec avis médical), il améliore également votre santé globale.",
        },
        {
          text: "Notre produit de bien-être intérieur joue un rôle clé dans la gestion du poids en contrôlant la satiété et en réduisant les envies de sucre et de gras. En favorisant un microbiote équilibré, il permet de vous aider à atteindre et maintenir un poids santé. De plus, il booste votre système immunitaire, facilite l'absorption des nutriments et régule le taux de cholestérol.",
        },
        {
          text: "Notre produit vous offre un bien-être complet en boostant l'énergie naturelle de votre corps grâce à la synthèse des vitamines B et K. Il contribue également à réduire le stress et l'anxiété, à combattre la fatigue, à améliorer la qualité du sommeil et à stimuler votre humeur, vous permettant ainsi de profiter pleinement de chaque journée.",
        },
        {
          text: "Notre produit offre des bienfaits spécifiques pour les femmes en diminuant les troubles vaginaux et en améliorant le tractus génital. Il vous permet de prendre soin de votre santé intime de manière naturelle et équilibrée.",
        },
        {
          text: "Expérimentez ce produit, c’est côtoyez un bien-être intérieur inégalé !",
        },
      ],
    },
    firstCategory: [getCategoryById("1Sante").name],
    secondCategory: [
      getSecondCategoryById("1Sante1TroublesDigestifsIntestinauxRespiratoires")
        .text,
    ],
    picture: "./img/png/product/Bien-être-intérieur.png",
  },
  {
    nameProduct: "Equilibre corps et esprit",
    summary: {
      title: "Harmonisez votre corps pour un équilibre complet.",
      paragraph: [
        {
          text: "Tout au long de votre vie, votre corps subit d'importants changements significatifs, tant à l’intérieur qu’à l’extérieur.",
        },
        {
          text: "Notre produit joue un rôle essentiel en soutenant la division cellulaire, en préservant les fonctions psychologiques normales et en favorisant un métabolisme énergétique optimal. Il fournit à votre corps les outils nécessaires pour maintenir une santé optimale. En le prenant avant de vous coucher, vous vous réveillerez chaque jour en vous sentant régénéré. ",
        },
        {
          text: "Restez actif et plein d’énergie à chaque étape de votre vie !",
        },
      ],
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre1Energie").text],
    picture: "./img/png/product/Equilibre corps et esprit.png",
  },
  {
    nameProduct: "Gouttes minceur",
    summary: {
      title: "Laissez les éléments naturels agir en votre faveur.",
      paragraph: [
        {
          text: "Avec ses deux fioles uniques sous forme de gouttes, ce produit offre un avantage de pointe en soutenant votre apport nutritionnel quotidien.",
        },
        {
          text: "Ces gouttes sont spécialement conçues pour réguler l’appétit, favoriser la combustion des graisses sous-cutanées et viscérales, ainsi que d’améliorer la digestion et le sommeil afin d’éviter le stockage de nouvelles graisses pendant la nuit.",
        },
        {
          text: "Elles s’intègrent facilement dans votre mode de vie et ont des résultats prouvés !",
        },
        {
          text: "Prenez le contrôle de votre corps en utilisant des produits uniques.",
        },
      ],
    },
    firstCategory: [getCategoryById("0GestionDuPoids").name],
    secondCategory: [
      getSecondCategoryById("0GestionDuPoids1AidePertePoids").text,
    ],
    picture: "./img/png/product/Gouttes minceur.png",
  },
  {
    nameProduct: "Harmonie",
    summary: {
      title: "Soutenez votre corps et votre beauté.",
      paragraph: [
        {
          text: "La beauté prend son essence de l’intérieur : n’est-il pas temps de libérer la version la plus rayonnante de vous-même ?",
        },
        {
          text: "Détoxifiant, antidépresseur, anti-âge, gestion des douleurs, problèmes cutanés… Un seul produit pour de nombreux bienfaits.",
        },
        {
          text: "Faites ressortir le meilleur de votre corps grâce à ce puissant mélange de plantes et de nutriments que vous trouverez dans ce produit.",
        },
        {
          text: "Soyez en forme la journée et dormez paisiblement la nuit.",
        },
      ],
    },
    firstCategory: [getCategoryById("3BienEtre").name],
    secondCategory: [getSecondCategoryById("3BienEtre2FatigueSommeil").text],
    picture: "./img/png/product/Harmonie.png",
  },
  {
    nameProduct: "Os et Muscles",
    summary: {
      title:
        "Soutenez votre santé musculaire et osseuse avec notre produit essentiel.",
      paragraph: [
        {
          text: "Ce mélange unique de vitamines et de minéraux, incluant du calcium, de la vitamine D et du magnésium, est spécialement conçu pour favoriser la santé des muscles et des os.",
        },
        {
          text: "Sa formule pratique et simple vous offre une source fiable de nutriments essentiels. De plus, notre ajout d’un mélange de curcuma et de gingembre apporte des bienfaits supplémentaires.",
        },
        {
          text: "Un produit efficace pour soutenir la santé musculaire et osseuse !",
        },
      ],
    },
    firstCategory: [getCategoryById("1Sante").name],
    secondCategory: [getSecondCategoryById("1Sante2SystemesCorps").text],
    picture: "./img/png/product/Os et Muscles.png",
  },
];
