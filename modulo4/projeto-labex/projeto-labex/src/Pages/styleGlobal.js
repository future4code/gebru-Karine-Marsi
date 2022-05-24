import styled from "styled-components";
import imageHome from "../img/universo.jpg";

//----------------------- Home --------------------------------
export const HomePageContainer = styled.div`
  background-image: url(${imageHome});
  height: 99.99vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    background-color: black;
    opacity: 0.6;
    border: none;
    width: 15vw;
    height: 8vh;
    color: #fff;
    margin-left: 1rem;
    border-radius: 5vh;
  }
  h1 {
    font-size: 4.2rem;
    /* animation: flicker 1.5s infinite alternate;  */
    color: #5f0a87;
    font-family: "Helvetica Neue", sans-serif;
    opacity: 0.8;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
      0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  }
`;
//--------------------------------------------ApplicationFormPage-------------------
export const ApplicationContainer = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(90, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  background-size: cover;
  background-repeat: no-repeat;
  height: 97.9vh;
  font-family: "Roboto", sans-serif;

  h2 {
    display: flex;
    justify-content: center;
    color: white;
  }

  header {
    /* border: 2px solid black; */
    padding: 30px;
    display: flex;
    justify-content: space-between;
    /* font-size: 4.2rem; */

    color: #5f0a87;
    font-family: "Helvetica Neue", sans-serif;
    opacity: 0.8;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
      0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  }

  button {
    background-color: black;
    opacity: 0.6;
    border: none;
    width: 15vw;
    height: 8vh;
    color: #fff;
    margin-left: 1rem;
    border-radius: 5vh;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;

    input,
    select {
      width: 30%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
  }
`;
//--------------------------------------- ListTripsPage----------------------------

export const Cards = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* height: 30vh; */
  width: 40vw;
  border-radius: 10px;
  margin-top: 4vh;
  color: white;
  box-shadow: 0 0 0.5em white;
  background-color: #161b22c4;

  button {
    background-color: black;
    opacity: 0.6;
    border: none;
    width: 10vw;
    height: 8vh;
    color: #fff;
    border-radius: 5vh;
  }

  p {
    margin-left: 1.5vw;
    font-size: 0.9em;
  }
`;

export const DivCards = styled.div`
  margin-top: 12vh;
  margin-left: 3vw;
  background-color: black;
  font-family: "Roboto", sans-serif;
`;
export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 30%,
    rgba(148, 187, 233, 1) 100%
  );
`;

//-------------------------------LoginPage------------------------------------
export const ContainerLogin = styled.div`
  .botão-enviar {
    background-color: white;
    color: black;
  }

  h2 {
    color: white;
    margin-top: 10vh;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  background-size: cover;
  width: 100%;
  height: 97.8vh;
  background-repeat: no-repeat;
  button {
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 0.1em solid #ffffff;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.5em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-size: medium;
    color: white;
    text-align: center;
    transition: all 0.2s;
    background-color: black;
  }

  :hover {
    color: #000000;
    background-color: #e5e5e5;
  }
`;
//---------------------------------------------TripDetails --------------------------------------------------------------

export const ContainerTripDetails = styled.div`
  display: flex;
`;
