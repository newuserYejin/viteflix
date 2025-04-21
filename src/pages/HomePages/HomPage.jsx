import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/MovieSlides/PopularMovieSlide";
import TopRatedMovieSlide from "./components/MovieSlides/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/MovieSlides/UpcomingMovieSlide";

// 1. 배너 => popular의 1번째
// 2. popular
// 3. top
// 4. upcomming

const HomPage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  );
};

export default HomPage;
