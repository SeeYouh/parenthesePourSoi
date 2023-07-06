import React, { useContext, useEffect } from "react";
import { firstCategoryList } from "../../data/firstCategoryList";
import { generalDataImg } from "../../data/generalData";
import { RadioContext } from "../utils/radioContext";
import { animateScroll as scroll, scroller } from "react-scroll";

const FirstCategoryNavBar = () => {
  const {
    selectedRadio,
    setSelectedRadio,
    setSelectedSubRadio,
    setSelectedProduct,
    setIsActive,
  } = useContext(RadioContext);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const productListPosition = document.getElementById("scrollTop");
      let st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Si l'utilisateur fait défiler vers le bas, ne faites rien
      } else {
        // Si l'utilisateur fait défiler vers le haut et est au-dessus de la liste des produits, faites défiler la page vers le haut
        if (st < productListPosition.offsetTop) {
          scroller.scrollTo("scrollTop", {
            duration: 500,
            smooth: true,
            offset: -125,
          });
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    // N'oubliez pas de nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      offset: -125,
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
          setSelectedRadio("");
          setSelectedSubRadio("");
          setSelectedProduct("");
          setIsActive(false);
        }}
      />

      <div className="no-select all-menu-navbar">
        {firstCategoryList.map((menu, index) => (
          <li className={`cursor menu-navbar ${index}`} key={index}>
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
