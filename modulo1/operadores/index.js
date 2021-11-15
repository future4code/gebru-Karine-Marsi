//Exercício de escrita

//Exercício 1 ================================================================

// let idade = Number(prompt("Qual a sua idade?")) 
// let idadeAmigo = Number(prompt("Qual a idade do seu amigo?"))
// console.log(`Sua idade é maior do que a do seu amigo? ${idade>idadeAmigo}`)

// console.log(`A diferença de idade entre vocês é ${idadeAmigo-idade}`)

// Exercício 2 ================================================================

// let par = Number(prompt("Digite um número par"))
// console.log(`O resto da divisão é: ${par % 2}`)
// O padrão para um número par é dar sempre 0,pois não tem resto num divisão por um numero par. 
// Sempre que for impar o esto será 1. 

// Exericio 3 ==================================================================

// let idade = Number(prompt(" Qual é a sua idade?"))
// console.log(idade*12)
// console.log (idade*365)
// console.log(idade*(365*24))

//Exercício 4 ===================================================================

// let num1 = Number(prompt("Digite um número"))
// let num2 = Number(prompt("Digite um outro número"))
// console.log(`O primeiro número é maior que o segundo?${num1>num2}`)
// console.log(`O primeiro número é igual ao segundo?${num1===num2}`)
// console.log(`O primeiro número é divisivel pelo segundo?${num1%num2===0}`)
// console.log(`O segundo número é divisivel pelo primeiro?${num2%num1===0}`)

// // Desafios 
// 1. a
// let kelvin = 77 - 32*(5/9) + 273.15
// let fahrenheit = 80 * (9/5) + 32
// let celsius = 30 + 273.15

// b.
// console.log("O Valor de 77°F é de",kelvin)
// console.log("O valor de 80°C é de",fahrenheit)
// console.log("O valor de 30°C é de",fahrenheit)
// console.log("O valor de 30°C é de",kelvin)
// c

// celsius = Number(prompt("Digite o valor em Celsius que você deseja converter"))
// console.log(celsius* (9/5) + 32)
// console.log(celsius+273.15)

//2.

//a. 
 
 // let valorKW = 0.05
 // let consumoResidencia = 280
 // let desconto = 0.15
 // let valorTotal = consumoResidencia*valorKW
 //b.
 
 // console.log(`O valor a ser pago pela residencia é de:${valorTotal}`)
 // console.log(`O valor do desconto será de:${valorTotal-(valorTotal*desconto)}`)
 
 //3.

 let libras = 30
 let oz = 10.5
 let mi = 100
 let ft = 50
 let gal = 103.3
 let xic= 450

let librasParakg = libras / 2.205 
   console.log(`30 libras equivalem a:${librasParakg.toFixed(2)}kg`)

let ozParakG = oz / 35.274
   console.log(`10.5 oz equivalem a:${ozParakG.toFixed(2)}kg`)

let milhasParaMetro = mi * 1609 
   console.log(`100mi equivalem a:${milhasParaMetro.toFixed(2)}m`)

 let ftParaMetro = ft / 3.281
   console.log(`50ft equivalem a:${ftParaMetro.toFixed(2)}m`)
 
 let galaoParaLitro = gal * 3.785
   console.log(`103.56gal equivalem a:${galaoParaLitro.toFixed(2)}l`)
 
 let xicaraParaLitro = (xic * 6)/25
   console.log(`450 xic equivalem a: ${xicaraParaLitro.toFixed(2)}l`) 

 xic = Number(prompt("Digite o valor em Xicaras que você deseja converter"))
 xicaraParaLitro = (xic * 6)/25

 console.log(xicaraParaLitro)

