import React from "react";

const InSummary = ({ productDescription }) => {
  const productInSummary = productDescription.product.inSummary;
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

      {productInSummary.map(({ title, text }) => (
        <li>
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
