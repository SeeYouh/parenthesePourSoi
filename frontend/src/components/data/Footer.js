import React, { useContext } from "react";

import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { generalDataImg } from "../../data/generalData";
import { RadioContext } from "../utils/radioContext";

const Footer = () => {
  const {
    setSelectedRadio,
    setSelectedSubRadio,
    setSelectedProduct,
    setIsActive
  } = useContext(RadioContext);

  const navigate = useNavigate();

  const handleCategoryChange = async (e, navigateToPage, offset) => {
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

    await navigateToPage();

    await goToPageAndScroll("legalTitle", offset);
  };

  const goToPageAndScroll = async (selector, offset) => {
    await scroller.scrollTo(selector, {
      duration: 1000,
      smooth: true,
      offset: offset,
      spy: true
    });
  };

  return (
    <footer>
      <div className="legal">
        <div
          onClick={(e) =>
            handleCategoryChange(e, () => navigate("/privacy"), -105)
          }
        >
          politique de confidentialité
        </div>
        <div
          onClick={(e) =>
            handleCategoryChange(e, () => navigate("/terms"), -105)
          }
        >
          condition d'utilisation
        </div>
      </div>
      <div className="socialNetwork">
        <div>
          <symbol>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 448 512"
            >
              <path d={generalDataImg[4].logoInstagram} />
            </svg>
          </symbol>
        </div>
        <div>
          <symbol>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 512 512"
            >
              <path d={generalDataImg[5].logoFacebook} />
            </svg>
          </symbol>
        </div>
        <div>
          <symbol>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 448 512"
            >
              <path d={generalDataImg[6].logoTikTok} />
            </svg>
          </symbol>
        </div>
      </div>
      <div>Nous contacter</div>
    </footer>
  );
};

export default Footer;
