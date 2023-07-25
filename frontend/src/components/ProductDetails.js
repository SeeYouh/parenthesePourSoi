import React, { useEffect, useState } from "react";
import Description from "./Description";
// import AdditionnalInformation from "./AdditionnalInformation";
// import AsaComplement from "./AsaComplement";
// import InSummary from "./InSummary";

const ProductDetails = (productDescription, index) => {
  // const [currentProduct, setCurrentProduct] = useState(productDescription);
  const themeColors = productDescription.product.colors;
  const [activeTab, setActiveTab] = useState("Description");

  useEffect(() => {
    const checkboxes = document.querySelectorAll(".productTab input");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checkbox.id === activeTab;
    });
  }, [activeTab]);

  const handleTabChange = (e) => {
    setActiveTab(e.target.id);
  };

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
          <h1
            style={{
              color: themeColors.textColor
            }}
            key={index}
          >
            {" "}
            {productDescription.product.nameProduct}{" "}
          </h1>
          <h2
            style={{
              borderBottom: `5px solid ${themeColors.textColor}`,
              borderLeft: `3px solid ${themeColors.textColor}`,
              borderBottomLeftRadius: "20px"
            }}
            key={index}
          >
            {" "}
            {productDescription.product.summary.title}{" "}
          </h2>
        </div>
      </div>
      <div className="no-select productTab">
        <label htmlFor="Description" className={`btn btn-navbar`}>
          Description
        </label>
        <input
          type="checkbox"
          id="Description"
          className="active"
          name="productTab"
          onChange={handleTabChange}
        />
        <label htmlFor="summary" className="btn btn-navbar">
          Résumé
        </label>
        <input
          type="checkbox"
          id="summary"
          className="active"
          name="productTab"
        />
        <label htmlFor="complementary" className="btn btn-navbar">
          En complément
        </label>
        <input
          type="checkbox"
          id="complementary"
          className="active"
          name="productTab"
        />
        <label htmlFor="infoSupp" className="btn btn-navbar">
          Informations supplémentaires
        </label>
        <input
          type="checkbox"
          id="infoSupp"
          className="active"
          name="productTab"
        />
      </div>
      {/* <AdditionnalInformation
        productDescription={productDescription}
        index={index}
      />
      <AsaComplement productDescription={productDescription} index={index} />
      <InSummary productDescription={productDescription} index={index} /> */}
      <Description productDescription={productDescription} index={index} />
    </>
  );
};
export default ProductDetails;
