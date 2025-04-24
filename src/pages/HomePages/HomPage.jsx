import React, { Suspense } from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/MovieSlides/PopularMovieSlide";
import TopRatedMovieSlide from "./components/MovieSlides/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/MovieSlides/UpcomingMovieSlide";
import LodingSpinner from "../../common/LodingSpinner/LodingSpinner";

// 1. 배너 => popular의 1번째
// 2. popular
// 3. top
// 4. upcomming

const HomPage = () => {
  return (
    <div>
      <Suspense fallback={<LodingSpinner />}>
        <Banner />
        <PopularMovieSlide />
        <TopRatedMovieSlide />
        <UpcomingMovieSlide />
      </Suspense>
    </div>
  );
};

export default HomPage;
