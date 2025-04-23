import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovies";
import { useSearchParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviePage.css";

// nav바에서 클릭해서 온 경우 => popular Movie
// 검색해서 올 경우 => keyword와 관련 된걸로 출력

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  console.log("data : ", data);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Container className="moviePageContainer">
      <Row>
        <Col md={4} xs={12}>
          <div
            style={{
              padding: "10px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
              gap: "10px",
            }}
          >
            <input
              type="text"
              style={{
                background: "none",
                border: "solid 2px darkred",
                borderRadius: "10px",
              }}
            />
            <input
              type="text"
              style={{
                background: "none",
                border: "solid 2px darkred",
                borderRadius: "10px",
              }}
            />
          </div>
        </Col>
        {data?.results.length > 0 && (
          <Col md={8} xs={12}>
            <Row>
              {data?.results.map((movie, index) => (
                <Col key={index} md={4} xs={6}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
            <Row>
              <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={data?.total_pages > 500 ? 500 : data.total_pages} // 전체 페이지 몇 개?
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={page - 1}
              />
            </Row>
          </Col>
        )}
        {data?.results.length == 0 && (
          <Col
            md={8}
            xs={12}
            style={{
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            검색 결과가 없습니다.
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MoviePage;
