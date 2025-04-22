import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();

    // url 변경
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div className="appLayoutWholeContainer">
      <Navbar
        bg="black"
        data-bs-theme="dark"
        variant="dark"
        expand="lg"
        // className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="/" className="logo">
            NETFLIX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav>
            <Form
              className="d-flex"
              onSubmit={(event) => searchByKeyword(event)}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
