import React from "react";

const InSummary = ({ productDescription }) => {
  const productInSummary = productDescription.product.inSummary;
  const themeColors = productDescription.product.colors;

  return (
    <ul>
      {productInSummary.map(({ title, text, id }) => (
        <li key={id}>
          <h4
            style={{
              color: themeColors.textColor
            }}
            className="textParagraph"
          >
            {title}
          </h4>
          <p className="textParagraph">{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default InSummary;
