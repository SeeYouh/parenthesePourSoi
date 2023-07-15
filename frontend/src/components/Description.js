import React from "react";

const Description = ({ productDescription }) => {
  const themeColors = productDescription.product.colors;
  const productParagraph = productDescription.product.summary.paragraph;
  const productLiketIt = productDescription.product.summary.youLikeIt;

  return (
    <>
      <div className="bgParagraph">
        {productParagraph.map((productDescription, index) => (
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
                <h3
                  style={{
                    color: themeColors.textColor
                  }}
                >
                  {" "}
                  {productDescription.subTitle}{" "}
                </h3>
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
            {index === productParagraph.length - 1 ? (
              <>
                <div className="youWillLikeIt">
                  {productLiketIt.map((productDescription, index) => (
                    <div key={index} className="youWillLikeIt-content">
                      <img
                        className="imgYouWillLikeIt"
                        src={productDescription.pictureLove}
                        alt={productDescription.alt}
                      />
                      <p>{productDescription.textLove}</p>
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
                  <p>{productDescription.text}</p>
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
