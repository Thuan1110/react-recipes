import React from "react";
import { useParams } from "react-router-dom";
import RecipesDetail from "../components/Recipes/RecipesDetail";

const Detail = () => {
  const params = useParams();

  return (
    <div>
      <RecipesDetail params={params} />
    </div>
  );
};

export default Detail;
