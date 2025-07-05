import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import Fire from "./assets/fire.png";
import GlowingStar from "./assets/glowing-star.png";
import PartyingFace from "./assets/partying-face.png";

const App = () => {
  return (
    <div className="app">
      <nav className="nav">
        <Navbar />
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Body type="upcoming" title="Latest" smiley={PartyingFace} />
          }
        ></Route>
        <Route
          path="/popular"
          element={<Body type="popular" title="Popular" smiley={Fire} />}
        ></Route>
        <Route
          path="/top_rated"
          element={
            <Body type="top_rated" title="Top rated" smiley={GlowingStar} />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
