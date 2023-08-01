import React, { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

import ProductCard from "./ProductCard";
import { productList } from "../../data/productList";
import { RadioContext } from "../utils/radioContext";

const ProductCardList = () => {
  const {
    isActive,
    setIsActive,
    selectedRadio,
    setSelectedRadio,
    selectedSubRadio,
    setSelectedSubRadio
  } = useContext(RadioContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedRadio(product.firstCategory[0]);
    setSelectedSubRadio(product.secondCategory[0]);
    setIsActive(true);
    scroller.scrollTo("productList", {
      smooth: "easeInOutQuint",
      duration: 1000,
      offset: -125
    });
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    const handleResizeWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWidth);
    return () => window.removeEventListener("resize", handleResizeWidth);
  }, []);

  return (
    <div className="arrayProductCardContainer">
      <motion.div
        initial={{ width: "100vw", x: 0 }}
        animate={{
          width:
            isActive && windowWidth <= 1072
              ? "100vw"
              : isActive && windowWidth >= 1073 && windowWidth <= 1439
              ? "70vw"
              : isActive && windowWidth >= 1440 && windowWidth < 1600
              ? "85vw"
              : "100vw",
          x:
            isActive && windowWidth >= 1073 && windowWidth < 1239
              ? 150
              : isActive && windowWidth >= 1240
              ? 200
              : 0
        }}
        className="arrayProductCard"
      >
        {productList
          .filter((product) =>
            selectedRadio ? product.firstCategory.includes(selectedRadio) : true
          )
          .filter((product) =>
            selectedSubRadio
              ? product.secondCategory.includes(selectedSubRadio)
              : true
          )
          .sort((a, b) => a.nameProduct.localeCompare(b.nameProduct))
          .map((productDetails) => (
            <ProductCard
              key={productDetails.nameProduct}
              product={productDetails}
              onProductClick={handleProductClick}
            />
          ))}{" "}
      </motion.div>
    </div>
  );
};

export default ProductCardList;
