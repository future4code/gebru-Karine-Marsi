import React from 'react';
import axios from 'axios';


class cadastroUsuarios extends React.Component {
    state = {

        nameInput :'',
        emailInput : ''
    }
    handlenameInput = (evente) => {
        this.setState({nameInput: evente.target.value})
    }

    handleemailInput = (evente) => {
        this.setState({emailInput: evente.target.value})
    }

    createUser = async () => {
        const url =
          'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    
        const body = {
          name: this.state.nameInput,
          email: this.state.emailInput
        }
    
        try {
          const res = await axios.post(url, body, {
            headers: {
              Authorization: 'karine-silva-gebru'
            }
          })
    
          alert(`Usuário ${this.state.nameInput} criado com sucesso!`)
          this.setState({ nameInput: '', emailInput: '' })
        } catch (err) {
          alert(err.response.data.message)
        }
      }
    
      render() {
        return (
          <div>
            <h3>Tela de Cadastro de Pessoas Usuárias</h3>
            <div>
              <input
                placeholder="Insira seu nome"
                value={this.state.nameInput}
                onChange={this.handleNameInput}
              />
              <input
                placeholder="Insira seu email"
                value={this.state.emailInput}
                onChange={this.handleEmailInput}
              />
              <button onClick={this.createUser}>Cadastrar</button>
            </div>
            <br />
            <button onClick={this.props.goToUsersListScreen}>
              Ir para Lista de Pessoas Usuárias
            </button>
          </div>
        )
      }
    }
    
    export default cadastroUsuarios
    