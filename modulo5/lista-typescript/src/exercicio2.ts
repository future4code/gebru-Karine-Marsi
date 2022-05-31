// exercicio2 
// Crie uma função que receba um parâmetro qualquer 
//  que imprima no console o tipo da variável

const exercicio2ReturnString = (varivelqualquer: any): string => {

	const tipo = typeof (varivelqualquer)

	return `Exercicio 2 : Esta varivel é do tipo : ${tipo} `
}



