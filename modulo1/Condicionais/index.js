//INTERPRETAÇÃO DE CÓDIGO 
//1.
//A- Ele vai analizar o numero que o usuario inserir 
// dentro nas condiçoes inseridas, se o numero for divisivel por 2 passa no teste, senão for não passa.
//B- pares 
//C- impares 

//2.
//A - Automatizar tarefas de um supermercado.
//B - 2.25 
//C - 
//3.
//A - Pedindo ao usuário para digitar um primeiro número.
//B - Imprimiria - Esse número passou no teste e se for um numero menor que 10 imprimirá 
// essa mensagem é secreta. 
//C- 

//EXERCÍCIOS DE ESCRITA DE CÓDIGO 

//1 

// const numero = Number(prompt("Insira a sua idade"))

// 	if ( numero >= 18) {
    
//     console.log("Você pode dirigir")

// } else {
	
// 	console.log("Você não pode dirigir")
// }

//2.

// const periodo = prompt(" Digite M (matutino, V ( vespertino) ou N (noturno) para o periodo que vc estuda")

//    if (periodo === "M"){
// 	console.log ("Bom dia!")
// } else if (periodo === "V"){
//  	console.log("Boa tarde!")
// } else if (periodo === "N"){
//  	console.log ("Boa noite")
// }
// 3.
//const periodo = prompt(" Digite M (matutino, V ( vespertino) ou N (noturno) para o periodo que vc estuda")
// switch (periodo){

// case ("M"):
//  	console.log ("Bom Dia!") 
//  break
//  case("V"):
//  	console.log("Boa Tarde!")
//  break 
//  case ("N"):
//  	console.log("Boa Noite")
//  default: 
//  	console.log ("Deu ruim!")
//  break
// }
//4
// const generoDoFilme  = prompt(" Qual o genero do filme que vamos assistir?")
// const ValorDoIngresso = Number( prompt("Qual o valor do ingresso?"))

// const deuBom = (filme,ValorDoIngresso)=> {

// if (ValorDoIngresso <=15){
// 	console.log ("Bom filme!")
// }else {
// 	 console.log ("Escolha outro filme :(")
// }
// }
// deuBom()

//DESAFIOS 

const generoDoFilme  = prompt("Qual o genero do filme que vamos assistir?")
const lanchinho = prompt("Qual snack que você quer comprar?")
const ValorDoIngresso = Number( prompt("Qual o valor do ingresso?"))

const deuBom = (filme,ValorDoIngresso,lanchinho) => {
     
if (ValorDoIngresso <=15){
	console.log (deuBom ("Bom filme!Aproveite seu "lanchinho "")
}else {
	 console.log ("Escolha outro filme")
}

deuBom (generoDoFilme,lanchinho,ValorDoIngresso)