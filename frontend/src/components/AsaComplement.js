import React from "react";

const AsaComplement = ({ product }) => {
  const productYouLikeIt = product.summary.youLikeIt;

  return (
    <ul>
      <div className="youWillLikeIt">
        {productYouLikeIt.map((product) => (
          <div className="youWillLikeIt-content" key={product.id}>
            <img
              className="imgYouWillLikeIt"
              src={product.pictureLove}
              alt={product.alt}
            />
            <p className="textParagraph">{product.textLove}</p>
          </div>
        ))}
      </div>
    </ul>
  );
};

export default AsaComplement;
