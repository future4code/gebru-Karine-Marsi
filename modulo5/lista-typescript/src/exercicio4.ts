
enum SETORES {
    MARKETING = "marketing", 
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
    }
    
    type PessoasColaboradoras = { 
    nome:string, salário: number, setores:SETORES, presencial: boolean
    
    }

 const funcionarios =
[
	{ nome: "Marcos", salário: 2500, setor:SETORES.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor:SETORES.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor:SETORES.FINANCEIRO , presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor:SETORES.VENDAS , presencial: true},
	{ nome: "Paola" ,salário: 3500, setor:SETORES.MARKETING, presencial: true }
]

const funcionariosPresenciais = () => {

  const funcionariosMarketing = funcionarios.filter(marketing => marketing.setor === SETORES.MARKETING && marketing.presencial === true)
  console.log (funcionariosMarketing)
}

console.log(funcionariosPresenciais())