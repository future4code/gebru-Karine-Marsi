import { LoginComponents, StyleInput,StyleButton } from "./style";
import React from "react";


const handleClick = () => {
  console.log("cliquei")
}

const Input = () => {
  return (
    <LoginComponents>
      <label for="login">LOGIN</label>
      <StyleInput id="login" placeholder="Digite seu e-mail"></StyleInput>

      <label for="nome"> Nome</label>
      <StyleInput id="nome" placeholder="Escreva aqui o seu nominho"></StyleInput>

      <StyleButton onClick={handleClick}> Entrar </StyleButton>
    </LoginComponents>

  );
};

export default Input;