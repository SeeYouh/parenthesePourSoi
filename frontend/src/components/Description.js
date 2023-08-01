import React from "react";

import { ProductStyle } from "./utils/ProductStyle";

const Description = ({ product }) => {
  const themeColors = product.colors;
  const productParagraph = product.summary.paragraph;
  const productLiketIt = product.summary.youLikeIt;
  return (
    <>
      <div className="bgParagraph">
        {ProductStyle({ product })}
        {productParagraph.map((product, index) => (
          <div
            key={product.id}
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
                  {product.subTitle}
                </h3>
                {Array.isArray(product.text) ? (
                  <ul>
                    {product.text.map((text) => (
                      <li className="textParagraph" key={text}>
                        {text}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="textParagraph">{product.text}</div>
                )}
              </div>
            )}
            {index === 1 && (
              <picture>
                <source
                  media="(max-width: 1439px)"
                  srcSet={product.picture450}
                />
                <source
                  media="(min-width: 1440px) && (max-width: 1600px)"
                  srcSet={product.picture675}
                />
                <source
                  media="(min-width: 1601px)"
                  srcSet={product.picture900}
                />
                <img src={product.picture900} alt={product.alt} />
              </picture>
            )}
            {index === productParagraph.length - 1 ? (
              <>
                <div className="youWillLikeIt">
                  {productLiketIt.map((product) => (
                    <div className="youWillLikeIt-content" key={product.id}>
                      <img
                        className="imgYouWillLikeIt"
                        src={product.pictureLove}
                        alt={product.alt}
                      />
                      <div className="textParagraph">{product.textLove}</div>
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
                    {product.subTitle}
                  </h3>
                  <div className="textParagraph">{product.text}</div>
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
