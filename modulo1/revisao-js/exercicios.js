// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
 return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   const numerosPares = array.filter(N => N % 2 === 0)
   return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

  let numerosPares = array.filter(pares =>(pares%2)===0).map(pares =>(pares**2))
  return numerosPares
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {

   let maiorNumero = 0 
   
   for (let i = 0; i < array.length; i++) { 
      if (maiorNumero < array[i]) { maiorNumero = array[i] } }
         return maiorNumero
   }

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

  let maiorNumero = Math.max(num1,num2)
  let menorNumero = Math.min(num1,num2)
  let objeto = {
   maiorNumero:maiorNumero,
   maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
   diferenca: maiorNumero - menorNumero
}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

   const numerosPares = []
   for (let i = 0; i < n ; i++){

      numerosPares.push(2 * i)   
   }
   return(numerosPares)
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC){
   if ( ladoA === ladoB && ladoA === ladoC){
      return "Equilátero"
   } if( ladoA=== ladoB || ladoA === ladoC || ladoB === ladoC){
      return "Isósceles"
   } else {
     return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

  const arrayOrdenado = array.sort((a,b) => a - b)
  const segundoMaior = arrayOrdenado [arrayOrdenado.length -2]
  const segundoMenor = arrayOrdenado[1]
  const resultado = [segundoMaior,segundoMenor]

  return resultado 
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 let novoObjeto = {...pessoa,nome:"ANÔNIMO"}
 return novoObjeto
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
let pessoasAutorizadas = pessoas.filter(pessoa => (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60))
    
    return pessoasAutorizadas
}



// // EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
 let pessoasNaoAutorizadas = pessoas.filter(pessoa => pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade > 60)
    return pessoasNaoAutorizadas
    }




// // EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

 for (obj of contas) { 
   for (compra of obj.compras) { 
      obj.saldoTotal = obj.saldoTotal - compra } 
      obj.compras = [] 
       return contas
 
}
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

   return consultas.sort(a,b) =>a.nome.localeCompare(b.nome)
  
   
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}