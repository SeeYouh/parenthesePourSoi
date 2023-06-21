import React from "react";
import { generalDataImg } from "../data/generalData";

const Logo = () => {
  return (
    <div id="bgLogo">
      {/* <img src="./img/svg/leafLeft.svg" alt="Illustration de feuille" />
      <img
        src="./img/svg/Logo une parenthèse pour soi-min.svg"
        alt="Logo d'Une parenthèse pour Soi"
      />
      <img src="./img/svg/leafRight.svg" alt="Illustration de feuille" /> */}
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
          src="./img/png/Une parenthèse pour soi logo 1500px.png"
          alt="Logo d'Une parenthèse pour Soi"
        />
      </div>
    </div>
  );
};

export default Logo;
