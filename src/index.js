import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./style.css";
import NotFound from "./views/not-found";
import About from "./views/about";
import GameJam from "./views/game-jam";
import Gala from "./views/gala";
import Home from "./views/home";
import Members from "./views/members";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NotFound />} path="*" />
          <Route element={<About />} exact path="/about" />
          <Route element={<GameJam />} exact path="/game-jam" />
          <Route element={<Gala />} exact path="/gala" />
          <Route element={<Home />} exact path="/" />
          <Route element={<Members />} exact path="/membres" />
        </Routes>
      </BrowserRouter>
    </>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
