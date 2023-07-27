import Home from "./pages/Home";
import { RadioProvider } from "./components/utils/radioContext";
import React from "react";

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
