// Importation des modules nécessaires
import { useRef } from 'react';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);

  return (
    <>
      <div ref={ref}>
        <img
          src={`../../../../../public/img/png/leafBottomLeft${id}.png`}
          alt="feuille"
        />
        {/* <img src={`./${id}.jpg`} alt="Un gratte-ciel de Londres" /> */}
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
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
