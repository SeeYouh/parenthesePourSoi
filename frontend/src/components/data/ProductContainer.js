import React, { useState, useEffect } from "react";
import { productList } from "../../data/productList";
import { generalDataImg } from "../../data/generalData";
import ProductCard from "../ProductCard";
import { firstCategoryList } from "../../data/firstCategoryList";
import { useHover } from "../utils/useHover";
import { AnimatePresence, motion } from "framer-motion";

const Card = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedSubRadio, setSelectedSubRadio] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isHovered, hoverProps] = useHover();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWidth);
    return () => window.removeEventListener("resize", handleResizeWidth);
  }, []);

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      setSelectedRadio(e.target.id);
      setSelectedSubRadio("");
      setIsActive(true);
    } else {
      setSelectedRadio("");
      setSelectedSubRadio("");
      setIsActive(false);
    }
  };

  const handleSubCategoryChange = (e) => {
    if (e.target.checked) {
      setSelectedSubRadio(e.target.id);
    } else {
      setSelectedSubRadio("");
    }
  };

  const filteredProducts = productList
    .filter((product) =>
      selectedRadio ? product.firstCategory.includes(selectedRadio) : true
    )
    .filter((product) =>
      selectedSubRadio
        ? product.secondCategory.includes(selectedSubRadio)
        : true
    )
    .sort((a, b) => a.nameProduct.localeCompare(b.nameProduct));

  return (
    <main>
      <div className="navbar">
        <img
          className="logo"
          key={generalDataImg[3].id}
          src={generalDataImg[3].src}
          alt={generalDataImg[3].alt}
          onClick={() => {
            setSelectedRadio("");
            setSelectedSubRadio("");
            setIsActive(false);
          }}
        />

        <div className="all-menu-navbar">
          {firstCategoryList.map((menu, index) => (
            <li className={`cursor menu-navbar ${index}`} key={index}>
              <input
                type="checkbox"
                id={menu.name}
                className="active"
                name="categorie"
                checked={menu.name === selectedRadio}
                onChange={handleCategoryChange}
              />
              <label
                className={`btn btn-navbar ${
                  menu.name === selectedRadio ? "selected" : ""
                }`}
                htmlFor={menu.name}
              >
                {menu.name}
              </label>
              <div className="line"></div>
            </li>
          ))}
        </div>
      </div>
      <div
        className={`category ${
          isHovered ? "bgSubCategory subBgColorHover" : "bgSubCategory"
        }`}
        {...hoverProps}
      >
        <AnimatePresence>
          {selectedRadio && (
            <motion.div
              layout
              className={`subCategory ${
                isHovered ? "bgSubCategory subBgColorHover" : "bgSubCategory"
              }`}
              {...hoverProps}
              initial={{ x: -150 }}
              animate={{
                x: 0,
              }}
              exit={{
                x: isActive ? "-100vw" : -150,
              }}
            >
              {firstCategoryList
                .filter((category) => category.name.includes(selectedRadio))
                .map((subCategory) => (
                  <div key={subCategory.id}>
                    <ul>
                      <h1>{subCategory.name}</h1>
                      <div className="lineBottom"></div>
                      <ul>
                        {subCategory.secondCategory.map(
                          (subCategory, index) => (
                            <li key={index}>
                              <input
                                className="active"
                                type="checkbox"
                                name="subCategory"
                                id={subCategory.text}
                                checked={subCategory.text === selectedSubRadio}
                                onChange={handleSubCategoryChange}
                              />
                              <label
                                className={`btn btn-navbar ${
                                  subCategory.text === selectedSubRadio
                                    ? "selected"
                                    : ""
                                }`}
                                htmlFor={subCategory.text}
                              >
                                {subCategory.text}{" "}
                              </label>
                            </li>
                          )
                        )}
                      </ul>
                    </ul>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x:
              isActive && windowWidth >= 1073 && windowWidth < 1339
                ? 300
                : isActive && windowWidth >= 1340 && windowWidth < 1712
                ? 150
                : 0,
          }}
          className="arrayProductCardContainer"
        >
          <motion.div
            initial={{ width: "100%" }}
            animate={{
              width:
                isActive && windowWidth <= 1072
                  ? "100%"
                  : isActive && windowWidth >= 1073 && windowWidth <= 1339
                  ? "70%"
                  : isActive && windowWidth >= 1340 && windowWidth < 1600
                  ? "80%"
                  : "100%",
            }}
            className="arrayProductCard"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Card;
