import express, { Request, Response } from "express";
import cors from "cors";
import {produtos} from "./data"

const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
//1
app.get("/test", (req:Request, res:Response) => {


  res.send( "Teste!")}
)

//2



//3
app.post("/test", (req:Request, res:Response) => {
  try{
    const { id, name , price} = req.body
    if(!id || !name || !price){


      throw new Error(" Por favor digite o nome e o preço do produto")

    }
    produtos.push({id, name, price})
     res.send (produtos)

  } catch(error:any){
    res.send(error.message);

  }


})

//4
app.put("/editeproduto", (req:Request, res:Response) =>{


});

//5  

app.put("/editeproduto", (req:Request, res:Response)=>{

    const{ name,price} = req.body
    produtos.filter ((p) =>{
        if(name === p.name) {p}
    })

.map((p) =>{
    p.price =price
})

res.send(produtos)

})
