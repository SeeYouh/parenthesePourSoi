import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

const App = () => {
  const containerRef = useRef();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.06,
        multiplier: 3,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef} className="home">
        <Navigation />
        <Home />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default App;
