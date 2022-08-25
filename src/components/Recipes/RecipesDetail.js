import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchInstructions,
  fetchRecipesInfo,
  recipeAction,
} from "../../redux/recipes-slice";
import { StyledButton, StyledButtonContainer } from "../Styles/Button.styled";
import {
  StyledDetails,
  StyledImage,
  StyledIngredients,
} from "../Styles/Details.styled";
import Loader from "../UI/Loader";

const RecipesDetail = (props) => {
  const { id } = props.params;
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.recipes.ingredients);
  const isLoading = useSelector((state) => state.recipes.isLoading);
  const image = useSelector((state) => state.recipes.image);
  const title = useSelector((state) => state.recipes.title);
  const steps = useSelector((state) => state.recipes.steps);
  const isClicked = useSelector((state) => state.recipes.isClicked);

  useEffect(() => {
    dispatch(fetchRecipesInfo(id));
    dispatch(fetchInstructions(id));
  }, [dispatch, id]);

  const buttonClickHandler = () => {
    dispatch(recipeAction.toggle());
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <StyledDetails>
          <StyledImage>
            <p>{title}</p>
            <img src={image} alt="" />
          </StyledImage>

          <StyledIngredients>
            <StyledButtonContainer>
              <StyledButton isClicked={isClicked}>
                <button onClick={isClicked ? buttonClickHandler : null}>
                  Ingredients
                </button>
              </StyledButton>
              <StyledButton isClicked={!isClicked}>
                <button onClick={!isClicked ? buttonClickHandler : null}>
                  Instruction
                </button>
              </StyledButton>
            </StyledButtonContainer>
            {!isClicked &&
              ingredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}

            {isClicked &&
              steps.length > 0 &&
              steps.map((step) => (
                <li key={step.number}>
                  <span>Step {step.number} :</span> {step.step}
                </li>
              ))}

            {isClicked && steps.length === 0 && (
              <div>No instructions found</div>
            )}
          </StyledIngredients>
        </StyledDetails>
      )}
    </>
  );
};

export default RecipesDetail;
