import { productList } from "../../data/productList";

export const fetchProductData = (productId) => {
  const product = productList.find((product) => product.id === productId);
  return product;
};
