import "./sass/main.scss";

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
      <HelmetProvider>
        <Helmet>
          <title>Un Possible</title>
          <meta
            name="description"
            content="Plongez dans l'univers d'Un Possible : des produits 100% naturels accès sur le bien-être intérieur, la santé et la beauté. Soyez vous-même naturellement !"
          />
          <meta property="og:title" content="Un Possible" />
          <meta
            property="og:description"
            content="Plongez dans l'univers d'Un Possible : des produits 100% naturels accès sur le bien-être intérieur, la santé et la beauté. Soyez vous-même naturellement !"
          />
          <meta
            property="og:image"
            content="https://www.un-possible.fr/img/png/logoUP_(avecTexte)-512px.png"
          />
          <meta property="og:url" content="https://www.un-possible.fr/" />
          <meta property="og:type" content="website" />
        </Helmet>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/product/*" element={<PagesError />} />
          <Route path="*" element={<PagesError />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  </RadioProvider>
);
