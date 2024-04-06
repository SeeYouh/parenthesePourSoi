import React from "react";

import { Element } from "react-scroll";

import { generalDataImg } from "../data/generalData";
import { svgLogoUpps } from "../assets/img/svg/Logo-Parenthese";

const Logo = () => {
  return (
    <Element name="scrollTop">
      <div id="bgLogo">
        <div>
          <div id="leaf">
            <div id="leafBottomLeft">
              <div id="leafBottomLeftImg">
                <img
                  key={generalDataImg[0].id}
                  src={generalDataImg[0].src}
                  alt={generalDataImg[0].alt}
                />
              </div>
            </div>
            <div id="leafTopRight">
              <div id="leafTopRightImg">
                <img
                  key={generalDataImg[1].id}
                  src={generalDataImg[1].src}
                  alt={generalDataImg[1].alt}
                />
              </div>
            </div>
          </div>
          <div className="logoHome">{svgLogoUpps}</div>
        </div>
      </div>
    </Element>
  );
};

export default Logo;
