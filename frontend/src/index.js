import "./sass/main.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import PagesError from "./pages/PagesError";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<PagesError />} />
    </Routes>
  </BrowserRouter>
);
