import React, { useState } from "react";

import { generalDataImg } from "../../data/generalData";

const NavBarProduct = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [setSelectedSubRadio] = useState("");
  const [setIsActive] = useState(false);

  const category = [
    "Gestion du poids",
    "Santé",
    "Beauté",
    "Bien-être",
    "Huiles essentielles",
    "Purification",
    "Profils particuliers",
  ];

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      setSelectedRadio(e.target.id);
      setSelectedSubRadio("");
      setIsActive(true);
    } else {
      setSelectedRadio("");
      setSelectedSubRadio("");
      setIsActive(false);
    }
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        key={generalDataImg[3].id}
        src={generalDataImg[3].src}
        alt={generalDataImg[3].alt}
        onClick={() => {
          setSelectedRadio("");
          setSelectedSubRadio("");
          setIsActive(false);
        }}
      />

      <div className="all-menu-navbar">
        {category.map((menu, index) => (
          <li className={`cursor menu-navbar ${index}`} key={index}>
            <input
              type="checkbox"
              id={menu}
              className="active"
              name="categorie"
              checked={menu === selectedRadio}
              onChange={handleCategoryChange}
            />
            <label
              className={`btn btn-navbar ${
                menu === selectedRadio ? "selected" : ""
              }`}
              htmlFor={menu}
            >
              {menu}
            </label>
            <div className="line"></div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default NavBarProduct;
