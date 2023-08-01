import React, { useContext } from "react";

import ProductCard from "./ProductCard";
import { productList } from "../../data/productList";
import { RadioContext } from "../utils/radioContext";

const ProductCardList = () => {
  const {
    // isActive,
    setIsActive,
    selectedRadio,
    setSelectedRadio,
    selectedSubRadio,
    setSelectedSubRadio
  } = useContext(RadioContext);

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleProductClick = (product) => {
    setSelectedRadio(product.firstCategory[0]);
    setSelectedSubRadio(product.secondCategory[0]);
    setIsActive(true);
  };

  // useEffect(() => {
  //   const handleResizeWidth = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResizeWidth);
  //   return () => window.removeEventListener("resize", handleResizeWidth);
  // }, []);

  return (
    <div className="arrayProductCardContainer">
      <div className="arrayProductCard">
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
              onProductClick={() => {
                handleProductClick(productDetails);
              }}
            />
          ))}{" "}
      </div>
    </div>
  );
};

export default ProductCardList;
