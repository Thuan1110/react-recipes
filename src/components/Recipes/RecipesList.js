import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomRecipes } from "../../redux/recipes-slice";
import RecipesItem from "./RecipesItem";
import { ListContainer } from "../Styles/List-Container.styled";
import Loader from "../UI/Loader";

const RecipesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomRecipes());
  }, [dispatch]);
  const recipesList = useSelector((state) => state.recipes.recipesList);
  const isLoading = useSelector((state) => state.recipes.isLoading);

  return (
    <ListContainer>
      {isLoading && <Loader />}
      {!isLoading && (
        <ul>
          {recipesList.length > 0 &&
            recipesList.map((recipe) => (
              <RecipesItem
                key={recipe.id}
                title={recipe.title}
                img={recipe.image}
                id={recipe.id}
              />
            ))}
        </ul>
      )}
    </ListContainer>
  );
};

export default RecipesList;
