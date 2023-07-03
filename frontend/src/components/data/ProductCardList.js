import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductDetails from "../ProductDetails";
import { productList } from "../../data/productList";
import ProductCard from "./ProductCard";

const ProductCardList = ({
  selectedRadio,
  setSelectedRadio,
  selectedSubRadio,
  selectedProduct,
  setSelectedProduct,
  isActive,
  setIsActive,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleProductClick = (uniqueProduct) => {
    setSelectedProduct(uniqueProduct);
    setSelectedRadio(uniqueProduct.firstCategory);
    setSelectedRadio(uniqueProduct.secondCategory);
    setIsActive(true);
  };

  useEffect(() => {
    const handleResizeWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWidth);
    return () => window.removeEventListener("resize", handleResizeWidth);
  }, []);

  return (
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
          productList
            .filter((product) =>
              selectedRadio
                ? product.firstCategory.includes(selectedRadio)
                : true
            )
            .filter((product) =>
              selectedSubRadio
                ? product.secondCategory.includes(selectedSubRadio)
                : true
            )
            .sort((a, b) => a.nameProduct.localeCompare(b.nameProduct))
            .map((productDetails, index) => (
              <ProductCard
                key={index}
                product={productDetails}
                onProductClick={handleProductClick}
              />
            ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProductCardList;
