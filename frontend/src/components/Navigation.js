import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const userLinks = ["Créer un compte", "Se connecter"];

  const category = [
    "Gestion du poids",
    "Santé",
    "Beauté",
    "Bien-être",
    "Huiles essentielles",
    "Purification",
    "Enfants",
    "Sport",
    "Produits de saison",
  ];

  return (
    <nav className="navbar">
      <img
        className="logo"
        src="./img/png/Une parenthèse pour soi logo 100px.png"
        alt="Logo Une parenthèse pour soi"
      />
      <div>
        <div className="menuUser all-menu-navbar">
          {userLinks.map((link, index) => (
            <li className="menu-navbar" key={index}>
              <NavLink className="cursor">
                <button className="btn btn-navbar">{link.name}</button>
              </NavLink>
            </li>
          ))}
        </div>
        <div className="all-menu-navbar">
          {category.map((menu, index) => (
            <li className="menu-navbar" key={index}>
              <NavLink className="cursor">
                <button className="btn btn-navbar">{menu}</button>
              </NavLink>
              <div className="line"></div>
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
