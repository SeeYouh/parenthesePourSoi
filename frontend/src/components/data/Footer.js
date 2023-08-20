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
    <footer className="footer">
      <div className="socialNetWorkContainer">
        <div className="socialNetwork">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <symbol id="instagram-icon" viewBox="0 0 448 512">
                  <path d={generalDataImg[4].logoInstagram} />
                </symbol>
              </defs>
              <use xlinkHref="#instagram-icon" height="20px" />
            </svg>
          </div>
        </div>
        <div className="socialNetwork">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <symbol id="tiktok-icon" viewBox="0 0 512 512">
                  <path d={generalDataImg[6].logoTikTok} />
                </symbol>
              </defs>
              <use xlinkHref="#tiktok-icon" height="20px" />
            </svg>
          </div>
        </div>
        <div className="socialNetwork">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <symbol id="facebook-icon" viewBox="0 0 448 512">
                  <path d={generalDataImg[5].logoFacebook} />
                </symbol>
              </defs>
              <use xlinkHref="#facebook-icon" height="20px" />
            </svg>
          </div>
        </div>
      </div>
      <div className="logoPictureFooter">
        <img
          key={generalDataImg[0].id}
          src={generalDataImg[0].src}
          alt={generalDataImg[0].alt}
        />
      </div>

      <div className="legal">
        <p
          onClick={(e) =>
            handleCategoryChange(e, () => navigate("/privacy"), -105)
          }
        >
          Politique de confidentialité
        </p>
        <p
          onClick={(e) =>
            handleCategoryChange(e, () => navigate("/terms"), -105)
          }
        >
          Condition d'utilisation
        </p>
      </div>
      <div>Contactez moi</div>
    </footer>
  );
};

export default Footer;
