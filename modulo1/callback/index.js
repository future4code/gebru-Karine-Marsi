	// EXERCICIO DE INTERPRETAÇÃO 

	// A.Vai imprimir todos os valores do array.
	// B.Vai imprimir apenas os nomes que estão dentro do array.
	// C.Vai imprimir apenas Chijo.

	// ESCRITA DE CÓDIGO

	//1. item A

// 	const pets = [

// 	{nome: "Lupin", raca:"Salsicha"},
// 	{nome: "Polly", raca:"Lhasa Apso"},
// 	{nome:"Madame", raca:"Poodle"},
// 	{nome: "Quentinho", raca:"Salsicha"},
// 	{nome:"Caramelo", raca:"Vira-Lata"},
// 	]

// 	    let novoArrayA = pets.map((item,index,array) => {
// 		 return  item.nome
// 	})

// 	  console.log(novoArrayA)

// 	// Item B 

// 	 		let novoarrayB = pets.filter((item,index,array) =>{
// 	 			return item.raca == "Salsicha"
// 	 })

// 			console.log  (novoarrayB)

	// item C 

	        // let novoArrayC = pets.filter(item => item.raca === "Poodle").map(item => 
	        // 	console.log(`Você ganhou um cupon de desconto de 10% para tosar o/a ${item.nome}`))

	//EXERCICIO 2 

// 	//item A 

// 	const produtos = [
// 	   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
// 	   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
// 	   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
// 	   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
// 	   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
// 	   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
// 	   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
// 	   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
// 	   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
// 	   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// 	]



// 	     let arrayProdutosA = produtos.map((item,index,array) =>{
// 	     	return item.nome
// 	     })

// 	     console.log(arrayProdutosA)
// 	 //item B 
// 	    const arrayProdutosB = produtos.map((item,index,array)=>{
// 	    	return {nome:item.nome,preco:(item.preco * 0.95).toFixed(2)}
// 		}) 

// 		console.log(arrayProdutosB) 

// 	 //itemC

// 	 		let arrayProdutosC = produtos.filter((item,index,array) =>{
// 	 			return item.categoria === "Bebidas"
// 	 })

// 			console.log(arrayProdutosC)
// 	//itemD

// 	        let novoarrayD = produtos.filter((item,index,array) =>{
// 	 			return item.nome.includes("Ypê")
// 	 })

// 			console.log  (novoarrayD)

// 	//itemE

// 	       let arrayProdutosD = produtos.filter(item => item.nome.includes("Ypê")).map(item => 
// 	       	console.log (`Compre ${item.nome} porR$ ${item.preco}0`))

// 	// Deasfios 
            
//             const pokemons = [
//    { nome: "Bulbasaur", tipo: "grama" },
//    { nome: "Bellsprout", tipo: "grama" },
//    { nome: "Charmander", tipo: "fogo" },
//    { nome: "Vulpix", tipo: "fogo" },
//    { nome: "Squirtle", tipo: "água" },
//    { nome: "Psyduck", tipo: "água" },
// ]

//           const novoarrayP = pokemons.map((item,index,array)=>{

//           return item.nome
//           })

//           console.log(novoarrayP.sort())

//           const novoarrayRepetição = pokemons.map((item,index,array)=> item.tipo)

// 		 console.log(new Set(novoarrayRepetição))
