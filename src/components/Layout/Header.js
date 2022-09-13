import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledLogo } from "../Styles/Header.styled";

const Header = () => {
  const navigate = useNavigate();

  const backToHomePageHandler = () => {
    navigate("/react-recipes");
  };

  return (
    <StyledHeader>
      <StyledLogo onClick={backToHomePageHandler}>React Recipes</StyledLogo>
    </StyledHeader>
  );
};

export default Header;
