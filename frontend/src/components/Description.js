import React from "react";

import AsaComplement from "./AsaComplement";
import { ProductStyle } from "./utils/ProductStyle";

const Description = ({ product }) => {
  const themeColors = product.colors;
  const productParagraph = product.summary.paragraph;

  return (
    <>
      <div className="bgParagraph">
        {ProductStyle({ product })}
        {productParagraph.map((paragraph, index) => (
          <div
            key={paragraph.id}
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
                  {paragraph.subTitle}
                </h3>
                {Array.isArray(paragraph.text) ? (
                  <ul>
                    {paragraph.text.map((text) => (
                      <li className="textParagraph" key={text}>
                        {text}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="textParagraph">{paragraph.text}</div>
                )}
              </div>
            )}
            {index === 1 && (
              <picture>
                <source
                  media="(max-width: 1439px)"
                  srcSet={paragraph.picture450}
                />
                <source
                  media="(min-width: 1440px) && (max-width: 1600px)"
                  srcSet={paragraph.picture675}
                />
                <source
                  media="(min-width: 1601px)"
                  srcSet={paragraph.picture900}
                />
                <img src={paragraph.picture900} alt={paragraph.alt} />
              </picture>
            )}
            {index === productParagraph.length - 1 ? (
              <AsaComplement product={product} />
            ) : (
              index !== 1 && (
                <>
                  <h3
                    style={{
                      color: themeColors.textColor
                    }}
                  >
                    {paragraph.subTitle}
                  </h3>
                  <div className="textParagraph">{paragraph.text}</div>
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
