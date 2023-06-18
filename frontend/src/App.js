import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PagesError from "./pages/PagesError";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PagesError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
