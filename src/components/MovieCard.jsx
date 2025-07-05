import React, { useState } from "react";
import "./MovieCard.css";
import Star from "../assets/star.png";
const MovieCard = ({ path, rating, overview, release_date, title }) => {
  const [showText, setShowText] = useState(false);
  function longText(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, 150).trim() + "...";
    } else {
      return str;
    }
  }
  return (
    <div
      className="image-wrapper"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500${path}`}
        alt="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/pulp-fiction-1994-poster.jpg"
      ></img>
      {showText && (
        <div className="text-overlay">
          <h3 className="title">{title}</h3>
          <div className="metadata">
            <div>{release_date}</div>
            <div className="rating">
              <span> {rating}</span>
              <img className="text-smiley" src={Star}></img>
            </div>
          </div>
          <div className="description">{longText(overview, 150)}</div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
