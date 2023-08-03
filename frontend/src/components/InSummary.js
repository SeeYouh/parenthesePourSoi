import React from "react";

import { ProductStyle } from "./utils/ProductStyle";

const InSummary = ({ product }) => {
  const productInSummary = product.inSummary;
  const themeColors = product.colors;

  return (
    <ul className="blockBubleInSummary">
      {ProductStyle({ product })}
      {productInSummary.map(({ title, text, id }) => (
        <li
          key={id}
          className="bubleInSummary selectText"
          style={{
            borderColor: themeColors.bgColorInSummary0,
            backgroundColor: themeColors.bgColorInSummary1
          }}
        >
          <div className="contentTitleInSummary">
            <h4
              style={{
                color: themeColors.titleColorInSummary,
                textShadow: `1px 0 5px ${themeColors.shadowColor}`
              }}
              className="titleInSummary"
            >
              {title}
            </h4>
            <div
              className="bgRadiantInSummary"
              style={{
                background: themeColors.linearGradient1
              }}
            ></div>
            <div
              className="bgInSummary"
              style={{
                background: themeColors.linearGradient0
              }}
            ></div>
          </div>
          <div className="textInSummary">{text}</div>
        </li>
      ))}
    </ul>
  );
};

export default InSummary;
