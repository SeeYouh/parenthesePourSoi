import React from "react";
// import Navigation from "./../components/Navigation";
import Card from "../components/data/ProductCard";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div data-scroll-section className="bgWhite">
      {/* <Navigation /> */}
      <Logo />
      <Card />
    </div>
  );
};

export default Home;
