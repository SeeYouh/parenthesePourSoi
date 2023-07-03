import React from "react";
import { firstCategoryList } from "../../data/firstCategoryList";
import { generalDataImg } from "../../data/generalData";

const FirstCategoryNavBar = ({
  selectedRadio,
  setSelectedRadio,
  setSelectedSubRadio,
  setSelectedProduct,
  setIsActive,
}) => {
  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      setSelectedRadio(e.target.id);
      setSelectedSubRadio("");
      setSelectedProduct("");
      setIsActive(true);
    } else {
      setSelectedRadio("");
      setSelectedSubRadio("");
      setSelectedProduct("");
      setIsActive(false);
    }
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        key={generalDataImg[3].id}
        src={generalDataImg[3].src}
        alt={generalDataImg[3].alt}
        onClick={() => {
          setSelectedRadio("");
          setSelectedSubRadio("");
          setSelectedProduct("");
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
  );
};

export default FirstCategoryNavBar;
