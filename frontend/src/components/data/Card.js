import React from "react";
import SecondCategoryNavBar from "./SecondCategoryNavBar";
import ProductCardList from "./ProductCardList";
import { Element } from "react-scroll";


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
