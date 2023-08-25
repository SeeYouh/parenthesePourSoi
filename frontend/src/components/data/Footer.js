import React, { useContext } from "react";

import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { generalDataImg } from "../../data/generalData";
import { RadioContext } from "../utils/radioContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
      <div className="logoPictureFooter">
        <img
          key={generalDataImg[0].id}
          src={generalDataImg[0].src}
          alt={generalDataImg[0].alt}
        />
      </div>
      <div className="footerContainer">
        <div className="socialNetWorkContainer">
          <a
            className="socialNetwork"
            href="https://l.instagram.com/?u=https%3A%2F%2Finstagram.com%2Fbalancetonbourrelet%3Figshid%3DZDc4ODBmNjlmNQ%253D%253D&e=AT1RtsTB8BCd2kll-zyavugmHbUNdy_eN0AzfMgBZGQex1_hG3HhPdtbxykyyKTEwjDEaSA-If3JvFEZ7oGfrXhkqB6uGM_W4RzKXSlHBL8Auj-Bl-zVMx4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <symbol id="instagram-icon" viewBox="0 0 448 512">
                  <path d={generalDataImg[4].logoInstagram} />
                </symbol>
              </defs>
              <use xlinkHref="#instagram-icon" />
            </svg>
          </a>
          <a
            className="socialNetwork"
            href="https://www.tiktok.com/@laurachevreau16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <symbol id="tiktok-icon" viewBox="0 0 512 512">
                  <path d={generalDataImg[6].logoTikTok} />
                </symbol>
              </defs>
              <use xlinkHref="#tiktok-icon" />
            </svg>
          </a>
          <a
            className="socialNetwork"
            href="https://www.facebook.com/groups/423046286411685/?ref=share_group_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <symbol id="facebook-icon" viewBox="0 0 320 512">
                  <path d={generalDataImg[5].logoFacebook} />
                </symbol>
              </defs>
              <use xlinkHref="#facebook-icon" />
            </svg>
          </a>
        </div>

        <div className="legal">
          <div className="containerLegal">
            <p> ©{currentYear} Tous droits réservés </p>
            <div
              className="legalArticle"
              style={{
                borderTop: "2px solid white",
                marginTop: "15px"
              }}
            >
              <p
                style={{
                  borderRight: "2px solid white"
                }}
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
          </div>
        </div>
        <div className="contactContainer">
          <a
            className="contact"
            href="https://agenda.une-parenthese-pour-soi.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prendre rendez-vous
          </a>

          <a
            href="mailto:contact@une-parenthese-pour-soi.fr?subject=Prise de contact depuis le site&body=Bonjour,"
            className="contact"
          >
            Contactez moi
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
