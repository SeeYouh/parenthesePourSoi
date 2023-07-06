import React from "react";

const ProductDetails = (productDescription, index) => {
  return (
    <>
      <div className="bgProductDetails">
        <div className="imgProduit">
          <img src={productDescription.product.picture} />
        </div>
        <div className="titleTextProduct">
          <h1 key={index}> {productDescription.product.nameProduct} </h1>
          <h2 key={index}> {productDescription.product.summary.title} </h2>
        </div>
      </div>
      {productDescription.product.summary.paragraph.map(
        (productDescription, index) => (
          <p key={index}>{productDescription.text}</p>
        )
      )}
    </>
  );
};
export default ProductDetails;
