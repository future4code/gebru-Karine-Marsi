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
  button{
    background-color: black;
    opacity: 0.6;
    border:none;
    width:15vw;
    height:8vh;
    color:#fff;
    margin-left: 1rem;
    border-radius: 5vh;

}
h1{
    font-size: 4.2rem;
    /* animation: flicker 1.5s infinite alternate;  */
    color:#5f0a87;
    font-family: "Helvetica Neue", sans-serif;
    opacity:0.8;
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
}
`
//--------------------------------------------ApplicationFormPage----------------------------------------------
export const ApplicationFormPage = styled.div `

background-color:grey; 
background-size: cover;
background-repeat: no-repeat;
height: 97.9vh;
font-family:'Roboto',sans-serif;



h2{
    display: flex;
    justify-content: center;
    color: white;
}
`


export const Formulario = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10vh;


input, select {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


button{
    background-color: black;
    opacity: 0.6;
    border:none;
    width:15vw;
    height:8vh;
    color:#fff;
    margin-left: 1rem;
    border-radius: 5vh;

`


