import styled from "styled-components";

export const StyledDetails = styled.div`
  width: 100%;
  display: flex;
  margin: 5rem 0;

  img {
    width: 350px;
    height: 200px;
    object-fit: cover;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      text-align: center;
    }
  }
`;

export const StyledImage = styled.div`
  width: 45rem;
  padding: 0 10rem;
  @media (max-width: 768px) {
    max-width: fit-content;
    padding: 1rem;
    text-align: center;
  }
`;

export const StyledIngredients = styled.div`
  width: 40rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
    padding-top: 1rem;
  }
  span {
    font-weight: 500;
  }
  @media (max-width: 768px) {
    max-width: fit-content;
    padding: 1rem;
    text-align: left;
  }
`;
