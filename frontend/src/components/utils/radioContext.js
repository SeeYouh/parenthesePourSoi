import React, { createContext, useState } from "react";

export const RadioContext = createContext();

export const RadioProvider = ({ children }) => {
  const [selectedSubRadio, setSelectedSubRadio] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <RadioContext.Provider
      value={{
        selectedSubRadio,
        setSelectedSubRadio,
        selectedRadio,
        setSelectedRadio,
        selectedProduct,
        setSelectedProduct,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};
