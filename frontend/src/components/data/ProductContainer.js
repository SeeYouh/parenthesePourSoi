import React, { useState } from "react";
import { useHover } from "../utils/useHover";
import FirstCategoryNavBar from "./FirstCategoryNavBar";
import SecondCategoryNavBar from "./SecondCategoryNavBar";
import ProductCardList from "./ProductCardList";

const Card = () => {
  const [selectedSubRadio, setSelectedSubRadio] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isHovered, hoverProps] = useHover();

  return (
    <main>
      <FirstCategoryNavBar
        selectedRadio={selectedRadio}
        setSelectedRadio={setSelectedRadio}
        selectedSubRadio={selectedSubRadio}
        setSelectedSubRadio={setSelectedSubRadio}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <div
        className={`category ${
          isHovered ? "bgSubCategory subBgColorHover" : "bgSubCategory"
        }`}
        {...hoverProps}
      >
        <SecondCategoryNavBar
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
          selectedSubRadio={selectedSubRadio}
          setSelectedSubRadio={setSelectedSubRadio}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          isActive={isActive}
          setIsActive={setIsActive}
          isHovered={isHovered}
          hoverProps={hoverProps}
        />
        <ProductCardList
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
          selectedSubRadio={selectedSubRadio}
          setSelectedSubRadio={setSelectedSubRadio}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
    </main>
  );
};

export default Card;
