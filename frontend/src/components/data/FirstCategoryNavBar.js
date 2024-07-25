// import React, {
//   useContext,
//   useEffect,
//   useState,
// } from 'react';

// import Scroll from 'react-scroll';
// import { useNavigate } from 'react-router-dom';

// import { firstCategoryList } from '../../data/firstCategoryList';
// import { generalDataImg } from '../../data/generalData';
// import { LogoUP } from '../../assets/img/svg/LogoUP';
// import { RadioContext } from '../utils/radioContext';
// import SecondCategoryNavBar from './SecondCategoryNavBar';
// import windowSize from '../utils/windowSize';

// const FirstCategoryNavBar = () => {
//   const {
//     selectedRadio,
//     setSelectedRadio,
//     setSelectedSubRadio,
//     setSelectedProduct,
//     setIsActive,
//     menuNavActive,
//     setMenuNavActive,
//   } = useContext(RadioContext);

//   const [openCategories, setOpenCategories] = useState({});

//   const handleToggleMenu = () => {
//     setMenuNavActive(!menuNavActive);
//   };

//   const handleCategoryToggle = (category) => {
//     setOpenCategories((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   const classNameMenu = menuNavActive
//     ? "activeMenu navbar positionFixed"
//     : "navbar positionFixed";

//   const navigate = useNavigate();
//   const scroller = Scroll.scroller;
//   const widthSize = windowSize();

//   useEffect(() => {}, [selectedRadio]);

//   const goToPageAndScroll = async (selector) => {
//     await navigate("/");
//     await scroller.scrollTo(selector, {
//       duration: 500,
//       smooth: true,
//       offset: -125,
//       spy: true,
//     });
//   };

//   const handleCategoryChange = (e) => {
//     if (e.target.checked) {
//       setSelectedRadio(e.target.id);
//       setSelectedSubRadio("");
//       setSelectedProduct("");
//       setIsActive(true);
//     } else {
//       setSelectedRadio("");
//       setIsActive(false);
//       setSelectedSubRadio("");
//       setSelectedProduct("");
//     }
//     goToPageAndScroll("productList");
//     const offset = -125;
//     scroller.scrollTo("productList", {
//       smooth: "easeInOutQuint",
//       duration: 1000,
//       offset: offset,
//       spy: true,
//     });
//   };

//   return (
//     <>
//       {widthSize > 1200 ? (
//         <div className={classNameMenu}>
//           <p onClick={handleToggleMenu} id="iconMenu"></p>
//           <div
//             className="cursor logo z-index"
//             alt={generalDataImg[4].alt}
//             onClick={() => {
//               goToPageAndScroll("scrollTop");
//               setSelectedRadio("");
//               setSelectedSubRadio("");
//               setSelectedProduct("");
//               setIsActive(false);
//             }}
//           >
//             {LogoUP}
//           </div>
//           <div className="all-menu-navbar allNavBar">
//             <div className="no-select category firstCategory">
//               <div className="line"></div>
//               {firstCategoryList.map((menu) => (
//                 <li className={`cursor menu-navbar`} key={menu.id}>
//                   <input
//                     className="active"
//                     type="checkbox"
//                     name="categorie"
//                     id={menu.name}
//                     checked={menu.name === selectedRadio}
//                     onChange={handleCategoryChange}
//                     onClick={() => {
//                       goToPageAndScroll("productList");
//                     }}
//                   />
//                   <label
//                     className={` cursor btn btn-navbar ${
//                       menu.name === selectedRadio ? "selected" : ""
//                     }`}
//                     htmlFor={menu.name}
//                   >
//                     {menu.name}
//                   </label>
//                   <div className="line"></div>
//                 </li>
//               ))}
//             </div>
//             {selectedRadio && <SecondCategoryNavBar />}
//           </div>
//         </div>
//       ) : (
//         <div className={classNameMenu}>
//           <p onClick={handleToggleMenu} id="iconMenu"></p>
//           <div
//             className="cursor logo z-index"
//             alt={generalDataImg[4].alt}
//             onClick={() => {
//               goToPageAndScroll("scrollTop");
//               setSelectedRadio("");
//               setSelectedSubRadio("");
//               setSelectedProduct("");
//               setIsActive(false);
//             }}
//           >
//             {LogoUP}
//           </div>
//           <div className="all-menu-navbar allNavBar">
//             <div className="no-select category firstCategory">
//               <div className="line"></div>
//               {firstCategoryList.map((menu) => (
//                 <li className={`cursor menu-navbar`} key={menu.id}>
//                   <input
//                     className="active"
//                     type="checkbox"
//                     name="categorie"
//                     id={menu.name}
//                     checked={menu.name === selectedRadio}
//                     onChange={handleCategoryChange}
//                     onClick={() => {
//                       goToPageAndScroll("productList");
//                     }}
//                   />
//                   <label
//                     className={` cursor btn btn-navbar ${
//                       menu.name === selectedRadio ? "selected" : ""
//                     }`}
//                     htmlFor={menu.name}
//                   >
//                     {menu.name}
//                   </label>
//                   <div className="line"></div>
//                   {openCategories[menu.name] && <SecondCategoryNavBar />}
//                 </li>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default FirstCategoryNavBar;

