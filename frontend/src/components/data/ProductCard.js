import { useHover } from "../utils/useHover";

const ProductCard = ({ product, index }) => {
  const [isHovered, hoverProps] = useHover();

  let productCardClass = isHovered
    ? "bgProductCard bgColorHover"
    : "bgProductCard";

  return (
    <div className={productCardClass} {...hoverProps}>
      <div className="productCard">
        <img key={index} src={product.picture} alt={product.nameProduct} />
        <div className="textProductCard">
          <h1>{product.nameProduct} </h1>
          <h2>{product.summary.title} </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
