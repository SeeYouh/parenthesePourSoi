import React from "react";

import { Element } from "react-scroll";

import ProductCardList from "./ProductCardList";

const Card = () => {
  return (
    <main>
      <Element name="productList">
        <div>
          <ProductCardList />
        </div>
      </Element>
    </main>
  );
};

export default Card;
