import './sass/main.scss';

import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App';
import PagesError from './pages/PagesError';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path=":id" element={<App />} />
      <Route path="*" element={<PagesError />} />
    </Routes>
  </BrowserRouter>
);
