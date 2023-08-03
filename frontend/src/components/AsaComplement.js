import React from "react";

import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { ProductStyle } from "./utils/ProductStyle";

const AsaComplement = ({ product }) => {
  const productYouLikeIt = product.summary.youLikeIt;

  const navigate = useNavigate();

  const goToPageAndScroll = async (productId, selector) => {
    const offset = -125;
    await navigate(`/product/${productId}`);
    await scroller.scrollTo(selector, {
      duration: 1000,
      smooth: true,
      offset: offset,
      spy: true
    });
  };

  return (
    <ul>
      <div className="youWillLikeIt">
        {ProductStyle({ product })}
        {productYouLikeIt.map((product) => (
          <div className="youWillLikeIt-content" key={product.id}>
            <img
              onClick={() => goToPageAndScroll(product.link, "productPage")}
              className="imgYouWillLikeIt"
              src={product.pictureLove}
              alt={product.alt}
            />
            <p className="textParagraph">{product.textLove}</p>
          </div>
        ))}
      </div>
    </ul>
  );
};

export default AsaComplement;
