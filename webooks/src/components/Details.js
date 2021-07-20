import React, { useEffect, useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Container, Card, Row, Col} from "react-bootstrap";
import axios from "axios";
import _ from "lodash";
import noImg from "../img/no-image.jpg";
import styled from "styled-components";

const Details = (props) => {
  const { setError, displayError } = useContext(BookContext);
  const [id, setId] = useState();
  const noData = "Dato non disponibile";

  useEffect(() => {
    let mounted = true;
    const fetchDataById = async () => {
      try {
        setError(false);
        let newId = props.match.params.details_id;
        const result = await axios(
          "https://www.googleapis.com/books/v1/volumes/" + newId
        );
        if (mounted) {
          setId(result.data.volumeInfo);
        }
      } catch (err) {
        setError(true);
        displayError();
      }
    };

    fetchDataById();
    return () => {
      mounted = false;
    };
    
   // eslint-disable-next-line
  }, []);

  return (
<Container>
  <Row>
    <Col md={2} className="text-right">
      <Styles>
        <Card className="book_items">
        <Card.Img className="noImg_book"
          style={{
          height: "auto", maxWidth:"250px"}}
          src={_.get(id, "imageLinks.thumbnail", noImg)}> 
          </Card.Img>
        </Card>
      </Styles>
    </Col>
    <Col md={10}>
      <Card bg="Light" className="mb-2">
      <Card.Header> {_.get(id, "title", noData)} </Card.Header>
        <Card.Body>
          <Card.Title>
            Sottotitolo: {_.get(id, "subtitle", noData)}
          </Card.Title>
        <Card.Text>
          Descrizione: {_.get(id, "description", noData)}
        </Card.Text>
          <hr />
          <ul style={{ listStyle: "none" }}>
            <li>Lingua: {_.get(id, "language", noData)}</li>
            <li>Data di pubblicazione: {_.get(id, "publishedDate", noData)}</li>
            <li>Pubblicato da: {_.get(id, "publisher", noData)} </li>
            <li>Numero di pagine: {_.get(id, "pageCount", noData)}</li>
            <li>Book Link:
                <a href={_.get(id, "canonicalVolumeLink", "")}>
                  {" " + _.get(id, "canonicalVolumeLink", noData)}
                </a>
            </li>
            </ul>
        </Card.Body>
          <Card.Footer className="blockquote-footer">
            Autori: {_.get(id, "authors", noData)}
          </Card.Footer>
      </Card>
    </Col>
  </Row>
</Container>
  );
};


const Styles = styled.div`

.book_items{  
  top: 10px;
  right: -15px;
  border-radius: 3px;
  transform-style: preserve-3d;
  transition: all 250ms ease;
  transform: translateZ(-40px);
}
.book_items:hover{
  transform: rotate3d(0, -1, 0, 0)
  translate(0, -5px);
  box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.25); 
}
`;

export default Details;
