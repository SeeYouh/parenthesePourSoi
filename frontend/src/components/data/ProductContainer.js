import React, { useState } from "react";
import { productList } from "../../data/productList";
import { generalDataImg } from "../../data/generalData";
import ProductCard from "./ProductCard";
import SubCategory from "./SubCategory";
import { firstCategoryList } from "../../data/firstCategoryList";

const Card = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isActive, setIsActive] = useState(false);

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
          onClick={() => {
            setSelectedRadio("");
            setIsActive(false);
          }}
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
                onChange={(e) => {
                  setSelectedRadio(e.target.id);
                  setIsActive(true);
                }}
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

      <div className="category">
        {selectedRadio && (
          <div className="subCategory">
            {firstCategoryList
              .filter((category) => category.name.includes(selectedRadio))
              .map((subCategory, index) => (
                <SubCategory key={index} subCategory={subCategory} />
              ))}
          </div>
        )}

        <div className={`arrayProductCard ${isActive ? "padding-left" : ""}`}>
          {productList
            .filter((category) =>
              selectedRadio
                ? category.firstCategory.includes(selectedRadio)
                : true
            )
            .sort((a, b) => a.nameProduct.localeCompare(b.nameProduct))
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Card;
