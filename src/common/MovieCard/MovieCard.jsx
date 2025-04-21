import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.css";

const MovieCard = ({ movie, key }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h3 className="movie_title">{movie.title}</h3>
        <div className="movie_genre_ids">
          {movie.genre_ids.map((id) => (
            <Badge bg="danger">{id}</Badge>
          ))}
        </div>
        <div className="movie_info">
          <div>{movie.vote_average.toFixed(1)}</div>
          <div>{movie.popularity.toFixed(1)}</div>
          {movie.adult ? <div>over 18</div> : null}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
