import React, { useState } from "react";

import { Element, scroller } from "react-scroll";

import AdditionnalInformation from "./AdditionnalInformation";
import AsaComplement from "./AsaComplement";
import Description from "./Description";
import InSummary from "./InSummary";

const ProductDetails = (productDescription) => {
  const descriptionName = productDescription.product.nameProduct;
  const themeColors = productDescription.product.colors;

  const subCategoryProduct = [
    "Description",
    "Résumé",
    "En complément",
    "Informations supplémentaires"
  ];

  const [selectedCategoryProduct, setSelectedCategoryProduct] = useState(
    subCategoryProduct[0]
  );

  const navigate = useNavigate();

  const goToPageAndScroll = async (selector, path) => {
    const offset = -125;
    await navigate(path);
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: offset,
      spy: true
    });
    console.log("selector", selector);
  };

  // const handleSubCategoryProductClick = () => {
  //   scroller.scrollTo("bgProductDetails", {
  //     smooth: "easeInOutQuint",
  //     duration: 1000,
  //     offset: -125
  //   });
  // };

  return (
    <Element name="articleDetails">
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
      <Element name="bgProductDetails">
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
                onClick={() => goToPageAndScroll("bgProductDetails")}
              />
            </li>
          ))}
        </div>
      </Element>
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
    </Element>
  );
};
export default ProductDetails;
