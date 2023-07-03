import React from "react";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="home">
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
