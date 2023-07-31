import React, { useContext } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { useParams } from 'react-router-dom';

import { firstCategoryList } from '../../data/firstCategoryList';
import { RadioContext } from '../utils/radioContext';

const SecondCategoryNavBar = () => {
  const { id } = useParams();
  const {
    selectedSubRadio,
    isActive,
    setIsActive,
    setSelectedProduct,
    setSelectedSubRadio
  } = useContext(RadioContext);

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
      {id && (
        <motion.div
          className="no-select subCategory"
          initial={{ x: -450 }}
          animate={{
            x: 0,
            transition: { duration: 0.5 }
          }}
          exit={{
            x: isActive ? "-100vw" : -450,
            transition: { duration: 0.5 }
          }}
        >
          {firstCategoryList
            .filter((category) => category.name.includes(id))
            .map((subCategory) => (
              <aside key={subCategory.id}>
                <ul>
                  <h1>{subCategory.name}</h1>
                  <div className="lineBottom"></div>
                  <ul>
                    {subCategory.secondCategory.map((subCategory) => (
                      <li
                        className={`cursor menu-navbar`}
                        key={subCategory.text}
                      >
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
              </aside>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecondCategoryNavBar;
