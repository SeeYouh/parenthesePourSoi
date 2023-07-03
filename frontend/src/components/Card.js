import React, { useState } from "react";
import { productList } from "../../data/productList";
import { generalDataImg } from "../../data/generalData";
import ProductCard from "../ProductCard";
import { firstCategoryList } from "../../data/firstCategoryList";
import useHover from "../../hooks/useHover";
import useWindowSize from "../../hooks/useWindowSize";
import useFilter from "../../hooks/useFilter";
import Navbar from "../Navbar";
import CategoryFilter from "../CategoryFilter";
import { AnimatePresence, motion } from "framer-motion";

const Card = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, hoverProps] = useHover();
  const windowWidth = useWindowSize();
  const {
    selectedRadio,
    selectedSubRadio,
    handleCategoryChange,
    handleSubCategoryChange,
  } = useFilter(setIsActive);

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
      <Navbar
        selectedRadio={selectedRadio}
        handleCategoryChange={handleCategoryChange}
        setIsActive={setIsActive}
      />
      <CategoryFilter
        isHovered={isHovered}
        hoverProps={hoverProps}
        selectedRadio={selectedRadio}
        selectedSubRadio={selectedSubRadio}
        handleSubCategoryChange={handleSubCategoryChange}
        isActive={isActive}
        windowWidth={windowWidth}
        filteredProducts={filteredProducts}
      />
    </main>
  );
};

export default Card;
