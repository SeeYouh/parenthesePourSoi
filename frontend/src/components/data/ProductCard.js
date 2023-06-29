import React, { useState } from "react";
import { productList } from "../../data/productList";

// Nouveau composant pour le produit
const Product = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let productCardClass = isHovered
    ? "bgProductCard bgColorHover"
    : "bgProductCard";
  return (
    <div
      className={productCardClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="productCard">
        <img key={index} src={product.picture} alt={product.altPicture} />
        <div className="textProductCard">
          <h1>{product.nameProduct} </h1>
          <h2>{product.summary.title} </h2>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <main className="arrayProductCard">
      {Array.from({ length: 20 }).map(() =>
        productList.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </main>
  );
};

export default Card;
