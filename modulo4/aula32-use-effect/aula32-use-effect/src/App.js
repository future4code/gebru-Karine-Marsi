import  React ,  {  useEffect ,  useState  }  from  "react" ;
import  "./styles.css" ;
import  axios  from  "axios" ;
import PokeCard  from  "./components/PokeCard/PokeCard" ;


const  App  =  ( )  =>  {
  const  [ pokeList ,  setPokeList ]  =  useState ( [ ] ) ;
  const  [ pokeName ,  setPokeName ]  =  useState ( '' ) ;


  useEffect (  ( )  =>  {
      axios
        . get ( "https://pokeapi.co/api/v2/pokemon/?limit=151" )
        . então ( resposta  =>  {
          //função que está setando no estado os 151 pokemons
          setPokeList ( resposta.dados.resultados ) ; 
        } )
        . cath ( err  =>  {
          consola . log ( err ) ;
        } ) ;
  } , [ ] )

  const  changePokeName  =  ( event )  =>  {
    setPokeName ( event . target . value ) ;
  } ;

    return  (
      < div  className = "Aplicativo" >
        { /* evento onChange chama toda vez que o usuário
        escolhe um novo pokemon no dropdown */ }
        < select  onChange = { changePokeName } >
          < option  value = { pokeName } > Nenhum </ option >
          { /* renderizando uma lista de pokemons como opções do select */ }
          { pokeList . mapa ( pokémon  =>  {
            return  (
              <option key  = { pokémon . nome } valor = { pokémon . nome } > 
                { pokémon . nome }
              </ option >
            ) ;
          } ) }
        </ select >
        { /* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */ }
        { pokeName  &&  < PokeCard  pokemon = { pokeName }  / > }
      </ div >
    ) ;
  }


export  default App;
     