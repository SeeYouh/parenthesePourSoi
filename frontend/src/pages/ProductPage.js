import React, { useContext, useEffect, useState } from "react";

import { Element, scroller } from "react-scroll";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLocation, useParams } from "react-router-dom";

import AsaComplement from "../components/AsaComplement";
import Description from "../components/Description";
import FirstCategoryNavBar from "../components/data/FirstCategoryNavBar";
import Footer from "../components/data/Footer";
import InSummary from "../components/InSummary";
import { productList } from "../data/productList";
import { RadioContext } from "../components/utils/radioContext";

const ProductPage = () => {
  React.useEffect(() => {
    // Identifiant unique pour le script Matomo
    const matomoScriptId = "matomo-tracking-script";

    // Vérifier si le script a déjà été ajouté
    if (!document.getElementById(matomoScriptId)) {
      var _mtm = (window._mtm = window._mtm || []);
      _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });

      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.type = "text/javascript";
      g.async = true;
      g.defer = true;
      g.src =
        "https://une-parenthese-pour-soi.fr/analytics/matomo/js/container_346Tgk5W.js";
      g.id = matomoScriptId; // Attribuer l'identifiant au script
      s.parentNode.insertBefore(g, s);
    }
  }, []);

  const location = useLocation();

  const {
    setSelectedRadio,
    setSelectedSubRadio,
    setSelectedProduct,
    setIsActive,
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
    setIsActive,
    location.state,
  ]);

  useEffect(() => {
    setSelectedCategoryProduct("Description");
  }, [product]);

  const descriptionName = product.nameProduct;
  const themeColors = product.colors;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const subCategoryProduct = ["Description", "Résumé", "En complément"];

  const [selectedCategoryProduct, setSelectedCategoryProduct] = useState(
    subCategoryProduct[0]
  );

  const handleSubCategoryProductClick = () => {
    const offset = -125;
    scroller.scrollTo("bgProductDetails", {
      smooth: "easeInOutQuint",
      duration: 1000,
      offset: offset,
      spy: true,
    });
  };

  return (
    <>
      <Helmet>
        <title>{product.nameProduct}</title>
        <meta name="description" content={product.summary.title} />
        <meta property="og:title" content={product.nameProduct} />
        <meta property="og:description" content={product.summary.title} />
        <meta
          property="og:image"
          content={`https://www.une-parenthese-pour-soi.fr/img/jpg/product/${
            product.id + "1524"
          }.jpg/`}
        />
        <meta
          property="og:url"
          content={`https://une-parenthese-pour-soi.fr/product/${product.id}/`}
        />
        <meta property="og:type" content="product" />
      </Helmet>
      <div className="home productPage" id="productPage" name="productPage">
        <div key={product.nameProduct + "0"}>
          <FirstCategoryNavBar />
          <motion.div className="progressBar" style={{ scaleX }}></motion.div>
        </div>
        <Element
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          name="articleDetails"
        >
          <div className="bgProductDetails" key={descriptionName}>
            <div className="blocTitleImg">
              <picture className="imgProduit">
                <source
                  media="(max-width: 600px)"
                  srcSet={product.picture264}
                />
                <source
                  media="(min-width: 601px) and (max-width: 1499px)"
                  srcSet={product.picture400}
                />
                <source media="(min-width: 1500px)" srcSet={product.picture} />
                <img src={product.picture} alt={product.alt} />
              </picture>
              <div className="titleTextProduct">
                <h1
                  style={{
                    color: themeColors.titleColorInSummary,
                  }}
                >
                  {product.nameProduct}
                </h1>
                <h2
                  style={{
                    borderBottom: `5px solid ${themeColors.textColor}`,
                    borderLeft: `3px solid ${themeColors.textColor}`,
                    borderBottomLeftRadius: "20px",
                  }}
                >
                  {product.summary.title}
                </h2>
              </div>
            </div>
          </div>
          <Element name="bgProductDetails">
            <div
              style={{
                width: "100vw",
                maxWidth: "1800px",
              }}
              className="no-select productTab"
            >
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
              <a
                href="https://agenda.une-parenthese-pour-soi.fr/"
                className="btn-navbar cursor"
                style={{
                  color: `${themeColors.linkTextColor}`,
                  borderBottom: `3px solid ${themeColors.textColor}`,
                  borderRight: `2px solid ${themeColors.textColor}`,
                  borderBottomRightRadius: "10px",
                }}
              >
                Information supplémentaire
              </a>
            </div>
          </Element>
          {selectedCategoryProduct === "Description" && (
            <Description product={product} />
          )}
          {selectedCategoryProduct === "Résumé" && (
            <InSummary product={product} />
          )}
          {selectedCategoryProduct === "En complément" && (
            <AsaComplement
              product={product}
              defaultTab={subCategoryProduct[0]}
            />
          )}
        </Element>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
