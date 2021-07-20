import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BookContext } from "../context/BookContext";

const ChangeIndex = () => {
  const { startIndex, getIndex, books, error, fetchData } = useContext( BookContext );

  useEffect(() => {
    if (books.length) fetchData();
    // eslint-disable-next-line
  }, [startIndex]);

return (
  <Container style={{ marginTop: "10px" }}>
    <Row>
      <Col>
        Risultati: {startIndex} - {startIndex + 10}{" "}
      </Col>{" "}
      <Col className="text-right">
          <button
            disabled={error || !books.length}
            className="btn btn-outline-info"
            onClick={getIndex}
            value="-"
            style={{
              width: "40px",
              marginRight: "10px"
            }}> - </button>{" "}

          <button
            disabled={error || !books.length}
            className="btn btn-outline-info"
            onClick={getIndex}
            value="+"
            style={{
              width: "40px",
            }}> + </button>{" "}

        </Col>{" "}
    </Row>{" "}
  </Container>
  );
};

export default ChangeIndex;
