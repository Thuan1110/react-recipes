import React from "react";
import FilterRecipes from "../components/Recipes/FilterRecipes";
import RecipesList from "../components/Recipes/RecipesList";
import SearchForm from "../components/Recipes/SearchForm";

const Home = () => {
  return (
    <React.Fragment>
      <SearchForm />
      <FilterRecipes />
      <RecipesList />
    </React.Fragment>
  );
};

export default Home;
