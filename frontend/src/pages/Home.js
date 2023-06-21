import React from "react";
import Navigation from "./../components/Navigation";
import Card from "../components/data/ProductCard";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div className="home">
      <Logo />
      <div className="bgWhite">
        <Navigation />
        <Card />
      </div>
    </div>
  );
};

export default Home;
