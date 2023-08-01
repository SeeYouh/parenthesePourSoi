import React from "react";

export const ProductStyle = ({ product }) => {
  const themeColors = product.colors;

  return (
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
        .btn-extLink {
          color: ${themeColors.linkTextColor};
        }
      `}
    </style>
  );
};
