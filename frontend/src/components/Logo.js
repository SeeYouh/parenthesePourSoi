import React, { useEffect, useRef } from "react";
import { generalDataImg } from "../data/generalData";

const Logo = () => {
  // let leafTopRight = document.getElementById(leafTopRight);
  // let leafBottomLeft = document.getElementById(leafBottomLeft);
  // let logoPicture = document.getElementById(logoPicture);

  // window.addEventListener("scroll", () => {
  //   let value = window.scrollY;

  //   leafTopRight.style.bottom = value * 1.5 + "px";
  //   leafBottomLeft.style.bottom = value * 1.5 + "px";
  //   logoPicture.style.bottom = value * 3.5 + "px";
  // });
  const leafTopRightRef = useRef(null);
  const leafBottomLeftRef = useRef(null);
  const logoPictureRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;

      leafTopRightRef.current.style.bottom = value * 1.5 + "px";
      leafBottomLeftRef.current.style.bottom = value * 1.5 + "px";
      logoPictureRef.current.style.bottom = value * 3.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="bgLogo">
      <div>
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
      <div id="logoPicture"></div>
      <div id="leafBottomLeft"></div>
      <div></div>
    </div>
  );
};

export default Logo;
