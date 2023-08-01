import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useHover } from "../utils/useHover";

const ProductCard = ({ product }) => {
  const [isHovered, hoverProps] = useHover();
  const colors = product.colors;
  // const navigate = useNavigate();

  // const goToPageAndScroll = async (selector) => {
  //   await navigate(`/product/${product.id}`);
  //   await scroller.scrollTo(selector, {
  //     duration: 500,
  //     smooth: true,
  //     offset: -75,
  //     spy: true
  //   });
  // };

  let productCardClass = isHovered
    ? "bgProductCard bgColorHover"
    : "bgProductCard";

  return (
    <motion.div
      whileHover={{
        scale: 1.08
      }}
    >
      <Link to={`/product/${product.id}`} key={product.nameProduct}>
        <div className={productCardClass} {...hoverProps}>
          <div className="productCard">
            <img src={product.picture} alt={product.nameProduct} />
            <div className="textProductCard">
              <h1
                style={{
                  color: colors.titleColorInSummary,
                  borderBottom: `2px solid ${colors.textColor}`
                }}
              >
                {product.nameProduct}{" "}
              </h1>
              <h2>{product.summary.title} </h2>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
