import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { firstCategoryList } from "../../data/firstCategoryList";

const SecondCategoryNavBar = ({
  selectedRadio,
  selectedSubRadio,
  setSelectedSubRadio,
  setSelectedProduct,
  isActive,
  setIsActive,
}) => {
  const handleSubCategoryChange = (e) => {
    if (e.target.checked) {
      setSelectedSubRadio(e.target.id);
      setSelectedProduct("");
      setIsActive(true);
    } else {
      setSelectedSubRadio("");
      setSelectedProduct("");
    }
  };

  return (
    <AnimatePresence>
      {selectedRadio && (
        <motion.div
          className="no-select subCategory"
          initial={{ x: -450 }}
          animate={{
            x: 0,
            transition: { duration: 0.5 },
          }}
          exit={{
            x: isActive ? "-100vw" : -450,
            transition: { duration: 0.5 },
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
                    {subCategory.secondCategory.map((subCategory, index) => (
                      <li className={`cursor menu-navbar ${index}`} key={index}>
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
                          {subCategory.text}
                        </label>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecondCategoryNavBar;
