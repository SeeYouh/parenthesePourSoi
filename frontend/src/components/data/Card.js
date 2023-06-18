import React from "react";
import { productCard } from "../../data/productList";

const Card = () => {
  const category = productCard.reduce(
    (acc, product) =>
      acc.includes(product.firstCategory)
        ? acc
        : acc.concat(product.firstCategory),
    []
  );
  console.log(productCard);
  console.log(category);
  return (
    <div>
      <ul>
        {category.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul>
        {productCard.map((product) => (
          <>
            <li key={product.id + "-name"}>{product.nameProduct} </li>
            <li key={product.id + "-title"}>{product.summary.title} </li>
            {/* <ul key={product.id + "-summary"}>
              {product.summary.map((paragraph, index) => (
                <li key={index}>{paragraph}</li>
              ))}
            </ul> */}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Card;
