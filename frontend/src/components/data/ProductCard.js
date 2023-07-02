import { useHover } from "../utils/useHover";
import { motion } from "framer-motion";

const ProductCard = ({ product, index }) => {
  const [isHovered, hoverProps] = useHover();

  let productCardClass = isHovered
    ? "bgProductCard bgColorHover"
    : "bgProductCard";

  return (
    <motion.div
      whileHover={{
        scale: 1.08,
      }}
    >
      <div className={productCardClass} {...hoverProps}>
        <div className="productCard">
          <img key={index} src={product.picture} alt={product.nameProduct} />
          <div className="textProductCard">
            <h1>{product.nameProduct} </h1>
            <h2>{product.summary.title} </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
