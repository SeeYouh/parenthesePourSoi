import React, { useState } from "react";
import Description from "./Description";
// import AdditionnalInformation from "./AdditionnalInformation";
// import AsaComplement from "./AsaComplement";
// import InSummary from "./InSummary";

const ProductDetails = (productDescription) => {
  const descriptionName = productDescription.product.nameProduct;
  const subCategoryProduct = [
    "Description",
    "Résumé",
    "En complément",
    "informations supplémentaires"
  ];

  const [selectedCategoryProduct, setSelectedCategoryProduct] = useState("");

  // const [currentProduct, setCurrentProduct] = useState(productDescription);
  const themeColors = productDescription.product.colors;

  return (
    <>
      <div className="bgProductDetails" key={descriptionName}>
        <div className="imgProduit">
          <img
            src={productDescription.product.picture}
            alt={productDescription.product.alt}
          />
        </div>
        <div className="titleTextProduct">
          <h1
            style={{
              color: themeColors.textColor
            }}
          >
            {productDescription.product.nameProduct}
          </h1>
          <h2
            style={{
              borderBottom: `5px solid ${themeColors.textColor}`,
              borderLeft: `3px solid ${themeColors.textColor}`,
              borderBottomLeftRadius: "20px"
            }}
          >
            {productDescription.product.summary.title}
          </h2>
        </div>
      </div>
      <div className="no-select productTab">
        {subCategoryProduct.map((subCategory) => (
          <li key={subCategory}>
            <label
              htmlFor={subCategory}
              className={`btn btn-navbar ${
                subCategory === selectedCategoryProduct ? "selected" : ""
              }`}
            >
              {subCategory}
            </label>
            <input
              type="radio"
              id={subCategory}
              name="productTab"
              onChange={(e) => setSelectedCategoryProduct(e.target.id)}
              checked={subCategory === selectedCategoryProduct}
            />
          </li>
        ))}
        ;
      </div>
      {/* <AdditionnalInformation
        productDescription={productDescription}
        index={index}
      />
      <AsaComplement productDescription={productDescription} index={index} />
      <InSummary productDescription={productDescription} index={index} /> */}
      <Description productDescription={productDescription} />
    </>
  );
};
export default ProductDetails;