import React, { useContext, useEffect, useState } from "react";

import Scroll from "react-scroll";
import { useNavigate } from "react-router-dom";

import { firstCategoryList } from "../../data/firstCategoryList";
import { generalDataImg } from "../../data/generalData";
import { LogoUP } from "../../assets/img/svg/LogoUP";
import { RadioContext } from "../utils/radioContext";
import SecondCategoryNavBar from "./SecondCategoryNavBar";
import windowSize from "../utils/windowSize";

const FirstCategoryNavBar = () => {
  const {
    selectedRadio,
    setSelectedRadio,
    setSelectedSubRadio,
    setSelectedProduct,
    setIsActive,
    menuNavActive,
    setMenuNavActive,
  } = useContext(RadioContext);

  const [openCategories, setOpenCategories] = useState({});

  const handleToggleMenu = () => {
    setMenuNavActive(!menuNavActive);
  };

  const handleCategoryToggle = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const classNameMenu = menuNavActive
    ? "activeMenu navbar positionFixed"
    : "navbar positionFixed";

  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  const widthSize = windowSize();

  useEffect(() => {}, [selectedRadio]);

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -125,
      spy: true,
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
      spy: true,
    });
  };

  return (
    <>
      {widthSize > 1200 ? (
        <div className={classNameMenu}>
          <p onClick={handleToggleMenu} id="iconMenu"></p>
          <div
            className="cursor logo z-index"
            alt={generalDataImg[4].alt}
            onClick={() => {
              goToPageAndScroll("scrollTop");
              setSelectedRadio("");
              setSelectedSubRadio("");
              setSelectedProduct("");
              setIsActive(false);
            }}
          >
            {LogoUP}
          </div>
          <div className="all-menu-navbar allNavBar">
            <div className="no-select category firstCategory">
              <div className="line"></div>
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
                    className={` cursor btn btn-navbar ${
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
      ) : (
        <div className={classNameMenu}>
          <p onClick={handleToggleMenu} id="iconMenu"></p>
          <div
            className="cursor logo z-index"
            alt={generalDataImg[4].alt}
            onClick={() => {
              goToPageAndScroll("scrollTop");
              setSelectedRadio("");
              setSelectedSubRadio("");
              setSelectedProduct("");
              setIsActive(false);
            }}
          >
            {LogoUP}
          </div>
          <div className="all-menu-navbar allNavBar">
            <div className="no-select category firstCategory">
              <div className="line"></div>
              <div className="container-link">
                {firstCategoryList.map((menu) => (
                  <li className={`cursor menu-navbar`} key={menu.id}>
                    <input
                      className="active"
                      type="checkbox"
                      name="categorie"
                      id={menu.name}
                      checked={menu.name === selectedRadio}
                      onChange={(e) => {
                        handleCategoryChange(e);
                        handleCategoryToggle(menu.name);
                      }}
                      onClick={() => {
                        goToPageAndScroll("productList");
                      }}
                    />
                    <label
                      className={` cursor btn btn-navbar ${
                        menu.name === selectedRadio ? "selected" : ""
                      }`}
                      htmlFor={menu.name}
                    >
                      {menu.name}
                    </label>
                    <div className="line"></div>
                    {selectedRadio === menu.name &&
                      openCategories[menu.name] && <SecondCategoryNavBar />}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstCategoryNavBar;
