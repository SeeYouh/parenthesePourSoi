import React, { useContext } from "react";
import { firstCategoryList } from "../../data/firstCategoryList";
import { generalDataImg } from "../../data/generalData";
import { RadioContext } from "../utils/radioContext";
import { Link } from "react-scroll";

const FirstCategoryNavBar = () => {
  const {
    selectedRadio,
    setSelectedRadio,
    setSelectedSubRadio,
    setSelectedProduct,
    setIsActive,
  } = useContext(RadioContext);

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
    <div className="navbar positionFixed">
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

      <div className="no-select all-menu-navbar">
        {firstCategoryList.map((menu, index) => (
          <li className={`cursor menu-navbar ${index}`} key={index}>
            <Link to="productList" smooth={true} duration={500} offset={-125}>
              <input
                className="active"
                type="checkbox"
                name="categorie"
                id={menu.name}
                checked={menu.name === selectedRadio}
                onChange={handleCategoryChange}
              />
            </Link>
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
