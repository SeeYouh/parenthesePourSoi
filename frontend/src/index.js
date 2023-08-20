import "./sass/main.scss";

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import PagesError from "./pages/PagesError";
import Privacy from "./pages/Privacy";
import ProductPage from "./pages/ProductPage";
import { RadioProvider } from "./components/utils/radioContext";
import Terms from "./pages/Terms";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RadioProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<PagesError />} />
        <Route path="/product/*" element={<PagesError />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </RadioProvider>
);
