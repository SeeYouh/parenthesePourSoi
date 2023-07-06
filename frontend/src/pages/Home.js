import React from "react";
import Card from "../components/data/Card";
import Logo from "../components/Logo";
import { motion, useScroll, useSpring } from "framer-motion";
import FirstCategoryNavBar from "../components/data/FirstCategoryNavBar";
import Footer from "../components/data/Footer";
import { Element } from "react-scroll";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
      <FirstCategoryNavBar />
      <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      <div className="bgWhite">
        <Logo />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Home;
