import { Element } from "react-scroll";
import ProductCardList from "./ProductCardList";
import React from "react";
import SecondCategoryNavBar from "./SecondCategoryNavBar";

const Card = () => {
  return (
    <main>
      <Element name="productList">
        <div>
          <SecondCategoryNavBar />
          <ProductCardList />
        </div>
      </Element>
    </main>
  );
};

export default Card;
