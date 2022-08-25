import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "../../hooks/use-debounce";

import { createSearchParams, useNavigate } from "react-router-dom";
import { searchRecipes } from "../../redux/recipes-slice";
import { StyledForm } from "../Styles/Form.styled";

const SearchForm = () => {
  const [enteredText, setEnteredText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const debouncedSearchTerm = useDebounce(enteredText, 1000);

  const navigationHandler = (text) => {
    if (text.trim().length === 0) {
      navigate("/");
    } else {
      navigate({
        search: `?${createSearchParams({
          name: text,
        })}`,
      });
    }
  };

  const changeTextHandler = (event) => {
    setEnteredText(event.target.value);
    navigationHandler(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(searchRecipes(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch]);
  return (
    <StyledForm>
      <input
        placeholder="Please enter a food name"
        type="text"
        value={enteredText}
        onChange={changeTextHandler}
      />
    </StyledForm>
  );
};

export default SearchForm;
