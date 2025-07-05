import React, { useState, useEffect } from "react";
import "./Body.css";
import MainHeader from "./MainHeader";
import MovieList from "./MovieList";
import { useLocation } from "react-router-dom";
import { API_KEY } from "../constants/constants";

const Body = ({ type, title, smiley }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  const fetchMovieData = async function () {
    try {
      const movieData = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
      );
      const response = await movieData.json();
      setData(response?.results);
      console.log(response?.results);
    } catch (error) {}
  };
  useEffect(() => {
    fetchMovieData();
  }, [location && location.pathname]);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  return (
    <div>
      <MainHeader
        type={type}
        smiley={smiley}
        data={data}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
        title={title}
      />
      <MovieList data={filteredData} />
    </div>
  );
};

export default Body;
