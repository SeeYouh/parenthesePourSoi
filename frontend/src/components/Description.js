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
                index === 1
                  ? "productDescriptPresentFirst"
                  : "productDescriptPresentNext"
              }
            >
              {index === 1 && (
                <div>
                  <h3> {productDescription.subTitle} </h3>
                  <p>{productDescription.text}</p>
                </div>
              )}
              {index === 1 && (
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
              {index !== 1 && (
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
