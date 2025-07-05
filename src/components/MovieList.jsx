import React from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = ({ data }) => {
  return (
    <div className="movie-wrapper">
      {data?.map(
        (
          { poster_path, vote_average, overview, original_title, release_date },
          index
        ) => (
          <MovieCard
            key={index}
            path={poster_path}
            rating={vote_average}
            overview={overview}
            title={original_title}
            release_date={release_date}
          />
        )
      )}
      {/* <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard /> */}
    </div>
  );
};

export default MovieList;
