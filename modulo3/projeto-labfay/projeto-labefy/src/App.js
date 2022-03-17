import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import cadastroUsuarios from "./pages/cadastroUsuarios";
import listaUsuarios from "./pages/listaUsuarios";

state = {
renderedScreen: 'signUp'

}
escolhaDaTela = () => {
 switch (this.state.renderesScreen) {

  case 'signUp':

    return <cadastroUsuarios goTolistadoUsuarios = {this.goTolistadoUsuarios}/>
    case 'Lista de usuários ':
  
    return <listaUsuarios goTocadastroUsuarios= {this.goTocadastroUsuarios}/>
     default: 
     return <h2>Erro! Tela não encontrada</h2>
 }
 
}
goTocadastroUsuarios= () => {
  this.setState({escolhaDaTela:'signUp'})
}
goTolistadoUsuarios= () => {

  this.setState({escolhaDaTela:'Lista de usuários'})
}

class App extends React.Component {
  render() {
    return (
      <>
      
        <Header />
        <Home />
        <Footer />
        {this.escolhaDaTela()}
        
       
      </>
    );
  }
}
export default App;
