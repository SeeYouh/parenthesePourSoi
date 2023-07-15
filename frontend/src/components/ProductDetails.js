import React, { useState } from "react";
import Description from "./Description";
// import AdditionnalInformation from "./AdditionnalInformation";
// import AsaComplement from "./AsaComplement";
// import InSummary from "./InSummary";

const ProductDetails = (productDescription, index) => {
  const [currentProduct, setCurrentProduct] = useState(productDescription);

  return (
    <>
      <div className="bgProductDetails">
        <div className="imgProduit">
          <img
            src={productDescription.product.picture}
            alt={productDescription.product.alt}
          />
        </div>
        <div className="titleTextProduct">
          <h1 key={index}> {productDescription.product.nameProduct} </h1>
          <h2 key={index}> {productDescription.product.summary.title} </h2>
        </div>
      </div>
      <div className="no-select productTab">
        <input
          type="checkbox"
          id="check"
          className="active"
          name="productTab"
        />
        <label htmlFor="check" className="btn btn-navbar">
          Description
        </label>
        <input
          type="checkbox"
          id="check"
          className="active"
          name="productTab"
        />
        <label htmlFor="check" className="btn btn-navbar">
          Résumé
        </label>
        <input
          type="checkbox"
          id="check"
          className="active"
          name="productTab"
        />
        <label htmlFor="check" className="btn btn-navbar">
          En complément
        </label>
        <input
          type="checkbox"
          id="check"
          className="active"
          name="productTab"
        />
        <label htmlFor="check" className="btn btn-navbar">
          Informations complémentaires
        </label>
      </div>
      {/* <AdditionnalInformation
        productDescription={productDescription}
        index={index}
      />
      <AsaComplement productDescription={productDescription} index={index} />
      <InSummary productDescription={productDescription} index={index} /> */}
      {/* <Description productDescription={productDescription} index={index} /> */}
      <Description
        productDescription={currentProduct}
        onProductChange={setCurrentProduct}
        index={index}
      />
    </>
  );
};
export default ProductDetails;
