import React from "react";

const Logo = () => {
  let leafTopRight = document.getElementById(leafTopRight);
  let leafBottomLeft = document.getElementById(leafBottomLeft);
  let logoPicture = document.getElementById(logoPicture);

  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    leafBottomLeft.style.bottom = value * 1.5 + "xp";
  });

  return (
    <div id="bgLogo">
      <div id="leafTopRight">
        <div id="leafTopRightImg"></div>
      </div>
      <div id="logoPicture"></div>
      <div id="leafBottomLeft"></div>
      <div></div>
    </div>
  );
};

export default Logo;
