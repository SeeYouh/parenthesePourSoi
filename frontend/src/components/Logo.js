import React from "react";
import { generalDataImg } from "../data/generalData";

const Logo = () => {
  return (
    <div id="bgLogo">
      <div className="positionFixed">
        <div id="leaf">
          <div id="leafBottomLeft">
            <div id="leafBottomLeftImg">
              <img
                key={generalDataImg[1].id}
                src={generalDataImg[1].src}
                alt={generalDataImg[1].alt}
              />
            </div>
          </div>
          <div id="leafTopRight">
            <div id="leafTopRightImg">
              <img
                key={generalDataImg[2].id}
                src={generalDataImg[2].src}
                alt={generalDataImg[2].alt}
              />
            </div>
          </div>
        </div>
        <img
          id="logoPicture"
          key={generalDataImg[0].id}
          src={generalDataImg[0].src}
          alt={generalDataImg[0].alt}
        />
      </div>
    </div>
  );
};

export default Logo;
