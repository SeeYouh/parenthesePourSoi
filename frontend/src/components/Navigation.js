import React from "react";
import { NavLink } from "react-router-dom";
import { generalDataImg } from "../data/generalData";

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
        key={generalDataImg[3].id}
        src={generalDataImg[3].src}
        alt={generalDataImg[3].alt}
      />
      <div>
        <div className="menuUser all-menu-navbar">
          {/* récupère la totalité des menus utilisateur et les intègres à une balise "li" */}
          {userLinks.map((link, index) => (
            <li className="menu-navbar" key={index}>
              <NavLink className="cursor">
                <button className="btn btn-navbar">{link.name}</button>
              </NavLink>
            </li>
          ))}
        </div>
        <div className="all-menu-navbar">
          {/* récupère la totalité des menus des produits et les intègres à une balise "li" */}
          {category.map((menu, index) => (
            <li
              className={`menu-navbar ${
                index === category.length - 1 ? "textColor" : ""
              }`}
              key={index}
            >
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
