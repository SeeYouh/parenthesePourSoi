import React, { useContext, useEffect } from "react";

import Scroll from "react-scroll";
import { useNavigate } from "react-router-dom";

import { firstCategoryList } from "../../data/firstCategoryList";
import { generalDataImg } from "../../data/generalData";
import { RadioContext } from "../utils/radioContext";
import SecondCategoryNavBar from "./SecondCategoryNavBar";

const FirstCategoryNavBar = () => {
  const {
    selectedRadio,
    setSelectedRadio,
    setSelectedSubRadio,
    setSelectedProduct,
    setIsActive
  } = useContext(RadioContext);

  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  useEffect(() => {}, [selectedRadio]);

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -125,
      spy: true
    });
  };

  const handleCategoryChange = (e) => {
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
    goToPageAndScroll("productList");
    const offset = -125;
    scroller.scrollTo("productList", {
      smooth: "easeInOutQuint",
      duration: 1000,
      offset: offset,
      spy: true
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
          goToPageAndScroll("scrollTop");
          setSelectedRadio("");
          setSelectedSubRadio("");
          setSelectedProduct("");
          setIsActive(false);
        }}
      />
      <div className="allNavBar">
        <div className="no-select category firstCategory">
          {firstCategoryList.map((menu) => (
            <li className={`cursor menu-navbar`} key={menu.id}>
              <input
                className="active"
                type="checkbox"
                name="categorie"
                id={menu.name}
                checked={menu.name === selectedRadio}
                onChange={handleCategoryChange}
                onClick={() => {
                  goToPageAndScroll("productList");
                }}
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
        {selectedRadio && <SecondCategoryNavBar />}
      </div>
    </div>
  );
};

export default FirstCategoryNavBar;
