import React from "react";

import { ProductStyle } from "./utils/ProductStyle";

const Description = ({ productDescription }) => {
  const themeColors = productDescription.product.colors;
  const productParagraph = productDescription.product.summary.paragraph;
  const productLiketIt = productDescription.product.summary.youLikeIt;

  return (
    <>
      <div className="bgParagraph">
        {ProductStyle({ productDescription })}
        {productParagraph.map((productDescription, index) => (
          <div
            key={productDescription.id}
            className={
              index === 1
                ? "selectText productDescriptPresentFirst"
                : "selectText productDescriptPresentNext"
            }
          >
            {index === 1 && (
              <div>
                <h3
                  style={{
                    color: themeColors.textColor
                  }}
                >
                  {productDescription.subTitle}
                </h3>
                {Array.isArray(productDescription.text) ? (
                  <ul>
                    {productDescription.text.map((text) => (
                      <li className="textParagraph" key={text}>
                        {text}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="textParagraph">{productDescription.text}</div>
                )}
              </div>
            )}
            {index === 1 && (
              <picture>
                <source
                  media="(max-width: 1439px)"
                  srcSet={productDescription.picture450}
                />
                <source
                  media="(min-width: 1440px) && (max-width: 1600px)"
                  srcSet={productDescription.picture675}
                />
                <source
                  media="(min-width: 1601px)"
                  srcSet={productDescription.picture900}
                />
                <img
                  src={productDescription.picture900}
                  alt={productDescription.alt}
                />
              </picture>
            )}
            {index === productParagraph.length - 1 ? (
              <>
                <div className="youWillLikeIt">
                  {productLiketIt.map((productDescription) => (
                    <div
                      className="youWillLikeIt-content"
                      key={productDescription.id}
                    >
                      <img
                        className="imgYouWillLikeIt"
                        src={productDescription.pictureLove}
                        alt={productDescription.alt}
                      />
                      <div className="textParagraph">
                        {productDescription.textLove}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              index !== 1 && (
                <>
                  <h3
                    style={{
                      color: themeColors.textColor
                    }}
                  >
                    {productDescription.subTitle}
                  </h3>
                  <div className="textParagraph">{productDescription.text}</div>
                </>
              )
            )}
          </div>
        ))}
      </div>
      ;
    </>
  );
};

export default Description;
