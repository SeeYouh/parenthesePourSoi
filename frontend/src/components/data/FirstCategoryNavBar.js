import React, { useContext, useEffect } from "react";
import { firstCategoryList } from "../../data/firstCategoryList";
import { generalDataImg } from "../../data/generalData";
import { RadioContext } from "../utils/radioContext";
import { scroller } from "react-scroll";

const FirstCategoryNavBar = () => {
  const {
    selectedRadio,
    setSelectedRadio,
    setSelectedSubRadio,
    setSelectedProduct,
    setIsActive
  } = useContext(RadioContext);

  useEffect(() => {
    console.log("Selected radio updated:", selectedRadio);
  }, [selectedRadio]);

  const handleCategoryChange = (e) => {
    console.log("event targer ID: ", e.target.id);
    console.log("selectedRadio: ", selectedRadio);
    if (e.target.checked) {
      setSelectedRadio(e.target.id);
      setSelectedSubRadio("");
      setSelectedProduct("");
      setIsActive(true);
    } else {
      setSelectedRadio("");
      setIsActive(false);
      setSelectedSubRadio("");
      setSelectedProduct("");
    }
    scroller.scrollTo("productList", {
      smooth: "easeInOutQuint",
      duration: 1000,
      offset: -125
    });
  };

  return (
    <div className="navbar positionFixed">
      <img
        className="logo"
        key={generalDataImg[3].id}
        src={generalDataImg[3].src}
        alt={generalDataImg[3].alt}
        onClick={() => {
          scroller.scrollTo("scrollTop", {
            smooth: "easeInOutQuint",
            duration: 1000
          });
          setSelectedRadio("");
          setSelectedSubRadio("");
          setSelectedProduct("");
          setIsActive(false);
        }}
      />

      <div className="no-select all-menu-navbar">
        {firstCategoryList.map((menu) => (
          <li className={`cursor menu-navbar`} key={menu.id}>
            <input
              className="active"
              type="checkbox"
              name="categorie"
              id={menu.name}
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
  );
};

export default FirstCategoryNavBar;
