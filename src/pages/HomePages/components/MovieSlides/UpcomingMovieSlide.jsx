import React from "react";
import { useUpcomingMovies } from "../../../../hooks/useUpcomingMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMovies();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        // movies={data?.results}
        movies={Array.isArray(data?.results) ? data.results : []}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
