import React from "react";

const InSummary = ({ product }) => {
  const productInSummary = product.inSummary;
  const themeColors = product.colors;

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
          <div className="textInSummary">{text}</div>
        </li>
      ))}
    </ul>
  );
};

export default InSummary;
