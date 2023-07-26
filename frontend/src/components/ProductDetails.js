import React, { useState } from "react";

import Description from "./Description";
import InSummary from "./InSummary";
import AsaComplement from "./AsaComplement";
import AdditionnalInformation from "./AdditionnalInformation";

const ProductDetails = (productDescription) => {
  const descriptionName = productDescription.product.nameProduct;
  const subCategoryProduct = [
    "Description",
    "Résumé",
    "En complément",
    "Informations supplémentaires"
  ];

  const [selectedCategoryProduct, setSelectedCategoryProduct] = useState(
    subCategoryProduct[0]
  );

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
      </div>
      {selectedCategoryProduct === "Description" && (
        <Description productDescription={productDescription} />
      )}
      {selectedCategoryProduct === "Résumé" && (
        <InSummary productDescription={productDescription} />
      )}
      {selectedCategoryProduct === "En complément" && (
        <AsaComplement productDescription={productDescription} />
      )}
      {selectedCategoryProduct === "Informations supplémentaires" && (
        <AdditionnalInformation productDescription={productDescription} />
      )}
    </>
  );
};
export default ProductDetails;
