import "./sass/main.scss";

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import PagesError from "./pages/PagesError";
import { RadioProvider } from "./components/utils/radioContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RadioProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/category/:id" element={<App />} />
        <Route path="*" element={<PagesError />} />
      </Routes>
    </BrowserRouter>
  </RadioProvider>
);
