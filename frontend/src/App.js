import React from "react";

import Home from "./pages/Home";

const App = () => {
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
  return (
    <div className="home">
      <Home />
    </div>
  );
};

export default App;
