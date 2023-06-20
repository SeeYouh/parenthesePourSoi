import React from "react";
import Navigation from "./../components/Navigation";
import Card from "../components/data/ProductCard";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Card />
    </div>
  );
};

export default Home;
