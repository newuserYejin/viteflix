import React, { Suspense, useState } from "react";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { useParams } from "react-router";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useMovieReview } from "../../hooks/useMovieReview";
import LodingSpinner from "../../common/LodingSpinner/LodingSpinner";
import "./MovieDetailPage.css";
import YouTube from "react-youtube";
import { useMovieTrailer } from "../../hooks/useMovieTrailer";

const MovieDetailPage = () => {
  const { id } = useParams();
  const {
    data: movieDetail,
    isLoading,
    isError,
    error,
  } = useMovieDetail({ id });

  const {
    data: reviewData,
    isLoading: reviewLoading,
    isError: reviewIsError,
    error: reviewError,
  } = useMovieReview({ id });

  const {
    data: trailerData,
    isLoading: trailerIsLoading,
    isError: trailerIsError,
    error: trailerError,
  } = useMovieTrailer({ id });

  const [expanded, setExpanded] = useState({});
  const [modalShow, setModalShow] = useState(false);

  console.log("movieDetail : ", movieDetail);
  console.log("trailerData : ", trailerData);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {movieDetail?.title} 예고편
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube
            videoId={trailerData?.key}
            opts={{
              width: "100%",
              height: "300",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={props.onHide}
            style={{
              background: "none",
              color: "darkred",
              border: "solid 1px darkred",
            }}
            className="close_modal"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Container>
      <Suspense fallback={<LodingSpinner />}>
        <Row>
          {/* 영화 포스터 */}
          <Col md={6} xs={12} className="movie_posterBox">
            <img
              className="movie_poster"
              src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movieDetail?.poster_path}`}
              alt="포스터 이미지"
            />
          </Col>

          {/* 영화 정보 */}
          <Col md={6} xs={12} className="movieInfoBox">
            <div className="speakLan">
              <span>언어 지원 : </span>
              {movieDetail?.spoken_languages.map((item) => (
                <div>{item.english_name}</div>
              ))}
            </div>

            <div className="movieBig_info">
              <div className="movieTitle">{movieDetail?.title}</div>
              <div>{movieDetail?.tagline ? movieDetail.tagline : null}</div>
              <div>평점 : {movieDetail?.vote_average.toFixed(1)}</div>
              <div>인기도 : {movieDetail?.popularity.toFixed(1)}</div>
            </div>
            <div className="movieOverview">{movieDetail?.overview}</div>

            <div className="movieRowData">
              <div className="rowLabel">에산</div>
              <div className="rowValue">
                {movieDetail?.budget?.toLocaleString()} 원
              </div>
            </div>

            <div className="movieRowData">
              <div className="rowLabel">수익</div>
              <div className="rowValue">
                {movieDetail?.revenue.toLocaleString()} 원
              </div>
            </div>

            <div className="movieRowData">
              <div className="rowLabel">개봉일</div>
              <div className="rowValue">{movieDetail?.release_date}</div>
            </div>

            <div className="movieRowData">
              <div className="rowLabel">상영 시간</div>
              <div className="rowValue">{movieDetail?.runtime} 분</div>
            </div>

            <button className="review_btn" onClick={() => setModalShow(true)}>
              예고편 보기
            </button>
          </Col>
        </Row>

        {/* 댓글부분 */}
        <Row style={{ marginTop: "1rem" }}>
          <Col className="reviewContainerBox">
            {reviewData?.results.map((item, index) => (
              <div
                className="reviewBox"
                style={{
                  maxHeight: expanded[index] ? "none" : "200px",
                  overflow: "hidden",
                }}
              >
                <div>{item.author}</div>
                <div className="reviewContent">{item.content}</div>
                <div>{item.updated_at.toLocaleString("ko-KR")}</div>

                {item.content.length > 200 && (
                  <button
                    className="showMoreButton"
                    onClick={() =>
                      setExpanded((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                  >
                    {expanded[index] ? "접기" : "더보기"}
                  </button>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Suspense>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default MovieDetailPage;
