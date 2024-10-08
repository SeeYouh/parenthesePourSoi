import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

import { useHover } from '../utils/useHover';

const ProductCard = ({ product }) => {
  const [isHovered, hoverProps] = useHover();
  const colors = product.colors;
  const navigate = useNavigate();

  const goToPageAndScroll = async (selector) => {
    const offset = -305;
    await navigate(`/product/${product.id}`);
    await scroller.scrollTo(selector, {
      duration: 1000,
      smooth: true,
      offset: offset,
      spy: true,
    });
  };

  let productCardClass = isHovered
    ? "bgProductCard bgColorHover"
    : "bgProductCard";

  return (
    <>
      <motion.div
        onClick={() => goToPageAndScroll("productPage")}
        whileHover={{
          scale: 1.08,
        }}
        key={product.nameProduct}
        className={productCardClass}
        {...hoverProps}
      >
        <div className="productCard">
          <img src={product.picture} alt={product.nameProduct} />
          <div className="textProductCard">
            <h1
              style={{
                color: colors.titleColorInSummary,
                borderBottom: `2px solid ${colors.textColor}`,
              }}
            >
              {product.nameProduct}{" "}
            </h1>
            <h2>{product.summary.title} </h2>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
