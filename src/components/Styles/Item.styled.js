import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Item = styled.li`
  img {
    width: 16rem;
    height: 150px;
    object-fit: cover;
    border-radius: inherit;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const StyledNav = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  text-decoration: none;
  color: white;
  background-color: #494949;
  margin: 1rem;
  cursor: pointer;
  font-size: 0.8rem;

  svg {
    font-size: 1.2rem;
  }

  &.active {
    background-color: #f27221;
    color: white;
  }
`;
