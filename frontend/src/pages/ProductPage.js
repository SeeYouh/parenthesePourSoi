import React, { useContext, useEffect, useState } from "react";

import { Element, scroller } from "react-scroll";
import { motion, useScroll, useSpring } from "framer-motion";
import { useParams } from "react-router-dom";

import AdditionnalInformation from "../components/AdditionnalInformation";
import AsaComplement from "../components/AsaComplement";
import Description from "../components/Description";
import FirstCategoryNavBar from "../components/data/FirstCategoryNavBar";
import InSummary from "../components/InSummary";
import { productList } from "../data/productList";
import { RadioContext } from "../components/utils/radioContext";
import SecondCategoryNavBar from "../components/data/SecondCategoryNavBar";

const ProductPage = () => {
  const {
    setSelectedRadio,
    setSelectedSubRadio,
    setSelectedProduct,
    setIsActive
  } = useContext(RadioContext);

  const { id } = useParams();
  const product = productList.find((product) => product.id === id);

  useEffect(() => {
    if (product) {
      setSelectedRadio(product.firstCategory[0]);
      setSelectedSubRadio(product.secondCategory[0]);
      setSelectedProduct(product);
      setIsActive(true);
    }
  }, [
    product,
    setSelectedRadio,
    setSelectedSubRadio,
    setSelectedProduct,
    setIsActive
  ]);

  const descriptionName = product.nameProduct;
  const themeColors = product.colors;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const subCategoryProduct = [
    "Description",
    "Résumé",
    "En complément",
    "Informations supplémentaires"
  ];

  const [selectedCategoryProduct, setSelectedCategoryProduct] = useState(
    subCategoryProduct[0]
  );

  const handleSubCategoryProductClick = () => {
    scroller.scrollTo("bgProductDetails", {
      smooth: "easeInOutQuint",
      duration: 1000,
      offset: -125
    });
  };

  return (
    <div className="home productPage" id="productPage" name="productPage">
      <div key={product.nameProduct + "0"}>
        <FirstCategoryNavBar />
        <SecondCategoryNavBar />
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      <Element name="articleDetails">
        <div className="bgProductDetails" key={descriptionName}>
          <div className="imgProduit">
            <img src={product.picture} alt={product.alt} />
          </div>
          <div className="titleTextProduct">
            <h1
              style={{
                color: themeColors.textColor
              }}
            >
              {product.nameProduct}
            </h1>
            <h2
              style={{
                borderBottom: `5px solid ${themeColors.textColor}`,
                borderLeft: `3px solid ${themeColors.textColor}`,
                borderBottomLeftRadius: "20px"
              }}
            >
              {product.summary.title}
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
                  onClick={handleSubCategoryProductClick}
                />
              </li>
            ))}
          </div>
        </Element>
        {selectedCategoryProduct === "Description" && (
          <Description product={product} />
        )}
        {selectedCategoryProduct === "Résumé" && (
          <InSummary product={product} />
        )}
        {selectedCategoryProduct === "En complément" && (
          <AsaComplement product={product} />
        )}
        {selectedCategoryProduct === "Informations supplémentaires" && (
          <AdditionnalInformation product={product} />
        )}
      </Element>
    </div>
  );
};

export default ProductPage;