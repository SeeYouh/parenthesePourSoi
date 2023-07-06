import React, { useRef } from "react";
import Home from "./pages/Home";
import { RadioProvider } from "./components/utils/radioContext";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const App = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // lerp: 0.1,
        // multiplier: 1.5,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <RadioProvider>
        <div className="home">
          <Home />
        </div>
      </RadioProvider>
    </LocomotiveScrollProvider>
  );
};

export default App;
