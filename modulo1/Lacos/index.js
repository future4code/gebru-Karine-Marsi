// Exercicio interpretação de código 

// 1.O código está somando os valores, e verificando se é menor que 5, quando chega no 10 ele sai do loop. 
// 2. Verificou quais dos números eram menor que 18 e os imprimiu no console.
// 3.  A impressão seria: */ **/***/****


//

// const pets = Number(prompt("Quantos pets você tem?"))

// if (pets === 0){

// 	console.log("Que pena, você pode adotar um pet!")

// }else{

// 	let nomesDosPets =[]

// 	for (let i = 0; i < pets ; i++){
// 		nomesDosPets.push (prompt("Digite o nomes dos seus pets"))		

// 	}  	
// 	console.log (nomesDosPets)
//}
//2. 
//a.
const arrayOriginal = [2,3,4,5,6,8,9,10,12]

for(let i= 0; i < arrayOriginal.length;i++){
	console.log( arrayOriginal [i])
 
}

//b
 
for(let i= 0; i < arrayOriginal.length;i++){
	console.log(arrayOriginal [i]/10)
	}  
                                                            
//c

const array2 =[]

for(let i= 0; i < arrayOriginal.length;i++){      

	if(arrayOriginal[i] % 2){
 		array1.push(arrayOriginal[i])
     
 console.log (array2)
}
 letraC = (arrayOriginal)

 
//d
   
   let array = [i]
	
	for(let i= 0; i < arrayOriginal.length;i++){
	  array.push(`O elemento do índex é ${arrayOriginal[i]}`)    
}
}
 	console.log (letraD)

  
//e
   
 let valorMaximo = 0
 let valorMinimo = 1000
  
 for(let i = 0; i < arrayOriginal.length;i++){

 	if(arrayOriginal[i] < valorMinimo){
   		 
  		 valorMinimo = arrayOriginal[i]
	}
  	
  else if (arrayOriginal[i] > valorMaximo){
  		
 		valorMaximo = arrayOriginal[i]
	
	}
  }   

  console.log(`O maior  número é ${valorMaximo} e o menor número é ${valorMinimo}`)
   