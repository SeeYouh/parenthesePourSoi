import React from "react";

const Description = ({ productDescription }) => {
  return (
    <>
      <div className="bgParagraph">
        {productDescription.product.summary.paragraph.map(
          (productDescription, index) => (
            <div
              key={index}
              className={
                index === 2
                  ? "productDescriptPresentFirst"
                  : "productDescriptPresentNext"
              }
            >
              <h3> {productDescription.subTitle} </h3>
              <p>{productDescription.text}</p>
              {index === 2 && (
                <picture>
                  <source
                    media="(max-width: 1439px)"
                    srcSet={productDescription.picture450}
                  />
                  <source
                    media="(min-width: 1440px) and (max-width: 1600px)"
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
            </div>
          )
        )}
      </div>
      ;
    </>
  );
};

export default Description;
