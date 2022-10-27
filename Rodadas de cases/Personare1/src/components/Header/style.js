import styled from "styled-components";
import fundo from "../../assets/bg-roxo.jpg";

export const Container = styled.header`
  background-image: url(${fundo});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2%;

  h1 {
    margin-bottom: 30px;
    font-family: "Roboto";
    color:white;
  }
`;
