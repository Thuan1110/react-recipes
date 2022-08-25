import styled from "styled-components";

export const StyledButton = styled.div`
  button {
    width: 100px;
    height: 40px;
    background-color: ${(props) => (props.isClicked ? "white" : "black")};
    color: ${(props) => (props.isClicked ? "black" : "white")};
    border: 1px solid black;
    font-weight: bold;
  }
  &:hover button {
    cursor: pointer;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 250px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`;
