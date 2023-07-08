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
                    media="(max-width: 1072)"
                    srcSet={productDescription.picture150}
                  />
                  <source
                    media="(min-width: 151px) and (max-width: 300px)"
                    srcSet={productDescription.picture300}
                  />
                  <source
                    media="(min-width: 301px) and (max-width: 450px)"
                    srcSet={productDescription.picture450}
                  />
                  <source
                    media="(min-width: 451px)"
                    srcSet={productDescription.picture600}
                  />
                  <img
                    src={productDescription.picture600}
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
