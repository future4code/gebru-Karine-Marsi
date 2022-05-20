let operacao = process.argv [2]
const num1 = Number( process.argv[3])
const num2 = Number (process.argv [4])
let soma =  num1 + num2
let sub= num1-num2
let mult = num1*num2
let div = num1/num2
if (operacao === "soma"){

 console.log(soma) 
} else if ( operacao === "sub"){
    console.log(sub)
} else if ( operacao === "mult"){
    console.log(mult)
} else { console.log(div)}






