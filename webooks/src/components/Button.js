import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

const MyButton = (props) => {
return (
  <Styles>
    <Button className="my-btn" type="submit">
      {props.text}
      <i className="fas fa-search"></i>
    </Button>
  </Styles>
  );
};

const Styles = styled.div`
  .my-btn {
    background-color: lightgrey;
    border:none;
    height: 2.4rem;  
    &:hover {
      background-color: #808080;
    }
    &:active {
      background-color: #808080 !important;
    }
  }
`;

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MyButton;
