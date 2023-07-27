import React from "react";

const AsaComplement = ({ productDescription }) => {
  const productYouLikeIt = productDescription.product.summary.youLikeIt;
  const themeColors = productDescription.product.colors;

  return (
    <ul>
      <style>
        {`
        ::selection {
          background: ${themeColors.textColor};
          color: white;
        }
        ::-moz-selection {
          background: ${themeColors.textColor};
          color: white;
        }
        `}
      </style>
      <div className="youWillLikeIt">
        {productYouLikeIt.map((productDescription) => (
          <div className="youWillLikeIt-content" key={productDescription.id}>
            <img
              className="imgYouWillLikeIt"
              src={productDescription.pictureLove}
              alt={productDescription.alt}
            />
            <p className="textParagraph">{productDescription.textLove}</p>
          </div>
        ))}
      </div>
    </ul>
  );
};

export default AsaComplement;
