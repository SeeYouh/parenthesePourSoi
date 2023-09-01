import { getCategoryById, getSecondCategoryById } from "../firstCategoryHelper";

export const purificatAir = {
  nameProduct: "Purificat'Air",
  id: "purificatAir",
  summary: {
    title: "Respirer de l’air purifié ! ",
    paragraph: [
      {
        id: "0purificatAir",
        subTitle: "Purifiez vos espaces ",
        text: (
          <div>
            <p>
              Notre Purificateur d’Air Multi-Effets est la solution ultime pour
              protéger vos espaces, que ce soit à votre domicile ou au bureau.
              Doté d'une technologie de purification avancée à 360 degrés, ce
              purificateur élégant mais fonctionnel améliore considérablement la
              qualité de l'air que vous respirez. Il combat efficacement les
              polluants atmosphériques tout en éliminant jusqu'à 99,99 % des
              microbes et plus de 99,99 %
              <span>
                <style>
                  {`a:visited { 
                    color: "#367898"; 
                  }`}
                </style>

                <a
                  className="btn btn-extLink"
                  href="https://fr.wikipedia.org/wiki/Particule_ultrafine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  des particules ultrafines
                </a>
              </span>
              en suspension dans l'air, mesurant moins de 2,5 micromètres et de
              0,1 à 0,03 micron. De plus, il réduit de manière significative les
              polluants nocifs tels que les contaminants émergents, les produits
              chimiques, les allergènes, les COV et autres.
            </p>
          </div>
        )
      },

      {
        id: "1purificatAir",
        subTitle: "Privilégiez un air sain",
        text: [
          "Le Purificateur d’Air Multi-Effets est doté d'une technologie intelligente qui surveille en temps réel la qualité de l'air et ajuste automatiquement le niveau de filtration. Grâce à la télécommande et au panneau de commande à écran tactile, vous pouvez personnaliser facilement votre filtration d'air, y compris le nettoyage et le remplacement du filtre, les réglages marche-arrêt et les contrôles de vitesse. C'est une solution pratique et efficace pour assurer un environnement de respiration optimal.",
          <div>
            <p>
              Un seul appareil peut filtrer efficacement l'air dans un espace
              aussi vaste qu'un court de tennis ! Grâce à un filtre circulaire à
              plusieurs étapes, comprenant une combinaison de mailles
              métalliques et polymères, de charbon actif, de
              <span>
                <style>
                  {`a:visited { 
                    color: "#367898"; 
                  }`}
                </style>

                <a
                  className="btn btn-extLink"
                  href="https://fr.wikipedia.org/wiki/Filtre_HEPA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  filtre HEPA
                </a>
              </span>
              H13 et de zéolite, le Purificateur d’Air Multi-Effets fournit un
              flux d'air frais et propre à 360 degrés.
            </p>
          </div>,

          "Protégez votre santé et celle de vos proches en investissant dans ce purificateur d’air.  Respirer un air pur et sain est essentiel pour votre bien-être et votre qualité de vie. Faites le choix d'un environnement respiratoire sain et profitez de l'efficacité et de l'élégance de notre purificateur.",
          "Contrairement à certains filtres qui ne ciblent que certaines impuretés, notre purificateur fait tout ! Il capture les squames d'animaux, les poils, la poussière, les produits chimiques, et les odeurs. Vous pouvez ainsi profiter d'un air purifié et sain dans tous vos espaces intérieurs. De plus, notre purificateur est totalement sécurisé pour une utilisation en présence des plus petits, y compris nos amis à quatre pattes ! Grâce à sa fonction de verrouillage pour enfants, vous pouvez garder vos réglages de filtration sécurisés, même en présence des tout-petits les plus curieux."
        ],
        picture675: "/img/jpg/product/purificatAirIllusText675.jpg",
        picture450: "/img/jpg/product/purificatAirIllusText450.jpg",
        picture225: "/img/jpg/product/purificatAirIllusText225.jpg",
        picture900: "/img/jpg/product/purificatAirIllusText900.jpg"
      },

      {
        id: "2purificatAir",
        subTitle: "Respirez sereinement",
        text: (
          <div>
            <p>
              Au cours de la journée, l'air que vous respirez dans des espaces
              intérieurs peut contenir des polluants microscopiques en
              suspension. Notre Purificateur d’Air Multi-Effets utilise une
              technologie innovante pour aspirer ces polluants et ne rejeter que
              de l'air purifié et propre. Avec notre purificateur, vous pouvez
              éliminer les polluants intérieurs tels que le pollen, les
              moisissures, les acariens, les composés organiques volatils et
              d'autres produits chimiques qui peuvent être nocifs pour la santé.
              Notre mode
              <span>
                <style>
                  {`a:visited { 
                    color: "#367898"; 
                  }`}
                </style>

                <a
                  className="btn btn-extLink"
                  href="https://www.psychologies.com/Bien-etre/Prevention/Hygiene-de-vie/Articles-et-Dossiers/Les-ions-negatifs-100-positifs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ions négatifs
                </a>
              </span>
              :
            </p>
            <p>
              libère même des millions de molécules bénéfiques dans l'air,
              offrant ainsi un impact positif sur la qualité de l'air que vous
              respirez !
            </p>
          </div>
        )
      },
      {
        id: "3purificatAir",
        subTitle: "Vous aimerez aussi…",
        text: ""
      },
      {
        id: "4purificatAir",
        subTitle: "",
        text: ""
      }
    ],
    youLikeIt: [
      {
        id: "purificatAir0",
        link: "heRafraichissant",
        pictureLove: "/img/jpg/product/heRafraichissant.jpg",
        pictureLove264: "/img/jpg/product/heRafraichissant264.jpg",
        pictureLove400: "/img/jpg/product/heRafraichissant400.jpg",
        textLove:
          "Notre huile essentielle a une action apaisante et améliore le confort respiratoire en soulageant la toux et en dégageant les voies respiratoires. Elle apaise également les démangeaisons, réduit les rougeurs et calme les piqûres d'insectes, pour une peau apaisée. Grâce à ses propriétés relaxantes, elle détend les tensions musculaires et procure une sensation de calme. De plus, elle est bénéfique pour soulager les douleurs articulaires et atténuer les bouffées de chaleur liées à la ménopause. Pour les sportifs, elle s'avère efficace pour soulager les foulures, les entorses et les douleurs musculaires, favorisant ainsi une récupération plus rapide. Profitez de ses nombreux bienfaits pour améliorer votre quotidien et votre bien-être."
      },

      {
        id: "purificatAir1",
        link: "mereDeTous",
        pictureLove: "/img/jpg/product/mereDeTous.jpg",
        pictureLove264: "/img/jpg/product/mereDeTous264.jpg",
        pictureLove400: "/img/jpg/product/mereDeTous400.jpg",
        textLove:
          "Notre produit est spécialement conçu pour soulager les douleurs grâce à ses ingrédients aux propriétés anti-inflammatoires naturelles. Il offre une expérience apaisante qui vous permettra de retrouver confort et équilibre au quotidien. N'hésitez pas à essayer notre formule pour bénéficier d'un soulagement efficace et naturel contre les douleurs. Profitez d'une vie plus sereine et sans gêne grâce à notre produit bien-être."
      },

      {
        id: "purificatAir2",
        link: "guerisseurMaux",
        pictureLove: "/img/jpg/product/guerisseurMaux.jpg",
        pictureLove264: "/img/jpg/product/guerisseurMaux264.jpg",
        pictureLove400: "/img/jpg/product/guerisseurMaux400.jpg",
        textLove:
          "Ce produit est idéal pour transformer l'apparence de votre peau. Conçu pour cibler les problèmes de cellulite adipeuse et aqueuse, il pénètre en profondeur pour réduire visiblement l'apparence de la cellulite, vous offrant une peau plus ferme et plus lisse. En soutenant votre santé cardiovasculaire, ce super nutriment agit comme un bouclier protecteur contre les maladies cardiaques, tout en favorisant une circulation sanguine optimale. De plus, il booste la santé cognitive grâce à ses acides gras essentiels, et régule la pression artérielle pour une protection accrue du système cardiovasculaire. Contrôlez vos fringales et atteignez vos objectifs de perte de poids grâce à son action ciblée, et réduisez le stress grâce à son effet apaisant et réparateur. Mesdames, notre produit est également là pour vous, en soulageant les douleurs menstruelles et en atténuant les effets de la ménopause, pour un équilibre hormonal optimal. Profitez d'une peau radieuse et d'une santé améliorée avec notre produit polyvalent."
      },

      {
        id: "purificatAir3",
        link: "bb",
        pictureLove: "/img/jpg/product/bb.jpg",
        pictureLove264: "/img/jpg/product/bb264.jpg",
        pictureLove400: "/img/jpg/product/bb400.jpg",
        textLove:
          "Notre produit offre une régénération cellulaire exceptionnelle, stimulant la pousse des ongles et des cheveux pour une chevelure plus abondante et des ongles forts. La formule augmente la production de kératine, revitalisant profondément les cheveux, les rendant plus résistants à la casse et leur redonnant brillance et vitalité. De plus, il réduit efficacement les problèmes cutanés tels que les rougeurs, démangeaisons et psoriasis, offrant une peau apaisée et saine. Il diminue également l'acné et régule l'excès de sébum pour les peaux grasses, tout en restreignant les pellicules pour un cuir chevelu sain et sans démangeaisons. Essayez notre produit pour améliorer le bon fonctionnement de votre système nerveux et favoriser votre bien-être global."
      },

      {
        id: "purificatAir4",
        link: "gourdEau",
        pictureLove: "/img/jpg/product/gourdEau.jpg",
        pictureLove264: "/img/jpg/product/gourdEau264.jpg",
        pictureLove400: "/img/jpg/product/gourdEau400.jpg",
        textLove:
          "Notre Système de Filtration d'Eau est conçu sans substances toxiques telles que le BPA, BPS, bisphénols et l'activité œstrogénique, assurant ainsi une eau pure et sans risque pour votre santé. Vous pouvez filtrer l'eau de n'importe quel endroit grâce à notre technologie avancée, éliminant jusqu'à 99,99% des agents indésirables tels que les microbes, les contaminants émergents, les produits chimiques, les pesticides, les métaux lourds et les trihalométhanes. Avec notre système, vous pouvez boire en toute confiance, sachant que votre eau est propre et sûre, préservant ainsi votre bien-être."
      },

      {
        id: "purificatAir5",
        link: "santePlus",
        pictureLove: "/img/jpg/product/santePlus.jpg",
        pictureLove264: "/img/jpg/product/santePlus264.jpg",
        pictureLove400: "/img/jpg/product/santePlus400.jpg",
        textLove:
          "Le Noni, une pépite naturelle, est un bienfaiteur pour votre système digestif en agissant comme un allié précieux contre les troubles digestifs tels que la constipation et la diarrhée. Il soutient également la solidité de vos os, contribuant au maintien d'une ossature normale et favorisant la santé de vos yeux pour une vision éclatante. En renforçant votre système immunitaire, il agit comme un bouclier protecteur contre les maladies saisonnières grâce à ses propriétés antioxydantes qui protègent vos cellules du stress oxydatif. Adopter le Noni dans votre routine vous permettra de bénéficier d'une santé renforcée et d'une énergie métabolique boostée, vous offrant une vitalité débordante pour accomplir vos activités avec aisance."
      }
    ]
  },
  firstCategory: [getCategoryById("5Purification").name],
  secondCategory: [getSecondCategoryById("5Purification0Air").text],
  picture: "/img/jpg/product/purificatAir.jpg",
  picture264: "/img/jpg/product/purificatAir264.jpg",
  picture400: "/img/jpg/product/purificatAir400.jpg",
  colors: {
    textColor: "#367898",
    titleColorInSummary: "#367898",
    linkTextColor: "#367898",
    bgColorInSummary0: "#72a1b7",
    bgColorInSummary1: "#e7eff3",
    linearGradient0: "linear-gradient(105deg ,#72a1b7, #a2d7ff)",
    linearGradient1: "linear-gradient(to right, #9bbccc, 	#e7eff3)",
    shadowColor: "#e7eff3"
  },
  inSummary: [
    {
      id: "PAiS0",
      title: "Santé",
      text: (
        <ul>
          <li>
            Elimine les polluants de l’air avec une efficacité allant jusqu’à
            99.99%
          </li>
          <li>
            Cible les particules ultra fines telles que la fumée de cigarette,
            le pollen, la poussière…
          </li>
          <li>
            Capte les composés organiques volatils dans la fumée, produits
            chimiques…
          </li>
          <li>
            Elimine les bactéries, moisissures, champignons et virus en
            suspension dans l’air
          </li>
        </ul>
      )
    }
  ]
};
