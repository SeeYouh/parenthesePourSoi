import { useHover } from "../utils/useHover";
import { motion } from "framer-motion";

const ProductCard = ({ product, onProductClick }) => {
  const [isHovered, hoverProps] = useHover();
  const colors = product.colors;

  let productCardClass = isHovered
    ? "bgProductCard bgColorHover"
    : "bgProductCard";

  return (
    <motion.div
      onClick={() => onProductClick(product)}
      whileHover={{
        scale: 1.08
      }}
      key={product.nameProduct}
    >
      <div className={productCardClass} {...hoverProps}>
        <div className="productCard">
          <img src={product.picture} alt={product.nameProduct} />
          <div className="textProductCard">
            <h1
              style={{
                borderBottom: `2px solid ${colors.textColor}`
              }}
            >
              {product.nameProduct}{" "}
            </h1>
            <h2>{product.summary.title} </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
