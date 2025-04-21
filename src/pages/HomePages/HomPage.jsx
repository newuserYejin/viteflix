import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";

// 1. 배너 => popular의 1번째
// 2. popular
// 3. top
// 4. upcomming

const HomPage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
    </div>
  );
};

export default HomPage;
