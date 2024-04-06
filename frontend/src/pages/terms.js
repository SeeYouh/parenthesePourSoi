import React from "react";

import { motion, useScroll, useSpring } from "framer-motion";

import FirstCategoryNavBar from "../components/data/FirstCategoryNavBar";
import Footer from "../components/data/Footer";

const Terms = () => {
  React.useEffect(() => {
    // Identifiant unique pour le script Matomo
    const matomoScriptId = "matomo-tracking-script";

    // Vérifier si le script a déjà été ajouté
    if (!document.getElementById(matomoScriptId)) {
      var _mtm = (window._mtm = window._mtm || []);
      _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });

      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.type = "text/javascript";
      g.async = true;
      g.defer = true;
      g.src =
        "https://une-parenthese-pour-soi.fr/analytics/matomo/js/container_346Tgk5W.js";
      g.id = matomoScriptId; // Attribuer l'identifiant au script
      s.parentNode.insertBefore(g, s);
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="overflowHidden">
      <FirstCategoryNavBar />
      <main className="globalLegalContainer">
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
        <h1 className="legalTitle">Conditions d'utilisation</h1>
        <div className="legalContainer">
          <h2 className="subLegalTitle">Mise à jour le : 15 Août 2023</h2>
          <h2 className="subLegalTitle">Acceptation des conditions</h2>
          <p>
            En accédant, naviguant ou utilisant une-parenthese-pour-soi.fr, vous
            reconnaissez avoir lu, compris et accepté sans réserve les présentes
            conditions d'utilisation. Si vous n'êtes pas d'accord avec ces
            termes, nous vous prions de ne pas accéder ou utiliser ce site.
          </p>
          <h2 className="subLegalTitle"> Modifications des conditions</h2>
          <p>
            une-parenthese-pour-soi.fr se réserve le droit de mettre à jour ou
            de modifier ces conditions à tout moment et sans préavis. Il est de
            votre responsabilité de consulter régulièrement cette page pour
            prendre connaissance des éventuelles modifications.
          </p>
          <h2 className="subLegalTitle">Accès au site</h2>
          <p>
            une-parenthese-pour-soi.fr met tout en œuvre pour assurer un accès
            continu à son site, mais ne peut garantir l'absence d'interruptions
            ou d'erreurs. Nous nous réservons le droit de retirer, modifier ou
            améliorer tout contenu ou service fourni sur le site à notre seule
            discrétion et sans préavis.
          </p>
          <h2 className="subLegalTitle">Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur une-parenthese-pour-soi.fr, y
            compris, mais sans s'y limiter, les textes, graphiques, logos,
            images, vidéos et marques de commerce, sont la propriété exclusive
            de Une Parenthèse pour Soi ou de ses partenaires. Toute
            reproduction, distribution ou utilisation de ces contenus sans
            l'autorisation écrite préalable de Une Parenthèse pour Soi est
            strictement interdite.
          </p>
          <h2 className="subLegalTitle">Marques de commerce</h2>
          <p>
            Les logos, noms et toutes les marques affichées sur le site sont des
            marques déposées ou non déposées appartenant à Une Parenthèse pour
            Soi ou à des tiers. Rien sur une-parenthese-pour-soi.fr ne devrait
            être interprété comme accordant, par implication, estoppel ou
            autrement, une licence ou un droit d'utiliser une marque affichée
            sur le site sans l'autorisation écrite de Une Parenthèse pour Soi ou
            du tiers propriétaire de la marque.
          </p>
          <h2 className="subLegalTitle"> Limitation de responsabilité</h2>
          <p>
            Bien que nous nous efforcions d'assurer l'exactitude et la fiabilité
            des informations sur une-parenthese-pour-soi.fr, nous ne
            garantissons pas qu'elles soient toujours exactes, complètes ou à
            jour. une-parenthese-pour-soi.fr ne peut être tenu responsable de
            tout dommage direct, indirect, consécutif ou spécial résultant de
            l'utilisation ou de l'impossibilité d'utiliser le site.
          </p>
          <h2 className="subLegalTitle">Liens vers d'autres sites</h2>
          <p>
            une-parenthese-pour-soi.fr peut contenir des liens vers des sites
            tiers. Ces liens sont fournis uniquement pour la commodité de
            l'utilisateur. L'inclusion de tout lien n'implique pas une
            recommandation ou une approbation par une-parenthese-pour-soi.fr.
            Nous ne sommes pas responsables du contenu ou des pratiques de ces
            sites tiers.
          </p>
          <h2 className="subLegalTitle">Loi applicable</h2>
          <p>
            Les présentes conditions sont régies par la loi française. Tout
            litige relatif à une-parenthese-pour-soi.fr sera soumis à la
            juridiction exclusive des tribunaux d'Angoulême.
          </p>
          <h2 className="subLegalTitle">Copie et impression</h2>
          <p>
            L'utilisateur est autorisé à copier et imprimer des extraits ou des
            documents de une-parenthese-pour-soi.fr pour un usage personnel et
            non commercial uniquement, à condition que ces copies et impressions
            conservent toutes les mentions de droits d'auteur et autres mentions
            de propriété intellectuelle. La reproduction, la copie ou
            l'impression de tout contenu du site à des fins commerciales est
            strictement interdite sans l'autorisation écrite préalable de Une
            Parenthèse pour Soi.{" "}
          </p>
          <h2 className="subLegalTitle">
            Utilisation autorisée et interdite du site
          </h2>
          <p>
            Vous êtes autorisé à utiliser une-parenthese-pour-soi.fr uniquement
            à des fins légales et conformément aux présentes conditions. Il est
            strictement interdit de :{" "}
          </p>
          <ul>
            <li>
              Compromettre l'intégrité du site, notamment en le surchargeant, en
              le désactivant, en l'endommageant ou en interférant avec son
              utilisation normale.
            </li>
            <li>
              Faire usage de robots, spiders ou autres moyens automatiques pour
              accéder au site, que ce soit pour surveiller, copier ou à d'autres
              fins, sans notre autorisation explicite.{" "}
            </li>
            <li>
              Surveiller ou copier manuellement le contenu du site sans notre
              consentement écrit préalable.{" "}
            </li>
            <li>
              Utiliser des dispositifs ou logiciels qui perturbent le
              fonctionnement correct du site ou qui en compromettent
              l'accessibilité.{" "}
            </li>
            <li>
              Introduire ou propager des virus, chevaux de Troie, vers ou autres
              éléments malveillants ou nuisibles{" "}
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
