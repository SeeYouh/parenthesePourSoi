import React from "react";
import { MouseFollower } from "./utils/MouseFollower";

const ProductDetails = (productDescription, index) => {
  console.log(MouseFollower);
  return (
    <div>
      <img
        src={productDescription.product.picture}
        alt={productDescription.nameProduct}
      />
      <h1 key={index}> {productDescription.product.nameProduct} </h1>
      <h2 key={index}> {productDescription.product.summary.title} </h2>
      {productDescription.product.summary.paragraph.map(
        (productDescription, index) => (
          <p key={index}>{productDescription.text}</p>
        )
      )}
    </div>
  );
};

export default ProductDetails;
