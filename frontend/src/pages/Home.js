import React from "react";
import Navigation from "./../components/Navigation";
import Card from "../components/data/ProductCard";

const Home = () => {
  return (
    <div data-scroll-section>
      <div className="bgWhite">
        <Navigation />
        <Card />
      </div>
    </div>
  );
};

export default Home;
