import React from "react";
import SecondCategoryNavBar from "./SecondCategoryNavBar";
import ProductCardList from "./ProductCardList";
import { Element } from "react-scroll";

const Card = () => {
  return (
    <main>
      <Element name="productList" className="width-100">
        <div className="productList">
          <SecondCategoryNavBar />
          <ProductCardList />
        </div>
      </Element>
    </main>
  );
};

export default Card;
