import React, { useState } from "react";
import { productList } from "../../data/productList";
import { generalDataImg } from "../../data/generalData";
import ProductCard from "./ProductCard";
import SubCategory from "./SubCategory";
import { firstCategoryList } from "../../data/firstCategoryList";
import { useHover } from "../utils/useHover";
import { AnimatePresence, motion } from "framer-motion";

const Card = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isHovered, hoverProps] = useHover();

  let subCategryClass = isHovered
    ? "bgSubCategory subBgColorHover"
    : "bgSubCategory";

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
      {/* récupère la totalité des sous-menus des produits et les intègres à une
      balise "li"*/}
      <div className={`category ${subCategryClass}`} {...hoverProps}>
        <AnimatePresence>
          {selectedRadio && (
            <motion.div
              layout
              className={`subCategory ${subCategryClass}`}
              {...hoverProps}
              initial={{ x: -400, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {firstCategoryList
                .filter((category) => category.name.includes(selectedRadio))
                .map((subCategory, index) => (
                  <SubCategory key={index} subCategory={subCategory} />
                ))}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isActive ? 300 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="arrayProductCardContainer"
        >
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: isActive ? "70%" : "100%" }}
            className="arrayProductCard"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Card;
