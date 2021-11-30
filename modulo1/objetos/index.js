 //Exercicio de interpretação 

 // 1. Elenco:Matheus Nathetergaele 
 //    64
 //    Transmissão de hoje: Globo, horário 14H
//  2. 
//  a. cachorro Juca
//     gato Jubo

//  b. Os tres pontos contem os valores das outras consts.

// 3. 

// a. false 
//    undefined 
// b. Não criamos a chave altura e portanto ela não foi encontrada.

// Exercicio de escrita de código 

//1.a 
	// body...
// const apelidos= {

// 	nome: "Karine", 
// 	apelidos:["Kakau","Kah","Kau"]
//  }


// const meusApelidos =(pessoa)=> {

// const frase = `Olá meu nome é ${pessoa.nome}, mas você pode me chamar de: ${pessoa.apelidos[0]}, 
// 	${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`

// 	console.log (frase) 

// }

// meusApelidos(apelidos)
 

//  const novosApelidos ={
//  	...meusApelidos,
 	
//  	nome:"Karine",
//  	apelidos:["Nakia","Okoye","Rochelle"]

// }

// meusApelidos(novosApelidos)

//2.


// let carrinho = [] 
// const pessoa1 = {

// 	nome: "Karine",
// 	idade: 36,
// 	profissao:"Desenvolvedora"

// }

// const pessoa2 = {

// 	nome:"Teresa",
// 	idade: 56,
// 	profissao:"Costureira"

// }

// let array1 =[]
// let array2 =[]


// const pessoas = (obj1,obj2) => {

//     array1.push(obj1.nome, obj1.nome.length,obj1.idade,obj1.profissao,obj1.profissao.length )
//     array2.push(obj2.nome, obj2.nome.length,obj2.idade,obj2.profissao,obj2.profissao.length)
//     let array3 = [array1,array2]
    
//     return  array3
// }

//  console.log (pessoas(pessoa1,pessoa2))

// const carrinho = []
// const fruta1 = {nome: "atemoia",disponibilidade:true}
// const fruta2 = {nome: "morango",disponibilidade:true}
// const fruta3 = {nome: "banana",disponibilidade: true}

// const paraCarrinho = fruta => carrinho.push(fruta)

// paraCarrinho(fruta1)
// paraCarrinho(fruta2)
// paraCarrinho(fruta3)

// console.log (carrinho)

// const disponibilidade = obj => {

// 	obj.disponibilidade = !obj.disponibilidade

// 	return obj
// 
}
 // 
 console.log(disponibilidade(carrinho[0]))



//DESAFIOS 

// const objeto = () => {

// 	const nome = prompt("Qual é o seu nome?")
// 	const idade = Number(prompt("Qual é a sua idade?"))
// 	const profissao = prompt("Qual a sa profissão?")

// 	const usuario = {
//         nome: nome,
// 		idade: idade,
// 		profissao: profissao
// 	}

    
// 	console.log (usuario,typeof usuario)
// }

// objeto()


const filme = () => {

	const filme1 = {

		anoDeLancamento:2001,
		nomeDoFilme: "O Senhor dos Anéis" 
	}

 const filme2 = {

 		anoDeLancamento:2001,
 		nomeDoFilme: "Harry Potter e a Pedra Filosofal"


 }

console.log (`O primeiro filme foi lançado antes do segundo ${filme1.anoDeLancamento < filme2.anoDeLancamento}`) 

console.log (`O primeiro filme foi lançado no mesmo ano que o segundo ${filme1.anoDeLancamento === filme2.anoDeLancamento}`)

}

filme()

