 productCard
import React, { useState } from "react";
import { useHover } from "../utils/useHover";
import FirstCategoryNavBar from "./FirstCategoryNavBar";
import SecondCategoryNavBar from "./SecondCategoryNavBar";
import ProductCardList from "./ProductCardList";

const Card = () => {
  const [selectedSubRadio, setSelectedSubRadio] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isHovered, hoverProps] = useHover();

  return (
    <main>
      <FirstCategoryNavBar
        selectedRadio={selectedRadio}
        setSelectedRadio={setSelectedRadio}
        selectedSubRadio={selectedSubRadio}
        setSelectedSubRadio={setSelectedSubRadio}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        isActive={isActive}
        setIsActive={setIsActive}
      />
=======
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { firstCategoryList } from "../../data/firstCategoryList";
import { productList } from "../../data/productList";
import ProductCard from "./ProductCard";
import { useHover } from "../utils/useHover";
import NavBarProduct from "./NavBarProduct";

const Card = () => {
  const [selectedRadio] = useState("");
  const [selectedSubRadio, setSelectedSubRadio] = useState("");
  const [isActive] = useState(false);
  const [isHovered, hoverProps] = useHover();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWidth);
    return () => window.removeEventListener("resize", handleResizeWidth);
  }, []);

  const handleSubCategoryChange = (e) => {
    if (e.target.checked) {
      setSelectedSubRadio(e.target.id);
    } else {
      setSelectedSubRadio("");
    }
  };

  const filteredProducts = productList
    .filter((product) =>
      selectedRadio ? product.firstCategory.includes(selectedRadio) : true
    )
    .filter((product) =>
      selectedSubRadio
        ? product.secondCategory.includes(selectedSubRadio)
        : true
    )
    .sort((a, b) => a.nameProduct.localeCompare(b.nameProduct));

  return (
    <main>
      <NavBarProduct />
 main
      <div
        className={`category ${
          isHovered ? "bgSubCategory subBgColorHover" : "bgSubCategory"
        }`}
        {...hoverProps}
      >
        <SecondCategoryNavBar
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
          selectedSubRadio={selectedSubRadio}
          setSelectedSubRadio={setSelectedSubRadio}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          isActive={isActive}
          setIsActive={setIsActive}
          isHovered={isHovered}
          hoverProps={hoverProps}
        />
        <ProductCardList
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
          selectedSubRadio={selectedSubRadio}
          setSelectedSubRadio={setSelectedSubRadio}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
    </main>
  );
};

export default Card;
