import React from "react";

const InSummary = (productDescription) => {
  const productInSummary = productDescription.product.inSummary;

  return (
    <ul>
      {productInSummary.map((title, text) => (
        <li key={title + text}>
          <h4 className="textParagraph">{title}</h4>
          <p className="textParagraph">{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default InSummary;
