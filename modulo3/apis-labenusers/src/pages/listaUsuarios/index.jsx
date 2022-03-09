import React from "react";
import axios from "axios";

class listaUsuarios extends React.Component {
  state = {
    usersList: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    try {
      const res = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "karine-silva-gebru",
          },
        }
      );

      this.setState({ usersList: res.data });
    } catch (err) {
      console.log(err.response);
    }
  };

  deleteUser = async (userId) => {
    try {
      const res = await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
          headers: {
            Authorization: "karine-silva-gebru",
          },
        }
      );

      alert("Usuário deletado com sucesso!");
      this.getAllUsers();
    } catch (err) {
      console.log(err.response);
    }
  };

  render() {
    const renderedUsersList = this.state.usersList.map((user) => {
      return (
        <UserCard key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => this.deleteUser(user.id)}>
            Apagar {user.name}
          </button>
        </UserCard>
      );
    });

    return (
      <div>
        <h3>Tela com a Lista de Pessoas Usuárias</h3>
        {renderedUsersList}
        <button onClick={this.props.goToSignUpScreen}>Ir para Cadastro</button>
      </div>
    );
  }
}

export default listaUsuarios;
