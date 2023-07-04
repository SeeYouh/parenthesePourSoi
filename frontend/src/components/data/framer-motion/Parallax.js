// Importation des modules nécessaires
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Cette fonction utilise la valeur de défilement pour créer un effet de parallaxe.
// Elle transforme la valeur de défilement (entre 0 et 1) en une valeur de déplacement (entre -distance et distance).
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Ce composant Image affiche une image et un titre qui se déplace avec un effet de parallaxe lors du défilement.
function Image({ id }) {
  // useRef est utilisé pour obtenir une référence à l'élément DOM qui sera utilisé pour le défilement.
  const ref = useRef(null);
  // useScroll est utilisé pour obtenir la valeur de défilement de l'élément référencé.
  const { scrollYProgress } = useScroll({ target: ref });
  // useParallax est utilisé pour obtenir la valeur de déplacement pour l'effet de parallaxe.
  const y = useParallax(scrollYProgress, 840);

  return (
    <>
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt="Un gratte-ciel de Londres" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </>
  );
}

// Ce composant App affiche plusieurs images avec un effet de parallaxe et une barre de progression pour le défilement.
export default function App() {
  // useScroll est utilisé pour obtenir la valeur de défilement de la fenêtre.
  const { scrollYProgress } = useScroll();
  // useSpring est utilisé pour créer un effet de ressort pour la barre de progression.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} key={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
