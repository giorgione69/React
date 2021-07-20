import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Book = (props) => {
  const { title, authors, img, id } = props;

 return (
  <Col sm={6} md={4} lg={3} className="d-flex">
    <Styles>
      <Card 
        className="cardbook"
        style={{ width: "270px", height:"auto", margin:"15px" }}> 
      
      <Card.Img className="movie"
        variant="top"
        style={{ minHeight: "200px", objectFit: "cover" }}
        src={img}> 
      </Card.Img>
        {" "}
      <Card.Body className="flex-fill">
        <Card.Title> {title} </Card.Title>{" "}
        <Card.Text>
            {" "}
            {authors.length > 1 ? authors[0] + " and others." : authors}{" "}
        </Card.Text>
      </Card.Body>
        <Card.Footer>
          <Link to={"/" + id.toString()}
          className="infolink"> More Info</Link>
        </Card.Footer>
        
      </Card>
    </Styles>
  </Col>
  );
};

const Styles = styled.div`

.cardbook{
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  text-shadow: 0 1px #CCC;
}

.infolink{
  font-size: 18px;
}

.movie {
  border-radius: 3px;
  transform-style: preserve-3d;
  transition: all 250ms ease;
  transform: translateZ(-40px);
}

.movie:hover{
  transform: rotate3d(0, -1, 0, 0)
  translate(-15px, -15px);
  box-shadow: 7px 10px 15px rgba(0, 0, 0, 0.35);
}

`;
export default Book;
