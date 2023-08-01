import React from "react";

import { NavLink } from "react-router-dom";

const PagesError = () => {
  return (
    <div>
      <h1>La page demandé n'existe pas !</h1>
      <NavLink to="/">Retour à l'accueil</NavLink>
    </div>
  );
};

export default PagesError;
