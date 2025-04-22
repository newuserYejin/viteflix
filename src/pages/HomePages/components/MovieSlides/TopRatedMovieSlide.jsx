import React from "react";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { useTopMovies } from "../../../../hooks/useTopMovies";
import { responsive } from "../../../../constants/responsive";

const TopRatedMovieSlide = () => {
  const { data, isError, error, isLoading } = useTopMovies();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Top Rated Movies"
        // movies={data?.results}
        movies={Array.isArray(data?.results) ? data.results : []}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlide;
