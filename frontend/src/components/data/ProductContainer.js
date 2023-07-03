import React, { useState, useEffect } from "react";
import { productList } from "../../data/productList";
import { generalDataImg } from "../../data/generalData";
import ProductCard from "./ProductCard";
import { firstCategoryList } from "../../data/firstCategoryList";
import { useHover } from "../utils/useHover";
import { AnimatePresence, motion } from "framer-motion";
import ProductDetails from "../ProductDetails";

const Card = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedSubRadio, setSelectedSubRadio] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isHovered, hoverProps] = useHover();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const category = [
    "Gestion du poids",
    "Santé",
    "Beauté",
    "Bien-être",
    "Huiles essentielles",
    "Purification",
    "Profils particuliers",
  ];

  useEffect(() => {
    const handleResizeWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWidth);
    return () => window.removeEventListener("resize", handleResizeWidth);
  }, []);

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      setSelectedRadio(e.target.id);
      setSelectedSubRadio("");
      setSelectedProduct("");
      setIsActive(true);
    } else {
      setSelectedRadio("");
      setSelectedSubRadio("");
      setSelectedProduct("");
      setIsActive(false);
    }
  };

  const handleSubCategoryChange = (e) => {
    if (e.target.checked) {
      setSelectedSubRadio(e.target.id);
    } else {
      setSelectedRadio("");
      setSelectedSubRadio("");
      setSelectedProduct("");
      setIsActive(false);
    }
  };

  const handleProductClick = (uniqueProduct) => {
    setSelectedProduct(uniqueProduct);
    setSelectedRadio(uniqueProduct.firstCategory);
    setSelectedSubRadio(uniqueProduct.secondCategory);
    setIsActive(true);
  };

  const filteredProducts = productList
    .filter((productList) =>
      selectedRadio ? productList.firstCategory.includes(selectedRadio) : true
    )
    .filter((productList) =>
      selectedSubRadio
        ? productList.secondCategory.includes(selectedSubRadio)
        : true
    )
    .sort((a, b) => a.nameProduct.localeCompare(b.nameProduct));

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
            setSelectedSubRadio("");
            setSelectedProduct("");
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
      <div
        className={`category ${
          isHovered ? "bgSubCategory subBgColorHover" : "bgSubCategory"
        }`}
        {...hoverProps}
      >
        <AnimatePresence>
          {selectedRadio && (
            <motion.div
              layout
              className={`subCategory ${
                isHovered ? "bgSubCategory subBgColorHover" : "bgSubCategory"
              }`}
              {...hoverProps}
              initial={{ x: -150 }}
              animate={{
                x: 0,
              }}
              exit={{
                x: isActive ? "-100vw" : -150,
              }}
            >
              {firstCategoryList
                .filter((category) => category.name.includes(selectedRadio))
                .map((subCategory) => (
                  <div key={subCategory.id}>
                    <ul>
                      <h1>{subCategory.name}</h1>
                      <div className="lineBottom"></div>
                      <ul>
                        {subCategory.secondCategory.map(
                          (subCategory, index) => (
                            <li key={index}>
                              <input
                                className="active"
                                type="checkbox"
                                name="subCategory"
                                id={subCategory.text}
                                checked={subCategory.text === selectedSubRadio}
                                onChange={handleSubCategoryChange}
                              />
                              <label
                                className={`btn btn-navbar ${
                                  subCategory.text === selectedSubRadio
                                    ? "selected"
                                    : ""
                                }`}
                                htmlFor={subCategory.text}
                              >
                                {subCategory.text}{" "}
                              </label>
                            </li>
                          )
                        )}
                      </ul>
                    </ul>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ x: 0 }}
          animate={{
            x:
              isActive && windowWidth >= 1073 && windowWidth < 1339
                ? 300
                : isActive && windowWidth >= 1340 && windowWidth < 1712
                ? 150
                : 0,
          }}
          className="arrayProductCardContainer"
        >
          <motion.div
            initial={{ width: "100%" }}
            animate={{
              width:
                isActive && windowWidth <= 1072
                  ? "100%"
                  : isActive && windowWidth >= 1073 && windowWidth <= 1339
                  ? "70%"
                  : isActive && windowWidth >= 1340 && windowWidth < 1600
                  ? "80%"
                  : "100%",
            }}
            className="arrayProductCard"
          >
            {selectedProduct ? (
              <ProductDetails product={selectedProduct} />
            ) : (
              filteredProducts.map((productDetails, index) => (
                <ProductCard
                  key={index}
                  product={productDetails}
                  onProductClick={handleProductClick}
                />
              ))
            )}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Card;
