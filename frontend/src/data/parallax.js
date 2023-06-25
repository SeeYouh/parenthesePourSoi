import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const ParallaxImage = ({ image, offset, speed, className }) => (
  <Parallax className={className} y={[-offset, offset]} tagOuter="figure">
    <img src={image} alt="" />
  </Parallax>
);

const ParallaxPage = ({ images }) => (
  <ParallaxProvider>
    <div className="parallax-container">
      {images.map((image, index) => (
        <ParallaxImage
          key={index}
          className={`parallax-image${index}`}
          image={image.url}
          offset={image.offset}
          speed={image.speed}
        />
      ))}
    </div>
  </ParallaxProvider>
);

export default ParallaxPage;
