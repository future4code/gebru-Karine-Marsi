import express, { Request, Response } from "express";
import cors from "cors";
import { calculaIdade } from "./idade";

const app = express();
app.use(express.json());
app.use(cors());


type User = {
  name: string;
  cpf: string;
  dataDeNascimento: string;
  saldo: number;
  extrato: Extrato[];
 
};
 
type Extrato ={
  data: string; 
  descricao: string; 
  valor: number
}

const usuarios: User[] = [
  {
    name: "Karine",
    cpf: "352.530.868.03",
    dataDeNascimento: "03/08/1985",
    saldo: 25000,
    extrato: [{ data: "06/06/2022", descricao: "Ração dos cães", valor: 147 }],
    
  },
  {
    name: "Rodrigo",
    cpf: "123.350.758.00",
    dataDeNascimento: "25/10/1986",
    saldo: 6000,
    extrato: [{ data: "06/06/2022", descricao: "Mercado", valor: 136 }],
   
  },
];

app.post("/users", (req: Request, res: Response) => {
  const name = req.body.name;
  const cpf = req.body.cpf;
  const dataDeNascimento = req.body.data;
  const saldo = 0;
  
  const extrato: any = [];
  const transacao: any = [];

  const idade = calculaIdade(dataDeNascimento);
  if (idade < 18) {
    res.send("Volte quando tiver 18 anos");
  } else {
    usuarios.push({
      name: name,
      cpf: cpf,
      dataDeNascimento: dataDeNascimento,
      saldo: saldo,
      extrato: extrato,
    
    });
    res.send(usuarios);
  }
});

app.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});
app.post("/saldo", (req: Request, res: Response) => {
  const name = req.body.name;
  const cpf = req.body.cpf;
  usuarios.forEach(function (usuario) {
    if (usuario.cpf === cpf){ 
      res.send(usuario.saldo);
    }
  });
});

app.post("/adicionarsaldo", (req: Request, res: Response) => {

const name = req.body.name;
const cpf = req.body.cpf;
const valor =req.body.valor;

usuarios.forEach(function (usuario) {
  if (usuario.cpf === cpf){
    usuario.saldo += valor; 
    res.send(usuario.saldo);
  }
});

});
app.post("/pagarconta", (req: Request, res: Response) => {
  
  const cpf = req.body.cpf;
  const valorConta = req.body.conta;
  const dataDopagamento = req.body.dataDopagamento;


});













app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});