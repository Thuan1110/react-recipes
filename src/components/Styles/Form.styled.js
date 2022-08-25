import styled from "styled-components";

export const StyledForm = styled.div`
  width: 100%;
  text-align: center;

  input {
    width: 40%;
    height: 3rem;
    font-size: 24px;
    line-height: 30px;
    border-radius: 5px;
    padding: 1rem;
  }

  input::placeholder {
    opacity: 0.4;
    font-size: 1rem;
  }
`;
