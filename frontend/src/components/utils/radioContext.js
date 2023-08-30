import React, { createContext, useState } from "react";

export const RadioContext = createContext();

export const RadioProvider = ({ children }) => {
  const [selectedSubRadio, setSelectedSubRadio] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [menuNavActive, setMenuNavActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const closeMenu = () => {
    setMenuNavActive(false);
  };

  return (
    <RadioContext.Provider
      value={{
        menuNavActive,
        setMenuNavActive,
        selectedSubRadio,
        setSelectedSubRadio,
        selectedRadio,
        setSelectedRadio,
        selectedProduct,
        setSelectedProduct,
        isActive,
        setIsActive,
        closeMenu
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};
