import logo from './logo.svg';
import './App.css';
import React from 'react'
import styled from 'styled-components'

const Inputs= styled.div`
grid-row: 2;


`


const BalaodeChat = styled.li`

width:200px;
height:100px;
background-color:blue;
grid-row: 1;

`
const BoxMesseger = styled.div `

display: grid;
grid-template-rows: 1fr 70px
width: 50vw;
margin: 1% auto;
max-width: 70%;
min-width: 8%;
align-items: flex-end;
height: 90vh;
margin-bottom: 1em;
word-wrap: break-word;
padding: 0.9em 0.8em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 1px 3px 3px 1px ;
  background:#B452CD ;


`
class App extends React.Component {

  state = {

    inputNome: '',
    inputMessage: '',

    mensagens: [{
      nome: "",
      mensagem: ""
    }],
  }

  addMessage = () => {
   const novaMensagem = {

      nome: this.state.inputNome,
      mensagem: this.state.inputMessege

    };
    const addNovaMensagem = [...this.state.mensagens, novaMensagem];
    this.setState({
      mensagens: addNovaMensagem
    })
    this.setState({
      valorInputMensagem: "",
      valorInputusuario: ""
    });
  }



setInputNome = evento => {
  this.setState({
    inputNome: evento.target.value
  })
}
setMessage = evento => {
  this.setState({
    inputMessage: evento.target.value
  })
}


render() {
const mensagensFormatadas = this.state.mensagens.map(mensagem =>{
  return (
    <BalaodeChat>
      <h4>{mensagem.inputNome}</h4>
      <p>{mensagem.inputmessage}</p>
    </BalaodeChat>

  )
}) 
  return ( 
    <BoxMesseger >
   {mensagensFormatadas}
   <Inputs>
    
    <input placeholder = {'Rementente'}
    value = {this.state.inputNome }
    onChange = {evento => this.setInputNome (evento)}/> 

    <input placeholder = 'Mensagem'
    value = {this.state.inputMessage}
    onChange = {evento => this.setMessage (evento)}/> 
    
    <button onClick = { this.addMessage}>ENVIAR </button>
    </Inputs>

</BoxMesseger>
  );

}
}



export default App;