import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router";

const MovieCard = ({ movie, key }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

  function showGenre(genreIdList) {
    // 장르데이터가 없으면 차라리 안보여주기
    if (!genreData) return [];

    const genreNameList = genreIdList?.map((id) => {
      const genreObject = genreData?.find((genre) => genre.id == id);
      return genreObject.name;
    });

    return genreNameList;
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className="overlay">
        <h3 className="movie_title">{movie.title}</h3>
        <div className="movie_genre_ids">
          {showGenre(movie?.genre_ids)?.map((id) => (
            <Badge bg="danger">{id}</Badge>
          ))}
        </div>
        <div className="movie_info">
          <div>{movie?.vote_average?.toFixed(1)}</div>
          <div>{movie?.popularity?.toFixed(1)}</div>
          {movie?.adult ? <div>over 18</div> : null}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
