import React, { useRef, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Logo from "./components/Logo";
import Home from "./pages/Home";

const App = () => {
  const containerRef = useRef();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef} className="home">
        <Logo />
        <Home />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default App;
