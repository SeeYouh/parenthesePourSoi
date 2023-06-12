import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
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
      {/* <div className="search-bar">
        <button className="btn-search color">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          type="search"
          placeholder="Que recherchez-vous ?"
          className="search-label"
          aria-label="Indiquez ici ce que vous recherchez"
        />
      </div> */}
      <div className="all-menu-navbar">
        {category.map((menu) => (
          <li className="menu-navbar">
            <NavLink className="cursor">
              <button className="btn btn-navbar">{menu}</button>
            </NavLink>
            <div className="line"></div>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
