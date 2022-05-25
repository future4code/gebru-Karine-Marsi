import React from "react";
import styled from "styled-components";
import axios from "axios";

const quantidadeMusicas = 50;

const DivPlaylist = styled.div`
  margin: 0;
  top: 0;
  display: flex;
`;

const [playlists, setPlaylists] = useState({})

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

// React.useEffect(() => {
//   console.log("passou aqui")
//   axios.get(url, {
//     headers: {
//       'Authorization': 'karine-silva-gebru'
//     }
//   }).then((response) => {
//     setPlaylists(response.data)
//   })))
// })


function teste() {
  console.log("passou aqui")
  axios.get(url, {
    headers: {
      'Authorization': 'karine-silva-gebru'
    }
  }).then((response) => {
    setPlaylists(response.data)
  })
}

const Playlist = (props) => {
  return (
    <>
      <div>
        <h4>PLAYLIST</h4>
        <h1>{props.nomePlaylist}</h1>
        <p>{props.descricao}</p>

        <span>
          Criado por {props.usuario} - {quantidadeMusicas} músicas
        </span>

        <ul>
          <li>Título</li>
          <li>Artista</li>
        </ul>

        <p>{playlists.list}</p>
        <ul></ul>

        <button onClick={teste()}></button>
      </div>
    </>
  );
};

export default Playlist;
