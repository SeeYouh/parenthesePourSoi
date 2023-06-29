import React from "react";
import Card from "../components/data/ProductCard";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div data-scroll-section>
      <div className="bgWhite">
        <Logo />
        <Card />
      </div>
    </div>
  );
};

export default Home;
