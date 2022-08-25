import React from "react";
import { StyledCard } from "../Styles/Card.styled";

const Card = (props) => {
  return <StyledCard onClick={props.onClick}>{props.children}</StyledCard>;
};

export default Card;
