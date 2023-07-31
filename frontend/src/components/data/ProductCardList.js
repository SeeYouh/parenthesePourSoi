// import React, { useContext, useEffect, useState } from "react";

// import { motion } from "framer-motion";
// import { scroller } from "react-scroll";
// import { useNavigate, useParams } from "react-router-dom";

// import ProductCard from "./ProductCard";
// import ProductDetails from "../ProductDetails";
// import { productList } from "../../data/productList";
// import { RadioContext } from "../utils/radioContext";

// const ProductCardList = () => {
//   const {
//     selectedProduct,
//     setSelectedProduct,
//     isActive,
//     setIsActive,
//     selectedRadio,
//     setSelectedRadio,
//     selectedSubRadio,
//     setSelectedSubRadio
//   } = useContext(RadioContext);

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const { id } = useParams(); // Récupère l'identifiant de la catégorie de l'URL
//   const navigate = useNavigate(); // Pour mettre à jour l'URL
//   console.log("id", id);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setSelectedRadio(product.firstCategory[0]);
//     setSelectedSubRadio(product.secondCategory[0]);
//     setIsActive(true);
//     scroller.scrollTo("productList", {
//       smooth: "easeInOutQuint",
//       duration: 1000,
//       offset: -125
//     });
//     navigate(`/category/${id}/product/${product.id}`);
//   };

//   useEffect(() => {
//     const handleResizeWidth = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResizeWidth);
//     return () => window.removeEventListener("resize", handleResizeWidth);
//   }, []);

//   useEffect(() => {
//     if (id) {
//       setSelectedRadio(id);
//     }
//   }, [id, setSelectedRadio]);

//   return (
//     <div className="arrayProductCardContainer">
//       <motion.div
//         initial={{ width: "100vw", x: 0 }}
//         animate={{
//           width:
//             isActive && windowWidth <= 1072
//               ? "100vw"
//               : isActive && windowWidth >= 1073 && windowWidth <= 1439
//               ? "70vw"
//               : isActive && windowWidth >= 1440 && windowWidth < 1600
//               ? "85vw"
//               : "100vw",
//           x:
//             isActive && windowWidth >= 1073 && windowWidth < 1239
//               ? 150
//               : isActive && windowWidth >= 1240
//               ? 200
//               : 0,
//           display: selectedProduct ? "none" : "flex"
//         }}
//         className="arrayProductCard"
//       >
//         {productList
//           .filter((product) =>
//             id
//               ? product.firstCategory.includes(id)
//               : selectedRadio
//               ? product.firstCategory.includes(selectedRadio)
//               : true
//           )
//           .filter((product) =>
//             selectedSubRadio
//               ? product.secondCategory.includes(selectedSubRadio)
//               : true
//           )
//           .sort((a, b) => a.nameProduct.localeCompare(b.nameProduct))
//           .map((productDetails) => (
//             <ProductCard
//               key={productDetails.nameProduct}
//               product={productDetails}
//               onProductClick={handleProductClick}
//             />
//           ))}{" "}
//       </motion.div>
//       <motion.div
//         initial={{ width: "0%" }}
//         animate={{
//           width: selectedProduct ? "90vw" : "0%", // Utilise toute la largeur lorsqu'un produit est sélectionné
//           display: selectedProduct ? "block" : "none" // Affiche les détails lorsque un produit est sélectionné
//         }}
//         className="productDetailsContainer"
//       >
//         {selectedProduct ? <ProductDetails product={selectedProduct} /> : null}
//       </motion.div>
//     </div>
//   );
// };

// export default ProductCardList;
import React, { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { useParams } from "react-router-dom";

import ProductCard from "./ProductCard";
import ProductDetails from "../ProductDetails";
import { productList } from "../../data/productList";
import { RadioContext } from "../utils/radioContext";

const ProductCardList = () => {
  const { id } = useParams();
  const {
    selectedProduct,
    setSelectedProduct,
    isActive,
    setIsActive,
    selectedSubRadio
    // setSelectedSubRadio
  } = useContext(RadioContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsActive(true);
    scroller.scrollTo("productList", {
      smooth: "easeInOutQuint",
      duration: 1000,
      offset: -125
    });
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
              : 0,
          display: selectedProduct ? "none" : "flex"
        }}
        className="arrayProductCard"
      >
        {productList
          .filter((product) => (id ? product.firstCategory.includes(id) : true))
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
      <motion.div
        initial={{ width: "0%" }}
        animate={{
          width: selectedProduct ? "90vw" : "0%", // Utilise toute la largeur lorsqu'un produit est sélectionné
          display: selectedProduct ? "block" : "none" // Affiche les détails lorsque un produit est sélectionné
        }}
        className="productDetailsContainer"
      >
        {selectedProduct ? <ProductDetails product={selectedProduct} /> : null}
      </motion.div>
    </div>
  );
};

export default ProductCardList;
