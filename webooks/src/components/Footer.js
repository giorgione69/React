import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const MyFooter = () => {
return (
  <Styles style={{ marginTop: "auto" }}>
    <footer className="footer d-flex align-items-center">
    <Container>
    <Row>
    <Col> Project React: Giorgio Polese </Col>
    </Row>
    </Container>
    </footer>
  </Styles>
  );
};

const Styles = styled.div`
 
.footer {
    text-align: right;
    min-width: 100%;
    margin-top:10px;
    font-family: 'EB Garamond', serif;
    font-size: 1,3rem;
    height: 3rem;
    background: linear-gradient(to right, #DCD2CC, #EDE7DC);
  }
`;

export default MyFooter;
