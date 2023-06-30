import React, { useState } from "react";
import { productList } from "../../data/productList";
import { generalDataImg } from "../../data/generalData";

const Product = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let productCardClass = isHovered
    ? "bgProductCard bgColorHover"
    : "bgProductCard";
  return (
    <div
      className={productCardClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="productCard">
        <img key={index} src={product.picture} alt={product.nameProduct} />
        <div className="textProductCard">
          <h1>{product.nameProduct} </h1>
          <h2>{product.summary.title} </h2>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const { selectedRadio, setSelectedRadio } = useState("");

  const category = [
    "Gestion du poids",
    "Santé",
    "Beauté",
    "Bien-être",
    "Huiles essentielles",
    "Purification",
    "Profils particuliers",
  ];

  return (
    <main>
      <div className="navbar">
        <img
          className="logo"
          key={generalDataImg[3].id}
          src={generalDataImg[3].src}
          alt={generalDataImg[3].alt}
        />

        <div className="all-menu-navbar">
          {/* récupère la totalité des menus des produits et les intègres à une balise "li" */}
          {category.map((menu, index) => (
            <li className={`cursor menu-navbar ${index}`} key={index}>
              <input
                type="radio"
                id={menu}
                className="active"
                name="categorie"
                checked={menu === selectedRadio}
                onChange={() => setSelectedRadio(menu)}
              />
              <label className="btn btn-navbar" htmlFor={menu}>
                {menu}
              </label>
              {/* <NavLink className="cursor">
                <button className="btn btn-navbar">{menu}</button>
              </NavLink> */}
              <div className="line"></div>
            </li>
          ))}
        </div>
      </div>

      <div className="arrayProductCard">
        {productList
          // .filter((category) => category.firstCategory[0].includes("santé"))
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
};

export default Card;
