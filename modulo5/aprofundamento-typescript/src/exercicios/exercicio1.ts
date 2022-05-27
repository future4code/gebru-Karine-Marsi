
type Objeto = {
    nome: string
    idade: number
    corFavorita: ArcoIris
}

enum ArcoIris {
    VERMELHO = "Vermelho",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja"
}

const pessoa: Objeto = {
 nome: "Douglas",
 idade: 28,
corFavorita: ArcoIris.AZUL
}

const pessoa2: Objeto = {
    nome: "Kakau",
    idade: 36,
    corFavorita: ArcoIris.AMARELO
}

const pessoa3: Objeto ={
    nome: "Elisa",
    idade: 19,
    corFavorita: ArcoIris.ANIL
}