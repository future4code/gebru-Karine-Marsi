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
//--------------------------------------------ApplicationFormPage-------------------
export const ApplicationFormPage = styled.div `

background-color:grey; 
background-size: cover;
background-repeat: no-repeat;
height: 97.9vh;
font-family:'Roboto',sans-serif;



h2 {
    display: flex;
    justify-content: center;
    color: white;
}


header {
 border: 2px solid black;
 background-color: #98c1d9;
 padding: 30px;
 display: flex;
 justify-content: space-between;

}

button{
display: inline-block;
padding: 0.35em 1.2em;
border: 0.1em solid #FFFFFF;
margin: 0 0.3em 0.3em 0;
border-radius: 0.5em;
box-sizing: border-box;
text-decoration: none;
font-family:'Roboto',sans-serif;
font-size:medium;
color: white;
text-align:center;
transition: all 0.2s;
background-color: black;

}


:hover{
    color:#000000;
    background-color:#e5e5e5;
}


form { 
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


}
`
//--------------------------------------- ListTripsPage----------------------------

export const Cards = styled.div`
border: 2px solid black;
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 30vh;
width: 30vw;
border-radius: 10px;
margin-top: 4vh;
background-image: url(${fundo});
background-repeat: no-repeat;
background-size: cover;
color: white;
box-shadow: 0 0 0.5em white;

p{
    margin-left: 1.5vw;
    font-size: 0.9em ;
}
`

export const DivCards = styled.div`
margin-top: 12vh;
margin-left: 3vw;
background-color: black;
font-family:'Roboto',sans-serif;
`
//-------------------------------LoginPage------------------------------------
export const ContainerLogin = styled.div `

.botão-enviar{
background-color: white;
color: black
}

h2{
    color: white;
    margin-top: 10vh;
}

*{
    margin: 0;
    padding: 0;
    font-family:'Roboto',sans-serif;
}

background-size: cover;
width:100%;
height: 97.8vh;
background-repeat: no-repeat;
button{
display: inline-block;
padding: 0.35em 1.2em;
border: 0.1em solid #FFFFFF;
margin: 0 0.3em 0.3em 0;
border-radius: 0.5em;
box-sizing: border-box;
text-decoration: none;
font-family:'Roboto',sans-serif;
font-size:medium;
color: white;
text-align:center;
transition: all 0.2s;
background-color: black;
}

:hover {
    color:#000000;
    background-color:#e5e5e5;
}

`
//---------------------------------------------TripDetails --------------------------------------------------------------

export const ContainerTripDetails = styled.div`
display: flex
`


