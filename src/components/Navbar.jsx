import React from "react";
import "./Navbar.css";
import NavHeader from "./NavHeader";
import NavMovieFilters from "./NavMovieFilters";

const Navbar = ({ type, setType }) => {
  return (
    <div className="header">
      <NavHeader />
      <NavMovieFilters />
    </div>
  );
};

export default Navbar;
