import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import "./NavMovieFilters.css";
import Fire from "../assets/fire.png";
import PartyingFace from "../assets/partying-face.png";
import GlowingStar from "../assets/glowing-star.png";

const NavMovieFilters = () => {
  return (
    <div className="nav-filter-wrapper">
      <NavLink className="link-content" to="/">
        <span className="filter-content">
          Latest <img className="filter-smiley" src={PartyingFace}></img>
        </span>
      </NavLink>
      <NavLink className="link-content" to="/popular">
        <span className="filter-content">
          Popular <img className="filter-smiley" src={Fire}></img>
        </span>
      </NavLink>
      <NavLink className="link-content" to="/top_rated">
        <span className="filter-content">
          Top Rated <img className="filter-smiley" src={GlowingStar}></img>
        </span>
      </NavLink>
    </div>
  );
};

export default NavMovieFilters;
