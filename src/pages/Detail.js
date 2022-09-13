import React from "react";
import { useParams } from "react-router-dom";
import RecipesDetail from "../components/Recipes/RecipesDetail";

const Detail = () => {
  const params = useParams();

  return <RecipesDetail params={params} />;
};

export default Detail;
