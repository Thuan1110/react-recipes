import React, { useEffect } from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks } from "react-icons/gi";
import { MdRamenDining } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCuisine } from "../../redux/recipes-slice";
import { StyledNav } from "../Styles/Item.styled";
import { StyledList } from "../Styles/List-Container.styled";

const FilterRecipes = () => {
  const params = useParams();
  console.log(params.type);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCuisine(params.type));
  }, [dispatch, params.type]);

  return (
    <StyledList>
      <StyledNav to="/home/cuisine/american">
        <FaPizzaSlice />
        American
      </StyledNav>
      <StyledNav to="/home/cuisine/vietnamese">
        <FaHamburger />
        Vietnamese
      </StyledNav>
      <StyledNav to="/home/cuisine/thai">
        <MdRamenDining />
        Thai
      </StyledNav>
      <StyledNav to="/home/cuisine/chinese">
        <GiChopsticks />
        Chinese
      </StyledNav>
    </StyledList>
  );
};

export default FilterRecipes;
