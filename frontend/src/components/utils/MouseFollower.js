import { motion, useMotionValue, useTransform } from "framer-motion";

export function MouseFollower({
  src,
  alt,
  className,
  scaleFactor,
  width,
  zIndex,
}) {
  // Créez des valeurs de mouvement pour la position x et y de la souris
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Inversez les valeurs de x et y
  const invertedX = useTransform(x, (value) => -value / scaleFactor);
  const invertedY = useTransform(y, (value) => -value / scaleFactor);

  return (
    <motion.div
      style={{
        position: "absolute",
        // Utilisez les valeurs inversées pour la position de l'image
        translateX: invertedX,
        translateY: invertedY,
        width: width,
        zIndex: zIndex,
        height: "auto",
      }}
      // Mettez à jour les valeurs de x et y lorsque la souris se déplace
      onMouseMove={(event) => {
        x.set(event.clientX);
        y.set(event.clientY);
      }}
    >
      <img src={src} alt={alt} className={className} />
    </motion.div>
  );
}
