import './App.css';
import Etapa1 from './components/Etapa1'
import React from 'react'
import  styled from 'styled-components'

const Button = styled.button`
display: flex;
margin: 0 auto;
text-align: center;
align-items: center;
margin-bottom: 2%;
margin-top: 1%;

`


class App extends React.Component {


  render(){
 
       return ( 
        <div>
           <div>
            <Etapa1 />
            </div>
        
             <div>
              <Button> Próxima Etapa </Button>
        
            </div>
      </div>
      ) 



      }
    } 
 
export default App;
