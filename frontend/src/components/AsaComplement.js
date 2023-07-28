import React from "react";

const AsaComplement = ({ productDescription }) => {
  const productYouLikeIt = productDescription.product.summary.youLikeIt;

  return (
    <ul>
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
