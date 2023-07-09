// import React, { useContext, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import ProductDetails from "../ProductDetails";
// import { productList } from "../../data/productList";
// import ProductCard from "./ProductCard";
// import { RadioContext } from "../utils/radioContext";
// import { scroller } from "react-scroll";

// const ProductCardList = () => {
//   const {
//     selectedProduct,
//     setSelectedProduct,
//     isActive,
//     setIsActive,
//     selectedRadio,
//     setSelectedRadio,
//     selectedSubRadio,
//     setSelectedSubRadio,
//   } = useContext(RadioContext);

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setSelectedRadio(product.firstCategory[0]);
//     setSelectedSubRadio(product.secondCategory[0]);
//     setIsActive(true);
//     scroller.scrollTo("productList", {
//       smooth: "easeInOutQuint",
//       duration: 1000,
//       offset: -125,
//     });
//   };

//   useEffect(() => {
//     const handleResizeWidth = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResizeWidth);
//     return () => window.removeEventListener("resize", handleResizeWidth);
//   }, []);

//   return (
//     <motion.div
//       initial={{ x: 0 }}
//       animate={{
//         x:
//           isActive && windowWidth >= 1073 && windowWidth < 1339
//             ? 300
//             : isActive && windowWidth >= 1340 && windowWidth < 1712
//             ? 150
//             : 0,
//       }}
//       className="arrayProductCardContainer"
//     >
//       <motion.div
//         initial={{ width: "100%" }}
//         animate={{
//           width:
//             isActive && windowWidth <= 1072
//               ? "100%"
//               : isActive && windowWidth >= 1073 && windowWidth <= 1339
//               ? "70%"
//               : isActive && windowWidth >= 1340 && windowWidth < 1600
//               ? "80%"
//               : "100%",
//         }}
//         className="arrayProductCard"
//       >
//         {selectedProduct ? (
//           <ProductDetails product={selectedProduct} />
//         ) : (
//           productList
//             .filter((product) =>
//               selectedRadio
//                 ? product.firstCategory.includes(selectedRadio)
//                 : true
//             )
//             .filter((product) =>
//               selectedSubRadio
//                 ? product.secondCategory.includes(selectedSubRadio)
//                 : true
//             )
//             .sort((a, b) => a.nameProduct.localeCompare(b.nameProduct))
//             .map((productDetails, index) => (
//               <ProductCard
//                 key={index}
//                 product={productDetails}
//                 onProductClick={handleProductClick}
//               />
//             ))
//         )}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProductCardList;
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductDetails from "../ProductDetails";
import { productList } from "../../data/productList";
import ProductCard from "./ProductCard";
import { RadioContext } from "../utils/radioContext";
import { scroller } from "react-scroll";

const ProductCardList = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    isActive,
    setIsActive,
    selectedRadio,
    setSelectedRadio,
    selectedSubRadio,
    setSelectedSubRadio,
  } = useContext(RadioContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedRadio(product.firstCategory[0]);
    setSelectedSubRadio(product.secondCategory[0]);
    setIsActive(true);
    scroller.scrollTo("productList", {
      smooth: "easeInOutQuint",
      duration: 1000,
      offset: -125,
    });
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
        width: isActive && selectedProduct ? "100%" : "auto",
      }}
      className="arrayProductCardContainer"
    >
      {/* Liste des produits */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{
          width:
            isActive && selectedProduct
              ? "80%"
              : isActive && windowWidth <= 1072
              ? "80%"
              : isActive && windowWidth >= 1073 && windowWidth <= 1339
              ? "80%"
              : isActive && windowWidth >= 1340 && windowWidth < 1600
              ? "80%"
              : "100%",
          display: selectedProduct ? "none" : "block", // Cache la liste lorsque un produit est sélectionné
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
          .map((productDetails, index) => (
            <ProductCard
              key={index}
              product={productDetails}
              onProductClick={handleProductClick}
            />
          ))}
      </motion.div>

      {/* Détails du produit */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{
          width: selectedProduct ? "100%" : "500px", // Utilise toute la largeur lorsqu'un produit est sélectionné
          display: selectedProduct ? "block" : "none", // Affiche les détails lorsque un produit est sélectionné
        }}
        className="productDetailsContainer"
      >
        {selectedProduct ? <ProductDetails product={selectedProduct} /> : null}
      </motion.div>
    </motion.div>
  );
};

export default ProductCardList;
