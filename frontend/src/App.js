import React from "react";
import Home from "./pages/Home";
import { RadioProvider } from "./components/utils/radioContext";

const App = () => {
  return (
    <RadioProvider>
      <div className="home">
        <Home />
      </div>
    </RadioProvider>
  );
};

export default App;
