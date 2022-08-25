import React from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "../Styles/Item.styled";

import Card from "../UI/Card";

const RecipesItem = (props) => {
  const { title, img, id } = props;
  const navigate = useNavigate();

  const handleItemClicked = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <Item>
      <Card onClick={handleItemClicked}>
        <img src={img} alt="" />
        <p>{title}</p>
      </Card>
    </Item>
  );
};

export default RecipesItem;
