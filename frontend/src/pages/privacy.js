import React from "react";

import { motion, useScroll, useSpring } from "framer-motion";

import FirstCategoryNavBar from "../components/data/FirstCategoryNavBar";
import Footer from "../components/data/Footer";

const Privacy = () => {
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
        "https://un-possible.fr.fr/analytics/matomo/js/container_346Tgk5W.js";
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
        <h1 className="legalTitle">Politique de Confidentialité</h1>
        <div className="legalContainer">
          <h2 className="subLegalTitle">Mise à jour le : 26 Juillet 2024</h2>
          <h2 className="subLegalTitle">Cadre et principes généraux</h2>
          <p>
            La présente politique a pour objet d'informer les utilisateurs du
            site un-possible.fr des modalités de collecte, traitement et
            utilisation de leurs données personnelles.
          </p>
          <h2 className="subLegalTitle">Collecte des données</h2>
          <p>
            Lors de la consultation du site, des données peuvent être
            collectées, notamment : l’adresse IP, le navigateur utilisé, la
            durée de consultation, et les pages visitées.{" "}
          </p>
          <h2 className="subLegalTitle">Finalité du traitement</h2>
          <p>
            Les données collectées auprès des utilisateurs ont pour principal
            objectif d'améliorer la qualité du service offert sur le site et de
            répondre aux éventuelles sollicitations des utilisateurs.
          </p>
          <p>
            Nous pourrions traiter les données personnelles que vous nous
            communiquez ou que nous obtenons à votre sujet dans le but de :
          </p>
          <ul>
            <li>
              Donner suite à toute sollicitation ou requête de l'utilisateur, y
              compris pour des fins de souscription à une lettre d'information
              émise par Un Possible.
            </li>
            <li>
              Adapter l'interface du site web en fonction des préférences et
              besoins de l'utilisateur.
            </li>
            <li>
              Agréger des données dans un format anonyme pour des analyses
              statistiques, utilisées en interne ou partagées avec des entités
              tierces.
            </li>
            <li>
              Mettre en œuvre des mesures visant à améliorer la performance et
              l'efficacité du site web.
            </li>
            <li>
              Observer et étudier les comportements et tendances des
              utilisateurs pour optimiser la fonctionnalité du site web.
            </li>
            <li>
              Transmettre des informations ou mises à jour concernant Un
              Possible susceptibles d'intéresser l'utilisateur.
            </li>
            <li>
              Traiter les données pour toute autre finalité explicitement
              indiquée lors de la collecte ou ayant reçu le consentement
              explicite de l'utilisateur.
            </li>
          </ul>
          <h2 className="subLegalTitle">Absence d'utilisation de cookies</h2>
          <p>
            Il est expressément stipulé que le site un-possible.fr ne fait usage
            d'aucun cookie et ne collecte donc aucune donnée via ce procédé.
          </p>
          <h2 className="subLegalTitle">Partage des données avec des tiers</h2>
          <p>
            Les données personnelles des utilisateurs ne sont ni vendues, ni
            échangées, ni louées à des tiers. Elles pourraient toutefois être
            partagées avec des tiers de confiance, dans le cadre strict de
            l'exploitation du site, sous réserve de garanties appropriées de
            confidentialité.
          </p>
          <h2 className="subLegalTitle">Mesures de sécurité</h2>
          <p>
            Des mesures de sécurité techniques et organisationnelles sont mises
            en œuvre pour garantir la protection des données personnelles contre
            tout accès, modification, divulgation ou destruction non autorisé.
          </p>
          <h2 className="subLegalTitle">Modifications</h2>
          <p>
            La présente politique de confidentialité est susceptible d'être
            modifiée. Il incombe aux utilisateurs de consulter régulièrement ce
            document afin de prendre connaissance des éventuelles modifications.
          </p>
          <h2 className="subLegalTitle">Contact</h2>
          <p>
            Pour toute question relative à la présente politique ou pour toute
            demande concernant leurs données personnelles, les utilisateurs
            peuvent contacter l'administrateur du site à{" "}
            <span>webmaster@un-possible.fr</span>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
