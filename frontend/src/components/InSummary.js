import React from "react";

const InSummary = ({ productDescription }) => {
  const productInSummary = productDescription.product.inSummary;
  const themeColors = productDescription.product.colors;

  return (
    <ul className="blockBubleInSummary">
      {productInSummary.map(({ title, text, id }) => (
        <li
          key={id}
          className="bubleInSummary"
          style={{
            backgroundColor: themeColors.bgColorInSummary
          }}
        >
          <h4
            style={{
              color: themeColors.titleColorInSummary
            }}
            className="titleInSummary"
          >
            {title}
          </h4>
          <p className="textInSummary">{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default InSummary;
