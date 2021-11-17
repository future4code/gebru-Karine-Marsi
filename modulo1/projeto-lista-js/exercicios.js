// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number(prompt("Digite a atura"))
let largura = Number(prompt("Digite a largura"))
let area = altura * largura 
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual")) 
  let anoDeNAscimento = Number(prompt("Digite o ano de nascimento"))
  let Idade = anoAtual - anoDeNAscimento
  console.log(Idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let IMC = peso/(altura*altura)
  return(IMC)
  

}

// EXERCÍCIO 04
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
function imprimeInformacoesUsuario() {
  let nome = prompt("Digite aqui o seu nome")
  let idade = Number (prompt("Digite a sua idade por favor"))
  let email = prompt("Digite agora o seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cores = []
    cores[0] = prompt("Digite uma cor")
    cores[1] = prompt("Digite uma segunda cor")
    cores[2] = prompt("Digite uma terceira cor")

console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui


const firstElement = array.shift();
return firstElement
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui


return array[array.length-1]

} 

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
    
 let array2 = array.slice()
     array2[array.length-1]= array [0]
     array2[0]= array [array.length-1]
 return array2

}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

 
 return string1.toUpperCase() ===string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

let anoAtual = Number(prompt(`Degite o ano atual`))
let anoDeNAscimento = Number(prompt(`Digite o ano do seu nascimento`))
let emissaoDoRG = Number(prompt(`Digite a data de emissão do seu RG`))
let idadeDoUsuario = anoAtual - anoDeNAscimento

if(idadeDoUsuario <= 20) {
console.log ((anoAtual - emissaoDoRG) >= 5)

} else if(idadeDoUsuario > 20 && idadeDoUsuario <= 50) {
console.log ((anoAtual - emissaoDoRG) >= 10)

} else if(idadeDoUsuario > 50) {
console.log ((anoAtual - emissaoDoRG) >= 15)
}
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


if ((ano % 4 === 0 ) && (ano % 100 != 0) || (ano % 400 === 0)) {

  return true
} else {

return false 
}


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  // implemente sua lógica aqui

  let resposta1 =prompt("Tem mais de 18 anos?")
  let resposta2 =prompt("Tem ensino médio completo?")
  let resposta3 =prompt("Tem disponibilidade de horários?")

  if((resposta1 === resposta2) && (resposta2 === resposta3) && (resposta3 === resposta1)) {

    return true
  
  } else {

    return false 
  }






}