import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Cabeca from "./cabeca";


function Match() {

  const [usuario, setUsuario] = useState({});
  const [listaMatch, setListaMatch] = useState([]);

  const pegaFotos = async () => {
    await axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/almeida/person`
      )
      .then((response) => {
        setUsuario(response.data.profile);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    pegaFotos();
  }, []);

const gostei = (id) => {
  const body = {
    id: usuario.id, 
    choice: true
  }
  axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/almeida/choose-person", 
  body,
  {
    headers:{
      Autorization:"almeida"
    }
  }
  ).then(res=>{
    
    console.log(res.data)
  }).catch(error=>{
    alert("erro")
  })

}

  return (
    <Box>
      <Cabeca />
      <Box2>
        <img src={usuario.photo} />
      </Box2>
        <p>{usuario.bio}</p>
        <p>{usuario.name}, {usuario.age} </p>
        <button onClick={() => gostei(usuario.id)}>match</button>
        <button>X</button>
    </Box>
  );
}


export default Match;