import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
`
const Button = styled.button`

`



class App extends React.Component {
  state = {
    nomeusuario: "",
    fotoUsuario: "",
    fotoPost: "",

    postState: [
      { id: 1, nomeusuario: 'paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
      { id: 2, nomeusuario: 'Kakau', fotoUsuario: 'https://picsum.photos/id/1009/50/50', fotoPost: 'https://picsum.photos/id/1004/200/150' },
      { id: 3, nomeusuario: 'kakau', fotoUsuario: 'https://picsum.photos/id/1011/50/50', fotoPost: 'https://picsum.photos/id/102/200/150' }
    ]
  }
  setNomeUsuario = evento => {
    this.setState({ nomeusuario: evento.target.value })
  }
  setFotoUsuario = evento => {
    this.setState({ fotoUsuario: evento.target.value })
  }
  setFotoPost = evento => {
    this.setState({ fotoPost: evento.target.value })
  }
  postar = () => {

    const novoPost = {
      id: Math.random(),
      nomeusuario: this.state.nomeusuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost

    }

    const copiaPostState = [...this.state.postState, novoPost]
    this.setState({ postState: copiaPostState })
  }



  render() {
    const listaDePosts = this.state.postState.map((post) => {
      return <Post
        nomeUsuario={post.nomeusuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    });

    return (
      <MainContainer>
        <Input placeholder='nomeusuario' value={this.state.nomeusuario} onChange={evento => this.setNomeUsuario(evento)} />
        <Input placeholder='fotoUsuario' value={this.state.fotoUsuario} onChange={evento => this.setFotoUsuario(evento)} />
        <Input placeholder='nomePost' value={this.state.fotoPost} onChange={evento => this.setFotoPost(evento)} />
        <Button onClick={this.postar}>Enviar</Button>

        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;