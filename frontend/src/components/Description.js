import React from "react";

const Description = ({ productDescription, index }) => {
  return (
    <>
      <div className="bgParagraph">
        {productDescription.product.summary.paragraph.map(
          (productDescription, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "productDescriptPresentFirst"
                  : "productDescriptPresentNext"
              }
            >
              {index === 0 && (
                <div>
                  <h3> {productDescription.subTitle} </h3>
                  <p>{productDescription.text}</p>
                </div>
              )}
              {index === 0 && (
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
                    src={productDescription.picture1000}
                    alt={productDescription.alt}
                  />
                </picture>
              )}
              {index !== 0 && (
                <>
                  <h3> {productDescription.subTitle} </h3>
                  <p>{productDescription.text}</p>
                </>
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
