import React from "react";

import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToPageAndScrollTerms = async (selector) => {
    const offset = -305;
    await navigate("/terms");
    await scroller.scrollTo(selector, {
      duration: 1000,
      smooth: true,
      offset: offset,
      spy: true
    });
  };
  const goToPageAndScrollPolicy = async (selector) => {
    const offset = -305;
    await navigate("/terms");
    await scroller.scrollTo(selector, {
      duration: 1000,
      smooth: true,
      offset: offset,
      spy: true
    });
  };

  return (
    <footer>
      <div>contact</div>
      <div>Facebook</div>
      <div>Instagram</div>
      <div>Tic Toc</div>
      <div onClick={() => goToPageAndScrollPolicy("Privacy")}>
        politique de confidentialité
      </div>
      <div onClick={() => goToPageAndScrollTerms("Terms")}>
        condition d'utilisation
      </div>
    </footer>
  );
};

export default Footer;
