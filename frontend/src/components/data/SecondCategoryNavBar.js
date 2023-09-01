import React, { useContext, useEffect } from "react";

import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

import { firstCategoryList } from "../../data/firstCategoryList";
import { RadioContext } from "../utils/radioContext";

const SecondCategoryNavBar = () => {
  const {
    selectedRadio,
    selectedSubRadio,
    setIsActive,
    setSelectedProduct,
    setSelectedSubRadio,
    closeMenu
  } = useContext(RadioContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubCategoryChange = (e) => {
    if (e.target.checked) {
      setSelectedSubRadio(e.target.id);
      setSelectedProduct("");
      setIsActive(true);
      closeMenu();
    } else {
      setSelectedSubRadio("");
      setSelectedProduct("");
    }
  };

  useEffect(() => {
    const offset = -125;
    if (location.pathname === "/") {
      setTimeout(() => {
        scroller.scrollTo("productList", {
          smooth: "easeInOutQuint",
          duration: 1000,
          offset: offset,
          spy: true
        });
      }, 100);
    }
  }, [location]);

  const handleSubCategoryClick = () => {
    navigate("/");
  };

  return (
    <>
      <motion.div className="no-select cursor">
        {firstCategoryList
          .filter((category) => category.name.includes(selectedRadio))
          .map((subCategory) => (
            <ul key={subCategory.id} className="category menuSubCategory">
              <div className="line"></div>
              {subCategory.secondCategory.map((subCategory) => (
                <li key={subCategory.text} className="cursor menu-navbar">
                  <input
                    className="active"
                    type="checkbox"
                    name="subCategory"
                    id={subCategory.text}
                    checked={subCategory.text === selectedSubRadio}
                    onChange={handleSubCategoryChange}
                    onClick={handleSubCategoryClick}
                  />
                  <label
                    className={`btn btn-navbar ${
                      subCategory.text === selectedSubRadio ? "selected" : ""
                    }`}
                    htmlFor={subCategory.text}
                  >
                    {subCategory.text}
                  </label>
                  <div className="line"></div>
                </li>
              ))}
            </ul>
          ))}
      </motion.div>
    </>
  );
};

export default SecondCategoryNavBar;
