import React, { useContext } from "react";
import { Jumbotron, Container, Form,} from "react-bootstrap";
import styled from "styled-components";
import MyButton from "./Button";
import { BookContext } from "../context/BookContext";
import { Redirect } from "react-router-dom";
import books from "../img/home-book.jpg";
import { Link } from "react-router-dom";


const Header = () => {
  const {
    search,
    getSearch,
    fetchData,
    startIndex,
    restartIndex,
    isLoading,
    error,
    errorMessage,
  } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    restartIndex();
    if (startIndex === 0) return fetchData();
  };


  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
<Styles>
<Jumbotron fluid className="jumbo">
  <Container>
        <Link
          onClick={refreshPage}
          style={{
          textDecoration: "none"}}
          to="/">
        <h1 className="jumbo_h1"> Webooks {""} </h1>
        </Link>{" "}
    <Form onSubmit={handleSubmit}>
      <Form.Group className ="Navbar">
        <Form.Control
        value={search}
        onChange={getSearch}
        type="text"
        placeholder="Search.."
        style={{ maxWidth:'60rem', justifyContent:"center"}}>
        </Form.Control>

        <span>
        {error ? (
        <p style={{ margin: "6px 0 0 -200px", 
        color: "black",
        fontSize: "16px"
        }}>{errorMessage}</p>
        ) : (
          ""
        )}
        </span>

        <MyButton className="my-btn"></MyButton>
        {isLoading ? (
        <p style={{ margin: "8px 0 0 30px", 
        color:"black",
        fontSize: "17px",
        textShadow:"0 0 black"}}>Loading...</p>
          ) : (
        <Redirect to="/" />
          )}

      </Form.Group>
    </Form>
  </Container>
</Jumbotron>
</Styles>
  );
};

const Styles = styled.div`

  .jumbo {
    background-image: url(${books});
    background-position: center;
    background-size: cover;
    min-height: 650px;
    
  }
  .jumbo_h1 {
    text-align: center;
    font-family: 'EB Garamond', serif;
    font-weight: auto;
    font-size: 4.7rem;
    text-shadow: 2px 2px #CCC;
    color: DarkSlategrey;
    padding-top: 8rem;
  }
  .Navbar{
   display: flex;
   justify-content:center;
   }

`;

export default Header
