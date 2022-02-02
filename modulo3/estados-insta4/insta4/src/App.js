import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}

        />
        <Post
          nomeUsuario={'Kakau'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sunset_in_Manaus.jpg/640px-Sunset_in_Manaus.jpg'}
        />
        <Post
          nomeUsuario={'Kakau'}
          fotoUsuario={'https://picsum.photos/50/50'}

          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>


    );
  }
}

export default App;
