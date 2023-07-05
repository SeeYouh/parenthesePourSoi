import React from "react";
// import FirstCategoryNavBar from "./FirstCategoryNavBar";
import SecondCategoryNavBar from "./SecondCategoryNavBar";
import ProductCardList from "./ProductCardList";

const Card = () => {
  return (
    <main>
      {/* <FirstCategoryNavBar /> */}
      <div>
        <SecondCategoryNavBar />
        <ProductCardList />
      </div>
    </main>
  );
};

export default Card;
